---
title: Резервное копирование репозитория
intro: 'Можно использовать Git{% ifversion ghes or ghae %} и API-интерфейс{% endif %} {% ifversion fpt or ghec %}или сторонний инструмент {% endif %}для резервного копирования репозитория.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 544d1661ef52be263deb1e0f67378b0e004ea5a3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099052'
---
{% ifversion fpt or ghec %}

Для скачивания архива репозитория можно использовать API миграции пользователей или организаций. Дополнительные сведения см. в разделе [Миграция](/rest/reference/migrations).
{% else %}

Вы можете скачивать репозитории и создавать их резервные копии вручную:

- Чтобы скачать данные репозитория Git на локальный компьютер, необходимо клонировать репозиторий. Дополнительные сведения см. в разделе [Клонирование репозитория](/articles/cloning-a-repository).
- Также можно скачать вики-сайт репозитория. Дополнительные сведения см. в разделе [Добавление и редактирование вики-страниц](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages).

При клонировании репозитория или вики-сайта скачиваются только данные Git, например файлы проекта и журнал фиксаций. Вы можете использовать наш API для экспорта других элементов репозитория на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных %}{% variables.location.product_location %}{% endif %} на локальный компьютер:

- [Проблемы](/rest/reference/issues#list-issues-for-a-repository)
- [Запросы на включение внесенных изменений](/rest/reference/pulls#list-pull-requests)
- [Вилки](/rest/reference/repos#list-forks)
- [Комментарии](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Вехи](/rest/reference/issues#list-milestones)
- [Метки](/rest/reference/issues#list-labels-for-a-repository)
- [Наблюдатели](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Проекты](/rest/reference/projects#list-repository-projects) {% endif %}

После {% ifversion ghes or ghae %}получения локальной версии всего содержимого, которое требуется резервировать, вы можете создать ZIP-архив и {% else %}скачивания архива вы можете {% endif %}скопировать его на внешний жесткий диск и (или) отправить в облачную службу резервного копирования или хранения, такую как [Хранилище BLOB-объектов Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) или [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Сторонние средства для резервного копирования

Существует ряд средств для самостоятельной автоматизации резервного копирования репозиториев. В отличие от архивных проектов, которые содержат _все_ не исключенные отдельно общедоступные репозитории на {% data variables.product.product_name %} и позволяют любому пользователю получить доступ к данным, с помощью средств резервного копирования можно скачать _конкретные_ репозитории и создать новые ветвь или каталог. Дополнительные сведения об архивных проектах см. в разделе [Сведения об архивации содержимого и данных на {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program). Дополнительные сведения о средствах самостоятельного резервного копирования см. в [категории "Программы для резервного копирования" на {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
