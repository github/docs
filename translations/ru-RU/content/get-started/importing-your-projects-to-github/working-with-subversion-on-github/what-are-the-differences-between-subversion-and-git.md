---
title: В чем заключаются различия между Subversion и Git?
intro: 'Репозитории Subversion (SVN) похожи на репозитории Git, но есть несколько различий, если говорить об архитектуре проектов.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135734'
---
## Структура каталогов

Каждая *ссылка*, или помеченный моментальный снимок фиксации, в проекте находится в определенных подкаталогах, таких как `trunk`, `branches` и `tags`. Например, проект SVN с двумя функциями, находящимися в разработке, может выглядеть следующим образом:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Рабочий процесс SVN выглядит следующим образом:

* Каталог `trunk` представляет последний стабильный выпуск проекта.
* Функции, над которыми ведется активная работа, находятся в подкаталогах в каталоге `branches`.
* После завершения работы над функцией каталог функции объединяется с `trunk` и удаляется.

Проекты Git также хранятся в отдельном каталоге. Однако Git скрывает сведения о своих ссылках, сохраняя их в специальном каталоге *.git*. Например, проект Git с двумя функциями, находящимися в разработке, может выглядеть следующим образом:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Рабочий процесс Git выглядит следующим образом:

* В каталоге *.git* репозитория Git хранится полный журнал всех ветвей и тегов репозитория.
* Последний стабильный выпуск находится в ветви по умолчанию.
* Функции, над которыми ведется активная работа, находятся в отдельных ветвях.
* После завершения работы над функцией каталог функции объединяется с ветвью по умолчанию и удаляется.

В отличие от SVN при использовании Git структура каталогов остается одинаковой, но содержимое файлов изменяется в зависимости от ветви.

## Включение вложенных проектов

*Подпроект* — это проект, разработка и управление которым осуществляется вне рамок вашего основного проекта. Обычно вы импортируете подпроект, чтобы добавить некоторые функции в проект без необходимости поддерживать код самостоятельно. При каждом обновлении подпроекта можно синхронизировать его с проектом, чтобы все содержимое подпроекта было актуальным.

В SVN подпроект называется *внешним SVN*. В Git он называется *подмодулем Git*. Хотя подмодули Git концептуально аналогичны подпроектам, они не обновляются автоматически; необходимо явно запросить добавление новой версии в проект.

Дополнительные сведения см. в разделе [Подмодули инструментов Git](https://git-scm.com/book/en/Git-Tools-Submodules) в документации по Git.

## Сохранение журнала

SVN настроен так, что предполагается, что журнал проекта никогда не изменяется. Git позволяет изменять предыдущие фиксации и изменения с помощью таких средств как [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[GitHub поддерживает клиентов Subversion](/articles/support-for-subversion-clients), что может приводить к непредвиденным результатам при использовании Git и SVN в одном проекте. Если вы изменили журнал фиксаций Git, эти же фиксации навсегда останутся в журнале SVN. Если вы случайно зафиксировали некоторые конфиденциальные данные, обратитесь к [статье, которая поможет удалить их из журнала Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

## Дополнительные материалы

- [Свойства Subversion, поддерживаемые GitHub](/articles/subversion-properties-supported-by-github)
- ["Ветвление и слияние" из книги _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- [Импорт исходного кода в GitHub](/articles/importing-source-code-to-github)
- [Средства миграции исходного кода](/articles/source-code-migration-tools)
