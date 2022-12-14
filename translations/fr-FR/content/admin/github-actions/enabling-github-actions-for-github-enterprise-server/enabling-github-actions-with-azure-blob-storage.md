---
title: Activation de GitHub Actions avec Stockage Blob Azure
intro: 'Vous pouvez activer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %}, et utiliser le service Stockage Blob Azure pour stocker les données générées par les exécutions de workflow.'
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
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: 856748a3219be7789f0339c43210ca204fe56d91
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192976'
---
{% data reusables.actions.enterprise-storage-about %}

## Prérequis

Avant d’activer {% data variables.product.prodname_actions %}, vérifiez que vous avez effectué les étapes suivantes :

* Créer votre compte de stockage Azure pour stocker des données de workflow. {% data variables.product.prodname_actions %} stocke ses données sous forme d’objets blob de blocs, et deux types de comptes de stockage sont pris en charge :
  * Un compte de stockage **universel** (aussi appelé `general-purpose v1` ou `general-purpose v2`) avec le niveau de performance **standard** .

    {% warning %}

    **Avertissement :** L’utilisation du niveau de performance **premium** avec un compte de stockage universel n’est pas prise en charge. Le niveau de performance **standard** doit être sélectionné au moment de créer le compte de stockage, et il n’est pas possible de le modifier ultérieurement.

    {% endwarning %}
  * Un compte de stockage **BlockBlobStorage**, qui utilise le niveau de performance **premium**.

  Pour plus d’informations sur les types de comptes de stockage Azure et les niveaux de performance, consultez la [documentation Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

## Activation de {% data variables.product.prodname_actions %} avec Stockage Blob Azure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Sous « Stockage d’artefacts et de journaux », sélectionnez **Stockage Blob Azure** et entrez la chaîne de connexion de votre compte de stockage Azure. Pour plus d’informations sur l’obtention de la chaîne de connexion de votre compte de stockage, consultez la [documentation Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

   ![Case d’option pour sélectionner le Stockage Blob Azure et le champ Chaîne de connexion](/assets/images/enterprise/management-console/actions-azure-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
