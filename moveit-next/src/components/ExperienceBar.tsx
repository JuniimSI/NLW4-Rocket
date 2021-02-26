import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';


export const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    console.log(currentExperience + ' ' + experienceToNextLevel);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                {currentExperience && <div style={{ width: `${percentToNextLevel}%` }}></div>}

                <span style={{ left: `${percentToNextLevel}%` }} className={styles.currentExperience}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
};