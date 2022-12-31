---
title: Клонирование репозитория
intro: 'При создании репозитория на {% данных variables.location.product_location %}он существует как удаленный репозиторий. Вы можете клонировать репозиторий, чтобы создать локальную копию на компьютере и выполнить синхронизацию между двумя расположениями.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 98c470d19b9c1fcf5cbef0fdd091e86a63d08583
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093924'
---
## О клонировании репозитория

Вы можете клонировать репозиторий из {% данных variables.location.product_location %} на локальный компьютер, чтобы упростить устранение конфликтов слияния, добавление или удаление файлов и отправку больших фиксаций. При клонировании репозитория вы копируете репозиторий из {% данных variables.location.product_location %} на локальный компьютер.

Клонирование репозитория извлекает полную копию всех данных репозитория, которые {% данных variables.location.product_location %} в этот момент времени, включая все версии каждого файла и папки проекта. Вы можете отправить изменения в удаленный репозиторий на {% данных variables.location.product_location %}, или извлечь изменения других пользователей из {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Использование Git](/github/getting-started-with-github/using-git).

Вы можете клонировать свой существующий репозиторий или существующий репозиторий другого пользователя для участия в проекте.

## Клонирование репозитория

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы клонировать репозиторий локально, используйте подкоманду `repo clone`. Замените параметр `repository` именем репозитория. Например, `octo-org/octo-repo`, `monalisa/octo-repo` или `octo-repo`. Если часть `OWNER/` аргумента репозитория `OWNER/REPO` опущена, по умолчанию используется имя проверяющего пользователя.

```shell
gh repo clone REPOSITORY
```

URL-адрес GitHub можно также использовать для клонирования репозитория.

```shell
gh repo clone https://github.com/PATH-TO/REPOSITORY
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. Следуйте инструкциям в {% data variables.product.prodname_desktop %}, чтобы завершить клон.

Дополнительные сведения см. в разделе [Клонирование репозитория из {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

{% enddesktop %}

## Клонирование пустого репозитория

Пустой репозиторий не содержит файлов. Это часто происходит, если вы не инициализируете репозиторий с README при создании.

{% data reusables.repositories.navigate-to-repo %}
2. Чтобы клонировать репозиторий с помощью командной строки по протоколу HTTPS, в разделе "Быстрая настройка" щелкните {% octicon "clippy" aria-label="The clipboard icon" %}. Чтобы клонировать репозиторий с использованием ключа SSH и включить сертификат, выданный центром сертификации SSH вашей организации, щелкните **SSH**, а затем щелкните {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Кнопка URL-адреса клона пустого репозитория](/assets/images/help/repository/empty-https-url-clone-button.png)

   Кроме того, чтобы клонировать репозиторий на компьютер, щелкните {% octicon "desktop-download" aria-label="The desktop download button" %} **Настроить на рабочем столе** и следуйте подсказкам, чтобы создать клон.
   ![Кнопка клонирования на компьютер для пустого репозитория](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## Устранение ошибок клонирования

При клонировании репозитория могут возникнуть некоторые ошибки.

Если вы не можете клонировать репозиторий, убедитесь, что:

- Вы можете установить подключение по HTTP. Дополнительные сведения см. в разделе [Ошибки клонирования HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors).
- У вас есть разрешение на доступ к репозиторию, который требуется клонировать. Дополнительные сведения см. в разделе [Ошибка: репозиторий не найден](/github/creating-cloning-and-archiving-repositories/error-repository-not-found).
- Ветвь по умолчанию, которую вы хотите клонировать, по-прежнему существует. Дополнительные сведения см. в разделе [Ошибка: файл HEAD удаленного репозитория ссылается на несуществующую ветвь; не удалось выполнить извлечение](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout).

{% ifversion fpt or ghec %}

## Дополнительные материалы

- [Устранение проблем с подключением](/articles/troubleshooting-connectivity-problems){% endif %}
