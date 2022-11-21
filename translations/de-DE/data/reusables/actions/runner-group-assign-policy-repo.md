---
ms.openlocfilehash: ef09954dd829eae3eb7cfaefbefab65b9a2fffc5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089252"
---
1. Weise eine Richtlinie für den Repositoryzugriff zu.

    Du kannst eine Runnergruppe so konfigurieren, dass nur eine bestimmte Liste von Repositorys oder alle Repositorys in der Organisation darauf zugreifen können.{% ifversion ghec or ghes %} Standardmäßig können nur private Repositorys auf Runner in einer Runnergruppe zugreifen. Diese Einstellung kannst du bei Bedarf überschreiben. Diese Einstellung kann nicht überschrieben werden, wenn du die von einem Unternehmen freigegebene Runnergruppe einer Organisation konfigurierst.{% endif %}
