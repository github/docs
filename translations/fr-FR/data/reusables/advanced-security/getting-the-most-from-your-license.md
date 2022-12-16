---
ms.openlocfilehash: 255dcb0346e9413e32492c34a7724df6284cd325
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455740"
---
Lorsque vous déterminez quels référentiels et organisations privilégier pour {% data variables.product.prodname_GH_advanced_security %}, vous devez les examiner et les identifier :

- Codebases les plus déterminants pour le succès de votre entreprise. Il s’agit des projets pour lesquels l’introduction de code vulnérable, de secrets codés en dur ou de dépendances non sécurisées aurait le plus d’impact sur votre entreprise.
- Codebases présentant la fréquence de validation la plus élevée. Il s’agit des projets les plus activement développés, d’où le risque plus élevé de problèmes liés à la sécurité.

Lors de l’activation de {% data variables.product.prodname_GH_advanced_security %} pour ces organisations ou référentiels, évaluez les autres codebases que vous pourriez ajouter sans facturation pour les validateurs uniques. Enfin, évaluez les autres codebases importants et occupés. {% ifversion fpt or ghes or ghec %}Si vous souhaitez augmenter le nombre de sièges de votre licence, contactez {% data variables.contact.contact_enterprise_sales %}.{% endif %}
