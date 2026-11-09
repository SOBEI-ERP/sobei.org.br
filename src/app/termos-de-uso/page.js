import React from 'react';
import Link from 'next/link';
import {
  Scale,
  ArrowLeft,
  CheckCircle2,
  FileText,
  ShieldCheck,
  AlertCircle,
  Building2,
  Users,
  Award
} from 'lucide-react';
import '@/styles/legal.css';

export const metadata = {
  title: 'Termos de Uso',
  description:
    'Termos e Condições de Uso do portal institucional da SOBEI. Diretrizes de navegação, propriedade intelectual e canais oficiais de integridade.',
  alternates: {
    canonical: 'https://sobei.org.br/termos-de-uso',
  },
};

export default function TermosDeUso() {
  const lastUpdated = 'Novembro de 2026';

  return (
    <div className="legal-page">
      {/* Top Hero */}
      <section className="legal-hero">
        <div className="legal-hero__container">
          <Link href="/" className="legal-hero__back">
            <ArrowLeft size={16} />
            <span>Voltar para o Início</span>
          </Link>

          <div className="legal-hero__badge">
            <Scale size={14} />
            <span>DIRETRIZES & CONDIÇÕES INSTITUCIONAIS</span>
          </div>

          <h1 className="legal-hero__title">
            Termos e Condições de Uso
          </h1>
          <p className="legal-hero__subtitle">
            Regras de navegação, diretrizes de propriedade intelectual e compromisso com o uso ético do portal institucional da SOBEI.
          </p>

          <div className="legal-hero__meta">
            <span>Última atualização: {lastUpdated}</span>
            <span className="legal-hero__meta-divider">•</span>
            <span>Marco Civil da Internet (Lei nº 12.965/2014)</span>
            <span className="legal-hero__meta-divider">•</span>
            <span>Lei de Direitos Autorais (Lei nº 9.610/1998)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="legal-content">
        {/* Seção 1: Aceitação */}
        <section className="legal-card legal-card--highlight">
          <div className="legal-section__header">
            <CheckCircle2 size={22} />
            <h2 className="legal-section__title">1. Aceitação dos Termos</h2>
          </div>
          <p>
            Ao acessar e navegar no portal <code>sobei.org.br</code>, você declara ter lido, compreendido e aceito integralmente estes <strong>Termos e Condições de Uso</strong>, bem como a nossa{' '}
            <Link href="/politica-de-privacidade" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
              Política de Privacidade
            </Link>
            .
          </p>
          <p style={{ margin: 0 }}>
            Caso discorde de qualquer disposição contida nestes termos, solicitamos gentilmente que interrompa a utilização deste sítio eletrônico e entre em contato conosco por nossos canais administrativos para esclarecimentos adicionais.
          </p>
        </section>

        {/* Seção 2: Objeto e Finalidade */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Building2 size={22} />
            <h2 className="legal-section__title">2. Objeto e Finalidade do Portal Institucional</h2>
          </div>
          <p>
            A <strong>Sociedade Beneficente Equilíbrio de Interlagos — SOBEI</strong> disponibiliza este portal com objetivo estritamente informativo, institucional e comunitário, servindo como canal oficial para:
          </p>
          <div className="legal-grid">
            <div className="legal-box">
              <span className="legal-box__title">Educação Infantil Integral</span>
              <p className="legal-box__text">
                Divulgação de endereços, diretrizes e informações sobre as 13 creches (CEIs) conveniadas com a Prefeitura de São Paulo.
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Projetos Socioassistenciais</span>
              <p className="legal-box__text">
                Apresentação dos projetos CCInter, CEDESP (formação profissional), NCI Imbuias (idosos), Orquestra Jovem e Telecentro.
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Trabalhe Conosco & Carreira</span>
              <p className="legal-box__text">
                Abertura de processos seletivos e recepção espontânea de currículos de profissionais da educação, saúde e apoio operacional.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 3: Propriedade Intelectual e Proteção à Imagem */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Award size={22} />
            <h2 className="legal-section__title">3. Propriedade Intelectual e Proteção de Imagem</h2>
          </div>
          <p>
            Todo o acervo contido neste portal — incluindo textos, fotografias institucionais, logotipos, murais interativos, marcas, código-fonte e elementos gráficos — é de titularidade exclusiva da SOBEI ou utilizado sob autorização regular, estando protegido pela <strong>Lei nº 9.610/1998 (Direitos Autorais)</strong> e <strong>Lei nº 9.279/1996 (Propriedade Industrial)</strong>.
          </p>
          <p>
            É estritamente vedada a reprodução total ou parcial, download em massa, modificação, distribuição pública ou comercialização de qualquer conteúdo deste portal sem prévia e expressa autorização escrita da SOBEI.
          </p>
          <div className="legal-callout">
            <strong>Proteção Especial à Imagem da Infância:</strong> As imagens e registros fotográficos de crianças e adolescentes exibidos neste portal possuem autorização expressa de seus responsáveis legais e destinam-se exclusivamente à prestação de contas pedagógica e institucional. O uso indevido dessas imagens por terceiros sujeitará os infratores às sanções cíveis e criminais cabíveis nos termos do ECA.
          </div>
        </section>

        {/* Seção 4: Diretrizes de Conduta do Usuário */}
        <section className="legal-section">
          <div className="legal-section__header">
            <ShieldCheck size={22} />
            <h2 className="legal-section__title">4. Diretrizes de Uso e Conduta</h2>
          </div>
          <p>
            Ao interagir com nosso portal institucional, o usuário compromete-se expressamente a:
          </p>
          <ul>
            <li>Fornecer informações verídicas, exatas e atualizadas ao preencher formulários de contato ou candidaturas profissionais.</li>
            <li>Não praticar engenharia reversa, varreduras automatizadas nocivas (scraping abusivo) ou tentativas de violação da segurança e estabilidade dos nossos servidores.</li>
            <li>Não utilizar os canais de contato para veiculação de spam, publicidade não solicitada ou mensagens de teor difamatório, ilícito ou preconceituoso.</li>
            <li>Respeitar a confidencialidade e a privacidade de terceiros durante o uso das ferramentas disponibilizadas.</li>
          </ul>
        </section>

        {/* Seção 5: Candidaturas a Vagas */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Users size={22} />
            <h2 className="legal-section__title">5. Candidaturas e Processos Seletivos</h2>
          </div>
          <p>
            O envio de dados curriculares por meio da seção <code>/vagas</code> não constitui qualquer promessa ou garantia de contratação. Trata-se de etapa preliminar para análise e triagem de perfis conforme a abertura de vagas nas unidades educacionais.
          </p>
          <p>
            O candidato é o único responsável pela veracidade dos diplomas, certificações e históricos profissionais declarados. A constatação de falsidade documental ensejará a desclassificação imediata do processo seletivo.
          </p>
        </section>

        {/* Seção 6: Canal de Integridade e Ouvidoria */}
        <section className="legal-section">
          <div className="legal-section__header">
            <AlertCircle size={22} />
            <h2 className="legal-section__title">6. Canal Oficial de Denúncias e Integridade</h2>
          </div>
          <p>
            A SOBEI mantém um canal de denúncias independente e seguro para o acolhimento de relatos sobre desvios éticos, violações de integridade, fraudes ou assédios.
          </p>
          <p>
            Para registrar uma denúncia com garantia de anonimato e acompanhamento por protocolo criptografado, acesse diretamente{' '}
            <a href="https://denuncias.sobei.org.br" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
              denuncias.sobei.org.br
            </a>.
          </p>
        </section>

        {/* Seção 7: Limitação de Responsabilidade */}
        <section className="legal-section">
          <div className="legal-section__header">
            <FileText size={22} />
            <h2 className="legal-section__title">7. Limitação de Responsabilidade</h2>
          </div>
          <p>
            A SOBEI emprega seus melhores esforços para manter as informações deste portal precisas, completas e atualizadas. No entanto, não se responsabiliza por eventuais instabilidades temporárias de conexão provocadas por provedores de telecomunicações, casos fortuitos ou de força maior.
          </p>
          <p>
            Eventuais links para sites de terceiros (como redes sociais ou parceiros governamentais) são fornecidos exclusivamente para conveniência dos visitantes. A SOBEI não tem controle sobre as políticas e conteúdos de portais externos.
          </p>
        </section>

        {/* Seção 8: Legislação Aplicável e Foro */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Scale size={22} />
            <h2 className="legal-section__title">8. Legislação Aplicável e Foro</h2>
          </div>
          <p>
            Estes Termos de Uso são regidos e interpretados em conformidade com as leis da República Federativa do Brasil, em especial o Marco Civil da Internet (Lei nº 12.965/2014) e a LGPD (Lei nº 13.709/2018).
          </p>
          <p>
            Fica eleito o Foro da Comarca da Capital do Estado de São Paulo para dirimir quaisquer controvérsias decorrentes da utilização deste portal, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.
          </p>
        </section>
      </main>
    </div>
  );
}
