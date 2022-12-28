---
title: Просмотр имени пользователя или адреса электронной почты GitHub
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092269"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Пользователи {% data variables.product.prodname_desktop %}

1. В меню **GitHub Desktop** выберите пункт **Настройки**.
2. В окне "Настройки" проверьте выполнение следующих условий.
    - Чтобы просмотреть имя пользователя {% data variables.product.product_name %} щелкните **Учетные записи**.
    - Чтобы просмотреть адрес электронной почты Git, щелкните **Git**. Обратите внимание, что этот адрес электронной почты не обязательно является [вашим основным адресом электронной почты {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Пользователи {% data variables.product.prodname_desktop %}

1. В меню **Файл** выберите **Параметры**.
2. В окне "Параметры" проверьте выполнение следующих условий.
    - Чтобы просмотреть имя пользователя {% data variables.product.product_name %} щелкните **Учетные записи**.
    - Чтобы просмотреть адрес электронной почты Git, щелкните **Git**. Обратите внимание, что этот адрес электронной почты не обязательно является [вашим основным адресом электронной почты {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>Поиск имени пользователя в конфигурации `user.name`

Во время настройки, возможно, вы [задали имя пользователя в Git](/github/getting-started-with-github/setting-your-username-in-git). В этом случае вы можете просмотреть значение этого параметра конфигурации:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>Поиск имени пользователя в URL-адресе удаленных репозиториев

Если у вас есть локальные копии созданных или разветвленных личных репозиториев, можно проверить URL-адрес удаленного репозитория.

{% tip %}

**Совет.** Этот метод работает только в том случае, если у вас есть исходный репозиторий или собственная вилка репозитория другого пользователя. Если клонировать репозиторий другого пользователя, имя этого пользователя будет отображаться вместо вашего. Аналогичным образом, для репозиториев организации в удаленном URL-адресе будет отображаться имя организации вместо имени конкретного пользователя.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Имя пользователя следует сразу за `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>Дополнительные материалы

- "[Проверка адреса электронной почты](/articles/verifying-your-email-address)" {% endif %}
