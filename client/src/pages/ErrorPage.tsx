import { useSetFaviconOnPageLoad } from "@hooks/ui/useSetFaviconOnPageLoad"

const ErrorPage = () => {
    useSetFaviconOnPageLoad()
    
    return <>
        <h1 className="text-3xl font-bold text-center">Oops! An error has occurred.</h1>
    </>
}

export default ErrorPage
