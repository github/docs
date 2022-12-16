---
title: Migration de votre entreprise vers le registre de conteneurs à partir du registre Docker
intro: 'Vous pouvez migrer des images Docker stockées dans le registre Docker sur {% data variables.location.product_location %} vers le {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106380'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## À propos du {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Pour plus d’informations, consultez « [Utilisation du {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) ».

Pour plus d’informations sur la configuration de {% data variables.product.prodname_registry %} pour {% data variables.location.product_location %}, consultez « [Bien démarrer avec {% data variables.product.prodname_registry %} pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) ».

## À propos de la migration à partir du registre Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Si le registre Docker sur {% data variables.location.product_location %} contient des images, vous devez migrer manuellement ces images vers le {% data variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Remarque** : {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Pour plus d’informations sur l’impact de la migration vers le {% data variables.product.prodname_container_registry %}, consultez « [Migration vers le {% data variables.product.prodname_container_registry %} depuis le registre Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry) ».

## Migration des organisations vers le {% data variables.product.prodname_container_registry %}

Vous pouvez démarrer une migration de toutes les images Docker de vos organisations vers le {% data variables.product.prodname_container_registry %}. La durée de l’opération de migration dépend du nombre total d’images à migrer et de la charge globale sur {% ifversion ghes %}votre instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Après une migration réussie, {% data variables.product.product_name %} affiche un récapitulatif, et tous les chargements futurs d’images Docker utiliseront le {% data variables.product.prodname_container_registry %}.

Si {% ifversion ghes %}un administrateur de site{% elsif ghae %}un propriétaire d’entreprise{% endif %} a configuré les notifications par e-mail pour {% data variables.location.product_location %}, vous recevrez un e-mail une fois la migration effectuée. Pour plus d’informations, consultez « [Configuration de l’e-mail pour les notifications](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications) ».

{% note %}

**{% ifversion ghes %}Remarques{% elsif ghae %}Remarque{% endif %}**  :

{%- ifversion ghes %}
- Pendant la migration, l’utilisation du processeur et de la mémoire de votre instance augmente. Pour garantir les performances de l’instance pour vos utilisateurs, {% data variables.product.company_short %} recommande de commencer une migration pendant une période d’activité réduite.
{%- endif %} {% ifversion ghes %}- {% endif %}Pendant la migration, ne modifiez pas les paramètres pour votre entreprise{% ifversion ghes %} ou exécutez `ghe-config-apply` à partir d’une session SSH administrative{% endif %}. {% ifversion ghes %} Ces actions déclenchent une exécution de configuration, qui peut redémarrer les services et {% elsif ghae %}modifier ces paramètres {% endif %} peut interrompre la migration.
{%- ifversion ghes %}
- Après la migration, la pression de stockage sur votre instance augmente en raison de la duplication des fichiers image dans le registre Docker et le {% data variables.product.prodname_container_registry %}. Une version ultérieure de {% data variables.product.product_name %} supprimera les fichiers dupliqués quand toutes les migrations seront terminées.

Pour plus d’informations sur le monitoring des performances et du stockage de {% data variables.location.product_location %}, consultez « [Accès au tableau de bord de monitoring](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard) ».
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Packages**.
1. À droite du nombre de packages à migrer, cliquez sur **Démarrer la migration**. Pendant la migration, {% data variables.product.product_name %} affiche la progression sur cette page.

Une fois la migration terminée, la page affiche les résultats. Si une migration échoue, la page montre les organisations qui détiennent le package qui a provoqué l’échec.

## Réexécution d’une migration d’organisation ayant échoué

Avant la migration, si un utilisateur a créé un package dans le {% data variables.product.prodname_container_registry %} qui a un nom identique à un package existant dans le registre Docker, la migration échoue.

1. Supprimez le conteneur affecté dans le {% data variables.product.prodname_container_registry %}. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github) ».
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. À droite du nombre de packages à migrer, cliquez sur **Réexécuter la migration**. Pendant la migration, {% data variables.product.product_name %} affiche la progression sur cette page.
1. Si la migration échoue à nouveau, recommencez depuis l’étape 1 et réexécutez la migration.
