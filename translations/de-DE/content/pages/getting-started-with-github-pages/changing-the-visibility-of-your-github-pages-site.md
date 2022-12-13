---
title: Ändern der Sichtbarkeit der GitHub Pages-Website
intro: 'Du kannst die Zugriffssteuerung für deine Projektwebsite verwalten, indem du die Website öffentlich oder privat veröffentlichst.'
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282857'
---
## Informationen über die Zugriffssteuerung für {% data variables.product.prodname_pages %}-Websites.

Mit der Zugriffssteuerung für {% data variables.product.prodname_pages %} kannst du den Zugriff auf deine Projektwebsite einschränken, indem du die Website privat veröffentlichst. Auf eine privat veröffentlichte Website kann nur von Personen mit Lesezugriff auf das Repository zugegriffen werden, von dem die Website veröffentlicht wird. Du kannst privat veröffentlichte Websites verwenden, um deine interne Dokumentation oder Wissensdatenbank mit Mitgliedern deines Unternehmens zu teilen. 

{% data reusables.pages.privately-publish-ghec-only %}

Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, ist die Zugriffssteuerung nicht verfügbar, und alle {% data variables.product.prodname_pages %}-Websites sind nur für andere Unternehmensangehörige zugänglich. Weitere Informationen zu {% data variables.product.prodname_emus %} findest du unter "[Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

Wenn deine Organisation {% data variables.product.prodname_ghe_cloud %} ohne {% data variables.product.prodname_emus %} verwendet, kannst du deine Websites privat oder öffentlich für alle Personen im Internet veröffentlichen.

Die Zugriffssteuerung ist für Projektwebsites verfügbar, die aus einem privaten oder internen Repository veröffentlicht werden, das im Besitz der Organisation ist. Sie können keine Zugriffssteuerung für eine Website der Organisation verwalten. Weitere Informationen zu den verschiedenen Arten von {% data variables.product.prodname_pages %}-Websites findest du unter "[Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Informationen zu Unterdomänen für privat veröffentlichte Websites

Privat veröffentlichte Websites sind unter einer anderen Unterdomäne als öffentlich veröffentlichte Websites verfügbar. Dadurch wird sichergestellt, dass deine {% data variables.product.prodname_pages %}-Website sicher sind, sobald sie veröffentlicht wurde:

- Wir sichern jede Unterdomäne von `*.pages.github.io` automatisch mit einem TLS-Zertifikat und erzwingen HSTS, um sicherzustellen, dass Browser die Seite immer über HTTPS bereitstellen.
- Wir verwenden eine eindeutige Unterdomäne für die privat veröffentlichte Website, um sicherzustellen, dass andere Repositorys in deiner Organisation keine Inhalte auf demselben Ursprung wie die Website veröffentlichen können. Dadurch wird deine Website vor "[Cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/)" geschützt. Deshalb hosten wir keine {% data variables.product.prodname_pages %}-Websites in der `github.com`-Domäne.

Du kannst die eindeutige Unterdomäne deiner Website auf der Registerkarte „Seiten“ deiner Repositoryeinstellungen anzeigen. Wenn du einen statischen Websitegenerator verwendest, der zum Erstellen der Website mit dem Repositorynamen als Pfad konfiguriert ist, musst du möglicherweise die Einstellungen für den statischen Websitegenerator aktualisieren, wenn du die Website in eine private Website änderst. Weitere Informationen findest du unter "[Konfigurieren von Jekyll in deiner {% data variables.product.prodname_pages %}-Website](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" oder in der Dokumentation zu dem statischen Websitegenerator.

Um eine kürzere und unvergesslichere Domäne für deine privat veröffentlichte Website zu verwenden, kannst du eine benutzerdefinierte Domäne konfigurieren. Weitere Informationen findest du unter "[Konfigurieren einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/pages/configuring-a-custom-domain-for-your-github-pages-site)".

## Ändern der Sichtbarkeit deiner {% data variables.product.prodname_pages %}-Website

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Wähle unter "{% data variables.product.prodname_pages %}" das Dropdownmenü **{% data variables.product.prodname_pages %}-Sichtbarkeit** aus und klicke dann auf eine Sichtbarkeit.
   ![Dropdownliste zum Auswählen einer Sichtbarkeit für deine Website](/assets/images/help/pages/public-or-private-visibility.png)
4. Um deine veröffentlichte Website anzuzeigen, klicke unter {% data variables.product.prodname_pages %} auf die URL deiner Website.
![URL deiner privat veröffentlichten Website](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
