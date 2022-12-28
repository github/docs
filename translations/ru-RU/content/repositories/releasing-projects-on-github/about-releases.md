---
title: Сведения о выпусках
intro: 'Вы можете создать выпуск для упаковки программного обеспечения, а также заметки о выпуске и ссылки на двоичные файлы для других пользователей.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881508'
---
## Сведения о выпусках

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![Обзор выпусков](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![Обзор выпусков](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![Обзор выпусков](/assets/images/help/releases/releases-overview.png) {% endif %}

Выпуски — это развертываемые итерации программного обеспечения, которые можно упаковать и предоставить широкой аудитории для скачивания и использования.

Выпуски основаны на [тегах Git](https://git-scm.com/book/en/Git-Basics-Tagging), которые отмечают определенную точку в журнале репозитория. Дата тега может отличаться от даты выпуска, так как они могут быть созданы в разное время. Дополнительные сведения о просмотре существующих тегов см. в разделе [Просмотр выпусков и тегов репозитория](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags).

Вы можете получать уведомления о публикации новых выпусков в репозитории без получения уведомлений о других обновлениях репозитория. Дополнительные сведения см. в разделе [Просмотр подписок](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions).

Любой пользователь с доступом на чтение к репозиторию может просматривать и сравнивать выпуски, но только пользователи с разрешениями на запись в репозиторий могут управлять выпусками. Дополнительные сведения см. в разделе [Управление выпусками в репозитории](/github/administering-a-repository/managing-releases-in-a-repository).

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} Заметки о выпуске можно создавать вручную при управлении выпуском. Кроме того, вы можете автоматически создавать заметки о выпуске из шаблона по умолчанию или настраивать собственный шаблон заметок о выпуске. Дополнительные сведения см. в разделе [Автоматически созданные заметки о выпуске](/repositories/releasing-projects-on-github/automatically-generated-release-notes).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} При просмотре сведений о выпуске рядом с каждым ресурсом выпуска отображается дата его создания.
{% endif %}

{% ifversion fpt or ghec %} Пользователи с разрешениями администратора могут выбрать, следует ли включить объекты {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) в ZIP-файлы и архивы Tarball, создаваемые {% data variables.product.product_name %} для каждого выпуска. Дополнительные сведения см. в разделе [Управление объектами {% data variables.large_files.product_name_short %} в архивах репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository).

Если выпуск устраняет уязвимость безопасности, следует опубликовать рекомендации по безопасности в репозитории. {% data variables.product.prodname_dotcom %} проверяет каждую опубликованную рекомендацию по безопасности и может использовать ее для отправки {% data variables.product.prodname_dependabot_alerts %} в затронутые репозитории. Дополнительные сведения см. в разделе [Сведения о рекомендациях по безопасности на GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories).

На вкладке **Зависимые** в графе зависимостей можно увидеть, какие репозитории и пакеты зависят от кода в репозитории и, следовательно, могут попасть под влияние нового выпуска. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
{% endif %}

Вы также можете использовать API выпусков для сбора сведений, например о количестве скачиваний ресурса выпуска. Дополнительные сведения см. в разделе [Выпуски](/rest/reference/releases).

{% ifversion fpt or ghec %}
## Квоты службы хранилища и пропускной способности

 Каждый файл, включенный в выпуск, должен находиться в папке {% data variables.large_files.max_file_size %}. Общий размер выпуска и использование пропускной способности не ограничены.

{% endif %}
