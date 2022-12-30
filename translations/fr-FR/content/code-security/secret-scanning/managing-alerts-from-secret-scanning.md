---
title: Gestion des alertes à partir de l’analyse des secrets
intro: Vous pouvez afficher et fermer les alertes pour les secrets archivés dans votre référentiel.
permissions: People with admin access to a repository can view and dismiss alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158668'
---
{% data reusables.secret-scanning.beta %}

## Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %} {% note %}

**Remarque :** Les alertes sont créées uniquement pour les dépôts pour lesquels l’{% data variables.product.prodname_secret_scanning_GHAS %} est activée. Les secrets trouvés dans les dépôts publics utilisant le service gratuit d’{% data variables.product.prodname_secret_scanning_partner%} sont signalés directement au partenaire, sans qu’une alerte soit créée.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Dans la barre latérale gauche, cliquez sur **Alertes d’analyse des secrets**.
   {% ifversion ghes or ghec %} ![Onglet « Alertes d’analyse des secrets »](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![Onglet « Alertes d’analyse des secrets »](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. Sous « Analyse des secrets », cliquez sur l’alerte que vous souhaitez afficher.
   {% ifversion ghec %} ![Liste des alertes de l’analyse des secrets](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![Liste des alertes de l’analyse des secrets](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![Liste des alertes de l’analyse des secrets](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Pour ignorer une alerte, sélectionnez le menu déroulant « Ignorer l’alerte », puis cliquez sur un motif pour la résolution d’une alerte.

   ![Capture d’écran du menu déroulant pour ignorer une alerte de l’analyse des secrets](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. Pour ignorer une alerte, sélectionnez le menu déroulant « Marquer comme », puis cliquez sur un motif pour la résolution d’une alerte. 
  
   ![Capture d’écran du menu déroulant pour résoudre une alerte de l’analyse des secrets](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Si vous le souhaitez, ajoutez un commentaire de l’action Ignorer. Le commentaire de l’action Ignorer est ajouté à la chronologie des alertes et peut être utilisé comme justification lors de l’audit et de la création de rapports. Vous pouvez afficher l’historique de toutes les alertes ignorées et les commentaires de rejet dans la chronologie des alertes. Vous pouvez également récupérer ou définir un commentaire à l’aide de l’API {% data variables.product.prodname_secret_scanning_caps %}. Le commentaire est contenu dans le champ `resolution_comment`. Pour plus d’informations, consultez « [{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert) » dans la documentation de l’API REST.

  ![Capture d’écran montrant comment ignorer une alerte via la liste déroulante « Ignorer l’alerte », avec l’option permettant d’ajouter un commentaire pour l’action Ignorer](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Cliquez sur **Ignorer l’alerte**.
{% endif %}

## Sécurisation des secrets compromis

Une fois qu’un secret a été commité dans un dépôt, vous devez considérer le secret comme compromis. {% data variables.product.prodname_dotcom %} recommande les actions suivantes pour les secrets compromis :

- Pour un {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} compromis, supprimez le jeton compromis, créez un jeton et mettez à jour tous les services qui utilisent l’ancien jeton. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %} pour la ligne de commande](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) ».
{%- ifversion token-audit-log %}
  - {% ifversion ghec %} Si votre organisation appartient à un compte d’entreprise, identifiez{% else %}Identifiez{% endif %} toutes les actions effectuées par le jeton compromis sur les ressources de votre entreprise. Pour plus d’informations, consultez « [Identification des événements de journal d’audit effectués par un jeton d’accès](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) ».
{%- endif %}
- Pour tous les autres secrets, vérifiez d’abord que le secret commité dans {% data variables.product.product_name %} est valide. Si c’est le cas, créez un secret, mettez à jour tous les services qui utilisent l’ancien secret, puis supprimez l’ancien secret.

{% ifversion ghec %} {% note %}

**Remarque :** Si un secret est détecté dans un dépôt public sur {% data variables.product.prodname_dotcom_the_website %} et qu’il correspond également à un modèle de partenaire, une alerte est générée et le secret potentiel est signalé au fournisseur de services. Pour plus d’informations sur les modèles de partenaires, consultez « [Secrets pris en charge pour les modèles de partenaires](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns) ».

{% endnote %} {% endif %}

## Configuration des notifications pour les alertes d’{% data variables.product.prodname_secret_scanning %}

Quand un nouveau secret est détecté, {% data variables.product.product_name %} avertit tous les utilisateurs ayant accès aux alertes de sécurité pour le dépôt en fonction de leurs préférences de notification. Vous recevez des notifications par e-mail si vous consultez le dépôt, avez activé les notifications pour les alertes de sécurité ou pour toute activité sur le dépôt, ou êtes l’auteur de la validation qui contient le secret et n’ignorez pas le dépôt.

Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) » et « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) ».
