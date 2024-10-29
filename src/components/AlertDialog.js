import React from "react";

export const AlertDialog = ({ open, onClose, title, description }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
