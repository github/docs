---
title: Создание репозитория шаблонов
intro: 'Вы можете сделать существующий репозиторий шаблоном, чтобы и вы, и другие пользователи могли создавать новые репозитории с той же структурой каталогов, ветвями и файлами.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136916'
---
{% note %}

**Примечание.** Репозиторий шаблонов не может содержать файлы, хранящиеся с помощью {% data variables.large_files.product_name_short %}.

{% endnote %}

Чтобы создать репозиторий шаблонов, необходимо создать репозиторий, а затем сделать его шаблоном. Дополнительные сведения о создании репозитория см. в разделе [Создание репозитория](/articles/creating-a-new-repository).

После создания шаблона репозитория любой пользователь с доступом к репозиторию может создать новый репозиторий с той же структурой каталогов и файлами, что и ветвь по умолчанию. Они также могут включить все остальные ветви в репозиторий. Ветви, созданные на основе шаблона, имеют несвязанные журналы, поэтому нельзя создавать запросы на вытягивание или объединять их между ветвями. Дополнительные сведения см. в разделе [Создание репозитория из шаблона](/articles/creating-a-repository-from-a-template).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Выберите **Репозиторий шаблонов**.
  ![Флажок для создания шаблона из репозитория](/assets/images/help/repository/template-repository-checkbox.png)
