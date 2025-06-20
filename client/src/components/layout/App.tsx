import { useSetFaviconOnPageLoad } from "@hooks/ui/useSetFaviconOnPageLoad"

const App = () => {
  useSetFaviconOnPageLoad()
  
  return <>
    <h1 className="text-3xl font-bold underline">Qwixx</h1>
  </>
}

export default App
