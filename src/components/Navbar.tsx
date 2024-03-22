'use client';
import { Menu, User, X } from 'lucide-react';
import { FC } from 'react';
import SearchBar from './navbar/SearchBar';
import { useMenu } from './Provider';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
            {/* <SearchBar /> */}
            <div>{/* Place holder for search bar */}</div>
            <div className="flex items-center gap-5">

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
