---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180145"
---
Wenn du eine Zulassungsliste verwendest, kannst du außerdem festlegen, dass alle konfigurierten IP-Adressen für {% data variables.product.prodname_github_apps %}, die in deinem Unternehmen installiert sind, automatisch deiner Zulassungsliste hinzugefügt werden. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Weitere Informationen zum Erstellen einer Zulassungsliste für eine von dir erstellte {% data variables.product.prodname_github_app %} findest du unter [Verwalten zulässiger IP-Adressen für eine GitHub-App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app).

So aktivierst du das automatische Hinzufügen von IP-Adressen für {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle **Konfiguration der Liste zugelassener IP-Adressen für installierte GitHub-Apps aktivieren** aus. Wenn du {% data variables.product.prodname_emus %} mit OIDC verwendest, wählst du zuerst **GitHub** als Konfiguration für Listen zugelassener IP-Adressen und dann **Konfiguration der Liste zugelassener IP-Adressen für installierte GitHub-Apps aktivieren** aus.
  ![Kontrollkästchen zum Zulassen von IP-Adressen für GitHub-Apps](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Klicke auf **Speichern**.
