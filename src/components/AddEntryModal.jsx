import EntryForm from "./EntryForm"

function AddEntryModal({ onClose , onAddEntry}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Add New Entry
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

       <EntryForm onAddEntry={onAddEntry} />

      </div>
    </div>
  )
}

export default AddEntryModal