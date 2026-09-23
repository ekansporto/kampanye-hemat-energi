/**
 * ENERGIZE — Gerakan Hemat Energi di Sekolah (ESD Project - Kelompok 5)
 * Main JavaScript: Clean, Lightweight, Interactive
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Navigation
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 2. Sticky Header Elevation on Scroll
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header styling
    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // 3. Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Modal Teaser for Phase 2 & 3
  const teaserModal = document.getElementById('teaserModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPhaseBadge = document.getElementById('modalPhaseBadge');

  function openTeaserModal(phase, title, description) {
    if (!teaserModal) return;
    if (modalPhaseBadge) modalPhaseBadge.textContent = phase;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = description;

    teaserModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTeaserModal() {
    if (!teaserModal) return;
    teaserModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTeaserModal);
  }
  if (modalOkBtn) {
    modalOkBtn.addEventListener('click', closeTeaserModal);
  }
  if (teaserModal) {
    teaserModal.addEventListener('click', (e) => {
      if (e.target === teaserModal) {
        closeTeaserModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && teaserModal && teaserModal.classList.contains('active')) {
      closeTeaserModal();
    }
  });

  // Attach triggers for Data & Fakta (Phase 2)
  const dataFaktaTriggers = document.querySelectorAll('.trigger-data-fakta');
  dataFaktaTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTeaserModal(
        'Fase 2 • Segera Hadir',
        'Data & Fakta Penggunaan Energi',
        'Fitur ini sedang dalam tahap pengumpulan data dan survei lapangan. Pada Fase 2 nanti, Anda akan dapat melihat infografis konsumsi listrik, statistik kebiasaan di sekolah, serta fakta penting seputar efisiensi energi.'
      );
    });
  });

  // Attach triggers for Aksi (Phase 3)
  const aksiTriggers = document.querySelectorAll('.trigger-aksi');
  aksiTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTeaserModal(
        'Fase 3 • Segera Hadir',
        'Aksi Nyata & Rekomendasi',
        'Fitur interaktif Aksi dan Rekomendasi Hemat Energi akan diluncurkan pada Fase 3. Warga sekolah nantinya dapat berpartisipasi langsung dalam tantangan hemat energi, checklist kelas hijau, dan pledge konservasi.'
      );
    });
  });

  // 5. Scroll Reveal Animation with Intersection Observer
  const revealElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});
