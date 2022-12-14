---
title: À propos des stratégies d’entreprise
intro: 'Avec les stratégies d’entreprise, vous pouvez gérer les stratégies pour toutes les organisations détenues par votre entreprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718116'
---
Pour vous aider à appliquer les règles d’entreprise et la conformité réglementaire, les stratégies fournissent un point de gestion unique pour toutes les organisations détenues par un compte d’entreprise. 

{% data reusables.enterprise.about-policies %}

Par exemple, avec la stratégie « Autorisations de base », vous pouvez autoriser les propriétaires d’organisations à configurer la stratégie « Autorisations de base » pour leur organisation ou vous pouvez appliquer un niveau d’autorisations de base spécifique, tel que « Lecture », pour toutes les organisations au sein de l’entreprise.

Par défaut, aucune stratégie d’entreprise n’est appliquée. Pour identifier les stratégies qui doivent être appliquées pour répondre aux exigences uniques de votre entreprise, nous vous recommandons d’examiner toutes les stratégies disponibles dans votre compte d’entreprise, en commençant par les stratégies de gestion des référentiels. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise) ».

Pendant que vous configurez des stratégies d’entreprise, pour vous aider à comprendre l’impact de la modification de chaque stratégie, vous pouvez afficher les configurations actuelles des organisations détenues par votre entreprise.

{% ifversion ghes %} Une autre façon d’appliquer des normes au sein de votre entreprise consiste à utiliser des hooks de pré-réception, qui sont des scripts qui s’exécutent sur {% data variables.product.product_location %} pour implémenter des vérifications de qualité. Pour plus d’informations, consultez « [Application d’une stratégie avec des crochets de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks) ».
{% endif %}

## Pour aller plus loin

- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) »
