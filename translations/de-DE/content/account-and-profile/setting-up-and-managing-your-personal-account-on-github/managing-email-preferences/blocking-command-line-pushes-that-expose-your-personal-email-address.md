---
title: 'Pushes über die Befehlszeile blockieren, die Deine private E-Mail-Adresse offenlegen'
intro: 'Wenn du festgelegt hast, dass deine E-Mail-Adresse beim durchführen webbasierter Vorgänge nicht offengelegt wird, kannst du auch Pushes über die Befehlszeile blockieren, die deine private E-Mail-Adresse offenlegen könnten.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: 2c79886af1e35e0f02419610dfca1459a9693731
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145165061'
---
Wenn du Commits über die Befehlszeile pushst, wird die E-Mail-Adresse, die du [in Git festgelegt](/articles/setting-your-commit-email-address) hast, deinen Commits zugeordnet. Wenn diese Einstellung aktiviert ist, wird jedes Mal, wenn du etwas in GitHub pushst, der neueste Commit überprüft. Wenn die Ersteller-E-Mail-Adresse für diesen Commit eine private E-Mail-Adresse in deinem GitHub Konto ist, wird der Push blockiert, und du erhältst eine Warnung, dass deine private E-Mail-Adresse offengelegt wird.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Damit deine E-Mail-Adresse bei Commits, die du über die Befehlszeile pushst, privat bleibt, wähle **Pushes über die Befehlszeile blockieren, die meine E-Mail-Adresse offenlegen** aus.
![Option zum Blockieren von Befehlszeilenpushes, die E-Mail-Adressen offenlegen](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## Weiterführende Themen

- [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address)
