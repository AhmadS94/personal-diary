import { useState } from "react"

function EntryForm({onAddEntry}) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState("https://picsum.photos/400/250?random=3")
  const [content, setContent] = useState("")

  
  function handleSubmit(event) {
    event.preventDefault()
    if (!title || !date || !image || !content) {
  alert("Please fill in all fields.")
  return
}

    const newEntry = {
      id: Date.now(),
      title,
      date,
      image,
      content,
    }

    onAddEntry(newEntry)
  }


  return (
    <form onSubmit={handleSubmit} className="mt-6">

      <div className="mb-4">
        <label className="mb-1 block">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-lg border p-2"
           required
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="w-full rounded-lg border p-2"
           required
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block">
          Image URL
        </label>

        <input
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="w-full rounded-lg border p-2"
           required
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block">
          Content
        </label>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows="5"
          className="w-full rounded-lg border p-2"
           required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black px-4 py-2 text-white"
      >
        Save Entry
      </button>

    </form>
  )
}

export default EntryForm