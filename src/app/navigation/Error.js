import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  return (
    <>
      <h1>Oops! Something went wrong</h1>
      {console.log(err)}
      {/* <h3>{err.error.message}</h3>
      <h3>
        {err.status} {err.statusText}
      </h3> */}
    </>
  );
}
