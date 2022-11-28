---
ms.openlocfilehash: bb81ad72418e81366595d963296493a7a3b55202
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158677"
---
   Wenn die Dev-Containerkonfiguration für das Repository Berechtigungen für den Zugriff auf andere Repositorys angibt, wird dir eine Autorisierungsseite angezeigt. Weitere Informationen dazu, wie dies in der `devcontainer.json`-Datei angegeben wird, findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).   

   Klicke auf {% octicon "chevron-down" aria-label="The expand down icon" %}, um die Details der angeforderten Berechtigungen anzuzeigen.

   ![Screenshot der Autorisierungsseite für Prebuilds](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Klicke auf **Autorisieren und fortfahren**, um diese Berechtigungen für die Erstellung von Prebuilds zu erteilen. Alternativ kannst du auf **Ohne Autorisierung fortfahren** klicken. In diesem Fall funktionieren die Codespaces, die aus den resultierenden Prebuilds erstellt wurden, jedoch möglicherweise nicht ordnungsgemäß

   {% note %}

   **Hinweis**: Benutzer, die Codespaces mit diesem Prebuild erstellen, werden ebenfalls aufgefordert, diese Berechtigungen zu erteilen.

   {% endnote %}
