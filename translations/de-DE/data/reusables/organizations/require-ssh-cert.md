---
ms.openlocfilehash: abb4b47406958c1933c5c2bdf7d7e2e2c1091907
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184048"
---
1. Um optional von den Mitgliedern zu verlangen, SSH-Zertifikate zu verwenden, wähle **SSH-Zertifikate verlangen** aus, und klicke dann auf **Speichern**.
    ![Kontrollkästchen „SSH-Zertifikat verlangen“ und Schaltfläche „Speichern“](/assets/images/help/organizations/require-ssh-cert.png)

   {% note %}

   **Hinweis:** Wenn du SSH-Zertifikate benötigst, gilt die Anforderung nicht für autorisierte Drittanbieterintegrationen oder {% data variables.product.prodname_dotcom %}-Features wie {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} und {% data variables.product.prodname_codespaces %}{% endif %}, bei denen es sich um vertrauenswürdige Umgebungen innerhalb des {% data variables.product.prodname_dotcom %}-Ökosystems handelt.

   {% endnote %}
