import styles from "./Spinner.module.css";

export default function Spinner({ size = 6 }: { size?: number }) {
  const width = `${size}rem`;

  return (
    <span
      className={styles.loader}
      style={{
        width,
        height: width,
      }}
    />
  );
}
