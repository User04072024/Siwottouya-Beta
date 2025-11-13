import React, { useContext } from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdminContext } from '@/context/AdminContext';

const Footer = () => {
  const { openLogin } = useContext(AdminContext);

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-primary">SIWOTTOUYA</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tejiendo historias que nacen del alma Wayúu.</p>
          </div>
          <div>
            <p className="font-semibold text-card-foreground">Contacto</p>
            <a href="mailto:contacto@siwottouya.com" className="mt-2 block text-sm text-muted-foreground hover:text-primary transition-colors">
              contacto@siwottouya.com
            </a>
          </div>
          <div>
            <p className="font-semibold text-card-foreground">Síguenos</p>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Send /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; 
            <Button variant="link" size="sm" className="p-0 h-auto mx-1 text-muted-foreground" onClick={openLogin}>
              {new Date().getFullYear()}
            </Button> 
            Siwottouya. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;