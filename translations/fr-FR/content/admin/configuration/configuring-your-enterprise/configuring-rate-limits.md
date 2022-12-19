---
title: Configuration des limites de débit
intro: 'Vous pouvez définir des limites de débit pour {% data variables.product.prodname_ghe_server %} à l’aide de {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107548'
---
## Activation des limites de débit pour les {% data variables.product.prodname_enterprise_api %}

L’activation des limites de débit sur les {% data variables.product.prodname_enterprise_api %} peut empêcher une surutilisation de ressources de la part d’utilisateurs individuels ou non authentifiés. Pour plus d’informations, consultez « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) ».

{% ifversion ghes %} Vous pouvez exempter une liste d’utilisateurs des limites de débit d’API à l’aide de l’utilitaire `ghe-config` dans l’interpréteur de commandes d’administration. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/configuration/command-line-utilities#ghe-config) ».
{% endif %}

{% note %}

**Remarque :** La {% data variables.enterprise.management_console %} indique la période (par minute ou par heure) pour chaque limite de débit.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Sous « Limitation de débit », sélectionnez **Activer la limitation de débit pour l’API HTTP**.
![Case à cocher pour activer la limitation de débit pour l’API](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Tapez les limites pour les demandes authentifiées et non authentifiées pour chaque API ou acceptez les limites par défaut préremplies.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## Configuration des limites de débit pour l’authentification auprès de la {% data variables.enterprise.management_console %}

Vous pouvez configurer les limites de temps de verrouillage et de tentative de connexion pour la {% data variables.enterprise.management_console %}. Si un utilisateur dépasse la limite de tentatives de connexion, la {% data variables.enterprise.management_console %} reste verrouillée pendant la durée définie par le temps de verrouillage. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Sous « Limitation du taux de tentatives de connexion », configurez le temps de verrouillage et la limite du taux de tentatives de connexion, ou acceptez les paramètres par défaut préremplis.
![Champs pour configurer le temps de verrouillage et la limite du taux de tentatives de connexion](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## Activation des limites de débit secondaires

La définition de limites de débit secondaires permet de protéger le niveau de service global sur {% data variables.location.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. Sous « Limitation de débit », sélectionnez **Activer la limitation de débit secondaire**.
   ![Case à cocher pour activer la limitation de débit secondaire](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. Sous « Limitation de débit », sélectionnez **Activer la limitation des abus de débit**.
    ![Case à cocher pour activer la limitation des abus de débit](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Tapez les limites pour le nombre total de demandes, la limite de processeur et la limite de processus pour les recherches ou acceptez les limites par défaut préremplies.
{% data reusables.enterprise_management_console.save-settings %}

## Activation des limites de taux pour Git

Si un membre du personnel de {% data variables.product.company_short %} l’a recommandé, vous pouvez appliquer des limites de débit Git par réseau de dépôt ou par ID utilisateur. Les limites de débit Git sont exprimées en opérations simultanées par minute et peut s’adapter en fonction de la charge actuelle du processeur.

{% warning %}

**Avertissement :** Nous vous encourageons à laisser ce paramètre désactivé, sauf si un membre du personnel de {% data variables.product.company_short %} vous le recommande directement. Les opérations Git sont rarement l’élément principal de l’utilisation du processeur et de la RAM. L’activation de cette fonctionnalité peut augmenter les risques d’échec des opérations Git dans des conditions de charge élevée, sans pour cela remédier à la cause sous-jacente de ces conditions.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Sous « Limitation de débit », sélectionnez **Activer la limitation de débit Git**.
![Case à cocher pour activer la limitation de débit Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Tapez les limites pour chaque réseau de dépôts ou ID d’utilisateur.
  ![Champs pour le réseau de dépôts et les limites d’ID d’utilisateur](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Configuration des limites de débit pour {% data variables.product.prodname_actions %}

Vous pouvez appliquer une limite de débit aux exécutions de workflow {% data variables.product.prodname_actions %}. Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) ».

### À propos des limites de débit pour {% data variables.product.prodname_actions %}

Votre instance {% data variables.product.product_name %} affecte chaque travail de workflow {% data variables.product.prodname_actions %} à un exécuteur. Si votre instance ne peut pas affecter immédiatement un travail à un exécuteur disponible, le travail attend dans une file d’attente jusqu’à ce qu’un exécuteur soit disponible. Si {% data variables.product.prodname_actions %} subit une charge élevée, la file d’attente peut s’allonger et les performances de {% data variables.location.product_location %} se dégrader.

Pour éviter cette dégradation des performances, vous pouvez configurer une limite de débit pour {% data variables.product.prodname_actions %}. Cette limite de taux est exprimée en exécutions de travail par minute. {% data variables.product.product_name %} calcule et applique la limite de débit pour la somme totale de toutes les exécutions de travail sur l’instance. Si les exécutions dépassent la limite de taux, les exécutions supplémentaires échouent au lieu d’entrer dans la file d’attente. L’erreur suivante s’affiche dans les annotations de l’exécution.

> Vous avez dépassé la limite de taux pour les demandes d’exécution de workflow. Veuillez patienter avant de réessayer l’exécution.

Une limite de débit appropriée protège {% data variables.location.product_location %} contre l’utilisation anormale de {% data variables.product.prodname_actions %} sans interférer avec les opérations quotidiennes. Le seuil exact dépend des ressources disponibles de votre instance et du profil de charge global. Pour plus d’informations sur la configuration matérielle requise pour {% data variables.product.prodname_actions %}, consultez « [Prise en main de {% data variables.product.prodname_actions %} pour {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements) ».

Par défaut, la limite de débit pour {% data variables.product.prodname_actions %} est désactivée. Étant donné que {% data variables.product.product_name %} peut gérer des pics temporaires d’utilisation sans dégradation des performances, cette limite de débit est destinée à protéger contre une charge élevée soutenue. Nous vous recommandons de laisser la limite de taux désactivée, sauf si vous rencontrez des problèmes de performances. Dans certains cas, le {% data variables.contact.github_support %} peut vous recommander d’activer une limite de taux pour {% data variables.product.prodname_actions %}. 

### Activer ou désactiver les limites de débit pour {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Pour activer et configurer la limite de taux, exécutez les deux commandes suivantes, en remplaçant **RUN-PER-MINUTE** par la valeur de votre choix.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. Pour désactiver la limite de taux après activation, exécutez la commande suivante.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. Pour appliquer la configuration, exécutez la commande suivante.

   ```
   ghe-config-apply
   ```
1. Attendez la fin de l’exécution de la configuration.

{% endif %}
