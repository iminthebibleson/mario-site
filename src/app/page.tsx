import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import Switch from "./components/Switch";
import { discordInviteUrl, modDownloadUrl, modVersion, wikiUrl } from "./site-links";

const levelEditorRepository = "https://github.com/Steammaker212/Yaz0moto";
const compilerRepository = "https://github.com/jabonchan/sweet-dx";

function ExternalArrow() {
  return <span aria-hidden="true" className="arrow-mark">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A fan-built home for NSMBU Deluxe modding</p>
          <h1 id="hero-title">Make room for <span>what&apos;s next.</span></h1>
          <p className="hero-description">
            We&apos;re building new experiences for <em>New Super Mario Bros. U Deluxe</em>—and sharing the tools,
            resources, and discoveries that help the whole community create.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href={modDownloadUrl} target="_blank" rel="noreferrer">
              Download {modVersion} <ExternalArrow />
            </a>
            <a className="text-link" href="#tools">Explore the tools <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-footnote">
            <span className="status-pulse" />
            <span>Community-led development</span>
            <span className="footnote-separator">·</span>
            <a className="discord-invite-link" href={discordInviteUrl} target="_blank" rel="noreferrer">
              <svg className="discord-mini-icon" viewBox="0 0 72 56" aria-hidden="true">
                <path d="M58 8a53 53 0 0 0-13-4l-2 4a48 48 0 0 0-14 0l-2-4a53 53 0 0 0-13 4C6 20 4 32 5 44a52 52 0 0 0 16 8l4-6-6-3 1-1a37 37 0 0 0 32 0l1 1-6 3 4 6a52 52 0 0 0 16-8c1-14-2-26-9-36ZM26 35c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6Zm20 0c-3 0-5-3-5-6s2-6 5-6 5 3 5 6-2 6-5 6Z" fill="currentColor" />
              </svg>
              <span>Join our Discord</span>
              <span className="discord-invite-code">YVtNsKzYTg</span>
            </a>
            <span className="footnote-separator">·</span>
            <span>SweetDX tested on Switch hardware and emulators</span>
          </div>
        </div>

        <div className="hero-art" role="group" aria-label="Nintendo Switch displaying Steam's New Super Mario Bros. Deluxe">
          <div className="hero-switch-halo" aria-hidden="true" />
          <Switch />
          <div className="switch-caption">
            <span>STEAM&apos;S NSMBU DELUXE</span>
            <span>vBeta0.50a · 5 levels</span>
          </div>
        </div>
      </section>

      <div className="signal-bar" aria-label="Community focus areas">
        <div className="signal-inner">
          <span className="signal-label">THE WORK</span>
          <span>Custom levels</span><i />
          <span>Mod development</span><i />
          <span>Creation tools</span><i />
          <span>Game research</span>
        </div>
      </div>

      <section className="content-section section-wrap project-section" id="project" aria-labelledby="project-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 — THE FLAGSHIP MOD</p>
            <h2 id="project-title">Built for the next<br className="desktop-break" /> great adventure.</h2>
          </div>
          <p className="section-intro">
            <span className="section-intro-lead">A new chapter for Deluxe.</span>
            A community project exploring what we can build with original ideas, careful testing, and creator tools.
          </p>
        </div>

        <article className="mod-feature">
          <div className="mod-copy">
            <div className="pill-row">
              <span className="pill pill-light">FLAGSHIP PROJECT</span>
              <span className="pill pill-outline">IN ACTIVE DEVELOPMENT</span>
            </div>
            <h3>Steam&apos;s New Super Mario Bros. Deluxe</h3>
            <p>
              Our current mod project is growing alongside the community. Follow its development as we build
              new content, test ideas, and expand what creators can do with the game.
            </p>
            <a className="inline-link" href="#tools">
              Explore the creator tools <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mod-logo-wrap">
            <Image
              className="mod-logo"
              src="/Banner.png"
              alt="Steam's New Super Mario Bros. Deluxe logo"
              width={1398}
              height={752}
            />
          </div>
        </article>
      </section>

      <section className="content-section tools-section" id="tools" aria-labelledby="tools-title">
        <div className="section-wrap">
          <div className="section-heading tools-heading">
            <div>
              <p className="section-kicker">02 — THE TOOLKIT</p>
              <h2 id="tools-title">Made to make<br className="desktop-break" /> more possible.</h2>
            </div>
            <p className="section-intro">
              <span className="section-intro-lead">Tools unlock new ways to create.</span>
              Build custom stages with Yaz0moto, then explore custom-code development with SweetDX, tested on real hardware and emulators.
            </p>
          </div>

          <div className="tool-grid">
            <article className="tool-card tool-card-blue">
              <div className="tool-card-top">
                <Image
                  src="/yaz0moto.png"
                  alt="Yaz0moto level editor icon"
                  width={80}
                  height={80}
                  className="tool-glyph tool-glyph-image"
                />
                <span className="tool-label">LEVEL EDITOR</span>
                <span className="tool-count">01</span>
              </div>
              <h3>Yaz0moto</h3>
              <p>
                Yaz0moto is a level editor for building and shaping custom New Super Mario Bros. U Deluxe stages.
                Explore level layouts and develop original course ideas for the modding community.
              </p>
              <details className="tool-details">
                <summary>
                  <span>See how Yaz0moto works</span>
                  <span className="tool-details-toggle" aria-hidden="true" />
                </summary>
                <div className="tool-details-body">
                  <div className="tool-visual level-visual" role="img" aria-label="Illustrative side-scrolling level layout concept">
                    <span className="visual-caption">LEVEL LAYOUT · CONCEPT</span>
                    <span className="level-sun" />
                    <span className="level-cloud level-cloud-one" />
                    <span className="level-cloud level-cloud-two" />
                    <span className="level-hill level-hill-back" />
                    <span className="level-hill level-hill-front" />
                    <span className="level-coin coin-one">✦</span>
                    <span className="level-coin coin-two">✦</span>
                    <span className="level-block block-one">?</span>
                    <span className="level-block block-two" />
                    <span className="level-platform"><i /><i /><i /><i /><i /><i /><i /></span>
                    <span className="level-coordinate">COURSE 01 <b>WORLD 1—1</b></span>
                  </div>
                  <div className="tool-details-copy">
                    <span className="details-eyebrow">FROM IDEA TO COURSE</span>
                    <h4>Shape a stage, one section at a time.</h4>
                    <p>Plan a route, place the pieces, and refine the flow of a custom Deluxe level before sharing the result with the community.</p>
                    <ul>
                      <li>Build and shape custom stages</li>
                      <li>Explore fresh course layouts</li>
                    </ul>
                  </div>
                </div>
              </details>
              <a className="inline-link" href={levelEditorRepository} target="_blank" rel="noreferrer">
                Explore the editor <ExternalArrow />
              </a>
            </article>

            <article className="tool-card tool-card-yellow">
              <div className="tool-card-top">
                <span className="tool-glyph glyph-code" aria-hidden="true">&lt;/&gt;</span>
                <span className="tool-label">CUSTOM CODE</span>
                <span className="tool-count">02</span>
              </div>
              <h3>SweetDX</h3>
              <p>
                SweetDX is a custom-code compiler built for NSMBU Deluxe, with reported testing on real Switch hardware
                and emulators. It supports the community&apos;s work toward more custom code and reverse engineering.
              </p>
              <details className="tool-details">
                <summary>
                  <span>See the code workflow</span>
                  <span className="tool-details-toggle" aria-hidden="true" />
                </summary>
                <div className="tool-details-body">
                  <div className="tool-visual compiler-visual" role="img" aria-label="Illustrative custom-code build workflow, not a screenshot of SweetDX">
                    <div className="compiler-window">
                      <div className="compiler-window-top">
                        <span /><span /><span />
                        <b>BUILD WORKFLOW · CONCEPT</b>
                      </div>
                      <div className="compiler-flow">
                        <div className="compiler-step"><span className="compiler-step-icon">&lt;/&gt;</span><b>CODE</b><small>custom ideas</small></div>
                        <span className="compiler-flow-arrow">→</span>
                        <div className="compiler-step compiler-step-active"><span className="compiler-step-icon">✳</span><b>BUILD</b><small>SweetDX</small></div>
                        <span className="compiler-flow-arrow">→</span>
                        <div className="compiler-step"><span className="compiler-step-icon">✓</span><b>TEST</b><small>Switch + emulators</small></div>
                      </div>
                      <div className="compiler-progress"><span /></div>
                      <p className="compiler-status"><i /> A reported hardware-tested workflow</p>
                    </div>
                  </div>
                  <div className="tool-details-copy">
                    <span className="details-eyebrow">CODE · BUILD · EXPLORE</span>
                    <h4>Make room for custom code.</h4>
                    <p>SweetDX helps the team compile custom code for NSMBU Deluxe, supporting experiments that move the modding project forward.</p>
                    <ul>
                      <li>Compile custom-code projects</li>
                      <li>Tested on Switch hardware and emulators</li>
                    </ul>
                  </div>
                </div>
              </details>
              <a className="inline-link" href={compilerRepository} target="_blank" rel="noreferrer">
                Explore SweetDX <ExternalArrow />
              </a>
            </article>
          </div>
          <p className="tool-note">Each tool is maintained in its own open-source repository. Check its documentation for setup and requirements.</p>
        </div>
      </section>

      <section className="content-section resources-section" id="resources" aria-labelledby="resources-title">
        <div className="section-wrap resources-layout">
          <div className="resources-heading">
            <p className="section-kicker section-kicker-light">03 — THE COMMUNITY</p>
            <h2 id="resources-title">Learn together.<br /><span>Build together.</span></h2>
            <p>
              We&apos;re making practical resources for players, creators, and curious developers—from first steps
              with the tools to deeper notes on how the game works.
            </p>
            <Link className="button button-paper" href="/downloads/">
              Download the mod <span aria-hidden="true">↓</span>
            </Link>
          </div>

          <div className="resource-list">
            <article className="resource-item">
              <span className="resource-number">01</span>
              <div><h3><Link href="/downloads/">Downloads &amp; installation</Link></h3><p>Get Beta 0.50a and follow the setup guide for Switch and emulators.</p></div>
              <span className="resource-status">AVAILABLE</span>
            </article>
            <article className="resource-item">
              <span className="resource-number">02</span>
              <div><h3>Game research</h3><p>Community notes on game behavior, tools, and reverse-engineering discoveries.</p></div>
              <span className="resource-status">GROWING</span>
            </article>
            <article className="resource-item">
              <span className="resource-number">03</span>
              <div><h3>Open development</h3><p>Follow the mod and its tools in public repositories as the work moves forward.</p></div>
              <span className="resource-status">OPEN SOURCE</span>
            </article>
          </div>
        </div>
      </section>

      <section className="discord-section section-wrap" aria-labelledby="discord-title">
        <div className="discord-card">
          <div className="discord-copy">
            <p className="section-kicker section-kicker-light">YOUR NEXT CO-OP LOBBY</p>
            <h2 id="discord-title">Make it a community project.</h2>
            <p>Meet the people building for Deluxe. Get install help, share your levels, and follow new mod and tool releases.</p>
            <div className="discord-benefits" aria-label="Discord community topics">
              <span>Mod support</span><span>Level showcases</span><span>Dev updates</span>
            </div>
            <div className="discord-actions">
              <a className="button button-discord" href={discordInviteUrl} target="_blank" rel="noreferrer">
                Join the Discord <ExternalArrow />
              </a>
              <span className="discord-code">Invite code <strong>YVtNsKzYTg</strong></span>
            </div>
          </div>
          <div className="discord-server-art" aria-label="Steam's NSMBU DX Discord server preview">
            <div className="discord-server-top">
              <span className="discord-mark" aria-hidden="true">
                <Image src="/logo.png" alt="" width={64} height={64} className="discord-mark-logo" />
              </span>
              <div><span className="discord-server-label">STEAM&apos;S COMMUNITY</span><strong>NSMBU DX Server</strong></div>
              <span className="discord-online"><i /> LIVE</span>
            </div>
            <div className="discord-channel-list" aria-hidden="true">
              <span><b>#</b> welcome-and-rules <i>01</i></span>
              <span><b>#</b> mod-support <i>?</i></span>
              <span><b>#</b> level-showcase <i>✦</i></span>
              <span><b>#</b> development <i>↗</i></span>
            </div>
            <div className="discord-server-foot"><span className="discord-avatar">S</span><span>Creators welcome</span><span className="discord-foot-spark" aria-hidden="true">✳</span></div>
          </div>
        </div>
      </section>

      <section className="wiki-section section-wrap" id="wiki" aria-labelledby="wiki-title">
        <div className="wiki-card">
          <div className="wiki-orbit" aria-hidden="true">
            <svg className="wiki-cap" viewBox="0 0 120 100">
              <path
                className="wiki-cap-crown"
                d="M20 67c0-27 16-48 40-50 22-2 38 14 40 39l8 4c7 3 8 9 3 14-9 9-38 12-63 11l-28-2c-10-1-16-5-15-10 1-4 6-6 15-6Z"
              />
              <path className="wiki-cap-visor" d="M14 69c24 7 66 6 96-3 7-2 10 3 5 8-12 12-74 17-99 6-8-4-9-8-2-11Z" />
              <path className="wiki-cap-highlight" d="M28 60c3-19 15-32 30-35" />
              <circle cx="61" cy="49" r="15" fill="#fff4df" />
              <text x="61" y="56" textAnchor="middle">M</text>
              <path className="wiki-cap-spark" d="m98 24 2.3 6.2 6.2 2.3-6.2 2.3-2.3 6.2-2.3-6.2-6.2-2.3 6.2-2.3Z" />
            </svg>
          </div>
          <div className="wiki-copy">
            <p className="section-kicker">04 — THE COMMUNITY WIKI</p>
            <h2 id="wiki-title">The wiki is live.<br />Build knowledge together.</h2>
            <p>
              Browse community guides for Yaz0moto and SweetDX, get started with modding, and explore project
              history and game research—all in one searchable home.
            </p>
            <a className="button button-red" href={wikiUrl} target="_blank" rel="noreferrer">
              Visit the NSMBU Deluxe wiki <ExternalArrow />
            </a>
          </div>
          <div className="wiki-topics">
            <span>Yaz0moto guides</span>
            <span>SweetDX setup</span>
            <span>Level design</span>
            <span>Research notes</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
