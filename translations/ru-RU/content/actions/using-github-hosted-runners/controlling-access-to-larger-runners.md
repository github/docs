---
title: Управление доступом к крупным средствам выполнения
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Политики можно использовать для ограничения доступа к {% data variables.actions.hosted_runner %}, добавленным в организацию или предприятие.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189908'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о группах средств выполнения

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Группа по умолчанию для {% data variables.actions.hosted_runner %}s

Организации и предприятия с доступом к {% data variables.actions.hosted_runner %}s автоматически получат группу средств выполнения по умолчанию под названием "Стандартные крупные средства выполнения", которая включает 4 средства выполнения различных размеров. Средства выполнения в этой группе предварительно настроены и готовы к немедленному использованию. Чтобы использовать средства выполнения в этой группе, необходимо добавить метку, соответствующую выбранному средству выполнения, в файл рабочего процесса. Метки см. в таблице ниже. Дополнительные сведения об использовании меток см. в разделе [Выполнение заданий в средстве выполнения](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner) тестов.


#### Средства выполнения по умолчанию

|Описание | Метка | Image |
| ------- | ------- | ------ |
| Средство выполнения Ubuntu с 4 ядрами | `ubuntu-latest-4-cores` | Ubuntu — последняя версия |
| Средство выполнения Ubuntu на 8 ядер | `ubuntu-latest-8-cores` | Ubuntu — последняя версия |
| Средство выполнения Ubuntu на 16 ядер | `ubuntu-latest-16-cores` | Ubuntu — последняя версия |
| Средство выполнения Windows с 8 ядрами | `windows-latest-8-cores` | Windows Server — последняя версия |

Группа по умолчанию {% data variables.actions.hosted_runner %} создается на уровне сущности выставления счетов. Если ваша организация является частью корпоративной учетной записи, управление группой будет осуществляться на уровне предприятия. Если ваша организация не относится к предприятию, управление группой осуществляется на уровне организации. 

Плата за эти средства выполнения не будет взиматься, пока вы не будете использовать их в рабочих процессах. После использования этих средств выполнения выставление счетов будет работать, как обычно. Дополнительные сведения о выставлении счетов см. в разделе [Использование {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing).

Доступ по умолчанию для группы {% data variables.actions.hosted_runner %} на уровне предприятия настроен на автоматический общий доступ ко всем организациям на предприятии, но не ко всем репозиториям. Администраторам организации потребуется предоставить общий доступ к группе {% data variables.actions.hosted_runner %} по умолчанию для каждого репозитория по отдельности. Для групп {% data variables.actions.hosted_runner %} на уровне организации доступ по умолчанию устанавливается для автоматического предоставления общего доступа ко всем репозиториям. Дополнительные сведения об изменении политик доступа и о том, как просмотреть группу по умолчанию {% data variables.actions.hosted_runner %}, см. [в разделе Изменение политики доступа группы средств выполнения](#changing-the-access-policy-of-a-runner-group) тестов.

{% ifversion ghec or ghes or ghae %}

## Создание группы средств выполнения для организации

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Создание группы средств выполнения для предприятия

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Изменение политики доступа группы средств выполнения

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Изменение имени группы средств выполнения

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Перемещение средства выполнения в группу

{% data reusables.actions.moving-a-runner-to-a-group %}

## Удаление группы средств выполнения

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
