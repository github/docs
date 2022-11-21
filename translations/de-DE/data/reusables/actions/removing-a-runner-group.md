---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109749"
---
Runner werden automatisch wieder der Standardgruppe hinzugefügt, wenn ihre Gruppe entfernt wird.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. Klicke in der Liste der Gruppen rechts neben der Gruppe, die du löschen möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Klicke auf **Gruppe entfernen**, um die Gruppe zu entfernen.
3. Überprüfe die Bestätigungsaufforderungen, und klicke auf **Diese Runnergruppe entfernen**. Alle Runner, die sich noch in dieser Gruppe befinden, werden automatisch in die Standardgruppe verschoben, wo sie die Zugriffsberechtigungen erben, die dieser Gruppe zugewiesen sind.

{% endif %}
