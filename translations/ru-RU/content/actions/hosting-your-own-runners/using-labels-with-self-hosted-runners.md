---
title: Использование меток с самостоятельно размещенными средствами выполнения
intro: Метки можно использовать для упорядочения локальных средств выполнения тестов с учетом их характеристик.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163255'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Сведения об использовании меток для маршрутизации заданий в определенные типы локальных средств выполнения см. в разделе "[Использование локальных средств выполнения в рабочем процессе](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)". {% ifversion target-runner-groups %} Вы также можете маршрутизировать задания средствам выполнения в определенной группе. Дополнительные сведения см. в разделе [Нацеливание средств выполнения в группе](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group). {% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Создание пользовательской метки

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. В разделе "Метки" щелкните {% octicon "gear" aria-label="The Gear icon" %}.
 1. В поле "Найти или создать метку" введите имя новой метки и нажмите кнопку **Создать метку**.
 Пользовательская метка будет создана и назначена локальному средству выполнения. Пользовательские метки можно удалять из локальных средств выполнения, однако в настоящее время их нельзя удалять вручную. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. В поле "Фильтр меток" введите имя новой метки и нажмите кнопку **Создать метку**.
    ![Добавление метки средства выполнения](/assets/images/help/settings/actions-add-runner-label.png)
    
Пользовательская метка будет создана и назначена локальному средству выполнения. Пользовательские метки можно удалять из локальных средств выполнения, однако в настоящее время их нельзя удалять вручную. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Назначение метки локальному средству выполнения

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Чтобы назначить метку локальному средству выполнения, щелкните метку в поле "Найти или создать метку". {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Щелкните метку, чтобы назначить ее локальному средству выполнения. {% endif %}

## Удаление пользовательской метки из локального средства выполнения

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. В поле "Найти или создать метку" назначенные метки помечаются значком {% octicon "check" aria-label="The Check icon" %}. Щелкните отмеченную метку, чтобы отменить ее назначение локальному средству выполнения. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Щелкните назначенную метку, чтобы удалить ее из локального средства выполнения. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Назначение меток программными средствами

Вы можете программно назначить метки локальному средству выполнения после создания средства выполнения или во время его первоначальной настройки.

* Чтобы программно назначить метки существующему локальному средству выполнения тестов, необходимо использовать REST API. Дополнительные сведения см. в разделе REST API "[Локальные средства выполнения тестов](/rest/actions/self-hosted-runners)".
* Чтобы программно назначить метки локальному средству выполнения во время начальной настройки средства выполнения, можно передать имена меток в `config` скрипт с помощью `labels` параметра .

  {% note %}
  
  **Примечание:** Скрипт нельзя использовать для `config` назначения меток существующему локальному средству выполнения тестов.
  
  {% endnote %}

  Например, эта команда назначает метку с именем `gpu` при настройке нового локального средства выполнения:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  Метка создается, если она еще не существует. Таким же образом можно назначать метки по умолчанию средствам выполнения, таким как `x64` или `linux`. Если метки по умолчанию назначаются с помощью скрипта конфигурации, {% data variables.product.prodname_actions %} принимает их как заданные и не проверяет, использует ли средство выполнения эту операционную систему или архитектуру.

  Чтобы назначить несколько меток, разделите их запятыми. Пример:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Примечание.** При замене существующего средства выполнения необходимо переназначить все пользовательские метки.

  {% endnote %}
