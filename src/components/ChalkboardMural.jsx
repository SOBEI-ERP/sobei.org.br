import Image from 'next/image';

/* Componentes SVG de traço de giz infantil */
function SunDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="20.5" cy="22" r="1.2" fill="currentColor" />
      <circle cx="27.5" cy="22" r="1.2" fill="currentColor" />
      <path d="M20 27c1.5 2.5 6.5 2.5 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 5v5M24 38v5M5 24h5M38 24h5M10.5 10.5l3.5 3.5M34 34l3.5 3.5M37.5 10.5l-3.5 3.5M14 34l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StickKidDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="22" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="19" cy="10" r="1" fill="currentColor" />
      <circle cx="25" cy="10" r="1" fill="currentColor" />
      <path d="M19 14c1.2 1.5 4.8 1.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 19v17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 23l14 5 14-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 49l8-13 8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowerDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="22" cy="16" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M22 12c-2-4 2-4 0 0zM26 16c4-2 4 2 0 0zM22 20c2 4-2 4 0 0zM18 16c-4 2-4-2 0 0zM25 13c3-3 4-1 0 0zM19 13c-3-3-4-1 0 0z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M22 20c-1 9 2 17 0 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 31c4-3 9-1 8 3-3 1-7-1-8-3z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 38c-4-3-8-1-7 3 3 1 6-1 7-3z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HouseDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M8 20L24 6l16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 13v-6h5v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M34 5c-1-2 2-3 1-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 20v22h24V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 42v-12h8v12" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="26" cy="36" r="0.8" fill="currentColor" />
      <rect x="14" y="24" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StarsHeartDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M16 4l3.5 10.5h11l-9 6.5 3.5 10.5-9-6.5-9 6.5 3.5-10.5-9-6.5h11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M30 32c-3-4-7 0-4 4l4 4 4-4c3-4-1-8-4-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 40v4M6 42h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PaperPlaneDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M38 8L6 20l12 5 2 11 5-7 13-21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M18 25l20-17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 34c4 4 8 2 10-2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
    </svg>
  );
}

function CloudDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 28a6 6 0 0 1 2-11.7 8 8 0 0 1 15-2.3 7 7 0 0 1 11 6 6 6 0 0 1-4 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21" cy="22" r="1" fill="currentColor" />
      <circle cx="29" cy="22" r="1" fill="currentColor" />
      <path d="M23 25c1 1 3 1 4 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 33l-2 4M25 33l-2 4M34 33l-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function KidsHoldingHandsDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="16" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 17.5v12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 23l6 4M16 30l-4 10M16 30l3 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="32" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M32 17.5v12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38 23l-6 4M32 30l-3 10M32 30l4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 22l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 6c-1-1.5-3 0-1.5 2L24 9.5 25.5 8C27 6.5 25 5 24 6z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Abc123Doodle({ className = '' }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M7 17l4-11 4 11M8.5 13.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 6v11h4c2 0 3-1.5 3-3s-1-2.5-3-2.5h-4M23 11.5c2.5 0 3.5-1.5 3.5-3S25 6 22.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M37 9c-2-2-5-3-7 0s-2 5 0 7 5 2 7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 27l3-2v11M19 27c1-2 4-2 5 0s-2 3-5 5h6M31 26c2-1 4 0 4 2s-2 2-2 2 3 0 3 3-2 3-5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function KiteDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M22 4L34 18 22 32 10 18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M22 4v28M10 18h24" stroke="currentColor" strokeWidth="1.4" />
      <path d="M22 32c-3 4-2 8 2 11s0 5-4 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 36l4 2-4 2zM24 43l-4 2 4 2z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function ChalkboardMural({ src, alt, theme = 1, priority = false }) {
  return (
    <div className="chalkboard-mural">
      <div className="chalkboard-mural__slate">
        {/* Desenhos Infantis em Giz ao redor da lousa */}
        {theme === 1 && (
          <>
            <SunDoodle className="chalk-doodle chalk-doodle--tl chalk-doodle--yellow" />
            <StickKidDoodle className="chalk-doodle chalk-doodle--bl chalk-doodle--white" />
            <StarsHeartDoodle className="chalk-doodle chalk-doodle--tr chalk-doodle--yellow" />
            <FlowerDoodle className="chalk-doodle chalk-doodle--br chalk-doodle--coral" />
          </>
        )}

        {theme === 2 && (
          <>
            <KiteDoodle className="chalk-doodle chalk-doodle--tl chalk-doodle--coral" />
            <HouseDoodle className="chalk-doodle chalk-doodle--bl chalk-doodle--cyan" />
            <CloudDoodle className="chalk-doodle chalk-doodle--tr chalk-doodle--cyan" />
            <Abc123Doodle className="chalk-doodle chalk-doodle--br chalk-doodle--yellow" />
          </>
        )}

        {theme === 3 && (
          <>
            <PaperPlaneDoodle className="chalk-doodle chalk-doodle--tl chalk-doodle--white" />
            <FlowerDoodle className="chalk-doodle chalk-doodle--bl chalk-doodle--coral" />
            <SunDoodle className="chalk-doodle chalk-doodle--tr chalk-doodle--yellow" />
            <StarsHeartDoodle className="chalk-doodle chalk-doodle--br chalk-doodle--yellow" />
          </>
        )}

        {theme === 4 && (
          <>
            <CloudDoodle className="chalk-doodle chalk-doodle--tl chalk-doodle--cyan" />
            <HouseDoodle className="chalk-doodle chalk-doodle--bl chalk-doodle--cyan" />
            <KiteDoodle className="chalk-doodle chalk-doodle--tr chalk-doodle--coral" />
            <KidsHoldingHandsDoodle className="chalk-doodle chalk-doodle--br chalk-doodle--white" />
          </>
        )}

        {/* Foto fixa colada no mural */}
        <div className="chalkboard-mural__photo-card">
          <div className="chalkboard-mural__tape" aria-hidden="true" />
          <div className="chalkboard-mural__img-wrap">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 480px, 530px"
              className="chalkboard-mural__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
