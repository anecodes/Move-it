import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface IUserGitHub {
    name: string;
    avatar_url: string;
}

interface userData {
    username: IUserGitHub;
}


export function Profile( user: IUserGitHub) {
    const { level } = useContext(ChallengesContext);

    return (
        
       
        <div className={styles.profileContainer}>
        
            <img src={user?.avatar_url} 
            alt={user?.name}/>
            <div>
                <strong>{user?.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                    </p>
            </div>
        </div>
        );
}