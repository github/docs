---
title: Sudo-Modus
intro: 'Um den Zugriff auf dein Konto zu bestätigen, bevor du eine potenziell vertrauliche Aktion ausführst, wirst du von {% data variables.product.product_location %} zur Authentifizierung aufgefordert.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147540826'
---
## Informationen zum sudo-Modus

Um die Sicherheit deines Kontos aufrechtzuerhalten, wenn du eine potenziell vertrauliche Aktion für {% data variables.product.product_location %} ausführst, musst du dich authentifizieren, auch wenn du bereits angemeldet bist. {% data variables.product.company_short %} betrachtet beispielsweise die folgenden Aktionen als vertraulich, da jede davon einer neuen Person oder einem neuen System den Zugriff auf dein Konto ermöglichen könnte.

- Änderung einer zugeordneten E-Mail-Adresse
- Autorisierung einer Drittanbieteranwendung
- Hinzufügen eines neuen SSH-Schlüssels

Nachdem du dich authentifiziert hast, um eine vertrauliche Aktion auszuführen, wird deine Sitzung vorübergehend in den „sudo-Modus“ versetzt. Im sudo-Modus kannst du vertrauliche Aktionen ohne Authentifizierung ausführen. {% data variables.product.product_name %} wartet einige Stunden, bevor du erneut zur Authentifizierung aufgefordert wirst. Während dieser Zeit wird durch alle vertraulichen Aktionen, die du ausführst, der Zeitgeber zurückgesetzt.

{% ifversion ghes %}

{% note %}

**Hinweis**: Wenn {% data variables.product.product_location %} eine externe Authentifizierungsmethode wie CAS oder SAML SSO verwendet, erhältst du keine Aufforderung zum Wechsel in den sudo-Modus. Für weitere Informationen kontaktiere deinen Websiteadministrator.

{% endnote %}

{% endif %}

„sudo" bezieht sich auf ein Programm auf Unix-Systemen. Der Name ist die Kurzform von „**su** peruser **do**“. Weitere Informationen findest du unter [sudo](https://wikipedia.org/wiki/Sudo) in Wikipedia.

## Bestätigen des Zugriffs für den sudo-Modus

Um den Zugriff für den sudo-Modus zu bestätigen,{% ifversion totp-and-mobile-sudo-challenge %}kannst{% else %}musst{% endif %} du dich mit deinem Kennwort authentifizieren. {% ifversion totp-and-mobile-sudo-challenge %} Du kannst wahlweise eine andere Authentifizierungsmethode wie {% ifversion fpt or ghec %}einen Sicherheitsschlüssel, {% data variables.product.prodname_mobile %}oder einen 2FA-Code{% elsif ghes %}einen Sicherheitsschlüssel oder einen 2FA-Code{% endif %} verwenden. {% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Bestätigen des Zugriffs mithilfe eines Sicherheitsschlüssels](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [Bestätigen des Zugriffs mithilfe von GitHub Mobile](#confirming-access-using-github-mobile) {%- endif %}
- [Bestätigen des Zugriffs mithilfe eines 2FA-Codes](#confirming-access-using-a-2fa-code)
- [Bestätigen des Zugriffs mithilfe deines Kennworts](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Bestätigen des Zugriffs mithilfe eines Sicherheitsschlüssels

Du musst die zweistufige Authentifizierung (2FA) für dein Konto mithilfe eines Sicherheitsschlüssels konfigurieren, um den Zugriff auf dein Konto für den sudo-Modus mit dem Sicherheitsschlüssel zu bestätigen. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

Wenn du aufgefordert wirst, dich für den sudo-Modus zu authentifizieren, klicke auf **Sicherheitsschlüssel verwenden**, und befolge die Eingabeaufforderungen.

![Screenshot der Sicherheitsschlüsseloption für den sudo-Modus](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Bestätigen des Zugriffs mithilfe von {% data variables.product.prodname_mobile %}

Du musst {% data variables.product.prodname_mobile %} installieren und dich dort anmelden, um den Zugriff auf dein Konto für den sudo-Modus mithilfe der App zu bestätigen. Weitere Informationen findest du unter [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).

1. Wenn du aufgefordert wirst, dich für den sudo-Modus zu authentifizieren, klicke auf **GitHub Mobile verwenden**.

   ![Screenshot der {% data variables.product.prodname_mobile %}-Option für den sudo-Modus](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Öffne {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} zeigt Zahlen an, die du auf {% data variables.product.product_location %} eingeben musst, um die Anforderung zu genehmigen.

   ![Screenshot der Zahlen von {% data variables.product.prodname_mobile %}, die zur Genehmigung des Zugriffs auf den sudo-Modus auf {% data variables.product.product_name %} eingegeben werden müssen](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. Gib auf {% data variables.product.product_name %} die Zahlen ein, die in {% data variables.product.prodname_mobile %} angezeigt werden.

{% endif %}

### Bestätigen des Zugriffs mithilfe eines 2FA-Codes

Du musst 2FA mithilfe einer mobilen TOTP-App{% ifversion fpt or ghec %} oder von Textnachrichten{% endif %} konfigurieren, um den Zugriff auf dein Konto für den sudo-Modus mit einem 2FA-Code zu bestätigen. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

Wenn du aufgefordert wirst, dich für den sudo-Modus zu authentifizieren, gib den Authentifizierungscode aus deiner mobilen TOTP-App {% ifversion fpt or ghec %} bzw. die Textnachricht{% endif %}ein, und klicke dann auf **Überprüfen**.

![Screenshot der Aufforderung zur Eingabe des 2FA-Codes für den sudo-Modus](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Bestätigen des Zugriffs mithilfe deines Kennworts

{% endif %}

Wenn du aufgefordert wirst, dich für den sudo-Modus zu authentifizieren, gib dein Kennwort ein, und klicke dann auf **Bestätigen**.

![Screenshot der Aufforderung zur Eingabe des Kennworts für den sudo-Modus](/assets/images/help/settings/sudo_mode_prompt_password.png)
