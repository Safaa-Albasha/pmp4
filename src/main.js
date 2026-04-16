import './style.css';
import { domains, formulas, flashcards, quizQuestions, references } from './data.js';

// ===== STATE =====
let state = {
  activeSection: 'dashboard',
  activeDomain: null,
  activeTask: null,
  flashcardIndex: 0,
  flashcardFlipped: false,
  flashcardFilter: 'All',
  quizActive: false,
  quizIndex: 0,
  quizAnswered: null,
  quizScore: 0,
  quizAnswers: [],
  quizFilter: 'All',
  studyProgress: JSON.parse(localStorage.getItem('pmpProgress') || '{}'),
  mindmapExpanded: {}
};

function saveProgress() {
  localStorage.setItem('pmpProgress', JSON.stringify(state.studyProgress));
}

// ===== RENDER ENGINE =====
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="layout">
      ${renderSidebar()}
      <main class="main-content">
        ${renderContent()}
      </main>
    </div>
  `;
  attachEvents();
}

function renderSidebar() {
  const navItems = [
    { id: 'dashboard', icon: '⬡', label: 'Dashboard' },
    { id: 'domains', icon: '◈', label: 'Domains & Tasks' },
    { id: 'mindmap', icon: '◎', label: 'Mind Maps' },
    { id: 'flashcards', icon: '▣', label: 'Flashcards' },
    { id: 'formulas', icon: '∑', label: 'Formulas' },
    { id: 'quiz', icon: '◉', label: 'Quiz Bank' },
    { id: 'references', icon: '◫', label: 'References' },
  ];

  return `
    <nav class="sidebar">
      <div class="sidebar-brand">
        <span class="brand-icon">⬡</span>
        <div>
          <div class="brand-title">PMP PREP</div>
          <div class="brand-sub">Exam Master</div>
        </div>
      </div>
      <div class="nav-links">
        ${navItems.map(item => `
          <button class="nav-item ${state.activeSection === item.id ? 'active' : ''}" data-nav="${item.id}">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
          </button>
        `).join('')}
      </div>
      <div class="sidebar-footer">
        <div class="progress-summary">
          <div class="progress-label">Study Progress</div>
          <div class="progress-bar-outer">
            <div class="progress-bar-inner" style="width: ${getOverallProgress()}%"></div>
          </div>
          <div class="progress-pct">${getOverallProgress()}%</div>
        </div>
      </div>
    </nav>
  `;
}

function getOverallProgress() {
  const totalTasks = domains.reduce((a, d) => a + d.tasks.length, 0);
  const completed = Object.values(state.studyProgress).filter(v => v === 'done').length;
  return Math.round((completed / totalTasks) * 100);
}

function renderContent() {
  switch(state.activeSection) {
    case 'dashboard': return renderDashboard();
    case 'domains': return renderDomains();
    case 'mindmap': return renderMindmap();
    case 'flashcards': return renderFlashcards();
    case 'formulas': return renderFormulas();
    case 'quiz': return renderQuiz();
    case 'references': return renderReferences();
    default: return renderDashboard();
  }
}

// ===== DASHBOARD =====
function renderDashboard() {
  const totalQ = quizQuestions.length;
  const totalCards = flashcards.length;
  const totalTasks = domains.reduce((a,d) => a + d.tasks.length, 0);
  const completed = Object.values(state.studyProgress).filter(v=>'done').length;

  return `
    <div class="dashboard">
      <div class="dash-header">
        <div class="dash-greeting">
          <h1 class="dash-title">PMP Exam Preparation</h1>
          <p class="dash-subtitle">Everything you need to pass — in one place</p>
        </div>
        <div class="exam-badge">
          <div class="badge-label">Exam Domains</div>
          <div class="badge-weights">
            <span style="color:#6366f1">42% People</span>
            <span style="color:#10b981">50% Process</span>
            <span style="color:#f59e0b">8% Business</span>
          </div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card" style="--accent: #6366f1">
          <div class="stat-number">${domains.length}</div>
          <div class="stat-label">Domains</div>
          <div class="stat-sub">People • Process • Business</div>
        </div>
        <div class="stat-card" style="--accent: #10b981">
          <div class="stat-number">${totalTasks}</div>
          <div class="stat-label">Tasks & Enablers</div>
          <div class="stat-sub">Deep explanations</div>
        </div>
        <div class="stat-card" style="--accent: #f59e0b">
          <div class="stat-number">${totalCards}</div>
          <div class="stat-label">Flashcards</div>
          <div class="stat-sub">Key concepts</div>
        </div>
        <div class="stat-card" style="--accent: #ef4444">
          <div class="stat-number">${totalQ}</div>
          <div class="stat-label">Practice Questions</div>
          <div class="stat-sub">With explanations</div>
        </div>
      </div>

      <div class="domain-cards">
        <h2 class="section-heading">Study Domains</h2>
        <div class="domain-grid">
          ${domains.map(d => `
            <div class="domain-card" data-goto-domain="${d.id}" style="--dcolor: ${d.color}">
              <div class="domain-card-header">
                <span class="domain-icon">${d.icon}</span>
                <span class="domain-weight">${d.weight} of exam</span>
              </div>
              <h3 class="domain-name">${d.name}</h3>
              <p class="domain-desc">${d.description.substring(0, 100)}...</p>
              <div class="domain-meta">
                <span>${d.tasks.length} tasks</span>
                <span class="domain-cta">Explore →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="quick-study">
        <h2 class="section-heading">Quick Study</h2>
        <div class="quick-grid">
          <div class="quick-card" data-nav="flashcards">
            <div class="quick-icon">▣</div>
            <div class="quick-title">Flashcards</div>
            <div class="quick-desc">Master key concepts with spaced repetition</div>
          </div>
          <div class="quick-card" data-nav="formulas">
            <div class="quick-icon">∑</div>
            <div class="quick-title">Formulas</div>
            <div class="quick-desc">EVM, PERT, CPM, ROI with worked examples</div>
          </div>
          <div class="quick-card" data-nav="quiz">
            <div class="quick-icon">◉</div>
            <div class="quick-title">Practice Quiz</div>
            <div class="quick-desc">Realistic PMP-style exam questions</div>
          </div>
          <div class="quick-card" data-nav="mindmap">
            <div class="quick-icon">◎</div>
            <div class="quick-title">Mind Maps</div>
            <div class="quick-desc">Visual overview of all domains and tasks</div>
          </div>
        </div>
      </div>

      <div class="key-tips">
        <h2 class="section-heading">⚡ Exam Day Key Tips</h2>
        <div class="tips-grid">
          <div class="tip-item"><strong>Agile mindset:</strong> ~50% of questions are agile/hybrid. Think iterative, collaborative, servant leadership.</div>
          <div class="tip-item"><strong>Best answer:</strong> Choose the most proactive, collaborative answer. Avoid reactive or punitive options.</div>
          <div class="tip-item"><strong>EVM:</strong> Know all 12 EVM formulas cold. Expect 3-5 calculation questions.</div>
          <div class="tip-item"><strong>Stakeholders first:</strong> When in doubt, consider stakeholder impact in your answer.</div>
          <div class="tip-item"><strong>Change control:</strong> ALL changes go through integrated change control — even good ones.</div>
          <div class="tip-item"><strong>Risk first:</strong> Always assess risk before acting. Proactive beats reactive.</div>
        </div>
      </div>
    </div>
  `;
}

// ===== DOMAINS =====
function renderDomains() {
  if (state.activeTask) {
    return renderTaskDetail();
  }
  if (state.activeDomain) {
    return renderDomainDetail();
  }
  return renderDomainList();
}

function renderDomainList() {
  return `
    <div class="domains-page">
      <div class="page-header">
        <h1>Domains, Tasks & Enablers</h1>
        <p>Complete coverage of all PMP exam content areas</p>
      </div>
      <div class="domain-list">
        ${domains.map(d => `
          <div class="domain-row" data-open-domain="${d.id}" style="--dcolor: ${d.color}">
            <div class="domain-row-left">
              <span class="domain-row-icon">${d.icon}</span>
              <div>
                <div class="domain-row-name">${d.name} Domain</div>
                <div class="domain-row-weight">${d.weight} of exam · ${d.tasks.length} tasks</div>
              </div>
            </div>
            <div class="domain-row-right">
              <div class="task-pills">
                ${d.tasks.slice(0,4).map(t => `<span class="task-pill">${t.title}</span>`).join('')}
                ${d.tasks.length > 4 ? `<span class="task-pill muted">+${d.tasks.length-4} more</span>` : ''}
              </div>
              <span class="arrow">→</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDomainDetail() {
  const d = domains.find(x => x.id === state.activeDomain);
  if (!d) return '';
  return `
    <div class="domain-detail">
      <div class="breadcrumb">
        <button class="bc-btn" data-back="domains">← Domains</button>
        <span class="bc-sep">›</span>
        <span>${d.name}</span>
      </div>
      <div class="domain-detail-header" style="--dcolor: ${d.color}">
        <div class="ddh-left">
          <span class="ddh-icon">${d.icon}</span>
          <div>
            <h1>${d.name} Domain</h1>
            <div class="ddh-weight">${d.weight} of the PMP Exam</div>
          </div>
        </div>
      </div>
      <div class="domain-overview">
        <h2>Domain Overview</h2>
        <div class="overview-text">${d.overview.replace(/\n/g, '<br>').replace(/•/g, '&bull;')}</div>
      </div>
      <div class="tasks-section">
        <h2>Tasks in this Domain</h2>
        <div class="task-list">
          ${d.tasks.map((t, i) => {
            const done = state.studyProgress[t.id] === 'done';
            return `
              <div class="task-row" data-open-task="${t.id}" data-domain="${d.id}">
                <div class="task-row-left">
                  <div class="task-num" style="background: ${d.color}20; color: ${d.color}">T${String(i+1).padStart(2,'0')}</div>
                  <div class="task-info">
                    <div class="task-title">${t.title}</div>
                    <div class="task-brief">${t.description}</div>
                  </div>
                </div>
                <div class="task-row-right">
                  <span class="enabler-count">${t.enablers.length} enablers</span>
                  <button class="mark-btn ${done ? 'done' : ''}" data-mark="${t.id}">${done ? '✓ Done' : 'Mark Done'}</button>
                  <span class="arrow">→</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderTaskDetail() {
  const domain = domains.find(d => d.id === state.activeDomain);
  const task = domain?.tasks.find(t => t.id === state.activeTask);
  if (!task) return '';

  const taskIndex = domain.tasks.indexOf(task);
  const prevTask = domain.tasks[taskIndex - 1];
  const nextTask = domain.tasks[taskIndex + 1];

  return `
    <div class="task-detail">
      <div class="breadcrumb">
        <button class="bc-btn" data-back="domains">← Domains</button>
        <span class="bc-sep">›</span>
        <button class="bc-btn" data-back="domain">${domain.name}</button>
        <span class="bc-sep">›</span>
        <span>${task.title}</span>
      </div>

      <div class="task-detail-header" style="--dcolor: ${domain.color}">
        <div class="task-detail-badge">${domain.icon} ${domain.name} Domain</div>
        <h1>${task.title}</h1>
        <p class="task-detail-desc">${task.description}</p>
      </div>

      <div class="task-body">
        <div class="task-content">
          <div class="task-detail-text">${task.detail.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/⭐/g, '<span class="star">⭐</span>')}</div>
        </div>
        <div class="task-sidebar">
          <div class="enablers-box">
            <h3>Enablers</h3>
            <p class="enablers-intro">Specific activities that support this task:</p>
            <ul class="enabler-list">
              ${task.enablers.map(e => `<li>${e}</li>`).join('')}
            </ul>
          </div>
          <div class="mark-section">
            <button class="mark-btn-large ${state.studyProgress[task.id] === 'done' ? 'done' : ''}" data-mark="${task.id}">
              ${state.studyProgress[task.id] === 'done' ? '✓ Marked as Done' : 'Mark as Done'}
            </button>
          </div>
        </div>
      </div>

      <div class="task-nav">
        ${prevTask ? `<button class="tnav-btn" data-open-task="${prevTask.id}" data-domain="${domain.id}">← ${prevTask.title}</button>` : '<div></div>'}
        ${nextTask ? `<button class="tnav-btn next" data-open-task="${nextTask.id}" data-domain="${domain.id}">${nextTask.title} →</button>` : '<div></div>'}
      </div>
    </div>
  `;
}

// ===== MIND MAP =====
function renderMindmap() {
  return `
    <div class="mindmap-page">
      <div class="page-header">
        <h1>◎ PMP Mind Maps</h1>
        <p>Visual representation of all exam domains and their relationships</p>
      </div>
      ${domains.map(d => `
        <div class="mindmap-domain" style="--dcolor: ${d.color}">
          <div class="mm-header" data-toggle-mm="${d.id}">
            <div class="mm-title">
              <span class="mm-icon">${d.icon}</span>
              <span>${d.name} Domain — ${d.weight}</span>
            </div>
            <span class="mm-toggle">${state.mindmapExpanded[d.id] ? '▲' : '▼'}</span>
          </div>
          ${state.mindmapExpanded[d.id] ? `
            <div class="mm-body">
              <div class="mm-center-node">${d.icon} ${d.name}</div>
              <div class="mm-branches">
                ${d.tasks.map((t, i) => `
                  <div class="mm-branch" style="animation-delay: ${i * 0.05}s">
                    <div class="mm-task-node" style="border-color: ${d.color}">
                      <div class="mm-task-num">T${String(i+1).padStart(2,'0')}</div>
                      <div class="mm-task-title">${t.title}</div>
                    </div>
                    <div class="mm-enablers">
                      ${t.enablers.slice(0,3).map(e => `
                        <div class="mm-enabler">◦ ${e.length > 60 ? e.substring(0,57)+'...' : e}</div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `).join('')}

      <div class="key-relationships">
        <h2>Key Concept Relationships</h2>
        <div class="rel-grid">
          <div class="rel-card">
            <div class="rel-title" style="color:#6366f1">Conflict Resolution</div>
            <div class="rel-flow">
              <span class="rel-node best">Collaborating ⭐ Best</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Compromising</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Smoothing</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Forcing</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node worst">Withdrawing</span>
            </div>
          </div>
          <div class="rel-card">
            <div class="rel-title" style="color:#10b981">Risk Response (Threats)</div>
            <div class="rel-flow">
              <span class="rel-node">Avoid</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Transfer</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Mitigate</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Accept</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Escalate</span>
            </div>
          </div>
          <div class="rel-card">
            <div class="rel-title" style="color:#f59e0b">Team Development</div>
            <div class="rel-flow">
              <span class="rel-node">Forming</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Storming</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Norming</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node best">Performing ⭐</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">Adjourning</span>
            </div>
          </div>
          <div class="rel-card">
            <div class="rel-title" style="color:#ef4444">Contract Risk (Buyer)</div>
            <div class="rel-flow">
              <span class="rel-node best">Fixed Price ✓</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node">T&M</span>
              <span class="rel-arrow">→</span>
              <span class="rel-node worst">Cost Plus ✗</span>
            </div>
            <div class="rel-sub">Higher buyer risk →</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== FLASHCARDS =====
function renderFlashcards() {
  const categories = ['All', ...new Set(flashcards.map(f => f.category))];
  const filtered = state.flashcardFilter === 'All' ? flashcards : flashcards.filter(f => f.category === state.flashcardFilter);
  const card = filtered[state.flashcardIndex % filtered.length];

  return `
    <div class="flashcards-page">
      <div class="page-header">
        <h1>▣ Flashcards</h1>
        <p>Master key concepts — ${filtered.length} cards in this set</p>
      </div>

      <div class="fc-filters">
        ${categories.map(c => `
          <button class="fc-filter-btn ${state.flashcardFilter === c ? 'active' : ''}" data-fc-filter="${c}">${c}</button>
        `).join('')}
      </div>

      <div class="fc-progress">
        Card ${(state.flashcardIndex % filtered.length) + 1} of ${filtered.length}
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width: ${(((state.flashcardIndex % filtered.length) + 1) / filtered.length) * 100}%"></div>
        </div>
      </div>

      <div class="fc-container">
        <div class="fc-card ${state.flashcardFlipped ? 'flipped' : ''}" id="flashcard" data-flip>
          <div class="fc-front">
            <div class="fc-category-tag">${card.category}</div>
            <div class="fc-front-content">${card.front}</div>
            <div class="fc-hint">Click to reveal answer</div>
          </div>
          <div class="fc-back">
            <div class="fc-category-tag">${card.category}</div>
            <div class="fc-back-content">${card.back.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </div>

      <div class="fc-controls">
        <button class="fc-btn prev" data-fc-prev>← Previous</button>
        <button class="fc-btn flip" data-flip>
          ${state.flashcardFlipped ? '↺ Show Question' : '↻ Reveal Answer'}
        </button>
        <button class="fc-btn next" data-fc-next>Next →</button>
      </div>

      <div class="fc-all-cards">
        <h3>All Cards in Set</h3>
        <div class="fc-list">
          ${filtered.map((f, i) => `
            <div class="fc-list-item ${i === state.flashcardIndex % filtered.length ? 'active' : ''}" data-fc-jump="${i}">
              <span class="fc-list-num">${i+1}</span>
              <span class="fc-list-q">${f.front}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ===== FORMULAS =====
function renderFormulas() {
  return `
    <div class="formulas-page">
      <div class="page-header">
        <h1>∑ Formulas & Calculations</h1>
        <p>Every formula you need for the PMP exam with worked examples</p>
      </div>
      ${formulas.map(section => `
        <div class="formula-section">
          <h2 class="formula-section-title">${section.category}</h2>
          <div class="formula-grid">
            ${section.items.map(item => `
              <div class="formula-card">
                <div class="formula-name">${item.name}</div>
                <div class="formula-eq">${item.formula}</div>
                <div class="formula-desc">${item.description}</div>
                <div class="formula-example">
                  <span class="example-label">Example:</span>
                  <span class="example-text">${item.example}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}

      <div class="evm-cheatsheet">
        <h2>EVM Quick Reference Cheatsheet</h2>
        <div class="evm-table-wrap">
          <table class="evm-table">
            <thead>
              <tr>
                <th>Metric</th><th>Formula</th><th>< 1 or Negative</th><th>> 1 or Positive</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CV (Cost Variance)</td><td>EV - AC</td><td>⚠️ Over Budget</td><td>✅ Under Budget</td></tr>
              <tr><td>SV (Schedule Variance)</td><td>EV - PV</td><td>⚠️ Behind Schedule</td><td>✅ Ahead of Schedule</td></tr>
              <tr><td>CPI (Cost Index)</td><td>EV / AC</td><td>⚠️ Over Budget</td><td>✅ Under Budget</td></tr>
              <tr><td>SPI (Schedule Index)</td><td>EV / PV</td><td>⚠️ Behind Schedule</td><td>✅ Ahead of Schedule</td></tr>
              <tr><td>TCPI</td><td>(BAC-EV)/(BAC-AC)</td><td>✅ Easy to achieve</td><td>⚠️ Must be more efficient</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ===== QUIZ =====
function renderQuiz() {
  if (!state.quizActive) {
    return renderQuizStart();
  }
  if (state.quizIndex >= quizQuestions.length) {
    return renderQuizResults();
  }
  return renderQuizQuestion();
}

function renderQuizStart() {
  const categories = ['All', ...new Set(quizQuestions.map(q => q.domain))];
  const filtered = state.quizFilter === 'All' ? quizQuestions : quizQuestions.filter(q => q.domain === state.quizFilter);

  return `
    <div class="quiz-start">
      <div class="page-header">
        <h1>◉ Practice Quiz</h1>
        <p>Realistic PMP-style questions with detailed explanations</p>
      </div>
      <div class="quiz-setup">
        <div class="quiz-setup-card">
          <h2>Configure Your Quiz</h2>
          <div class="quiz-filter-section">
            <label>Filter by Domain:</label>
            <div class="quiz-filters">
              ${categories.map(c => `
                <button class="quiz-filter-btn ${state.quizFilter === c ? 'active' : ''}" data-quiz-filter="${c}">${c}</button>
              `).join('')}
            </div>
          </div>
          <div class="quiz-info">
            <div class="qi-item"><strong>${filtered.length}</strong> questions available</div>
            <div class="qi-item"><strong>Detailed</strong> explanations for every answer</div>
            <div class="qi-item"><strong>Scored</strong> with performance feedback</div>
          </div>
          <button class="start-quiz-btn" data-start-quiz>Start Quiz →</button>
        </div>
        <div class="quiz-preview">
          <h3>Question Bank Preview</h3>
          ${quizQuestions.slice(0,5).map((q,i) => `
            <div class="qp-item">
              <div class="qp-domain">${q.domain} · ${q.difficulty}</div>
              <div class="qp-q">${q.question.substring(0,80)}...</div>
            </div>
          `).join('')}
          <div class="qp-more">+ ${quizQuestions.length - 5} more questions</div>
        </div>
      </div>
    </div>
  `;
}

function renderQuizQuestion() {
  const filtered = state.quizFilter === 'All' ? quizQuestions : quizQuestions.filter(q => q.domain === state.quizFilter);
  const q = filtered[state.quizIndex];
  if (!q) { state.quizIndex = filtered.length; render(); return ''; }

  const answered = state.quizAnswered !== null;

  return `
    <div class="quiz-question-page">
      <div class="quiz-header">
        <div class="quiz-progress-text">Question ${state.quizIndex + 1} of ${filtered.length}</div>
        <div class="quiz-score-display">Score: ${state.quizScore}/${state.quizIndex}</div>
        <button class="quit-quiz-btn" data-quit-quiz>End Quiz</button>
      </div>
      <div class="quiz-progress-bar-outer">
        <div class="quiz-progress-bar-inner" style="width: ${((state.quizIndex) / filtered.length) * 100}%"></div>
      </div>

      <div class="quiz-q-card">
        <div class="quiz-meta">
          <span class="qmeta-domain">${q.domain}</span>
          <span class="qmeta-diff diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
        </div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => {
            let cls = 'quiz-option';
            if (answered) {
              if (i === q.correct) cls += ' correct';
              else if (i === state.quizAnswered && i !== q.correct) cls += ' wrong';
            }
            return `
              <button class="quiz-option ${answered ? (i === q.correct ? 'correct' : (i === state.quizAnswered ? 'wrong' : 'neutral')) : ''}" 
                      ${answered ? 'disabled' : ''} 
                      data-answer="${i}">
                <span class="option-letter">${'ABCD'[i]}</span>
                <span class="option-text">${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
        ${answered ? `
          <div class="quiz-explanation">
            <div class="exp-header">${state.quizAnswered === q.correct ? '✅ Correct!' : '❌ Incorrect'}</div>
            <div class="exp-text">${q.explanation}</div>
          </div>
          <button class="next-q-btn" data-next-question>
            ${state.quizIndex + 1 >= filtered.length ? 'See Results →' : 'Next Question →'}
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

function renderQuizResults() {
  const filtered = state.quizFilter === 'All' ? quizQuestions : quizQuestions.filter(q => q.domain === state.quizFilter);
  const pct = Math.round((state.quizScore / filtered.length) * 100);
  const grade = pct >= 71 ? '✅ PASS' : '⚠️ NEEDS WORK';
  const gradeColor = pct >= 71 ? '#10b981' : '#ef4444';

  return `
    <div class="quiz-results">
      <div class="results-header">
        <h1>Quiz Complete!</h1>
        <div class="results-score" style="color: ${gradeColor}">
          ${state.quizScore}/${filtered.length} — ${pct}%
        </div>
        <div class="results-grade" style="background: ${gradeColor}20; color: ${gradeColor}; padding: 0.5rem 1.5rem; border-radius: 99px; display: inline-block; margin-top: 0.5rem">${grade}</div>
        <p class="results-note">PMP passing threshold is approximately 61-65%</p>
      </div>
      <div class="results-breakdown">
        ${filtered.map((q, i) => {
          const ans = state.quizAnswers[i];
          const correct = ans?.answered === q.correct;
          return `
            <div class="result-item ${correct ? 'correct' : 'wrong'}">
              <div class="ri-header">
                <span class="ri-num">Q${i+1}</span>
                <span class="ri-domain">${q.domain}</span>
                <span class="ri-result">${correct ? '✅' : '❌'}</span>
              </div>
              <div class="ri-q">${q.question}</div>
              ${!correct ? `<div class="ri-correct">Correct: ${q.options[q.correct]}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
      <div class="results-actions">
        <button class="retake-btn" data-start-quiz>Retake Quiz</button>
        <button class="back-dash-btn" data-nav="dashboard">Back to Dashboard</button>
      </div>
    </div>
  `;
}

// ===== REFERENCES =====
function renderReferences() {
  return `
    <div class="references-page">
      <div class="page-header">
        <h1>◫ References & Study Resources</h1>
        <p>Official and recommended materials for PMP preparation</p>
      </div>
      <div class="ref-grid">
        ${references.map(r => `
          <div class="ref-card">
            <div class="ref-type-badge type-${r.type.toLowerCase()}">${r.type}</div>
            <h3 class="ref-title">${r.title}</h3>
            <p class="ref-desc">${r.description}</p>
            <div class="ref-topics">
              ${r.key_topics.map(t => `<span class="ref-topic">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="study-plan">
        <h2>Recommended Study Plan (8 Weeks)</h2>
        <div class="study-timeline">
          ${[
            { week: "1-2", focus: "People Domain", tasks: "Complete all 14 tasks in People domain. Focus on leadership styles, conflict resolution, EI, and stakeholder engagement.", color: "#6366f1" },
            { week: "3-4", focus: "Process Domain (Part 1)", tasks: "Cover EVM, scheduling, scope management, risk management, and procurement. Practice all formulas.", color: "#10b981" },
            { week: "5-6", focus: "Process Domain (Part 2)", tasks: "Cover agile, Scrum, Kanban, quality, communications, and governance. Learn hybrid approaches.", color: "#10b981" },
            { week: "7", focus: "Business Environment", tasks: "Cover benefits realization, organizational change management, compliance, and external environment.", color: "#f59e0b" },
            { week: "8", focus: "Review & Practice", tasks: "Take 2-3 full practice exams. Review weak areas. Memorize all formulas. Study lessons learned.", color: "#ef4444" }
          ].map(w => `
            <div class="week-item" style="--wcolor: ${w.color}">
              <div class="week-badge">Week ${w.week}</div>
              <div class="week-content">
                <div class="week-focus">${w.focus}</div>
                <div class="week-tasks">${w.tasks}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="exam-info">
        <h2>PMP Exam Information</h2>
        <div class="exam-info-grid">
          <div class="exam-info-card"><div class="ei-label">Questions</div><div class="ei-value">180</div><div class="ei-sub">Multiple choice, drag and drop, matching, hot area</div></div>
          <div class="exam-info-card"><div class="ei-label">Duration</div><div class="ei-value">230 min</div><div class="ei-sub">Plus 10 min tutorial and 10 min break</div></div>
          <div class="exam-info-card"><div class="ei-label">Passing Score</div><div class="ei-value">~61-65%</div><div class="ei-sub">PMI uses psychometric scoring, not a fixed pass mark</div></div>
          <div class="exam-info-card"><div class="ei-label">Prerequisites</div><div class="ei-value">35 PDUs</div><div class="ei-sub">+ 36 months PM experience (with degree) or 60 months (without)</div></div>
          <div class="exam-info-card"><div class="ei-label">Agile Content</div><div class="ei-value">~50%</div><div class="ei-sub">Questions are predictive, agile, and hybrid</div></div>
          <div class="exam-info-card"><div class="ei-label">Validity</div><div class="ei-value">3 Years</div><div class="ei-sub">Maintain with 60 PDUs every 3 years (CCR program)</div></div>
        </div>
      </div>
    </div>
  `;
}

// ===== EVENT HANDLING =====
function attachEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      state.activeSection = el.dataset.nav;
      state.activeDomain = null;
      state.activeTask = null;
      render();
    });
  });

  document.querySelectorAll('[data-open-domain]').forEach(el => {
    el.addEventListener('click', () => {
      state.activeSection = 'domains';
      state.activeDomain = el.dataset.openDomain;
      state.activeTask = null;
      render();
    });
  });

  document.querySelectorAll('[data-goto-domain]').forEach(el => {
    el.addEventListener('click', () => {
      state.activeSection = 'domains';
      state.activeDomain = el.dataset.gotoDomain;
      state.activeTask = null;
      render();
    });
  });

  document.querySelectorAll('[data-open-task]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-mark]')) return;
      state.activeDomain = el.dataset.domain;
      state.activeTask = el.dataset.openTask;
      render();
    });
  });

  document.querySelectorAll('[data-back]').forEach(el => {
    el.addEventListener('click', () => {
      if (el.dataset.back === 'domains') {
        state.activeDomain = null;
        state.activeTask = null;
      } else if (el.dataset.back === 'domain') {
        state.activeTask = null;
      }
      render();
    });
  });

  document.querySelectorAll('[data-mark]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.mark;
      state.studyProgress[id] = state.studyProgress[id] === 'done' ? null : 'done';
      saveProgress();
      render();
    });
  });

  document.querySelectorAll('[data-toggle-mm]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.toggleMm;
      state.mindmapExpanded[id] = !state.mindmapExpanded[id];
      render();
    });
  });

  document.querySelectorAll('[data-fc-filter]').forEach(el => {
    el.addEventListener('click', () => {
      state.flashcardFilter = el.dataset.fcFilter;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      render();
    });
  });

  document.querySelectorAll('[data-flip]').forEach(el => {
    el.addEventListener('click', () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      render();
    });
  });

  document.querySelectorAll('[data-fc-next]').forEach(el => {
    el.addEventListener('click', () => {
      const filtered = state.flashcardFilter === 'All' ? flashcards : flashcards.filter(f => f.category === state.flashcardFilter);
      state.flashcardIndex = (state.flashcardIndex + 1) % filtered.length;
      state.flashcardFlipped = false;
      render();
    });
  });

  document.querySelectorAll('[data-fc-prev]').forEach(el => {
    el.addEventListener('click', () => {
      const filtered = state.flashcardFilter === 'All' ? flashcards : flashcards.filter(f => f.category === state.flashcardFilter);
      state.flashcardIndex = (state.flashcardIndex - 1 + filtered.length) % filtered.length;
      state.flashcardFlipped = false;
      render();
    });
  });

  document.querySelectorAll('[data-fc-jump]').forEach(el => {
    el.addEventListener('click', () => {
      state.flashcardIndex = parseInt(el.dataset.fcJump);
      state.flashcardFlipped = false;
      render();
    });
  });

  document.querySelectorAll('[data-quiz-filter]').forEach(el => {
    el.addEventListener('click', () => {
      state.quizFilter = el.dataset.quizFilter;
      render();
    });
  });

  document.querySelectorAll('[data-start-quiz]').forEach(el => {
    el.addEventListener('click', () => {
      state.quizActive = true;
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = null;
      state.quizAnswers = [];
      render();
    });
  });

  document.querySelectorAll('[data-quit-quiz]').forEach(el => {
    el.addEventListener('click', () => {
      state.quizActive = false;
      state.quizIndex = 0;
      state.quizAnswered = null;
      render();
    });
  });

  document.querySelectorAll('[data-answer]').forEach(el => {
    el.addEventListener('click', () => {
      if (state.quizAnswered !== null) return;
      const ans = parseInt(el.dataset.answer);
      const filtered = state.quizFilter === 'All' ? quizQuestions : quizQuestions.filter(q => q.domain === state.quizFilter);
      const q = filtered[state.quizIndex];
      state.quizAnswered = ans;
      if (ans === q.correct) state.quizScore++;
      state.quizAnswers.push({ answered: ans, correct: q.correct });
      render();
    });
  });

  document.querySelectorAll('[data-next-question]').forEach(el => {
    el.addEventListener('click', () => {
      state.quizIndex++;
      state.quizAnswered = null;
      render();
    });
  });
}

// ===== INIT =====
render();
