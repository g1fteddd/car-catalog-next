import Link from 'next/link'
import React from 'react'
import styles from "./Header.module.css"

//TODO: 25 минута гдето
const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
        <Link href="/">Home</Link>
        <Link href="/about">About Page</Link>
    </header>
  )
}

export default Header