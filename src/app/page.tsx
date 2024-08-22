import FindUsers from '@/app/components/find-users'
import AllUsers from './components/all-users'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap xl:flex-nowrap justify-between p-5 lg:p-10 lg:px-5 bg-[#262b40]">
      <FindUsers />
      <AllUsers />
    </main>
  )
}
