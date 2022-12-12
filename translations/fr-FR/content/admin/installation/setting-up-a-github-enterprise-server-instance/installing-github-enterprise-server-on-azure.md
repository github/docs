---
title: Installation de GitHub Enterprise Server sur Azure
intro: 'Pour installer {% data variables.product.prodname_ghe_server %} sur Azure, vous devez le déployer sur une instance à mémoire optimisée qui prend en charge le stockage Premium.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 7d5d1024083e448785ca1429ffd71e343e7cd507
ms.sourcegitcommit: 152a2399e22f476eba91a74d1980b96f468f4d2c
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160864'
---
Vous pouvez déployer {% data variables.product.prodname_ghe_server %} sur Azure international ou Azure Government.

## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez disposer d’un compte Azure capable de provisionner de nouvelles machines. Pour plus d’informations, consultez le [site web Microsoft Azure](https://azure.microsoft.com).
- La plupart des actions nécessaires pour lancer votre machine virtuelle peuvent également être effectuées à l’aide du portail Azure. Toutefois, nous vous recommandons d’installer l’interface de ligne de commande (CLI) Azure pour la configuration initiale. Vous trouverez ci-dessous des exemples d’utilisation d’Azure CLI 2.0. Pour plus d’informations, consultez le guide Azure « [Comment installer l’interface Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest) ».

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Détermination du type de machine virtuelle

Avant de lancer {% data variables.location.product_location %} sur Azure, vous devez déterminer le type de machine qui répond le mieux aux besoins de votre organisation. Pour plus d’informations sur les machines à mémoire optimisée, consultez [Tailles de machine virtuelle à mémoire optimisée](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory) dans la documentation Microsoft Azure. Pour voir les exigences minimales de ressources pour {% data variables.product.product_name %}, consultez « [Configuration minimale requise](#minimum-requirements) ».


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## Création de la machine virtuelle {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Recherchez l’image de l’appliance {% data variables.product.prodname_ghe_server %} la plus récente. Pour plus d’informations sur la commande `vm image list`, consultez « [`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list) » dans la documentation Microsoft.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Créez une machine virtuelle avec l’image de l’appliance que vous avez trouvée. Pour plus d’informations, consultez « [`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create) » dans la documentation Microsoft.

  Passez des options pour le nom de votre machine virtuelle, le groupe de ressources, la taille de votre machine virtuelle, le nom de votre région Azure préférée, le nom de la machine virtuelle d’image de l’appliance que vous avez obtenu à l’étape précédente et la référence SKU de stockage pour le stockage Premium. Pour plus d’informations sur les groupes de ressources, consultez « [Groupes de ressources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups) » dans la documentation Microsoft.

  ```shell
  $ az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
  ```

3. Configurez les paramètres de sécurité sur votre machine virtuelle pour ouvrir les ports requis. Pour plus d’informations, consultez « [`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port) » dans la documentation Microsoft. Consultez le tableau ci-dessous pour obtenir une description de chaque port afin de déterminer les ports que vous devez ouvrir.

  ```shell
  $ az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
  ```

  Ce tableau identifie le rôle de chaque port.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Créez un disque de données non chiffré, attachez-le à la machine virtuelle et configurez la taille en fonction du nombre de licences utilisateur. Pour plus d’informations, consultez « [`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach) » dans la documentation Microsoft.

  Passez des options pour le nom de votre machine virtuelle (par exemple, `ghe-acme-corp`), le groupe de ressources, la référence SKU de stockage Premium, la taille du disque (par exemple, `200`) et un nom pour le disque dur virtuel obtenu.

  ```shell
  $ az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Remarque :** Pour que les instances de non-production disposent d’un débit d’E/S suffisant, la taille minimale recommandée du disque est de 150 Gio avec cache en lecture/écriture activé (`--caching ReadWrite`).

   {% endnote %}

## Configuration de la machine virtuelle {% data variables.product.prodname_ghe_server %}

1. Avant de configurer la machine virtuelle, vous devez attendre qu’elle passe à l’état ReadyRole. Vérifiez l’état de la machine virtuelle avec la commande `vm list`. Pour plus d’informations, consultez « [`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list) » dans la documentation Microsoft.
  ```shell
  $ az vm list -d -g RESOURCE_GROUP -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **Remarque :** Azure ne crée pas automatiquement une entrée FQDNS pour la machine virtuelle. Pour plus d’informations, consultez le guide Azure « [Créer un nom de domaine complet pour une machine virtuelle Linux dans le portail Azure](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn) ».
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Fonctionnalités d’extension Azure

{% data variables.product.product_name %} ne prend pas en charge l’installation des fonctionnalités d’extension Azure. L’image {% data variables.product.prodname_ghe_server %} est fournie avec un package `waagent` personnalisé qui prend uniquement en charge les fonctions de gestion de machines virtuelles de base et bloque les fonctions de gestion de machines virtuelles avancées. 

Pour éviter l’instabilité du système de votre instance {% data variables.product.prodname_ghe_server %}, le service `walinuxagent` est exécuté intentionnellement dans {% data variables.product.prodname_ghe_server %} en mode restreint, ce qui empêche explicitement l’agent de pouvoir installer d’autres agents. Les fonctionnalités de gestion de machines virtuelles qui s’appuient sur des agents et extensions autres que ceux fournis avec l’image {% data variables.product.prodname_ghe_server %}, comme l’extension Monitoring Agent pour Azure Insights ou Sauvegarde Azure, ne sont pas prises en charge.

Étant donné que {% data variables.product.product_name %} exécute un système d’exploitation Linux personnalisé avec uniquement les applications et services nécessaires, l’installation ou la mise à jour manuelle des packages de système d’exploitation remplace ces personnalisations et peut entraîner un comportement inattendu. Pour plus d’informations, consultez « [Vue d’ensemble du système](/admin/overview/system-overview) ».

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
