---
title: Предотвращение несанкционированного доступа
intro: 'Возможно, вы будете оповещены об инциденте безопасности на носителе, например об обнаружении [ошибки Heartbleed](http://heartbleed.com/), или компьютер может быть украден во время входа в {% данных variables.location.product_location %}. В таких случаях изменение пароля предотвращает все попытки непреднамеренного доступа к вашей учетной записи и проектам в будущем.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: a7b6b2cf0fa6dc91860a440314de9a51a503dae1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098927'
---
В {% data variables.product.product_name %} требуется пароль для выполнения конфиденциальных действий, таких как добавление новых ключей SSH, авторизация приложений или изменение участников команды.

После изменения пароля необходимо выполнить следующие действия, чтобы убедиться, что ваша учетная запись защищена:

- [Включите двухфакторную проверку подлинности](/articles/about-two-factor-authentication) в учетной записи, чтобы для доступа требовался не только пароль.
- [Просмотрите ключи SSH](/articles/reviewing-your-ssh-keys), [разверните ключи](/articles/reviewing-your-deploy-keys) и [авторизованные интеграции](/articles/reviewing-your-authorized-integrations) и отзовите несанкционированный или незнакомый доступ в параметрах SSH и приложений.
{% ifversion fpt or ghec %}
- [Проверьте все адреса электронной почты](/articles/verifying-your-email-address). Если злоумышленник добавил свой адрес электронной почты в вашу учетную запись, это может позволить ему принудительно сбросить пароль.
{% endif %}
- [Просмотрите журнал безопасности учетной записи](/github/authenticating-to-github/reviewing-your-security-log). В нем представлены обзорные сведения о различных конфигурациях, сделанных в репозиториях. Например, можно убедиться, что закрытые репозитории не были преобразованы в общедоступные или не были переданы какие-либо репозитории.
- [Просмотрите веб-перехватчики](/articles/creating-webhooks) в репозиториях. Веб-перехватчики могут позволить злоумышленнику перехватывать отправленные в репозиторий push-уведомления.
- [Убедитесь, что не были созданы новые ключи развертывания ](/guides/managing-deploy-keys/#deploy-keys). Это может привести к тому, что к проектам может быть предоставлен доступ с внешних серверов.
- Просмотрите последние фиксации, сделанные в репозиториях.
- Просмотрите список участников совместной работы для каждого репозитория.
