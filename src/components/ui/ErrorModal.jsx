import React from "react";
import styles from "./errorModal.module.css";
import Card from "./Card";
import Button from "./Button.jsx";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Close Modal</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
