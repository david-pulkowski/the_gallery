/**
 * gallery.js — Lightbox and gallery interaction logic
 */

(function () {
  'use strict';

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  const items = Array.from(document.querySelectorAll('.gallery-item'));
  let current = 0;

  function openLightbox(index) {
    current = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    items[current].querySelector('img').focus();
  }

  function updateLightbox() {
    const item = items[current];
    const img = item.querySelector('img');
    const caption = item.querySelector('.overlay-caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : img.alt;
    lightboxCounter.textContent = `${current + 1} / ${items.length}`;
  }

  function showPrev() {
    current = (current - 1 + items.length) % items.length;
    updateLightbox();
  }

  function showNext() {
    current = (current + 1) % items.length;
    updateLightbox();
  }

  // Open lightbox when a gallery item is clicked
  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      openLightbox(index);
    });

    // Keyboard accessibility
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    // Make items focusable
    if (!item.hasAttribute('tabindex')) {
      item.setAttribute('tabindex', '0');
    }
  });

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', showPrev);
  btnNext.addEventListener('click', showNext);

  // Close on backdrop click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}());
