---
title: Скачивание артефактов рабочего процесса
intro: Архивные артефакты можно загрузить до истечения срока их действия.
permissions: 'People who are signed into {% data variables.product.product_name %} and have read access to a repository can download workflow artifacts.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: dcb2d97095f6cdd704207084b776db05a4d1bd44
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160635'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

По умолчанию {% data variables.product.product_name %} хранит журналы сборки и артефакты в течение 90 дней; вы можете настроить этот период хранения в зависимости от типа репозитория. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. В разделе **Артефакты** щелкните артефакт, который нужно скачать.
    
    ![Раскрывающееся меню скачивания артефакта](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} скачивает каждый артефакт в отдельные каталоги на основе имени артефакта. Если указан только один артефакт, он будет извлечен в текущий каталог.

Чтобы скачать все артефакты, созданные при выполнении рабочего процесса, используйте подкоманду `run download`. Замените `run-id` идентификатором выполнения, из которого требуется скачать артефакты. Если вы не укажете `run-id`, {% data variables.product.prodname_cli %} возвратит интерактивное меню, в котором можно выбрать недавний запуск.

```shell
gh run download RUN_ID
```

Чтобы скачать определенный артефакт из выполнения, используйте подкоманду `run download`. Замените `run-id` идентификатором выполнения, из которого требуется скачать артефакты. Замените `artifact-name` именем артефакта, который необходимо скачать.

```shell
gh run download RUN_ID -n ARTIFACT_NAME
```

Вы можете указать несколько артефактов.

```shell
gh run download RUN_ID> -n ARTIFACT_NAME-1 -n ARTIFACT_NAME-2
```

Чтобы скачать определенные артефакты во всех выполнениях в репозитории, используйте подкоманду `run download`.

```shell
gh run download -n ARTIFACT_NAME-1 ARTIFACT_NAME-2
```

{% endcli %}
