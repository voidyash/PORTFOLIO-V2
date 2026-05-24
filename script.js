"use strict";

const TITLES = [
    "PROGRAMMER",
    "AI BUILDER",
    "GAME DEVELOPER",
    "BROADCAST DIRECTOR",
    "CREATIVE TECHNOLOGIST",
    "SYSTEMS THINKER",
];

const SKILLS = [
    { name: "C", icon: "⚙️", level: 72, cat: "programming" },
    { name: "C++", icon: "🔩", level: 65, cat: "programming" },
    { name: "Python", icon: "🐍", level: 85, cat: "programming" },
    { name: "JavaScript", icon: "✴️", level: 88, cat: "programming" },
    { name: "C#", icon: "🎯", level: 75, cat: "programming" },
    { name: "GDScript", icon: "📜", level: 70, cat: "programming" },
    { name: "Ollama", icon: "🤖", level: 80, cat: "ai" },
    { name: "LLM APIs", icon: "🧠", level: 78, cat: "ai" },
    { name: "AI Agents", icon: "🦾", level: 72, cat: "ai" },
    { name: "Prompt Eng.", icon: "💬", level: 82, cat: "ai" },
    { name: "Vector DBs", icon: "🗂️", level: 60, cat: "ai" },
    { name: "Unity", icon: "🎮", level: 80, cat: "gamedev" },
    { name: "Godot", icon: "🌀", level: 75, cat: "gamedev" },
    { name: "Unreal Engine", icon: "🎬", level: 55, cat: "gamedev" },
    { name: "Shader Code", icon: "👨‍💻", level: 60, cat: "gamedev" },
    { name: "Node.js", icon: "🟢", level: 82, cat: "backend" },
    { name: "Socket.io", icon: "⚡", level: 78, cat: "backend" },
    { name: "REST APIs", icon: "🔗", level: 80, cat: "backend" },
    { name: "Git", icon: "⚫", level: 85, cat: "backend" },
    { name: "Three.js", icon: "🔺", level: 72, cat: "frontend" },
    { name: "HTML/CSS", icon: "🎨", level: 88, cat: "frontend" },
    { name: "GSAP", icon: "🎞️", level: 70, cat: "frontend" },
    { name: "OBS Studio", icon: "📹", level: 90, cat: "production" },
    { name: "Broadcast Director", icon: "📡", level: 85, cat: "production" },
    { name: "Live Overlay", icon: "🖥️", level: 80, cat: "production" },
];

const PROJECTS = [
    {
        title: "VOIDAI SYSTEM",
        emoji: "🧠",
        desc: "Custom local AI ecosystem designed for experimentation with LLMs, agents, memory systems, tools, vector databases, and modular workflows. Built as a personal AI engineering lab.",
        tags: ["Python", "Ollama", "LLMs", "Agents"],
        type: "AI",
        challenge:
            "Managing local model performance and memory usage while keeping large-context conversations responsive on consumer hardware.",
        learned:
            "Local inference optimization, context management, model orchestration, agent architecture, and practical AI system design.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "BROADCAST OVERLAY ENGINE",
        emoji: "📡",
        desc: "Real-time esports-style broadcast overlay system with dynamic score updates, animated eliminations, team tracking, and live scene synchronization.",
        tags: ["JavaScript", "Socket.io", "OBS", "HTML/CSS"],
        type: "PRODUCTION",
        challenge:
            "Keeping overlay state perfectly synchronized during rapid live updates while preventing visual glitches and animation desync.",
        learned:
            "Real-time event systems, browser source rendering, animation state management, and production-grade UI reliability.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "ENDLESS RUNNER PROJECT",
        emoji: "🏃",
        desc: "Endless runner game created while learning game development workflows. Includes obstacle spawning, movement systems, scoring logic, and gameplay balancing.",
        tags: ["Unity", "C#", "GameDev"],
        type: "GAME",
        challenge:
            "Understanding Unity component architecture while debugging movement and collision systems without breaking gameplay flow.",
        learned:
            "Core Unity workflow, prefabs, physics systems, collision handling, and iterative debugging.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "FPS GAME PROTOTYPE",
        emoji: "🎯",
        desc: "Experimental first-person shooter project focused on movement systems, shooting mechanics, and modular gameplay experimentation.",
        tags: ["Unity", "C#", "FPS"],
        type: "GAME",
        challenge:
            "Balancing player movement responsiveness with stable shooting and camera control.",
        learned:
            "FPS architecture, raycasting, weapon logic, player controller systems, and gameplay feel tuning.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "SOCKET.IO REALTIME SYSTEMS",
        emoji: "🌐",
        desc: "Collection of realtime multiplayer and synchronization experiments using Socket.io for low-latency communication between clients and servers.",
        tags: ["Node.js", "Socket.io", "Realtime"],
        type: "BACKEND",
        challenge:
            "Handling state synchronization cleanly when multiple clients trigger rapid updates simultaneously.",
        learned:
            "Realtime networking, websocket architecture, server-client synchronization, and event-driven backend design.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "LLM FROM SCRATCH JOURNEY",
        emoji: "📚",
        desc: "Hands-on implementation and experimentation while studying large language model internals, tokenization, embeddings, datasets, and local training workflows.",
        tags: ["Python", "PyTorch", "LLM"],
        type: "AI",
        challenge:
            "Running modern AI workflows on limited hardware while understanding the deeper math and architecture behind transformers.",
        learned:
            "Tokenization pipelines, embeddings, context windows, GPU setup, PyTorch environments, and transformer fundamentals.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "GODOT 2D GAME PROJECT",
        emoji: "🕹️",
        desc: "2D game project created in Godot by combining multiple tutorials with custom experimentation and problem-solving.",
        tags: ["Godot", "GDScript", "2D"],
        type: "GAME",
        challenge:
            "Connecting fragmented tutorial knowledge into a functional original project.",
        learned:
            "Scene systems, scripting logic, game loops, and practical trial-and-error development.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "PORTFOLIO CYBER INTERFACE",
        emoji: "⚡",
        desc: "Interactive futuristic portfolio website featuring 3D visuals, animated UI systems, holographic effects, and immersive frontend design.",
        tags: ["HTML", "CSS", "JavaScript", "Three.js"],
        type: "FRONTEND",
        challenge:
            "Creating high-end visuals without destroying performance or responsiveness.",
        learned:
            "Advanced frontend animation, 3D rendering concepts, GPU-friendly effects, and immersive UI design.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "GOOGLE SHEETS API AUTOMATION",
        emoji: "📊",
        desc: "Backend integration project using Google Sheets API for realtime data handling, automation, and dynamic content management.",
        tags: ["Node.js", "Google APIs", "Automation"],
        type: "BACKEND",
        challenge:
            "Handling authentication setup and ensuring realtime updates remained stable across connected systems.",
        learned:
            "OAuth flows, API integration, async operations, and external service orchestration.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
    {
        title: "LOCAL AI MODEL PLAYGROUND",
        emoji: "🧪",
        desc: "Testing environment for experimenting with different Ollama-hosted models, context lengths, VRAM limits, and local inference performance.",
        tags: ["Ollama", "AI", "Python"],
        type: "AI",
        challenge:
            "Balancing model quality against RAM and VRAM limitations on local hardware.",
        learned:
            "Quantization tradeoffs, inference optimization, model selection, and hardware-aware AI deployment.",
        github: "https://discord.gg/SFpXw7KXqh",
        demo: "#",
    },
];

const TIMELINE = [
    {
        year: "2022",
        title: "THE ENTRY POINT",
        desc: "Started coding with C++. Variables, loops, functions, pointers the fundamentals finally started making sense after enough repetition and debugging pain.",
        side: "right",
    },

    {
        year: "2022",
        title: "DISCOVERING GODOT",
        desc: "Godot became the first real game engine playground. Followed tutorials, experimented constantly, broke projects repeatedly, and slowly understood how game systems actually connect.",
        side: "left",
    },

    {
        year: "2023",
        title: "THE EXPERIMENTATION PHASE",
        desc: "Stopped just following tutorials and started modifying everything. Combined different systems together, tested random ideas, and learned mostly through trial, error, and persistence.",
        side: "right",
    },

    {
        year: "2023",
        title: "EXPANDING THE TOOLSET",
        desc: "Moved beyond one engine and one language. Started working with VS Code, Visual Studio, JetBrains Rider, Unity, and Unreal Engine. Each tool changed how problems were approached.",
        side: "left",
    },

    {
        year: "2024",
        title: "UNITY & REAL GAME SYSTEMS",
        desc: "Built gameplay systems in Unity including endless runner mechanics, movement systems, collisions, and FPS experiments. Began understanding architecture instead of isolated scripts.",
        side: "right",
    },

    {
        year: "2024",
        title: "REALTIME & BROADCAST SYSTEMS",
        desc: "Started building realtime overlays and synchronization systems using JavaScript and Socket.io. Learned quickly that live systems punish weak logic immediately.",
        side: "left",
    },

    {
        year: "2025",
        title: "AI ENGINEERING RABBIT HOLE",
        desc: "Local LLMs, Ollama, AI agents, memory systems, context windows, inference optimization — AI shifted from curiosity to obsession. Built personal experimental AI infrastructure.",
        side: "right",
    },

    {
        year: "2025",
        title: "VOIDAI & SYSTEMS THINKING",
        desc: "Started designing projects as connected ecosystems instead of isolated apps. AI systems, backend logic, realtime communication, frontend interfaces, and experimentation pipelines began merging together.",
        side: "left",
    },

    {
        year: "2026",
        title: "THE LAB ERA",
        desc: "This portfolio represents an active technical lab rather than a finished showcase. Games, AI systems, realtime infrastructure, experiments, failures, and constant iteration permanent beta mode.",
        side: "right",
    },
];

(function initLoader() {
    const bar = document.getElementById("loaderBar");
    const pct = document.getElementById("loaderPct");
    const txt = document.getElementById("loaderText");
    const loader = document.getElementById("loader");
    const messages = [
        "LOADING CORE MODULES...",
        "INITIALIZING THREE.JS RENDERER...",
        "SPAWNING PARTICLE SYSTEM...",
        "CALIBRATING NEON MATRIX...",
        "BOOTING NEURAL CORE...",
        "SYSTEMS NOMINAL.",
    ];
    let current = 0;
    const interval = setInterval(() => {
        current += Math.random() * 22 + 8;
        if (current > 100) current = 100;
        bar.style.width = current + "%";
        pct.textContent = Math.floor(current) + "%";
        txt.textContent =
            messages[Math.min(Math.floor(current / 18), messages.length - 1)];
        if (current >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add("hidden");
                initCounters();
            }, 500);
        }
    }, 80);
})();

(function initCursor() {
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("cursor-trail");
    let mx = 0,
        my = 0,
        tx = 0,
        ty = 0;
    document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
    });
    function animateTrail() {
        tx += (mx - tx) * 0.15;
        ty += (my - ty) * 0.15;
        trail.style.left = tx + "px";
        trail.style.top = ty + "px";
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
})();

(function initNav() {
    const nav = document.getElementById("nav");
    const hamburger = document.getElementById("hamburger");
    const links = document.querySelector(".nav-links");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    });
    hamburger.addEventListener("click", () => {
        links.classList.toggle("open");
    });
    links
        .querySelectorAll("a")
        .forEach((a) =>
            a.addEventListener("click", () => links.classList.remove("open")),
        );
})();

(function initHUD() {
    const temp = document.getElementById("hudTemp");
    const ping = document.getElementById("hudPing");
    setInterval(() => {
        temp.textContent = (35 + Math.random() * 3).toFixed(1) + "°C";
        ping.textContent = Math.floor(2 + Math.random() * 8) + "ms";
    }, 1800);
})();

//   (function initSound() {
//     const btn = document.getElementById('soundToggle');
//     let on = false;
//     btn.addEventListener('click', () => {
//       on = !on;
//       btn.textContent = on ? '♬' : '♪';
//       btn.style.color = on ? 'var(--cyan)' : '';
//       // Audio context stub — wire up Web Audio API for ambient sound here
//     });
//   })();

(function initHeroCanvas() {
    const canvas = document.getElementById("heroCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000,
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // Grid floor
    const gridHelper = new THREE.GridHelper(120, 60, 0x00d2ff, 0x001928);
    gridHelper.position.y = -12;
    scene.add(gridHelper);

    // Floating particles
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 120;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
        color: 0x00d2ff,
        size: 0.18,
        transparent: true,
        opacity: 0.7,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Wireframe torus-knot
    const torusKnotGeo = new THREE.TorusKnotGeometry(0, 1.8, 120, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
        color: 0x00ffcc,
        wireframe: true,
        transparent: true,
        opacity: 0,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(24000, 4, -10);
    scene.add(torusKnot);

    // Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(10, 1);
    const icoMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(0, 2, -8);
    scene.add(ico);

    // Ambient light ring
    const ringGeo = new THREE.TorusGeometry(18, 0.08, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        transparent: true,
        opacity: 0.15,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -10;
    scene.add(ring);

    // Mouse parallax
    let mouseX = 0,
        mouseY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    let frame = 0;
    function animate() {
        requestAnimationFrame(animate);
        frame++;
        const t = frame * 0.005;

        particles.rotation.y += 0.0008;
        particles.rotation.x += 0.0003;
        torusKnot.rotation.x += 0.004;
        torusKnot.rotation.y += 0.006;
        ico.rotation.x += 0.006;
        ico.rotation.z += 0.004;
        ring.rotation.z += 0.001;
        gridHelper.position.z = (gridHelper.position.z - 0.04) % 2;

        // Camera parallax
        camera.position.x += (mouseX * 4 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        // Pulsate torus knot opacity
        torusKnotMat.opacity = 0.18 + Math.sin(t * 2) * 0.07;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    });
})();

(function initTitleRotator() {
    const el = document.getElementById("rotatingTitle");
    let idx = 0;
    function next() {
        el.style.animation = "none";
        void el.offsetWidth;
        el.textContent = TITLES[idx];
        el.style.animation = "titleFade 3s ease forwards";
        idx = (idx + 1) % TITLES.length;
    }
    next();
    setInterval(next, 3000);
})();

function initCounters() {
    const nums = document.querySelectorAll(".h-num[data-target]");
    nums.forEach((el) => {
        const target = parseInt(el.dataset.target);
        const suffix = target >= 1000 ? "+" : "+";
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + (current >= target ? suffix : "");
            if (current >= target) clearInterval(timer);
        }, 25);
    });
}

(function initSkills() {
    const grid = document.getElementById("skillsGrid");
    const buttons = document.querySelectorAll(".skill-cat-btn");

    function render(filter) {
        grid.innerHTML = "";
        const filtered =
            filter === "all" ? SKILLS : SKILLS.filter((s) => s.cat === filter);
        filtered.forEach((skill, i) => {
            const card = document.createElement("div");
            card.className = "skill-card";
            card.style.animationDelay = i * 40 + "ms";
            card.innerHTML = `
          <div class="skill-icon">${skill.icon}</div>
          <div class="skill-name">${skill.name}</div>
          <div class="skill-bar-wrap"><div class="skill-bar" data-level="${skill.level}"></div></div>
          <div class="skill-cat-label">${skill.cat.toUpperCase()}</div>
        `;
            grid.appendChild(card);
            // Animate bar after paint
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    card.querySelector(".skill-bar").style.width = skill.level + "%";
                });
            });
        });
    }

    render("all");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            render(btn.dataset.cat);
        });
    });
})();

(function initProjects() {
    const grid = document.getElementById("projectsGrid");
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const modalClose = document.getElementById("modalClose");

    PROJECTS.forEach((p) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
        <div class="project-thumb">
          <div class="project-thumb-grid"></div>
          <span>${p.emoji}</span>
          <div class="project-thumb-label">${p.type}</div>
        </div>
        <div class="project-body">
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
          <div class="project-actions">
            <button class="project-btn primary" data-open="${p.title}">DETAILS</button>
            <a href="${p.github}" class="project-btn secondary" target="_blank">GITHUB</a>
          </div>
        </div>
      `;
        grid.appendChild(card);

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    grid.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-open]");
        if (!btn) return;
        const project = PROJECTS.find((p) => p.title === btn.dataset.open);
        if (!project) return;
        modalContent.innerHTML = `
        <div style="font-size:3rem;margin-bottom:1rem">${project.emoji}</div>
        <h2>${project.title}</h2>
        <div class="modal-meta">TYPE: ${project.type} &nbsp;|&nbsp; STACK: ${project.tags.join(", ")}</div>
        <p>${project.desc}</p>
        <div class="modal-section-title">// CHALLENGE</div>
        <p>${project.challenge}</p>
        <div class="modal-section-title">// WHAT I LEARNED</div>
        <p>${project.learned}</p>
        <div class="project-actions" style="margin-top:1.5rem">
          <a href="${project.github}" class="project-btn primary" target="_blank">CONTACT TO GET A LIVE DEMO</a>
        </div>
      `;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
})();

(function initTimeline() {
    const wrap = document.getElementById("timelineWrap");
  
    const line = document.createElement("div");
    line.className = "timeline-line";
    wrap.appendChild(line);
  
    TIMELINE.forEach((item) => {
      const div = document.createElement("div");
      div.className = `tl-item ${item.side}`;
  
      div.innerHTML = `
        <div class="tl-card">
          <div class="tl-year">${item.year}</div>
          <div class="tl-title">${item.title}</div>
          <div class="tl-desc">${item.desc}</div>
        </div>
  
        <div class="tl-node"></div>
  
        <div class="tl-connector">
          <svg viewBox="0 0 140 120">
            <path d="M0 60 H90 Q120 60 120 20 V0"></path>
          </svg>
        </div>
      `;
  
      wrap.appendChild(div);
    });
  })();

(function initLabCanvas() {
    const canvas = document.getElementById("labCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        100,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x001830, 1);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x00d2ff, 4, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x00ffcc, 2, 15);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    // Inner core — icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshPhongMaterial({
        color: 0x001830,
        emissive: 0x00d2ff,
        emissiveIntensity: 0.3,
        wireframe: false,
        transparent: true,
        opacity: 0.85,
        shininess: 120,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Wireframe shell
    const shellGeo = new THREE.IcosahedronGeometry(1.55, 1);
    const shellMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    scene.add(shell);

    // Outer ring 1
    const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.025, 8, 80),
        new THREE.MeshBasicMaterial({
            color: 0x00ffcc,
            transparent: true,
            opacity: 0.5,
        }),
    );
    ring1.rotation.x = Math.PI / 4;
    scene.add(ring1);

    // Outer ring 2
    const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(3.0, 0.015, 8, 80),
        new THREE.MeshBasicMaterial({
            color: 0x00d2ff,
            transparent: true,
            opacity: 0.3,
        }),
    );
    ring2.rotation.x = -Math.PI / 5;
    ring2.rotation.z = Math.PI / 6;
    scene.add(ring2);

    // Orbit particles
    const orbitCount = 60;
    const orbitPos = new Float32Array(orbitCount * 3);
    const orbitAngles = [];
    for (let i = 0; i < orbitCount; i++) {
        orbitAngles.push({
            angle: (i / orbitCount) * Math.PI * 2,
            radius: 2.4 + Math.random() * 0.3,
            y: (Math.random() - 0.5) * 0.8,
        });
    }
    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute("position", new THREE.BufferAttribute(orbitPos, 3));
    const orbitPoints = new THREE.Points(
        orbitGeo,
        new THREE.PointsMaterial({
            color: 0x00d2ff,
            size: 0.06,
            transparent: true,
            opacity: 0.9,
        }),
    );
    scene.add(orbitPoints);

    // Mouse drag
    let isDragging = false,
        prevX = 0,
        prevY = 0,
        rotX = 0,
        rotY = 0;
    canvas.addEventListener("mousedown", (e) => {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
    });
    window.addEventListener("mouseup", () => {
        isDragging = false;
    });
    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        rotY += (e.clientX - prevX) * 0.01;
        rotX += (e.clientY - prevY) * 0.01;
        prevX = e.clientX;
        prevY = e.clientY;
    });

    // Touch drag
    let prevTX = 0,
        prevTY = 0;
    canvas.addEventListener(
        "touchstart",
        (e) => {
            prevTX = e.touches[0].clientX;
            prevTY = e.touches[0].clientY;
        },
        { passive: true },
    );
    canvas.addEventListener(
        "touchmove",
        (e) => {
            rotY += (e.touches[0].clientX - prevTX) * 0.01;
            rotX += (e.touches[0].clientY - prevTY) * 0.01;
            prevTX = e.touches[0].clientX;
            prevTY = e.touches[0].clientY;
        },
        { passive: true },
    );

    // Scroll zoom
    canvas.addEventListener(
        "wheel",
        (e) => {
            camera.position.z = Math.max(
                3,
                Math.min(9, camera.position.z + e.deltaY * 0.01),
            );
        },
        { passive: true },
    );

    let frame = 0;
    function animate() {
        requestAnimationFrame(animate);
        frame++;
        const t = frame * 0.008;

        core.rotation.x = rotX + t * 0.3;
        core.rotation.y = rotY + t * 0.5;
        shell.rotation.x = rotX - t * 0.2;
        shell.rotation.y = rotY + t * 0.4;
        ring1.rotation.z += 0.008;
        ring2.rotation.y += 0.005;

        // Pulse emissive
        coreMat.emissiveIntensity = 0.3 + Math.sin(t * 3) * 0.15;

        // Update orbit particles
        for (let i = 0; i < orbitCount; i++) {
            orbitAngles[i].angle += 0.012;
            const a = orbitAngles[i];
            orbitPos[i * 3 + 0] = Math.cos(a.angle) * a.radius;
            orbitPos[i * 3 + 1] = a.y + Math.sin(a.angle * 0.5) * 0.2;
            orbitPos[i * 3 + 2] = Math.sin(a.angle) * a.radius;
        }
        orbitGeo.attributes.position.needsUpdate = true;

        // Light pulse
        pointLight1.intensity = 4 + Math.sin(t * 2) * 1;
        pointLight2.intensity = 2 + Math.cos(t * 1.5) * 0.8;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    });
})();

// (function initContact() {
//     const btn = document.getElementById("sendBtn");
//     const status = document.getElementById("sendStatus");
//     btn.addEventListener("click", () => {
//         const name = document.getElementById("cName").value.trim();
//         const email = document.getElementById("cEmail").value.trim();
//         const msg = document.getElementById("cMsg").value.trim();
//         if (!name || !email || !msg) {
//             status.textContent = "// ERROR: All fields required.";
//             status.className = "send-status err";
//             return;
//         }
//         btn.textContent = "TRANSMITTING...";
//         btn.disabled = true;
//         setTimeout(() => {
//             status.textContent = "// MESSAGE TRANSMITTED. Standing by.";
//             status.className = "send-status ok";
//             btn.textContent = "TRANSMIT";
//             btn.disabled = false;
//             document.getElementById("cName").value = "";
//             document.getElementById("cEmail").value = "";
//             document.getElementById("cMsg").value = "";
//         }, 1600);
//     });
// })();

(function initContact() {

    emailjs.init("zDPYWPoT5sCWe80SK");

    const btn = document.getElementById("sendBtn");
    const status = document.getElementById("sendStatus");

    btn.addEventListener("click", async () => {

        const name = document.getElementById("cName").value.trim();
        const email = document.getElementById("cEmail").value.trim();
        const msg = document.getElementById("cMsg").value.trim();

        if (!name || !email || !msg) {

            status.textContent = "// ERROR: All fields required.";
            status.className = "send-status err";

            return;
        }

        btn.disabled = true;

        btn.innerHTML = `
            <span>TRANSMITTING...</span>
        `;

        try {

            await emailjs.send(
                "service_d6cb24r",
                "template_e1n4n6b",
                {
                    name: name,
                    email: email,
                    message: msg
                }
            );

            status.textContent = "// MESSAGE TRANSMITTED.";
            status.className = "send-status ok";

            document.getElementById("cName").value = "";
            document.getElementById("cEmail").value = "";
            document.getElementById("cMsg").value = "";

        } catch (error) {

            console.error(error);

            status.textContent = "// TRANSMISSION FAILED.";
            status.className = "send-status err";
        }

        btn.disabled = false;

        btn.innerHTML = `
            <span>TRANSMIT</span>
            <span class="btn-icon">↣</span>
        `;

    });

})();

(function initScrollAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
        return;
    gsap.registerPlugin(ScrollTrigger);

    // Section headers fade-in
    document.querySelectorAll(".section-header").forEach((el) => {
        gsap.fromTo(
            el,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            },
        );
    });

    // Project cards stagger
    gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#projects",
                start: "top 70%",
                toggleActions: "play none none none",
            },
        },
    );

    // Skills section
    gsap.fromTo(
        ".skills-categories",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        },
    );
})();

(function initReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 },
    );

    document
        .querySelectorAll(
            "[data-reveal], .about-card, .tl-item, .contact-links, .about-tools",
        )
        .forEach((el) => {
            observer.observe(el);
        });
})();

(function initSkillBarObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
                        bar.style.width = bar.dataset.level + "%";
                    });
                }
            });
        },
        { threshold: 0.2 },
    );
    const grid = document.getElementById("skillsGrid");
    if (grid) observer.observe(grid);
})();

(function initEasterEgg() {
    const KONAMI = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];
    let seq = [];
    document.addEventListener("keydown", (e) => {
        seq.push(e.key);
        seq = seq.slice(-KONAMI.length);
        if (seq.join("") === KONAMI.join("")) {
            document.getElementById("easterEgg").classList.remove("hidden");
        }
    });
    document.getElementById("eggClose").addEventListener("click", () => {
        document.getElementById("easterEgg").classList.add("hidden");
    });
})();

(function initNavActive() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");
    window.addEventListener(
        "scroll",
        () => {
            let current = "";
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
            });
            links.forEach((a) => {
                a.style.color =
                    a.getAttribute("href") === "#" + current ? "var(--cyan)" : "";
            });
        },
        { passive: true },
    );
})();

(function initGlitch() {
    const name = document.getElementById("heroName");
    if (!name) return;
    setInterval(() => {
        if (Math.random() < 0.08) {
            name.style.textShadow = "2px 0 var(--red), -2px 0 var(--cyan2)";
            name.style.transform = `translateX(${(Math.random() - 0.5) * 4}px)`;
            setTimeout(() => {
                name.style.textShadow = "";
                name.style.transform = "";
            }, 80);
        }
    }, 800);
})();

window.addEventListener("resize", () => {
    document.querySelectorAll("canvas").forEach((c) => {
        if (c.id === "heroCanvas") {
            c.width = c.clientWidth;
            c.height = c.clientHeight;
        }
    });
});
