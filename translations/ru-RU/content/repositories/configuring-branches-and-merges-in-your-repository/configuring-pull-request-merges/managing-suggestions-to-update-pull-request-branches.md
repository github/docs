---
title: Управление предложениями по обновлению ветвей запросов на вытягивание
intro: 'Вы можете предоставить пользователям возможность всегда обновлять ветвь запроса на вытягивание, если она не актуализирована с базовой ветвью.'
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578613'
---
## Сведения о предложениях по обновлению ветви запроса на вытягивание

Если вы включите параметр, чтобы всегда предлагать обновление ветвей запросов на вытягивание в репозитории, пользователи с разрешениями на запись всегда смогут обновлять главную ветвь запроса на вытягивание на странице запроса на вытягивание, если она не соответствует базовой ветви. Если этот параметр не включен, возможность обновления доступна только в том случае, если базовая ветвь требует синхронизации ветвей перед слиянием, а ветвь не синхронизирована. Дополнительные сведения см. в разделе [Синхронизация запроса на вытягивание с базовой ветвью](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch).

{% data reusables.enterprise.3-5-missing-feature %}

## Управление предложениями по обновлению ветвей запросов на вытягивание

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Запросы на вытягивание" установите или снимите флажок **Всегда предлагать обновление ветвей запросов на вытягивание**.
  ![Флажок для включения или отключения параметра "Всегда предлагать обновление ветви"](/assets/images/help/repository/always-suggest-updating-branches.png)
