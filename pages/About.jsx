import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Nuestra Historia - Siwottouya</title>
        <meta name="description" content="Conoce la misión de Siwottouya: preservar la cultura Wayuu, fortalecer la economía local y compartir el arte ancestral con el mundo." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Nuestra Historia</h1>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-muted-foreground">
            “Cada hilo es un camino que une el pasado con el futuro. Tejemos para recordar, para vivir y para resistir.”
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              alt="Artesanas Wayuu trabajando juntas en una comunidad"
             src="https://images.unsplash.com/photo-1674159085094-6f1874d7767c" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-secondary">El Significado de Siwottouya</h2>
            <p className="text-muted-foreground">
              En la lengua Wayuunaiki, "Siwottouya" evoca la belleza y la fuerza del amanecer en el desierto de La Guajira. Representa un nuevo comienzo, la luz que ilumina los sueños y el calor que nutre la vida. Para nosotros, es el renacer de la tradición en cada hebra de hilo.
            </p>
            <h2 className="text-2xl font-bold text-secondary">Nuestra Misión</h2>
            <p className="text-muted-foreground">
              Nacimos con un propósito claro: ser un puente entre las talentosas artesanas Wayuu y el mundo. Buscamos preservar una identidad cultural milenaria, fortalecer la economía de las comunidades a través del comercio justo y compartir la belleza de un arte que es resistencia, memoria y vida.
            </p>
            <p className="text-muted-foreground">
              Cada compra en Siwottouya no es solo una transacción, es un acto de reconocimiento y apoyo directo a las mujeres que son el pilar de la cultura Wayuu.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;