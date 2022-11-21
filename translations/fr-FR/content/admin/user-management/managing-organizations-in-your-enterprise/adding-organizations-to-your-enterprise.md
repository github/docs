---
title: Ajout d’organisations à votre entreprise
intro: 'Vous pouvez ajouter des organisations à gérer dans votre entreprise en créant une organisation, en invitant une organisation existante ou en transférant une organisation à partir d’un autre compte d’entreprise.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127618'
---
## À propos de l’ajout d’organisations à votre compte d’entreprise

Votre compte d’entreprise peut posséder des organisations. Les membres de votre entreprise peuvent collaborer sur des projets connexes au sein d’une organisation. Pour plus d’informations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».

Vous pouvez ajouter de nouvelles organisations à votre compte d’entreprise Si vous n’utilisez pas {% data variables.product.prodname_emus %}, vous pouvez ajouter des organisations existantes sur {% data variables.location.product_location %} à votre entreprise. Vous ne pouvez pas ajouter une organisation existante d’une {% data variables.enterprise.prodname_emu_enterprise %} à une autre entreprise.

{% data reusables.enterprise.create-an-enterprise-account %} Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/admin/overview/creating-an-enterprise-account) ».

Une fois que vous avez ajouté une organisation existante à votre entreprise, les ressources de l’organisation restent accessibles aux membres via les mêmes URL, et les changements suivants s’appliquent.

- Les membres de l’organisation deviennent membres de l’entreprise et {% data variables.product.company_short %} facture le compte d’entreprise pour l’utilisation de l’organisation. Vous devez vous assurer que le compte d’entreprise dispose de suffisamment de licences pour prendre en charge tout nouveau membre. Pour plus d’informations, consultez « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».
- Les propriétaires d’entreprise peuvent gérer leur rôle dans l’organisation. Pour plus d’informations, consultez « [Gestion de votre rôle dans une organisation appartenant à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise) ».
- Toutes les stratégies appliquées à l’entreprise s’appliquent à l’organisation. Pour plus d’informations, consultez « [À propos des stratégies d’entreprise](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) ».
- Si l’authentification unique SAML est configurée pour le compte d’entreprise, la configuration SAML de l’entreprise s’applique à l’organisation. Si l’organisation a utilisé une authentification unique SAML, la configuration du compte d’entreprise remplace la configuration de l’organisation. SCIM n’est pas disponible pour les comptes d’entreprise, donc il est désactivé pour l’organisation. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise) » et « [Basculement de votre configuration SAML d’une organisation vers un compte d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account) ».
- Si l’authentification unique (SSO) SAML a été configurée pour l’organisation, les clés SSH ou le {% data variables.product.pat_generic %} des membres qui ont été autorisés à accéder aux ressources de l’organisation sont autorisés à accéder aux mêmes ressources. Pour accéder à d’autres organisations appartenant à l’entreprise, les membres doivent autoriser le {% data variables.product.pat_generic %} ou la clé. Pour plus d’informations, consultez « [Autorisation d’un {% data variables.product.pat_generic %} à utiliser avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) » et « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) ».
- Si l’organisation était connectée à {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} avec {% data variables.product.prodname_github_connect %}, l’ajout de l’organisation à une entreprise ne met pas à jour la connexion. Les fonctionnalités {% data variables.product.prodname_github_connect %} ne marcheront plus pour l’organisation. Pour continuer à utiliser {% data variables.product.prodname_github_connect %}, vous devez désactiver et réactiver la fonctionnalité. Pour plus d'informations, consultez les articles suivants.

  - « [Gestion de {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)» dans la documentation sur {% data variables.product.prodname_ghe_server %}
  - « [Gestion de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)» dans la documentation sur {% data variables.product.prodname_ghe_managed %}
- Si l’organisation utilisait des applications {% data variables.product.prodname_marketplace %} facturées, elle peut continuer à les utiliser, mais elle doit payer le fournisseur directement. Pour plus d’informations, contactez le fournisseur de l’application.
- Tous les coupons seront supprimés de l’organisation. Pour réappliquer le coupon, [contactez notre équipe de vente](https://github.com/enterprise/contact).

## Création d’une organisation dans votre compte d’entreprise

Les nouvelles organisations que vous créez dans les paramètres de votre compte d’entreprise sont incluses dans l’abonnement {% data variables.product.prodname_ghe_cloud %} de votre compte d’entreprise.

Les propriétaires d’entreprise qui créent une organisation appartenant au compte d’entreprise deviennent automatiquement propriétaires d’organisation. Pour plus d’informations sur les propriétaires d’organisation, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

{% data reusables.enterprise-accounts.access-enterprise %}
2. Sous l’onglet **Organisations**, au-dessus de la liste des organisations, cliquez sur **Nouvelle organisation**.
  ![Bouton Nouvelle organisation](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Sous « Nom de l’organisation », tapez un nom pour votre organisation.
  ![Champ pour taper un nouveau nom d’organisation](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Cliquez sur **Créer une organisation**.
5. Sous « Inviter des propriétaires », tapez le nom d’utilisateur d’une personne que vous souhaitez inviter à devenir propriétaire de l’organisation, puis cliquez sur **Inviter**.
  ![Champ de recherche du propriétaire de l’organisation et bouton Inviter](/assets/images/help/business-accounts/invite-org-owner.png)
6. Cliquez sur **Terminer**.

## Invitation d’une organisation à rejoindre votre compte d’entreprise

Les propriétaires d’entreprise peuvent inviter des organisations existantes à rejoindre leur compte d’entreprise. Si l’organisation que vous souhaitez inviter est déjà détenue par un autre compte d’entreprise, vous devez être propriétaire des deux comptes d’entreprise, ou l’entreprise précédente doit d’abord abandonner la propriété de l’organisation. Pour plus d’informations, consultez « [Suppression d’une organisation de votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise) ». 

{% data reusables.enterprise-accounts.access-enterprise %}
1. Sous l’onglet **Organisations**, au-dessus de la liste des organisations, cliquez sur **Inviter une organisation**.
![Inviter une organisation](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Sous « Nom de l’organisation », commencez à taper le nom de l’organisation que vous souhaitez inviter, puis sélectionnez-le lorsqu’il apparaît dans la liste déroulante.
![Rechercher une organisation](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Cliquez sur **Inviter une organisation**.
5. Les propriétaires de l’organisation recevront un e-mail les invitant à rejoindre l’entreprise. Au moins un propriétaire doit accepter l’invitation avant que le processus puisse continuer. Vous pouvez annuler ou renvoyer l’invitation à tout moment avant qu’un propriétaire l’approuve.
![Annuler ou renvoyer](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Une fois qu’un propriétaire de l’organisation a approuvé l’invitation, vous pouvez afficher son état dans la liste des invitations en attente.
![Invitation en attente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Pour effectuer le transfert, cliquez sur **Approuver**.
![Approuver l’invitation](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Transfert d’une organisation entre des comptes d’entreprise

Les propriétaires d’entreprise peuvent transférer des organisations existantes entre des comptes d’entreprise. Vous devez être propriétaire des deux comptes d’entreprise. 

{% note %}

**Remarque :** Vous ne pouvez pas transférer une organisation existante vers ou depuis un {% data variables.enterprise.prodname_emu_enterprise %}.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Après avoir sélectionné l’organisation que vous voulez transférer, sélectionnez la liste déroulante {% octicon "gear" width="16" aria-label="Gear" %}, puis cliquez sur **Transférer l’organisation**. 
![Capture d’écran du bouton de transfert](/assets/images/help/business-accounts/org-transfer-button.png)
1. Sélectionnez le menu déroulant **Sélectionner une entreprise** , commencez à taper le nom de l’entreprise de destination, puis sélectionnez l’entreprise lorsqu’elle apparaît dans la liste déroulante.
![Capture d’écran de la liste déroulante des entreprises](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Cliquez sur **Vérifier le transfert**.
3. Pour confirmer le transfert, cliquez sur **Transférer l’organisation**.
![Capture d’écran du bouton Transférer l’organisation](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
