---
title: Blocage des poussées de ligne de commande qui exposent votre adresse e-mail personnelle
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
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086472"
---
Lorsque vous poussez (push) des commits à partir de la ligne de commande, l’adresse e-mail que vous avez [définie dans Git](/articles/setting-your-commit-email-address) est associée à vos commits. Si vous activez ce paramètre, chaque fois que vous effectuez une poussée dans GitHub, nous vérifierons le commit le plus récent. Si l’e-mail de l’auteur sur ce commit est un e-mail privé sur votre compte GitHub, nous bloquerons la poussée et vous avertirons concernant l’exposition de votre e-mail privé.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Pour que votre adresse e-mail reste privée dans les commits que vous poussez à partir de la ligne de commande, sélectionnez **Bloquer les poussées de ligne de commande qui exposent mon e-mail**.
![Option permettant de bloquer les poussées de ligne de commande qui exposent vos e-mails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>Pour aller plus loin

- « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) »
