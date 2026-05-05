(function () {
  const labels = {
    'grade3.html': 'Grade 3 – World Music Explorer',
    'grade4.html': 'Grade 4 – Recorder Book',
    'grade5.html': 'Grade 5 – PYPX Songwriting',
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
          <a href="student-tools.html"
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
})();
