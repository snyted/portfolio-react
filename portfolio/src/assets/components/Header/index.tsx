import GitHubIcon from "./GitHubIconn"
import HamburguerMenu from "./HamburguerMenu"

export default function Header() { 
    return (
        <header className="flex items-center justify-between h-25">
        <GitHubIcon />
        <HamburguerMenu />
        </header>
    )
}