---
title: Просмотр результатов автоматической проверки
intro: Результаты автоматической оценки можно просмотреть в репозитории для вашего задания.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea52ff96e16caf0eb0e05addee7a93e58d57e078
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098580'
---
## Сведения об автоматической проверке

Преподаватель может настроить тесты, которые автоматически проверяют работу при отправке в репозиторий заданий на {% данных variables.location.product_location %}.

Если вы учащийся, и преподаватель настроил автоматическую проверку задания в {% data variables.product.prodname_classroom %}, вы сможете найти результаты тестирования автоматической проверки теста в репозитории назначений. Если все тесты успешно выполнены и готовы для фиксации, вы увидите зеленую галочку. Если какие-либо тесты не готовы для фиксации, вы увидите красный значок X. Подробные журналы можно просмотреть, щелкнув зеленую галочку или красный значок X.

## Просмотр результатов автоматической проверки для репозитория назначений

{% data variables.product.prodname_classroom %} использует {% data variables.product.prodname_actions %} для автоматической проверки тестов. Дополнительные сведения о просмотре журналов тестирования автоматической проверки см. в разделе [Использование журналов выполнения рабочего процесса](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures).

На вкладке **Действия** отображается полный журнал тестовых запусков.

![Вкладка "Действия" с выбранным параметром "Все рабочие процессы"](/assets/images/help/classroom/autograding-actions-tab.png)

Вы можете щелкнуть конкретный тестовый запуск, чтобы просмотреть выходные данные журнала, такие как ошибки компиляции и сбои при тестировании.

![Журналы результатов тестирования "Рабочий процесс автоматической проверки {% data variables.product.prodname_classroom %}" в {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

## Дополнительные материалы

- [Сведения о проверках статуса](/github/collaborating-with-issues-and-pull-requests/about-status-checks)
