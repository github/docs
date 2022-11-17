---
title: Activation de GitHub Actions avec Google Cloud Storage
intro: 'Vous pouvez activer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %} et utiliser le service Google Cloud Storage pour stocker les données générées par les exécutions de workflow.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: abbac860ed3f6f1caaec1152b426762535b8fba4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108728'
---
{% note %}

**Remarque :** La prise en charge de {% data variables.product.prodname_actions %} pour Google Cloud Storage est actuellement en version bêta et susceptible d’être modifiée.

{% endnote %}

## Prérequis

Avant d’activer {% data variables.product.prodname_actions %}, vérifiez que vous avez effectué les étapes suivantes :

* Créez votre compartiment Google Cloud Storage pour stocker les données générées par les exécutions de workflow.
* Créez un compte de service Google Cloud qui peut accéder au compartiment, puis créez une clé HMAC (Hash-based Message Authentication Code) pour le compte de service. Pour plus d’informations, consultez « [Gérer des clés HMAC pour les comptes de service](https://cloud.google.com/storage/docs/authentication/managing-hmackeys) » dans la documentation Google Cloud.

  Le compte de service doit avoir les [autorisations IAM (Identity and Access Management)](https://cloud.google.com/storage/docs/access-control/iam-permissions) suivantes pour le compartiment :

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Activation de {% data variables.product.prodname_actions %} avec Google Cloud Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Sous « Stockage d’artefacts et de journaux », sélectionnez **Google Cloud Storage** et entrez les détails de votre compartiment :

   * **URL du service** : URL du service pour votre compartiment. Il s’agit généralement de `https://storage.googleapis.com`.
   * **Nom du compartiment** : Nom de votre compartiment.
   * **ID d’accès HMAC** et **Secret HMAC** : ID d’accès et secret Google Cloud pour votre compte de stockage. Pour plus d’informations, consultez « [Gérer des clés HMAC pour les comptes de service](https://cloud.google.com/storage/docs/authentication/managing-hmackeys) » dans la documentation Google Cloud.

   ![Case d’option pour sélectionner Google Cloud Storage et champs pour la configuration](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
