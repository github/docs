---
title: Changements cassants
shortTitle: Breaking changes
intro: Découvrez les changements cassants introduits dans chaque version d’API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 674345b82c5da9b0804fe4a0f62450ff4fbbc3e9
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184408'
---
## À propos des changements cassants dans l’API REST

{% data reusables.rest-api.about-api-versions %}

Pour plus d’informations sur les versions de l’API, consultez « [Versions de l’API](/rest/overview/api-versions) ».

## Mise à niveau vers une nouvelle version de l’API

Avant de procéder à la mise à niveau vers une nouvelle version d’API REST, vous devez lire la section de cette page qui correspond à la nouvelle version de l’API pour comprendre les changements cassants inclus et pour en savoir plus sur la mise à niveau vers cette version de l’API.

Lorsque vous mettez à jour votre intégration pour spécifier la nouvelle version de l’API dans l’en-tête `X-GitHub-Api-Version` , vous devez également apporter les modifications nécessaires pour que votre intégration fonctionne avec la nouvelle version de l’API.

Une fois votre intégration mise à jour, testez votre intégration pour vérifier qu’elle fonctionne avec la nouvelle version de l’API.

## Changements cassants pour {{ initialRestVersioningReleaseDate }}

Version `{{ initialRestVersioningReleaseDate }}` est la première version d’API REST {% data variables.product.product_name %} après l’introduction du contrôle de version basé sur la date. Cette version n’inclut aucun changement cassant.
