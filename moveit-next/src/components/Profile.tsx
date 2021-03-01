import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface userGitHub {
    name: string;
    iconpr: string;
}

interface userData {
    username: userGitHub;
}



export function Profile( { username }: userData) {
    const { level } = useContext(ChallengesContext);

    return (
        
       
        <div className={styles.profileContainer}>
        
            <img src={username.iconpr} 
            alt={username.name}/>
            <div>
                <strong>{username.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                    </p>
            </div>
        </div>
        );
}