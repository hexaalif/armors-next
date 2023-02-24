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
        <div key={arm.id}>
          <a className={styles.single}>
            <h3>{arm.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default armors;
