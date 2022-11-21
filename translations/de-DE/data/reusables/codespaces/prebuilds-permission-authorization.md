---
ms.openlocfilehash: c32a9f6f6a799c3653cb17fe89721090fc01d155
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109193"
---
   Wenn die Dev-Containerkonfiguration für das Repository Berechtigungen für den Zugriff auf andere Repositorys angibt, wird dir eine Autorisierungsseite angezeigt. Weitere Informationen dazu, wie dies in der `devcontainer.json`-Datei angegeben wird, findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).   

   Klicke auf {% octicon "chevron-down" aria-label="The expand down icon" %}, um die Details der angeforderten Berechtigungen anzuzeigen.

   ![Screenshot der Autorisierungsseite für Prebuilds](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Klicke auf **Authorize and continue** (Autorisieren und fortfahren) um diese Berechtigungen für die Erstellung des Prebuilds zu erteilen. Alternativ kannst du auf **Continue without authorizing** (Ohne Autorisierung fortfahren) klicken. In diesem Fall funktionieren die Codespaces, die aus dem resultierenden Prebuild erstellt wurden, jedoch möglicherweise nicht ordnungsgemäß

   {% note %}

   **Hinweis**: Benutzer, die Codespaces mit diesem Prebuild erstellen, werden ebenfalls aufgefordert, diese Berechtigungen zu erteilen.

   {% endnote %}
