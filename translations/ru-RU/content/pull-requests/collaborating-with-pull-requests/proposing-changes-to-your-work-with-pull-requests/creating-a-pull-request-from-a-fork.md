---
title: Создание запроса на вытягивание из вилки
intro: 'Вы можете создать запрос на вытягивание, чтобы предложить изменения, внесенные в вилку вышестоящего репозитория.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883290'
---
Если ваш запрос на вытягивание сравнивает тематическую ветвь с ветвью в вышестоящем репозитории как с базовой ветвью, то ваша тематическая ветвь также называется ветвью сравнения запроса на вытягивание. Дополнительные сведения о ветвях запросов на вытягивание, включая примеры, см. в статье [Создание запроса на вытягивание](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository).

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Перейдите к исходному репозиторию, в котором вы создали вилку.
{% data reusables.repositories.new-pull-request %}
3. На странице "Сравнение" нажмите **сравнить по вилкам**.
  ![Ссылка на сравнение по вилкам](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. В раскрывающемся меню "Базовая ветвь" выберите ветвь вышестоящего репозитория, в которую вы хотите объединить изменения.
  ![Раскрывающиеся меню для выбора базовой вилки и ветви](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. В раскрывающемся меню "главная вилка" выберите вилку, а в раскрывающемся меню "сравнить с ветвью" — ветвь, в которую вы внесли изменения.
  ![Раскрывающиеся меню для выбора главной вилки и ветви для сравнения ](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Дополнительные материалы

- [Работа с вилками](/articles/working-with-forks)
- [Разрешение изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
