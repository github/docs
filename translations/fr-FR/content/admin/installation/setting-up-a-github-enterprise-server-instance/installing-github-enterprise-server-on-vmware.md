---
title: Installation de GitHub Enterprise Server sur VMware
intro: 'Pour installer {% data variables.product.prodname_ghe_server %} sur VMware, vous devez télécharger le client VMware vSphere, le logiciel {% data variables.product.prodname_ghe_server %}, puis déployer ce dernier.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: f9e81c624f93c7478eed04b65b3ef43a69ef9291
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147859409'
---
## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez disposer d’un hyperviseur VMware vSphere ESXi, appliqué à une machine nue, qui exécutera {% data variables.product.product_location %}. Nous prenons en charge les versions 5.5 à 6.7 pour {% data variables.product.prodname_ghe_server %} 3.4 et versions antérieures. ESX version 7.0 est pris en charge pour {% data variables.product.prodname_ghe_server %} 3.5 et versions ultérieures. L’hyperviseur ESXi est gratuit et n’inclut pas le serveur vCenter Server (facultatif). Pour plus d’informations, consultez la [documentation VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html).
- Vous aurez besoin d’un accès à un client vSphere. Si vous avez vCenter Server, vous pouvez utiliser le client web vSphere. Pour plus d’informations, consultez le guide VMware « [Log in to vCenter Server by Using the vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html) » (Se connecter à vCenter Server à l’aide du client web vSphere).

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Téléchargement de l’image de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Sous « {% data variables.product.prodname_dotcom %} On-premises », sélectionnez le menu déroulant « Select your hypervisor » (Sélectionnez votre hyperviseur), puis cliquez sur **VMware ESXi/vSphere (OVA)** .
5. Cliquez sur **Télécharger pour VMware ESXi/vSphere (OVA)** .

## Création de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. À l’aide du client Windows vSphere ou du client web vCenter, importez l’image de {% data variables.product.prodname_ghe_server %} que vous avez téléchargée. Pour obtenir des instructions, consultez le guide VMware « [Deploy an OVF or OVA Template](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html) » (Déployer un modèle OVF ou OVA).
    - Quand vous sélectionnez un magasin de données, choisissez-en un avec suffisamment d’espace pour héberger les disques de la machine virtuelle. Pour connaître les spécifications matérielles minimales recommandées pour la taille de votre instance, consultez « [Considérations matérielles](#hardware-considerations) ». Nous vous recommandons un provisionnement statique avec mise à zéro lente.
    - Laissez la case **Power on after deployment** (Mise sous tension après le déploiement) décochée, car vous devrez ajouter un volume de stockage attaché pour vos données de dépôt après le provisionnement de la machine virtuelle.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Pour obtenir des instructions, consultez le guide VMware « [Add a New Hard Disk to a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html) » (Ajouter un nouveau disque dur à une machine virtuelle).

## Configuration de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
