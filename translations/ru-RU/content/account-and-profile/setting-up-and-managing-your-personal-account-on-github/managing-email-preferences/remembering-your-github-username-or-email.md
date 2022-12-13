---
title: Просмотр имени пользователя или адреса электронной почты GitHub
intro: 'Вы входите в {% данных variables.location.product_location %} впервые? Если да, добро пожаловать обратно! Если вы не помните имя пользователя для личной учетной записи в {% data variables.product.product_name %}, можно попробовать использовать следующие способы, которые помогут вам его вспомнить.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
ms.openlocfilehash: f6e1e70db06a02d2008ccfe235e2ff02a86500e9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094140'
---
{% mac %}

## Пользователи {% data variables.product.prodname_desktop %}

1. В меню **GitHub Desktop** выберите пункт **Настройки**.
2. В окне "Настройки" проверьте выполнение следующих условий.
    - Чтобы просмотреть имя пользователя {% data variables.product.product_name %} щелкните **Учетные записи**.
    - Чтобы просмотреть адрес электронной почты Git, щелкните **Git**. Обратите внимание, что этот адрес электронной почты не обязательно является [вашим основным адресом электронной почты {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## Пользователи {% data variables.product.prodname_desktop %}

1. В меню **Файл** выберите **Параметры**.
2. В окне "Параметры" проверьте выполнение следующих условий.
    - Чтобы просмотреть имя пользователя {% data variables.product.product_name %} щелкните **Учетные записи**.
    - Чтобы просмотреть адрес электронной почты Git, щелкните **Git**. Обратите внимание, что этот адрес электронной почты не обязательно является [вашим основным адресом электронной почты {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Поиск имени пользователя в конфигурации `user.name`

Во время настройки, возможно, вы [задали имя пользователя в Git](/github/getting-started-with-github/setting-your-username-in-git). В этом случае вы можете просмотреть значение этого параметра конфигурации:

```shell
$ git config user.name
# View the setting
YOUR_USERNAME
```

## Поиск имени пользователя в URL-адресе удаленных репозиториев

Если у вас есть локальные копии созданных или разветвленных личных репозиториев, можно проверить URL-адрес удаленного репозитория.

{% tip %}

**Совет.** Этот метод работает только в том случае, если у вас есть исходный репозиторий или собственная вилка репозитория другого пользователя. Если клонировать репозиторий другого пользователя, имя этого пользователя будет отображаться вместо вашего. Аналогичным образом, для репозиториев организации в удаленном URL-адресе будет отображаться имя организации вместо имени конкретного пользователя.

{% endtip %}

```shell
$ cd YOUR_REPOSITORY
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_REPOSITORY.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_REPOSITORY.git (push)
```

Имя пользователя следует сразу за `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## Дополнительные материалы

- "[Проверка адреса электронной почты](/articles/verifying-your-email-address)" {% endif %}
