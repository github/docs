---
title: Création et paiement d’une organisation pour le compte d’un client
intro: 'Vous pouvez créer et payer une organisation {% data variables.product.prodname_dotcom %} au nom d’un client.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085594'
---
## Spécifications

Avant de commencer, vérifiez que vous connaissez les éléments suivants :
- Le nom d’utilisateur {% data variables.product.prodname_dotcom %} du client destiné à devenir le propriétaire de l’organisation que vous créez
- Le nom que votre client souhaite utiliser pour l’organisation
- L’adresse e-mail à laquelle vous souhaitez que les reçus soient envoyés
- Le [produit](/articles/github-s-products) que votre client souhaite acheter
- Le nombre de [postes payants](/articles/about-per-user-pricing/) que votre client souhaite acheter pour l’organisation

## Étape 1 : Créer votre compte {% data variables.product.prodname_dotcom %} personnel

Vous utiliserez votre compte personnel pour configurer l’organisation. Vous devrez également vous connecter à ce compte pour renouveler l’abonnement de votre client ou y apporter des modifications à l’avenir.

Si vous disposez déjà d’un compte personnel sur {% data variables.product.prodname_dotcom %}, passez à l’[étape 2](#step-2-create-the-organization).

1. Accédez à la page [Rejoindre GitHub](https://github.com/join).
2. Sous « Créer votre compte personnel », tapez vos nom d’utilisateur, adresse e-mail et mot de passe, puis cliquez sur **Créer un compte**.
![Formulaire permettant de créer un compte personnel](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Sélectionnez {% data variables.product.prodname_free_user %} pour votre compte personnel.
4. Cliquez sur **Terminer l’inscription**.

## Étape 2 : Créer l’organisation

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. Sous « Choisir un plan », cliquez sur **Choisir {% data variables.product.prodname_free_team %}** . Vous mettrez à niveau l’organisation à l’étape suivante.
{% data reusables.organizations.organization-name %}
5. Sous « Adresse e-mail de contact », tapez une adresse e-mail de contact pour votre client.
  ![Champ Adresse e-mail de contact](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. Cliquez sur **Suivant**.

## Étape 3 : Mettre à niveau l’organisation vers un abonnement payant annuel


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (Vous pourrez ajouter des postes à l’organisation à l’étape suivante.)
6. Sous « Résumé de la mise à niveau », sélectionnez **Payer annuellement** afin de payer pour l’organisation annuellement.
![Case d’option pour la facturation annuelle](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Étape 4 : Mettre à niveau le nombre de postes payants dans l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## Étape 5 : Inviter votre client à rejoindre l’organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. Tapez le nom d’utilisateur {% data variables.product.prodname_dotcom %} de votre client et appuyez sur **Entrée**.
![Champ de saisie du nom d’utilisateur de votre client](/assets/images/help/organizations/org-invite-modal.png)
6. Choisissez le rôle *Propriétaire* pour votre client, puis cliquez sur **Envoyer l’invitation**.
![Case d’option Propriétaire et bouton Envoyer l’invitation](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Votre client recevra un e-mail l’invitant à rejoindre l’organisation. Il devra accepter l’invitation pour que vous puissiez passer à l’étape suivante.

## Étape 6 : Transférer la propriété de l’organisation à votre client

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Vérifiez que votre client est listé parmi les membres de l’organisation et qu’il détient le rôle de *propriétaire*.
5. À droite de votre nom d’utilisateur, dans le menu déroulant {% octicon "gear" aria-label="The Settings gear" %}, cliquez sur **Gérer**.
  ![Lien de gestion de l’accès](/assets/images/help/organizations/member-manage-access.png)
6. Sur la gauche, cliquez sur **Supprimer de l’organisation**.
  ![Bouton Supprimer de l’organisation](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirmez votre choix, puis cliquez sur **Supprimer les membres**.
  ![Bouton de confirmation Supprimer les membres](/assets/images/help/organizations/confirm-remove-from-org.png)

## Étapes suivantes

1. Contactez votre client et demandez-lui de [vous ajouter à l’organisation en tant que responsable de facturation](/articles/adding-a-billing-manager-to-your-organization). Vous devez être responsable de facturation pour l’organisation afin de pouvoir renouveler l’abonnement de votre client ou y apporter des modifications à l’avenir.
2. Si vous souhaitez que la carte de crédit de votre organisation soit supprimée de l’organisation afin qu’elle ne soit plus facturée, contactez le {% data variables.contact.contact_support %}.
3. Quand il est temps de renouveler l’abonnement payant de votre client, consultez « [Renouvellement de l’organisation payante de votre client](/articles/renewing-your-client-s-paid-organization) ».

## Pour aller plus loin

- « [À propos des organisations pour les sociétés d’approvisionnement](/articles/about-organizations-for-procurement-companies) »
- « [Mise à niveau ou mise à niveau inférieur de l’organisation payante de votre client](/articles/upgrading-or-downgrading-your-client-s-paid-organization) »
- « [Renouvellement de l’organisation payante de votre client](/articles/renewing-your-client-s-paid-organization) »
