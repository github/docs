---
title: Добавление ресурсов поддержки в проект
intro: 'Вы можете создать файл SUPPORT, чтобы сообщить пользователям о том, как можно получить помощь по проекту.'
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092354'
---
Чтобы направлять пользователей к определенным ресурсам поддержки, можно добавить файл SUPPORT в корневой каталог репозитория `docs` или папку `.github`. Когда кто-то создает проблему в вашем репозитории, отображается ссылка на файл SUPPORT вашего проекта.

![Рекомендации по поддержке](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Можно создать ресурсы поддержки по умолчанию для организации или личной учетной записи. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Совет.** Чтобы пользователи могли легко находить рекомендации по поддержке, можно указать ссылку на файл SUPPORT из других мест в репозитории, например в [файле README](/articles/about-readmes/).

{% endtip %}

## Добавление ресурсов поддержки в проект

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите *SUPPORT.md* (все буквы должны быть в верхнем регистре).
4. На вкладке **Изменение нового файла** добавьте сведения о том, как пользователи могут получить поддержку по проекту.
5. Чтобы просмотреть файл SUPPORT, нажмите кнопку **Предварительный просмотр**.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
