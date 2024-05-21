import { Link } from 'react-router-dom';

export default function Header () {

    return (<header className="bg-slate-800 h-10 text-yellow-50 relative p-4">
        <nav className="absolute inset-y-0  flex items-center justify-betwee gap-6">
            <div>
                <img alt='какое то лого'></img>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li><Link to={'/'}>какая то ссылка</Link></li>
                    <li><Link to={'/'}>какая то ссылка</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)}