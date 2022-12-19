---
title: Exportation des informations sur les membres de votre organisation
intro: 'Vous pouvez exporter des informations sur les membres de votre organisation, directement à partir de l’interface utilisateur.'
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101505'
---
Vous pouvez exporter les informations relatives aux membres de votre organisation. Cela est utile si vous comptez effectuer un audit des utilisateurs au sein de l’organisation.

Les informations exportées sont les suivantes :
- Détails du nom d’utilisateur et du nom d’affichage
- Indication si l’utilisateur a activé l’authentification à deux facteurs
- Indication du type d’appartenance (publique ou privée)
- Indication si l’utilisateur est propriétaire ou membre de l’organisation
- Date/heure de la dernière activité de l’utilisateur (pour obtenir la liste complète de toute l’activité pertinente, voir « [Gestion des utilisateurs dormants](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users) »)
- Le NameID SAML de l’utilisateur, s’il est disponible

Vous pouvez obtenir les informations sur les membres directement dans l’interface utilisateur de {% data variables.product.product_name %}, ou en utilisant une API. Cet article explique comment obtenir les informations sur les membres directement dans {% data variables.product.product_name %}.

Pour plus d’informations sur l’utilisation d’une API, consultez notre documentation de l’[API GraphQL](/graphql/reference/objects#user) et de l’[API REST](/rest/reference/users) au sujet des utilisateurs.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
