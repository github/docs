---
title: Description d’OpenAPI
intro: "L’API REST {% data variables.product.product_name %}est entièrement décrite dans un document conforme à OpenAPI\_3.0."
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 84c81c856da1da67320463fba4b9b52bca88c844
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109153'
---
## À propos des descriptions d’OpenAPI

[OpenAPI](https://swagger.io/docs/specification/about/) est une spécification standard pour décrire les API REST. Les descriptions OpenAPI permettent aux humains et aux machines de découvrir les fonctionnalités d’une API sans avoir à lire d’abord la documentation ou à comprendre l’implémentation. {% data variables.product.company_short %} a rendu son API REST publiquement disponible en tant que document conforme OpenAPI 3.0.

## Obtention de la description OpenAPI {% data variables.product.company_short %}

Vous trouverez la description dans le dépôt open source [REST API OpenAPI Description](https://github.com/github/rest-api-description).

Nous fournissons la description dans deux formats. La version en bundle fonctionne dans la plupart des situations, car elle inclut des composants OpenAPI pour la réutilisation et la lisibilité. Si votre outil ne prend pas en charge les références inline aux composants, nous fournissons également une version entièrement déréférencée.

## Utilisation de la description OpenAPI {% data variables.product.company_short %}

Une description OpenAPI peut être utilisée de nombreuses façons. Par exemple, vous pouvez :

* Générer votre propre client d’API.
* Valider et tester une intégration d’API REST {% data variables.product.company_short %}.
* Explorer et interagir avec l’API REST {% data variables.product.product_name %} à l’aide d’outils tiers, comme Insomnia ou Postman.

Par exemple, {% data variables.product.company_short %} utilise la description OpenAPI REST pour générer la [documentation de référence de l’API REST](/rest) {% data variables.product.product_name %}.
