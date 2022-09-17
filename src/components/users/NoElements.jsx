import React from 'react'
import Card from '../ui/Card'
import styles from "./noElement.module.css"

const NoElements = () => {
  return (
    <Card className={styles.main}>
        <h2>There are no users on your list please add users</h2>
    </Card>
  )
}

export default NoElements