export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((arm) => {
    return {
      params: { id: arm.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { arm: data },
  };
};

const Details = ({ arm }) => {
  return (
    <div>
      <h1>Details page</h1>
      hi list n0.
      <p>{arm.name}</p>
      <p>{arm.email}</p>
      <p>{arm.website}</p>
      {/* <p>{arm.address}</p> */}
    </div>
  );
};

export default Details;
