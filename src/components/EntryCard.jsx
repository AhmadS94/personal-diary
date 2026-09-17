function EntryCard({ entry }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md">
      <img
        src={entry.image}
        alt={entry.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <p className="mb-2 text-sm text-gray-500">
          {entry.date}
        </p>

        <h2 className="text-xl font-semibold">
          {entry.title}
        </h2>
      </div>
    </article>
  )
}

export default EntryCard