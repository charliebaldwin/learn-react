import Image from 'next/image'
import EntryList from './components'

//use 'npm run dev' to open nextJS server

export default function Home() {
  return (
    <body>
      <h1>hi!</h1>
      <EntryList />
    </body>
  )
}
