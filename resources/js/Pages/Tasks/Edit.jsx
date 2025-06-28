  import React from 'react';
  import { useForm, Link, Head, router } from '@inertiajs/react'; // ✅ added router
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

  export default function Edit({ task }) {
    const { data, setData, processing, errors } = useForm({
      title: task.title || '',
      description: task.description || '',
      image: null,
      due_date: task.due_date || '',
    });

    const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('due_date', data.due_date);
  if (data.image) {
    formData.append('image', data.image);
  }

  formData.append('_method', 'put');

  router.post(`/tasks/${task.id}`, formData, {
    forceFormData: true,
    preserveScroll: true,
  });
};


    return (
      <AuthenticatedLayout>
        <Head title="Edit Task" />
        <div className="p-6 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Edit Task</h1>

          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Due Date</label>
              <input
                type="date"
                value={data.due_date}
                onChange={(e) => setData('due_date', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files[0])}
                className="w-full"
              />
              {task.image && (
                <img
                  src={`/storage/${task.image}`}
                  alt="Task Image"
                  className="w-32 h-32 object-cover mt-2 rounded"
                />
              )}
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>

            <div className="flex justify-between">
              <Link href="/tasks" className="text-gray-600 hover:underline">← Back</Link>
              <button
                type="submit"
                disabled={processing}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                {processing ? 'Updating...' : 'Update Task'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    );
  }
