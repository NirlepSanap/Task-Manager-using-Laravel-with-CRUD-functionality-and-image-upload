import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    due_date: '',
    image: null,
  });

 const submit = (e) => {
  e.preventDefault();
  post('/tasks', {
    forceFormData: true,
  });
};

  return (
    <AuthenticatedLayout>
      <Head title="Create Task" />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="w-full border p-2"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label>Description:</label>
            <textarea
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="w-full border p-2"
            />
            {errors.description && <p className="text-red-500">{errors.description}</p>}
          </div>

          <div>
            <label>Due Date:</label>
            <input
              type="date"
              value={data.due_date}
              onChange={(e) => setData('due_date', e.target.value)}
              className="w-full border p-2"
            />
          </div>

          <div>
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => setData('image', e.target.files[0])}
              className="w-full border p-2"
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
