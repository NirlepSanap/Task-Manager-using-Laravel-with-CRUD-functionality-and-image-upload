import React from 'react';
import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Index = ({ tasks }) => {
  const deleteTask = (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      router.delete(`/tasks/${id}`);
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <Link
          href="/tasks/create"
          className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add New Task
        </Link>

        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="border p-4 rounded shadow-sm">
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-400">
                  Due: {task.due_date ?? 'N/A'}
                </p>
                {task.image && (
                  <img
                    src={`/storage/${task.image}`}
                    alt="task"
                    className="w-32 h-32 object-cover mt-2 rounded"
                  />
                )}
                <div className="mt-4 space-x-2">
                  <Link
                    href={`/tasks/${task.id}/edit`}
                    className="text-green-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
