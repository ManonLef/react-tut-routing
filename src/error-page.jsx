import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oopsy</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.status + " " + (error.statusText || error.message)}</i>
      </p>
    </div>
  )
}