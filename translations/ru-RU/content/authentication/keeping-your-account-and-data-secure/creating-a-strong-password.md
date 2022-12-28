---
title: Создание надежного пароля
intro: 'Защитите учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} с помощью надежного и уникального пароля с помощью диспетчера паролей.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 3f9c7d7e265d91cec2fb7b00f9b65db83cd04bc1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098233'
---
Необходимо выбрать или создать пароль для вашей учетной записи в {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} как минимум:
- содержит {% ifversion ghes %}семь{% else %}восемь{% endif %} символов при наличии цифры и строчной буквы, или
- содержит 15 любых символов.

Чтобы обеспечить безопасность учетной записи, рекомендуется следовать приведенным ниже правилам.
- Используйте диспетчер паролей, например [LastPass](https://lastpass.com/) или [1Password](https://1password.com/), для создания пароля длиной не менее 15 символов.
- Создайте уникальный пароль для {% data variables.product.product_name %}. Если в другом месте используется пароль {% данных variables.product.product_name %} и эта служба скомпрометирована, злоумышленники или другие злоумышленники могут использовать эти сведения для доступа к вашей учетной записи на {% ifversion ghae %}{% данных variables.product.product_name %}{% в остальном %}{% данных variables.location.product_location %}{%endif %}.

- Настройка двухфакторной проверки подлинности для личной учетной записи Подробнее см. в разделе "[Сведения о двухфакторной проверке подлинности](/articles/about-two-factor-authentication)".
- Никогда не раскрывайте свой пароль, даже потенциальному участнику совместной работы. Каждый участник должен использовать собственную личную учетную запись на {% data variables.product.product_name %}. Дополнительные сведения о способах совместной работы см. в разделе [Приглашение участников совместной работы в личный репозиторий](/articles/inviting-collaborators-to-a-personal-repository), [Сведения о моделях совместной разработки](/articles/about-collaborative-development-models/) или [Совместная работа с группами в организациях](/organizations/collaborating-with-groups-in-organizations/).

{% data reusables.repositories.blocked-passwords %}

Пароль можно использовать только для входа в {% data variables.product.product_name %} с помощью браузера. При проверке подлинности в {% data variables.product.product_name %} другими способами, такими как командная строка или API, следует использовать другие учетные данные. Дополнительные сведения см. в разделе [Сведения о проверке подлинности в {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github). 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Дополнительные материалы

- [Кэширование учетных данных {% data variables.product.product_name %} в GIT](/github/getting-started-with-github/caching-your-github-credentials-in-git/)
- [Обеспечение безопасности учетной записи и данных](/articles/keeping-your-account-and-data-secure/)
