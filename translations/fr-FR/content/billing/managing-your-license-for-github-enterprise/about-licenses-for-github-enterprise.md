---
title: À propos des licences pour GitHub Enterprise
intro: '{% ifversion ghec %}Si vous déployez {% data variables.product.prodname_ghe_server %} en plus d’utiliser {% data variables.product.prodname_ghe_cloud %}, vous{% else %}Vous{% endif %} pouvez synchroniser l’utilisation de votre licence entre les déploiements{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %}, et utiliser un fichier de licence pour déverrouiller chaque instance de {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910510'
---
## À propos de la gestion des licences pour {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Pour vous assurer que le même utilisateur ne consomme pas plusieurs licences pour plusieurs déploiements d’entreprise, vous pouvez synchroniser l’utilisation des licences entre vos déploiements {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}.

Pour utiliser une instance de {% data variables.product.prodname_ghe_server %}, vous devez charger un fichier de licence que {% data variables.product.company_short %} fournit lors de l’achat, du renouvellement ou de l’ajout de licences utilisateur à {% data variables.product.prodname_enterprise %}.

## À propos de la synchronisation de l’utilisation des licences pour {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Pour plus d’informations, consultez « [Synchronisation de l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».

## À propos des fichiers de licence pour {% data variables.product.prodname_enterprise %}

Quand vous achetez ou renouvelez {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} fournit un fichier de licence {% ifversion ghec %}pour vos déploiements de {% data variables.product.prodname_ghe_server %}{% elsif ghes %}pour {% data variables.product.product_location_enterprise %}{% endif %}. Un fichier de licence a une date d’expiration et contrôle le nombre de personnes qui peuvent utiliser {% data variables.product.product_location_enterprise %}. Après avoir téléchargé et installé {% data variables.product.prodname_ghe_server %}, vous devez charger le fichier de licence pour déverrouiller l’application à utiliser.

Pour plus d’informations sur le téléchargement de votre fichier de licence, consultez « [Téléchargement de votre licence pour {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise) ». 

Pour plus d’informations sur le chargement de votre fichier de licence, consultez {% ifversion ghec %}« [Chargement d’une nouvelle licence sur {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}« [Chargement d’une nouvelle licence sur {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server). »{% endif %}

Si votre licence expire, vous ne pourrez pas accéder à {% data variables.product.prodname_ghe_server %} via un navigateur web ou Git. Si nécessaire, vous pourrez utiliser des utilitaires de ligne de commande pour sauvegarder toutes vos données. Pour plus d’informations, consultez {% ifversion ghec %}« [Configuration de sauvegardes sur votre appliance]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance) » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}« [Configuration des sauvegardes sur votre appliance](/admin/guides/installation/configuring-backups-on-your-appliance). » {% endif %}

Si vous avez des questions sur le renouvellement de votre licence, contactez l’{% data variables.contact.contact_enterprise_sales %}.

## Pour aller plus loin

- « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) »
- Site web [Versions {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance) »
