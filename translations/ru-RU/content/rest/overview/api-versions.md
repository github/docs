---
title: Версии API
shortTitle: API Versions
intro: 'Необходимо указать версию REST API, которую следует использовать при выполнении запроса к REST API.'
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192868'
---
## Сведения об управлении версиями API

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## Сведения об управлении версиями {% data variables.product.prodname_ghe_server %} и управлении версиями REST API

Версии {% data variables.product.prodname_ghe_server %} отделены от версий REST API. Вы можете обновить версию {% data variables.product.prodname_ghe_server %}, но сохранить ту же версию REST API, если версия API включена в версию {% data variables.product.prodname_ghe_server %}. Аналогичным образом вы можете обновить версию REST API, не обновляя версию {% data variables.product.prodname_ghe_server %}, если выбранная вами новая версия REST API доступна для вашей версии {% data variables.product.prodname_ghe_server %}.

В заметках о выпуске {% data variables.product.prodname_ghe_server %} будет указано, что версия REST API больше не поддерживается. Дополнительные сведения см. в разделе Заметки [о выпуске](/admin/release-notes).

{% endif %}

## Указание версии API

Чтобы указать версию API, `X-GitHub-Api-Version` следует использовать заголовок . Пример:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Запросы без заголовка `X-GitHub-Api-Version` будут по умолчанию использовать версию `{{ initialRestVersioningReleaseDate }}` .

Если указать версию API, которая больше не поддерживается, появится сообщение об ошибке `400` .

## Обновление до новой версии API

Перед обновлением до новой версии REST API необходимо прочитать журнал изменений критических изменений для новой версии API, чтобы понять, какие критические изменения включены, и узнать больше о том, как выполнить обновление до конкретной версии API. Дополнительные сведения см. в разделе [Критические изменения](/rest/overview/breaking-changes).

При обновлении интеграции для указания новой версии API в `X-GitHub-Api-Version` заголовке необходимо также внести все необходимые изменения, чтобы интеграция работала с новой версией API.

После обновления интеграции проверьте ее, чтобы убедиться, что она работает с новой версией API.

## Поддерживаемые версии API

В настоящее время поддерживаются следующие версии REST API:

{% для apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

Вы также можете сделать запрос API, чтобы получить все поддерживаемые версии API. Дополнительные сведения см. в разделе [Получение всех версий API](/rest/meta#get-all-api-versions).
