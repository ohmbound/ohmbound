import styles from "../styles/TopHeader.module.css";
const TopHeader: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <p className={styles.tagline}>Subscribe to our newsletter!</p>
    </div>
  );
};

export default TopHeader;
