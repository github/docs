---
title: Сведения об использовании хранилища и пропускной способности
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Storage & bandwidth
ms.openlocfilehash: 8a6dd01c62b5b1c69afe29536e3d4ba206e988e7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883030'
---
{% data variables.large_files.product_name_short %} доступен для каждого репозитория на {% data variables.product.product_name %}, независимо от того, есть ли у вашей учетной записи или организации платная подписка.

## Отслеживание использования хранилища и пропускной способности

При фиксации и отправке изменений в файл, отслеживаемый с помощью {% data variables.large_files.product_name_short %}, отправляется новая версия всего файла, а общий размер файла учитывается в ограничении хранилища владельца репозитория. При скачивании файла, отслеживаемого с помощью {% data variables.large_files.product_name_short %}, общий размер файла учитывается в ограничении пропускной способности владельца репозитория. Отправки {% data variables.large_files.product_name_short %} не учитываются в ограничении пропускной способности.

Пример:
- Если вы отправляете файл размером 500 МБ в {% data variables.large_files.product_name_short %}, вы используете 500 МБ выделенного хранилища, но не используете пропускную способность. Если вы измените 1 байт и снова отправите файл, вы используете еще 500 МБ хранилища без использования пропускной способности. Итого: 1 ГБ хранилища и 0 пропускной способности.
- При скачивании файла размером 500 МБ, отслеживаемого с помощью LFS, вы используете 500 МБ выделенной пропускной способности владельца репозитория. Если участник отправит изменения в файл и вы извлечете новую версию в локальный репозиторий, вы используете еще 500 МБ пропускной способности, то есть всего 1 ГБ пропускной способности.
- Если {% data variables.product.prodname_actions %} скачивает файл на 500 МБ, отслеживаемый с помощью LFS, он использует 500 МБ выделенной пропускной способности владельца репозитория.

{% ifversion fpt or ghec %} Если объекты {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) включены в архивы исходного кода репозитория, загрузка этих архивов будет учитываться в использовании пропускной способности репозитория. Дополнительные сведения см. в разделе [Управление объектами {% data variables.large_files.product_name_short %} в архивах репозитория](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository).
{% endif %}

{% tip %}

**Совет**.
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

## Квота хранилища

Если вы используете более {% data variables.large_files.initial_storage_quota %} хранилища без приобретения пакета данных, вы по-прежнему можете клонировать репозитории с большими ресурсами, но будете извлекать только файлы указателя и не сможете отправлять резервные копии новых файлов. Дополнительные сведения о файлах указателя см. в разделе [Сведения о {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format).

## Квота пропускной способности

Если вы используете более {% data variables.large_files.initial_bandwidth_quota %} пропускной способности в месяц без приобретения пакета данных, поддержка {% data variables.large_files.product_name_short %} будет отключена в вашей учетной записи до следующего месяца.

## Дополнительные материалы

- [Просмотр сведений об использовании {% data variables.large_files.product_name_long %}](/articles/viewing-your-git-large-file-storage-usage)
- [Управление выставлением счетов для {% data variables.large_files.product_name_long %}](/articles/managing-billing-for-git-large-file-storage)
