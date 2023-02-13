import CardGroup from "@/components/cardGroup/CardGroup";
import Layout from "@/components/layout/Layout";
import RepositoryCardGroup from "@/components/RepositoryCardGroup/RepositoryCardGroup";
import SocialCardGroup from "@/components/socalCardGroup/SocalCardGroup";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <h1 className={styles.h1}>
            Hello 👋 I`m a Software Developer Mert Sabinov
          </h1>
        </div>
        <h2 className={styles.h2}>Projects I`m currently working on</h2>
        <CardGroup />
        <h2 className={styles.h2}>Open source projects of my choice</h2>
        <RepositoryCardGroup />
        <h2 className={styles.h2}>Social Links</h2>
        <SocialCardGroup />
      </div>
    </Layout>
  );
};

export default Home;
