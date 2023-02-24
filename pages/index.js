import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          in tempora veniam quam dolores consequuntur explicabo provident
          eveniet magni culpa aut perferendis expedita ex voluptatibus optio,
          vel quisquam, architecto eaque.
        </p>
        <Link className={styles.btn} href="/ninjas/ninjas">
          click to go all armor
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  );
}
