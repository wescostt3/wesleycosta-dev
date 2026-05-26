// Application Controller and Renderer

document.addEventListener("DOMContentLoaded", () => {
  // Check if data is loaded
  if (!window.PORTFOLIO_DATA) {
    console.error("Portfolio data not found. Please verify data.js is loaded.");
    return;
  }

  const data = window.PORTFOLIO_DATA;

  // Initialize all dynamic content renders
  renderHero(data);
  renderAbout(data);
  renderSkills(data);
  renderExperience(data);
  renderProjects(data);
  renderContact(data);

  // Initialize interactions and animations
  initCanvasParticles();
  initMobileMenu();
  initScrollReveal();

  // Create Lucide Icons
  lucide.createIcons();
});

// 1. RENDER HERO SECTION
function renderHero(data) {
  const container = document.getElementById("hero");
  if (!container) return;

  // Clear container
  container.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "text-center max-w-4xl w-full z-10 px-4";

  // Name Title
  const nameDiv = document.createElement("div");
  nameDiv.className = "mb-8";
  
  const h1 = document.createElement("h1");
  h1.className = "text-5xl md:text-8xl font-black mb-4 tracking-tight";
  
  const name = data.personal.name;
  name.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.className = "hover-letter bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent select-none";
    span.innerHTML = char === " " ? "&nbsp;" : char;
    // Delay staggered entries
    span.style.animation = `float 3s ease-in-out infinite`;
    span.style.animationDelay = `${index * 0.1}s`;
    h1.appendChild(span);
  });
  
  nameDiv.appendChild(h1);

  // Welcome Text
  const welcome = document.createElement("div");
  welcome.className = "text-2xl md:text-4xl font-extrabold text-white mb-6 tracking-wide opacity-90";
  welcome.textContent = data.personal.welcomeText;
  nameDiv.appendChild(welcome);
  wrapper.appendChild(nameDiv);

  // Short Intro
  const intro = document.createElement("p");
  intro.className = "text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed";
  intro.textContent = data.personal.shortIntro;
  wrapper.appendChild(intro);

  // Floating Icons (Brain, Cpu, Zap)
  const iconsDiv = document.createElement("div");
  iconsDiv.className = "flex justify-center space-x-8 mb-12";
  
  const icons = ["brain", "cpu", "zap"];
  icons.forEach((iconName, t) => {
    const iconWrapper = document.createElement("div");
    iconWrapper.className = "p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 animate-float";
    iconWrapper.style.animationDelay = `${t * 0.4}s`;
    
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", iconName);
    icon.className = "w-8 h-8 text-blue-400";
    
    iconWrapper.appendChild(icon);
    iconsDiv.appendChild(iconWrapper);
  });
  wrapper.appendChild(iconsDiv);

  // Roles / Skills subtitle
  const subDiv = document.createElement("div");
  subDiv.className = "space-y-4";
  
  const mainRole = document.createElement("div");
  mainRole.className = "text-xl font-semibold text-slate-300";
  mainRole.textContent = data.personal.role;
  subDiv.appendChild(mainRole);
  
  const skillsList = document.createElement("div");
  skillsList.className = "text-sm text-blue-400 font-mono tracking-widest";
  skillsList.textContent = data.personal.tagline;
  subDiv.appendChild(skillsList);
  
  wrapper.appendChild(subDiv);
  container.appendChild(wrapper);
}

// 2. RENDER ABOUT ME SECTION
function renderAbout(data) {
  const container = document.getElementById("about");
  if (!container) return;

  container.className = "py-20 px-6 max-w-6xl mx-auto";
  container.innerHTML = `
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
      <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Profile Image Area -->
      <div class="relative flex justify-center items-center reveal-left">
        <div class="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
          <img src="${data.personal.profileImg}" alt="${data.personal.name}" class="w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-500 hover:scale-105">
        </div>
        <!-- Rotating dashed overlay border -->
        <div class="absolute w-[320px] h-[320px] border-2 border-dashed border-blue-400/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
      </div>
      
      <!-- Text details Area -->
      <div class="space-y-6 reveal-right">
        <h3 class="text-2xl font-bold text-white leading-tight">${data.about.title}</h3>
        <div class="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed" id="about-paragraphs"></div>
        
        <!-- Highlights list -->
        <div class="flex flex-wrap gap-6 text-slate-400 py-4" id="about-highlights"></div>
        
        <!-- Quote Box -->
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-5 rounded-lg border border-blue-400/20 animate-pulse">
          <p class="text-blue-300 italic text-sm md:text-base">${data.about.quote}</p>
        </div>
      </div>
    </div>
  `;

  // Inject paragraphs
  const pContainer = document.getElementById("about-paragraphs");
  data.about.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    pContainer.appendChild(p);
  });

  // Inject highlights
  const hContainer = document.getElementById("about-highlights");
  data.about.highlights.forEach(hl => {
    const item = document.createElement("div");
    item.className = "flex items-center space-x-2";
    
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", hl.icon);
    icon.className = "w-5 h-5 text-blue-400";
    
    const span = document.createElement("span");
    span.textContent = hl.label;
    
    item.appendChild(icon);
    item.appendChild(span);
    hContainer.appendChild(item);
  });
}

// 3. RENDER TECH STACK SECTION
function renderSkills(data) {
  const container = document.getElementById("skills");
  if (!container) return;

  container.className = "py-20 px-6 max-w-6xl mx-auto";
  container.innerHTML = `
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</h2>
      <p class="text-slate-400 text-lg">Technologies and tools I use to build intelligent systems</p>
      <div class="h-1 w-20 bg-pink-500 mx-auto rounded-full mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8" id="skills-grid"></div>
  `;

  const grid = document.getElementById("skills-grid");
  data.skills.forEach((categoryObj, catIdx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 reveal";
    card.style.transitionDelay = `${catIdx * 0.1}s`;

    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-white mb-6 text-center border-b border-slate-800 pb-3";
    h3.textContent = categoryObj.category;
    card.appendChild(h3);

    const skillsList = document.createElement("div");
    skillsList.className = "space-y-5";

    categoryObj.skills.forEach((skill, sIdx) => {
      const skillRow = document.createElement("div");
      skillRow.className = "flex items-center space-x-4";

      const emoji = document.createElement("div");
      emoji.className = "text-2xl w-8 text-center transition-transform hover:scale-125 hover:rotate-12";
      emoji.textContent = skill.icon;
      skillRow.appendChild(emoji);

      const barContainer = document.createElement("div");
      barContainer.className = "flex-1";

      const nameRow = document.createElement("div");
      nameRow.className = "flex justify-between items-center mb-1 text-sm font-medium";
      
      const nameSpan = document.createElement("span");
      nameSpan.className = "text-slate-200";
      nameSpan.textContent = skill.name;
      
      const valSpan = document.createElement("span");
      valSpan.className = "text-purple-400";
      valSpan.textContent = `${skill.level}%`;

      nameRow.appendChild(nameSpan);
      nameRow.appendChild(valSpan);
      barContainer.appendChild(nameRow);

      const progressBg = document.createElement("div");
      progressBg.className = "w-full bg-slate-800 rounded-full h-2 overflow-hidden";
      
      const progressBar = document.createElement("div");
      progressBar.className = "bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out w-0";
      progressBar.setAttribute("data-level", skill.level);
      
      progressBg.appendChild(progressBar);
      barContainer.appendChild(progressBg);
      skillRow.appendChild(barContainer);
      skillsList.appendChild(skillRow);
    });

    card.appendChild(skillsList);
    grid.appendChild(card);
  });
}

// 4. RENDER EXPERIENCE TIMELINE SECTION
function renderExperience(data) {
  const container = document.getElementById("experience");
  if (!container) return;

  container.className = "py-20 px-6 max-w-4xl mx-auto";
  container.innerHTML = `
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Experience Timeline</h2>
      <p class="text-slate-400 text-lg">My journey in data science and AI engineering</p>
      <div class="h-1 w-20 bg-green-500 mx-auto rounded-full mt-4"></div>
    </div>
    
    <div class="relative" id="experience-list">
      <!-- Vertical timeline line -->
      <div class="timeline-line"></div>
    </div>
  `;

  const list = document.getElementById("experience-list");
  data.experience.forEach((exp, idx) => {
    const isEven = idx % 2 === 0;

    const row = document.createElement("div");
    row.className = `relative flex flex-col md:flex-row items-center mb-16 ${
      isEven ? "md:justify-start" : "md:justify-end"
    } reveal`;

    // Center circular bullet
    const bullet = document.createElement("div");
    bullet.className = "absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-950 z-10 scale-reveal";
    row.appendChild(bullet);

    // Box block
    const box = document.createElement("div");
    box.className = `w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`;

    const card = document.createElement("div");
    card.className = "bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] shadow-xl";

    const header = document.createElement("div");
    header.className = "flex items-center mb-4";

    const iconDiv = document.createElement("div");
    iconDiv.className = "p-2.5 bg-blue-500/20 rounded-full mr-4";
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", exp.icon);
    icon.className = "w-6 h-6 text-blue-400";
    iconDiv.appendChild(icon);
    header.appendChild(iconDiv);

    const titleDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-white";
    h3.textContent = exp.title;
    const companyP = document.createElement("p");
    companyP.className = "text-blue-400 text-sm font-semibold";
    companyP.textContent = exp.company;
    
    titleDiv.appendChild(h3);
    titleDiv.appendChild(companyP);
    header.appendChild(titleDiv);
    card.appendChild(header);

    const period = document.createElement("p");
    period.className = "text-purple-300 text-sm mb-3 font-mono";
    period.textContent = exp.period;
    card.appendChild(period);

    const desc = document.createElement("p");
    desc.className = "text-slate-300 text-sm leading-relaxed mb-4";
    desc.textContent = exp.description;
    card.appendChild(desc);

    // Tag list
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "flex flex-wrap gap-2";
    exp.skills.forEach(skillTag => {
      const tag = document.createElement("span");
      tag.className = "px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-400/20 font-mono";
      tag.textContent = skillTag;
      tagsDiv.appendChild(tag);
    });
    card.appendChild(tagsDiv);

    box.appendChild(card);
    row.appendChild(box);
    list.appendChild(row);
  });
}

// 5. RENDER FEATURED PROJECTS SECTION
function renderProjects(data) {
  const container = document.getElementById("projects");
  if (!container) return;

  container.className = "py-20 px-6 max-w-6xl mx-auto";
  container.innerHTML = `
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible</p>
      <div class="h-1 w-20 bg-purple-500 mx-auto rounded-full mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid"></div>
  `;

  const grid = document.getElementById("projects-grid");
  data.projects.forEach((proj, idx) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "group reveal";
    cardWrapper.style.transitionDelay = `${idx * 0.15}s`;

    const card = document.createElement("div");
    card.className = "bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-400/50 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 overflow-hidden relative shadow-lg flex flex-col h-full";

    // Glow background
    const glow = document.createElement("div");
    glow.className = `absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`;
    card.appendChild(glow);

    // Header buttons & icons
    const topRow = document.createElement("div");
    topRow.className = "flex items-center justify-between mb-4 relative z-10";

    const iconDiv = document.createElement("div");
    iconDiv.className = `p-3 rounded-full bg-gradient-to-r ${proj.gradient} bg-opacity-20 hover:rotate-[360deg] transition-transform duration-700`;
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", proj.icon);
    icon.className = "w-6 h-6 text-white";
    iconDiv.appendChild(icon);
    topRow.appendChild(iconDiv);

    // Links buttons
    const linksDiv = document.createElement("div");
    linksDiv.className = "flex space-x-2";

    const githubA = document.createElement("a");
    githubA.href = proj.githubLink;
    githubA.target = "_blank";
    githubA.className = "p-2 rounded-md hover:bg-slate-800/80 text-slate-400 hover:text-blue-400 transition-colors";
    githubA.innerHTML = '<i data-lucide="github" class="w-5 h-5"></i>';
    
    const demoA = document.createElement("a");
    demoA.href = proj.demoLink;
    demoA.target = "_blank";
    demoA.className = "p-2 rounded-md hover:bg-slate-800/80 text-slate-400 hover:text-blue-400 transition-colors";
    demoA.innerHTML = '<i data-lucide="external-link" class="w-5 h-5"></i>';

    linksDiv.appendChild(githubA);
    linksDiv.appendChild(demoA);
    topRow.appendChild(linksDiv);
    card.appendChild(topRow);

    // Title
    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2 relative z-10";
    h3.textContent = proj.title;
    card.appendChild(h3);

    // Description
    const desc = document.createElement("p");
    desc.className = "text-slate-400 text-sm mb-6 flex-grow leading-relaxed relative z-10";
    desc.textContent = proj.description;
    card.appendChild(desc);

    // Badges Row
    const badgesRow = document.createElement("div");
    badgesRow.className = "flex flex-wrap gap-2 relative z-10 mt-auto";
    proj.tech.forEach(techTag => {
      const badge = document.createElement("span");
      badge.className = "px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-400/20 font-mono";
      badge.textContent = techTag;
      badgesRow.appendChild(badge);
    });
    card.appendChild(badgesRow);

    cardWrapper.appendChild(card);
    grid.appendChild(cardWrapper);
  });
}

// 6. RENDER CONTACT SECTION
function renderContact(data) {
  const container = document.getElementById("contact");
  if (!container) return;

  container.className = "py-20 px-6 max-w-6xl mx-auto";
  container.innerHTML = `
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Let's Connect</h2>
      <p class="text-slate-400 text-lg max-w-xl mx-auto">Ready to collaborate on the next big AI innovation? Let's build something amazing together.</p>
      <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4"></div>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Message Card form -->
      <div class="reveal-left">
        <div class="bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-blue-400/30 transition-all duration-300 rounded-2xl p-6 shadow-2xl">
          <div class="border-b border-slate-800 pb-4 mb-6">
            <h4 class="text-white font-bold flex items-center space-x-2 text-lg">
              <i data-lucide="message-square" class="text-blue-400 w-5 h-5"></i>
              <span>Send a Message</span>
            </h4>
          </div>
          
          <form id="contact-form" class="space-y-6">
            <div>
              <input type="text" id="form-name" placeholder="Your Name" class="w-full bg-slate-800/40 border border-slate-700/80 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required>
            </div>
            <div>
              <input type="email" id="form-email" placeholder="Your Email" class="w-full bg-slate-800/40 border border-slate-700/80 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required>
            </div>
            <div>
              <textarea id="form-message" placeholder="Your Message" rows="5" class="w-full bg-slate-800/40 border border-slate-700/80 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" required></textarea>
            </div>
            
            <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all glow-on-hover shadow-lg">
              <i data-lucide="send" class="w-4 h-4"></i>
              <span>Launch Message</span>
            </button>
          </form>
        </div>
      </div>
      
      <!-- Connect side -->
      <div class="space-y-8 reveal-right">
        <div class="text-center">
          <div class="w-36 h-36 mx-auto mb-6 relative">
            <div class="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center text-6xl animate-float">
              🤖
            </div>
            <!-- Dashed outline rotating border -->
            <div class="absolute inset-0 border border-dashed border-purple-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
          <p class="text-blue-300 italic text-base">"Ready to process your ideas into reality!"</p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white text-center mb-6">Connect With Me</h3>
          
          <div class="space-y-3" id="social-links-list"></div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="text-center mt-20 pt-8 border-t border-slate-800/50 reveal">
      <p class="text-slate-500 text-sm">&copy; 2026 ${data.personal.name}. Engineering the future with AI.</p>
    </div>
  `;

  // Inject social details links
  const socialList = document.getElementById("social-links-list");
  const items = [
    { icon: "mail", label: data.contact.email, href: `mailto:${data.contact.email}`, color: "from-red-400 to-pink-400" },
    { icon: "phone", label: data.contact.phone, href: `tel:${data.contact.phone}`, color: "from-green-400 to-blue-400" },
    { icon: "github", label: "GitHub Profile", href: data.contact.github, color: "from-gray-600 to-gray-800" },
    { icon: "linkedin", label: "LinkedIn Profile", href: data.contact.linkedin, color: "from-blue-400 to-blue-600" }
  ];

  items.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "flex items-center space-x-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-md hover:translate-x-2";
    
    a.innerHTML = `
      <div class="p-2 rounded-full bg-gradient-to-r ${link.color} bg-opacity-20">
        <i data-lucide="${link.icon}" class="w-5 h-5 text-white"></i>
      </div>
      <span class="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium text-sm md:text-base">${link.label}</span>
    `;
    
    socialList.appendChild(a);
  });

  // Handle Form submit
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("form-message").value;
    
    console.log("Form Submitted:", { name, email, message });
    
    // Simple visual feedback
    const btn = form.querySelector("button[type=submit]");
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>Transmission Complete!</span>`;
    lucide.createIcons();
    
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = originalText;
      lucide.createIcons();
    }, 3000);
  });
}

// 7. PARTICLES BACKGROUND SYSTEM
function initCanvasParticles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }

  function loop() {
    ctx.fillStyle = "rgba(2, 8, 23, 0.1)"; // Slight trails
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap boundaries
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59, 130, 246, 0.5)"; // blue
      ctx.fill();

      // Connect particles
      for (let j = idx + 1; j < particles.length; j++) {
        const other = particles[j];
        const dist = Math.sqrt(Math.pow(p.x - other.x, 2) + Math.pow(p.y - other.y, 2));

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 - dist / 600})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(loop);
  }

  loop();
}

// 8. MOBILE MENU INTERACTION
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("mobile-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  // Close when clicking nav links
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.add("hidden");
    });
  });
}

// 9. SCROLL REVEAL (Intersection Observer)
function initScrollReveal() {
  const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // Trigger skill progress bar animations when Tech Stack category is visible
        const progressBars = entry.target.querySelectorAll("[data-level]");
        if (progressBars.length) {
          progressBars.forEach(bar => {
            const lvl = bar.getAttribute("data-level");
            bar.style.width = `${lvl}%`;
          });
        }
      }
    });
  }, options);

  // Observe items
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .scale-reveal").forEach(el => {
    observer.observe(el);
  });
}
