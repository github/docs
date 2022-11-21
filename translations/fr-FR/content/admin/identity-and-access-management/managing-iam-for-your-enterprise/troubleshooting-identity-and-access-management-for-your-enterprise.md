---
title: Résolution des problèmes de gestion des identités et des accès pour votre entreprise
shortTitle: Troubleshoot IAM
intro: Passez en revue les problèmes courants et leurs solutions pour la gestion des identités et des accès pour votre entreprise.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107532'
---
## Conflits de nom d’utilisateur

{% ifversion ghec %}Si votre entreprise utilise {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalise un identificateur fourni par votre fournisseur d’identité (IdP) pour créer le nom d’utilisateur de chaque personne sur {% data variables.product.prodname_dotcom %}. Si plusieurs comptes sont normalisés dans le même nom d’utilisateur {% data variables.product.prodname_dotcom %}, un conflit de nom d’utilisateur se produit et seul le premier compte d’utilisateur est créé. Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

{% ifversion ghec %}
## Erreurs lors du basculement des configurations d’authentification

Si vous rencontrez des problèmes lors du basculement entre différentes configurations d’authentification, par exemple en passant de la configuration de l’authentification unique SAML d’une organisation à un compte d’entreprise ou en effectuant une migration de SAML vers OIDC pour {% data variables.product.prodname_emus %}, assurez-vous que vous suivez les meilleures pratiques pour cette modification.

- « [Basculement de votre configuration SAML d’une organisation à un compte d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account) »
- « [Migration de SAML vers OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc) »
- « [Migration de votre entreprise vers un nouveau fournisseur d’identité ou locataire](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant) »

## Accès à votre entreprise quand l’authentification unique n’est pas disponible

Quand une erreur de configuration ou un problème concernant votre fournisseur d’identité vous empêche d’utiliser l’authentification unique, vous pouvez utiliser un code de récupération pour accéder à votre entreprise. Pour plus d’informations, consultez « [Accès à votre compte d’entreprise si votre fournisseur d’identité n’est pas disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable) ».
{% endif %}

## Erreurs d’authentification SAML

Si les utilisateurs rencontrent des erreurs en essayant de s’authentifier via SAML, consultez « [Résolution des problèmes d’authentification SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication) ».

{% ifversion ghec %}
## Pour aller plus loin

- « [Dépannage de la gestion des identités et des accès pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization) » {% endif %}
