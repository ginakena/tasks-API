-- CreateTable
CREATE TABLE "Tasks" (
    "tasks_id" TEXT NOT NULL,
    "tasks_title" TEXT NOT NULL,
    "tasks_description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("tasks_id")
);
