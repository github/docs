---
title: Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen
intro: 'Wenn du den Zugriff auf deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst, kannst du den Zugriff auf dein Konto mithilfe deiner Wiederherstellungscodes oder einer anderer Wiederherstellungsoption wiederherstellen.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
ms.openlocfilehash: 1a93d77d4da76a6efbc96ba5d80d0fe7e800c08a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085920'
---
{% ifversion fpt or ghec %}

{% warning %}

**Warnungen**: 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## Einen Wiederherstellungscode für die Zwei-Faktor-Authentifizierung verwenden

Verwende einen deiner Wiederherstellungscodes, um automatisch wieder Zugriff auf dein Konto zu erhalten. Vielleicht hast du deine Wiederherstellungscodes in einem Passwort-Manager oder im Download-Ordner deines Computers gespeichert. Der Standarddateiname von Wiederherstellungscodes lautet `github-recovery-codes.txt`. Weitere Informationen zu Wiederherstellungscodes findest du unter [Konfigurieren von Wiederherstellungsmethoden für die zweistufige Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).

1. Gib deinen Benutzernamen und dein Passwort ein, um die Authentifizierung durchzuführen.

    {% warning %}

    **Warnung**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. Klicke unter „Hast du Probleme?“ auf **Wiederherstellungscode verwenden oder Zurücksetzung anfordern**.

   ![Screenshot: Link zum Verwenden eines Wiederherstellungscodes](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. Klicke auf der 2FA-Seite unter „Kein Handy dabei?“ auf **Einen Wiederherstellungscode für die zweistufigen Authentifizierung eingeben**.

   ![Screenshot: Link zur Verwendung eines Wiederherstellungscodes](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Gib einen der Wiederherstellungscodes ein, und klicke dann auf **Überprüfen**.

   ![Feld zum Eingeben eines Wiederherstellungscodes und Schaltfläche „Verify“ (Verifizieren)](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Authentifizierung mit einer Fallback-Nummer

Wenn du deine primäre TOTP-App oder Telefonnummer verlierst, kannst du einen Zwei-Faktor-Authentifizierungscode eingeben, der an deine Fallback-Nummer gesendet wurde, um automatisch wieder Zugriff auf dein Konto zu erhalten.
{% endif %}

## Authentifizierung mit einem Sicherheitsschlüssel

Wenn du die Zwei-Faktor-Authentifizierung mit einem Sicherheitsschlüssel konfiguriert hast, kannst du den Sicherheitsschlüssel als sekundäre Authentifizierungsmethode verwenden, um automatisch wieder Zugriff auf dein Konto zu erhalten. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

{% ifversion fpt or ghec %}
## Authentifizierung mit einem verifizierten Gerät, einem SSH-Token oder einem persönlichen Zugriffstoken

Wenn du dein Kennwort für {% data variables.product.product_location %} kennst, aber nicht über die Anmeldeinformationen für die zweistufige Authentifizierung oder die Wiederherstellungscodes für die zweistufige Authentifizierung verfügst, kannst du ein einmalig verwendbares Kennwort an deine verifizierte E-Mail-Adresse senden lassen, um die Überprüfung zu starten und wieder Zugang zu deinem Konto zu erhalten.

{% note %}

**Hinweis**: Wenn du dich mit einem einmalig verwendbaren Kennwort authentifizierst, kann es aus Sicherheitsgründen bis zu drei Werktage dauern, bis du wieder Zugriff auf dein Konto erhältst. {% data variables.product.company_short %} überprüft während dieses Zeitraums keine zusätzlichen Anforderungen.

{% endnote %}

Du kannst die Anmeldeinformationen oder die Wiederherstellungscodes deiner Zwei-Faktor-Authentifizierung verwenden, um jederzeit während der 3-5-tägigen Wartezeit den Zugriff auf dein Konto wiederherzustellen.

1. Gib deinen Benutzernamen und dein Passwort ein, um die Authentifizierung durchzuführen.

    {% warning %}

    **Warnung**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. Klicke unter „Hast du Probleme?“ auf **Wiederherstellungscode verwenden oder Zurücksetzung anfordern**.

   ![Screenshot: Der Link, den du anklicken kannst, wenn du über kein 2FA-Gerät oder keine Wiederherstellungscodes verfügst](/assets/images/help/2fa/no-access-link.png)
1. Klicke rechts neben „Gesperrt“ auf **Konto wiederherstellen**.

   ![Screenshot: der Link zum Wiederherstellen deines Kontos](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Klicke auf **Verstanden und weiter**, um die Zurücksetzung deiner Authentifizierungseinstellungen anzufordern.

    ![Screenshot: Die Schaltfläche zum Zurücksetzen der Authentifizierungseinstellungen](/assets/images/help/2fa/reset-auth-settings.png)
1. Klicke auf **Einmalig verwendbares Kennwort senden**, um ein einmalig verwendbares Kennwort an alle berechtigten Adressen zu senden, die mit deinem Konto verknüpft sind. Das Konto kann nur über verifizierte E-Mail-Adressen wiederhergestellt werden. Wenn du Kennwortzurücksetzungen auf deine primären Adressen und bzw. oder Sicherungsadressen eingeschränkt hast, kannst du nur diese Adressen für die Kontowiederherstellung verwenden.

   ![Screenshot: Die Schaltfläche zum Senden des einmalig verwendbaren Kennworts](/assets/images/help/2fa/send-one-time-password.png)
1. Gib unter „One-time password" (Einmal gültiges Passwort) das temporäre Passwort aus dem Wiederherstellungs-E-Mail von {% data variables.product.prodname_dotcom %} ein.

   ![Screenshot: Das Feld zum Eingeben des einmalig verwendbaren Kennworts](/assets/images/help/2fa/one-time-password-field.png)
1. Klicke auf **E-Mail-Adresse überprüfen**.

   ![Screenshot: Die Schaltfläche zum Überprüfen der E-Mail-Adresse](/assets/images/help/2fa/verify-email-address.png)
1. Wähle einen alternativen Verifizierungsfaktor.
    - Wenn du dein aktuelles Gerät bereits zum Anmelden bei diesem Konto verwendet hast und es für die Überprüfung verwenden möchtest, klicke auf **Mit diesem Gerät überprüfen**.
    - Wenn du zuvor einen SSH-Schlüssel für dieses Konto eingerichtet hast und diesen zur Überprüfung verwenden möchtest, klicke auf **SSH-Schlüssel**.
    - Wenn du zuvor ein persönliches Zugriffstoken eingerichtet hast und dieses zur Überprüfung verwenden möchtest, klicke auf **Persönliches Zugriffstoken**.

   ![Screenshot: Die Schaltflächen für alternative Überprüfungsmethoden](/assets/images/help/2fa/alt-verifications.png)
1. Ein*e Mitarbeiter*in des {% data variables.contact.github_support %} überprüft deine Anfrage und sendet dir innerhalb von drei Werktagen eine E-Mail. Wenn deine Anfrage genehmigt wurde, wirst du einen Link erhalten, um deinen Konto-Wiederherstellungsprozess abzuschließen. Wenn deine Anfrage abgelehnt wurde, enthält die E-Mail eine Möglichkeit, den Support für alle weiteren Fragen zu kontaktieren.

{% endif %}
