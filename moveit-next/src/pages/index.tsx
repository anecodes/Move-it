import { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import styles from '../styles/pages/userConfig.module.css';

export default function Home() {
  const { push } = useRouter();

  const [ user, setUser ] = useState('');

  function sendInfo (e: FormEvent) {
    e.preventDefault ();
    push(`/${user}`)
  }

  return (
    <div>
       <title>Início | move.it</title>
      <div className={styles.container}>
        
        <img className={styles.moveItBg} src="/moveit-bg.svg" alt="moveit logo"/>
        
        <form onSubmit={sendInfo}>
          <img src="/logo-white.svg" alt="moveit logo white"/>
          <h1>Olá! Pronto para se exercitar?</h1>
          <span>
            <img src="gh-logo.svg" alt="github logo"/>
            <p>Faça login com seu Github
                para começar</p>
          </span>

            <div className={styles.ghLogin}>
              <input type="text" placeholder="Username"
              onChange={e => setUser(e.target.value)}
              required/>

              <button type="submit">
                <FiArrowRight size={24} color="#FFFFFF"/>

              </button>
            </div>
          </form>
          </div>
         </div>
  )
}