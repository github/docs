---
title: Импорт репозитория Git с помощью командной строки
intro: '{% ifversion fpt %} Если [инструмент импортирования GitHub](/articles/importing-a-repository-with-github-importer) не подходит для ваших целей, например если существующий код размещен в частной сети, рекомендуется импортировать с помощью командной строки. {% else %} Импорт проектов Git с помощью командной строки подходит в том случае, если существующий код размещен в частной сети.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: 2ecc685c4631c617e13ca9e60128c93c6f2a0b89
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094172'
---
Прежде чем приступить к работе, убедитесь, что выполнены следующие условия:

- Ваше имя пользователя {% data variables.product.product_name %}
- URL-адрес клона для внешнего репозитория, например, `https://external-host.com/user/repo.git` или `git://external-host.com/user/repo.git` (возможно, с префиксом `user@` перед доменным именем `external-host.com`)

{% tip %}

В качестве демонстрационного примера мы будем использовать следующие параметры:

- Внешняя учетная запись с именем **extuser**
- Внешний узел Git с именем `https://external-host.com`
- Личная учетная запись {% data variables.product.product_name %} с именем **ghuser**
- Репозиторий на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} с именем **repo.git**

{% endtip %}

1. [Создайте репозиторий в {% data variables.product.product_name %}](/articles/creating-a-new-repository). Вы импортируете внешний репозиторий Git в этот новый репозиторий.
2. В командной строке создайте "чистый" клон репозитория с помощью внешнего URL-адреса клонирования. При этом будет создана полная копия данных, но без рабочего каталога для редактирования файлов, а также будет выполнен чистый новый экспорт всех старых данных.
  ```shell
  $ git clone --bare https://external-host.com/EXTUSER/REPO.git
  # Makes a bare clone of the external repository in a local directory
  ```
3. Отправьте локально клонированный репозиторий в {% data variables.product.product_name %} с помощью параметра "mirror", который гарантирует, что все ссылки, такие как ветви и теги, будут скопированы в импортированный репозиторий.
  ```shell
  $ cd REPO.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/USER/REPO.git
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}
  ```
4. Удалите временный локальный репозиторий.
  ```shell
  $ cd ..
  $ rm -rf REPO.git
  ```
