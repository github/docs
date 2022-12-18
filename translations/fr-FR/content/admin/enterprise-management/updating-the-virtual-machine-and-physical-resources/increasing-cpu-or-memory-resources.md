---
title: Augmentation des ressources processeur ou mémoire
intro: 'Vous pouvez augmenter les ressources liées au processeur ou à la mémoire pour une instance de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331863'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**Remarque :** Avant d’augmenter les ressources liées au processeur ou à la mémoire, mettez votre instance en mode maintenance.{% ifversion ip-exception-list %} Vous pouvez valider les changements apportés en configurant une liste d’exceptions IP pour autoriser l’accès à partir des adresses IP spécifiées. {% endif %} Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

{% endnote %}

## Ajout de ressources processeur ou mémoire pour AWS

{% note %}

**Remarque :** Pour ajouter des ressources processeur ou mémoire pour AWS, vous devez savoir utiliser la console de gestion AWS ou l’interface de ligne de commande `aws ec2` pour gérer les instances EC2. Pour plus d’informations sur l’utilisation des outils AWS que vous choisirez pour effectuer le redimensionnement, consultez la documentation AWS sur le [redimensionnement d’une instance Amazon EBS.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)

{% endnote %}

### Considérations relatives au redimensionnement

Avant d’augmenter les ressources processeur ou mémoire pour {% data variables.product.product_location %}, prenez connaissance des recommandations suivantes.

- **Mettez à l’échelle votre mémoire avec des processeurs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Attribuez une adresse IP élastique à l’instance**. Si vous n’avez pas affecté d’adresse IP élastique à votre instance, vous devrez ajuster les enregistrements A DNS de votre hôte {% data variables.product.prodname_ghe_server %} après le redémarrage pour prendre en compte la modification au niveau de l’adresse IP publique. Une fois que votre instance a redémarré, elle conserve l’adresse IP élastique si vous l’avez lancée dans un cloud privé virtuel (VPC). Si vous créez l’instance dans un réseau EC2-Classic, vous devez réattribuer manuellement l’adresse IP élastique à l’instance.

### Types d’instances AWS pris en charge

Vous devez déterminer le type d’instance que vous souhaitez mettre à niveau en fonction des spécifications de processeur/mémoire.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Redimensionnement pour AWS

{% note %}

**Remarque :** Pour les instances lancées dans EC2-Classic, notez à la fois l’adresse IP élastique associée à l’instance et l’ID de l’instance. Une fois que vous avez redémarré l’instance, réassociez l’adresse IP élastique.

{% endnote %}

Il n’est pas possible d’ajouter des ressources processeur ou mémoire à une instance AWS/EC2 existante. Vous devez à la place :

1. Arrêter l’instance.
2. Changer de type d’instance.
3. Démarrer l'instance.
{% data reusables.enterprise_installation.configuration-recognized %}

## Ajout de ressources processeur ou mémoire sur Microsoft Azure

{% note %}

**Remarque :** Pour ajouter des ressources processeur ou mémoire dans Microsoft Azure, vous devez savoir gérer les instances de machine virtuelle à l’aide du portail Azure, d’Azure CLI ou d’Azure PowerShell. Pour plus d’informations sur l’utilisation des outils Azure que vous choisirez pour effectuer le redimensionnement, consultez la documentation Azure sur le [changement de taille d’une machine virtuelle](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Considérations relatives au redimensionnement

Avant d’augmenter les ressources processeur ou mémoire pour {% data variables.product.product_location %}, prenez connaissance des recommandations suivantes.

- **Mettez à l’échelle votre mémoire avec des processeurs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Attribuez une adresse IP statique à l’instance**. Si vous n’avez pas affecté d’adresse IP statique à votre instance, vous devrez peut-être ajuster les enregistrements A DNS de votre hôte {% data variables.product.prodname_ghe_server %} après le redémarrage pour prendre en compte la modification au niveau de l’adresse IP publique.

### Tailles d’instance Microsoft Azure prises en charge

Vous devez déterminer la taille d’instance que vous souhaitez mettre à niveau en fonction des spécifications de processeur/mémoire.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Redimensionnement pour Microsoft Azure

Vous pouvez effectuer un scale-up de la machine virtuelle en changeant sa taille. Le changement de taille provoquera son redémarrage. Dans certains cas, vous devez commencer par libérer la machine virtuelle. Cela peut se produire si la nouvelle taille n’est pas disponible sur le cluster matériel qui héberge actuellement la machine virtuelle. 

1. Consultez la documentation Azure sur le [changement de taille d’une machine virtuelle](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm) pour savoir comment procéder.
{% data reusables.enterprise_installation.configuration-recognized %}

## Ajout de ressources processeur ou mémoire pour OpenStack KVM

Il n’est pas possible d’ajouter des ressources processeur ou mémoire à une instance OpenStack KVM existante. Vous devez à la place :

1. Capturer un instantané de l’instance active.
2. Arrêter l’instance.
3. Sélectionner une nouvelle version d’instance qui a les ressources processeur et/ou de mémoire souhaitées.

## Ajout de ressources processeur ou mémoire pour VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Utilisez le client vSphere pour vous connecter à l’hôte VMware ESXi.
2. Arrêtez {% data variables.product.product_location %}.
3. Sélectionnez la machine virtuelle, puis cliquez sur **Modifier les paramètres**.
4. Sous « Matériel », ajustez les ressources processeur et/ou mémoire allouées à la machine virtuelle en fonction des besoins : ![Ressources d’installation VMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Pour démarrer la machine virtuelle, cliquez sur **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
