import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Timeline from '../components/timeline'
import Container from '../components/container'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I'm Adham
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          This is a work in progress!
          I'm a Software Engineer from Egypt. 
          I currently work for Statsbomb.
          A leading Sports Data Company in England
        </h2>
        <Timeline />
      </div>
    </Container>
  )
}
