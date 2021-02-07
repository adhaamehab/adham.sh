import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Timeline from '../components/timeline'
import Container from '../components/container'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Timeline />
      </div>
    </Container>
  )
}
