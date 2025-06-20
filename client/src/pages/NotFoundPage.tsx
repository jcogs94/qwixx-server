import { useSetFaviconOnPageLoad } from "@hooks/ui/useSetFaviconOnPageLoad"

const NotFoundPage = () => {
    useSetFaviconOnPageLoad()
    
    return <>
        <h1 className="text-3xl font-bold text-center">404 - Page not found</h1>
    </>
}

export default NotFoundPage
