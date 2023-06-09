import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas | Organize suas tarefas de forma fácil</title>
      </Head>

      <h1>Meu Projeto</h1>
    </div>
  )
}
