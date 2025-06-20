import { useEffect } from "react"

import favicon from '@imageAssets/favicon.png'

export const useSetFaviconOnPageLoad = () => {
    useEffect(() => {
        const linkElement = document.createElement('link')
        linkElement.rel = 'icon'
        linkElement.type = 'image/png'
        linkElement.href = favicon
        document.head.appendChild(linkElement)
    }, [])
}
