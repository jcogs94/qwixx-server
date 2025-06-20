import { Outlet } from "react-router-dom"

import { useSetFaviconOnPageLoad } from "@hooks/ui/useSetFaviconOnPageLoad"

const App = () => {
  useSetFaviconOnPageLoad()
  
  return <>
    <main>
      <Outlet />
    </main>
  </>
}

export default App
