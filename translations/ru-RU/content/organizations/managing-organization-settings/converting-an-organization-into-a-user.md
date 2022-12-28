---
title: Преобразование организации в пользователя
intro: 'Преобразовать организацию в личную учетную запись нельзя, но вы можете создать личную учетную запись и перенести в нее репозитории организации.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149806'
---
{% ifversion fpt or ghec %}

{% note %}

**Примечание.** После удаления учетной записи имя пользователя на момент удаления становится недоступным для повторного использования в течение 90 дней. Чтобы сразу же повторно использовать имя пользователя организации, необходимо изменить имя пользователя перед удалением организации.

 {% endnote %}

1. [Зарегистрируйтесь](/articles/signing-up-for-a-new-github-account), чтобы создать учетную запись в GitHub.
2. [Измените роль пользователя на "Владелец"](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} в новую личную учетную запись.
4. [Перенесите каждый репозиторий организации](/articles/how-to-transfer-a-repository) в новую личную учетную запись.
5. [Переименуйте организацию](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username), чтобы сделать текущее имя пользователя доступным.
6. [Переименуйте пользователя](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username), присвоив ему имя организации.
7. [Удаление организации](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Зарегистрируйтесь, чтобы создать личную учетную запись GitHub Enterprise.
2. [Измените роль пользователя на "Владелец"](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} в новую личную учетную запись.
4. [Перенесите каждый репозиторий организации](/articles/how-to-transfer-a-repository) в новую личную учетную запись.
5. [Удаление организации](/articles/deleting-an-organization-account).
6. [Переименуйте пользователя](/articles/changing-your-github-username), присвоив ему имя организации.

{% endif %}
