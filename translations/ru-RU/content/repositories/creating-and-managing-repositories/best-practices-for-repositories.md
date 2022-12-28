---
title: Рекомендации для репозиториев
shortTitle: Best practices
intro: 'Узнайте, как использовать репозитории наиболее эффективно.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163477'
---
## Создание файла сведений

Чтобы облегчить пользователям понимание и навигацию по вашей работе, рекомендуется создать файл сведений для каждого репозитория. 

{% data reusables.repositories.about-READMEs %} Дополнительные сведения см. в разделе [Сведения о библиотеках READM.](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

## Предпочтение ветвлениям вместо разветвления

Чтобы упростить совместную работу, рекомендуется, чтобы обычные участники совместной работы работали из одного репозитория, создавая запросы на вытягивание между ветвями, а не между репозиториями. Вилка лучше всего подходит для принятия вкладов от людей, которые не связаны с проектом, например участников с открытым кодом.

Для поддержания качества важных ветвей, таких как `main`, при использовании рабочего процесса ветвления можно использовать защищенные ветви с обязательными проверками состояния и проверками запросов на вытягивание. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

## Использование {% data variables.large_files.product_name_long %}

Для оптимизации производительности {% data variables.location.product_location %} ограничивает размеры файлов, разрешенных в репозиториях. Дополнительные сведения см. в разделе [Сведения о больших файлах в {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github).

Для отслеживания больших файлов в репозитории Git рекомендуется использовать {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Дополнительные сведения см. в разделе [Сведения о {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).
