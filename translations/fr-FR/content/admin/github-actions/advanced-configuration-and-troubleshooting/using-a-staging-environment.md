---
title: Utilisation d’un environnement intermédiaire
intro: 'Découvrez comment utiliser {% data variables.product.prodname_actions %} avec les instances de préproduction de {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106822'
---
## À propos des environnements intermédiaires pour {% data variables.product.product_name %}

Il peut être utile de disposer d’un environnement intermédiaire ou de test pour {% data variables.product.product_location %}. Cela permet de tester les mises à jour ou les nouvelles fonctionnalités avant de les implémenter dans l’environnement de production. Pour plus d’informations, consultez « [Configuration d’une instance intermédiaire](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance) ».

## Utilisation d’un environnement intermédiaire avec {% data variables.product.prodname_actions %}

Une façon courante de créer l’environnement intermédiaire consiste à restaurer une sauvegarde de votre instance {% data variables.product.product_name %} de production sur une nouvelle machine virtuelle dans l’environnement intermédiaire. Si vous utilisez une instance intermédiaire et prévoyez de tester la fonctionnalité de {% data variables.product.prodname_actions %}, vous devriez examiner votre configuration de stockage dans l’environnement intermédiaire.

Après avoir restauré une sauvegarde {% data variables.product.prodname_ghe_server %} sur l’instance intermédiaire, si vous essayez d’afficher des journaux d’activité ou artefacts d’exécutions de workflow {% data variables.product.prodname_actions %} existantes sur votre instance intermédiaire, vous verrez des erreurs `404`, car ces données seront absentes de votre emplacement de stockage intermédiaire. Pour résoudre les erreurs `404`, vous pouvez copier des données de production à utiliser dans votre environnement intermédiaire.

### Configuration du stockage

Au moment de configurer un environnement intermédiaire incluant une instance {% data variables.product.product_name %} avec {% data variables.product.prodname_actions %} activé, vous devez utiliser une configuration de stockage externe pour le stockage de {% data variables.product.prodname_actions %} différente de celle de votre environnement de production.

{% warning %}

**Avertissement** : si vous ne modifiez pas la configuration du stockage, il se peut que votre instance intermédiaire soit en mesure d’écrire dans le même stockage externe que celui que vous utilisez pour la production, ce qui peut entraîner une perte de données.

{% endwarning %}

Pour plus d’informations sur la configuration du stockage pour {% data variables.product.prodname_actions %}, consultez « [Prise en main de {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider) ».

### Copie de fichiers d’un emplacement de production vers un emplacement intermédiaire

Pour mettre en miroir plus précisément votre environnement de production, vous pouvez éventuellement copier des fichiers à partir de votre emplacement de stockage de production pour {% data variables.product.prodname_actions %} vers l’emplacement de stockage intermédiaire.

* Pour un compte de stockage Azure, vous pouvez utiliser [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Par exemple :

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Pour les compartiments Amazon S3, vous pouvez utiliser [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Par exemple :

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
