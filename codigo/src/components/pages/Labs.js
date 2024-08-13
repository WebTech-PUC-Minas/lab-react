import React, { useEffect, useState } from 'react';
import LabCard from '../layout/LabCard';
import styles from './Labs.module.css'

function Labs() {
    const [repos, setRepos] = useState([]);
    const githubUsername = 'WebTech-PUC-Minas';

    useEffect(() => {
        async function fetchData() {
            try {
                // Consultar os repositórios do usuário
                const reposResponse = await fetch(`https://api.github.com/users/WebTech-PUC-Minas/repos`);
                const reposData = await reposResponse.json();


                // Informações de cada contribuidor
                const reposWithContributors = await Promise.all(
                    reposData.map(async (repo) => {
                        const contributorsResponse = await fetch(repo.contributors_url);
                        const contributorsData = await contributorsResponse.json();
                        return { ...repo, contributors: contributorsData };
                    })
                );


                // Filtra somente os labs
                const filteredRepos = reposWithContributors
                    .filter((repo) => repo.name.startsWith('lab-'))
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                setRepos(filteredRepos);
            } catch (error) {
                console.error('Erro ao buscar dados do GitHub:', error);
            }
        }

        fetchData();
    }, [githubUsername]);

    return (
        <div className={styles.lab_page}>
            <section>
                <h1>Labs</h1>
                <p className={styles.description}>Todo projeto desenvolvido pelos membros da WebTech gera um ou mais labs, que são repositórios no GitHub que contam com todo o detalhamento técnico das tecnologias utilizadas e dos conhecimentos desenvolvidos.</p>
                <div className={styles.grid}>
                    {repos.map((repo) => (
                        <LabCard key={repo.id} repo={repo} />
                    ))}
                </div>
                <div className={styles.grid}>
                </div>
            </section>
        </div>
    );
}

export default Labs;
