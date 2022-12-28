---
title: Ersetzen von GitHub-Diensten
intro: 'Wenn du immer noch veraltete {% data variables.product.prodname_dotcom %}-Dienste verwendest, erfahre hier, wie du deine Service Hooks zu Webhooks migrierst.'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102807'
---
Wir haben GitHub-Dienste zugunsten der Integration in Webhooks für veraltet erklärt. Dieser Leitfaden hilft dir beim Übergang von GitHub-Diensten zu Webhooks. Weitere Informationen zu dieser Ankündigung findest du in diesem [Blogbeitrag](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Alternativ zum E-Mail-Dienst kannst du jetzt E-Mail-Benachrichtigungen für Pushes zu deinem Repository verwenden. Weitere Informationen findest du unter [Informationen zu E-Mail-Benachrichtigungen für Pushes an dein Repository](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/), um zu erfahren, wie du Commit-E-Mail-Benachrichtigungen konfigurierst.

{% endnote %}

## Zeitachse für die Einstellung

- **1. Oktober 2018**: GitHub erlaubte Benutzern nicht mehr, Dienste zu installieren. Wir haben GitHub-Dienste aus der Benutzeroberfläche GitHub.com entfernt.
- **29. Januar 2019**: Alternativ zum E-Mail-Dienst kannst du jetzt E-Mail-Benachrichtigungen für Pushes zu deinem Repository verwenden. Weitere Informationen findest du unter [Informationen zu E-Mail-Benachrichtigungen für Pushes an dein Repository](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/), um zu erfahren, wie du Commit-E-Mail-Benachrichtigungen konfigurierst.
- **31. Januar 2019**: GitHub beendet die Bereitstellung der Ereignisse der installierten Dienste auf GitHub.com.

## Hintergrund der GitHub-Dienste

GitHub-Dienste (manchmal als Service Hooks bezeichnet) sind die veraltete Methode der Integration, wo GitHub einen Teil der Dienste unseres Integrators über [das `github-services`-Repository](https://github.com/github/github-services) gehostet hat. Auf GitHub ausgeführte Aktionen lösen diese Dienste aus, und du kannst diese Dienste nutzen, um Aktionen außerhalb von GitHub auszulösen.

{% ifversion ghes %}
## Suchen von Repositorys, die GitHub-Dienste verwenden
Wir bieten ein Befehlszeilenskript, das dir hilft, herauszufinden, welche Repositorys auf deiner Appliance GitHub-Dienste verwenden. Weitere Informationen findest du im [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

## GitHub-Dienste verglichen mit Webhooks

Die wichtigsten Unterschiede zwischen GitHub-Diensten und Webhooks:
- **Konfiguration**: GitHub-Dienste verfügen über dienstspezifische Konfigurationsoptionen, während Webhooks einfach durch Angabe einer URL und einer Reihe von Ereignissen konfiguriert werden.
- **Benutzerdefinierte Logik**: GitHub-Dienste können benutzerdefinierte Logik haben, um mit mehreren Aktionen als Teil der Verarbeitung eines einzelnen Ereignisses zu reagieren, während Webhooks keine benutzerdefinierte Logik haben.
- **Arten von Anforderungen**: GitHub-Dienste können HTTP- und Nicht-HTTP-Anforderungen vornehmen, während Webhooks nur HTTP-Anforderungen vornehmen können.

## Ersetzen von Diensten durch Webhooks

So ersetzt du GitHub-Dienste durch Webhooks:

1. Identifiziere die relevanten Webhook-Ereignisse, die du von [dieser Liste](/webhooks/#events) abonnieren musst.

2. Ändere die Konfiguration je nachdem, wie du derzeit GitHub-Dienste verwendest:

   - **GitHub-Apps**: Aktualisiere die Berechtigungen und abonnierten Ereignisse deiner App, um deine App so zu konfigurieren, dass die relevanten Webhook-Ereignisse empfangen werden.
   - **OAuth-Apps**: Fordere entweder den `repo_hook`- und/oder `org_hook`-Bereich an, um die relevanten Ereignisse im Auftrag von Benutzern zu verwalten.
   - **GitHub-Diensteanbieter**: Fordere von den Benutzern, dass sie manuell einen Webhook mit den relevanten Ereignisse konfigurieren, der an dich gesendet werden, oder nutze diese Gelegenheit, eine App zur Verwaltung dieser Funktionalität zu erstellen. Weitere Informationen findest du unter [Informationen zu Apps](/apps/about-apps/).

3. Verschiebe zusätzliche, außerhalb von GitHub liegende Konfiguration. Einige GitHub-Dienste erfordern zusätzliche, benutzerdefinierte Konfiguration auf der Konfigurationsseite in GitHub. Wenn dies auf deinen Dienst zutrifft, musst du diese Funktionalität in deine Anwendung verschieben oder gegebenenfalls auf GitHub- oder OAuth-Apps zurückgreifen.

## Unterstützung von {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} Release 2.17 und höher werden beendet, damit Administratoren Dienste installieren können. Administratoren können weiterhin vorhandene Dienst-Hooks ändern und Dienst-Hooks in {% data variables.product.prodname_ghe_server %} Release 2.17 bis 2.19 empfangen. Alternativ zum E-Mail-Dienst kannst du E-Mail-Benachrichtigungen für Pushes zu deinem Repository in {% data variables.product.prodname_ghe_server %} 2.17 und höher verwenden. Weitere Informationen findest du in [diesem Blogbeitrag](https://developer.github.com/changes/2019-01-29-life-after-github-services).
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %} Release 2.20 und höher werden alle Ereignisse der installierten Dienste nicht mehr bereitstellen.

Das {% data variables.product.prodname_ghe_server %} 2.17-Release wird das erste Release sein, das nicht erlaubt, GitHub-Dienste zu verwalten. Wir unterstützen vorhandene GitHub-Dienste nur, bis das {% data variables.product.prodname_ghe_server %} 2.20-Release veröffentlicht wird. Wir akzeptieren auch bis zum 1. Oktober 2019 kritische Patches für deinen auf {% data variables.product.prodname_ghe_server %} ausgeführten GitHub-Dienst.

## Migrieren mit unserer Hilfe

[Wende dich an uns](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation), wenn du Fragen hast.

Der Migrationsprozess umfasst in der Regel folgende Schritte:
  - Identifiziere, wie und wo dein Produkt GitHub-Dienste verwendet.
  - Identifiziere die entsprechenden Webhook-Ereignisse, die du konfigurieren musst, um zu einfachen Webhooks zu wechseln.
  - Implementiere das Design entweder mithilfe von [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) oder [{% data variables.product.prodname_github_apps %}. {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) werden bevorzugt. Weitere Informationen dazu, warum {% data variables.product.prodname_github_apps %} bevorzugt werden, findest du unter [Gründe zum Wechseln zu {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps).
