---
title: Versions des API
shortTitle: API Versions
intro: Vous devez spécifier la version d’API REST à utiliser chaque fois que vous effectuez une demande à l’API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192864'
---
## À propos du contrôle de version de l’API

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## À propos du contrôle de version {% data variables.product.prodname_ghe_server %} et du contrôle de version d’API REST

Les versions {% data variables.product.prodname_ghe_server %} sont dissociées des versions d’API REST. Vous pouvez mettre à niveau votre version {% data variables.product.prodname_ghe_server %}, mais conserver la même version d’API REST, tant que la version de l’API est incluse dans la version {% data variables.product.prodname_ghe_server %}. De même, vous pouvez mettre à niveau votre version d’API REST sans mettre à jour votre version {% data variables.product.prodname_ghe_server %}, tant que la nouvelle version d’API REST que vous choisissez est disponible pour votre version {% data variables.product.prodname_ghe_server %}.

Les notes de publication {% data variables.product.prodname_ghe_server %} indiquent quand une version d’API REST n’est plus prise en charge. Pour plus d’informations, consultez « [Notes de publication](/admin/release-notes) ».

{% endif %}

## Spécification d’une version d’API

Vous devez utiliser l’en-tête `X-GitHub-Api-Version` pour spécifier une version d’API. Par exemple :

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Les requêtes sans l’en-tête `X-GitHub-Api-Version` utilisent par défaut la version `{{ initialRestVersioningReleaseDate }}`.

Si vous spécifiez une version d’API qui n’est plus prise en charge, vous recevrez une erreur `400`.

## Mise à niveau vers une nouvelle version de l’API

Avant de procéder à la mise à niveau vers une nouvelle version d’API REST, vous devez lire le journal de modifications des changements cassants qui correspond à la nouvelle version de l’API pour comprendre les changements cassants inclus et pour en savoir plus sur la mise à niveau vers cette version de l’API. Pour plus d'informations, consultez « [Changements cassants](/rest/overview/breaking-changes) ».

Lorsque vous mettez à jour votre intégration pour spécifier la nouvelle version de l’API dans l’en-tête `X-GitHub-Api-Version` , vous devez également apporter les modifications nécessaires pour que votre intégration fonctionne avec la nouvelle version de l’API.

Une fois votre intégration mise à jour, testez votre intégration pour vérifier qu’elle fonctionne avec la nouvelle version de l’API.

## Versions d'API prises en charge

Les versions d’API REST suivantes sont actuellement prises en charge :

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

Vous pouvez également faire en sorte qu’une demande d’API obtienne toutes les versions d’API prises en charge. Pour plus d’informations, consultez « [Obtenir toutes les versions d’API](/rest/meta#get-all-api-versions) ».
