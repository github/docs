---
title: Блокировка отправок из командной строки, которые раскрывают ваши личные адреса электронной почты
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
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092273"
---
При отправке фиксаций из командной строки адрес электронной почты, [заданный в Git](/articles/setting-your-commit-email-address), связывается с фиксациями. Если этот параметр включен, при каждой отправке в GitHub мы будем проверять самую последнюю фиксацию. Если адрес электронной почты автора этой фиксации является личным адресом электронной почты в вашей учетной записи GitHub, мы заблокируем отправку и предупредим вас о раскрытии вашего личного адреса электронной почты.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Чтобы ваш адрес электронной почты оставался личным в фиксациях, отправляемых из командной строки, выберите параметр **Блокировать отправки из командной строки, которые раскрывают мой адрес электронной почты**.
![Параметр блокировки отправок из командной строки, которые раскрывают адреса электронной почты](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>Дополнительные материалы

- [Указание адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address)
