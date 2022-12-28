---
title: Personnalisation des messages utilisateur pour votre entreprise
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'Vous pouvez créer des messages personnalisés que les utilisateurs verront sur {% data variables.location.product_location %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106428'
---
## À propos des messages utilisateur

Il existe plusieurs types de messages utilisateur.
- Messages qui apparaissent sur la {% ifversion ghes %}page de connexion ou la {% endif %}page de déconnexion{% ifversion ghes or ghae %}
- Messages obligatoires, qui apparaissent une fois dans une fenêtre contextuelle qui doit être masquée{% endif %}{% ifversion ghes or ghae %}
- Bannières d’annonce, qui apparaissent en haut de chaque page{% endif %}

{% ifversion ghes %} {% note %}

**Remarque :** Si vous utilisez SAML pour l’authentification, la page de connexion est présentée par votre fournisseur d’identité et n’est pas personnalisable par le biais de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Vous pouvez utiliser Markdown pour mettre en forme votre message. Pour plus d’informations, consultez « [À propos de l’écriture et de la mise en forme sur {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/) ».

## Création d’un message de connexion personnalisé

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}À droite de{% else %}Sous{% endif %} « Page de connexion », cliquez sur **Ajouter un message** ou **Modifier un message**.
![Bouton {% ifversion ghes %}Ajouter{% else %}Modifier{% endif %} un message](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Sous **Message de connexion**, tapez le message que vous souhaitez que les utilisateurs voient.
![Message de connexion](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Bouton d’aperçu](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Vérifiez le message affiché.
![Message de connexion affiché](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## Création d’un message de déconnexion personnalisé

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}À droite de{% else %}Sous{% endif %} « Page de déconnexion », cliquez sur **Ajouter un message** ou **Modifier un message**.
![Bouton Ajouter un message](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Sous **Message de déconnexion**, tapez le message que vous souhaitez que les utilisateurs voient.
![Message de connexion two_factor_auth_header](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Bouton d’aperçu](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Vérifiez le message affiché.
![Message de déconnexion affiché](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## Création d’un message obligatoire

Vous pouvez créer un message obligatoire que {% data variables.product.product_name %} présentera à tous les utilisateurs la première fois qu’ils se connectent après l’enregistrement du message. Le message s’affiche dans une fenêtre indépendante que l’utilisateur doit fermer avant d’utiliser {% data variables.location.product_location %}.

Les messages obligatoires peuvent être utilisés à diverses fins.

- Fournir des informations d’intégration aux nouveaux employés
- Indiquer aux utilisateurs comment obtenir de l’aide sur {% data variables.location.product_location %}
- Veiller à ce que tous les utilisateurs lisent les conditions d’utilisation du service pour {% data variables.location.product_location %}

Si vous incluez des cases à cocher Markdown dans le message, toutes les cases à cocher doivent être activées pour que l’utilisateur puisse masquer le message. Par exemple, si vous incluez les conditions d’utilisation de votre service dans le message obligatoire, vous pouvez exiger de chaque utilisateur qu’il active une case à cocher pour confirmer qu’il a lu les conditions.

Chaque fois qu’un utilisateur voit un message obligatoire, un événement de journal d’audit est créé. L’événement inclut la version du message que l’utilisateur a vu. Pour plus d’informations, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) ».

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**Remarque :** Si vous changez le message obligatoire pour {% data variables.location.product_location %}, les utilisateurs qui ont déjà confirmé le message ne verront pas le nouveau message. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. À droite de « Message obligatoire », cliquez sur **Ajouter un message**.
  ![Bouton Ajouter un message obligatoire](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Sous « Message obligatoire », dans la zone de texte, tapez votre message.
  ![Capture d’écran de la zone de texte du message obligatoire](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %} 
1. Le cas échéant, sélectionnez **Afficher le message mis à jour pour tous les utilisateurs, même s’ils ont ignoré le précédent**.
![Capture d’écran d’une case à cocher qui, une fois cochée, pousse les messages obligatoires vers tous les utilisateurs](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## Création d’une bannière d’annonce globale

Vous pouvez définir une bannière d’annonce globale à afficher pour tous les utilisateurs en haut de chaque page.

{% ifversion ghae or ghes %} Vous pouvez également définir une bannière d’annonce{% ifversion ghes %} dans l’interpréteur de commandes d’administration à l’aide d’un utilitaire de ligne de commande ou{% endif %} à l’aide de l’API. Pour plus d’informations, consultez {% ifversion ghes %}« [Utilitaires de ligne de commande](/enterprise/admin/configuration/command-line-utilities#ghe-announce) » et {% endif %}« [Administration de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements) ».
{% else %}

Vous pouvez également définir une bannière d’annonce dans l’interpréteur de commandes d’administration à l’aide d’un utilitaire de ligne de commande. Pour plus d’informations, consultez « [Utilitaires de ligne de commande](/enterprise/admin/configuration/command-line-utilities#ghe-announce) ».

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}À droite de{% else %}Sous{% endif %} « Annonce », cliquez sur **Ajouter une annonce**.
  ![Bouton Ajouter une annonce](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Sous « Annonce », dans le champ de texte, tapez l’annonce que vous souhaitez afficher dans une bannière.
  ![Champ de texte pour entrer l’annonce](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Si vous le souhaitez, sous « Expire le », sélectionnez le menu déroulant du calendrier et cliquez sur une date d’expiration.
  ![Menu déroulant du calendrier pour choisir la date d’expiration](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. Si vous le souhaitez, pour permettre à chaque utilisateur d’ignorer l’annonce, sélectionnez **Ignorer l’utilisateur**.

   ![Capture d’écran de la case à cocher « Utilisateur non autorisé »](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
