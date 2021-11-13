import Post from '../components/Post'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen py-2 flex-1 px-20 text-center bg-gray-100">
      <Post />
    </main>
  )
}
