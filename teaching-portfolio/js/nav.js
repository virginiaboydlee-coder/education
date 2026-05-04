(function () {
  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'teaching.html',      label: 'Teaching' },
    { href: 'leadership.html',    label: 'Leadership' },
    { href: 'blog.html',          label: 'Blog' },
    { href: 'student-tools.html', label: 'Student Tools', children: [
      { href: 'grade3.html', label: 'Grade 3 – World Music' },
      { href: 'grade5.html', label: 'Grade 5 – PYPX Songwriting' },
    ]},
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const isStudentPage = current === 'grade3.html' || current === 'grade5.html' || current === 'student-tools.html';

  const desktopLinks = pages.map(p => {
    const active = current === p.href || (p.children && p.children.some(c => c.href === current));
    if (p.children) {
      const dropItems = p.children.map(c =>
        `<a href="${c.href}" class="block px-4 py-2.5 text-sm font-medium transition-colors ${
          current === c.href ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
        }">${c.label}</a>`
      ).join('');
      return `
        <div class="relative" id="student-dropdown-wrap">
          <button id="student-dropdown-btn" class="flex items-center gap-1 text-sm font-medium pb-0.5 transition-colors ${
            active ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-600 hover:text-emerald-700'
          }">
            <a href="${p.href}">${p.label}</a>
            <svg class="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="student-dropdown" class="hidden absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50">
            ${dropItems}
          </div>
        </div>`;
    }
    return `<a href="${p.href}" class="text-sm font-medium pb-0.5 transition-colors ${
      active ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-600 hover:text-emerald-700'
    }">${p.label}</a>`;
  }).join('');

  const mobileLinks = pages.map(p => {
    const active = current === p.href || (p.children && p.children.some(c => c.href === current));
    if (p.children) {
      const subItems = p.children.map(c =>
        `<a href="${c.href}" class="block pl-8 pr-4 py-2.5 text-sm font-medium transition-colors ${
          current === c.href ? 'text-emerald-700 bg-emerald-50' : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-700'
        }">${c.label}</a>`
      ).join('');
      return `
        <a href="${p.href}" class="block px-4 py-3 text-sm font-medium transition-colors ${
          active ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
        }">${p.label}</a>
        ${subItems}`;
    }
    return `<a href="${p.href}" class="block px-4 py-3 text-sm font-medium transition-colors ${
      active ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
    }">${p.label}</a>`;
  }).join('');

  const navHTML = `
    <nav class="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">
          <a href="index.html" class="flex items-center gap-2 flex-shrink-0">
            <span class="text-2xl leading-none">🎵</span>
            <div>
              <p class="font-bold text-emerald-700 leading-tight text-sm sm:text-base">Ms. Virginia Lee</p>
              <p class="text-xs text-slate-400 leading-tight hidden sm:block">PYP Music Teacher &amp; Educational Leader</p>
            </div>
          </a>
          <div class="hidden md:flex items-center gap-7">${desktopLinks}</div>
          <button id="mob-btn" class="md:hidden p-2 rounded-md text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-colors" aria-label="Toggle menu">
            <svg id="mob-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg id="mob-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="mob-menu" class="hidden md:hidden border-t border-slate-100 bg-white py-1">${mobileLinks}</div>
    </nav>`;

  const el = document.getElementById('nav-placeholder');
  if (el) {
    el.innerHTML = navHTML;

    // Mobile toggle
    const btn     = document.getElementById('mob-btn');
    const menu    = document.getElementById('mob-menu');
    const openIc  = document.getElementById('mob-open');
    const closeIc = document.getElementById('mob-close');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      openIc.classList.toggle('hidden');
      closeIc.classList.toggle('hidden');
    });

    // Desktop dropdown toggle
    const dropBtn  = document.getElementById('student-dropdown-btn');
    const dropdown = document.getElementById('student-dropdown');
    if (dropBtn && dropdown) {
      dropBtn.addEventListener('click', (e) => {
        // Only toggle if clicking the chevron area, not the link itself
        if (e.target.closest('a')) return;
        dropdown.classList.toggle('hidden');
        e.stopPropagation();
      });
      // Close on outside click
      document.addEventListener('click', () => dropdown.classList.add('hidden'));
      dropdown.addEventListener('click', e => e.stopPropagation());
    }
  }
})();
