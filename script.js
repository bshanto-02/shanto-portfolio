// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Mobile menu
const menu = document.getElementById('menu');
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// Typing effect (change the words to anything you like)
const words = ['Graphic Designer', 'Logo Maker', 'UI/UX Designer', 'Web Developer', 'Aspiring AI Engineer'];
const el = document.getElementById('typing');
let w = 0, c = 0, del = false;
(function type() {
  const word = words[w];
  el.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 45 : 90);
})();

// Reveal sections, fill skill bars, count up numbers when visible
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll('.bar').forEach(b => {
      b.style.setProperty('--w', b.dataset.v + '%');
      b.classList.add('on');
    });
    e.target.querySelectorAll('[data-count]').forEach(n => {
      const goal = +n.dataset.count; let v = 0;
      const t = setInterval(() => {
        v += Math.ceil(goal / 40);
        if (v >= goal) { v = goal; clearInterval(t); }
        n.textContent = v;
      }, 30);
    });
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(s => io.observe(s));

// Project filters
document.querySelectorAll('.f').forEach(btn => btn.onclick = () => {
  document.querySelectorAll('.f').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('hide', btn.dataset.f !== 'all' && card.dataset.c !== btn.dataset.f);
  });
});

// Contact form: opens the visitor's email app with the message filled in
document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  const n = document.getElementById('n').value, em = document.getElementById('e').value, m = document.getElementById('m').value;
  const body = encodeURIComponent(m + '\n\nFrom: ' + n + ' (' + em + ')');
  location.href = 'mailto:bshanto567@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + n) + '&body=' + body;
};

// Futuristic particle network background
const cv = document.getElementById('bg'), ctx = cv.getContext('2d');
let pts = [];
function size() {
  cv.width = innerWidth; cv.height = innerHeight;
  pts = Array.from({ length: Math.min(70, Math.floor(innerWidth / 18)) }, () => ({
    x: Math.random() * cv.width, y: Math.random() * cv.height,
    vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5
  }));
}
size(); addEventListener('resize', size);
(function draw() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  pts.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > cv.width) p.vx *= -1;
    if (p.y < 0 || p.y > cv.height) p.vy *= -1;
    ctx.fillStyle = 'rgba(0,229,255,.7)';
    ctx.fillRect(p.x, p.y, 2, 2);
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
      if (d < 120) {
        ctx.strokeStyle = 'rgba(138,92,255,' + (1 - d / 120) * .35 + ')';
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
      }
    }
  });
  requestAnimationFrame(draw);
})();

// Click a work image to enlarge it
const lb=document.getElementById('lb');
document.querySelectorAll('.thumb img').forEach(i=>i.onclick=()=>{lb.querySelector('img').src=i.src;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
