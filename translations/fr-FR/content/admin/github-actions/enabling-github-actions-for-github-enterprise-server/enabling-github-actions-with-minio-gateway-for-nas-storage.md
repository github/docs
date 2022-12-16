---
title: Activation de GitHub Actions avec la passerelle MinIO pour stockage NAS
intro: Vous pouvez activer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %} et utiliser la passerelle MinIO pour le stockage NAS pour stocker les données générées par les exécutions de workflows.
permissions: Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.
versions:
  ghes: '*'
type: how_to
topics:
- Actions
- Enterprise
- Infrastructure
- Storage
redirect_from:
- /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: bb738d04d54234704f3278422c1f1ef075956640
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106868"
---
{% data reusables.actions.minio-gateways-removal %}

## Prérequis

Avant d’activer {% data variables.product.prodname_actions %}, vérifiez que vous avez effectué les étapes suivantes :

* Pour éviter une contention des ressources sur l’appliance, nous vous recommandons d’héberger MinIO séparément de {% data variables.location.product_location %}.
* Créez votre compartiment pour stocker les données du workflow. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Activation de {% data variables.product.prodname_actions %} avec la passerelle MinIO pour stockage NAS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Sous « Stockage d’artefacts et de journaux », sélectionnez **Amazon S3** et entrez les détails de votre compartiment de stockage :

   * **URL du service AWS** : URL de votre service MinIO. Par exemple : `https://my-minio.example:9000`.
   * **Compartiment AWS S3** : Nom de votre compartiment S3.
   * **Clé d’accès AWS S3** et **Clé secrète AWS S3** : `MINIO_ACCESS_KEY` et `MINIO_SECRET_KEY` utilisés pour votre instance MinIO.

   ![Case d’option permettant de sélectionner le stockage Amazon S3 et champs pour la configuration MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Sous « Stockage d’artefacts et de journaux », sélectionnez **Forcer le style de chemin**.

   ![Case à cocher pour Forcer le style de chemin](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
