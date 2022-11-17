---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120939"
---
Используйте `jobs.<job_id>.runs-on` для определения типа компьютера, на котором будет запускаться задание. 

{% ifversion fpt or ghec %} — конечным компьютером может быть [размещенное в {% data variables.product.prodname_dotcom %}средство выполнения](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) или [локальное средство выполнения](#choosing-self-hosted-runners). {% else %}
- Конечный компьютер может быть [локальным модулом выполнения тестов](#choosing-self-hosted-runners). {% endif %} {% ifversion target-runner-groups %} — вы можете нацеливать средства выполнения на основе назначенных им меток, их членства в группах или их сочетания. {% else %}
- Вы можете нацеливать средства выполнения на основе назначенных им меток. {% endif %}
- Можно указать `runs-on` в виде одной строки или массива строк. 
- Если указать массив строк, рабочий процесс будет выполняться в любом средстве выполнения, которое соответствует всем указанным `runs-on` значениям. 
- Если необходимо запустить рабочий процесс на нескольких компьютерах, используйте [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### Выбор средства выполнения тестов, размещенного на {% data variables.product.prodname_dotcom %}

При использовании средства выполнения тестов, размещенного на {% data variables.product.prodname_dotcom %}, каждое задание выполняется в новом экземпляре образа средства выполнения тестов, заданной параметром `runs-on`.

Доступны следующие типы средств выполнения тестов, размещенных на {% data variables.product.prodname_dotcom %}:

{% data reusables.actions.supported-github-runners %}

#### Пример: указание операционной системы

```yaml
runs-on: ubuntu-latest
```

Дополнительные сведения см. в статье [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners).
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Выбор локальных средств выполнения тестов
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Пример: использование меток для выбора средства выполнения тестов

```yaml
runs-on: [self-hosted, linux]
```

Дополнительные сведения см. в разделах «[Сведения о локальных средствах выполнения тестов](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)» и «[Использование локальных средств выполнения тестов](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)».

{% ifversion target-runner-groups %}

### Выбор средств выполнения в группе

Вы можете использовать для `runs-on` целевых групп средств выполнения, чтобы задание выполнялось в любом средстве выполнения, которое входит в эту группу. Для более детального управления можно также объединить группы средств выполнения с метками.

В группах средств выполнения могут быть только [{% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) или [локальные средства выполнения тестов](/actions/hosting-your-own-runners) .

#### Пример. Использование групп для управления тем, где выполняются задания

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Пример. Объединение групп и меток

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}