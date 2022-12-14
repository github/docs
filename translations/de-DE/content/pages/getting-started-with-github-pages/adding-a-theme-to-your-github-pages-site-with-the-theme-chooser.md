---
title: Hinzufügen eines Designs zu deiner GitHub Pages-Website mit dem Theme Chooser
intro: Du kannst deiner {% data variables.product.prodname_pages %}-Website ein Design hinzufügen, um das Aussehen der Website anzupassen.
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428365"
---
## <a name="about-the-theme-chooser"></a>Informationen zum Theme Chooser

{% ifversion pages-custom-workflow %}

{% note %}

**Hinweis**: Der Jekyll Theme Chooser wird für {% data variables.product.prodname_pages %}-Websites, die mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow veröffentlicht werden, nicht unterstützt. Wenn du deine Website mit Jekyll erstellst und mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow veröffentlichst, kannst du ein Design hinzufügen, indem du die `_config.yml`-Datei bearbeitest. Weitere Informationen findest du unter [Hinzufügen eines Designs zu deiner GitHub Pages-Website mit Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

{% endnote %}

{% endif %}

Der Theme Chooser fügt deinem Repository ein Jekyll-Design hinzu. Weitere Informationen zu Jekyll findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll).

Die Funktionsweise des Theme Chooser hängt davon ab, ob dein Repository öffentlich oder privat ist.
  - Wenn {% data variables.product.prodname_pages %} bereits für dein Repository aktiviert ist, fügt der Theme Chooser dein Design zur aktuellen Veröffentlichungsquelle hinzu.
  - Wenn dein Repository öffentlich und {% data variables.product.prodname_pages %} für dein Repository deaktiviert ist, aktiviert die Verwendung des Theme Chooser {% data variables.product.prodname_pages %} und konfiguriert den Standardbranch als Veröffentlichungsquelle.
  - Wenn dein Repository privat und {% data variables.product.prodname_pages %} für dein Repository deaktiviert ist, musst du {% data variables.product.prodname_pages %} durch die Konfiguration einer Veröffentlichungsquelle erst aktivieren, bevor du den Theme Chooser verwenden kannst.

Weitere Informationen zu Veröffentlichungsquellen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites).

Wenn du deinem Repository in der Vergangenheit manuell ein Jekyll-Design hinzugefügt hast, werden diese Dateien möglicherweise auch nach der Verwendung des Theme Chooser angewendet. Um Konflikte zu vermeiden, solltest du alle manuell hinzugefügten Designordner und -dateien entfernen, bevor du den Theme Chooser verwendest. Weitere Informationen findest du unter [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

## <a name="adding-a-theme-with-the-theme-chooser"></a>Ein Design mit dem Theme Chooser hinzufügen

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Klicke unter {% data variables.product.prodname_pages %} auf **Design auswählen** oder **Design ändern**.
  ![Schaltfläche „Design auswählen“](/assets/images/help/pages/choose-a-theme.png)
4. Klicke oben auf der Seite auf das gewünschte Design und anschließend auf **Design auswählen**.
  ![Designoptionen und Schaltfläche „Design auswählen“](/assets/images/help/pages/select-theme.png)
5. Möglicherweise wirst du aufgefordert, die Datei *README.md* deiner Website zu bearbeiten.
   - Um die Datei später zu bearbeiten, klickst du auf **Abbrechen**.
   ![Link „Abbrechen“ beim Bearbeiten einer Datei](/assets/images/help/pages/cancel-edit.png)
   - Informationen zum direkten Bearbeiten der Datei findest du unter [Bearbeiten von Dateien](/repositories/working-with-files/managing-files/editing-files).

Das ausgewählte Design wird automatisch auf Markdowndateien in deinem Repository angewendet. Um dein Design auf die HTML-Dateien in deinem Repository anzuwenden, musst du YAML-Frontmatter hinzufügen, um ein Layout für jede Datei festzulegen. Weitere Informationen findest du auf der Jekyll-Website unter [Front Matter](https://jekyllrb.com/docs/front-matter/).

## <a name="further-reading"></a>Weiterführende Themen

- [Designs](https://jekyllrb.com/docs/themes/) auf der Jekyll-Website
