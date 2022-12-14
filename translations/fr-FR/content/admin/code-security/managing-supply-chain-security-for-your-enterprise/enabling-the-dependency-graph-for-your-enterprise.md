---
title: Activation du graphe de dépendances pour votre entreprise
intro: Vous pouvez autoriser les utilisateurs à identifier les dépendances de leurs projets en activant le graphe des dépendances.
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: d0ef8c345039047a01b6b88a4b9d3f8300ef11c1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107188'
---
## À propos du graphe de dépendances

{% data reusables.dependabot.about-the-dependency-graph %} Pour plus d’informations, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) »

Une fois que vous avez activé le graphe des dépendances pour votre entreprise, vous pouvez activer {% data variables.product.prodname_dependabot %} afin de détecter les dépendances non sécurisées dans votre dépôt{% ifversion ghes %} et corriger automatiquement les vulnérabilités{% endif %}. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».

{% ifversion ghes %} Vous pouvez activer le graphe des dépendances via la {% data variables.enterprise.management_console %} ou l’interpréteur de commandes d’administration. Nous vous recommandons d’utiliser la {% data variables.enterprise.management_console %} à moins que {% data variables.location.product_location %} utilise le clustering.

## Activation du graphe de dépendances via la {% data variables.enterprise.management_console %}

Si {% data variables.location.product_location %} utilise le clustering, vous ne pouvez pas activer le graphe des dépendances avec la {% data variables.enterprise.management_console %} et devez utiliser à la place l’interpréteur de commandes d’administration. Pour plus d’informations, consultez « [Activation du graphe de dépendances via l’interpréteur de commandes d’administration](#enabling-the-dependency-graph-via-the-administrative-shell) ».

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Sous « Sécurité », cliquez sur **Graphe de dépendances**.
![Case à cocher pour activer ou désactiver le graphe de dépendances](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Cliquez sur **Accéder à votre instance**.

## Activation du graphe de dépendances via l’interpréteur de commandes d’administration

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. Dans l’interpréteur de commandes d’administration, activez le graphe des dépendances sur {% data variables.location.product_location %} : {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. Revenez à {% data variables.product.prodname_ghe_server %}.
