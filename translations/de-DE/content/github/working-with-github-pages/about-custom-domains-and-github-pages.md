---
title: Informationen zu benutzerdefinierten Domänen und GitHub Pages
intro: '{% data variables.product.prodname_pages %} unterstützt die Verwendung benutzerdefinierter Domänen oder das Ändern des Roots Deiner Website-URL vom Standard, beispielsweise ''octocat.github.io'', in jede Domäne, die Dir gehört.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites/
  - /articles/about-supported-custom-domains/
  - /articles/custom-domain-redirects-for-your-github-pages-site/
  - /articles/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

### Unterstützte benutzerdefinierte Domänen

{% data variables.product.prodname_pages %} unterstützt zwei Domänen-Typen: Subdomänen und Apex-Domänen. Eine Liste der nicht unterstützten benutzerdefinierten Domänen findest Du unter „[Fehlerbehebung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported).“

| Unterstützter benutzerdefinierter Domänen-Typ | Beispiel           |
| --------------------------------------------- | ------------------ |
| `www`-Subdomäne                               | `www.example.com`  |
| Benutzerdefinierte Subdomäne                  | `blog.example.com` |
| Apex-Domäne                                   | `example.com`      |

Du kannst einen Typ oder beide Typen benutzerdefinierter Domänen für Deine Website einrichten. Wir empfehlen, immer eine `www`-Subdomäne zu verwenden, auch bei Verwendung einer Apex-Domäne. Weitere Informationen findest Du unter „[Eine Apex-Domäne für Deine {% data variables.product.prodname_pages %}-Website verwenden](#using-an-apex-domain-for-your-github-pages-site).“

Nachdem Du einen benutzerdefinierte Domäne für eine Benutzer- oder Organisations-Website konfiguriert hast, wird die benutzerdefinierte Domäne den `<user>.github.io`- oder `<organization>.github.io`-Bestandteil der URL für alle dem Konto gehörende Projekt-Websites ersetzen, welche keine benutzerdefinierte Domäne konfiguriert haben. Wenn beispielsweise die benutzerdefinierte Domäne Deiner Benutzer-Website `www.octocat.com` ist und Du eine Projekt-Website besitzt, für die keine benutzerdefinierte Domäne konfiguriert ist und die aus einem Repository namens `octo-project` veröffentlicht wurde, lautet die URL der {% data variables.product.prodname_pages %}-Website dieses Repositorys `www.octocat.com/octo-project`.

### Eine Subdomäne für Deine {% data variables.product.prodname_pages %}-Website verwenden

Eine Subdomäne ist der Teil einer URL vor der Root-Domäne. Du kannst Deine Subdomäne als `www` oder als bestimmten Bereich Deiner Website, z. B. `blog.example.com`, konfigurieren.

Subdomänen werden mit dem Eintrag `CNAME` über Deinen DNS-Provider konfiguriert. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).“

#### `www`-Subdomänen

Eine `www`-Subdomäne ist der am häufigsten verwendete Subdomänen-Typ. Beispielsweise enthält `www.example.com` eine `www`-Subdomäne.

`www`-Subdomänen sind die stabilsten benutzerdefinierten Domänen, da `www`-Subdomänen nicht von Änderungen bei den IP-Adressen der Server von {% data variables.product.product_name %} betroffen sind. Deine Website wird auch schneller geladen, da sich der Schutz vor Denial-of-Service-Angriffen (DoS) effizienter implementieren lässt.

#### Benutzerdefinierte Subdomänen

Eine benutzerdefinierte Subdomäne ist eine Art von Subdomäne, die nicht die standardmäßige `www`-Subdomäne verwendet. Benutzerdefinierte Subdomänen kommen meistens dann zum Einsatz, wenn Du zwei getrennte Bereiche Deiner Website wünschst. Du kannst beispielsweise eine Website namens `blog.example.com` erstellen und diesen Bereich unabhängig von `www.example.com` gestalten.

### Eine Apex-Domäne für Deine {% data variables.product.prodname_pages %}-Website verwenden

Eine Apex-Domäne ist eine benutzerdefinierte Domäne, die keine Subdomäne wie `example.com` enthält. Apex-Domänen sind auch als Basis-, Bare-, Naked-, Root-Apex- oder Zone-Apex-Domänen bekannt.

Eine Apex-Domäne wird mit einem `A`-, `ALIAS`- oder `ANAME`-Eintrag über Deinen DNS-Provider konfiguriert. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).“

{% data reusables.pages.www-and-apex-domain-recommendation %}

### Benutzerdefinierte Domänen aktualisieren, wenn Deine {% data variables.product.prodname_pages %}-Website deaktiviert ist

Wenn Deine {% data variables.product.prodname_pages %}-Website deaktiviert ist, aber eine benutzerdefinierte Domäne für sie eingerichtet wurde, solltest Du den DNS-Eintrag bei Deinem DNS-Provider umgehend aktualisieren oder entfernen, um eine Domänen-Übernahme zu verhindern. Wenn Du eine benutzerdefinierte Domäne bei Deinem DNS-Provider konfigurierst, während Deine Website deaktiviert ist, könnte ein Dritter eine Website auf einer Deiner Subdomänen hosten. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“

Es gibt mehrere Gründe, weshalb Deine Website automatisch deaktiviert sein könnte.

- Wenn Du ein Herunterstufen von {% data variables.product.prodname_pro %} auf {% data variables.product.prodname_free_user %} durchführst, wird die Veröffentlichung aller {% data variables.product.prodname_pages %}-Websites, die über private Repositorys in Deinem Konto veröffentlicht wurden, rückgängig gemacht. Weitere Informationen findest Du unter „[Den {% data variables.product.prodname_dotcom %}-Abrechnungsplan herunterstufen](/articles/downgrading-your-github-billing-plan).“
- Wenn Du ein privates Repository zu einem persönlichen Konto überträgst, das {% data variables.product.prodname_free_user %} verwendet, verliert das Repository den Zugriff auf die {% data variables.product.prodname_pages %}-Funktion, und die aktuelle Veröffentlichung der {% data variables.product.prodname_pages %}-Website wird rückgängig gemacht. Weitere Informationen findest Du unter „[Ein Repository übertragen](/articles/transferring-a-repository).“

### Weiterführende Informationen

- „[Fehlerbehebung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)“
