import Link from "next/link";
import styles from "../../styles/Armors.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { arms: data },
  };
};

const armors = ({ arms }) => {
  return (
    <div>
      <h1>Armors</h1>
      {arms.map((arm) => (
        <Link href={"/ninjas/" + arm.id} key={arm.id}>
          <h3 className={styles.single}>{arm.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default armors;
