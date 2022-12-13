---
title: Почему Git всегда запрашивает пароль?
intro: 'Если Git запрашивает имя пользователя и пароль при каждой попытке взаимодействия с GitHub, вероятно, вы используете URL-адрес клонирования HTTPS для репозитория.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: a0812060e1e9aeb7e4d36049678e77e542bd8919
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098572'
---
Использование удаленного URL-адреса HTTPS имеет некоторые преимущества по сравнению с SSH. HTTPS более прост в настройке по сравнению с SSH и обычно работает через строгие брандмауэры и прокси-серверы. Однако при каждом извлечении и при каждой отправке репозитория с HTTPS вам будет необходимо указать учетные данные {% data variables.product.product_name %}. 

{% data reusables.user-settings.password-authentication-deprecation %}

Чтобы не вводить пароль каждый раз, можно настроить [кэширование учетных данных](/github/getting-started-with-github/caching-your-github-credentials-in-git) в Git. После настройки кэширования учетных данных Git автоматически использует кэшированные данные {% variables.product.pat_generic %} при извлечении или отправке репозитория с помощью HTTPS.

## Дополнительные материалы

- [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories)
- [Сведения о проверке подлинности для {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)
- [Добавление ключа SSH в ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
