import Link from "next/link";

const websiteRepository = "https://github.com/iminthebibleson/mario-site";

function ExternalArrow() {
  return <span aria-hidden="true" className="arrow-mark">↗</span>;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <Link className="footer-brand" href="/">NSMBU Deluxe Modding <span>↑</span></Link>
        <p>An independent community project for creators and fans.</p>
        <a href={websiteRepository} target="_blank" rel="noreferrer">
          Website source <ExternalArrow />
        </a>
      </div>
      <div className="footer-legal section-wrap">
        <p>
          This is an unofficial fan community and is not affiliated with Nintendo. New Super Mario Bros. U Deluxe
          and related characters and assets belong to their respective owners. The website does not host the base
          game. Use your own legally obtained game copy where applicable.
        </p>
        <span>Built by the community</span>
      </div>
    </footer>
  );
}
