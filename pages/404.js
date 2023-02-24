import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go()
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>OOoops....</h1>
      <h2>that page doesn't exist</h2>
      <p>
        goback to the <Link href="/">Home</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
