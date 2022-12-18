---
title: "Installation de GitHub Enterprise\_Server sur Google Cloud\_Platform"
intro: 'Pour installer {% data variables.product.prodname_ghe_server %} sur Google Cloud Platform, vous devez le déployer sur un type d’ordinateur pris en charge et utiliser un disque standard persistant ou un disque SSD persistant.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: 0fffebece94753365e1b98f014f0514cdef4f98a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104858'
---
## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez disposer d’un compte Google Cloud Platform capable de lancer des instances de machine virtuelle GCE (Google Compute Engine). Pour plus d’informations, consultez le [site web Google Cloud Platform](https://cloud.google.com/) et la [documentation Google Cloud Platform](https://cloud.google.com/docs/).
- La plupart des actions nécessaires pour lancer votre instance peuvent également être effectuées à l’aide de la [console Google Cloud Platform](https://cloud.google.com/compute/docs/console). Toutefois, nous vous recommandons d’installer l’outil en ligne de commande gcloud compute pour la configuration initiale. Vous trouverez ci-dessous des exemples d’utilisation de l’outil en ligne de commande gcloud compute. Pour plus d’informations, consultez le guide d’installation et de configuration de « [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) » dans la documentation Google.

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Détermination du type de machine

Avant de lancer {% data variables.product.product_location %} sur Google Cloud Platform, vous devez déterminer le type de machine qui répond le mieux aux besoins de votre organisation. Pour voir la configuration minimale requise pour {% data variables.product.product_name %}, consultez « [Configuration minimale requise](#minimum-requirements) ».

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} recommande une machine à usage général et à mémoire élevée pour {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [À propos des familles de machines](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types) » dans la documentation Google Compute Engine.

## Sélection de l’image de {% data variables.product.prodname_ghe_server %}

1. À l’aide de l’outil en ligne de commande [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/), listez les images publiques de {% data variables.product.prodname_ghe_server %} :
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Notez le nom de la dernière image GCE de {% data variables.product.prodname_ghe_server %}.

## Configuration du pare-feu

Les machines virtuelles GCE sont créées comme membres d’un réseau avec un pare-feu. Pour le réseau associé à la machine virtuelle {% data variables.product.prodname_ghe_server %}, vous devez configurer le pare-feu pour autoriser les ports requis listés dans le tableau ci-dessous. Pour plus d’informations sur les règles de pare-feu sur Google Cloud Platform, consultez le guide Google « [Présentation des règles de pare-feu](https://cloud.google.com/vpc/docs/firewalls) ».

1. À l’aide de l’outil en ligne de commande gcloud compute, créez le réseau. Pour plus d’informations, consultez « [gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create) » dans la documentation Google.
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Créez une règle de pare-feu pour chacun des ports du tableau ci-dessous. Pour plus d’informations, consultez « [gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/) » dans la documentation Google.
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Ce tableau identifie les ports requis et décrit l’utilisation de chacun d’eux.

   {% data reusables.enterprise_installation.necessary_ports %}

## Allocation d’une IP statique et affectation de celle-ci à la machine virtuelle

S’il s’agit d’une appliance de production, nous vous recommandons vivement de réserver une adresse IP externe statique et de l’affecter à la machine virtuelle {% data variables.product.prodname_ghe_server %}. Sinon, l’IP publique de la machine virtuelle ne sera pas conservée après les redémarrages. Pour plus d’informations, consultez le guide Google « [Réserver une adresse IP externe statique](https://cloud.google.com/compute/docs/configure-instance-ip-addresses) ».

Dans les configurations de production à haute disponibilité, des adresses IP statiques distinctes doivent être affectées aux appliances principales et réplicas.

## Création de l’instance {% data variables.product.prodname_ghe_server %}

Pour créer l’instance {% data variables.product.prodname_ghe_server %}, vous devez créer une instance GCE avec votre image de {% data variables.product.prodname_ghe_server %} et attacher un volume de stockage supplémentaire pour vos données d’instance. Pour plus d’informations, consultez « [Considérations matérielles](#hardware-considerations) ».

1. À l’aide de l’outil en ligne de commande gcloud compute, créez un disque de données à utiliser comme volume de stockage attaché pour vos données d’instance et configurez la taille en fonction du nombre de licences utilisateur. Pour plus d’informations, consultez « [gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create) » dans la documentation Google.
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Créez ensuite une instance avec le nom de l’image de {% data variables.product.prodname_ghe_server %} que vous avez sélectionnée, puis attachez le disque de données. Pour plus d’informations, consultez « [gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create) » dans la documentation Google.
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

## Configuration de l’instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
