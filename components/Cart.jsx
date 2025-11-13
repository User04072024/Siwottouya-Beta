import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ children }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentMethodClick = (method) => {
    toast({
      title: `Pago con ${method} 🚧`,
      description: "Esta función de pago aún no está implementada. ¡Puedes solicitarla en tu próximo mensaje! 🚀",
      className: 'bg-primary text-primary-foreground'
    });
  };

  return (
    <Dialog onOpenChange={(open) => !open && setShowPaymentOptions(false)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary flex items-center">
            <ShoppingCart className="mr-2 h-6 w-6" /> Carrito de Compras
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tu carrito está vacío.</p>
              <p className="text-sm text-muted-foreground">¡Añade algunas artesanías!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img className="w-16 h-16 rounded-md object-cover" alt={item.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <AnimatePresence>
              {showPaymentOptions ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-3"
                >
                  <p className="text-center text-sm font-semibold text-muted-foreground">Selecciona un método de pago</p>
                  <Button className="w-full bg-[#24A8E0] hover:bg-[#24A8E0]/90 text-white" onClick={() => handlePaymentMethodClick('Bancolombia')}>Pagar con Bancolombia</Button>
                  <Button className="w-full bg-[#93238E] hover:bg-[#93238E]/90 text-white" onClick={() => handlePaymentMethodClick('Nequi')}>Pagar con Nequi</Button>
                  <Button className="w-full bg-[#003087] hover:bg-[#003087]/90 text-white" onClick={() => handlePaymentMethodClick('PayPal')}>Pagar con PayPal</Button>
                </motion.div>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" className="w-full" onClick={clearCart}>Vaciar Carrito</Button>
                  <Button className="w-full" onClick={handleCheckout}>Proceder al Pago</Button>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;