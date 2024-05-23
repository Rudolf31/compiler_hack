// Header.js
import { Link } from 'react-router-dom';

export default function Header({ isAnonymous }) {
    const darkHeader = "bg-slate-800 h-10 text-yellow-50 relative p-4";
    const whiteHeader = "bg-slate-300 h-10 text-yellow-50 relative p-4";

    return (
        <header className={`${isAnonymous ? darkHeader : whiteHeader}`}>
            <nav className="absolute inset-y-0 flex items-center justify-betwee gap-6">
                <div>
                    <img alt=''></img>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li><Link to={'/'}></Link></li>
                        <li><Link to={'/'}></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}