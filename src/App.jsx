import Header from "./components/Header"
import EntryList from "./components/EntryList"
import { useState, useEffect } from "react"
import AddEntryModal from "./components/AddEntryModal"
import ViewEntryModal from "./components/ViewEntryModal"

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)

  const [entries, setEntries] = useState(() => {
    
    const savedEntries = localStorage.getItem("DiaryEntries")
   

    if (savedEntries) {
      return JSON.parse(savedEntries)
    }

    return [
      {
        id: 1,
        title: "A Day at the Beach",
        date: "2026-09-15",
        image: "https://picsum.photos/400/250?random=1",
        content: "Today I spent a beautiful day at the beach.",
      },
      {
        id: 2,
        title: "Learning React",
        date: "2026-09-14",
        image: "https://picsum.photos/400/250?random=2",
        content: "Today I learned more about React components and props.",
      },
    ]
  })

  useEffect(() => {
    localStorage.setItem(
      "DiaryEntries",
      JSON.stringify(entries)
    )
  }, [entries])

  function handleAddEntry(newEntry) {
    const entryExists = entries.some(
      (entry) => entry.date === newEntry.date
    )

    if (entryExists) {
      alert(
        "You already have an entry for this day. Please come back tomorrow."
      )
      return
    }

    setEntries([...entries, newEntry])
    setIsAddModalOpen(false)
  }

  return (
    <div>
      <Header
        onAddEntry={() => setIsAddModalOpen(true)}
      />

      <EntryList
  entries={entries}
  onSelectEntry={setSelectedEntry}
/>

      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onAddEntry={handleAddEntry}
        />
        
      )}
      {selectedEntry && (
  <ViewEntryModal
    entry={selectedEntry}
    onClose={() => setSelectedEntry(null)}
  />
)}
    </div>
  )
}

export default App