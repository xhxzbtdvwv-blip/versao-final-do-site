import { Star, Book, Heart, Users, Sparkles, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3" data-testid="countdown-timer">
      <span className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
        Oferta termina em:
      </span>
      <div className="flex gap-1.5 sm:gap-2">
        <div className="bg-primary text-primary-foreground rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[3rem] sm:min-w-[3.5rem] text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading" data-testid="timer-minutes">
            {String(minutes).padStart(2, "0")}
          </div>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-bold">:</div>
        <div className="bg-primary text-primary-foreground rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[3rem] sm:min-w-[3.5rem] text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold font-heading" data-testid="timer-seconds">
            {String(seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const handleCTAClick = () => {
    // Scroll to contact or trigger purchase action
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-accent to-background py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-4 sm:mb-6" data-testid="hero-title">
                Fortaleça a fé da sua família com o Meu Devocionalzinho Kids!
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed" data-testid="hero-subtitle">
                O devocional cristão que aproxima pais e filhos de Deus todos os dias.
              </p>
              
              {/* Star Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4" data-testid="star-rating">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary"
                      data-testid={`star-${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-semibold text-foreground">4,9 de 5</span>
              </div>

              {/* Social Proof Badge */}
              <Badge className="text-sm sm:text-base px-4 py-2 mb-6 sm:mb-8 flex items-center gap-2" data-testid="social-proof">
                <Sparkles className="w-4 h-4" />
                Mais de 500 famílias já transformaram suas manhãs com este devocional
              </Badge>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
                  alt="Família fazendo devocional juntos"
                  className="w-full h-auto object-cover"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-8 sm:mb-12" data-testid="features-title">
            O que você vai encontrar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-6 hover-elevate" data-testid="feature-card-1">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3">
                  <Book className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Histórias Bíblicas</h3>
                  <p className="text-muted-foreground">Contadas de forma divertida e acessível para crianças</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="feature-card-2">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Orações Simples</h3>
                  <p className="text-muted-foreground">Para o dia a dia da criança, fáceis de memorizar</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="feature-card-3">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Atividades em Família</h3>
                  <p className="text-muted-foreground">Desafios cristãos para fazer juntos e fortalecer laços</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="feature-card-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-lg p-3">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Versículos para Memorizar</h3>
                  <p className="text-muted-foreground">E conversar juntos, criando momentos especiais</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-8 sm:mb-12" data-testid="benefits-title">
            Por que você deve comprar o devocional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4" data-testid="benefit-1">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Fortalece a fé e o vínculo familiar</h3>
                <p className="text-muted-foreground">Momentos especiais que unem a família em torno de Deus</p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="benefit-2">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Desenvolve valores cristãos</h3>
                <p className="text-muted-foreground">Desde a infância, plantando sementes de fé</p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="benefit-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Ensina com leveza e alegria</h3>
                <p className="text-muted-foreground">Princípios bíblicos de forma leve e divertida</p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="benefit-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold font-heading mb-2">Prático para os pais</h3>
                <p className="text-muted-foreground">Conduza momentos devocionais sem complicação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-8 sm:mb-12" data-testid="testimonials-title">
            O que as mães estão dizendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6" data-testid="testimonial-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Minha filha de 6 anos ama o momento do devocional agora!"
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                Ana Paula, Florianópolis
              </p>
            </Card>

            <Card className="p-6" data-testid="testimonial-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Transformou nossas noites! Aprendemos juntos sobre Deus."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                Mariana, Curitiba
              </p>
            </Card>

            <Card className="p-6" data-testid="testimonial-3">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Um material lindo e fácil de usar, vale cada centavo."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                Luciana, São Paulo
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 mb-6 sm:mb-8 bg-primary text-primary-foreground" data-testid="discount-badge">
            -78% DE DESCONTO!
          </Badge>
          
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground line-through" data-testid="original-price">
                R$ 59,99
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-primary" data-testid="current-price">
                R$ 12,99
              </span>
            </div>
          </div>

          <CountdownTimer />

          <div className="mt-8 sm:mt-10">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg md:text-xl font-bold font-heading bg-chart-1 text-white rounded-full"
              onClick={handleCTAClick}
              data-testid="button-cta-primary"
            >
              Quero meu devocional agora!
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 sm:mb-8" data-testid="contact-title">
            Ficou com dúvidas?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 hover-elevate" data-testid="contact-email">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-accent rounded-full p-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-heading text-lg mb-2">E-mail</h3>
                  <a
                    href="mailto:meudevocionalzinhokidss@gmail.com"
                    className="text-primary hover:underline break-all text-sm sm:text-base"
                    data-testid="link-email"
                  >
                    meudevocionalzinhokidss@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="contact-phone">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-accent rounded-full p-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-heading text-lg mb-2">Suporte 24h</h3>
                  <a
                    href="https://wa.me/5548999601757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm sm:text-base"
                    data-testid="link-whatsapp"
                  >
                    (48) 99960-1757
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-6" data-testid="footer-cta-title">
            Não perca essa oportunidade!
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Transforme os momentos em família com o Meu Devocionalzinho Kids
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-lg md:text-xl font-bold font-heading rounded-full"
            onClick={handleCTAClick}
            data-testid="button-cta-footer"
          >
            Quero meu devocional agora!
          </Button>
        </div>
      </section>
    </div>
  );
}
