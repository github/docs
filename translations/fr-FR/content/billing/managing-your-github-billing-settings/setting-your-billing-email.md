---
title: Définition de votre e-mail de facturation
intro: 'L’e-mail de facturation de votre compte est l’endroit où {% data variables.product.product_name %} envoie les reçus et autres communications liées à la facturation.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Billing email
ms.openlocfilehash: 35b340a697bafd0c7e3047983496b71048cbe0ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085638'
---
## Définition de l’e-mail de facturation de votre compte personnel

L’e-mail principal de votre compte personnel est l’endroit où {% data variables.product.product_name %} envoie les reçus et autres communications liées à la facturation.

Votre adresse e-mail principale est le premier e-mail listé dans les paramètres de messagerie de votre compte.
Nous utilisons également votre adresse e-mail principale comme adresse e-mail de facturation.

Si vous souhaitez changer d’e-mail de facturation, consultez « [Changement de votre adresse e-mail principale](/articles/changing-your-primary-email-address) ».

## Définition de l’e-mail de facturation de votre organisation

L’e-mail de facturation de votre organisation est l’endroit où {% data variables.product.product_name %} envoie les reçus et autres communications liées à la facturation. L’adresse e-mail n’a pas besoin d’être propre au compte d’organisation.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. Sous « Gestion de la facturation », à droite de l’adresse e-mail de facturation, cliquez sur **Modifier**.
  ![E-mails de facturation actuels](/assets/images/help/billing/billing-change-email.png)
2. Tapez une adresse e-mail valide, puis cliquez sur **Mettre à jour**.
  ![Fenêtre modale pour changer d’adresse e-mail de facturation](/assets/images/help/billing/billing-change-email-modal.png)

## Gestion des destinataires supplémentaires pour l’e-mail de facturation de votre organisation

Si vous avez des utilisateurs qui souhaitent recevoir les rapports de facturation, vous pouvez ajouter leurs adresses e-mail en tant que destinataires d’e-mail de facturation. Cette fonctionnalité est uniquement disponible pour les organisations qui ne sont pas gérées par une entreprise.

{% data reusables.dotcom_billing.org-billing-perms %}

### Ajout d’un destinataire pour les notifications de facturation

{% data reusables.organizations.billing-settings %}
1. Sous « Gestion de la facturation », à droite de « Destinataires des e-mails », cliquez sur **Ajouter**.
  ![Ajouter un destinataire](/assets/images/help/billing/billing-add-email-recipient.png)
1. Tapez l’adresse e-mail du destinataire, puis cliquez sur **Ajouter**.
  ![Fenêtre modale pour ajouter un destinataire](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Modification du destinataire principal pour les notifications de facturation

Une adresse doit toujours être désignée comme destinataire principal. L’adresse ainsi désignée ne peut pas être supprimée tant qu’un nouveau destinataire principal n’est pas sélectionné.

{% data reusables.organizations.billing-settings %}
1. Sous « Gestion de la facturation », recherchez l’adresse e-mail que vous souhaitez définir comme destinataire principal.
1. À droite de l’adresse e-mail, dans le menu déroulant « Modifier », cliquez sur **Marquer comme principal**.
  ![Marquer comme destinataire principal](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### Suppression d’un destinataire des notifications de facturation

{% data reusables.organizations.billing-settings %}
1. Sous « Destinataires des e-mails », recherchez l’adresse e-mail que vous souhaitez supprimer.
1. Pour l’entrée de l’utilisateur dans la liste, cliquez sur **Modifier**.
  ![Modifier le destinataire](/assets/images/help/billing/billing-edit-email-recipient.png)
1. À droite de l’adresse e-mail, dans le menu déroulant « Modifier », cliquez sur **Supprimer**.
  ![Supprimer le destinataire](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Passez en revue l’invite de confirmation, puis cliquez sur **Supprimer**.

{% ifversion ghec %}
## Définition de l’e-mail de facturation de votre entreprise

L’e-mail de facturation de votre entreprise est l’endroit où {% data variables.product.product_name %} envoie les reçus et autres communications liées à la facturation. L’adresse e-mail n’a pas besoin d’être propre au compte d’entreprise.

Seuls les membres de l’entreprise disposant du rôle propriétaire ou gestionnaire de facturation peuvent accéder aux paramètres de facturation de votre entreprise ou les changer. Pour plus d’informations, consultez « [Gestion des utilisateurs dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Cliquez sur **E-mails de facturation**. 
2. Sous « Destinataires des e-mails », à droite de l’adresse e-mail de facturation, cliquez sur **Modifier**.
  ![Capture d’écran de l’e-mail de facturation actuel avec mise en évidence du bouton Modifier](/assets/images/help/billing/billing-change-email.png)
2. Tapez une adresse e-mail valide, puis cliquez sur **Mettre à jour**.
  ![Capture d’écran de la fenêtre modale permettant de modifier l’adresse e-mail de facturation avec un exemple d’adresse e-mail entré](/assets/images/help/billing/billing-change-email-modal.png)

## Gestion des destinataires supplémentaires pour l’e-mail de facturation de votre entreprise

Si vous avez des utilisateurs qui souhaitent recevoir les rapports de facturation, vous pouvez ajouter leurs adresses e-mail en tant que destinataires d’e-mail de facturation. 

Seuls les membres de l’entreprise disposant du rôle propriétaire ou gestionnaire de facturation peuvent accéder aux paramètres de facturation de votre entreprise ou les changer. Pour plus d’informations, consultez « [Gestion des utilisateurs dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

### Ajout d’un destinataire pour les notifications de facturation

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Cliquez sur **E-mails de facturation**. 
2. Sous « Destinataires des e-mails », à droite de l’adresse e-mail de facturation, cliquez sur **Ajouter**.
   ![Capture d’écran de l’e-mail de facturation actuel avec mise en évidence du bouton Ajouter](/assets/images/help/billing/billing-add-email-recipient.png)
3. Tapez l’adresse e-mail du destinataire, puis cliquez sur **Ajouter**.
   ![Capture d’écran de la fenêtre modale permettant d’ajouter une adresse e-mail de facturation sans exemple d’adresse e-mail entré](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Suppression d’un destinataire des notifications de facturation

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Cliquez sur **E-mails de facturation**. 
2. Sous « Destinataires des e-mails », recherchez l’adresse e-mail que vous souhaitez supprimer.
3. Pour l’entrée de l’utilisateur dans la liste, cliquez sur **Modifier**.
   ![Capture d’écran de l’e-mail du destinataire avec mise en évidence du bouton Modifier](/assets/images/help/billing/billing-edit-email-recipient.png)
4. À droite de l’adresse e-mail, dans le menu déroulant « Modifier », cliquez sur **Supprimer**.
   ![Capture d’écran de l’e-mail du destinataire avec mise en évidence du bouton Supprimer](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Passez en revue l’invite de confirmation, puis cliquez sur **Supprimer**.
{% endif %}
