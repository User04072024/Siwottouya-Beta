import React, { useContext, useState } from 'react';
import { AdminContext } from '@/context/AdminContext';
import { DataContext } from '@/context/DataContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { X, Shield, Unlock, Lock, Settings, Users, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = () => {
  const { isLoginOpen, closeLogin, login } = useContext(AdminContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(password)) {
      toast({
        title: "¡Bienvenido, admin! 🧑‍💻",
        description: "Panel de administración desbloqueado.",
        className: 'bg-primary text-primary-foreground'
      });
    } else {
      setError('Contraseña incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <Dialog open={isLoginOpen} onOpenChange={closeLogin}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary text-xl"><Shield/> Acceso de Administrador</DialogTitle>
          <DialogDescription>
            Ingresa la contraseña para modificar el contenido del sitio.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Lock className="text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
              />
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              <Unlock className="mr-2 h-4 w-4" /> Desbloquear
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const AdminPanel = () => {
  const { isAdmin, logout } = useContext(AdminContext);
  const { products, artisans } = useContext(DataContext);
  const { toast } = useToast();

  const handleFeatureClick = () => {
     toast({
      title: "Función en desarrollo 🚧",
      description: "La edición y creación de contenido estará disponible pronto. ¡Puedes solicitarla en tu próximo mensaje! 🚀",
      className: 'bg-primary text-primary-foreground'
    });
  }

  return (
    <>
      <LoginModal />
      <AnimatePresence>
        {isAdmin && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t-2 border-primary shadow-2xl z-50"
          >
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2"><Settings /> Panel de Administración</h2>
                <Button variant="ghost" size="icon" onClick={logout}>
                  <X />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary flex items-center gap-2"><Package/> Productos ({Object.values(products).flat().length})</h3>
                   <Button className="w-full mt-2" onClick={handleFeatureClick}>Gestionar Productos</Button>
                </div>
                 <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary flex items-center gap-2"><Users/> Artesanas ({artisans.length})</h3>
                   <Button className="w-full mt-2" onClick={handleFeatureClick}>Gestionar Artesanas</Button>
                </div>
              </div>

               <div className="text-center mt-4">
                 <Button variant="destructive" onClick={logout}>Cerrar Sesión</Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminPanel;