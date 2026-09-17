import Header from "./components/Header"; 
import EntryList from './components/EntryList'
function App(){

  const entries = [
    {
      id: 1,
      title: 'A Day at the Beach',
      date: '2026-09-15',
      image: 'https://picsum.photos/400/250?random=1',
      content: 'Today I spent a beautiful day at the beach.',
    },
    {
      id: 2,
      title: 'Learning React',
      date: '2026-09-14',
      image: 'https://picsum.photos/400/250?random=2',
      content: 'Today I learned more about React components and props.',
    },
  ]

  return(
    <div>
      <Header/>E
      <EntryList entries={entries}/>
    </div>
  )
}
export default App