---
title: Veröffentlichung einer GitHub Pages-Website zurückziehen
intro: 'Du kannst die Veröffentlichung deiner {% data variables.product.prodname_pages %}-Website aufheben, sodass sie nicht mehr verfügbar ist.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109550'
---
{% ifversion pages-custom-workflow %}

Wenn du die Veröffentlichung deiner Website aufhebst, ist sie nicht mehr verfügbar. Alle vorhandenen Repositoryeinstellungen oder Inhalte sind davon nicht betroffen.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke unter **{% data variables.product.prodname_pages %}** neben der Meldung **Your site is live at** (Deine Website ist aktiv unter) auf {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. Wähle im Menü, das daraufhin angezeigt wird, **Unpublish Site** (Veröffentlichung der Website aufheben) aus.

   ![Dropdownmenü zum Aufheben der Veröffentlichung der Website](/assets/images/help/pages/unpublish-site.png)

{% else %}

## Veröffentlichung einer Projektwebsite zurückziehen

{% data reusables.repositories.navigate-to-repo %}
2. Wenn ein `gh-pages`-Branch im Repository vorhanden ist, lösche den `gh-pages`-Branch. Weitere Informationen finden Sie unter [Erstellen und Löschen von Branches innerhalb Ihres Repositorys](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch).
3. Wenn der `gh-pages`-Branch deine Veröffentlichungsquelle war, {% ifversion fpt or ghec %}fahre mit Schritt 6 fort{% else %}wird die Veröffentlichung deiner Website jetzt aufgehoben, und du kannst die restlichen Schritte überspringen{% endif %}.
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. Wähle unter {% data variables.product.prodname_pages %} im Dropdownmenü **Quelle** die Option **Keine** aus. 
  ![Dropdownmenü zur Auswahl einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %}

## Veröffentlichung einer Benutzer- oder Organisations-Website zurückziehen

{% data reusables.repositories.navigate-to-repo %}
2. Lösche den Branch, den du als Veröffentlichungsquelle verwendest, oder lösche das gesamte Repository. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch) und [Löschen eines Repositorys](/articles/deleting-a-repository).
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
