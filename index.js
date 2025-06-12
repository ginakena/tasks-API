import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const client = new PrismaClient()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Tasks API</h1>")
})

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await client.tasks.findMany();
        res.status(200).json(tasks) 
    } catch (error) {      
        res.status(500).json({ message: "It's not you! It's us😩"})
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const {title, description} = req.body
        const newTask = await client.tasks.create({
            data: {
                title,
                description
            }
        })
        res.status(201).json(newTask) 
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "It's not you! It's us😩"})
    }
});

app.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const task = await client.tasks.findUnique({
            where: {
                id: id  
            }
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found 😢" });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ message: "It's not you! It's us😩" });
    }
});

app.patch("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTask = await client.tasks.update({
            where: { id },
            data: {
                title,
                description
            }
        });

        res.status(200).json(updatedTask);
    } catch (error) {        
        res.status(500).json({ message: "Update failed 😩" });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await client.tasks.delete({
            where: { id }
        });

        res.status(200).json({ message: "Task deleted successfully ✅", deletedTask });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Failed to delete task 😩" });
    }
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
