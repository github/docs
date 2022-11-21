---
title: Analyse du code
intro: 'L’API {% data variables.product.prodname_code_scanning %} vous permet de récupérer et de mettre à jour les alertes {% data variables.product.prodname_code_scanning %} à partir d’un référentiel.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061393'
---
{% data reusables.code-scanning.beta %}

## À propos de l’API d’analyse du code

L’API {% data variables.product.prodname_code_scanning %} vous permet de récupérer et de mettre à jour les alertes {% data variables.product.prodname_code_scanning %} à partir d’un référentiel. Vous pouvez utiliser les points de terminaison pour créer des rapports automatisés pour les alertes {% data variables.product.prodname_code_scanning %} dans une organisation ou charger les résultats d’analyse générés à l’aide d’outils {% data variables.product.prodname_code_scanning %} hors connexion. Pour plus d’informations, consultez « [Recherche de vulnérabilités et d’erreurs de sécurité dans votre code](/github/finding-security-vulnerabilities-and-errors-in-your-code) ».

### Type de média personnalisé pour {% data variables.product.prodname_code_scanning %}

Il y a un type de média personnalisé pris en charge pour l’API REST {% data variables.product.prodname_code_scanning %}. 

    application/sarif+json

Vous pouvez l’utiliser avec les demandes `GET` envoyées au point de terminaison `/analyses/{analysis_id}`. Pour plus d’informations sur cette opération, consultez « [Obtenir une analyse de {% data variables.product.prodname_code_scanning %} pour un référentiel](#get-a-code-scanning-analysis-for-a-repository) ». Lorsque vous utilisez ce type média avec cette opération, la réponse comprend un sous-ensemble des données réelles qui ont été chargées pour l’analyse spécifiée, plutôt que le résumé de l’analyse qui est retourné lorsque vous utilisez le type média par défaut. La réponse comprend également des données supplémentaires, telles que les propriétés `github/alertNumber` et `github/alertUrl`. Les données sont mises en forme en tant que [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
