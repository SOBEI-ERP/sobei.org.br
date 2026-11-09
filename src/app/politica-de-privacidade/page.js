import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowLeft,
  FileText,
  Lock,
  Eye,
  Server,
  HeartHandshake,
  Mail,
  Phone,
  Scale,
  Cookie
} from 'lucide-react';
import '@/styles/legal.css';

export const metadata = {
  title: 'Política de Privacidade e Proteção de Dados',
  description:
    'Política de Privacidade da SOBEI em total observância à LGPD (Lei nº 13.709/2018), ao Marco Civil da Internet e aos princípios de proteção à infância.',
  alternates: {
    canonical: 'https://sobei.org.br/politica-de-privacidade',
  },
};

export default function PoliticaDePrivacidade() {
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
            <ShieldCheck size={14} />
            <span>SEGURANÇA DA INFORMAÇÃO & LGPD</span>
          </div>

          <h1 className="legal-hero__title">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="legal-hero__subtitle">
            Transparência, integridade e compromisso ético no tratamento e na proteção dos dados de alunos, famílias, colaboradores, parceiros e visitantes da SOBEI.
          </p>

          <div className="legal-hero__meta">
            <span>Última atualização: {lastUpdated}</span>
            <span className="legal-hero__meta-divider">•</span>
            <span>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</span>
            <span className="legal-hero__meta-divider">•</span>
            <span>Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="legal-content">
        {/* Seção 1: Identificação do Controlador */}
        <section className="legal-card legal-card--highlight">
          <div className="legal-section__header">
            <FileText size={22} />
            <h2 className="legal-section__title">1. Identificação do Controlador</h2>
          </div>
          <p>
            A <strong>Sociedade Beneficente Equilíbrio de Interlagos — SOBEI</strong>, entidade civil de direito privado sem fins econômicos e filantrópica, inscrita no CNPJ sob o nº <strong>53.818.191/0001-60</strong>, fundada em 31 de março de 1984, com sede na <strong>Av. Rubens Montanaro de Borba, 477 - Jardim Regis, São Paulo - SP, CEP 04811-180</strong>, atua como <strong>Controladora</strong> no tratamento dos dados pessoais coletados por meio deste portal (<code>sobei.org.br</code>) e em suas unidades socioeducacionais.
          </p>
          <div className="legal-grid">
            <div className="legal-box">
              <span className="legal-box__title">Encarregado de Dados (DPO) / Privacidade:</span>
              <p className="legal-box__text">
                <a href="mailto:privacidade@sobei.org.br" className="legal-box__link">
                  privacidade@sobei.org.br
                </a>
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Sede Administrativa / Central:</span>
              <p className="legal-box__text">
                <a href="tel:1156672785" className="legal-box__link">
                  (11) 5667-2785
                </a>
                <br />
                <a href="mailto:sobei@sobei.org.br" className="legal-box__link">
                  sobei@sobei.org.br
                </a>
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Canal Oficial de Denúncias e Integridade:</span>
              <p className="legal-box__text">
                <a href="https://denuncias.sobei.org.br" target="_blank" rel="noopener noreferrer" className="legal-box__link">
                  denuncias.sobei.org.br
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2: Princípios Fundamentais e Proteção à Infância */}
        <section className="legal-section">
          <div className="legal-section__header">
            <HeartHandshake size={22} />
            <h2 className="legal-section__title">2. Princípios e Proteção Integral à Criança e ao Adolescente</h2>
          </div>
          <p>
            Ao longo de mais de 42 anos dedicados ao acolhimento social, à educação infantil e à formação cidadã na Zona Sul de São Paulo, a SOBEI rege suas atividades sob os mais elevados princípios éticos. No tratamento de dados, observamos rigorosamente o <strong>Artigo 6º da Lei Federal nº 13.709/2018 (LGPD)</strong>: finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.
          </p>
          <p>
            Reconhecemos a extrema sensibilidade dos dados de crianças e adolescentes matriculados em nossas 13 creches (CEIs) e projetos socioassistenciais (CCInter, CEDESP, NCI, Orquestra Jovem e Telecentro). Nos termos do <strong>Artigo 14 da LGPD</strong> e do <strong>Estatuto da Criança e do Adolescente (ECA - Lei nº 8.069/1990)</strong>, todo e qualquer tratamento de dados de menores é realizado exclusivamente em seu <strong>melhor interesse</strong>, com salvaguardas adicionais de sigilo e segurança.
          </p>
        </section>

        {/* Seção 3: Dados Coletados */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Eye size={22} />
            <h2 className="legal-section__title">3. Dados Coletados e Formas de Coleta</h2>
          </div>
          <p>
            A SOBEI coleta apenas os dados estritamente necessários para cumprir suas missões educacionais, sociais e de atendimento à comunidade:
          </p>
          <ul>
            <li>
              <strong>Dados de Contato e Fale Conosco:</strong> Nome completo, e-mail, telefone e mensagem livre quando o visitante encaminha dúvidas ou solicitações dirigidas à Matriz ou a alguma das unidades.
            </li>
            <li>
              <strong>Trabalhe Conosco e Banco de Talentos:</strong> Nome, telefone, e-mail, área de interesse profissional e currículo anexo encaminhado espontaneamente por candidatos que buscam ingressar em nosso quadro docente e operacional.
            </li>
            <li>
              <strong>Dados Técnicos e Métricas Anônimas de Navegação:</strong> Informações de desempenho de carregamento (Web Vitals) fornecidas pela infraestrutura da Vercel (Speed Insights), endereço IP de conexão e tipo de navegador, utilizados estritamente para diagnósticos técnicos e integridade da rede.
            </li>
            <li>
              <strong>Cookies e Armazenamento Local:</strong> Dados de sessão essenciais para garantir segurança e registrar a sua escolha de consentimento sobre cookies.
            </li>
          </ul>
        </section>

        {/* Seção 4: Finalidades e Bases Legais */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Server size={22} />
            <h2 className="legal-section__title">4. Finalidades e Bases Legais do Tratamento</h2>
          </div>
          <p>
            Todo tratamento de dados realizado pela SOBEI é sustentado por bases legais legítimas da LGPD:
          </p>
          <div className="legal-grid">
            <div className="legal-box">
              <span className="legal-box__title">Execução de Parcerias e Convênios Públicos</span>
              <p className="legal-box__text">
                (Art. 7º, V e Art. 23 da LGPD). Gestão do atendimento socioeducativo em parceria com a Secretaria Municipal de Educação (SME) e Secretaria Municipal de Assistência e Desenvolvimento Social (SMADS) da Prefeitura de São Paulo.
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Cumprimento de Obrigação Legal e Regulatória</span>
              <p className="legal-box__text">
                (Art. 7º, II da LGPD). Guarda de prontuários escolares, comprovações contábeis e fiscais exigidas pelo Marco Regulatório das Organizações da Sociedade Civil (MROSC) e legislações trabalhistas.
              </p>
            </div>
            <div className="legal-box">
              <span className="legal-box__title">Procedimentos Preliminares e Legítimo Interesse</span>
              <p className="legal-box__text">
                (Art. 7º, V e IX da LGPD). Análise de currículos para preenchimento de vagas abertas e proteção da segurança física e digital das nossas instalações e sistemas.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 5: Política de Cookies */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Cookie size={22} />
            <h2 className="legal-section__title">5. Gestão de Cookies e Armazenamento Local</h2>
          </div>
          <p>
            Cookies são pequenos arquivos de texto que podem ser gravados no seu navegador durante o acesso ao nosso site:
          </p>
          <ul>
            <li>
              <strong>Cookies Estritamente Necessários:</strong> Indispensáveis para que o site funcione com estabilidade, permitindo navegação pelas páginas de projetos, unidades e vagas. Não podem ser desabilitados nos nossos sistemas.
            </li>
            <li>
              <strong>Cookies Analíticos e de Desempenho:</strong> Coletam métricas anônimas e agregadas de telemetria sobre a velocidade de resposta das páginas, auxiliando nossa equipe de TI a otimizar a experiência de navegação da comunidade.
            </li>
          </ul>
          <p>
            Você pode alterar suas preferências de cookies a qualquer momento limpando os dados de navegação do seu navegador ou através do banner de consentimento disponibilizado neste portal.
          </p>
        </section>

        {/* Seção 6: Compartilhamento com Terceiros */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Lock size={22} />
            <h2 className="legal-section__title">6. Compartilhamento e Transferência de Dados</h2>
          </div>
          <p>
            A SOBEI <strong>jamais comercializa, aluga ou monetiza dados pessoais</strong> de seus alunos, familiares, visitantes ou colaboradores com terceiros para fins comerciais ou publicitários. O compartilhamento ocorre única e exclusivamente para os seguintes fins:
          </p>
          <ul>
            <li>
              <strong>Órgãos Públicos e Entidades Concedentes:</strong> Secretarias Municipais (SME e SMADS), Conselho Tutelar e Ministério Público, nos limites estritos das prestações de contas, supervisões pedagógicas e determinações da legislação educacional brasileira.
            </li>
            <li>
              <strong>Prestadores de Serviços Tecnológicos Essenciais:</strong> Provedores de infraestrutura de nuvem com padrões internacionais de criptografia e segurança (Vercel Inc. e Microsoft 365 / Azure), sob obrigações contratuais de confidencialidade e privacidade.
            </li>
            <li>
              <strong>Autoridades Judiciais:</strong> Mediante ordem judicial fundamentada ou exigência legal cabível.
            </li>
          </ul>
        </section>

        {/* Seção 7: Medidas de Segurança Técnica */}
        <section className="legal-section">
          <div className="legal-section__header">
            <ShieldCheck size={22} />
            <h2 className="legal-section__title">7. Segurança da Informação e Armazenamento</h2>
          </div>
          <p>
            A SOBEI aplica padrões contínuos de proteção cibernética e integridade de dados liderados por sua equipe de TI e Infraestrutura:
          </p>
          <ul>
            <li>Comunicação 100% criptografada ponta a ponta via certificado SSL/TLS (protocolo HTTPS).</li>
            <li>Proteção perimetral contra acessos não autorizados, ataques de negação de serviço e injeção de scripts maliciosos.</li>
            <li>Acesso lógico estritamente restrito a colaboradores autorizados sob autenticação multifator (MFA) corporativa no Microsoft 365.</li>
            <li>Treinamento contínuo das equipes administrativas e pedagógicas sobre sigilo, ética e confidencialidade documental.</li>
          </ul>
        </section>

        {/* Seção 8: Direitos do Titular de Dados */}
        <section className="legal-section">
          <div className="legal-section__header">
            <Scale size={22} />
            <h2 className="legal-section__title">8. Seus Direitos como Titular de Dados Pessoais</h2>
          </div>
          <p>
            Nos termos do <strong>Artigo 18 da LGPD</strong>, você (ou o responsável legal por menor assistido) tem o direito de solicitar a qualquer momento, de forma simples e gratuita:
          </p>
          <div className="legal-rights-grid">
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Confirmação da existência de tratamento</span>
            </div>
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Acesso aos dados pessoais tratados</span>
            </div>
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Correção de dados incompletos ou inexatos</span>
            </div>
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Anonimização, bloqueio ou eliminação de excessos</span>
            </div>
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Informação sobre compartilhamento com entidades</span>
            </div>
            <div className="legal-right-item">
              <span className="legal-right-item__dot"></span>
              <span>Revogação do consentimento concedido</span>
            </div>
          </div>
          <div className="legal-callout">
            Para exercer qualquer um de seus direitos ou esclarecer dúvidas sobre seus dados, entre em contato com nosso Encarregado de Proteção de Dados pelo e-mail{' '}
            <a href="mailto:privacidade@sobei.org.br">privacidade@sobei.org.br</a> ou pelo canal geral{' '}
            <a href="mailto:sobei@sobei.org.br">sobei@sobei.org.br</a>. Responderemos à sua demanda no menor prazo possível.
          </div>
        </section>

        {/* Seção 9: Alterações */}
        <section className="legal-section">
          <h2 className="legal-section__title" style={{ marginBottom: '0.75rem' }}>
            9. Atualizações desta Política
          </h2>
          <p>
            Esta Política de Privacidade poderá sofrer atualizações periódicas para refletir aprimoramentos nos serviços da SOBEI, avanços tecnológicos ou novas orientações expedidas pela Autoridade Nacional de Proteção de Dados (ANPD). A versão mais recente e sua data de vigência estarão sempre públicas nesta página.
          </p>
        </section>
      </main>
    </div>
  );
}
