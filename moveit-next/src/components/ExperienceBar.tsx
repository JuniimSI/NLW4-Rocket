import styles from '../styles/components/ExperienceBar.module.css';


export const ExperienceBar = () => {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }}></div>
                <span style={{ left: '50%' }} className={styles.currentExperience}>
                    300xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
};