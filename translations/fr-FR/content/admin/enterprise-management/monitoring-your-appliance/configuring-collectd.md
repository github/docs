---
title: Configuration de collectd
intro: '{% data variables.product.prodname_enterprise %} peut collecter des données avec `collectd` et les envoyer à un serveur `collectd` externe. Parmi d’autres métriques, nous collectons un ensemble standard de données telles que l’utilisation du processeur, la consommation de la mémoire et du disque, le trafic et les erreurs d’interface réseau ainsi que la charge globale de la machine virtuelle.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106854'
---
## Configurer un serveur `collectd` externe

Si vous n’avez pas encore configuré de serveur `collectd` externe, vous devez le faire avant d’activer le transfert `collectd` sur {% data variables.product.product_location %}. Votre serveur `collectd` doit exécuter `collectd` version 5.x ou ultérieure.

1. Connectez-vous à votre serveur `collectd`.
2. Créez ou modifiez le fichier de configuration `collectd` pour charger le plug-in réseau et remplir les directives de serveur et de port avec les valeurs appropriées. Sur la plupart des distributions, il se trouve dans `/etc/collectd/collectd.conf`

Un exemple de *collectd.conf* pour exécuter un serveur `collectd` :

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Activer le transfert collectd sur {% data variables.product.prodname_enterprise %}

Par défaut, le transfert `collectd` est désactivé sur {% data variables.product.prodname_enterprise %}. Suivez les étapes ci-dessous pour activer et configurer le transfert `collectd` :

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Sous les paramètres de transfert de journal, sélectionnez **Activer le transfert collectd**.
1. Dans le champ **Adresse du serveur**, tapez l’adresse du serveur `collectd` vers lequel vous souhaitez transférer les statistiques de l’appliance {% data variables.product.prodname_enterprise %}.
1. Dans le champ **Port**, tapez le port utilisé pour se connecter au serveur `collectd`. (La valeur par défaut est 25826)
1. Dans le menu déroulant **Configuration du chiffrement**, sélectionnez le niveau de sécurité des communications avec le serveur `collectd`. (Aucun, paquets signés ou paquets chiffrés.) {% data reusables.enterprise_management_console.save-settings %}

## Exportation des données collectd avec `ghe-export-graphs`

L’outil en ligne de commande `ghe-export-graphs` exporte les données que `collectd` stocke dans des bases de données RRD. Cette commande convertit les données au format XML et les exporte sous forme de tarball unique (`.tgz`).

Son utilisation principale consiste à fournir à l’équipe de {% data variables.contact.contact_ent_support %} des données sur le niveau de performance d’une machine virtuelle, sans avoir besoin de télécharger de bundle de support complet. Il ne doit pas être inclus dans vos exportations de sauvegarde normales et il n’existe aucun équivalent d’importation. Si vous contactez le {% data variables.contact.contact_ent_support %}, il se peut que ces données vous soient demandées pour faciliter la résolution des problèmes.

### Usage

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Dépannage

### Le serveur collectd central ne reçoit pas de données

{% data variables.product.prodname_enterprise %} est fourni avec `collectd` version 5.x. `collectd` 5.x n’est pas rétrocompatible avec les versions 4.x. Votre serveur `collectd` central doit au minimum être de version 5.x pour accepter les données envoyées à partir de {% data variables.product.product_location %}.

Pour obtenir de l’aide par rapport à d’autres questions ou problèmes, contactez le {% data variables.contact.contact_ent_support %}.
