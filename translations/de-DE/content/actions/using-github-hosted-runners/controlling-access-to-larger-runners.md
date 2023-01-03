---
title: Steuern des Zugriffs auf größere Runner
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Du kannst mithilfe von Richtlinien den Zugriff auf {% data variables.actions.hosted_runner %} beschränken, die einer Organisation oder einem Unternehmen hinzugefügt wurden.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189905'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Runnergruppen

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Standardgruppe für {% data variables.actions.hosted_runner %}

Organisationen und Unternehmen mit Zugriff auf {% data variables.actions.hosted_runner %} erhalten automatisch eine Standardrunnergruppe namens „Default Larger Runners“, die aus vier unterschiedlich großen Runnern besteht. Die Runner in dieser Gruppe sind vorkonfiguriert und sofort einsatzbereit. Um die Runner in dieser Gruppe verwenden zu können, musst du der Workflowdatei die Bezeichnung hinzufügen, die dem Runner deiner Wahl entspricht. Die Bezeichnungen findest du in der folgenden Tabelle. Weitere Informationen zur Verwendung von Bezeichnungen findest du unter [Ausführen von Aufträgen auf Runnern](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner).


#### Standardrunner

|Beschreibung | Bezeichnung | Image |
| ------- | ------- | ------ |
| Ubuntu-Runner mit vier Kernen | `ubuntu-latest-4-cores` | Ubuntu (neueste Version) |
| Ubuntu-Runner mit acht Kernen | `ubuntu-latest-8-cores` | Ubuntu (neueste Version) |
| Ubuntu-Runner mit 16 Kernen | `ubuntu-latest-16-cores` | Ubuntu (neueste Version) |
| Windows-Runner mit acht Kernen | `windows-latest-8-cores` | Windows Server (neueste Version) |

Die Standard-{% data variables.actions.hosted_runner %}gruppe wird auf Ebene der Abrechnungsentität erstellt. Wenn deine Organisation Teil eines Unternehmenskontos ist, wird die Gruppe auf Unternehmensebene verwaltet. Wenn deine Organisation keinem Unternehmen angehört, wird die Gruppe auf Organisationsebene verwaltet. 

Diese Runner werden erst in Rechnung gestellt, wenn du sie in deinen Workflows verwendest. Sobald diese Runner verwendet werden, erfolgt die Abrechnung wie gewohnt. Weitere Informationen zur Abrechnung findest du unter [Verwenden von {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing).

Der Standardzugriff für eine {% data variables.actions.hosted_runner %}gruppe auf Unternehmensebene ist so festgelegt, dass Inhalt automatisch für alle Organisationen im Unternehmen freigegeben wird, aber nicht für alle Repositorys. Organisationsadministrator*innen müssen die Standard-{% data variables.actions.hosted_runner %}gruppe für jedes Repository separat freigeben. Für {% data variables.actions.hosted_runner %}gruppen auf Organisationsebene ist der Standardzugriff so festgelegt, dass die Gruppe automatisch für alle Repositorys freigegeben wird. Weitere Informationen zum Ändern von Zugriffsrichtlinien und zum Anzeigen der Standard-{% data variables.actions.hosted_runner %}gruppe findest du unter [Ändern der Zugriffsrichtlinie einer Runnergruppe](#changing-the-access-policy-of-a-runner-group).

{% ifversion ghec or ghes or ghae %}

## Erstellen einer Runnergruppe für eine Organisation

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Erstellen einer Runnergruppe für ein Unternehmen

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Ändern der Zugriffsrichtlinie einer Runnergruppe

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Ändern des Namens einer Runnergruppe

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Verschieben eines Runners in eine Gruppe

{% data reusables.actions.moving-a-runner-to-a-group %}

## Entfernen einer Runnergruppe

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
