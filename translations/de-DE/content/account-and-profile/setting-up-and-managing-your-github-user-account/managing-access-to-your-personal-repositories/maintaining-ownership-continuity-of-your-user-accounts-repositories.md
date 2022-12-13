---
title: Kontinuität der Inhaberschaft der Repositorys Deines Benutzerkontos sicherstellen
intro: You can invite someone to manage your user owned repositories if you are not able to.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090096"
---
## <a name="about-successors"></a>Über Nachfolger

Wir empfehlen, einen anderen {% data variables.product.company_short %}-Benutzer einzuladen, Dein Nachfolger zu werden, um Deine eigenen Repositories zu verwalten, wenn Du dies nicht kannst. Als Nachfolger wird dieser Benutzer folgende Berechtigungen haben:

- Deine öffentlichen Repositorys zu archivieren.
- Deine öffentlichen Repositorys zu seinem eigenen Benutzerkonto zu übertragen.
- Deine öffentlichen Repositorys zu einer Organisation zu übertragen, in denen er Repositorys erstellen kann.

Nachfolger können sich nicht an Deinem Konto anmelden.

Ein ernannter Nachfolger kann Deine öffentlichen Repositories verwalten, wenn er eine Sterbeurkunde vorgelegt hat und dann 7 Tage wartet, oder wenn er einen Nachruf vorgelegt hat und dann 21 Tage wartet. Weitere Informationen findest Du unter [{% data variables.product.company_short %}-Richtlinie für verstorbene Benutzer](/free-pro-team@latest/github/site-policy/github-deceased-user-policy).

Wende Dich an den [GitHub Support](https://support.github.com/contact?tags=docs-accounts), um Zugriff auf die Verwaltung von Repositorys als Nachfolger anzufordern.

## <a name="inviting-a-successor"></a>Einen Nachfolger einladen
Die Person, die Du als Deinen Nachfolger einlädst, muss ein {% data variables.product.company_short %}-Konto haben.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Um einen Nachfolger einzuladen, fange unter „Successor settings" (Nachfolger-Einstellungen) an, den Benutzernamen, den vollen Namen oder die E-Mail-Adresse einzugeben, und klicke dann auf den Namen, wenn er erscheint.
   ![Suchfeld "Successor invitation" (Nachfolger-Einladung)](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. Klicke auf **"Add successor"** (Nachfolger hinzufügen).
{% data reusables.user-settings.sudo-mode-popup %}
5. Der Benutzer, den du eingeladen hast, wird als "Ausstehend" aufgelistet, bis er zustimmt, dein Nachfolger zu werden.
   ![Ausstehende Einladung an Nachfolger](/assets/images/help/settings/settings-pending-successor.png)
