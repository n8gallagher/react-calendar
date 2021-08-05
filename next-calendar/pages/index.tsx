import styles from '../styles/Home.module.css'
import Calendar from '../componenets/calendar/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Next Calendar</h1>
      <main className={styles.main}>
        <Calendar></Calendar>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}