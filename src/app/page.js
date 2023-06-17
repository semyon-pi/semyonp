import Image from 'next/image'
import Hero from './components/Hero'
import Project from './components/Project'
import Articles from './components/Articles'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Project />
      <Articles />
    </main>
  )
}
