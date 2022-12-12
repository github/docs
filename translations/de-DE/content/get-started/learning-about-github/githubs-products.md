---
title: Produkte von GitHub
intro: 'Eine Übersicht über {% data variables.product.prodname_dotcom %}-Produkte und -Tarife'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159661'
---
## Informationen zu Produkten von {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} bietet kostenlose und kostenpflichtige Produkte zum Speichern und Zusammenarbeiten an Code. Einige Produkte gelten nur für persönliche Konten, während andere Pläne nur für Organisations- und Unternehmenskonten gelten. Weitere Informationen zu Konten findest du unter [Typen von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts).

Die Preise und eine vollständige Liste der Funktionen für jedes Produkt findest du unter {% data variables.product.pricing_url %}. {% data reusables.products.product-roadmap %}

Achte beim Lesen von {% data variables.product.prodname_docs %} darauf, dass du die Version zu deinem Produkt auswählst. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## {% data variables.product.prodname_free_user %} für persönliche Konten

Mit {% data variables.product.prodname_free_team %} für persönliche Konten kannst du mit einer unbegrenzten Anzahl von Mitarbeiter*innen an einer unbegrenzten Anzahl an öffentlichen Repositorys mit vollen Funktionsumfang arbeiten, und an einer unbegrenzten Anzahl an privaten Repositorys mit einem begrenzten Funktionsumfang.

Bei {% data variables.product.prodname_free_user %} umfasst dein persönliches Konto Folgendes:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Erzwingung der zweistufigen Authentifizierung
- 2\.000 {% data variables.product.prodname_actions %}-Minuten pro Monat 
- 500 MB {% data variables.product.prodname_registry %}-Speicher {% ifversion fpt or ghec%}
- 120 {% data variables.product.prodname_github_codespaces %}-Kernstunden pro Monat
- 15 GB {% data variables.product.prodname_github_codespaces %}-Speicher pro Monat {% endif %}

## {% data variables.product.prodname_pro %}

Zusätzlich zu den mit {% data variables.product.prodname_free_user %} verfügbaren Features für persönliche Konten bietet {% data variables.product.prodname_pro %} noch die folgenden:
- {% data variables.contact.github_support %} via E-Mail
- 3\.000 {% data variables.product.prodname_actions %}-Minuten pro Monat 
- 2 GB {% data variables.product.prodname_registry %}-Speicher {% ifversion fpt or ghec%}
- 180 {% data variables.product.prodname_github_codespaces %}-Kernstunden pro Monat
- 20 GB {% data variables.product.prodname_github_codespaces %}-Speicher pro Monat {% endif %}
- Erweiterte Tools und Einblicke in private Repositorys:
  - Pull-Request-Reviews erforderlich
  - Mehrere Pull-Request-Reviewer
  - Geschützte Branches
  - Codebesitzer
  - Automatisch verknüpfte Verweise
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Repository-Insights-Diagramm: Pulse, Mitarbeiter, Traffic, Commits, Code-Verlauf, Netzwerk und Forks

## {% data variables.product.prodname_free_team %} für Organsationen

Mit {% data variables.product.prodname_free_team %} für und Organisationen kannst du mit einer unbegrenzten Anzahl von Mitarbeitern an unbegrenzten öffentlichen Repositorys mit einem vollen Funktionsumfang arbeiten oder an unbegrenzten privaten Repositorys mit einem begrenzten Funktionsumfang.

Zusätzlich zu den mit {% data variables.product.prodname_free_user %} für Benutzerkonten verfügbaren Features bietet {% data variables.product.prodname_free_team %} für Organisationen noch die folgenden:
- {% data variables.product.prodname_gcf %}
- Diskussionen im Team
- Teamzugriffssteuerungen zum Verwalten von Gruppen
- 2\.000 {% data variables.product.prodname_actions %}-Minuten pro Monat 
- 500 MB {% data variables.product.prodname_registry %}-Speicher 

## {% data variables.product.prodname_team %}

Zusätzlich zu den mit {% data variables.product.prodname_free_team %} verfügbaren Funktionen für Organisationen enthält {% data variables.product.prodname_team %} noch folgendes:
- {% data variables.contact.github_support %} via E-Mail
- 3\.000 {% data variables.product.prodname_actions %}-Minuten pro Monat 
- 2 GB {% data variables.product.prodname_registry %}-Speicher 
- Erweiterte Tools und Einblicke in private Repositorys:
  - Pull-Request-Reviews erforderlich
  - Mehrere Pull-Request-Reviewer
  - Pull Requests entwerfen
  - Pull-Request-Reviewer aus dem Team
  - Geschützte Branches
  - Codebesitzer
  - Eingerichtete Erinnerungen
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Diagramme mit Repositoryerkenntnissen: Pulse, Mitwirkende, Datenverkehr, Commits, Codehäufigkeit, Netzwerk und Forks {%- ifversion fpt or ghec %}
- Option zum Aktivieren von {% data variables.product.prodname_github_codespaces %}
  - Organisationsbesitzer können {% data variables.product.prodname_github_codespaces %} für die Organisation aktivieren, indem sie ein Ausgabenlimit festlegen und Benutzerberechtigungen für Mitglieder ihrer Organisation zuweisen. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).
{%- endif %}

{% data variables.product.company_short %}-Rechnungen für {% data variables.product.prodname_team %} auf Benutzerbasis. Weitere Informationen findest du unter [Informationen zu den Preisen pro Benutzer]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}.{% else %} in der Dokumentation zu Free, Pro und Team.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} bietet zwei Bereitstellungsoptionen: in der Cloud gehostet und selbst gehostet. 

Zusätzlich zu den mit {% data variables.product.prodname_team %} verfügbaren Funktionen enthält {% data variables.product.prodname_enterprise %} noch folgendes:
- {% data variables.contact.enterprise_support %}
- zusätzliche Steuerungsoptionen für Sicherheit, Compliance und Bereitstellung
- Authentifizierung mit SAML-SSO
- Zugriffsbereitstellung mit SAML oder SCIM
- {% data variables.product.prodname_github_connect %}
- Option zum Erwerb von {% data variables.product.prodname_GH_advanced_security %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% data variables.product.prodname_ghe_cloud %} umfasst außerdem
- {% data variables.contact.enterprise_support %}. Weitere Informationen findest du unter <a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %}-Support</a> und im <a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">Anhang zu {% data variables.product.prodname_ghe_cloud %}</a>.
- 50.000 {% data variables.product.prodname_actions %}-Minuten pro Monat 
- 50 GB {% data variables.product.prodname_registry %}-Speicher 
- Zugriffssteuerung für {% data variables.product.prodname_pages %}-Websites. Weitere Informationen findest du unter "[Ändern der Sichtbarkeit deiner {% data variables.product.prodname_pages %}-Website](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
- Eine Vereinbarung zum Servicelevel für eine monatliche Betriebszeit von 99,9 %
- Die Option zum Konfigurieren deines Unternehmens für {% data variables.product.prodname_emus %}, mit der du Mitglieder mit deinem Identitätsanbieter bereitstellen und verwalten und die Beiträge deiner Mitglieder nur auf dein Unternehmen beschränken kannst. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
- Die Option, die Richtlinien und Abrechnungen für mehrere {% data variables.product.prodname_dotcom_the_website %}-Organisationen mit Enterprise-Konto zentral zu verwalten. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts).

{% data reusables.enterprise.about-github-for-enterprises %}

Du kannst eine Testversion einrichten, um {% data variables.product.prodname_ghe_cloud %} zu testen. Weitere Informationen findest du unter [Einrichten einer Testversion von {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud).

Weitere Informationen zum Hosten deiner eigenen Instanz von {% data variables.product.prodname_ghe_server %}, einschließlich des Einrichtens einer Testversion, findest du unter [Informationen zu {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server).

## Weitere Informationsquellen

- Weitere Informationen findest du unter [Informationen zu den Preisen pro Benutzer]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion not ghec %}" in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% endif %}
