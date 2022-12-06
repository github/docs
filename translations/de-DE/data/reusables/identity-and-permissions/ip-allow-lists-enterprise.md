---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184091"
---
Wenn du die Positivliste aktivierst, werden die von dir konfigurierten IP-Adressen sofort zu den Positivlisten der Organisationen in deinem Unternehmen hinzugefügt. Wenn du die Positivliste deaktivierst, werden die Adressen aus den Positivlisten der Organisationen entfernt. 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Weitere Informationen findest du unter [Verwaltung erlaubter IP-Adressen für Deine Organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization).

Du kannst festlegen, dass alle IP-Adressen, die für in deinem Unternehmen installierte {% data variables.product.prodname_github_apps %} konfiguriert sind, automatisch zu deiner Positivliste hinzugefügt werden. Die Person, die eine {% data variables.product.prodname_github_app %} erstellt, kann eine Positivliste für die Anwendung konfigurieren, die alle IP-Adressen angibt, an denen die Anwendung ausgeführt wird. Indem du deine Positivliste so konfigurierst, dass sie von dieser Positivliste erbt, vermeidest du, dass Verbindungsanforderungen von der Anwendung abgelehnt werden. Weitere Informationen findest du unter [Zulassen des Zugriffs durch GitHub Apps](#allowing-access-by-github-apps).
