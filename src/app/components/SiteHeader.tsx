import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="NSMBU Deluxe Modding home">
        <Image src="/logo.png" alt="" width={52} height={52} className="brand-logo" />
        <span className="brand-copy">
          <span className="brand-overline">COMMUNITY PROJECT</span>
          <span className="brand-name">NSMBU Deluxe Modding</span>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/#project">The mod</Link>
        <Link href="/#tools">Tools</Link>
        <Link href="/#resources">Resources</Link>
        <Link href="/downloads/">Downloads</Link>
        <Link href="/#wiki">Wiki</Link>
      </nav>

      <Link className="button button-dark header-button" href="/downloads/">
        Get the mod <span aria-hidden="true">↓</span>
      </Link>
    </header>
  );
}
