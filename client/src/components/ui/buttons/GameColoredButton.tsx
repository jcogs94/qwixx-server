import { type GameColoredButtonValue } from "@customTypes/game"

export type GameColoredButtonProps = {
    color: "red" | "green" | "blue" | "yellow"
    value: GameColoredButtonValue
    onClick: () => void
}

const GameColoredButton = ({ color, value, onClick }: GameColoredButtonProps) => {
    return <>
        <button
            className={`bg-${color}-500 text-white p-2 rounded-md`}
            onClick={onClick}
        >
            {value}
        </button>
    </>
}

export default GameColoredButton
