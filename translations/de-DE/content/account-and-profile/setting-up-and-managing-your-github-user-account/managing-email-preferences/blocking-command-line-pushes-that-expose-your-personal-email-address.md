---
title: Pushes über die Befehlszeile blockieren, die Deine private E-Mail-Adresse offenlegen
intro: If you've chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.
redirect_from:
- /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: e085c19339cc530537626d9bf987125aebfd3427
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090084"
---
Wenn du Commits über die Befehlszeile pushst, wird die E-Mail-Adresse, die du [in Git festgelegt](/articles/setting-your-commit-email-address) hast, deinen Commits zugeordnet. Wenn diese Einstellung aktiviert ist, wird jedes Mal, wenn du etwas in GitHub pushst, der neueste Commit überprüft. Wenn die Ersteller-E-Mail-Adresse für diesen Commit eine private E-Mail-Adresse in deinem GitHub Konto ist, wird der Push blockiert, und du erhältst eine Warnung, dass deine private E-Mail-Adresse offengelegt wird.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Damit deine E-Mail-Adresse bei Commits, die du über die Befehlszeile pushst, privat bleibt, wähle **Pushes über die Befehlszeile blockieren, die meine E-Mail-Adresse offenlegen** aus.
![Option zum Blockieren von Befehlszeilenpushes, die E-Mail-Adressen offenlegen](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>Weiterführende Themen

- [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address)
