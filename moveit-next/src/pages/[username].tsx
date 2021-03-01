import React from 'react';
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

interface IUserGitHub {
    name: string;
    avatar_url: string;
}

interface userData {
    user: IUserGitHub;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

const Home: React.FC<userData> = (props) => {
  const { user } = props;

    return (
      
        <ChallengesProvider {...props}
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
                  <Profile {...user} />
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
      )
    }

    export const getServerSideProps: GetServerSideProps = async (ctx) => {
        const { username } = ctx.params;
        const login = await fetch (`https://api.github.com/users/${username}`);
        const user = await login.json();

        const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
      
        return {
          props: {
            user,
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
          }
        }
      }
    
export default Home;