---
title: Préversions d’API
intro: Vous pouvez utiliser des préversions d’API pour tester de nouvelles fonctionnalités et fournir des commentaires avant que ces fonctionnalités ne deviennent officielles.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108761'
---
Les préversions d’API vous permettent d’essayer de nouvelles API et de modifier les méthodes d’API existantes avant qu’elles ne soient intégrées à l’API officielle GitHub.

Pendant la période de préversion, nous sommes susceptibles de modifier certaines fonctionnalités en fonction des commentaires des développeurs. Le cas échéant, nous les annonçons sur le [blog des développeurs](https://developer.github.com/changes/) sans aucun préavis.

Pour accéder à une préversion d’API, vous avez besoin de fournir un [type de média](/rest/overview/media-types) personnalisé dans l’en-tête `Accept` de vos requêtes. La documentation sur les fonctionnalités de chaque préversion spécifie le type de média personnalisé à fournir.

{% ifversion ghes < 3.4 %}
## Pièces jointes au contenu

Vous pouvez maintenant fournir davantage d’informations dans GitHub concernant les URL qui dirigent vers les domaines inscrits à l’aide de l’API {% data variables.product.prodname_unfurls %}. Pour plus d’informations, consultez « [Utilisation des pièces jointes de contenu](/apps/using-content-attachments/) ».

**Types de médias personnalisés :** `corsair-preview`
**Annoncé le :** [10-12-2018](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


