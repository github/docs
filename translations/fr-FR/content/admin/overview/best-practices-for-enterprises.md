---
title: Bonnes pratiques pour les entreprises
shortTitle: Best practices
intro: 'Découvrez les pratiques recommandées avec {% data variables.product.company_short %} pour votre entreprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163438'
---
{% ifversion ghec %}
## Identifier la meilleure méthode d’authentification pour votre entreprise

{% data reusables.enterprise.ghec-authentication-options %}

Pour obtenir de l’aide sur l’identification de la méthode d’authentification qui répond le mieux à vos besoins, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ». {% endif %}

## Utiliser des stratégies

Nous vous recommandons d’utiliser des stratégies pour appliquer les règles d’entreprise et la conformité aux normes. 

{% data reusables.enterprise.about-policies %} Pour plus d’informations, consultez « [À propos des stratégies d’entreprise](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) ».

## Réduire le nombre d’organisations

Les grandes entreprises ont souvent besoin de plusieurs organisations, mais essayez d’en créer aussi peu que possible pour refléter les divisions d’entreprise de niveau supérieur. Un plus petit nombre d’organisations favorise les pratiques de ressources internes et permet aux discussions d’impliquer un public plus large.

Au lieu de cela, vous pouvez gérer les exigences de sécurité et d’accès aux référentiels à un niveau plus précis au sein de chaque organisation à l’aide d’équipes. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

## Éviter une collaboration étendue dans les référentiels appartenant à l’utilisateur

Nous vous recommandons de collaborer dans les référentiels appartenant à l’organisation chaque fois que cela est possible et de réduire la collaboration dans les référentiels appartenant à l’utilisateur. Les référentiels appartenant à l’organisation disposent de fonctionnalités de sécurité et d’administration plus sophistiquées, et restent accessibles même lorsque l’appartenance à l’entreprise change.

## Utiliser des noms d’utilisateur lisibles par l’utilisateur

{% ifversion ghec %}Si vous contrôlez les noms d’utilisateur des membres de l’entreprise, utilisez{% else %}Use{% endif %} des noms d’utilisateur lisibles par l’utilisateur et évitez les ID générés par l’ordinateur qui sont difficiles à lire.

Vous pouvez gérer l'affichage des noms d'utilisateur dans les référentiels privés de votre entreprise. Pour plus d’informations, consultez « [Gestion de l’affichage des noms de membres dans votre organisation](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization) ».

## Pour aller plus loin

- « [Meilleures pratiques pour les référentiels](/repositories/creating-and-managing-repositories/best-practices-for-repositories) »
- « [Meilleures pratiques pour les organisations](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations) »
