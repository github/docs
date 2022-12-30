---
title: Groupes externes
intro: 'L’API Groupes externes vous permet d’afficher les groupes de fournisseurs d’identité externes disponibles pour votre organisation, et de gérer la connexion entre les groupes externes et les équipes de votre organisation.'
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710370'
---
## À propos de l’API Groupes externes

Pour utiliser cette API, l’utilisateur authentifié doit être un responsable d’équipe ou un propriétaire de l’organisation associée à l’équipe.

{% ifversion ghec %} {% note %}

**Remarques :** 

- L’API Groupes externes est disponible uniquement pour les organisations qui font partie d’une entreprise utilisant {% data variables.product.prodname_emus %}. Pour plus d’informations, consultez « [À propos des utilisateurs d’entreprise managés](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».
- Si votre organisation utilise la synchronisation d’équipe, vous pouvez utiliser l’API Synchronisation d’équipe. Pour plus d’informations, consultez « [API Synchronisation d’équipe](#team-synchronization) ».

{% endnote %} {% endif %}
