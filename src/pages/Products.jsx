import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, User } from 'lucide-react';
import { DataContext } from '@/context/DataContext';
const ProductCard = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  const {
    artisans
  } = useContext(DataContext);
  const artisan = artisans.find(a => a.name === product.artisan);
  return <Dialog>
      <Card className="overflow-hidden flex flex-col h-full group">
        <DialogTrigger asChild>
          <div className="overflow-hidden cursor-pointer">
            <img class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" alt={product.image} src="https://horizons-cdn.hostinger.com/9481a09f-abcd-49f9-bc29-1231cc41db2a/mochilas---rayas-LED6r.jpeg" />
          </div>
        </DialogTrigger>
        <CardHeader>
          <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-xl font-bold text-secondary">${product.price}</p>
          <Button onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Añadir
          </Button>
        </CardFooter>
      </Card>
      <DialogContent className="sm:max-w-2xl bg-card grid grid-cols-1 md:grid-cols-2 gap-6 p-0">
        <div>
          <img class="w-full h-full object-cover rounded-l-lg" alt={product.image} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <DialogHeader>
            <DialogTitle className="text-3xl text-primary mb-2">{product.name}</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          {artisan && <div className="bg-accent p-3 rounded-lg mb-6 flex items-center space-x-4">
              <img class="w-12 h-12 rounded-full object-cover border-2 border-primary" alt={artisan.image} src="https://images.unsplash.com/photo-1663236752820-128b80a30152" />
              <div>
                <p className="text-sm font-semibold text-secondary flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Elaborado por:
                </p>
                <p className="font-bold text-primary">{artisan.name}</p>
              </div>
            </div>}
          <p className="text-3xl font-bold text-secondary mb-6">${product.price}</p>
          <Button size="lg" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Añadir al carrito
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
};
const Products = () => {
  const {
    products,
    categories
  } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState('mochilas');
  const filteredProducts = products[selectedCategory] || [];
  return <PageTransition>
      <Helmet>
        <title>Productos - Siwottouya</title>
        <meta name="description" content="Explora nuestro catálogo de artesanías Wayuu: mochilas, manillas, chinchorros y más. Hecho a mano con amor y tradición." />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Nuestras Artesanías</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">Cada pieza cuenta una historia. Encuentra la tuya.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => <Button key={category.id} variant={selectedCategory === category.id ? 'default' : 'outline'} onClick={() => setSelectedCategory(category.id)} className="text-base">
              {category.emoji} <span className="ml-2">{category.name}</span>
            </Button>)}
        </div>

        <motion.div key={selectedCategory} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </motion.div>
      </div>
    </PageTransition>;
};
export default Products;