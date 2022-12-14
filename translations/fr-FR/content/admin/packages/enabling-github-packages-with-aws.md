---
title: "Activation de GitHub\_Packages avec AWS"
intro: 'Configurez {% data variables.product.prodname_registry %} en faisant d’AWS votre stockage externe.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104814'
---
{% warning %}

**Avertissements :**
- Il est essentiel de configurer les stratégies d’accès restrictives dont vous avez besoin pour votre compartiment de stockage, car {% data variables.product.company_short %} n’applique pas d’autorisations d’objet spécifiques ou de listes de contrôle d’accès (ACL) supplémentaires à la configuration de votre compartiment de stockage. Par exemple, si vous rendez votre compartiment public, les données du compartiment sont accessibles sur l’Internet public. Pour plus d’informations, consultez « [Setting bucket and object access permissions](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html) » (Définition des autorisations d’accès aux compartiments et aux objets) dans la documentation AWS.
- Nous vous recommandons d’utiliser un compartiment dédié pour {% data variables.product.prodname_registry %}, séparé du compartiment que vous utilisez pour le stockage {% data variables.product.prodname_actions %}.
- Veillez à configurer le compartiment à utiliser à l’avenir. Nous vous déconseillons de modifier votre stockage après avoir commencé à utiliser {% data variables.product.prodname_registry %}.

{% endwarning %}

## Prérequis

Pour pouvoir activer et configurer {% data variables.product.prodname_registry %} sur {% data variables.product.product_location_enterprise %}, vous devez préparer votre compartiment de stockage AWS. Pour préparer votre compartiment de stockage AWS, nous vous recommandons de consulter la [documentation AWS](https://docs.aws.amazon.com/index.html) officielle.

Vérifiez que votre ID de clé d’accès et votre secret AWS disposent des autorisations suivantes :
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Activation de {% data variables.product.prodname_registry %} avec le stockage externe AWS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. Sous « Stockage de packages », sélectionnez **Amazon S3** et entrez les détails de votre compartiment de stockage :
    - **URL du service AWS :** URL du service pour votre compartiment. Par exemple, si votre compartiment S3 a été créé dans la `us-west-2 region`, cette valeur doit être `https://s3.us-west-2.amazonaws.com`.

      Pour plus d’informations, consultez « [Points de terminaison de service AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html) » dans la documentation AWS.

    - **Compartiment AWS S3 :** Nom de votre compartiment S3 dédié à {% data variables.product.prodname_registry %}.
    - **Clé d’accès AWS S3** et **Clé secrète AWS S3** : ID de clé d’accès et clé secrète AWS permettant d’accéder à votre compartiment.

      Pour plus d’informations sur la gestion des clés d’accès AWS, consultez la « [documentation relative à AWS Identity and Access Management](https://docs.aws.amazon.com/iam/index.html) ».

    ![Zones d’entrée pour les détails de votre compartiment AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Étapes suivantes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
