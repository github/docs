---
title: Устранение неполадок с фиксациями на временной шкале
intro: 'Вы можете просмотреть сведения о фиксациях на временной шкале профиля. Если вы не видите фиксации, ожидаемые в профиле, или не можете найти сведения о фиксации на странице профиля, дата фиксации и дата автора фиксации могут отличаться.'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 9052a1bde12dcc2530420a8f72123f3678da4cae
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009111'
---
## Ожидаемое поведение для просмотра сведений о фиксации

На временной шкале страницы своего профиля щелкните количество фиксаций рядом с конкретным репозиторием, чтобы просмотреть более подробные сведения о своих фиксациях за этот период времени, включая различия конкретных изменений, внесенных в репозиторий.

![Ссылка на фиксацию на временной шкале профиля](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Сведения о фиксации](/assets/images/help/commits/commit-details.png)

## Отсутствие сведений о фиксации из фиксации на вашей временной шкале

Если вы щелкнете ссылку на фиксацию на странице своего профиля и не увидите все ожидаемые фиксации на странице фиксаций репозитория, возможно, история фиксаций в Git была переписана, а дата создания фиксации и дата фиксации отличаются.

![Страница репозитория с сообщением "фиксации для octocat не найдены"](/assets/images/help/repository/no-commits-found.png)

## Как GitHub использует дату создания и дату фиксации Git

В Git дата создания — это дата выполнения первой фиксации с `git commit`. Дата фиксации совпадает с датой создания, если никто не изменит дату фиксации с помощью `git commit --amend`, принудительной отправки, перемещения изменения из одной ветви в другую или других команд Git.

На странице вашего профиля дата создания используется для вычисления момента создания фиксации. Тогда как для вычисления момента выполнения фиксации в репозитории используется дата фиксации.

Чаще всего дата создания и дата фиксации совпадают, но вы можете заметить, что последовательность фиксаций нарушается, если история фиксаций изменилась. Дополнительные сведения см. в разделе [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)

## Просмотр отсутствующих сведений о фиксациях из фиксаций на временной шкале

Вы можете использовать команду `git show` ​​с флагом `--pretty=fuller`, чтобы проверить, отличаются ли дата создания фиксации и дата фиксации.

```shell
$ git show YOUR_COMMIT_SHA_NUMBER --pretty=fuller
commit YOUR_COMMIT_SHA_NUMBER
Author:     octocat USER_EMAIL
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson USER_EMAIL
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

Если дата создания и дата фиксации отличаются, вы можете вручную изменить дату фиксации в URL-адресе, чтобы просмотреть сведения о фиксации.

Пример:
- В этом URL-адресе используется дата создания `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- В этом URL-адресе используется дата фиксации `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

Открыв URL-адрес с измененной датой фиксации, вы можете просмотреть сведения о фиксации.

![Сведения о фиксации](/assets/images/help/commits/commit-details.png)

## Отсутствие ожидаемых фиксаций на временной шкале

Если вы не видите ожидаемые фиксации на временной шкале, возможно, история фиксаций в Git была переписана, а дата создания фиксации и дата фиксации отличаются. Сведения о других возможностях см. в статье [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
