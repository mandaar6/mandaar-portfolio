// ── CURSOR ────────────────────────────────────────────────────────────────
const cur=document.getElementById('cursor');
let mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
document.querySelectorAll('a,button,.proj-card,.skill-pill,.flt-btn,.cert-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
});

// ── PROGRESS BAR ─────────────────────────────────────────────────────────
const pb=document.getElementById('progress-bar');
window.addEventListener('scroll',()=>{
  pb.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
});

// ── BG NETWORK CANVAS ─────────────────────────────────────────────────────
(function(){
  const cv=document.getElementById('bg-canvas'),ctx=cv.getContext('2d');
  let nodes=[];
  function resize(){cv.width=window.innerWidth;cv.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  function init(){
    nodes=[];
    const n=Math.floor(cv.width*cv.height/20000);
    for(let i=0;i<n;i++)nodes.push({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.15,vy:(Math.random()-.5)*.15,r:Math.random()*1.2+.4,p:Math.random()*Math.PI*2});
  }
  init();window.addEventListener('resize',init);
  function draw(){
    ctx.clearRect(0,0,cv.width,cv.height);
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;n.p+=.018;if(n.x<0||n.x>cv.width)n.vx*=-1;if(n.y<0||n.y>cv.height)n.vy*=-1});
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<130){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle=`rgba(0,255,136,${(.15*(1-d/130)).toFixed(3)})`;ctx.lineWidth=.35;ctx.stroke()}
    }
    nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,255,136,${(.45+.35*Math.sin(n.p)).toFixed(3)})`;ctx.fill()});
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── PARTICLE CANVAS (mouse-reactive) ──────────────────────────────────────
(function(){
  const cv=document.getElementById('particle-canvas'),ctx=cv.getContext('2d');
  let W,H,parts=[];
  const CH='0123456789ABCDEF</>{}!@#$%^&*?';
  function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight}
  resize();window.addEventListener('resize',()=>{resize();init()});
  function init(){
    parts=[];
    const n=Math.floor(W*H/2200);
    for(let i=0;i<n;i++)parts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:Math.random()*.35+.08,ch:CH[Math.floor(Math.random()*CH.length)],a:Math.random()*.26+.12,sz:Math.floor(Math.random()*3)*2+8,t:Math.random()*60});
  }
  init();
  function draw(){
    ctx.clearRect(0,0,W,H);
    parts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.t++;
      const dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){const f=(110-d)/110*1.4;p.vx+=dx/d*f*.06;p.vy+=dy/d*f*.06}
      p.vx*=.985;p.vy=Math.max(.08,p.vy*.988);
      if(p.t>45){p.ch=CH[Math.floor(Math.random()*CH.length)];p.t=0}
      if(p.y>H+12){p.y=-12;p.x=Math.random()*W}
      if(p.x<-12||p.x>W+12)p.vx*=-1;
      ctx.font=`${p.sz}px 'Share Tech Mono',monospace`;
      ctx.fillStyle=`rgba(0,255,136,${p.a})`;
      ctx.fillText(p.ch,p.x,p.y);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── DECRYPT HELPER ────────────────────────────────────────────────────────
const HEX='0123456789ABCDEF<>!@#$%';
function decryptEl(el,text,delay=0){
  setTimeout(()=>{
    el.style.opacity=1;
    let iter=0;
    const iv=setInterval(()=>{
      el.textContent=text.split('').map((c,i)=>i<iter?c:(c===' '?' ':HEX[Math.floor(Math.random()*HEX.length)])).join('');
      iter+=4;
      if(iter>text.length){el.textContent=text;clearInterval(iv)}
    },14);
  },delay);
}

// ── TERMINAL CONTENT ──────────────────────────────────────────────────────
const TERM_LINES=[
  {type:'cmd',  text:'whoami'},
  {type:'out',  cls:'t-ok',   text:'Mandaar Rao'},
  {type:'out',  cls:'t-dim',  text:'// Cyber Security Engineer  |  Penetration Tester  |  Security Researcher'},
  {type:'blank'},
  {type:'out',  cls:'t-blue', text:'Location  :  Seattle, WA, USA'},
  {type:'blank'},
  {type:'out',  cls:'t-blue', text:'Status    :  M.S. Cyber Security Engineering @ University of Washington, Bothell'},
  {type:'blank'},
  {type:'out',  cls:'',       text:'Cybersecurity graduate student and practitioner with 2+ years of industry'},
  {type:'out',  cls:'',       text:'experience in penetration testing, threat modeling, and vulnerability management'},
  {type:'out',  cls:'',       text:'across automotive, web, and cloud environments. Proven track record of'},
  {type:'out',  cls:'',       text:'identifying and remediating critical vulnerabilities in enterprise and IoT systems,'},
  {type:'out',  cls:'',       text:'mapping attack surfaces to MITRE ATT&CK and CVSS, and delivering risk-prioritized'},
  {type:'out',  cls:'',       text:'security strategies. IEEE-published researcher, open-source tooling builder, and'},
  {type:'out',  cls:'',       text:'CompTIA Security+ certified — actively seeking Summer 2026 security internships.'},
];

function buildTerminal(){
  const body=document.getElementById('term-body');
  body.innerHTML='';
  TERM_LINES.forEach(l=>{
    if(l.type==='blank'){const d=document.createElement('div');d.style.height='6px';body.appendChild(d);return}
    const row=document.createElement('div');row.className='term-line';
    if(l.type==='cmd'){
      row.innerHTML=`<span class="term-prompt">$</span><span class="term-cmd"> <span class="decrypt-target">${scramble(l.text)}</span></span>`;
    } else {
      row.innerHTML=`<span class="${l.cls} decrypt-target">${scramble(l.text)}</span>`;
    }
    body.appendChild(row);
  });
  // Add blinking cursor at end
  const cur=document.createElement('span');cur.className='term-cursor-blink';body.appendChild(cur);
}

function scramble(text){
  return text.split('').map(c=>c===' '?' ':HEX[Math.floor(Math.random()*HEX.length)]).join('');
}

// Decrypt terminal lines sequentially
function decryptTerminal(){
  const targets=document.querySelectorAll('#term-body .decrypt-target');
  TERM_LINES.filter(l=>l.type!=='blank').forEach((l,i)=>{
    const el=targets[i];if(!el)return;
    setTimeout(()=>{
      let iter=0;const text=l.text;
      const iv=setInterval(()=>{
        el.textContent=text.split('').map((c,j)=>j<iter?c:(c===' '?' ':HEX[Math.floor(Math.random()*HEX.length)])).join('');
        iter+=5;
        if(iter>text.length){el.textContent=text;clearInterval(iv)}
      },12);
    },i*60);
  });
}

buildTerminal();

// ── COUNTER ANIMATION ─────────────────────────────────────────────────────
function animCount(el,target,suffix){
  const dur=1600,start=Date.now();
  const tick=()=>{
    const p=Math.min(1,(Date.now()-start)/dur);
    const ease=1-Math.pow(1-p,3);
    const v=Math.floor(ease*target);
    el.textContent=(v>=1000?(v/1000).toFixed(1)+'k':v)+suffix;
    if(p<1)requestAnimationFrame(tick);
    else el.textContent=(target>=1000?(target/1000).toFixed(1)+'k':target)+suffix;
  };tick();
}

// ── RENDER SECTIONS ───────────────────────────────────────────────────────
// Experience
document.getElementById('exp-list').innerHTML=P.experience.map(e=>`
  <div class="ec">
    <div class="ec-header">
      <div class="ec-left">
        <div class="ec-co">${e.co}</div>
        <div class="ec-role">${e.role}</div>
      </div>
      <div class="ec-right">
        ${e.tag?`<span class="ec-tag">${e.tag}</span>`:''}
        <span class="ec-dates">${e.dates}</span>
        <span class="ec-chevron">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="#00ff88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="ec-body">
      <div class="ec-inner">
        <ul class="ec-bullets">${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`).join('');

document.querySelectorAll('.ec').forEach(card=>{
  card.querySelector('.ec-header').addEventListener('click',()=>{
    const isOpen=card.classList.contains('open');
    document.querySelectorAll('.ec').forEach(c=>c.classList.remove('open'));
    if(!isOpen) card.classList.add('open');
  });
});

// Projects
const allTags=['All',...new Set(P.projects.flatMap(p=>p.tags))];
document.getElementById('proj-filters').innerHTML=allTags.map((t,i)=>`<button class="flt-btn${i===0?' active':''}" data-tag="${t}">${t}</button>`).join('');
document.getElementById('proj-grid').innerHTML=P.projects.map((p,i)=>`
  <div class="proj-card" data-tags="${p.tags.join(',')}" style="transition-delay:${i*80}ms">
    <div class="proj-scan"></div>
    <div class="proj-inner">
      <div class="proj-header">
        <div><div class="proj-title">${p.title}</div><div class="proj-sub">${p.sub}</div></div>
        <a href="${p.gh}" target="_blank" rel="noopener" class="proj-gh">↗</a>
      </div>
      <p class="proj-desc">${p.desc}</p>
    </div>
    <div class="proj-footer">
      <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
      <span class="proj-yr">${p.yr}</span>
    </div>
  </div>`).join('');
document.getElementById('proj-filters').addEventListener('click',e=>{
  const btn=e.target.closest('.flt-btn');if(!btn)return;
  document.querySelectorAll('.flt-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');const tag=btn.dataset.tag;
  document.querySelectorAll('.proj-card').forEach(c=>{
    c.classList.toggle('hidden',tag!=='All'&&!c.dataset.tags.split(',').includes(tag));
  });
});

// Skills
document.getElementById('skill-grid').innerHTML=P.skills.map(s=>`
  <div class="skill-card">
    <div class="skill-cat">${s.cat}</div>
    <div class="skill-pills">${s.items.map(i=>`<span class="skill-pill">${i}</span>`).join('')}</div>
  </div>`).join('');

// Certs
document.getElementById('cert-grid').innerHTML=P.certs.map(c=>`
  <div class="cert-card">
    <div class="cert-badge ${c.status}">${c.status==='active'?'ACTIVE':'IN_PROGRESS'}</div>
    <div class="cert-name">${c.name}</div>
    <div class="cert-issuer">${c.issuer}</div>
    ${c.link?`<a href="${c.link}" target="_blank" rel="noopener" class="cert-link">VIEW_CREDENTIAL ↗</a>`:''}
  </div>`).join('');

// Education
document.getElementById('edu-list').innerHTML=P.edu.map(e=>`
  <div class="edu-item">
    <div class="edu-school">${e.school}</div>
    <div class="edu-deg">${e.deg}</div>
    <div class="edu-meta"><span class="edu-dates">${e.dates}</span><span class="edu-gpa">GPA ${e.gpa}</span></div>
    <div class="edu-cw"><span class="edu-cw-lbl">Coursework</span>${e.cw}</div>
  </div>`).join('');

// Publication
document.getElementById('pub-list').innerHTML=P.pub.map(p=>`
  <div class="pub-item${p.featured?' pub-featured':''}">
    <div class="pub-venue">${p.venue}${p.featured?' <span class="pub-star">★ FEATURED</span>':''}</div>
    <div class="pub-title">${p.title}</div>
    <div class="pub-desc">${p.desc}</div>
    <a href="${p.link}" target="_blank" rel="noopener" class="pub-link">READ_PAPER ↗</a>
  </div>`).join('');

// Contact
document.getElementById('contact-links').innerHTML=[
  {l:`mailto:${P.email}`,t:`✉ ${P.email}`},
  {l:P.linkedin,t:'⟶ LINKEDIN'},
  {l:P.github,t:'◈ GITHUB'},
  {l:P.resumeUrl,t:'⬇ RESUME PDF',highlight:true},
].map(x=>`<a href="${x.l}" target="_blank" rel="noopener" class="c-link${x.highlight?' c-link-highlight':''}">${x.t}</a>`).join('');
document.getElementById('foot-name').textContent=`© ${new Date().getFullYear()} ${P.name}`;
// Wire resume links to data
document.getElementById('nav-resume').href=P.resumeUrl;

// ── NAME: DOM TYPEWRITER + GLITCH ─────────────────────────────────────────
const FULL_NAME   = "MANDAAR RAO";
const CORRUPT_MAP = {'A':'@','O':'0','R':'®'};
const nameWrap    = document.getElementById('hero-name');
const nameDisplay = document.getElementById('name-display');

let spans = [];
let cursor;
[...FULL_NAME].forEach(ch => {
  if(ch === ' '){
    const s = document.createElement('span');
    s.className = 'nl-space';
    nameDisplay.appendChild(s);
  } else {
    const wrap = document.createElement('span');
    wrap.className = 'nl';
    wrap.dataset.real = ch;
    // real letter inside its own span so opacity doesn't affect sibling overlay
    const real = document.createElement('span');
    real.className = 'nl-real';
    real.textContent = ch;
    // overlay sibling — hidden by default
    const over = document.createElement('span');
    over.className = 'nl-over';
    wrap.appendChild(real);
    wrap.appendChild(over);
    wrap.style.opacity = '0';
    nameDisplay.appendChild(wrap);
    spans.push(wrap);
  }
});
cursor = document.createElement('span');
cursor.className = 'hero-name-cursor';
nameDisplay.appendChild(cursor);

function typewriterName(cb){
  nameWrap.classList.add('visible');
  let i = 0;
  function typeNext(){
    if(i >= spans.length){
      setTimeout(()=>{
        cursor.style.display = 'none';
        spans.forEach((s,j) => setTimeout(()=> s.classList.add('glowing'), j * 35));
        setTimeout(()=>{ if(cb) cb(); }, spans.length * 35 + 200);
      }, 400);
      return;
    }
    spans[i].style.opacity = '1';
    nameDisplay.insertBefore(cursor, spans[i].nextSibling);
    i++;
    setTimeout(typeNext, 80 + Math.random() * 55);
  }
  typeNext();
}

function startIdleGlitch(){
  const glitchable = spans.filter(s => CORRUPT_MAP[s.dataset.real]);
  function doGlitch(){
    const picks = Math.random() < .4 ? 2 : 1;
    for(let p = 0; p < picks; p++){
      const wrap = glitchable[Math.floor(Math.random() * glitchable.length)];
      if(!wrap || wrap.dataset.corrupted) continue;
      wrap.dataset.corrupted = '1';
      const real = wrap.dataset.real;
      const colors = ['#00ff88','#ff3366','#00cfff'];
      const col = colors[Math.floor(Math.random()*colors.length)];
      const realEl = wrap.querySelector('.nl-real');
      const overEl = wrap.querySelector('.nl-over');
      // hide real letter, show overlay — wrap keeps its size throughout
      realEl.style.opacity = '0';
      overEl.textContent = CORRUPT_MAP[real];
      overEl.style.color = col;
      overEl.style.textShadow = `0 0 10px ${col}`;
      overEl.style.opacity = '1';
      setTimeout(()=>{
        realEl.style.opacity = '';
        overEl.style.opacity = '0';
        overEl.textContent = '';
        overEl.style.textShadow = '';
        delete wrap.dataset.corrupted;
      }, 110 + Math.random() * 160);
    }
    setTimeout(doGlitch, 1400 + Math.random() * 2200);
  }
  setTimeout(doGlitch, 1000);
}

// ── HERO SEQUENCE ─────────────────────────────────────────────────────────
let heroFired = false;

function fireHero(){
  if(heroFired) return;
  heroFired = true;
  typewriterName(()=>{
    ['hero-sub','hero-seeking','hero-terminal','hero-stats','hero-btns'].forEach((id,i)=>{
      setTimeout(()=>{
        const e = document.getElementById(id);
        if(e) e.classList.add('visible');
        if(id === 'hero-stats'){
          document.querySelectorAll('.stat-num[data-val]').forEach((s,j)=>{
            setTimeout(()=>animCount(s, +s.dataset.val, s.dataset.suffix), j*200);
          });
        }
      }, 180 + i*160);
    });
    setTimeout(decryptTerminal, 180 + 4*160 + 300);
    startIdleGlitch();
  });
}

const obs=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el=entry.target;
    if(el.id==='hero-name'){ fireHero(); obs.unobserve(el); return; }
    el.classList.add('visible');
    obs.unobserve(el);
  });
},{threshold:0.06,rootMargin:'0px 0px -30px 0px'});

obs.observe(document.getElementById('hero-name'));
document.querySelectorAll('.ec,.proj-card,.skill-card,.cert-card,.edu-item,.pub-item').forEach(el=>obs.observe(el));

document.querySelectorAll('.skill-card').forEach((c,i)=>c.style.transitionDelay=(i*60)+'ms');
document.querySelectorAll('.cert-card').forEach((c,i)=>c.style.transitionDelay=(i*70)+'ms');

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('open'));
document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>document.getElementById('mobileMenu').classList.remove('open')));

// Fire immediately — hero is above fold
setTimeout(fireHero, 300);