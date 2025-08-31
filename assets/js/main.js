// Main JS for MeetMe-inspired site
(function(){
  // Current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null, '', a.getAttribute('href'));
      }
    });
  });

  // Activate nav links on scroll (Bootstrap scrollspy already enabled)
  const nav = document.querySelector('#mainNav');
  const bsSpy = bootstrap.ScrollSpy.getInstance(document.body) || new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 80
  });

  // Simple typewriter
  const typedTarget = document.getElementById('typed');
  const roles = ["Jasa Percetakan", "Desain Grafis", "Microsoft Office Advanced"];
  let i = 0, j = 0, isDeleting = false;
  function type(){
    const current = roles[i % roles.length];
    typedTarget.textContent = current.slice(0, j) + (Math.floor(Date.now()/500)%2 ? '|' : '');
    if(!isDeleting){ j++; if(j > current.length + 8) isDeleting = true; }
    else { j--; if(j === 0){ isDeleting = false; i++; } }
    setTimeout(type, 100); // kecepatan animasi tulisan
    // requestAnimationFrame(type);
  }
  type();

  // Portfolio filter
  const filterButtons = document.querySelectorAll('.filters [data-filter]');
  const items = document.querySelectorAll('.portfolio-item');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const show = filter === '*' || item.dataset.category === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // Contact form (AJAX)
  const form = document.getElementById('contactForm');
  const alertBox = form?.querySelector('.form-alert');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertBox.textContent = 'Sending...';
    const formData = new FormData(form);
    try{
      const res = await fetch(form.action, { method:'POST', body: formData });
      const data = await res.json();
      alertBox.textContent = data.message || 'Message sent!';
      if(data.ok) form.reset();
      alertBox.className = 'form-alert mt-3 alert ' + (data.ok ? 'alert-success' : 'alert-warning');
    }catch(err){
      alertBox.textContent = 'Failed to send. You can email me at hello@example.com';
      alertBox.className = 'form-alert mt-3 alert alert-danger';
    }
  });
})();
