import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { discordInviteUrl, discordPostUrl, modDownloadUrl, modVersion } from "../site-links";

export const metadata: Metadata = {
  title: "Downloads & Installation | NSMBU Deluxe Modding",
  description:
    "Download Steam's New Super Mario Bros. Deluxe vBeta0.50a and follow installation steps for Atmosphère, Ryujinx, and Yuzu-compatible builds.",
};

function ExternalArrow() {
  return <span aria-hidden="true" className="arrow-mark">↗</span>;
}

export default function DownloadsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="downloads-page">
        <section className="download-hero section-wrap" aria-labelledby="download-title">
          <div className="download-hero-copy">
            <p className="section-kicker">STEAM&apos;S NSMBU DELUXE · DOWNLOADS</p>
            <h1 id="download-title">Five new levels.<br /><span>One big adventure.</span></h1>
            <p className="download-lede">
              Get the current beta build of Steam&apos;s New Super Mario Bros. Deluxe, then follow the setup steps
              for your modded Switch or compatible emulator.
            </p>
            <div className="download-actions">
              <a className="button button-red" href={modDownloadUrl} target="_blank" rel="noreferrer">
                Download {modVersion} <ExternalArrow />
              </a>
              <a className="button button-dark" href={discordInviteUrl} target="_blank" rel="noreferrer">
                Join our Discord <ExternalArrow />
              </a>
            </div>
            <p className="download-beta-note">
              <span className="pill pill-light">BETA BUILD</span>
              <span>{modVersion} · 5 levels · Expect unfinished content and bugs.</span>
            </p>
          </div>

          <aside className="download-release-card" aria-label="Download details">
            <div className="release-card-top">
              <span className="release-dot" />
              <span>EARLY ACCESS BUILD</span>
              <span className="release-card-version">{modVersion}</span>
            </div>
            <h2>Steam&apos;s New Super Mario Bros. Deluxe</h2>
            <p className="release-file-name">Steam_New_Super_Mario_Bro_U_DX_Mod_5_Levels.zip</p>
            <div className="release-detail">
              <span>Game title ID</span>
              <code>0100EA80032EA000</code>
            </div>
            <p className="release-card-note">
              The download opens the mod ZIP on MediaFire. Use a compatible copy of the base game that you own.
            </p>
            <a className="release-post-link" href={discordPostUrl} target="_blank" rel="noreferrer">
              Read the project post on Discord <ExternalArrow />
            </a>
          </aside>
        </section>

        <section className="install-section" aria-labelledby="install-title">
          <div className="section-wrap">
            <div className="install-heading">
              <div>
                <p className="section-kicker">INSTALLATION GUIDE</p>
                <h2 id="install-title">Pick your setup.</h2>
              </div>
              <p>
                The mod uses LayeredFS. Keep the folder structure intact when you extract the ZIP, and check that
                the game title ID matches before launching.
              </p>
            </div>

            <div className="install-grid">
              <article className="install-card install-card-switch">
                <div className="install-card-top">
                  <span className="install-card-index">01</span>
                  <span className="pill pill-light">MODDED NINTENDO SWITCH</span>
                </div>
                <h3>Atmosphère</h3>
                <p className="install-card-intro">Install the mod&apos;s <code>romfs</code> and/or <code>exefs</code> files under its game title ID on the SD card.</p>

                <ol className="install-steps">
                  <li>
                    <span className="step-number">1</span>
                    <div>
                      <h4>Check the ZIP contents</h4>
                      <p>Open the ZIP and find <code>romfs</code> and/or <code>exefs</code>. They may be inside an <code>atmosphere</code> or <code>contents</code> folder.</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <div>
                      <h4>Copy the mod to your SD card</h4>
                      <p>Copy a bundled <code>atmosphere</code> folder to the SD-card root and merge it with the existing folder. For a top-level <code>contents</code> folder, merge it into <code>sd:/atmosphere/contents/</code>.</p>
                      <p>For loose <code>romfs</code>/<code>exefs</code> folders, create this title folder and place them directly inside:</p>
                      <code className="path-block">sd:/atmosphere/contents/0100EA80032EA000/</code>
                      <p>The finished folder should contain <code>romfs</code>, <code>exefs</code>, or both—not another nested copy of the mod folder.</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">3</span>
                    <div>
                      <h4>Launch the game</h4>
                      <p>Safely eject the SD card, boot into Atmosphère, and launch New Super Mario Bros. U Deluxe. LayeredFS loads the mod automatically.</p>
                    </div>
                  </li>
                </ol>

                <p className="install-tip">
                  <strong>Tip:</strong> Hold <kbd>L</kbd> while launching the game to temporarily disable LayeredFS mods.
                </p>
              </article>

              <article className="install-card install-card-emulator">
                <div className="install-card-top">
                  <span className="install-card-index">02</span>
                  <span className="pill pill-outline">EMULATOR</span>
                </div>
                <h3>Ryujinx or Yuzu</h3>
                <p className="install-card-intro">Use the game&apos;s mod folder in your emulator.</p>

                <ol className="install-steps">
                  <li>
                    <span className="step-number">1</span>
                    <div>
                      <h4>Ryujinx</h4>
                      <p>Right-click the game, choose <strong>Open Mods Directory</strong>, then copy the mod folders into:</p>
                      <code className="path-block">.../mods/contents/0100EA80032EA000/romfs/</code>
                      <p>Put <code>exefs</code> beside <code>romfs</code> when included.</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <div>
                      <h4>Yuzu</h4>
                      <p>Right-click the game, choose <strong>Open Mod Data Location</strong>, create a mod folder, and place the mod folders inside.</p>
                      <code className="path-block">.../load/0100EA80032EA000/MyMod/romfs/</code>
                    </div>
                  </li>
                </ol>

                <p className="install-tip">
                  <strong>Folder check:</strong> Keep <code>romfs</code> and <code>exefs</code> at the paths above. Menu names may vary by build.
                </p>
              </article>
            </div>

            <div className="install-footer-note">
              <span aria-hidden="true">✳</span>
              <p>
                Need a hand installing or want to share feedback? Join the <strong>Steam&apos;s NSMBU DX Server</strong>.
                Invite code: <code>YVtNsKzYTg</code>.
              </p>
              <a className="inline-link" href={discordInviteUrl} target="_blank" rel="noreferrer">
                Join Discord <ExternalArrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
