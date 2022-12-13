---
title: Устранение неполадок с фиксациями на временной шкале
intro: You can view details for commits from your profile's timeline. If you don't see commits you expect on your profile or can't find commit details from your profile page, the commit date and the commit author date may be different.
redirect_from:
- /articles/troubleshooting-commits-on-your-timeline
- /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 78adf6a92412c89180adeb49f7a5f446f7ce7f17
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092234"
---
## <a name="expected-behavior-to-view-commit-details"></a>Ожидаемое поведение для просмотра сведений о фиксации

На временной шкале страницы своего профиля щелкните количество фиксаций рядом с конкретным репозиторием, чтобы просмотреть более подробные сведения о своих фиксациях за этот период времени, включая различия конкретных изменений, внесенных в репозиторий.

![Ссылка на фиксацию на временной шкале профиля](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Сведения о фиксации](/assets/images/help/commits/commit-details.png)

## <a name="missing-commit-details-from-commits-in-your-timeline"></a>Отсутствие сведений о фиксации из фиксации на вашей временной шкале

Если вы щелкнете ссылку на фиксацию на странице своего профиля и не увидите все ожидаемые фиксации на странице фиксаций репозитория, возможно, история фиксаций в Git была переписана, а дата создания фиксации и дата фиксации отличаются.

![Страница репозитория с сообщением "фиксации для octocat не найдены"](/assets/images/help/repository/no-commits-found.png)

## <a name="how-github-uses-the-git-author-date-and-commit-date"></a>Как GitHub использует дату создания и дату фиксации Git

В Git дата создания — это дата выполнения первой фиксации с `git commit`. Дата фиксации совпадает с датой создания, если никто не изменит дату фиксации с помощью `git commit --amend`, принудительной отправки, перемещения изменения из одной ветви в другую или других команд Git.

На странице вашего профиля дата создания используется для вычисления момента создания фиксации. Тогда как для вычисления момента выполнения фиксации в репозитории используется дата фиксации.

Чаще всего дата создания и дата фиксации совпадают, но вы можете заметить, что последовательность фиксаций нарушается, если история фиксаций изменилась. Дополнительные сведения см. в разделе [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)

## <a name="viewing-missing-commit-details-from-commits-in-your-timeline"></a>Просмотр отсутствующих сведений о фиксациях из фиксаций на временной шкале

Вы можете использовать команду `git show` ​​с флагом `--pretty=fuller`, чтобы проверить, отличаются ли дата создания фиксации и дата фиксации.

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
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

## <a name="expected-commits-missing-in-your-timeline"></a>Отсутствие ожидаемых фиксаций на временной шкале

Если вы не видите ожидаемые фиксации на временной шкале, возможно, история фиксаций в Git была переписана, а дата создания фиксации и дата фиксации отличаются. Сведения о других возможностях см. в статье [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
