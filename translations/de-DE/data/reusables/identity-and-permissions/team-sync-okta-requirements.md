---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876985"
---
Bevor du die Teamsynchronisierung für Okta aktivierst, müssen du oder dein IdP-Administrator folgendes tun:

- Die Integration von SAML, SSO und SCIM für deine Organisation mit Okta aktivieren. Weitere Informationen findest du unter [Konfigurieren von SAML SSO und SCIM mithilfe von Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).
- Angeben der Mandanten-URL für Ihre Okta-Instanz.
- Generieren eines gültigen SSWS-Token mit schreibgeschützten Administratorberechtigungen für Ihre Okta-Installation als Dienstbenutzer. Weitere Informationen findest du unter [Create the token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) (Erstellen des Tokens) und [Service users](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm) (Dienstbenutzer) in der Dokumentation zu Okta.
