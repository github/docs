---
title: Überwachen deiner aktuellen Aufträge
intro: 'Überwache, wie von {% data variables.product.prodname_dotcom %} gehostete Runner Aufträge in deiner Organisation oder deinem Unternehmen verarbeiten und alle zugehörigen Einschränkungen ermitteln.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107127'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Anzeigen aktiver Aufträge in deiner Organisation oder deinem Unternehmen

Du kannst eine Liste aller derzeit von {% data variables.product.prodname_dotcom %} gehosteten Runnern in deiner Organisation oder deinem Unternehmen ausgeführten Aufträge abrufen.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Überprüfe den Abschnitt „Aktive Aufträge“, der eine Liste aller derzeit von {% data variables.product.prodname_dotcom %} gehosteten Runnern ausgeführten Aufträge enthält.

  ![Screenshot der Liste der aktiven Aufträge](/assets/images/help/settings/actions-runner-active-jobs.png)

## Anzeigen von in deiner Organisation oder deinem Unternehmen in die Warteschlange eingereihten Aufträgen

{% data variables.product.prodname_dotcom %}-gehostete Runner ermöglichen es Ihnen, Aufträge gleichzeitig auszuführen. Die maximale Anzahl gleichzeitiger Aufträge variiert je nach Plan. Wenn du die maximale Anzahl gleichzeitiger Aufträge erreichst, werden alle neuen Aufträge in eine Warteschlange eingereiht. Weitere Informationen zur Anzahl gleichzeitiger Aufträge, die für deinen Plan verfügbar sind, findest du unter [Nutzungsbeschränkungen, Abrechnung und Verwaltung](/actions/learn-github-actions/usage-limits-billing-and-administration).

Im folgenden Verfahren wird veranschaulicht, wie du die maximale Anzahl gleichzeitiger Aufträge überprüfst, die du ausführen kannst.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Überprüfe den Abschnitt „Alle Aufträge: Verwendung“, der die Anzahl der aktiven Aufträge und die maximale Anzahl von Aufträgen enthält, die du ausführen kannst. In diesem Beispiel werden `9` Aufträge von maximal `180` Aufträgen ausgeführt.
  ![Screenshot: Maximale Anzahl Aufträge für ein Konto](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
