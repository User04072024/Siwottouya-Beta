import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeProvider';
import Cart from '@/components/Cart';

const Header = () => {
  const { cartCount } = useCart();
  const { theme, setTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `relative font-medium text-sm text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
      isActive ? 'text-primary after:scale-x-100 after:origin-bottom-left' : ''
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex flex-col items-start">
          <NavLink to="/" className="text-2xl font-bold tracking-tight text-primary-foreground">
            SIWOTTOUYA
          </NavLink>
          <p className="text-xs text-primary-foreground/80">Artesanías Wayuu con Amor y Tradición</p>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
          <NavLink to="/products" className={navLinkClass}>Productos</NavLink>
          <NavLink to="/about" className={navLinkClass}>Nosotros</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contacto</NavLink>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Cart>
            <Button variant="ghost" className="relative text-primary-foreground hover:bg-primary-foreground/10">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </Cart>
        </div>
      </div>
    </header>
  );
};

export default Header;