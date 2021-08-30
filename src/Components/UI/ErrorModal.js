import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
