---
title: Conditions à remplir pour la mise à niveau
intro: 'Avant de mettre à niveau {% data variables.product.prodname_ghe_server %}, passez en revue ces recommandations et autres conditions pour planifier votre stratégie de mise à niveau.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106876'
---
{% note %}

**Remarques :**
- Les packages de mise à niveau sont disponibles sur [enterprise.github.com](https://enterprise.github.com/releases) pour les versions prises en charge. Vérifiez la disponibilité des packages de mise à niveau dont vous aurez besoin pour effectuer la mise à niveau. Si un package n’est pas disponible, contactez le {% data variables.contact.contact_ent_support %} pour obtenir de l’aide.
- Si vous utilisez {% data variables.product.prodname_ghe_server %} Clustering, consultez « [Mise à niveau d’un cluster](/enterprise/admin/guides/clustering/upgrading-a-cluster/) » dans le Guide de {% data variables.product.prodname_ghe_server %} Clustering pour obtenir des instructions spécifiques propres au clustering.
- Les notes de publication de {% data variables.product.prodname_ghe_server %} dressent une liste complète des nouvelles fonctionnalités pour chaque version de {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez la [page concernant les versions](https://enterprise.github.com/releases).

{% endnote %}

## Recommandations

- Incluez le moins de mises à niveau possible dans votre processus de mise à niveau. Par exemple, au lieu d’effectuer une mise à niveau de {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} vers {{ enterpriseServerReleases.supported[1] }} et {{ enterpriseServerReleases.latest }}, effectuez plutôt une mise à niveau de {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} vers {{ enterpriseServerReleases.latest }}. Utilisez l’[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) pour trouver le chemin de mise à niveau de votre version actuelle.
- Si vous avez plusieurs versions de retard, mettez à niveau {% data variables.location.product_location %} vers la version la plus haute possible à chaque étape de votre processus de mise à niveau. L’utilisation de la version la plus récente possible à chaque mise à niveau vous permet de tirer parti des améliorations sur le plan des performances et des correctifs de bogues. Par exemple, vous pourriez effectuer une mise à niveau de {% data variables.product.prodname_enterprise %} 2.7 vers 2.8 et 2.10, mais en effectuant une mise à niveau de {% data variables.product.prodname_enterprise %} 2.7 vers 2.9 et 2.10, vous utilisez une version plus récente à la deuxième étape.
- Utilisez la dernière version corrective lors de la mise à niveau. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Utilisez une instance intermédiaire pour tester les étapes de mise à niveau. Pour plus d’informations, consultez « [Configuration d’une instance intermédiaire](/enterprise/admin/guides/installation/setting-up-a-staging-instance/) ».
- Quand vous exécutez plusieurs mises à niveau, attendez au moins 24 heures entre les mises à niveau de fonctionnalités pour permettre aux migrations de données et aux tâches de mise à niveau s’exécutant en arrière-plan de se terminer entièrement.
- Capturez un instantané avant de mettre à niveau votre machine virtuelle. Pour plus d’informations, consultez « [Capture d’un instantané](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot) ». 
- Vérifiez que vous disposez d’une sauvegarde récente et réussie de votre instance. Pour plus d’informations, consultez le [fichier README {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Spécifications

- Vous devez effectuer une mise à niveau à partir d’une mise en production de fonctionnalité dont l’antériorité **ne doit pas être supérieure** à deux versions. Par exemple, pour effectuer une mise à niveau vers {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}, vous devez être sur {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} ou {{ enterpriseServerReleases.supported[2] }}.
- Quand vous effectuez une mise à niveau à partir d’un package de mise à niveau, planifiez une fenêtre de maintenance pour les utilisateurs finaux de {% data variables.product.prodname_ghe_server %}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Un patch à chaud peut nécessiter un temps d’arrêt si les services affectés (comme le noyau, MySQL ou Elasticsearch) nécessitent un redémarrage de machine virtuelle ou un redémarrage de service. Vous serez averti en cas de redémarrage nécessaire. Vous pouvez effectuer le redémarrage à un moment ultérieur.
- Vous devez disposer d’un stockage racine supplémentaire quand vous effectuez une mise à niveau via une mise à jour corrective à chaud, car cette opération passe par l’installation de plusieurs versions de certains services. Si vous n’avez pas suffisamment de stockage de disque racine, vous en serez averti par des vérifications préalables.
- Quand vous effectuez une mise à niveau via une mise à jour corrective à chaud, votre instance ne peut pas être trop chargée, car cela peut avoir un impact sur le processus de mise à jour corrective à chaud.
- Avec une mise à niveau vers {% data variables.product.prodname_ghe_server %} 2.17, vos journaux d’audit sont migrés de Elasticsearch vers MySQL. Cette migration a aussi pour effet d’accroître la durée et l’espace disque nécessaires à la restauration d’un instantané. Avant de procéder à la migration, vérifiez le nombre d’octets dans vos index de journal d’audit Elasticsearch avec cette commande :
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Utilisez le nombre pour estimer la quantité d’espace disque dont les journaux d’audit MySQL auront besoin. Le script supervise aussi votre espace disque libre pendant l’importation. La supervision de ce nombre est particulièrement utile si votre espace disque libre est proche de la quantité d’espace disque nécessaire à la migration.

## Étapes suivantes

Après avoir pris connaissance de ces recommandations et exigences, vous pouvez mettre à niveau {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/) ».
