---
title: LDAP
intro: 'Vous pouvez utiliser l’API LDAP pour mettre à jour les relations de compte entre un utilisateur ou une équipe {% data variables.product.product_name %} et son entrée LDAP liée ou mettre en file d’attente une nouvelle synchronisation.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065337'
---
Avec les points de terminaison de mappage LDAP, vous pouvez mettre à jour le nom unique (DN) auquel un utilisateur ou une équipe sont mappés. Notez que les points de terminaison LDAP sont généralement efficaces uniquement si votre appliance {% data variables.product.product_name %} a la [synchronisation LDAP activée](/enterprise/admin/authentication/using-ldap). Le point de terminaison [Mettre à jour le mappage LDAP pour un utilisateur](#update-ldap-mapping-for-a-user) peut être utilisé quand LDAP est activé, même si la synchronisation LDAP est désactivée.
