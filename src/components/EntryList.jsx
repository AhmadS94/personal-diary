import EntryCard from './EntryCard.jsx'

function EntryList({entries, onSelectEntry}){
    const sortedEntries = [...entries].sort((a,b)=>new Date(b.date) - new Date(a.date))
    return(
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
           { sortedEntries.map((entrie)=>(
                <EntryCard key={entrie.id} entry={entrie} onSelectEntry={onSelectEntry}>

                </EntryCard>
            ))
}
        </div>

    )
}
export default EntryList