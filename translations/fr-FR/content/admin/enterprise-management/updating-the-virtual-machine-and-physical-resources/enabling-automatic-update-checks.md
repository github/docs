---
title: Activation de la recherche de mises à jour automatiques
intro: 'Vous pouvez activer les contrôles de mise à jour automatique afin que {% data variables.product.product_location %} vérifie et télécharge la dernière version de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331887'
---
Quand un package de mise à niveau est automatiquement téléchargé pour {% data variables.product.product_location %}, vous recevez un message vous informant que vous pouvez mettre à niveau {% data variables.product.prodname_ghe_server %}. Les packages sont téléchargés dans le répertoire `/var/lib/ghe-updates` de {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server) ».

Si un patch à chaud est disponible pour une mise à niveau, le fichier `.hpkg` se télécharge automatiquement. Dans la console de gestion, vous pouvez choisir d’installer le patch à chaud immédiatement ou de planifier son installation à un moment ultérieur. Pour plus d’informations, consultez « [Mise à niveau avec un patch à chaud](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch) ».

{% tip %}

**Conseil :** Pour activer la recherche de mises à jour automatiques, {% data variables.product.product_location %} doit pouvoir se connecter à `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Cliquez sur **Oui, rechercher automatiquement les mises à jour**.
![Bouton permettant d’activer les mises à jour automatiques](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

Pour savoir si votre instance est à jour, examinez la bannière sous l’onglet Mises à jour.

![Bannière indiquant votre version de GitHub Enterprise Server](/assets/images/enterprise/management-console/up-to-date-banner.png)

Sous **Journaux**, vous pouvez voir l’état de la dernière recherche de mises à jour.

![Journaux de mise à jour](/assets/images/enterprise/management-console/update-log.png)
