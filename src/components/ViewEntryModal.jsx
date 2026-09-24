function ViewEntryModal({ entry, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {entry.title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-gray-500">
          {entry.date}
        </p>

        <img
          src={entry.image}
          alt={entry.title}
          className="mt-4 h-64 w-full rounded-lg object-cover"
        />

        <p className="mt-4">
          {entry.content}
        </p>

      </div>
    </div>
  )
}

export default ViewEntryModal