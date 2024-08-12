import LabLabel from './LabLabel';
import LabContributor from './LabContributor';
import styles from './LabCard.module.css';

function LabCard({ repo }) {
    return (
        <div className={styles.lab_card}>
            <div>
                <div>
                    <h5>{repo.name}</h5>
                    <div className={styles.contributors}>
                        {repo.contributors.slice(0, 3).map((contributor) => (
                            <LabContributor key={contributor.id} contributor={contributor} />
                        ))}
                    </div>
                </div>
                <p>{repo.description}</p>
            </div>
            <div>
                <div>
                    {repo.language && <LabLabel>{repo.language}</LabLabel>}
                    {repo.stargazers_count > 0 && <LabLabel> {repo.stargazers_count}</LabLabel>}
                </div>
                {/* <ButtonLink text="Saiba mais" link={repo.html_url} />*/}
            </div>
        </div>
        
    );
}

export default LabCard;
