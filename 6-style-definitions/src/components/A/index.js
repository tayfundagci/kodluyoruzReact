import styles from './styles.module.css';

console.log("A", styles)

function A() {
    return <div className={styles.title, styles.header}>A</div>;
}

export default A;
