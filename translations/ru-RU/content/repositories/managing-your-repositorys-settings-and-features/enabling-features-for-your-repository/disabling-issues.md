---
title: Отключение проблем
intro: 'Возможно, вы захотите отключить проблемы для репозитория, если вы не принимаете вклады и отчеты об ошибках.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a706b1431f4f43c9866fb6ef0f01f6d25d6edc46
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881831'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе «Компоненты» снимите флажок **Проблемы**.
  ![Флажок «Удалить проблемы»](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Если вы решите снова включить проблемы в будущем, будут доступны все добавленные ранее проблемы.

{% ifversion fpt or ghec %}

{% tip %}

Обратитесь к {% data variables.contact.contact_support %}, если требуется отключить проблемы из-за злоупотреблений сторонних пользователей.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
