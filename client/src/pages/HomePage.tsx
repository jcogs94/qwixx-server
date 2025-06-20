import GameColoredButton from "@uiComponents/buttons/GameColoredButton"

const HomePage = () => {
    return <>
        <h1>Home Page</h1>
        <GameColoredButton color="blue" value={2} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={3} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={4} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={5} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={6} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={7} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={8} onClick={() => {
            console.log('clicked')
        }} />
        <GameColoredButton color="blue" value={9} onClick={() => {
            console.log('clicked')
        }} />
    </>
}

export default HomePage
