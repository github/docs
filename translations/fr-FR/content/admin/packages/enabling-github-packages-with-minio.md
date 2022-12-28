---
title: "Activation de GitHub\_Packages avec MinIO"
intro: 'Configurez {% data variables.product.prodname_registry %} en faisant de MinIO votre stockage externe.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 2e7d76ee696dfbcd2369c577ef2d2ee803a09638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104813'
---
{% warning %}

**Avertissements :**
- Il est essentiel de définir les stratégies d’accès restrictives dont vous avez besoin pour votre compartiment de stockage, car {% data variables.product.company_short %} n’applique pas d’autorisations d’objet spécifiques ou de listes de contrôle d’accès (ACL) supplémentaires à la configuration de votre compartiment de stockage. Par exemple, si vous rendez votre compartiment public, les données du compartiment sont accessibles sur l’Internet public.
- Nous vous recommandons d’utiliser un compartiment dédié pour {% data variables.product.prodname_registry %}, séparé du compartiment que vous utilisez pour le stockage {% data variables.product.prodname_actions %}.
- Veillez à configurer le compartiment à utiliser à l’avenir. Nous vous déconseillons de modifier votre stockage après avoir commencé à utiliser {% data variables.product.prodname_registry %}.

{% endwarning %}

## Prérequis

Pour pouvoir activer et configurer {% data variables.product.prodname_registry %} sur {% data variables.product.product_location_enterprise %}, vous devez préparer votre compartiment de stockage MinIO. Pour configurer rapidement un compartiment MinIO et mieux vous orienter dans les options de personnalisation de MinIO, consultez « [Démarrage rapide : Configuration de votre compartiment de stockage MinIO pour {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages) ».

Vérifiez que votre ID de clé d’accès de stockage externe et votre secret MinIO disposent des autorisations suivantes :
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Activation de {% data variables.product.prodname_registry %} avec le stockage externe MinIO

Même si, pour le moment, MinIO n’apparaît pas dans l’interface utilisateur sous « Stockage de package », MinIO est bien pris en charge par {% data variables.product.prodname_registry %} sur {% data variables.product.prodname_enterprise %}. Notez également que le stockage d’objet de MinIO est compatible avec l’API S3 et que vous pouvez entrer les détails du compartiment MinIO à la place des détails d’AWS S3.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. Sous « Stockage de packages », sélectionnez **Amazon S3**.
1. Entrez les détails de votre compartiment de stockage MinIO dans les paramètres de stockage AWS.
    - **URL du service AWS :** URL d’hébergement de votre compartiment MinIO.
    - **Compartiment AWS S3 :** Nom de votre compartiment MinIO compatible S3 dédié à {% data variables.product.prodname_registry %}.
    - **Clé d’accès AWS S3** et **Clé secrète AWS S3** : Entrez l’ID de clé d’accès et la clé secrète MinIO permettant d’accéder à votre compartiment.

    ![Zones d’entrée pour les détails de votre compartiment AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Étapes suivantes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
