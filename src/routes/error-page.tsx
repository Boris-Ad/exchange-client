import { useRouteError } from "react-router-dom";
import { IErrorPage } from "../types";

const ErrorPage : React.FC = () => {
    const error = useRouteError() as IErrorPage;
    return (
        <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    )
}

export default ErrorPage