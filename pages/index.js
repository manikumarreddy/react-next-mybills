import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import React from "react";
import Link from "next/link";
import {signIn,signOut,useSession} from "next-auth/client";
import UserDetails from '../components/UserDetails';

export default function Home({primeUser}) {
  console.log('primeUser>>>>',primeUser);
  const [session,loading] = useSession();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Bill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!session && (
          <div>
            <button className="btn btn-success" onClick={signIn}>Sign In</button>
          </div>
        )}
        {session && (
          <div>           
           <UserDetails primeUser={primeUser[0]}></UserDetails>           
          </div>
        )}
      </main>
    </div>
  );
}

export const getStaticProps= async()=>{
   const resData= await fetch('http://localhost:8000/users?type=primary');
   const primeUser= await resData.json();
   return{
       props:{primeUser}
     }  
}
