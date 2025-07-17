import React, { useState } from 'react';

const initialBatches = [
  { id: 1, name: 'Batch A', trainer: 'John Doe', students: 25 },
  { id: 2, name: 'Batch B', trainer: 'Jane Smith', students: 30 },
];

const Batch = () => {
  const [batches, setBatches] = useState(initialBatches);
  const [showModal, setShowModal] = useState(false);
  const [editBatch, setEditBatch] = useState(null);
  const [form, setForm] = useState({ name: '', trainer: '', students: '' });

  const openAddModal = () => {
    setEditBatch(null);
    setForm({ name: '', trainer: '', students: '' });
    setShowModal(true);
  };

  const openEditModal = (batch) => {
    setEditBatch(batch);
    setForm({ name: batch.name, trainer: batch.trainer, students: batch.students });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditBatch(null);
    setForm({ name: '', trainer: '', students: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.trainer || !form.students) return;
    if (editBatch) {
      setBatches((prev) =>
        prev.map((b) => (b.id === editBatch.id ? { ...b, ...form, students: Number(form.students) } : b))
      );
    } else {
      setBatches((prev) => [
        ...prev,
        { id: Date.now(), ...form, students: Number(form.students) },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this batch?')) {
      setBatches((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Batch Management</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          + Add Batch
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-blue-100">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Batch Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Trainer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"># Students</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-50">
            {batches.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-400">No batches found.</td>
              </tr>
            ) : (
              batches.map((batch) => (
                <tr key={batch.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{batch.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{batch.trainer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{batch.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => openEditModal(batch)}
                      className="text-blue-600 hover:underline mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(batch.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              {editBatch ? 'Edit Batch' : 'Add Batch'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trainer</label>
                <input
                  type="text"
                  name="trainer"
                  value={form.trainer}
                  onChange={handleChange}
                  className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Students</label>
                <input
                  type="number"
                  name="students"
                  value={form.students}
                  onChange={handleChange}
                  className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min={1}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {editBatch ? 'Update Batch' : 'Add Batch'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Batch; 