import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log('err is: ', err);
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something went wrong!</h2>
            <p>{err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error;