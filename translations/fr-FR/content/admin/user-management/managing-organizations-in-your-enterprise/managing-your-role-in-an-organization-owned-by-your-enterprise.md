---
title: Gestion de votre rôle dans une organisation appartenant à votre entreprise
intro: Vous pouvez gérer votre appartenance à une organisation dont est propriétaire votre entreprise et changer votre rôle au sein de l’organisation.
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884236'
---
## À propos de la gestion des rôles

Vous pouvez choisir de rejoindre une organisation appartenant à votre entreprise comme membre ou propriétaire d’organisation, de modifier votre rôle au sein de l’organisation ou de quitter l’organisation.

{% ifversion ghec %} {% warning %}

**Avertissement** : Si une organisation utilise SCIM pour provisionner des utilisateurs, rejoindre l’organisation de cette façon peut avoir des conséquences inattendues. Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

{% endwarning %} {% endif %}

Pour obtenir des informations sur la gestion des rôles d’autres personnes dans une organisation, consultez « [Gestion de l’appartenance dans votre organisation](/organizations/managing-membership-in-your-organization) » et [« Gestion de l’accès des personnes à votre organisation avec des rôles](/organizations/managing-peoples-access-to-your-organization-with-roles) ».

## Gestion de votre rôle avec les paramètres d’entreprise

Vous pouvez rejoindre une organisation appartenant à votre entreprise et gérer votre rôle au sein de l’organisation directement à partir des paramètres de votre compte d’entreprise.

{% ifversion ghec %}

Si une organisation applique l’authentification unique SAML, vous ne pouvez pas utiliser les paramètres d’entreprise pour rejoindre l’organisation. Au lieu de cela, vous devez rejoindre l’organisation à l’aide du fournisseur d’identité (IdP) de cette organisation. Vous pouvez ensuite gérer votre rôle dans vos paramètres d’entreprise. Pour plus d’informations, consultez « [Rejoindre une organisation qui applique l’authentification unique SAML](#joining-an-organization-that-enforces-saml-sso) ».

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Dans l’onglet **Organisations**, à droite de l’organisation dans laquelle vous souhaitez gérer votre rôle, sélectionnez le menu déroulant sous {% octicon "gear" aria-label="The gear icon" %} et cliquez sur l’action à entreprendre.

   ![Capture d’écran du menu déroulant sous l’icône d’engrenage pour une organisation](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## Rejoindre une organisation qui applique l’authentification unique SAML

Si une organisation applique l’authentification unique SAML, vous ne pouvez pas utiliser les paramètres d’entreprise pour rejoindre l’organisation. Au lieu de cela, vous devez rejoindre l’organisation à l’aide du fournisseur d’identité (IdP) de cette organisation.

1. L’accès à l’application pour {% data variables.product.prodname_ghe_cloud %} utilisées par l’organisation doit vous être affecté dans votre fournisseur d’identité. Si vous ne pouvez pas configurer votre fournisseur d’identité vous-même, contactez l’administrateur de votre IdP.
1. Authentifiez-vous auprès de l’organisation à l’aide de l’authentification unique SAML.

   - Si l’organisation utilise SCIM, acceptez son invitation, qui sera générée par l’intégration SCIM.
   - Si l’organisation n’utilise pas SCIM, accédez à l’URL suivante en remplaçant ORGANIZATION par le nom de l’organisation, puis suivez les invites pour vous authentifier.

    `https://github.com/orgs/ORGANIZATION/sso`

Après avoir rejoint l’organisation, vous pouvez utiliser les paramètres d’entreprise pour gérer votre rôle dans l’organisation, par exemple pour devenir propriétaire d’organisation. Pour plus d’informations, consultez « [Gestion de votre rôle avec les paramètres d’entreprise](#managing-your-role-with-the-enterprise-settings) ».

{% endif %}
