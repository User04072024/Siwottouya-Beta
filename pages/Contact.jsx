import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 ¡Función en desarrollo! 🚧",
      description: "El formulario de contacto aún no está implementado. ¡Pero puedes solicitarlo en tu próximo mensaje! 🚀",
      className: 'bg-primary text-primary-foreground'
    });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contacto - Siwottouya</title>
        <meta name="description" content="Ponte en contacto con nosotros para pedidos personalizados, preguntas o colaboraciones. Escríbenos a contacto@siwottouya.com." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Ponte en Contacto</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">¿Tienes preguntas o un pedido especial? Estamos aquí para ayudarte.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary">Información de Contacto</h2>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Correo Electrónico</p>
                <a href="mailto:contacto@siwottouya.com" className="text-muted-foreground hover:text-primary">
                  contacto@siwottouya.com
                </a>
              </div>
            </div>
             <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-muted-foreground">Próximamente para pedidos personalizados.</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground">Nombre</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-input bg-background p-2 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground">Correo</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-input bg-background p-2 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground">Mensaje</label>
                <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-input bg-background p-2 shadow-sm focus:border-primary focus:ring-primary"></textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;