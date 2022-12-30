---
title: Application de stratégies pour les paramètres de sécurité dans votre entreprise
intro: Vous pouvez appliquer des stratégies pour la gestion des paramètres de sécurité dans les organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183963'
---
## À propos des stratégies pour les paramètres de sécurité dans votre entreprise

Vous pouvez appliquer des stratégies pour contrôler les paramètres de sécurité des organisations appartenant à votre entreprise sur {% data variables.product.product_name %}. Par défaut, les propriétaires d’organisation peuvent gérer les paramètres de sécurité. 

{% ifversion ghec or ghes %}

## Exiger l’authentification à 2 facteurs pour les organisations de votre entreprise

Les propriétaires d’entreprise peuvent exiger que les membres, gestionnaires de facturation et collaborateurs externes de toutes les organisations appartenant à une entreprise utilisent l’authentification à 2 facteurs pour sécuriser leurs comptes personnels.

Pour pouvoir exiger l’authentification à 2 facteurs pour toutes les organisations appartenant à votre entreprise, vous devez l’activer pour votre propre compte. Pour plus d’informations, consultez « [Sécurisation de votre compte avec l’authentification à deux facteurs (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/) ».

{% warning %}

**Avertissements :**

- Quand vous avez besoin de l’authentification à 2 facteurs pour votre entreprise, les membres, collaborateurs externes et gestionnaires de facturation (y compris les comptes de bot) de toutes les organisations appartenant à votre entreprise qui n’utilisent pas l’authentification à 2 facteurs sont supprimés de l’organisation et perdent l’accès à ses dépôts. Ils perdent également l’accès à leurs duplications (fork) des dépôts privés de l’organisation. Vous pouvez rétablir leurs paramètres et privilèges d’accès s’ils activent l’authentification à 2 facteurs pour leur compte dans les trois mois suivant leur suppression de votre organisation. Pour plus d’informations, consultez « [Rétablissement d’un ancien membre de votre organisation](/articles/reinstating-a-former-member-of-your-organization) ».
- Tout propriétaire, membre, gestionnaire de facturation ou collaborateur externe de toute organisation appartenant à votre entreprise qui désactive l’authentification à 2 facteurs pour son compte alors que vous avez activé l’exigence d’authentification à 2 facteurs est automatiquement supprimé de l’organisation.
- Si vous êtes le seul propriétaire d’une entreprise qui exige l’authentification à 2 facteurs, vous ne pourrez pas la désactiver pour votre compte utilisateur sans désactiver l’authentification à 2 facteurs exigée pour l’entreprise.

{% endwarning %}

Avant d’exiger l’authentification à 2 facteurs, nous vous recommandons d’en informer les membres, collaborateurs externes et gestionnaires de facturation de l’organisation et de leur demander de la configurer pour leurs comptes. Les propriétaires d’organisation peuvent voir si les membres et collaborateurs externes utilisent déjà l’authentification à 2 facteurs sur la page Personnes de chaque organisation. Pour plus d’informations, consultez « [Voir si l’authentification à 2 facteurs est activée pour des utilisateurs de votre organisation](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. Sous « Authentification à 2 facteurs », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Sous « Authentification à 2 facteurs », sélectionnez **Exiger l’authentification à 2 facteurs pour toutes les organisations de votre entreprise**, puis cliquez sur **Enregistrer**.
  ![Case à cocher pour exiger l’authentification à 2 facteurs](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Si vous y êtes invité, lisez les informations sur les membres et les collaborateurs externes qui seront supprimés des organisations appartenant à votre entreprise. Pour confirmer la modification, tapez le nom de votre entreprise, puis cliquez sur **Supprimer les membres et exiger l’authentification à 2 facteurs**.
  ![Zone de confirmation l’application de l’authentification à 2 facteurs](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Si des membres ou des collaborateurs externes sont supprimés des organisations appartenant à votre entreprise, nous vous recommandons de leur envoyer une invitation pour rétablir leurs anciens privilèges et accès à votre organisation. Chaque personne doit activer l’authentification à 2 facteurs pour pouvoir accepter votre invitation.

{% endif %}

## Gestion des autorités de certification SSH pour votre entreprise

Vous pouvez utiliser des autorités de certification SSH pour autoriser les membres de n’importe quelle organisation appartenant à votre entreprise à accéder aux dépôts de cette organisation à l’aide de certificats SSH que vous fournissez. {% data reusables.organizations.can-require-ssh-cert %} Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) ».

{% data reusables.organizations.add-extension-to-cert %}

### Ajout d’une autorité de certification SSH

Si vous avez besoin de certificats SSH pour votre entreprise, les membres de l’entreprise doivent utiliser une URL spéciale pour les opérations Git sur SSH. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Suppression d’une autorité de certification SSH

La suppression d’une autorité de certification ne peut pas être annulée. Si vous souhaitez utiliser la même autorité de certification plus tard, vous devrez la charger de nouveau.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## Gestion de l’authentification unique pour les utilisateurs non authentifiés

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Si votre entreprise utilise des {% data variables.product.prodname_emus %}, vous pouvez choisir ce que voient les utilisateurs non authentifiés lorsqu’ils tentent d’accéder aux ressources de votre entreprise. Pour plus d’informations sur {% data variables.product.prodname_emus %}, consultez « [À propos de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users) ».

Par défaut, pour masquer l’existence de ressources privées, lorsqu’un utilisateur non authentifié tente d’accéder à votre entreprise, {% data variables.product.company_short %} affiche une erreur 404.

Pour éviter toute confusion de la part de vos développeurs, vous pouvez changer ce comportement afin que les utilisateurs soient automatiquement redirigés vers l’authentification unique (SSO) via votre fournisseur d’identité (IdP). Lorsque vous activez les redirections automatiques, toute personne qui visite l’URL de l’une des ressources de votre entreprise peut voir que la ressource existe. Toutefois, elle ne peut voir la ressource que si elle dispose d’un accès approprié après s’être authentifiée auprès de votre IdP.

{% note %}

**Remarque :** Si un utilisateur est connecté à son compte personnel lorsqu’il tente d’accéder à l’une des ressources de votre entreprise, il est automatiquement déconnecté et redirigé vers l’authentification unique pour se connecter à son {% data variables.enterprise.prodname_managed_user %}. Pour plus d’informations, consultez « [Gestion de plusieurs comptes](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts) ».

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Paramètres de l’authentification unique », sélectionnez ou désélectionnez **Rediriger automatiquement les utilisateurs vers la connexion**.

   ![Case à cocher pour rediriger automatiquement les utilisateurs vers la connexion](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) » {%- ifversion ghec %}
- « [Accès aux rapports de conformité pour votre entreprise](/admin/overview/accessing-compliance-reports-for-your-enterprise) » {%- endif %} {%- ifversion ghec or ghae %}
- « [Restriction du trafic réseau avec une liste d’adresses IP autorisées](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) » {%- endif %}
