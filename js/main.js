// ── Mobile Nav ──
const toggle = document.getElementById('navToggle');
const nl     = document.getElementById('navLinks');

toggle.addEventListener('click', () => nl.classList.toggle('open'));
nl.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nl.classList.remove('open'))
);

// ── Email obfuscation (防爬蟲) ──
// 拆成片段組合，HTML 原始碼中不出現完整 email
document.addEventListener('DOMContentLoaded', () => {
  const parts = ['Ralphmuir', '1014', '@', 'gmail', '.com'];
  const el = document.getElementById('email-text');
  if (el) el.textContent = parts.join('');
});

// ── Scroll Reveal ──
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.fu');
  els.forEach(el => el.classList.add('hidden'));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  els.forEach(el => obs.observe(el));
});
