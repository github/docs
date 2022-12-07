---
title: Mise à niveau d’un cluster
intro: 'Utilisez l’interpréteur de commandes d’administration (SSH) pour mettre à niveau un cluster {% data variables.product.prodname_ghe_server %} vers la dernière version.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: 040fe0d315f440c8d5489b04f808dbe1f6c67972
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106893'
---
## Mise à niveau avec un patch à chaud
{% data reusables.enterprise_installation.hotpatching-explanation %} Le script d’installation de patch à chaud installe le patch à chaud sur chaque nœud du cluster et redémarre les services dans le bon ordre pour éviter un temps d’arrêt.

1. Sauvegardez vos données avec [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. Dans l’interpréteur de commandes d’administration d’un nœud quelconque, utilisez la commande `ghe-cluster-hotpatch` pour installer le dernier patch à chaud. Vous pouvez indiquer l’URL d’un patch à chaud ou télécharger manuellement ce dernier et spécifier un nom de fichier local.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

## Mise à niveau avec un package de mise à niveau
Utilisez un package de mise à niveau pour mettre à niveau un cluster {% data variables.product.prodname_ghe_server %} vers la dernière mise en production de fonctionnalité. Par exemple, vous pouvez effectuer une mise à niveau de `2.11` vers `2.13`.

### Préparation à une mise à niveau

1. Examinez la [configuration réseau du cluster](/enterprise/admin/guides/clustering/cluster-network-configuration) pour la version vers laquelle vous effectuez la mise à niveau, puis mettez à jour votre configuration, si nécessaire.
2. Sauvegardez vos données avec [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Planifiez une fenêtre de maintenance pour les utilisateurs finaux de votre cluster {% data variables.product.prodname_ghe_server %}, car il ne pourra pas être utilisé normalement pendant la mise à niveau. Le mode maintenance bloque l’accès des utilisateurs et empêche les modifications de données pendant la mise à niveau du cluster.
4. Dans la [page de téléchargement de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/download) , copiez l’URL du fichier *.pkg* de mise à niveau dans le Presse-papiers.
5. Dans l’interpréteur de commandes d’administration d’un nœud quelconque, utilisez la commande `ghe-cluster-each` avec `curl` pour télécharger le package de mise en production sur chaque nœud en une seule étape. Utilisez l’URL que vous avez copiée à l’étape précédente comme argument.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://<em>PACKAGE-URL</em>.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. Identifiez le nœud MySQL principal, qui est défini par `mysql-master = <hostname>` dans `cluster.conf`. Ce nœud sera mis à niveau en dernier.

### Mise à niveau des nœuds du cluster

1. Activez le mode maintenance en fonction de votre fenêtre planifiée en vous connectant à l’interpréteur de commandes d’administration d’un nœud du cluster et en exécutant `ghe-cluster-maintenance -s`.
2. **À l’exception du nœud MySQL principal**, connectez-vous à l’interpréteur de commandes d’administration de chaque nœud {% data variables.product.prodname_ghe_server %}.
Exécutez la commande `ghe-upgrade` en indiquant le nom de fichier du package que vous avez téléchargé à l’étape 4 de [préparation à la mise à niveau](#preparing-to-upgrade) :
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. Le processus de mise à niveau redémarre le nœud une fois qu’il est arrivé à son terme. Vérifiez que vous pouvez effectuer un test `ping` sur chaque nœud qui a redémarré.
4. Connectez-vous à l’interpréteur de commandes d’administration du nœud MySQL principal. Exécutez la commande `ghe-upgrade` en indiquant le nom de fichier du package que vous avez téléchargé à l’étape 4 de [préparation à la mise à niveau](#preparing-to-upgrade) :
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. Le processus de mise à niveau redémarre le nœud MySQL principal une fois qu’il est arrivé à son terme. Vérifiez que vous pouvez effectuer un test `ping` sur chaque nœud qui a redémarré.{% ifversion ghes %}
6. Connectez-vous à l’interpréteur de commandes d’administration du nœud MySQL principal et exécutez la commande `ghe-cluster-config-apply`.
7. Une fois que la commande `ghe-cluster-config-apply` a abouti, vérifiez que les services sont dans un état sain en exécutant `ghe-cluster-status`.{% endif %}
8. Quittez le mode maintenance de l’interpréteur de commandes d’administration d’un nœud en exécutant `ghe-cluster-maintenance -u`.
