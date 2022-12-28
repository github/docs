---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184386"
---
L’API REST {% data variables.product.product_name %} est une version gérée. Le nom de la version de l’API est basé sur la date à laquelle la version de l’API a été publiée. Par exemple, la version de l’API `{{ initialRestVersioningReleaseDate }}` a été publiée sur {{ initialRestVersioningReleaseDateLong }}.

Tous les changements cassants seront publiés dans une nouvelle version de l’API. Les changements cassants sont des modifications qui peuvent potentiellement arrêter une intégration. Les changements cassants incluent :

- suppression d’une opération entière
- suppression ou changement de nom d’un paramètre
- suppression ou changement de nom d’un champ de réponse
- ajout d’un nouveau paramètre obligatoire
- rendre obligatoire un paramètre précédemment facultatif
- modification du type d’un paramètre ou d’un champ de réponse
- suppression des valeurs d’énumération
- ajout d’une nouvelle règle de validation à un paramètre existant
- modification des exigences d’authentification ou d’autorisation

Tous les changements additifs (non cassants) seront disponibles dans toutes les versions d’API prises en charge. Les changements additifs sont des modifications qui ne doivent pas interrompre une intégration. Les changements additifs sont les suivants :

- ajout d’une opération
- ajout d’un paramètre facultatif
- ajout d’un en-tête de demande facultatif
- ajout d’un champ de réponse
- ajout d’un en-tête de réponse
- ajout de valeurs d’énumération

Lorsqu’une nouvelle version d’API REST est publiée, la version précédente de l’API est prise en charge pendant au moins 24 mois supplémentaires après la publication de la nouvelle version de l’API.
