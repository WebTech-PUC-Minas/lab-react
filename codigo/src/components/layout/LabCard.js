import LabLabel from './LabLabel';
import LabContributor from './LabContributor';
import styles from './LabCard.module.css';

function LabCard({ repo }) {
    return (
        <div className={styles.lab_card}>
            <div>
                <div className={styles.card_top}>
                    <h5>{repo.name}</h5>
                    <div className={styles.contributors}>
                        {repo.contributors.slice(0, 3).map((contributor) => (
                            <LabContributor key={contributor.id} contributor={contributor} />
                        ))}
                    </div>
                </div>
                <p>{repo.description}</p>
            </div>
            <div className={styles.card_footer}>
                <div className={styles.labels}>
                    {repo.language && <LabLabel>{repo.language}</LabLabel>}
                    {repo.stargazers_count > 0 && <LabLabel> {repo.stargazers_count}</LabLabel>}
                </div>
                {/* <ButtonLink text="Saiba mais" link={repo.html_url} />*/}
                <div>
                    <a href={repo.html_url}>Saiba mais</a>
                </div>
            </div>
        </div>
        
    );
}

export default LabCard;
