import styles from '../styles/Home.module.css'
import Calendar from '../componenets/calendar/calendar'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Next Calendar</h1>
      <h4>by n8gallagher</h4>
      <main className={styles.main}>
        <Calendar></Calendar>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}