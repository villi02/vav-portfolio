import styles from "./PageTitle.module.css";

export default function PageTitle({ subject }: { subject: string }) {
  return <h1 className={styles.title}>My <span>{subject}</span></h1>;
}
