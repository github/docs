---
title: Gestion des webhooks globaux
shortTitle: Manage global webhooks
intro: Vous pouvez configurer des webhooks globaux pour notifier des serveurs web externes lorsque des événements se produisent dans votre entreprise.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 751a6dc55b9d1aded22a8225f4bf7d058aa32b77
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106706'
---
## À propos des webhooks globaux

Vous pouvez utiliser des webhooks globaux pour notifier un serveur web externe quand des événements se produisent dans votre entreprise. Vous pouvez configurer le serveur pour qu’il reçoive la charge utile du webhook, puis exécute une application ou un code qui supervise, traite ou applique des règles pour la gestion des utilisateurs et des organisations pour votre entreprise. Pour plus d’informations, consultez « [Webhooks](/developers/webhooks-and-events/webhooks) ».

Par exemple, vous pouvez configurer {% data variables.product.product_location %} pour qu’il envoie un webhook quand quelqu’un crée, supprime ou modifie un dépôt ou une organisation au sein de votre entreprise. Vous pouvez configurer le serveur pour qu’il effectue automatiquement une tâche après avoir reçu le webhook.

![Liste des webhooks globaux](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Ajout d’un webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Cliquez sur **Ajouter un webhook**.
  ![Bouton Ajouter un webhook sur la page Webhooks dans le centre d’administration](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Tapez l’URL à laquelle vous souhaitez recevoir les charges utiles.
  ![Champ de saisie de l’URL pour les charges utiles](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Si vous le souhaitez, cliquez sur un format de charge utile dans le menu déroulant **Type de contenu**.
  ![Menu déroulant lisant les options de type de contenu](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Si vous le souhaitez, dans le champ **Secret**, tapez une chaîne à utiliser comme clé `secret`.
  ![Champ de saisie de la chaîne à utiliser comme clé secrète](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Si votre URL de charge utile est une URL HTTPS et que vous ne voulez pas que {% data variables.product.prodname_ghe_server %} vérifie les certificats SSL à la remise de charges utiles, sélectionnez **Désactiver la vérification SSL**. Lisez les informations relatives à la vérification SSL, puis cliquez sur **Je comprends que mes webhooks ne sont peut-être pas sécurisés**.
  ![Case d’option pour désactiver la vérification SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Avertissement :** La vérification SSL garantit que les charges utiles de webhooks sont remises de manière sécurisée. Nous vous déconseillons de désactiver la vérification SSL.

  {% endwarning %}
10. Choisissez si ce webhook doit se déclencher pour chaque événement ou pour les événements sélectionnés.
  ![Cases d’option pour recevoir les charges utiles pour chaque événement ou les événements sélectionnés](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Pour un déclenchement pour chaque événement, sélectionnez **Tout m’envoyer**.
    - Pour choisir des événements spécifiques, sélectionnez **Sélectionner des événements individuels**.
11. Si vous choisissez de sélectionner des événements individuels, sélectionnez les événements qui déclencheront le webhook.
      {% ifversion ghec %} ![Cases à cocher pour les événements de webhooks globaux individuels](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![Cases à cocher pour les événements de webhooks globaux individuels](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. Vérifiez que la case à cocher **Active** est sélectionnée.
  ![Case à cocher Active sélectionnée](/assets/images/help/business-accounts/webhook-active.png)
13. Cliquez sur **Ajouter un webhook**.

## Modification d’un webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. En regard du webhook que vous souhaitez modifier, cliquez sur **Modifier**.
  ![Bouton Modifier en regard d’un webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Mettez à jour les paramètres du webhook.
7. Cliquez sur **Mettre à jour le webhook**.

## Suppression d’un webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. En regard du webhook que vous souhaitez supprimer, cliquez sur **Supprimer**.
  ![Bouton Supprimer en regard d’un webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lisez les informations sur la suppression d’un webhook, puis cliquez sur **Oui, supprimer le webhook**.
  ![Zone contextuelle avec un avertissement et un bouton pour confirmer la suppression du webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Visualisation des remises et réponses récentes

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Dans la liste des webhooks, cliquez sur le webhook dont vous souhaitez voir les remises.
  ![Liste des webhooks avec des liens pour voir chaque webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Sous « Remises récentes », cliquez sur une remise pour afficher les détails.
  ![Liste des remises récentes du webhook avec des liens pour voir les détails](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
