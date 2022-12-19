---
title: Настройка имени пользователя в Git
intro: 'Git использует имя пользователя для связывания фиксаций с удостоверением. Имя пользователя Git не совпадает с именем пользователя {% data variables.product.product_name %}.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
ms.openlocfilehash: d70f9bd6c58b362ca3007fbda45e6dbb0c68c69a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009118'
---
## Сведения об именах пользователей Git
Вы можете изменить имя, связанное с фиксациями Git, с помощью команды `git config`. Новое имя будет отображаться в любых будущих фиксациях, отправляемых в {% data variables.product.product_name %} из командной строки. Если вы не хотите указывать свое настоящее имя, вы можете использовать любой текст в качестве имени пользователя Git.

Изменение имени, связанного с фиксациями Git, с помощью `git config` будет влиять только на будущие фиксации и не повлияет на имя, использованное для предыдущих фиксаций.

## Настройка имени пользователя Git для *каждого* репозитория на компьютере

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "Mona Lisa"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Настройка имени пользователя Git для одного репозитория

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Измените текущий рабочий каталог на локальный репозиторий, в котором необходимо настроить имя, связанное с фиксациями Git.

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "Mona Lisa"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Дополнительные материалы

- [Указание адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address)
- [Раздел "Конфигурация Git" из книги _Pro Git_](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
