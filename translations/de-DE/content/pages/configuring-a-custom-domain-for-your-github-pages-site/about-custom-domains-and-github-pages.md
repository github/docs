---
title: Informationen zu benutzerdefinierten Domains und GitHub Pages
intro: '{% data variables.product.prodname_pages %} unterstützt das Verwenden benutzerdefinierter Domänen oder das Ändern des Stamms deiner Website-URL vom Standard, beispielsweise `octocat.github.io`, in jeder deiner Domänen.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134293'
---
## Unterstützte benutzerdefinierte Domänen

{% data variables.product.prodname_pages %} unterstützt zwei Domänen-Typen: Subdomänen und Apex-Domänen. Eine Liste der nicht unterstützten benutzerdefinierten Domänen findest du unter [Problembehandlung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported).

| Unterstützter benutzerdefinierter Domänen-Typ | Beispiel |
|---|---|
| Unterdomäne `www` | `www.example.com` |
| Benutzerdefinierte Unterdomäne | `blog.example.com` |
| Apex-Domäne        | `example.com` |

Du kannst für deine Website eine oder beide Konfigurationen für die Unterdomänen „Apex“ und „`www`“ einrichten. Weitere Informationen zu Apex-Domänen findest du unter [Verwenden einer Apex-Domäne für deine {% data variables.product.prodname_pages %}-Website](#using-an-apex-domain-for-your-github-pages-site).

Wir empfehlen, immer eine `www`-Unterdomäne zu verwenden, auch bei Verwendung einer Apex-Domäne. Wenn du eine neue Website mit einer Apex-Domäne erstellst, wird automatisch versucht, die Unterdomäne `www` zum Bereitstellen der Inhalte deiner Website zu sichern, du musst jedoch die DNS-Änderungen vornehmen, um die Unterdomäne `www` zu verwenden. Wenn du eine `www`-Unterdomäne konfigurierst, wird automatisch versucht, die zugeordnete Apex-Domäne zu sichern. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site)“.

Nachdem du eine benutzerdefinierte Domäne für eine Benutzer- oder Organisationswebsite konfiguriert hast, wird die benutzerdefinierte Domäne den `<user>.github.io`- oder `<organization>.github.io`-Bestandteil der URL für alle dem Konto gehörenden Projektwebsites ersetzen, für die keine benutzerdefinierte Domäne konfiguriert wurde. Wenn beispielsweise die benutzerdefinierte Domäne deiner Benutzerwebsite `www.octocat.com` lautet und du eine Projektwebsite besitzt, für die keine benutzerdefinierte Domäne konfiguriert ist und die aus einem Repository namens `octo-project` veröffentlicht wurde, ist die {% data variables.product.prodname_pages %}-Website dieses Repositorys unter `www.octocat.com/octo-project` verfügbar.

## Eine Subdomäne für deine {% data variables.product.prodname_pages %}-Website verwenden

Eine Subdomäne ist der Teil einer URL vor der Root-Domäne. Du kannst deine Unterdomäne als `www` oder als einen bestimmten Bereich deiner Website konfigurieren, wie z. B. `blog.example.com`.

Unterdomänen werden mit einem `CNAME`-Eintrag über deinen DNS-Anbieter konfiguriert. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)“.

### `www`-Unterdomänen

Eine `www`-Unterdomäne ist der am häufigsten verwendete Unterdomänen-Typ. Zum Beispiel umfasst `www.example.com` eine `www`-Unterdomäne.

`www`-Unterdomänen sind die stabilsten benutzerdefinierten Domänen, da `www`-Unterdomänen nicht von Änderungen bei den IP-Adressen der Server von {% data variables.product.product_name %} betroffen sind.

### Benutzerdefinierte Unterdomänen

Eine benutzerdefinierte Unterdomäne ist eine Art von Unterdomäne, die nicht die standardmäßige `www`-Variante verwendet. Benutzerdefinierte Subdomänen kommen meistens dann zum Einsatz, wenn du zwei getrennte Bereiche deiner Website wünschst. Du kannst z. B. eine Website mit dem Namen `blog.example.com` erstellen und diesen Abschnitt unabhängig von `www.example.com` anpassen.

## Eine Apex-Domäne für deine {% data variables.product.prodname_pages %}-Website verwenden

Eine Apex-Domäne ist eine benutzerdefinierte Domäne, die keine Unterdomäne wie `example.com` enthält. Apex-Domänen sind auch als Basis-, Bare-, Naked-, Root-Apex- oder Zone-Apex-Domänen bekannt.

Eine Apex-Domäne wird mit einem `A`-, `ALIAS`- oder `ANAME`-Eintrag über deinen DNS-Anbieter konfiguriert. Weitere Informationen findest du unter „[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)“.

{% data reusables.pages.www-and-apex-domain-recommendation %} Weitere Informationen findest du unter [Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain).

## Sichern einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website

{% data reusables.pages.secure-your-domain %} Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) und [Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site).

Es gibt mehrere Gründe, weshalb deine Website automatisch deaktiviert sein könnte.

- Wenn du ein Herunterstufen von {% data variables.product.prodname_pro %} auf {% data variables.product.prodname_free_user %} durchführst, wird die Veröffentlichung aller {% data variables.product.prodname_pages %}-Websites, die über private Repositorys in deinem Konto veröffentlicht wurden, rückgängig gemacht. Weitere Informationen findest du unter [Herabstufen deines {% data variables.product.prodname_dotcom %}-Abrechnungsplans](/articles/downgrading-your-github-billing-plan).
- Wenn du ein privates Repository zu einem persönlichen Konto überträgst, das {% data variables.product.prodname_free_user %} verwendet, verliert das Repository den Zugriff auf die {% data variables.product.prodname_pages %}-Funktion, und die aktuelle Veröffentlichung der {% data variables.product.prodname_pages %}-Website wird rückgängig gemacht. Weitere Informationen findest du unter [Übertragen eines Repositorys](/articles/transferring-a-repository).

## Weiterführende Themen

- [Problembehandlung für benutzerdefinierte Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)
