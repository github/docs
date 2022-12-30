---
title: Configuration d’une supervision externe
intro: 'Vous pouvez superviser les ressources système de base sur votre appliance {% data variables.product.prodname_ghe_server %} à l’aide des protocoles SNMP ou des protocoles de collecte des statistiques collectés.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Set up external monitoring
ms.openlocfilehash: 43fa6a7b0d6d4686a69460f23f38126ec5457613
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332471'
---
## À propos du protocole SNMP

SNMP (Simple Network Management Protocol) est une méthode de supervision des appareils et des serveurs de réseau largement prise en charge. Désactivé par défaut, le protocole SNMP peut être configuré via le tableau de bord moniteur de {% data variables.product.prodname_enterprise %}. Le port UDP 161 doit être ouvert et accessible à partir de votre station de gestion réseau. Pour plus d’informations, consultez « [Supervision avec SNMP](/enterprise/admin/guides/installation/monitoring-using-snmp/) ».

## À propos de collectd

collectd est une collection de statistiques open source et un démon de création de rapports avec une prise en charge intégrée de l’écriture dans les fichiers RRD. Les statistiques sur l’utilisation du processeur, la consommation de mémoire et de disque, le trafic et les erreurs d’interface réseau et la charge système peuvent être transférées sur un serveur collectd externe où des graphes, des analyses et des alertes peuvent être configurés avec un large éventail d’outils et de plug-ins disponibles. Pour configurer le transfert `collectd`, consultez « [Configuration de collectd](/enterprise/admin/guides/installation/configuring-collectd/) ».

Par ailleurs, les outils de supervision intégrés aux plateformes de virtualisation sous-jacentes peuvent aussi être utilisés pour procéder à une supervision de base des ressources système et générer des alertes. Pour plus d’informations, consultez la documentation [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) et [VMware vSphere Monitoring](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf).
