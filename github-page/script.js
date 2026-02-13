const folders = [
  { key: "logs", path: "log" },
  { key: "history", path: "history" },
  { key: "todo", path: "to-do" },
  { key: "errors", path: "error" },
];

const foldersGrid = document.getElementById("foldersGrid");
const folderTemplate = document.getElementById("folderTemplate");
const fileTemplate = document.getElementById("fileTemplate");
const refreshButton = document.getElementById("refreshButton");
const eventEditor = document.getElementById("eventEditor");
const eventStatus = document.getElementById("eventStatus");
const downloadEventButton = document.getElementById("downloadEventButton");

function detectGitHubRepo() {
  const host = window.location.hostname;
  if (!host.endsWith("github.io")) return null;

  const owner = host.replace(".github.io", "");
  const segments = window.location.pathname.split("/").filter(Boolean);
  const repo = segments[0] || "";
  if (!owner || !repo) return null;
  return { owner, repo };
}

function prettyContent(rawText) {
  try {
    return JSON.stringify(JSON.parse(rawText), null, 2);
  } catch {
    return rawText;
  }
}

function formatSize(bytes) {
  return `${bytes} bytes`;
}

async function listFiles(folderPath) {
  const repo = detectGitHubRepo();

  if (repo) {
    const apiUrl = `https://api.github.com/repos/${repo.owner}/${repo.repo}/contents/${folderPath}`;
    const response = await fetch(apiUrl);
    if (!response.ok) return [];

    const payload = await response.json();
    return Array.isArray(payload)
      ? payload.filter((item) => item.type === "file").map((item) => ({
          name: item.name,
          path: item.path,
          size: item.size,
          downloadUrl: item.download_url,
        }))
      : [];
  }

  const fallback = ["1.json", "2.json", "3.json"];
  return fallback.map((name) => ({
    name,
    path: `${folderPath}/${name}`,
    size: 0,
    downloadUrl: `../${folderPath}/${name}`,
  }));
}

async function readFile(downloadUrl) {
  const response = await fetch(downloadUrl);
  if (!response.ok) throw new Error(`Failed to read ${downloadUrl}`);
  return response.text();
}

async function loadFolder(folder) {
  const fragment = folderTemplate.content.cloneNode(true);
  const title = fragment.querySelector("h3");
  const countPill = fragment.querySelector(".pill");
  const filesNode = fragment.querySelector(".files");

  title.textContent = folder.path;

  const files = await listFiles(folder.path);
  countPill.textContent = `${files.length} files`;

  if (files.length === 0) {
    filesNode.innerHTML = '<p class="muted">No files found.</p>';
    foldersGrid.appendChild(fragment);
    return;
  }

  for (const file of files) {
    const fileFragment = fileTemplate.content.cloneNode(true);
    fileFragment.querySelector(".file-name").textContent = file.name;
    fileFragment.querySelector(".file-size").textContent = formatSize(file.size || 0);
    fileFragment.querySelector(".file-path").textContent = file.path;

    try {
      const content = await readFile(file.downloadUrl);
      fileFragment.querySelector(".file-content").textContent = prettyContent(content);
    } catch (error) {
      fileFragment.querySelector(".file-content").textContent = String(error);
    }

    filesNode.appendChild(fileFragment);
  }

  foldersGrid.appendChild(fragment);
}

async function loadEventJson() {
  const repo = detectGitHubRepo();
  const eventUrl = repo
    ? `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/main/event.json`
    : "../event.json";

  try {
    const raw = await readFile(eventUrl);
    eventEditor.value = prettyContent(raw);
    eventStatus.textContent = "Loaded event.json";
  } catch (error) {
    eventEditor.value = "";
    eventStatus.textContent = `Could not load event.json: ${String(error)}`;
  }
}

async function loadAll() {
  foldersGrid.innerHTML = "";
  await Promise.all(folders.map((folder) => loadFolder(folder)));
  await loadEventJson();
}

function downloadEventJson() {
  try {
    const parsed = JSON.parse(eventEditor.value);
    const blob = new Blob([`${JSON.stringify(parsed, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "event.json";
    anchor.click();

    URL.revokeObjectURL(url);
    eventStatus.textContent = "Downloaded updated event.json.";
  } catch (error) {
    eventStatus.textContent = `Invalid JSON: ${String(error)}`;
  }
}

refreshButton.addEventListener("click", () => {
  loadAll().catch((error) => {
    eventStatus.textContent = `Refresh failed: ${String(error)}`;
  });
});

downloadEventButton.addEventListener("click", downloadEventJson);

loadAll().catch((error) => {
  eventStatus.textContent = `Initial load failed: ${String(error)}`;
});

// Black Hole-themed animations and interactions

// Add particle animation for black hole theme
function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.width = "2px";
  particle.style.height = "2px";
  particle.style.background = "var(--quasar-yellow)";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = "-10px";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "1000";
  
  document.body.appendChild(particle);
  
  let pos = -10;
  const fallInterval = setInterval(() => {
    pos++;
    particle.style.top = pos + "px";
    
    if (pos > window.innerHeight) {
      clearInterval(fallInterval);
      particle.remove();
    }
  }, 10);
}

setInterval(createParticle, 300);

// Add black hole gravitational pull effect for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = Math.sqrt((rect.width / 2) * (rect.width / 2) + (rect.height / 2) * (rect.height / 2));
    const strength = 1 - distance / maxDistance;
    
    button.style.transform = `scale(${1 + strength * 0.1})`;
  });
  
  button.addEventListener("mouseleave", () => {
    button.style.transform = 'scale(1)';
  });
});

// Add cosmic ray animation for background
function createCosmicRay() {
  const ray = document.createElement("div");
  ray.style.position = "fixed";
  ray.style.width = "1px";
  ray.style.height = "100vh";
  ray.style.background = 'linear-gradient(to bottom, transparent, var(--quasar-yellow), transparent)';
  ray.style.left = Math.random() * 100 + '%';
  ray.style.top = '0';
  ray.style.pointerEvents = 'none';
  ray.style.zIndex = '999';
  ray.style.animation = 'cosmicRay 3s linear infinite';
  
  document.body.appendChild(ray);
  
  setTimeout(() => {
    ray.remove();
  }, 3000);
}

// Add cosmic ray animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes cosmicRay {
    0% { opacity: 0; transform: translateX(0); }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateX(100vw); }
  }
`;
document.head.appendChild(style);

setInterval(createCosmicRay, 1000);

// Add wormhole animation for page transitions
function createWormhole() {
  const wormhole = document.createElement("div");
  wormhole.style.position = "fixed";
  wormhole.style.width = "100vw";
  wormhole.style.height = "100vh";
  wormhole.style.background = 'radial-gradient(circle, transparent 50%, var(--black-hole-dark) 50%, var(--black-hole-dark) 100%)';
  wormhole.style.left = '0';
  wormhole.style.top = '0';
  wormhole.style.pointerEvents = 'none';
  wormhole.style.zIndex = '1001';
  wormhole.style.animation = 'wormhole 2s ease-in-out';
  
  document.body.appendChild(wormhole);
  
  setTimeout(() => {
    wormhole.remove();
  }, 2000);
}

// Add wormhole animation keyframes
const wormholeStyle = document.createElement('style');
wormholeStyle.textContent = `
  @keyframes wormhole {
    0% { transform: scale(0); opacity: 1; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(10); opacity: 0; }
  }
`;
document.head.appendChild(wormholeStyle);

setInterval(createWormhole, 5000);

// Add black hole event horizon effect
const eventHorizon = document.createElement("div");
eventHorizon.style.position = "fixed";
eventHorizon.style.width = "100vw";
eventHorizon.style.height = "100vh";
eventHorizon.style.background = 'radial-gradient(circle at center, transparent 0%, var(--event-horizon) 100%)';
eventHorizon.style.left = '0';
eventHorizon.style.top = '0';
eventHorizon.style.pointerEvents = 'none';
eventHorizon.style.zIndex = '998';
eventHorizon.style.animation = 'eventHorizon 10s ease-in-out infinite';

document.body.appendChild(eventHorizon);

// Add event horizon animation keyframes
const eventHorizonStyle = document.createElement('style');
eventHorizonStyle.textContent = `
  @keyframes eventHorizon {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(eventHorizonStyle);

// Add black hole accretion disk effect
const accretionDisk = document.createElement("div");
accretionDisk.style.position = "fixed";
accretionDisk.style.width = "100vw";
accretionDisk.style.height = "100vh";
accretionDisk.style.background = 'radial-gradient(circle at center, transparent 0%, var(--accretion-orange) 50%, transparent 100%)';
accretionDisk.style.left = '0';
accretionDisk.style.top = '0';
accretionDisk.style.pointerEvents = 'none';
accretionDisk.style.zIndex = '997';
accretionDisk.style.animation = 'accretionDisk 6s linear infinite';

document.body.appendChild(accretionDisk);

// Add accretion disk animation keyframes
const accretionDiskStyle = document.createElement('style');
accretionDiskStyle.textContent = `
  @keyframes accretionDisk {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(accretionDiskStyle);

// Add black hole singularity effect
const singularity = document.createElement("div");
singularity.style.position = "fixed";
singularity.style.width = "2px";
singularity.style.height = "2px";
singularity.style.background = 'var(--quasar-yellow)';
singularity.style.left = '50%';
singularity.style.top = '50%';
singularity.style.transform = 'translate(-50%, -50%)';
singularity.style.pointerEvents = 'none';
singularity.style.zIndex = '1002';
singularity.style.animation = 'singularity 4s ease-in-out infinite';

document.body.appendChild(singularity);

// Add singularity animation keyframes
const singularityStyle = document.createElement('style');
singularityStyle.textContent = `
  @keyframes singularity {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; }
  }
`;
document.head.appendChild(singularityStyle);

// Add cosmic background animation
const cosmicBackground = document.createElement("div");
cosmicBackground.style.position = "fixed";
cosmicBackground.style.width = "100vw";
cosmicBackground.style.height = "100vh";
cosmicBackground.style.background = 'radial-gradient(circle at 20% 80%, var(--stellar-blue) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--neutron-purple) 0%, transparent 50%), radial-gradient(circle at 40% 40%, var(--cosmic-lavender) 0%, transparent 50%)';
cosmicBackground.style.left = '0';
cosmicBackground.style.top = '0';
cosmicBackground.style.pointerEvents = 'none';
cosmicBackground.style.zIndex = '996';
cosmicBackground.style.animation = 'cosmicBackground 20s ease-in-out infinite';

document.body.appendChild(cosmicBackground);

// Add cosmic background animation keyframes
const cosmicBackgroundStyle = document.createElement('style');
cosmicBackgroundStyle.textContent = `
  @keyframes cosmicBackground {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;
document.head.appendChild(cosmicBackgroundStyle);

// Add event listeners for enhanced user interactions
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in effect for page load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
  
  // Add hover effect for buttons
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // Add click effect for buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 100);
    });
  });
  
  // Add keyboard navigation support
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Add any escape key functionality here
    }
  });
});

// Add performance optimization: Debounce scroll events
let scrollTimeout;
document.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Scroll-related operations can go here
  }, 100);
});

// Add enhanced mobile menu auto-close on window resize with debounce
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Resize-related operations can go here
  }, 250);
});