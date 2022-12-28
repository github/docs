---
title: "Installation de GitHub Enterprise\_Server sur OpenStack\_KVM"
intro: 'Pour installer {% data variables.product.prodname_ghe_server %} sur OpenStack KVM, vous devez disposer d’un accès OpenStack et télécharger l’image QCOW2 {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 105201d2759b333d297278aa7fe32a9544c68839
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884954'
---
## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez avoir accès à une installation d’OpenStack Horizon, l’interface utilisateur web pour les services OpenStack. Pour plus d’informations, consultez la [documentation Horizon](https://docs.openstack.org/horizon/latest/).

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Téléchargement de l’image de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Sous « {% data variables.product.prodname_dotcom %} On-premises », sélectionnez le menu déroulant « Select your hypervisor » (Sélectionnez votre hyperviseur), puis cliquez sur **OpenStack KVM (QCOW2)** .
5. Cliquez sur **Télécharger pour OpenStack KVM (QCOW2)** .

## Création de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Dans OpenStack Horizon, chargez l’image de {% data variables.product.prodname_ghe_server %} que vous avez téléchargée. Pour obtenir des instructions, consultez la section « Upload an image » (Charger une image) du guide OpenStack « [Upload and manage images](https://docs.openstack.org/horizon/latest/user/manage-images.html) » (Charger et gérer des images).
{% data reusables.enterprise_installation.create-attached-storage-volume %} Pour obtenir des instructions, consultez le guide OpenStack « [Create and manage volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html) » (Créer et gérer des volumes).
3. Créez un groupe de sécurité et ajoutez une nouvelle règle de groupe de sécurité pour chaque port indiqué dans le tableau ci-dessous. Pour obtenir des instructions, consultez le guide OpenStack « [Configure access and security for instances](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html) » (Configurer l’accès et la sécurité pour les instances).

  {% data reusables.enterprise_installation.necessary_ports %}
4. Si vous le souhaitez, associez une IP flottante à l’instance. Selon votre configuration OpenStack, vous devrez peut-être allouer une IP flottante au projet et l’associer à l’instance. Contactez votre administrateur système pour déterminer si c’est le cas pour vous. Pour plus d’informations, consultez « [Allocate a floating IP address to an instance](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance) » (Allouer une adresse IP flottante à une instance) dans la documentation OpenStack.
5. Lancez {% data variables.product.product_location %} en utilisant l’image, le volume de données et le groupe de sécurité créés aux étapes précédentes. Pour obtenir des instructions, consultez le guide OpenStack « [Launch and manage instances](https://docs.openstack.org/horizon/latest/user/launch-instances.html) » (Lancer et gérer des instances).

## Configuration de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
