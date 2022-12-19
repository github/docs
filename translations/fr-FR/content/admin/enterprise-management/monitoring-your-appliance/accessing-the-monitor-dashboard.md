---
title: Accès au tableau de bord moniteur
intro: '{% data variables.product.prodname_ghe_server %} comprend un tableau de bord de monitoring web qui affiche les données historiques relatives à votre appliance {% data variables.product.prodname_ghe_server %}, par exemple l’utilisation du processeur et du stockage, les temps de réponse des applications et de l’authentification ainsi que l’intégrité générale du système.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: b529369813635a8cafe5f7c7ac6fc04af39001f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332367'
---
## Accès au tableau de bord moniteur

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En haut de la page, cliquez sur **Moniteur**.
![Lien du tableau de bord moniteur](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Résolution des problèmes courants d’allocation de ressources sur votre appliance

{% note %}

**Remarque** : Sachant que l’interrogation régulière de {% data variables.product.product_location %} avec des serveurs d’intégration continue (CI) ou de build peut effectivement occasionner une attaque par déni de service et les problèmes associés, nous vous recommandons d’utiliser des webhooks pour envoyer (push) des mises à jour. Pour plus d’informations, consultez « [À propos des webhooks](/enterprise/user/articles/about-webhooks/) ».

{% endnote %}

Utilisez le tableau de bord moniteur pour vous tenir informé de l’intégrité des ressources de votre appliance et prendre des décisions quant à la façon de résoudre les problèmes liées à une utilisation élevée.  

| Problème | Cause(s) possible(s) | Recommandations |
| -------- | ----------------- | --------------- |
| Utilisation élevée du processeur | Contention de machine virtuelle par d’autres services ou programmes s’exécutant sur le même hôte | Si possible, reconfigurez ces autres services ou programmes pour qu’ils utilisent moins de ressources processeur. Pour augmenter la quantité totale de ressources processeur pour la machine virtuelle, consultez « [Augmentation des ressources processeur ou mémoire](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/) ». |
| Utilisation élévée de la mémoire | Contention de machine virtuelle par d’autres services ou programmes s’exécutant sur le même hôte | Si possible, reconfigurez ces autres services ou programmes pour qu’ils utilisent moins de mémoire. Pour augmenter la quantité totale de mémoire disponible sur la machine virtuelle, consultez « [Augmentation des ressources processeur ou mémoire](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/) ». |
| Peu d’espace disque disponible | Fichiers binaires ou journaux volumineux consommant de l’espace disque | Si possible, hébergez les fichiers binaires volumineux sur un serveur distinct et compressez ou archivez les fichiers journaux. Si nécessaire, augmentez l’espace disque sur la machine virtuelle en suivant les étapes correspondant à votre plateforme dans « [Augmentation de la capacité de stockage](/enterprise/admin/guides/installation/increasing-storage-capacity/) ». |
| Temps de réponse plus longs que la normale | Souvent dus aux problèmes ci-dessus | Identifiez et corrigez les problèmes sous-jacents. Si les temps de réponse restent longs, contactez le {% data variables.contact.contact_ent_support %}. |
| Taux d’erreur élevés | Problèmes logiciels  | Contactez le {% data variables.contact.contact_ent_support %} et incluez votre bundle de support. Pour plus d’informations, consultez « [Fournir des données au support {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles) ». |
