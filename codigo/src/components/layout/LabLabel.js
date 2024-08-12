import styles from './LabLabel.module.css'

function LabLabel({ children }) {
    return (
        <div className={styles.lab_label}>{children}</div>
    );
}

export default LabLabel;
