---
title: Examen et révocation des jetons d’accès personnels dans votre organisation
intro: 'Les propriétaires d’organisation peuvent passer en revue les {% data variables.product.pat_v2 %} qui peuvent accéder à leur organisation. Ils peuvent également révoquer l’accès de {% data variables.product.pat_v2 %} spécifiques.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: 5503d5c0daaa506030ffc022e7251f9a016a8034
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107388'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## À propos de la révision et de la révocation de {% data variables.product.pat_v2 %}

Les propriétaires d’organisation peuvent voir tous les {% data variables.product.pat_v2 %} qui peuvent accéder aux ressources appartenant à l’organisation. Les propriétaires d’organisation peuvent également révoquer l’accès des {% data variables.product.pat_v2 %}. Quand un {% data variables.product.pat_v2 %} est révoqué, les clés SSH créées par le jeton continuent de fonctionner et le jeton peut toujours lire les ressources publiques au sein de l’organisation.

Quand un jeton est révoqué, l’utilisateur qui a créé le jeton reçoit une notification par e-mail.

Les propriétaires d’organisation peuvent seulement voir et révoquer les {% data variables.product.pat_v2 %}, et non pas les {% data variables.product.pat_v1_plural %}. À moins que l’organisation {% ifversion ghec or ghes or ghae %}ou l’entreprise {% endif %}ait restreint l’accès par les {% data variables.product.pat_v1_plural %}, un {% data variables.product.pat_v1 %} peut accéder aux ressources de l’organisation jusqu’à l’expiration du jeton. Pour plus d’informations sur la restriction de l’accès par les {% data variables.product.pat_v1_plural %}, consultez « [Définition d’une stratégie de {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) »{% ifversion ghec or ghes or ghae %} et « [Application de stratégies pour les {% data variables.product.pat_generic %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise) »{% endif %}.

{% ifversion ghec %} Les propriétaires d’organisation peuvent également voir et révoquer des {% data variables.product.pat_v1_plural %} si leur organisation exige l’authentification unique SAML. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un utilisateur à votre organisation](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials) ». Pour plus d’informations sur l’utilisation de l’API REST pour ce faire, consultez « [Lister les autorisations d’authentification unique SAML pour une organisation](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) » et « [Supprimer une autorisation d’authentification unique SAML pour une organisation](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization) ».{% endif %}

## Révision et révocation des {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Jetons actifs**. Les {% data variables.product.pat_v2 %} qui peuvent accéder à votre organisation s’affichent.
1. Cliquez sur le nom du jeton que vous voulez réviser ou révoquer.
1. Passez en revue l’accès et les autorisations dont dispose le jeton.
1. Pour révoquer l’accès à l’organisation par le jeton, cliquez sur **Révoquer**.

Vous pouvez aussi révoquer plusieurs jetons à la fois :

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Jetons actifs**. Les {% data variables.product.pat_v2 %} qui peuvent accéder à votre organisation s’affichent.
1. Si vous le souhaitez, utilisez la liste déroulante **Propriétaire** pour filtrer les jetons selon le membre qui a créé le jeton.
1. Sélectionnez chaque jeton que vous voulez révoquer.
1. Sélectionnez le menu déroulant **Jetons sélectionnés...** , puis cliquez sur **Révoquer...** .
