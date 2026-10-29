import Image from 'next/image';
import { Fragment } from 'react';
import EventVideo from '@/components/EventVideo';
import ChalkboardMural from '@/components/ChalkboardMural';

export default function Home() {
  const subtitleText = "Dedicando o melhor de cada um para o melhor de todos";
  const words = subtitleText.split(' ');

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg-wrapper">
          <Image
            src="/images/foto-sobei.avif"
            alt="Atividades e comunidade da SOBEI"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
            className="hero__bg-img"
          />
          <div className="hero__overlay" aria-hidden="true" />
        </div>
        <div className="hero__content">
          <Image
            src="/images/LOGO BRANCO.png"
            alt="SOBEI"
            width={560}
            height={160}
            style={{ width: '100%', maxWidth: '500px', height: 'auto', aspectRatio: '560 / 160' }}
            className="hero__logo"
            priority
          />
          <h1 className="hero__subtitle">
            {words.map((word, wordIdx) => {
              const previousCharsCount = words.slice(0, wordIdx).join(' ').length + (wordIdx > 0 ? 1 : 0);
              return (
                <Fragment key={wordIdx}>
                  <span className="hero__subtitle-word">
                    {word.split('').map((char, charIdx) => {
                      const globalIdx = previousCharsCount + charIdx;
                      return (
                        <span
                          key={charIdx}
                          className="hero__subtitle-char"
                          style={{ animationDelay: `${0.1 + globalIdx * 0.015}s` }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                  {/* Espaço após a palavra, exceto se for a última */}
                  {wordIdx < words.length - 1 && ' '}
                </Fragment>
              );
            })}
          </h1>
          <p className="hero__description">
            Transformando vidas por meio da educação, acolhimento e desenvolvimento social
            <br />
            na Zona Sul de São Paulo há 42 anos.
          </p>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="about-section" id="sobre">
        {/* Section Header */}
        <div className="container about-header">
          <h2 className="about-header__title">Nossa História</h2>
          <p className="about-header__subtitle">
            Há mais de 4 décadas acolhendo famílias e transformando realidades na Zona Sul de São Paulo.
          </p>
        </div>
        {/* Story Block 1 — Text Left, Mural Right */}
        <div className="container about-row">
          <div className="about-row__text">
            <h3 className="about-row__heading" id="inicio">O início de tudo</h3>
            <p className="about-row__paragraph">
              Fundada em 31 de março de 1984 por membros da Loja Maçônica Fé, Equilíbrio e Luz nº 270, a SOBEI nasceu do desejo de amparar famílias em situação de vulnerabilidade social na Zona Sul de São Paulo, iniciando sua trajetória com uma creche comunitária voltada para 33 crianças da região.
            </p>
            <p className="about-row__paragraph">
              A partir desse início simples, a instituição cresceu e expandiu sua infraestrutura para acompanhar as demandas locais. Hoje, mais de quatro décadas depois, preservamos a mesma essência acolhedora e o foco na dignidade humana que guiaram os nossos primeiros passos.
            </p>
          </div>
          <ChalkboardMural
            src="/images/ccinter-convivencia.avif"
            alt="Apresentação cultural e musical no CCINTER SOBEI"
            theme={1}
          />
        </div>

        {/* Story Block 2 — Image Left, Text Right */}
        <div className="container about-row about-row--reverse">
          <div className="about-row__text">
            <h3 className="about-row__heading">Impacto que transforma</h3>
            <p className="about-row__paragraph">
              Hoje, a SOBEI atua como um pilar de apoio e desenvolvimento que atende diretamente cerca de 7 mil pessoas todos os dias. Gerenciamos 13 Centros de Educação Infantil (CEIs) que oferecem ensino integral e nutrição para 4.500 crianças, além de coordenarmos outros 5 projetos focados em inclusão, formação técnica e apoio intergeracional.
            </p>
            <p className="about-row__paragraph">
              Com uma atuação presente em Cidade Dutra, Vila São José, Grajaú e Parelheiros, nossos 18 serviços e projetos promovem autonomia e criam oportunidades de desenvolvimento para todas as idades, auxiliando a comunidade local a construir uma trajetória com dignidade e cidadania.
            </p>
          </div>
          <ChalkboardMural
            src="/images/nci-bela-vista.avif"
            alt="Educador social ensinando jovens"
            theme={2}
          />
        </div>
      </section>

      {/* Nosso Objetivo Section */}
      <section className="about-section about-section--alt">
        <div className="container about-header">
          <h2 className="about-header__title">Nosso Objetivo</h2>
          <p className="about-header__subtitle">
            Princípios, metas e valores que orientam diariamente nosso trabalho pedagógico e social.
          </p>
        </div>

        <div className="container about-row">
          <div className="about-row__text">
            <h3 className="about-row__heading">Nossa Missão</h3>
            <p className="about-row__paragraph">
              Nossa missão primordial é promover a dignidade humana e a autovalorização de famílias e indivíduos em situação de vulnerabilidade e risco social. Através do acolhimento afetivo e de uma educação cidadã, atuamos como um agente de emancipação para que cada pessoa se torne protagonista de sua história.
            </p>
            <p className="about-row__paragraph">
              Trabalhamos para estruturar redes de apoio eficientes que facilitem o desenvolvimento integral das crianças, a qualificação profissional de jovens e adultos para o mercado de trabalho, e a convivência e bem-estar de idosos, garantindo suporte humanizado em cada etapa da vida.
            </p>
          </div>
          <ChalkboardMural
            src="/images/cedesp-qualificacao.avif"
            alt="Qualificação profissional no CEDESP"
            theme={3}
          />
        </div>

        <div className="container about-row about-row--reverse">
          <div className="about-row__text">
            <h3 className="about-row__heading">Visão e Valores</h3>
            <p className="about-row__paragraph">
              Buscamos ser referência de excelência nacional na cocriação e execução de políticas públicas integradas nas áreas de educação e assistência social. Almejamos liderar iniciativas que unam qualidade pedagógica, transparência de gestão e impacto social sustentável.
            </p>
            <p className="about-row__paragraph">
              Nossa conduta institucional é pautada por cinco pilares essenciais: a ética nas relações, alicerçada na integridade e transparência da gestão; o respeito à diversidade e à dignidade humana, combatendo qualquer forma de preconceito; a solidariedade prática em compromisso contínuo com a comunidade; o acolhimento afetuoso em ambientes seguros e humanizados; e a busca permanente pela transformação social e emancipação de cada cidadão.
            </p>
          </div>
          <ChalkboardMural
            src="/images/cei-leblon.avif"
            alt="CEI Leblon — atividades com crianças"
            theme={4}
          />
        </div>
      </section>

      {/* Eventos Section */}
      <section className="about-section">
        {/* Section Header */}
        <div className="container about-header">
          <h2 className="about-header__title">Nossos Eventos</h2>
          <p className="about-header__subtitle">
            Encontros fraternos que unem parceiros, voluntários e a comunidade para apoiar nossos atendimentos sociais gratuitos.
          </p>
        </div>

        <div className="container about-events" style={{ marginTop: '0' }}>
          <div className="events-grid">
            {/* Event 1 */}
            <div className="event-card">
              <div className="event-card__video-wrapper">
                <EventVideo 
                  src="/videos/Churrasco.mp4" 
                  poster="/images/Churrasco-poster.webp"
                  title="Churrasco Beneficente da SOBEI" 
                />
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Churrasco Beneficente</h3>
                <p className="event-card__text">
                  Um momento especial de celebração e fraternidade que reúne voluntários, parceiros e a comunidade em uma grande festa gastronômica. Cada adesão ajuda a manter a excelência no atendimento gratuito das nossas creches e projetos sociais.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-card">
              <div className="event-card__video-wrapper">
                <EventVideo 
                  src="/videos/Feijoada.mp4" 
                  poster="/images/Feijoada-poster.webp"
                  title="Feijoada Beneficente da SOBEI" 
                />
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Feijoada Beneficente</h3>
                <p className="event-card__text">
                  Uma tradição repleta de sabor, afeto e união. Nossa feijoada mobiliza a comunidade em prol do desenvolvimento humano e da garantia de direitos para mais de 7 mil pessoas assistidas diariamente.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-card">
              <div className="event-card__video-wrapper">
                <EventVideo 
                  src="/videos/FestaJunina.mp4" 
                  poster="/images/FestaJunina-poster.webp"
                  title="Grande Festa Junina da SOBEI" 
                />
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">Grande Festa Junina</h3>
                <p className="event-card__text">
                  A celebração mais calorosa do ano! Com quadrilhas animadas, barracas de brincadeiras e pratos típicos preparados com muito carinho, este evento celebra a cultura popular e fortalece os laços comunitários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
