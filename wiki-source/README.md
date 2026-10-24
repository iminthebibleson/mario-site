# Miraheze wiki starter source

This folder contains paste-ready MediaWiki source for the community wiki. The `.wiki` files are page source, not Next.js code. Create each page on the wiki with **Edit source**, then paste the matching file.

## Page title map

| File | Miraheze page title |
| --- | --- |
| `pages/Main_Page.wiki` | `Main Page` |
| `pages/Getting_Started_with_Modding.wiki` | `Getting Started with Modding` |
| `pages/Steam's_New_Super_Mario_Bros._Deluxe.wiki` | `Steam's New Super Mario Bros. Deluxe` |
| `pages/Yaz0moto.wiki` | `Yaz0moto` |
| `pages/SweetDX.wiki` | `SweetDX` |
| `pages/Level_Design.wiki` | `Level Design` |
| `pages/Game_Research.wiki` | `Game Research` |
| `pages/Contributing.wiki` | `Contributing` |
| `pages/Community_Guidelines.wiki` | `Community Guidelines` |
| `pages/Category_Tools.wiki` | `Category:Tools` |
| `pages/Category_Community_resources.wiki` | `Category:Community resources` |
| `pages/Category_Game_research.wiki` | `Category:Game research` |
| `pages/Category_Modding_projects.wiki` | `Category:Modding projects` |
| `templates/Resource_infobox.wiki` | `Template:Resource infobox` |
| `styles/Common.css` | `MediaWiki:Common.css` (optional styling) |
| `Miraheze-import.xml` | Bulk import of the 14 template, category, and article pages via `Special:Import` |
| `preview.html` | Local visual approximation of the Main Page and a tool page |
| `assets/SteamLogo.png` | Upload as `File:SteamLogo.png` before using `Main_Page.wiki` |
| `assets/SteamProjectBanner.png` | Upload as `File:SteamProjectBanner.png` before using `Main_Page.wiki` |
| `preview-assets/SuperMario.ttf` | Preview-only copy of the website display font; not needed for Miraheze |

## Setup order

1. Confirm the approved wiki's title and address, then sign in to that wiki.
2. Upload `assets/SteamLogo.png` and `assets/SteamProjectBanner.png` with the file titles shown above.
3. Create `Template:Resource infobox` first.
4. Create the category pages and article pages by copying each source file into the matching page's source editor.
5. Preview each page before saving. Check links and titles against the live wiki.
6. The stylesheet is optional. Add it to `MediaWiki:Common.css` only if your account has the wiki's `editsitecss` permission; otherwise the pages still work with the active skin's normal styles. Miraheze's default permissions can vary by wiki.

## Bulk import option

`Miraheze-import.xml` packages the 14 template, category, and article pages into one MediaWiki XML import. On the wiki, open `Special:Import`, choose the uploaded-XML option, and select this file. This requires the `importupload` permission (usually granted to sysops). The import creates a new revision for any page title that already exists, so review those pages first. Image files are not included in this XML; upload them separately before importing. `MediaWiki:Common.css` is also kept separate because it requires the appropriate site-CSS permission.

## Review before publishing

- The project entry reflects the website's listed `vBeta0.50a` release and five levels when this source was prepared. Verify the release details and download links before publishing.
- Tool descriptions link to their upstream repositories. Use those repositories for current requirements and setup instructions.
- This is an unofficial fan resource. Do not upload game files, copyrighted game assets, or material without permission.
- Replace or remove any project links that have changed. The approved wiki URL was not available when this source pack was prepared.

## MediaWiki references

- [Wikitext formatting](https://www.mediawiki.org/wiki/Help:Formatting)
- [Templates](https://www.mediawiki.org/wiki/Help:Templates)
- [Site stylesheets](https://www.mediawiki.org/wiki/Manual:Interface/Stylesheets)
- [Miraheze user groups and permissions](https://meta.miraheze.org/wiki/User_groups)
