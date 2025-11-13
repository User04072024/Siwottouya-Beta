import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DataContext } from '@/context/DataContext';

const ArtisanCard = ({ artisan }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        className="cursor-pointer"
      >
        <Card className="text-center overflow-hidden transition-shadow duration-300 h-full flex flex-col">
          <CardHeader className="items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
              <img class="w-full h-full object-cover" alt={artisan.image} src="https://images.unsplash.com/photo-1663236752820-128b80a30152" />
            </div>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <div>
              <CardTitle className="text-lg text-primary">{artisan.name}</CardTitle>
              <p className="text-sm font-semibold text-secondary">{artisan.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{artisan.description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-card">
      <DialogHeader>
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
          <img class="w-full h-full object-cover" alt={artisan.image} src="https://images.unsplash.com/photo-1663236752820-128b80a30152" />
        </div>
        <DialogTitle className="text-center text-2xl text-primary">{artisan.name}</DialogTitle>
        <p className="text-center text-sm text-secondary font-semibold">{artisan.community}</p>
      </DialogHeader>
      <div className="py-4">
        <p className="text-muted-foreground">{artisan.bio}</p>
      </div>
    </DialogContent>
  </Dialog>
);

const Home = () => {
  const { artisans } = useContext(DataContext);
  return (
    <PageTransition>
      <Helmet>
        <title>Siwottouya - Artesanías Wayuu con Amor y Tradición</title>
        <meta name="description" content="Descubre auténticas artesanías Wayuu. Cada pieza es una historia tejida a mano por nuestras talentosas artesanas. Compra con propósito y apoya el comercio justo." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img className="absolute inset-0 w-full h-full object-cover" alt="Artesanía Wayuu en primer plano con fondo de La Guajira" src="https://horizons-cdn.hostinger.com/9481a09f-abcd-49f9-bc29-1231cc41db2a/desierto-de-la-guajira-AeUM1.webp" />
        <motion.div
          className="relative z-20 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Tejemos historias que nacen del alma Wayúu.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Cada mochila lleva los sueños, colores y símbolos de nuestra tierra.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link to="/products">Ver Artesanías</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
              <Link to="/about">Nuestra Historia</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Artesanas Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Nuestras Artesanas</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">Las manos y el corazón detrás de cada obra de arte.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => <ArtisanCard key={index} artisan={artisan} />)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
export default Home;