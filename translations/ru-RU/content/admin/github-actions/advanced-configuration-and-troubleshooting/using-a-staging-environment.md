---
title: Использование промежуточной среды
intro: 'Узнайте об использовании {% data variables.product.prodname_actions %} с экземплярами промежуточного процесса {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 30fcd40907590a56659dd653dbe3b3f6604c84da
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093548'
---
## Сведения о промежуточных средах для {% data variables.product.product_name %}

Может быть полезно иметь промежуточную или тестовую среду для {% данных variables.location.product_location %}, чтобы можно было протестировать обновления или новые функции перед их реализацией в рабочей среде. Дополнительные сведения см. в разделе [Настройка промежуточного экземпляра](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

## Использование промежуточной среды с {% data variables.product.prodname_actions %}

Распространенным способом создания промежуточной среды является восстановление резервной копии рабочего экземпляра {% data variables.product.product_name %} на новую виртуальную машину в промежуточной среде. Если вы используете промежуточный экземпляр и планируете протестировать функциональность {% data variables.product.prodname_actions %}, следует проверить конфигурацию хранилища в промежуточной среде.

После восстановления резервной копии {% data variables.product.prodname_ghe_server %} на промежуточном экземпляре при попытке просмотреть журналы или артефакты из существующего рабочего процесса {% data variables.product.prodname_actions %}, запущенного на промежуточном экземпляре, вы увидите ошибки `404`, так как эти данные будут отсутствовать в промежуточном месте хранения. Чтобы обойти ошибки `404`, можно скопировать данные из рабочей среды для их использования в промежуточной среде.

### Настройка хранилища

При настройке промежуточной среды, включающей экземпляр {% data variables.product.product_name %} с включенным {% data variables.product.prodname_actions %}, необходимо использовать другую конфигурацию внешнего хранилища для хранилища {% data variables.product.prodname_actions %}, чем в рабочей среде.

{% warning %}

**Предупреждение!** Если вы не измените конфигурацию хранилища, промежуточный экземпляр может записывать данные в то же внешнее хранилище, которое используется для рабочей среды, что может привести к потере данных.

{% endwarning %}

Дополнительные сведения о конфигурации хранилища {% data variables.product.prodname_actions %} см. в статье [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider).

### Копирование файлов из рабочей среды в промежуточную

Чтобы точнее отразить рабочую среду, можно дополнительно скопировать файлы из рабочего места хранения для {% data variables.product.prodname_actions %} в промежуточное место хранения.

* Для учетной записи хранения Azure можно использовать [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Пример:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Для контейнеров Amazon S3 можно использовать [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Пример:

  ```shell
  aws s3 sync s3://SOURCE-BUCKET s3://DESTINATION-BUCKET
  ```
