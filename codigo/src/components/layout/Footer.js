import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h4>Coreu</h4>
                <ul>
                    <li>PUC Minas - Coração Eucarístico</li>
                    <li>Av. Dom José Gaspar, 500 - Coração Eucarístico</li>
                    <li>Prédio 34 - HackerSpace</li>
                </ul>
            </div>

            <div>
                <h4>Praça</h4>
                <ul>
                    <li>PUC Minas - Unidade Praça da Liberdade</li>
                    <li>R. Cláudio Manoel, 1162 - Savassi</li>
                    <li>Prédio 4 - Sala 1106</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer; 