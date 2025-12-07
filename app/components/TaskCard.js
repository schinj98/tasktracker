'use client';

import { Pencil, Trash2 } from 'lucide-react';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 break-words">
          {task.title}
        </h3>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="p-2 rounded hover:bg-gray-100 text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-700 text-sm mt-2 break-words">
          {task.description}
        </p>
      )}

      <div className="mt-4 flex justify-between items-center">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full
            ${
              task.status === 'To Do'
                ? 'bg-gray-100 text-gray-700'
                : task.status === 'In Progress'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
            }`}
        >
          {task.status}
        </span>

        <span className="text-xs text-gray-500">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
