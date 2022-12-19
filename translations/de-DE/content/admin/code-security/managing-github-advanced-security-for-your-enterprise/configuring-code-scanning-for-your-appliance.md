---
title: Konfigurieren des Codescannings für deine Appliance
shortTitle: Configuring code scanning
intro: 'Du kannst {% data variables.product.prodname_code_scanning %} für {% data variables.location.product_location %} aktivieren, konfigurieren und deaktivieren. {% data variables.product.prodname_code_scanning_capc %} ermöglicht Benutzer*innen das Überprüfen von Code auf Sicherheitsrisiken und Fehler.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161086'
---
{% data reusables.code-scanning.beta %}

## Informationen zum {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Du kannst das {% data variables.product.prodname_code_scanning %} so konfigurieren, dass die {% data variables.product.prodname_codeql %}-Analyse und Drittanbieteranalysen ausgeführt werden. Das {% data variables.product.prodname_code_scanning_capc %} unterstützt auch das native Ausführen von Analysen mithilfe von {% data variables.product.prodname_actions %} oder das externe Ausführen von Analysen mithilfe vorhandener CI/CD-Infrastrukturen. In der folgenden Tabelle werden alle Optionen zusammengefasst, die Benutzer*innen zur Verfügung stehen, wenn du deine {% data variables.location.product_location %} so konfigurierst, dass das {% data variables.product.prodname_code_scanning %} mithilfe von Aktionen zulässig ist.

{% data reusables.code-scanning.enabling-options %}

## Überprüfen, ob deine Lizenz {% data variables.product.prodname_GH_advanced_security %} umfasst

{% data reusables.advanced-security.check-for-ghas-license %}

## Voraussetzungen für das {% data variables.product.prodname_code_scanning %}

- Eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (weitere Informationen findest du unter [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)){% endif %}

- Aktivierung des {% data variables.product.prodname_code_scanning_capc %} in der Verwaltungskonsole (siehe [Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise))

- Eine VM oder ein Container für die Ausführung der {% data variables.product.prodname_code_scanning %}-Analyse

## Ausführen des {% data variables.product.prodname_code_scanning %} mithilfe von {% data variables.product.prodname_actions %}

### Einrichten eines selbstgehosteten Runners

{% data variables.product.prodname_ghe_server %} kann das {% data variables.product.prodname_code_scanning %} mithilfe eines {% data variables.product.prodname_actions %}-Workflows ausführen. Zunächst musst du einen oder mehrere selbstgehostete {% data variables.product.prodname_actions %}-Runner in deiner Umgebung bereitstellen. Du kannst selbstgehostete Runner auf Repository-, Organisations- oder Unternehmenskontoebene bereitstellen. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/about-self-hosted-runners).

Du musst sicherstellen, dass sich Git in der PATH-Variablen für alle selbstgehosteten Runner befindet, die du für die Ausführung von {% data variables.product.prodname_codeql %}-Aktionen verwendest.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

Wenn du {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} verwendest, um in Python geschriebenen Code in deinem Unternehmen zu analysieren, musst du sicherstellen, dass für deinen selbstgehosteten Runner Python 3 installiert ist.

{% endnote %} {% endif %}

### Bereitstellen der Aktionen für das {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %} Wenn du Aktionen für die Ausführung des {% data variables.product.prodname_code_scanning %} in {% data variables.product.prodname_ghe_server %} verwenden möchtest, müssen die Aktionen auf deiner Appliance verfügbar sein.

Die {% data variables.product.prodname_codeql %}-Aktion ist in deiner {% data variables.product.prodname_ghe_server %}-Installation enthalten. Wenn {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} und dein Runner {% data variables.product.prodname_actions %} Zugriff auf das Internet besitzen, lädt die Aktion automatisch das {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %}-Bundle herunter, das zum Durchführen der Analyse erforderlich ist. Alternativ kannst du ein Synchronisierungstool verwenden, um die neueste veröffentlichte Version des {% data variables.product.prodname_codeql %}-Analysebundles lokal verfügbar zu machen. Weitere Informationen findest du weiter unten im Abschnitt [Konfigurieren der {% data variables.product.prodname_codeql %}-Analyse auf einem Server ohne Internetzugriff](#configuring-codeql-analysis-on-a-server-without-internet-access).

Du kannst für das {% data variables.product.prodname_code_scanning %} auch Aktionen von Drittanbietern für Benutzer*innen zur Verfügung stellen, indem du {% data variables.product.prodname_github_connect %} einrichtest. Weitere Informationen findest du im Folgenden unter [Konfigurieren von {% data variables.product.prodname_github_connect %} zum Synchronisieren von {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions).

### Konfigurieren der {% data variables.product.prodname_codeql %}-Analyse auf einem Server ohne Internetzugriff
Wenn der Server, auf dem du {% data variables.product.prodname_ghe_server %} ausführst, nicht mit dem Internet verbunden ist und du Benutzer*innen das Aktivieren des {% data variables.product.prodname_codeql %}-{% data variables.product.prodname_code_scanning %} für ihre Repositorys ermöglichen möchtest, musst du mit dem {% data variables.product.prodname_codeql %}-Aktionssynchronisierungstool das {% data variables.product.prodname_codeql %}-Analysebundle von {% data variables.product.prodname_dotcom_the_website %} auf deinen Server kopieren. Das Tool und Informationen zur Verwendung findest du unter [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Wenn du das {% data variables.product.prodname_codeql %}-Aktionssynchronisierungstool eingerichtet hast, kannst du damit die neuesten Releases der {% data variables.product.prodname_codeql %}-Aktion und das zugehörige {% data variables.product.prodname_codeql %}-Analysebundle synchronisieren. Diese sind mit {% data variables.product.prodname_ghe_server %} kompatibel.

{% endif %}

### Konfigurieren von {% data variables.product.prodname_github_connect %} zum Synchronisieren von {% data variables.product.prodname_actions %}
1. Wenn du bei Bedarf Aktionsworkflows von {% data variables.product.prodname_dotcom_the_website %} herunterladen möchtest, musst du {% data variables.product.prodname_github_connect %} aktivieren. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect).
2. Du musst auch {% data variables.product.prodname_actions %} für {% data variables.location.product_location %} aktivieren. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server).
3. Der nächste Schritt besteht darin, den Zugriff auf Aktionen auf {% data variables.product.prodname_dotcom_the_website %} mithilfe von {% data variables.product.prodname_github_connect %} zu konfigurieren. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect).
4. Füge deinem Repository-, Organisations- oder Unternehmenskonto einen selbstgehosteten Runner hinzu. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners).

## Ausführen des Codescannings mithilfe der {% data variables.product.prodname_codeql_cli %}

Wenn du {% data variables.product.prodname_actions %} nicht verwenden möchtest, solltest du das {% data variables.product.prodname_code_scanning %} mithilfe der {% data variables.product.prodname_codeql_cli %} ausführen. 

Die {% data variables.product.prodname_codeql_cli %} ist ein Befehlszeilentool, das du zum Analysieren von Codebasen auf jedem beliebigen Computer (einschließlich eines CI/CD-Drittanbietersystems) verwenden kannst. Weitere Informationen findest du unter [Installieren der CodeQL-CLI in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

{% ifversion codeql-runner-supported %}

## Ausführen des {% data variables.product.prodname_code_scanning %} mithilfe des {% data variables.code-scanning.codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Wenn du {% data variables.product.prodname_actions %} nicht verwenden möchtest, kannst du das {% data variables.product.prodname_code_scanning %} mithilfe des {% data variables.code-scanning.codeql_runner %} ausführen. 

Der {% data variables.code-scanning.codeql_runner %} ist ein Befehlszeilentool, das du deinem CI/CD-Drittanbietersystem hinzufügen kannst. Das Tool führt die {% data variables.product.prodname_codeql %}-Analyse beim Auschecken eines {% data variables.product.prodname_dotcom %}-Repositorys aus. Weitere Informationen findest du unter [Ausführen des {% data variables.product.prodname_code_scanning %} in deinem CI-System](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system).

{% endif %}
