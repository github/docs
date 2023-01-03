---
title: Informationen zu GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} stellt Kunden zusätzliche Sicherheitsfeatures über eine {% data variables.product.prodname_advanced_security %}-Lizenz zur Verfügung.{% ifversion fpt or ghec %} Diese Features sind auch für öffentliche Repositorys auf {% data variables.product.prodname_dotcom_the_website %} aktiviert.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: f98809ffca46dce909b312bf24fbebf9685db3cb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107325'
---
## Informationen zu {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} bietet viele Features, mit denen du die Qualität deines Codes verbessern und erhalten kannst. Einige dieser Features sind in allen Tarifen{% ifversion not ghae %} enthalten, wie z. B. das Abhängigkeitsdiagramm und {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Andere Sicherheitsfeatures erfordern eine {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %}-Lizenz, um Repositorys neben öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} auszuführen{% endif %}.

{% ifversion ghes or ghec %}Weitere Informationen zum Erwerben einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} findest du unter [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% elsif ghae %}Im Betarelease fallen keine Gebühren für {% data variables.product.prodname_GH_advanced_security %} auf {% data variables.product.prodname_ghe_managed %} an.{% elsif fpt %}Um eine {% data variables.product.prodname_GH_advanced_security %}-Lizenz zu erwerben, musst du {% data variables.product.prodname_enterprise %} nutzen. Weitere Informationen zum Upgraden auf {% data variables.product.prodname_enterprise %} mit {% data variables.product.prodname_GH_advanced_security %} findest du unter [GitHub-Produkte](/get-started/learning-about-github/githubs-products) und [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% endif %}

## Informationen zu {% data variables.product.prodname_advanced_security %}-Features

Eine {% data variables.product.prodname_GH_advanced_security %}-Lizenz bietet die folgenden zusätzlichen Features:

- **{% data variables.product.prodname_code_scanning_capc %}** : Suche nach potenziellen Sicherheitsrisiken und Fehlern in deinem Code. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning).

- **{% data variables.product.prodname_secret_scanning_caps %}** : Erkenne Geheimnisse, z. B. Schlüssel und Token, die in das Repository eingecheckt wurden.{% ifversion secret-scanning-push-protection %} Wenn der Pushschutz aktiviert ist, werden Geheimnisse auch erkannt, wenn sie an dein Repository gepusht werden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning) und [Schützen von Pushvorgängen mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).{% else %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning). {% endif %}

- **Abhängigkeitsüberprüfung**: Zeige die vollständigen Auswirkungen von Änderungen an Abhängigkeiten an, und sieh dir Details zu anfälligen Versionen an, bevor du einen Pull Request zusammenführst. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/about-dependency-review).

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Sicherheitsübersicht**: Überprüfe die Sicherheitskonfiguration und Warnungen für eine Organisation, und identifiziere die Repositorys mit dem größten Risiko. Weitere Informationen findest du unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview).
{% endif %}

{% ifversion fpt or ghec %} In der folgenden Tabelle wird die Verfügbarkeit von {% data variables.product.prodname_GH_advanced_security %}-Features für öffentliche und private Repositorys zusammengefasst.

|                   | Öffentliches Repository           | Privates Repository ohne {% data variables.product.prodname_advanced_security %} | Privates Repository mit {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Codeüberprüfung     | Ja                         | Nein                                           | Ja                                        |
| Geheime Überprüfung   | Ja **(nur eingeschränkte Funktionalität)** | Nein                                           | Ja                                       |
| Abhängigkeitsüberprüfung | Ja                         | Nein                                           | Ja                                       |
{% endif %}

Weitere Informationen zu {% data variables.product.prodname_advanced_security %}-Features, die sich in der Entwicklung befinden, findest du unter [Öffentliche Roadmap zu {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap). Eine Übersicht über alle Sicherheitsfeatures findest du unter [Sicherheitsfeatures von {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features).

{% ifversion fpt or ghec %} {% data variables.product.prodname_GH_advanced_security %}-Features werden für alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} aktiviert. Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, können diese Features zusätzlich für private und interne Repositorys aktivieren. {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Bereitstellen von GitHub Advanced Security in deinem Unternehmen

Um zu erfahren, was du zum Planen deiner {% data variables.product.prodname_GH_advanced_security %}-Bereitstellung auf hoher Ebene benötigst, und um die empfohlenen Rolloutphasen zu überprüfen, lies [Einführen von {% data variables.product.prodname_GH_advanced_security %} im großen Stil](/code-security/adopting-github-advanced-security-at-scale).

{% endif %}

{% ifversion not fpt %}
## Aktivieren von {% data variables.product.prodname_advanced_security %}-Features

{%- ifversion ghes %} Der Administrator der Website muss {% data variables.product.prodname_advanced_security %} für {% data variables.location.product_location %} aktivieren, bevor du diese Features verwenden kannst. Weitere Informationen findest du unter [Konfigurieren von Advanced Security-Features](/admin/configuration/configuring-advanced-security-features).

Sobald dein System eingerichtet ist, kannst du diese Features auf Organisations- oder Repositoryebene aktivieren und deaktivieren.

{%- elsif ghec %} Diese Features sind für öffentliche Repositorys dauerhaft aktiviert und können nur deaktiviert werden, wenn du die Sichtbarkeit des Projekts änderst, sodass der Code nicht mehr öffentlich ist.

Bei anderen Repositorys kannst du diese Features auf Organisations- oder Repositoryebene aktivieren und deaktivieren, sobald du über eine Lizenz für dein Unternehmenskonto verfügst.

{%- elsif ghae %} Du kannst diese Features auf Organisations- oder Repositoryebene aktivieren oder deaktivieren.
{%- endif %} Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) und [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).

{% ifversion ghec or ghes %} Wenn du über ein Unternehmenskonto verfügst, wird die Lizenzverwendung des gesamten Unternehmens auf der Seite zu Unternehmenslizenzen angezeigt. Weitere Informationen findest du unter [Anzeigen deiner {% data variables.product.prodname_GH_advanced_security %}-Nutzung](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage).
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## Informationen zu Startworkflows für {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

Weitere Informationen zu Startworkflows findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} mithilfe von Startworkflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows) und [Verwenden von Startworkflows](/actions/using-workflows/using-starter-workflows).

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Weiterführende Themen

- [Erzwingen von Richtlinien für {% data variables.product.prodname_advanced_security %} in deinem Unternehmenskonto](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)

{% endif %} {% endif %}
