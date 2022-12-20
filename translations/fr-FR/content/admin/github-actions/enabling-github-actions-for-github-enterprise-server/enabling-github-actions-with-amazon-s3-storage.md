---
title: Activation de GitHub Actions avec le stockage Amazon S3
intro: "Vous pouvez activer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %}, et utiliser le stockage Amazon\_S3 pour stocker les données générées par les exécutions de workflow."
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: dd0f4c7135def456212de3355d6f6af17076c40c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192984'
---
{% data reusables.actions.enterprise-storage-about %}

## Prérequis

{% note %}

**Remarque :** Les seuls fournisseurs de stockage S3 pris en charge par {% data variables.product.prodname_dotcom %} sont Amazon S3 et MinIO Gateway pour NAS.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

Avant d’activer {% data variables.product.prodname_actions %}, vérifiez que vous avez effectué les étapes suivantes :

* Créez votre compartiment Amazon S3 pour stocker les données générées par les exécutions de workflow. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Activation de {% data variables.product.prodname_actions %} avec un stockage Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Sous « Stockage d’artefacts et de journaux », sélectionnez **Amazon S3** et entrez les détails de votre compartiment de stockage :

   * **URL du service AWS :** URL du service pour votre compartiment. Par exemple, si votre compartiment S3 a été créé dans la région `us-west-2`, cette valeur doit être `https://s3.us-west-2.amazonaws.com`.

     Pour plus d’informations, consultez « [Points de terminaison de service AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html) » dans la documentation AWS.
   * **Compartiment AWS S3** : Nom de votre compartiment S3.
   * **Clé d’accès AWS S3** et **Clé secrète AWS S3** : ID de clé d’accès et clé secrète AWS de votre compartiment. Pour plus d’informations sur la gestion des clés d’accès AWS, consultez la « [documentation AWS Identity and Access Management](https://docs.aws.amazon.com/iam/index.html) ».

   ![Case d’option pour sélectionner Amazon S3 Storage et champs pour la configuration S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
