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
  initThemeSelector();
  initTerminalConsole();
  initCaseStudyModal();

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
    span.style.animationDelay = `${index * 0.08}s`;
    
    // Add interactive 3D rotation based on mouse coordinates relative to the letter
    span.addEventListener("mousemove", (e) => {
      const rect = span.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width; // 0 to 1
      
      // Map 0 -> -180deg (left side) to 1 -> 180deg (right side)
      // This creates a physical 360 degree spin that tracks the cursor's swipe direction
      const rotY = (relativeX - 0.5) * 360;
      
      span.style.transform = `scale(1.25) rotateY(${rotY}deg) translateY(-5px)`;
    });

    span.addEventListener("mouseleave", () => {
      // Transition smoothly back to original position
      span.style.transform = "scale(1) rotateY(0deg) translateY(0)";
    });

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
    // Outer container for scaling/pulsing and hover scale/glow
    const outer = document.createElement("div");
    outer.className = "hero-icon-outer p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 cursor-pointer shadow-lg";
    outer.style.animation = "hero-icon-pulse 2s ease-in-out infinite";
    outer.style.animationDelay = `${t * 0.3}s`;
    
    // Inner container for continuous linear rotation
    const inner = document.createElement("div");
    inner.className = "hero-icon-inner flex items-center justify-center";
    inner.style.animation = "hero-icon-rotate 10s linear infinite";
    
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", iconName);
    icon.className = "w-8 h-8 text-blue-400";
    
    inner.appendChild(icon);
    outer.appendChild(inner);
    iconsDiv.appendChild(outer);
  });
  wrapper.appendChild(iconsDiv);

  // Roles / Skills subtitle
  const subDiv = document.createElement("div");
  subDiv.className = "space-y-6";
  
  const mainRole = document.createElement("div");
  mainRole.className = "text-xl font-semibold text-slate-350";
  mainRole.textContent = data.personal.role;
  subDiv.appendChild(mainRole);
  
  const skillsList = document.createElement("div");
  skillsList.className = "text-sm text-accent-light font-mono tracking-widest";
  skillsList.textContent = data.personal.tagline;
  subDiv.appendChild(skillsList);

  // Hero CTAs
  const ctaDiv = document.createElement("div");
  ctaDiv.className = "flex flex-wrap justify-center gap-4 pt-4";

  const contactBtn = document.createElement("a");
  contactBtn.href = "#contact";
  contactBtn.className = "px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-650 hover:from-accent-light hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center space-x-2";
  contactBtn.innerHTML = `<span>Let's Connect</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>`;

  const cvBtn = document.createElement("a");
  cvBtn.href = "#";
  cvBtn.className = "px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all flex items-center space-x-2";
  cvBtn.innerHTML = `<i data-lucide="download" class="w-4 h-4 text-accent"></i> <span>Download Resume</span>`;
  cvBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Resume download: Place your resume PDF in the project folder and update index.html to link directly!");
  });

  ctaDiv.appendChild(contactBtn);
  ctaDiv.appendChild(cvBtn);
  subDiv.appendChild(ctaDiv);
  
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
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-5 rounded-lg border border-blue-400/20 animate-pulse mb-4">
          <p class="text-blue-300 italic text-sm md:text-base">${data.about.quote}</p>
        </div>
        
        <!-- Lucky Button Wrapper -->
        <div class="relative pt-4 flex justify-center items-center overflow-visible" id="lucky-button-container"></div>
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

  // Render the concentric cursors hover button
  renderLuckyButton(data);
}

function renderLuckyButton(data) {
  const container = document.getElementById("lucky-button-container");
  if (!container) return;

  container.innerHTML = "";

  // Create wrapper container for exact alignment
  const wrapper = document.createElement("div");
  wrapper.className = "relative inline-block overflow-visible";

  // 1. Create cursors group container
  const group = document.createElement("div");
  group.id = "cursors-group";
  group.className = "cursor-group";

  // Concentric circle settings
  const radii = [140, 180, 220, 260];
  const counts = [8, 12, 16, 20];

  radii.forEach((radius, circleIdx) => {
    const count = counts[circleIdx];
    for (let p = 0; p < count; p++) {
      const angle = (p / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const rotation = (angle * 180 / Math.PI) - 45; // rotate so tip points to center button

      // Main cursor dot item
      const item = document.createElement("div");
      item.className = "cursor-item";
      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
      item.style.setProperty("--rot", `${rotation}deg`);
      item.style.setProperty("--delay", `${circleIdx * 0.01 + p * 0.002}s`);
      item.style.setProperty("--opacity", `1`);
      item.style.setProperty("--scale", `1`);
      
      item.innerHTML = `
        <svg class="w-5 h-5 text-white fill-white" viewBox="0 0 24 24" style="filter: drop-shadow(0 0 6px rgba(255,255,255,0.6))">
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
        </svg>
      `;
      group.appendChild(item);

      // Two trails for each main cursor for high fidelity motion blur effect
      for (let m = 1; m <= 2; m++) {
        const trail = document.createElement("div");
        trail.className = "cursor-item";
        trail.style.setProperty("--x", `${x}px`);
        trail.style.setProperty("--y", `${y}px`);
        trail.style.setProperty("--rot", `${rotation}deg`);
        trail.style.setProperty("--delay", `${circleIdx * 0.01 + p * 0.002 + m * 0.008}s`);
        trail.style.setProperty("--opacity", `${1 - m * 0.3}`);
        trail.style.setProperty("--scale", `${1 - m * 0.2}`);
        
        trail.innerHTML = `
          <svg class="w-5 h-5 text-white/50 fill-white/50" viewBox="0 0 24 24" style="filter: drop-shadow(0 0 4px rgba(255,255,255,0.3))">
            <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
          </svg>
        `;
        group.appendChild(trail);
      }
    }
  });

  wrapper.appendChild(group);

  // 2. Create the hover trigger button
  const button = document.createElement("button");
  button.id = "lucky-btn";
  button.className = "backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 shadow-xl shadow-black/20 px-8 py-3 rounded-full text-white text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative z-10 select-none cursor-pointer flex items-center justify-center";
  button.textContent = data.about.luckyButtonText || "Wesley Costa";

  // Inner glow element
  const glow = document.createElement("div");
  glow.className = "absolute inset-0 rounded-full opacity-0 pointer-events-none transition-opacity duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)]";
  button.appendChild(glow);

  let isClicked = false;
  
  const activate = () => {
    group.classList.add("active");
    glow.style.opacity = "1";
  };
  
  const deactivate = () => {
    if (!isClicked) {
      group.classList.remove("active");
      glow.style.opacity = "0";
    }
  };

  button.addEventListener("mouseenter", activate);
  button.addEventListener("mouseleave", deactivate);
  
  button.addEventListener("click", () => {
    isClicked = !isClicked;
    if (isClicked) {
      activate();
      button.classList.add("ring-2", "ring-white/50");
    } else {
      button.classList.remove("ring-2", "ring-white/50");
      deactivate();
    }
  });

  wrapper.appendChild(button);
  container.appendChild(wrapper);
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
    <div class="text-center mb-10 reveal">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">Interactive gallery showcasing full-stack systems and design architectures</p>
      <div class="h-1 w-20 bg-purple-500 mx-auto rounded-full mt-4"></div>
    </div>

    <!-- Project Filters -->
    <div class="flex justify-center space-x-3 mb-10 reveal">
      <button data-filter="all" class="filter-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent/40 bg-slate-900/50 hover:bg-slate-800 text-white transition-all ring-1 ring-accent/15">All</button>
      <button data-filter="Full Stack" class="filter-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-800 bg-slate-900/50 hover:border-slate-700 text-slate-400 hover:text-white transition-all">Full Stack</button>
      <button data-filter="Frontend/Design" class="filter-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-800 bg-slate-900/50 hover:border-slate-700 text-slate-400 hover:text-white transition-all">Frontend/Design</button>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid"></div>
  `;

  const grid = document.getElementById("projects-grid");
  data.projects.forEach((proj, idx) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "project-card-wrapper group reveal transition-all duration-500 transform scale-100 opacity-100";
    cardWrapper.style.transitionDelay = `${idx * 0.15}s`;
    cardWrapper.setAttribute("data-category", proj.category);

    const card = document.createElement("div");
    card.className = "bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-accent-light/50 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 overflow-hidden relative shadow-lg flex flex-col h-full";

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
    githubA.className = "p-2 rounded-md hover:bg-slate-800/80 text-slate-400 hover:text-accent transition-colors";
    githubA.innerHTML = '<i data-lucide="github" class="w-5 h-5"></i>';
    
    const demoA = document.createElement("a");
    demoA.href = proj.demoLink;
    demoA.target = "_blank";
    demoA.className = "p-2 rounded-md hover:bg-slate-800/80 text-slate-400 hover:text-accent transition-colors";
    demoA.innerHTML = '<i data-lucide="external-link" class="w-5 h-5"></i>';

    linksDiv.appendChild(githubA);
    linksDiv.appendChild(demoA);
    topRow.appendChild(linksDiv);
    card.appendChild(topRow);

    // Title
    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300 mb-2 relative z-10 cursor-pointer";
    h3.textContent = proj.title;
    h3.addEventListener("click", () => openCaseStudy(proj));
    card.appendChild(h3);

    // Description
    const desc = document.createElement("p");
    desc.className = "text-slate-400 text-sm mb-4 flex-grow leading-relaxed relative z-10";
    desc.textContent = proj.description;
    card.appendChild(desc);

    // Case Study Link button
    const caseStudyBtn = document.createElement("button");
    caseStudyBtn.className = "mb-4 text-xs font-semibold text-accent hover:text-accent-light flex items-center space-x-1 transition-all duration-300 relative z-10 self-start hover:translate-x-1 outline-none";
    caseStudyBtn.innerHTML = `<span>Read Case Study</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>`;
    caseStudyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openCaseStudy(proj);
    });
    card.appendChild(caseStudyBtn);

    // Badges Row
    const badgesRow = document.createElement("div");
    badgesRow.className = "flex flex-wrap gap-2 relative z-10 mt-auto";
    proj.tech.forEach(techTag => {
      const badge = document.createElement("span");
      badge.className = "px-3 py-1 bg-accent/10 text-accent rounded-full text-xs border border-accent/20 font-mono";
      badge.textContent = techTag;
      badgesRow.appendChild(badge);
    });
    card.appendChild(badgesRow);

    cardWrapper.appendChild(card);
    grid.appendChild(cardWrapper);
  });

  // Filter Buttons Click Handler
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      
      filterBtns.forEach(b => {
        b.classList.remove("border-accent/40", "ring-1", "ring-accent/15", "text-white");
        b.classList.add("border-slate-800", "text-slate-400");
      });
      btn.classList.add("border-accent/40", "ring-1", "ring-accent/15", "text-white");
      btn.classList.remove("border-slate-800", "text-slate-400");

      const cards = grid.querySelectorAll(".project-card-wrapper");
      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
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

// 10. PREMIUM ACCENT THEME CUSTOMIZER SYSTEM
function initThemeSelector() {
  const btn = document.getElementById("theme-selector-btn");
  const dropdown = document.getElementById("theme-dropdown");
  if (!btn || !dropdown) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    dropdown.classList.add("hidden");
  });

  const colors = {
    blue: {
      color: "#3b82f6",
      light: "#60a5fa",
      rgb: "59, 130, 246"
    },
    emerald: {
      color: "#10b981",
      light: "#34d399",
      rgb: "16, 185, 129"
    },
    pink: {
      color: "#ec4899",
      light: "#f472b6",
      rgb: "236, 72, 153"
    },
    gold: {
      color: "#f59e0b",
      light: "#fbbf24",
      rgb: "245, 158, 11"
    }
  };

  const applyTheme = (colorName) => {
    const config = colors[colorName];
    if (!config) return;

    document.documentElement.style.setProperty("--accent-color", config.color);
    document.documentElement.style.setProperty("--accent-light", config.light);
    document.documentElement.style.setProperty("--accent-color-rgb", config.rgb);
    localStorage.setItem("portfolio-theme", colorName);
    
    // Highlight the selected option in desktop menu
    dropdown.querySelectorAll("button").forEach(b => {
      if (b.getAttribute("data-color") === colorName) {
        b.classList.add("bg-slate-900/80", "ring-1", "ring-slate-800");
      } else {
        b.classList.remove("bg-slate-900/80", "ring-1", "ring-slate-800");
      }
    });

    // Highlight the selected option in mobile menu
    document.querySelectorAll(".mobile-color-btn").forEach(b => {
      if (b.getAttribute("data-color") === colorName) {
        b.classList.add("ring-2", "ring-white", "scale-110");
        b.classList.remove("border-slate-700");
      } else {
        b.classList.remove("ring-2", "ring-white", "scale-110");
        b.classList.add("border-slate-700");
      }
    });
  };

  // Select all color buttons on the page (both desktop dropdown and mobile menu)
  document.querySelectorAll("[data-color]").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const color = button.getAttribute("data-color");
      applyTheme(color);
    });
  });

  // Apply default or cached theme on load
  const cachedTheme = localStorage.getItem("portfolio-theme") || "blue";
  applyTheme(cachedTheme);
}

// 11. GAMIFIED INTERACTIVE TERMINAL SHELL
function initTerminalConsole() {
  const toggleBtn = document.getElementById("terminal-toggle-btn");
  const modal = document.getElementById("terminal-modal");
  const closeBtn = document.getElementById("terminal-close-btn");
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");

  if (!toggleBtn || !modal || !closeBtn || !input || !output) return;

  const openTerminal = () => {
    modal.classList.remove("hidden");
    input.focus();
  };

  const closeTerminal = () => {
    modal.classList.add("hidden");
  };

  toggleBtn.addEventListener("click", openTerminal);
  closeBtn.addEventListener("click", closeTerminal);

  // Keyboard shortcut listener ('/' to open, 'ESC' to close)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTerminal();
    }
    if (e.key === "/" && modal.classList.contains("hidden") && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      openTerminal();
    }
  });

  // Click outside to close modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeTerminal();
    }
  });

  const commands = {
    help: () => {
      return `Available Commands:<br>
  - <span class="text-purple-400 font-bold">about</span>    : Learn more about Wesley Costa<br>
  - <span class="text-purple-400 font-bold">skills</span>   : Print core technologies and proficiencies<br>
  - <span class="text-purple-400 font-bold">projects</span> : View high-fidelity projects and links<br>
  - <span class="text-purple-400 font-bold">contact</span>  : Display email, github and socials<br>
  - <span class="text-purple-400 font-bold">clear</span>    : Clear terminal screen output<br>
  - <span class="text-purple-400 font-bold">exit</span>     : Close the terminal console`;
    },
    about: () => {
      const data = window.PORTFOLIO_DATA;
      return `<span class="text-white font-bold">${data.personal.name}</span> - ${data.personal.role}<br>
${data.personal.shortIntro}<br>
"${data.personal.quote}"`;
    },
    skills: () => {
      const data = window.PORTFOLIO_DATA;
      let html = "Wesley Costa's Tech Stack & Expertise:<br>";
      data.skills.forEach(cat => {
        html += `<span class="text-white font-bold">${cat.category}</span>:<br>`;
        cat.skills.forEach(s => {
          html += `  - ${s.icon} ${s.name}: ${s.level}%<br>`;
        });
      });
      return html;
    },
    projects: () => {
      const data = window.PORTFOLIO_DATA;
      let html = "Core Projects Portfolio:<br>";
      data.projects.forEach(p => {
        html += `- <span class="text-white font-bold">${p.title}</span> [${p.category}]<br>
  ${p.description}<br>
  Tech Stack: ${p.tech.join(", ")}<br>
  GitHub: <a href="${p.githubLink}" target="_blank" class="underline text-blue-400">${p.githubLink}</a><br><br>`;
      });
      return html;
    },
    contact: () => {
      const data = window.PORTFOLIO_DATA;
      return `Reach out to Wesley Costa:<br>
  - Email: <a href="mailto:${data.contact.email}" class="text-blue-400 underline">${data.contact.email}</a><br>
  - GitHub: <a href="${data.contact.github}" target="_blank" class="text-blue-400 underline">${data.contact.github}</a><br>
  - LinkedIn: <a href="${data.contact.linkedin}" target="_blank" class="text-blue-400 underline">${data.contact.linkedin}</a>`;
    },
    sudo: () => {
      return `<span class="text-red-400">sudo: Permission denied. Wesley Costa is the root administrator. Nice try! 🧑‍💻</span>`;
    }
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const fullCmd = input.value.trim();
      const cmd = fullCmd.toLowerCase();
      input.value = "";

      // Print prompt and command typed
      const line = document.createElement("div");
      line.innerHTML = `<span class="text-purple-400">visitor@wescostt:~$</span> <span class="text-white">${fullCmd}</span>`;
      output.appendChild(line);

      if (cmd === "") return;

      if (cmd === "clear") {
        output.innerHTML = "";
        return;
      }

      if (cmd === "exit" || cmd === "close") {
        closeTerminal();
        return;
      }

      const response = document.createElement("div");
      if (commands[cmd]) {
        response.innerHTML = commands[cmd]();
      } else {
        response.innerHTML = `shell: command not found: <span class="text-red-400">${fullCmd}</span>. Type <span class="text-purple-400">help</span> for assistance.`;
      }
      output.appendChild(response);
      
      // Auto scroll to bottom
      output.scrollTop = output.scrollHeight;
    }
  });
}

// 12. HIGH-FIDELITY PROJECT CASE STUDY MODAL SYSTEM
function initCaseStudyModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("project-modal-close-btn");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
}

function openCaseStudy(proj) {
  const modal = document.getElementById("project-modal");
  const title = document.getElementById("project-modal-title");
  const problem = document.getElementById("project-modal-problem");
  const solution = document.getElementById("project-modal-solution");
  const impact = document.getElementById("project-modal-impact");
  const tech = document.getElementById("project-modal-tech");
  const github = document.getElementById("project-modal-github");
  const demo = document.getElementById("project-modal-demo");

  if (!modal || !title || !problem || !solution || !impact || !tech || !github || !demo) return;

  title.textContent = proj.title;
  problem.textContent = proj.caseStudy ? proj.caseStudy.problem : "Challenge description coming soon.";
  solution.textContent = proj.caseStudy ? proj.caseStudy.solution : "Solution breakdown coming soon.";
  impact.textContent = proj.caseStudy ? proj.caseStudy.impact : "Impact results coming soon.";

  tech.innerHTML = "";
  proj.tech.forEach(t => {
    const badge = document.createElement("span");
    badge.className = "px-3 py-1 bg-accent/10 text-accent rounded-full text-xs border border-accent/20 font-mono";
    badge.textContent = t;
    tech.appendChild(badge);
  });

  github.href = proj.githubLink || "#";
  demo.href = proj.demoLink || "#";

  modal.classList.remove("hidden");
  lucide.createIcons();
}
