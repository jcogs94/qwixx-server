import { useSetFaviconOnPageLoad } from "@hooks/ui/useSetFaviconOnPageLoad"

const App = () => {
  useSetFaviconOnPageLoad()
  
  return <>
    <h1>Qwixx</h1>
  </>
}

export default App
