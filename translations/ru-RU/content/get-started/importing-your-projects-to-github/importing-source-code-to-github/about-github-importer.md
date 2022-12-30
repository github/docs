---
title: О GitHub Importer
intro: 'Если исходный код находится в Subversion, Mercurial, системе управления версиями Team Foundation (TFVC) или другом репозитории GIT, его можно переместить в GitHub с помощью GitHub Importer.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 86fa3129982afcdf99da7879792881c522d4a6fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135797'
---
GitHub Importer — инструмент для быстрого импорта в GitHub репозиториев исходного кода, включая фиксации и журнал изменений.

![GIF-файл "Импорт репозитория"](/assets/images/help/importer/github-importer.gif)

Во время импорта в зависимости от системы управления версиями, из которой осуществляется импорт, можно выполнить проверку подлинности в удаленном репозитории, обновить атрибут автора фиксации и импортировать репозитории с большими файлами (или удалить большие файлы, если вы не хотите использовать Git Large File Storage).

| Действие импорта | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| Проверка подлинности в удаленном репозитории | **X** | **X** | **X** | **X** |
| [Обновление атрибута автора фиксации](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| Перемещение больших файлов в [Git Large File Storage](/articles/about-git-large-file-storage) | **X** | **X** | **X** | |
| Удаление больших файлов из репозитория | **X** | **X** | **X** | |

## Дополнительные материалы

- [Импорт репозитория с помощью GitHub Importer](/articles/importing-a-repository-with-github-importer)
- [Обновление атрибута автора фиксации с помощью GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer)
- [Импорт репозитория Git с помощью командной строки](/articles/importing-a-git-repository-using-the-command-line)
- [Средства миграции исходного кода](/articles/source-code-migration-tools)
