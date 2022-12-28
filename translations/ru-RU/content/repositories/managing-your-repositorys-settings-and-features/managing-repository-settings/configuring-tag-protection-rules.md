---
title: Настройка правил защиты тегов
shortTitle: Tag protection rules
intro: 'Вы можете настроить правила защиты тегов для репозитория, чтобы запретить участникам создавать или удалять теги.'
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063205'
---
{% note %}

**Примечание.** Правила защиты тегов в настоящее время находятся в бета-версии и могут быть изменены.

{% endnote %}

При добавлении правила защиты тегов все теги, соответствующие предоставленному шаблону, будут защищены. Только пользователи с правами на администрирование или обслуживание смогут создавать защищенные теги, и только пользователи с разрешениями администратора в репозитории смогут удалять защищенные теги. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role). Для {% data variables.product.prodname_github_apps %} требуется разрешение `Repository administration: write` на изменение защищенного тега.

{% ifversion custom-repository-roles %} Кроме того, вы можете создать пользовательские роли в репозитории, чтобы разрешить другим группам пользователей создавать или удалять теги, соответствующие правилам защиты тегов. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе "Код и автоматизация" на боковой панели щелкните **Теги {% octicon "tag" aria-label="The tag icon" %}** .
1. Нажмите кнопку **Создать правило**.
![Новое правило защиты тегов](/assets/images/help/repository/new-tag-protection-rule.png)
1. В разделе "Шаблон имени тега" введите шаблон тегов, которые требуется защитить. В этом примере введите \*, чтобы защитить все теги. 
![Настройка шаблона защиты тегов](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Нажмите кнопку **Добавить правило**.
![Добавление правила защиты тегов](/assets/images/help/repository/add-tag-protection-rule.png)
