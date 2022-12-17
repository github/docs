---
title: Activation de GitHub Advanced Security pour votre entreprise
shortTitle: Enabling GitHub Advanced Security
intro: 'Vous pouvez configurer {% data variables.product.product_name %} pour inclure {% data variables.product.prodname_GH_advanced_security %}. Cette licence donne accès à des fonctionnalités supplémentaires qui aident les utilisateurs à détecter et résoudre les problèmes de sécurité dans leur code.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: bc516af0c0788eeafe1b833c5627e471982e1c05
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876879'
---
## À propos de l’activation de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} Quand vous activez {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise, les administrateurs de dépôt dans toutes les organisations peuvent activer les fonctionnalités, sauf si vous configurez une stratégie visant à limiter l’accès. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_advanced_security %} dans votre entreprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise) ».
{% else %} Quand vous activez {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise, les administrateurs de dépôt dans toutes les organisations peuvent activer les fonctionnalités, sauf si vous configurez une stratégie visant à limiter l’accès. {% endif %}

{% ifversion ghes %} Pour obtenir une aide en vue du déploiement par phases de GitHub Advanced Security, consultez « [Introduction à l’adoption de GitHub Advanced Security à grande échelle](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale) ».
{% endif %}

## Vérification de la présence de {% data variables.product.prodname_GH_advanced_security %} dans votre licence

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Si votre licence inclut {% data variables.product.prodname_GH_advanced_security %}, la page de licence comprend une section montrant les détails de l’utilisation actuelle.
Section ![{% data variables.product.prodname_GH_advanced_security %} de la licence Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## Prérequis pour l’activation de {% data variables.product.prodname_GH_advanced_security %}

1. Mettez à niveau votre licence pour que {% data variables.product.product_name %} inclue {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Pour plus d’informations sur les licences, consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ». {% endif %}
2. Téléchargez le nouveau fichier de licence. Pour plus d’informations, consultez « [Téléchargement de votre licence pour {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise) ».
3. Chargez le nouveau fichier de licence sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Chargement d’une nouvelle licence sur {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) ». {% ifversion ghes %}
4. Passez en revue les prérequis pour les fonctionnalités que vous prévoyez d’activer.

    - {% data variables.product.prodname_code_scanning_capc %}, consultez « [Configuration de {% data variables.product.prodname_code_scanning %} pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning) ».
    - {% data variables.product.prodname_secret_scanning_caps %}, consultez « [Configuration de l’{% data variables.product.prodname_secret_scanning %} pour votre appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning) ».{% endif %}
    - {% data variables.product.prodname_dependabot %}, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ». 

## Activation et désactivation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Sous « Sécurité », sélectionnez les fonctions que vous voulez activer et désélectionnez celles que vous voulez désactiver.
{% ifversion ghes %}![ Case à cocher pour activer ou désactiver les fonctionnalités de {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Case à cocher pour activer ou désactiver les fonctionnalités de {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Sous « {% data variables.product.prodname_advanced_security %} », cliquez sur **{% data variables.product.prodname_code_scanning_capc %}** .
![Case à cocher pour activer ou désactiver l’{% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

Une fois que {% data variables.product.product_name %} a redémarré, vous pouvez configurer les ressources supplémentaires nécessaires aux fonctionnalités nouvellement activées. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_code_scanning %} pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance) ».

## Activation ou désactivation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} via l’interpréteur de commandes d’administration (SSH)

Vous pouvez activer ou désactiver les fonctionnalités par programmation sur {% data variables.product.product_location %}. Pour plus d’informations sur l’interpréteur de commandes d’administration et les utilitaires de ligne de commande pour {% data variables.product.prodname_ghe_server %}, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) » et « [Utilitaires de ligne de commande](/admin/configuration/command-line-utilities#ghe-config) ».

Par exemple, vous pouvez activer n’importe quelle fonctionnalité de {% data variables.product.prodname_GH_advanced_security %} avec vos outils d'infrastructure en tant que code au moment de déployer une instance pour la mise en lots ou la reprise après sinistre.

1. SSH dans {% data variables.product.product_location %}.
1. Activez des fonctionnalités pour {% data variables.product.prodname_GH_advanced_security %}

    - Pour activer {% data variables.product.prodname_code_scanning_capc %}, entrez les commandes suivantes.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - Pour activer l’{% data variables.product.prodname_secret_scanning_caps %}, entrez la commande suivante.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - Pour activer le graphe de dépendances, entrez {% ifversion ghes %}la commande suivante{% else %}les commandes suivantes{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Pour désactiver l’{% data variables.product.prodname_secret_scanning %}, entrez la commande suivante.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Pour désactiver le graphe de dépendances, entrez {% ifversion ghes %}la commande suivante{% else %}les commandes suivantes{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
