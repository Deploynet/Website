const workflow = [
  {
    number: "01",
    label: "Discover",
    title: "Scan the network you actually have.",
    description:
      "Point DeployNet at a subnet and turn device discovery into a structured project—not another terminal transcript.",
    detail: "Subnet scan · SNMP discovery · Device inventory",
    tone: "blue",
  },
  {
    number: "02",
    label: "Understand",
    title: "See physical and logical topology.",
    description:
      "Move between connection-level and role-based views so the path from core to access is clear to everyone.",
    detail: "Actual topology · Logical tiers · Role mapping",
    tone: "violet",
  },
  {
    number: "03",
    label: "Deploy",
    title: "Turn intent into ready-to-review configs.",
    description:
      "Generate device configurations from the same source of truth, review them side by side, and keep work moving.",
    detail: "Per-device configs · Review workspace · Export",
    tone: "green",
  },
];

const capabilities = [
  {
    eyebrow: "PROJECT WORKSPACES",
    title: "Every network gets a clean starting point.",
    copy: "Keep scans, topology, device roles, and generated output together in one project. Pick up where you left off without rebuilding context.",
    meta: ["Saved project context", "Recent activity", "At-a-glance status"],
  },
  {
    eyebrow: "TWO WAYS TO SEE",
    title: "From cables and neighbors to roles and tiers.",
    copy: "Actual topology shows discovered relationships. Logical topology reorganizes the same devices around how the network is meant to operate.",
    meta: ["Physical relationships", "Role-based layout", "Device detail"],
  },
  {
    eyebrow: "CONFIG WORKSPACE",
    title: "Generated output that is easy to inspect.",
    copy: "Review device-specific configurations in a focused editor before anything reaches the network. The operator stays in control.",
    meta: ["Device-by-device review", "Readable diffs", "Export when ready"],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-dot brand-dot-a" />
      <span className="brand-dot brand-dot-b" />
      <span className="brand-dot brand-dot-c" />
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="DeployNet topology workspace preview">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="window-title">DeployNet / DC-East Production</div>
        <div className="live-pill">
          <span />
          Live project
        </div>
      </div>

      <div className="app-shell">
        <aside className="app-sidebar">
          <div className="mini-brand">
            <BrandMark />
            <span>DeployNet</span>
          </div>
          <p className="sidebar-label">PROJECT</p>
          <div className="side-item">
            <span className="side-glyph">▦</span>
            Dashboard
          </div>
          <div className="side-item">
            <span className="side-glyph">◫</span>
            Device Types
          </div>
          <div className="side-item">
            <span className="side-glyph">⌁</span>
            Scan Network
          </div>
          <div className="side-item active">
            <span className="side-glyph">⌘</span>
            Actual Topology
          </div>
          <div className="side-item">
            <span className="side-glyph">⌘</span>
            Logical Topology
          </div>
          <div className="side-item">
            <span className="side-glyph">⌑</span>
            Generated Configs
          </div>
          <div className="project-mini">
            <span className="status-dot" />
            <div>
              <small>ACTIVE PROJECT</small>
              <strong>DC-East</strong>
            </div>
          </div>
        </aside>

        <div className="app-main">
          <div className="canvas-header">
            <div>
              <span className="canvas-kicker">DISCOVERED NETWORK</span>
              <h2>Actual Topology</h2>
            </div>
            <div className="canvas-actions">
              <span>12 devices</span>
              <button type="button">Re-scan</button>
            </div>
          </div>

          <div className="topology-canvas">
            <div className="grid-glow" />
            <span className="link link-1" />
            <span className="link link-2" />
            <span className="link link-3" />
            <span className="link link-4" />
            <span className="link link-5" />
            <span className="link link-6" />
            <div className="network-node core">
              <span className="node-icon">◆</span>
              <div>
                <strong>CORE-01</strong>
                <small>10.0.0.1</small>
              </div>
              <i>Core</i>
            </div>
            <div className="network-node dist-a">
              <span className="node-icon">◇</span>
              <div>
                <strong>DIST-01</strong>
                <small>10.0.1.2</small>
              </div>
              <i>Distribution</i>
            </div>
            <div className="network-node dist-b">
              <span className="node-icon">◇</span>
              <div>
                <strong>DIST-02</strong>
                <small>10.0.1.3</small>
              </div>
              <i>Distribution</i>
            </div>
            <div className="network-node access-a">
              <span className="node-icon">▣</span>
              <div>
                <strong>ACCESS-01</strong>
                <small>10.0.2.11</small>
              </div>
              <i>Access</i>
            </div>
            <div className="network-node access-b">
              <span className="node-icon">▣</span>
              <div>
                <strong>ACCESS-02</strong>
                <small>10.0.2.12</small>
              </div>
              <i>Access</i>
            </div>
            <div className="network-node access-c">
              <span className="node-icon">▣</span>
              <div>
                <strong>ACCESS-03</strong>
                <small>10.0.2.13</small>
              </div>
              <i>Access</i>
            </div>
            <div className="scan-toast">
              <span>✓</span>
              <div>
                <strong>Scan complete</strong>
                <small>12 devices · 14 links</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DeployNet home">
          <BrandMark />
          <span>DeployNet</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#workflow">Workflow</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className="nav-cta" href="#workflow">
          Explore the workflow
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-pulse" />
            NETWORK AUTOMATION, RECONNECTED
          </div>
          <h1>
            Know your network.
            <span>Then shape it.</span>
          </h1>
          <p className="hero-lede">
            DeployNet turns discovery, topology, and configuration into one
            clear desktop workflow—so network teams can move from what is to
            what&apos;s next.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#product">
              Explore DeployNet
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#workflow">
              See how it works
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-line" />
            <p>
              <strong>Desktop-first.</strong> Built around the operator, not
              the browser tab.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <ProductPreview />
        </div>
      </section>

      <section className="signal-strip" aria-label="DeployNet workflow summary">
        <div className="signal-track">
          <div>
            <span>01</span>
            <strong>SCAN</strong>
            <small>Discover the live environment</small>
          </div>
          <div className="signal-arrow">→</div>
          <div>
            <span>02</span>
            <strong>MAP</strong>
            <small>See actual and logical topology</small>
          </div>
          <div className="signal-arrow">→</div>
          <div>
            <span>03</span>
            <strong>CONFIGURE</strong>
            <small>Review deployable output</small>
          </div>
        </div>
      </section>

      <section className="workflow section-shell" id="workflow">
        <div className="section-heading">
          <div>
            <span className="section-index">01 / WORKFLOW</span>
            <h2>One continuous path from unknown to understood.</h2>
          </div>
          <p>
            DeployNet keeps the work connected. Each step feeds the next, so
            context survives the handoff from discovery to deployment.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((item) => (
            <article className={`workflow-card ${item.tone}`} key={item.number}>
              <div className="card-topline">
                <span>{item.number}</span>
                <span>{item.label}</span>
              </div>
              <div className="card-symbol" aria-hidden="true">
                {item.number === "01" ? "⌁" : item.number === "02" ? "⌘" : "{ }"}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-detail">{item.detail}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="section-shell">
          <div className="section-heading compact">
            <div>
              <span className="section-index">02 / PRODUCT</span>
              <h2>Serious tools, without the operational fog.</h2>
            </div>
          </div>

          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <article className="capability-row" key={capability.eyebrow}>
                <div className="capability-number">0{index + 1}</div>
                <div className="capability-copy">
                  <span>{capability.eyebrow}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </div>
                <ul>
                  {capability.meta.map((item) => (
                    <li key={item}>
                      <span>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles section-shell" id="principles">
        <div className="principle-panel">
          <div className="principle-glow" />
          <div className="principle-copy">
            <span className="section-index light">03 / PRINCIPLES</span>
            <h2>The operator stays in the loop.</h2>
            <p>
              Automation should improve judgment, not hide the work. DeployNet
              makes the path visible—from discovered device to generated
              configuration—so every output can be understood before it is
              used.
            </p>
          </div>
          <div className="principle-grid">
            <div>
              <span>LOCAL</span>
              <strong>Desktop-first workspace</strong>
              <p>Built to sit close to the network and the person operating it.</p>
            </div>
            <div>
              <span>VISIBLE</span>
              <strong>Clear source of truth</strong>
              <p>Inventory, topology, roles, and configs stay in one project.</p>
            </div>
            <div>
              <span>CONTROLLED</span>
              <strong>Review before action</strong>
              <p>Generated configurations are presented for inspection and export.</p>
            </div>
            <div>
              <span>PRACTICAL</span>
              <strong>Made for real workflows</strong>
              <p>Less context switching. More time understanding the network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="cta-frame">
          <div className="cta-mark" aria-hidden="true">
            <BrandMark />
          </div>
          <span className="section-index">DEPLOY WITH CLARITY</span>
          <h2>See the network. Shape the outcome.</h2>
          <p>
            Bring discovery, topology, and configuration into one focused
            workflow with DeployNet.
          </p>
          <a className="primary-button" href="#top">
            Back to the product
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="DeployNet home">
          <BrandMark />
          <span>DeployNet</span>
        </a>
        <p>Network automation, reconnected.</p>
        <div>
          <a href="#product">Product</a>
          <a href="#workflow">Workflow</a>
          <a href="#principles">Principles</a>
        </div>
      </footer>
    </main>
  );
}
