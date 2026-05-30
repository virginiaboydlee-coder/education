(function () {
  const labels = {
    'grade3.html':       'World Music Explorer',
    'grade4.html':       'Recorder Book',
    'grade5-songs.html': '4-Chord Song Library',
    'grade5.html':       'PYPX Songwriting',
    'board.html':        'Music Choice Board',
  };

  const backLinks = {
    'board.html': '../student-tools.html',
  };

  const current  = window.location.pathname.split('/').pop() || '';
  const pageLabel = labels[current] || 'Student Tools';

  const navHTML = `
    <nav class="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">

          <!-- Branding (non-navigable) -->
          <div class="flex items-center gap-2 flex-shrink-0 select-none">
            <span class="text-2xl leading-none">🎵</span>
            <div>
              <p class="font-bold text-emerald-700 leading-tight text-sm sm:text-base">Ms. Virginia Lee</p>
              <p class="text-xs text-slate-400 leading-tight hidden sm:block">${pageLabel}</p>
            </div>
          </div>

          <!-- Back to Student Tools -->
          <a href="${backLinks[current] || 'student-tools.html'}"
             class="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-emerald-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Student Tools
          </a>

        </div>
      </div>
    </nav>`;

  const el = document.getElementById('nav-placeholder');
  if (el) el.innerHTML = navHTML;

  // Floating suggestion button
  const fab = document.createElement('a');
  fab.href = 'https://forms.gle/NdqsGUHWHT7N2Uuy6';
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.textContent = '💬 Suggest a resource';
  fab.style.cssText = [
    'position:fixed', 'bottom:1.25rem', 'right:1.25rem',
    'background:#10b981', 'color:white',
    'font-family:Inter,system-ui,sans-serif',
    'font-size:0.78rem', 'font-weight:600',
    'padding:0.55rem 1.1rem', 'border-radius:60px',
    'text-decoration:none',
    'box-shadow:0 4px 14px rgba(0,0,0,0.18)',
    'z-index:999', 'transition:background 0.2s, transform 0.15s',
    'white-space:nowrap'
  ].join(';');
  fab.addEventListener('mouseenter', () => {
    fab.style.background = '#059669';
    fab.style.transform = 'translateY(-2px)';
  });
  fab.addEventListener('mouseleave', () => {
    fab.style.background = '#10b981';
    fab.style.transform = '';
  });
  document.body.appendChild(fab);
})();
