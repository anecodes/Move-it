import Head from "next/head";
import { GetServerSideProps } from "next";

import { Countdown } from "../components/Countdown";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import Link from 'next/link';

interface userGitHub {
    name: string;
    iconpr: string;
}

interface userData {
    username: userGitHub;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function userConfig ({
    username,
    level,
    challengesCompleted,
    currentExperience
}: userData) {
    return (
      
        <ChallengesProvider
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
        >

            <div className={styles.sidebar}>
            <Link href="/">
              <img src="/logo-home.svg" alt="Home" />
              </Link>
            </div>
            

          <div className={styles.container}>
            <Head>
              <title>Desafio | move.it</title>
            </Head>
            <ExperienceBar />
    
            <CountdownProvider>
              <section>
                <div>
                  <Profile username={username} />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      );
    }

    export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
        const { level, currentExperience, challengesCompleted } = req.cookies;
        const { user } = params;
        const login = await fetch (`https://api.github.com/users/${user}`);
        const username = await login.json();
      
        return {
          props: {
            username,
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
          }
        }
      }
      