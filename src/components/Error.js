import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return(
        <div>
            <h1>Oops!!! Found an error</h1>
            <h2>{err.data}</h2>
            <h3></h3>
        </div>
    )
}

export default Error;