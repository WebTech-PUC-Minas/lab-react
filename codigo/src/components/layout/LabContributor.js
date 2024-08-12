import styles from './LabContributor.module.css'

function LabContributor({ contributor }) {
  return (
    <div className={styles.lab_contributor}>
      <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
        <img
          src={contributor.avatar_url}
          alt={contributor.login}
        />
      </a>
    </div>
  );
}

export default LabContributor;
