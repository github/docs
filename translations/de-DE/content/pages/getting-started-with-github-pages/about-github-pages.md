---
title: Informationen zu GitHub Pages
intro: 'Du kannst {% data variables.product.prodname_pages %} verwenden, um eine Website über dich selbst, deine Organisation oder dein Projekt direkt über ein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu hosten.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507989'
---
## Informationen zu {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} ist ein Hosting-Dienst für statische Websites, der HTML-, CSS- und JavaScript-Dateien direkt aus einem Repository auf {% data variables.product.product_name %} bezieht, diese Dateien optional einem Build-Prozess unterzieht und eine Website veröffentlicht. Beispiele für {% data variables.product.prodname_pages %}-Websites findest du in der [{% data variables.product.prodname_pages %}-Beispielsammlung](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %} Du kannst deine Website auf der `github.io`-Domäne von {% data variables.product.prodname_dotcom %} oder deiner eigenen benutzerdefinierten Domäne hosten. Weitere Informationen findest du unter [Verwenden einer benutzerdefinierte Domäne mit {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages).
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} Weitere Informationen findest du unter [Ändern der Sichtbarkeit deiner {% data variables.product.prodname_pages %}-Website]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %} {% endif %}

Die ersten Schritte findest du unter [Erstellen einer {% data variables.product.prodname_pages %}-Website](/articles/creating-a-github-pages-site).

{% ifversion fpt or ghes or ghec %} Organisationsbesitzer können die Veröffentlichung von {% data variables.product.prodname_pages %}-Websites aus den Repositorys der Organisation deaktivieren. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% endif %}

## Arten von {% data variables.product.prodname_pages %}-Websites

Es gibt drei Arten von {% data variables.product.prodname_pages %}-Websites: Projekt-, Benutzer- und Organisations-Websites. Projekt-Websites sind mit einem bestimmten Projekt verbunden, das auf {% data variables.product.product_name %} gehostet wird, z. B. einer JavaScript-Bibliothek oder einer Rezeptsammlung. Benutzer- und Organisationswebsites werden mit einem bestimmten Konto unter {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} verbunden.

Um eine Benutzerwebsite zu veröffentlichen, musst du ein Repository erstellen, das deinem persönlichen Konto mit dem Namen {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %} gehört. Zum Veröffentlichen einer Organisationswebsite musst du ein Repository erstellen, das einer Organisation mit dem Namen {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %} gehört. {% ifversion fpt or ghec %} Sofern du keine benutzerdefinierte Domäne verwendest, sind Benutzer- und Organisationswebsites unter `http(s)://<username>.github.io` oder `http(s)://<organization>.github.io` verfügbar.{% elsif ghae %}Benutzer- und Organisationswebsites sind unter `http(s)://pages.<hostname>/<username>` oder `http(s)://pages.<hostname>/<organization>` verfügbar.{% endif %}

Die Quelldateien für eine Projekt-Website werden im selben Repository gespeichert wie das zugehörige Projekt. {% ifversion fpt or ghec %}Sofern du keine benutzerdefinierte Domäne verwendest, sind Projektwebsites unter `http(s)://<username>.github.io/<repository>` oder `http(s)://<organization>.github.io/<repository>` verfügbar.{% elsif ghae %}Projektwebsites sind unter `http(s)://pages.<hostname>/<username>/<repository>/` oder `http(s)://pages.<hostname>/<organization>/<repository>/` verfügbar.{% endif %}

{% ifversion ghec %} Wenn du deine Website privat veröffentlichst, lautet die URL für deine Website anders. Weitere Informationen findest du unter [Ändern der Sichtbarkeit deiner {% data variables.product.prodname_pages %}-Website](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% endif %}

{% ifversion fpt or ghec %} Weitere Informationen dazu, wie benutzerdefinierte Domänen die URL für deine Website beeinflussen, findest du unter [Informationen zu benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages).
{% endif %}

Du kannst für jedes Konto auf {% data variables.product.product_name %} nur eine Benutzer- oder Organisationswebsite erstellen. Für Projektwebsites gibt es keine Beschränkung, ganz gleich, ob sie einer Organisation oder einem Benutzerkonto gehören.

{% ifversion ghes %} Unter welcher URL deine Website erreichbar ist, hängt davon ab, ob die Subdomain-Isolation für {% data variables.product.product_location %} aktiviert ist.

| Standorttyp | Subdomänen-Isolation aktiviert | Subdomänen-Isolation deaktiviert |
| ------------ | --------------------------- | ---------------------------- |
Benutzer | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Projektwebsite im Besitz eines persönlichen Kontos | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Project Website im Besitz eines Organisationskontos | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Weitere Informationen findest du unter [Aktivieren der Subdomain-Isolation](/enterprise/admin/installation/enabling-subdomain-isolation), oder wende dich an den bzw. die Websiteadministrator*in.
{% endif %}

## Veröffentlichungsquellen für {% data variables.product.prodname_pages %}-Websites

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

Weitere Informationen findest du unter [Konfigurieren einer Veröffentlichungsquelle für deine GitHub Pages-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

{% ifversion ghec %}
## Einschränkungen für {% data variables.product.prodname_emus %}
Wenn du ein {% data variables.product.prodname_managed_user %} bist, ist die Verwendung von {% data variables.product.prodname_pages %} eingeschränkt.

  - {% data variables.product.prodname_pages %}-Websites können nur aus Repositorys veröffentlicht werden, die im Besitz von Organisationen sind.
  - {% data variables.product.prodname_pages %}-Websites sind nur für andere Mitglieder des Unternehmens sichtbar.

Weitere Informationen zu {% data variables.product.prodname_emus %} findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).
{% endif %}

## Generatoren für statische Websites

{% data variables.product.prodname_pages %} veröffentlicht alle statischen Dateien, die du an dein Repository pushst. Du kannst eigene statische Dateien erstellen oder einen Generator für statische Websites verwenden, der die Website für dich erstellt. Darüber hinaus kannst du deinen eigenen Buildprozess lokal oder auf einem anderen Server anpassen.

{% ifversion pages-custom-workflow %}

Wenn du statt Jekyll einen benutzerdefinierten Buildprozess oder einen anderen Generator für statische Websites verwendest, kannst du {% data variables.product.prodname_actions %} schreiben, um deine Website zu erstellen und zu veröffentlichen. {% data variables.product.product_name %} bietet Startworkflows für mehrere Generatoren für statische Websites. Weitere Informationen findest du unter [Konfigurieren einer Veröffentlichungsquelle für deine GitHub Pages-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Wenn du deine Website von einem Quellbranch aus veröffentlichst, verwendet {% data variables.product.prodname_pages %} standardmäßig Jekyll zum Erstellen deiner Website. Wenn du statt Jekyll einen anderen Generator für statische Websites verwenden möchtest, empfehlen wir, stattdessen {% data variables.product.prodname_actions %} zu schreiben, um deine Website zu erstellen und zu veröffentlichen. Anderenfalls deaktiviere den Jekyll-Buildprozess, indem du im Stamm deiner Veröffentlichungsquelle eine leere Datei namens `.nojekyll` erstellst, und befolge dann die Anweisungen des gewünschten Generators für statische Websites, um deine Website lokal zu erstellen.

{% else %}

Wir empfehlen Jekyll, einen Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %} und einem vereinfachten Build-Prozess. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll).

{% data variables.product.prodname_pages %} verwendet standardmäßig Jekyll für die Erstellung deiner Website. Wenn du anstelle von Jekyll einen anderen Generator für statische Websites verwenden möchtest, musst du den Jekyll-Buildprozess deaktivieren. Erstelle dazu im Stamm deiner Veröffentlichungsquelle eine leere Datei namens `.nojekyll` und befolge die Anweisungen des gewünschten Generators, um deine Website lokal zu erstellen.

{% endif %}

{% data variables.product.prodname_pages %} unterstützt keine serverseitigen Sprachen wie PHP, Ruby oder Python.

## Grenzwerte für die Verwendung von {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_pages %}-Websites, die nach dem 15. Juni 2016 und mittels `github.io`-Domänen erstellt wurden, werden über HTTPS bereitgestellt. Wenn du deine Website vor dem 15. Juni 2016 erstellt hast, kannst du die HTTPS-Unterstützung für den Traffic zu deiner Website aktivieren. Weitere Informationen findest du unter [Sichern von {% data variables.product.prodname_pages %} mit HTTPS](/articles/securing-your-github-pages-site-with-https).

### Verbotene Verwendungen
{% endif %} {% data variables.product.prodname_pages %} soll oder darf nicht als kostenloser Webhostingdienst zum Betreiben deiner Onlinegeschäfts-, E-Commerce- oder sonstigen Website verwendet werden, die in erster Linie darauf ausgerichtet ist, gewerbliche Transaktionen zu vereinfachen oder kommerzielle Software-as-a-Service-Lösungen (SaaS) bereitzustellen. {% data reusables.pages.no_sensitive_data_pages %}

Darüber hinaus unterliegt die Nutzung von {% data variables.product.prodname_pages %} den [GitHub-Nutzungsbedingungen](/free-pro-team@latest/github/site-policy/github-terms-of-service/), einschließlich der Beschränkungen für get-rich-quick-Schemas, sexuelle obszöne Inhalte und gewaltverherrlichende oder bedrohliche Inhalte oder Aktivitäten.

### Usage limits (Nutzungseinschränkungen)
{% data variables.product.prodname_pages %} unterliegen den folgenden Nutzungseinschränkungen:

  - {% data variables.product.prodname_pages %}-Quellrepositorys haben einen empfohlenen Grenzwert von 1 GB.{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Was ist mein Datenträgerkontingent?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - Veröffentlichte {% data variables.product.prodname_pages %}-Websites dürfen nicht größer als 1 GB sein.
{% ifversion fpt or ghec %}
  - {% data variables.product.prodname_pages %}-Websites besitzen eine *weiche* Bandbreitenbegrenzung von 100 GB pro Monat.
  - {% data variables.product.prodname_pages %}-Websites haben einen *weichen* Grenzwert von 10 Builds pro Stunde.{% ifversion pages-custom-workflow %} Dieser Grenzwert gilt nicht, wenn du deine Website mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow veröffentlichst.{% endif %}
  - Um eine konsistente Dienstqualität für alle {% data variables.product.prodname_pages %}-Websites bereitzustellen, können Ratenbegrenzungen gelten. Diese Ratenbegrenzungen sollen nicht die legitimen Verwendungen von {% data variables.product.prodname_pages %} beeinträchtigen. Wenn deine Anforderung die Ratenbegrenzung auslöst, erhältst du eine entsprechende Antwort mit dem HTTP-Statuscode `429` sowie einen informativen HTML-Text.

Wenn deine Website diese Nutzungskontingente überschreitet, kann deine Website allenfalls nicht unterstützt werden oder du erhältst eine höfliche E-Mail von {% data variables.contact.contact_support %}, in der Strategien vorgeschlagen werden, um die Auswirkungen deiner Website auf unsere Server zu reduzieren. Dazu zählen das Einsetzen eines Drittanbieter-CDNs (Content Distribution Networks) vor deiner Website, die Nutzung anderer {% data variables.product.prodname_dotcom %}-Funktionen, beispielsweise Veröffentlichungen, oder der Wechsel zu einem anderen Hosting-Dienst, der möglicherweise besser zu deinen Anforderungen passt.

{% endif %}

## MIME-Typen auf {% data variables.product.prodname_pages %}

Ein MIME-Typ ist ein Header, den ein Server an einen Browser übermittelt und der Informationen zur Art und zum Format der Dateien enthält, die der Browser angefordert hat. {% data variables.product.prodname_pages %} unterstützt mehr als 750 MIME-Typen bei Tausenden von Dateierweiterungen. Die Liste der unterstützten MIME-Typen wird aus dem [Mime-db-Projekt](https://github.com/jshttp/mime-db) generiert.

Zwar kannst du keine benutzerdefinierten MIME-Typen für einzelne Dateien oder Repositorys festlegen, aber du kannst MIME-Typen für die Verwendung auf {% data variables.product.prodname_pages %} hinzufügen oder ändern. Weitere Informationen findest du in [den Mime-db-Richtlinien](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## Datensammlung

Wenn eine {% data variables.product.prodname_pages %}-Website besucht wird, wird die IP-Adresse des Besuchers zu Sicherheitszwecken protokolliert und gespeichert, unabhängig davon, ob sich der Besucher bei {% data variables.product.prodname_dotcom %} angemeldet hat oder nicht. Weitere Informationen zu den Sicherheitspraktiken von {% data variables.product.prodname_dotcom %} findest du unter <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %}-Datenschutzbestimmungen</a>.
{% endif %}

## Weiterführende Themen

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) für {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
