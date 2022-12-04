---
title: Средства миграции исходного кода
intro: Вы можете использовать внешние средства для перемещения проектов в GitHub.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882170'
---
{% ifversion fpt or ghec %}

Мы рекомендуем использовать [GitHub Importer](/articles/about-github-importer) для импорта проектов из Subversion, Mercurial, системы управления версиями Team Foundation (TFVC) или другого репозитория Git. Вы также можете использовать эти внешние средства для преобразования вашего проекта в Git.

{% endif %}

## Импорт из Subversion

В типичной среде Subversion несколько проектов хранятся в одном корневом репозитории. В GitHub каждый из этих проектов обычно сопоставляется с отдельным репозиторием Git для личной учетной записи или организации. Мы рекомендуем импортировать каждую часть репозитория Subversion в отдельный репозиторий GitHub в следующих случаях:

* Участники совместной работы должны извлечь код из этой части проекта или зафиксировать код этой части проекта независимо от других частей.
* Вы хотите, чтобы у разных частей проекта были собственные разрешения на доступ.

Мы рекомендуем использовать следующие средства для преобразования репозиториев Subversion в Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Импорт из Mercurial

Мы рекомендуем использовать [hg-fast-export](https://github.com/frej/fast-export) для преобразования репозиториев Mercurial в Git.

## Импорт из TFVC

Мы рекомендуем [git-tfs](https://github.com/git-tfs/git-tfs) для перемещения изменений между TFVC и Git.

Дополнительные сведения о переходе из TFVC (централизованной системы управления версиями) в Git см. в разделе [Планирование миграции в Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git) на сайте документации Майкрософт.

{% tip %}

**Совет.** После успешного преобразования проекта в Git его можно [отправить в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Дополнительные материалы

- [О GitHub Importer](/articles/about-github-importer)
- [Импорт репозитория с помощью GitHub Importer](/articles/importing-a-repository-with-github-importer)
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
