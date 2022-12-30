---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087261"
---
Si vous n’avez pas accès au dépôt{% ifversion fpt %} ou à l’organisation{% elsif ghes or ghec or ghae %}, à l’organisation ou à l’entreprise{% endif %} sur {% data variables.product.product_name %} pour supprimer un exécuteur, alors que vous voulez réutiliser la machine de l’exécuteur, vous pouvez auusi supprimer le fichier `.runner` à l’intérieur du répertoire d’application de l’exécuteur auto-hébergé. Ainsi, l’exécuteur peut être inscrit sans avoir à retélécharger l’application de l’exécuteur auto-hébergée.
