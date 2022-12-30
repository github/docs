---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103467"
---
### Suche basierend auf Repository

Verwende den Qualifizierer `repo`, um Aktionen auf ein spezifisches Repository zu beschränken. Beispiel:

  * `repo:my-org/our-repo` sucht alle Ereignisse, die für das `our-repo`-Repository in der `my-org`-Organisation aufgetreten sind.
  * `repo:my-org/our-repo repo:my-org/another-repo` sucht alle Ereignisse, die für die `our-repo`- und `another-repo`-Repositorys in der `my-org`-Organisation aufgetreten sind.
  * `-repo:my-org/not-this-repo` schließt alle Ereignisse aus, die für das `not-this-repo`-Repository in der `my-org`-Organisation aufgetreten sind.

Du musst den Namen Deiner Organisation in den `repo`-Qualifizierer einschließen. Es ist nicht möglich, nur nach `repo:our-repo` zu suchen.
