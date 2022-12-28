---
title: Перенос проблемы в другой репозиторий
intro: 'Чтобы переместить проблему в более подходящий репозиторий, можно перенести открытые проблемы в другие репозитории.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: b9a9cfcfb8c2026759f14c3edaee466c8a97327a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008828'
---
Для переноса открытой проблемы в другой репозиторий требуются разрешение на запись в репозиторий, в котором она возникла, и репозиторий, в который вы переносите проблему. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% note %}

**Примечание.** Проблемы можно переносить только между репозиториями, принадлежащими одной учетной записи пользователя или организации. {% ifversion fpt or ghes or ghec %}Проблему с частным репозиторием нельзя перенести в общедоступный репозиторий.{% endif %}

{% endnote %}

При переносе проблемы комментарии и исполнители сохраняются. Метки и вехи также сохраняются, если они присутствуют в целевом репозитории, причем метки сопоставляются по имени, а вехи — по имени и дате выполнения. Проблема останется на всех досках проектов, принадлежащих пользователю или всей организации, но будет удалена со всех досок проектов репозитория. Дополнительные сведения см. в разделе [О панелях проектов](/articles/about-project-boards).

Пользователи или команды, упомянутые в проблеме, получат уведомление о переносе проблемы в новый репозиторий. Исходный URL-адрес перенаправляется на URL-адрес новой проблемы. Пользователи, у которых нет разрешений на чтение в отношении нового репозитория, увидят баннер с сообщением о переносе проблемы в новый репозиторий, доступа к которому у них нет.

## Перенос открытой проблемы в другой репозиторий

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. В списке проблем выберите проблему, которую вы хотите перенести.
4. На правой боковой панели нажмите **Перенести проблему**.
![Кнопка для переноса проблемы](/assets/images/help/repository/transfer-issue.png)
5. В раскрывающемся меню **Выберите репозиторий** нажмите на репозиторий, в который нужно перенести проблему.
![Выбор репозитория](/assets/images/help/repository/choose-a-repository.png)
6. Нажмите **Перенести проблему**.
![Кнопка переноса проблемы](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Для переноса проблемы используйте подкоманду `gh issue transfer`. Замените параметр `issue` на номер или URL-адрес проблемы. Замените параметр `{% ifversion ghes %}hostname/{% endif %}owner/repo` {% ifversion ghes %}URL{% else %}имя{% endif %} репозитория, в который нужно перенести проблему, например `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer ISSUE {% ifversion ghes %}HOSTNAME/{% endif %}OWNER/REPO
```

{% endcli %}

## Дополнительные материалы

- [Сведения о проблемах](/articles/about-issues)
- [Просмотр журнала безопасности](/articles/reviewing-your-security-log)
- [Просмотр журнала аудита для организации](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)
