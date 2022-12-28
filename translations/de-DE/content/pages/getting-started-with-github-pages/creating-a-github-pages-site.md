---
title: Erstellen einer GitHub Pages-Website
intro: 'Du kannst eine {% data variables.product.prodname_pages %}-Website in einem neuen oder vorhandenen Repository erstellen.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 45e7dead10f3f54b5c18d63352a037d04d49cb98
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643949'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Ein Repository für eine Website erstellen

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## Eine Website erstellen

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. Erstelle die Eintragsdatei für deine Website. {% data variables.product.prodname_pages %} sucht nach einer `index.html`-, `index.md`- oder `README.md`-Datei als Eintragsdatei für deine Website.

   {% ifversion pages-custom-workflow %}Wenn deine Veröffentlichungsquelle ein Branch und ein Ordner ist, muss sich die Eintragsdatei auf oberster Ebene des Quellordners im Quellbranch befinden. Wenn deine Veröffentlichungsquelle beispielsweise der Ordner `/docs` in Branch `main` ist, muss sich deine Eintragsdatei im Ordner `/docs` in einem Branch namens `main` befinden.

   Wenn deine Veröffentlichungsquelle ein {% data variables.product.prodname_actions %}-Workflow ist, muss das von dir bereitgestellte Artefakt die Eintragsdatei auf oberster Ebene des Artefakts enthalten. Anstatt die Eintragsdatei deinem Repository hinzuzufügen, kannst du deinen {% data variables.product.prodname_actions %}-Workflow deine Eintragsdatei generieren lassen, wenn der Workflow ausgeführt wird. {% else %} Die Eintragsdatei muss sich auf der obersten Ebene deiner ausgewählten Veröffentlichungsquelle befinden. Wenn deine Veröffentlichungsquelle beispielsweise der Ordner `/docs` in Branch `main` ist, muss sich deine Eintragsdatei im Ordner `/docs` in einem Branch namens `main` befinden.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Nächste Schritte

Du kannst deiner Website weitere Seiten hinzufügen, indem du zusätzliche neue Dateien erstellst. Jede Datei ist auf deiner Website im selben Verzeichnis verfügbar wie deine Veröffentlichungsquelle. Wenn beispielsweise die Veröffentlichungsquelle für deine Projektwebsite der Branch `gh-pages` ist, und du eine neue Datei namens `/about/contact-us.md` in Branch `gh-pages` erstellst, steht die Datei unter {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html` zur Verfügung.

Du kannst auch ein Design hinzufügen, um das Aussehen der Website anzupassen. Weitere Informationen findest du unter [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

Um deine Website noch weiter anzupassen, kannst du Jekyll verwenden, einen Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll).

## Weiterführende Themen

- "[Behandeln von Jekyll-Build-Fehlern für {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- [Erstellen und Löschen von Branches innerhalb deines Repositorys](/articles/creating-and-deleting-branches-within-your-repository)
- "[Erstellen neuer Dateien](/articles/creating-new-files)"
