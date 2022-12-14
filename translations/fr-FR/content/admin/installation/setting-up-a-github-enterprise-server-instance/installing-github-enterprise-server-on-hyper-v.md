---
title: "Installation de GitHub Enterprise\_Server sur Hyper-V"
intro: "Pour installer {% data variables.product.prodname_ghe_server %} sur Hyper-V, vous devez le déployer sur un ordinateur exécutant Windows Server (de la version\_2008 à la version 2019)."
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: f5b465edc4ff84be00e2749766091cc5cfb1962a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106730'
---
## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez avoir Windows Server (versions 2008 à 2019) avec prise en charge d’Hyper-V.
- La plupart des actions nécessaires pour créer votre machine virtuelle peuvent également être effectuées à l’aide du [Gestionnaire Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). Toutefois, nous vous recommandons d’utiliser l’interpréteur de ligne de commande Windows PowerShell pour la configuration initiale. Vous trouverez ci-après des exemples avec PowerShell. Pour plus d’informations, consultez le guide Microsoft « [Prise en main de Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1) ».

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Téléchargement de l’image de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Sous « {% data variables.product.prodname_dotcom %} local », sélectionnez le menu déroulant « Sélectionnez votre hyperviseur », puis cliquez sur **Hyper-V (VHD)** .
5. Cliquez sur **Télécharger pour Hyper-V (VHD)** .

## Création de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Dans PowerShell, créez une machine virtuelle de génération 1, configurez la taille en fonction du nombre de licences utilisateur et attachez l’image de {% data variables.product.prodname_ghe_server %} que vous avez téléchargée. Pour plus d’informations, consultez « [New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps) » dans la documentation Microsoft.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Remplacez `PATH_TO_DATA_DISK` par l’emplacement de création du disque. Pour plus d’informations, consultez « [New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps) » dans la documentation Microsoft.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Attachez le disque de données à votre instance. Pour plus d’informations, consultez « [Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps) » dans la documentation Microsoft.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Démarrez la machine virtuelle. Pour plus d’informations, consultez « [Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps) » dans la documentation Microsoft.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Récupérez l’adresse IP de votre machine virtuelle. Pour plus d’informations, consultez « [Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps) » dans la documentation Microsoft.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copiez l’adresse IP de la machine virtuelle et collez-la dans un navigateur web.

## Configuration de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
