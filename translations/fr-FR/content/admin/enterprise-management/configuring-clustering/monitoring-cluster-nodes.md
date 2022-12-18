---
title: Supervision de nœuds de cluster
intro: 'Un cluster {% data variables.product.prodname_ghe_server %} est composé de services redondants distribués sur deux nœuds ou plus. La défaillance d’un service individuel ou d’un nœud entier ne doit pas être immédiatement perceptible par les utilisateurs du cluster. Toutefois, dans la mesure où les performances et la redondance sont affectées, il est important d’effectuer un monitoring de l’intégrité d’un cluster {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: a5cab340f84d572a0a8e549d942b7b52ef522733
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106894'
---
## Vérification manuelle de l’état d’un cluster

{% data variables.product.prodname_ghe_server %} intègre un utilitaire en ligne de commande qui permet de superviser l’intégrité d’un cluster. Dans l’interpréteur de commandes d’administration, l’exécution de la commande `ghe-cluster-status` déclenche une série de contrôles d’intégrité sur chaque nœud, avec notamment une vérification de la connectivité et de l’état du service. La sortie présente tous les résultats de test, dont le texte `ok` ou `error`. Par exemple, pour afficher uniquement les tests non concluants, exécutez :

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Remarque :** En l’absence de tests non concluants, cette commande ne produit aucune sortie. Cela indique que le cluster est sain.

{% endnote %}

## Supervision de l’état d’un cluster avec Nagios

Vous pouvez configurer [Nagios](https://www.nagios.org/) pour qu’il supervise {% data variables.product.prodname_ghe_server %}. En plus de superviser la connectivité de base de chaque nœud du cluster, vous pouvez vérifier l’état du cluster en configurant Nagios pour qu’il utilise la commande `ghe-cluster-status -n`. Elle retourne une sortie dans un format que comprend Nagios.

### Prérequis
* Hôte Linux exécutant Nagios.
* Accès réseau au cluster {% data variables.product.prodname_ghe_server %}.

### Configuration de l’hôte Nagios
1. Générez une clé SSH avec une phrase secrète vide. Nagios l’utilise pour s’authentifier auprès du cluster {% data variables.product.prodname_ghe_server %}.
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **Avertissement de sécurité :** Une clé SSH sans phrase secrète peut présenter un risque de sécurité si elle est autorisée pour un accès complet à un hôte. Limitez l’autorisation de cette clé à une simple commande en lecture seule.

  {% enddanger %} {% note %}

  **Remarque :** Si vous utilisez une distribution de Linux qui ne prend pas en charge l’algorithme Ed25519, utilisez la commande :
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Copiez la clé privée (`id_ed25519`) dans le dossier de base de `nagios` et définissez la propriété appropriée.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Pour autoriser la clé publique à exécuter *uniquement* la commande `ghe-cluster-status -n`, utilisez un préfixe `command=` dans le fichier `/data/user/common/authorized_keys`. À partir de l’interpréteur de commandes d’administration de n’importe quel nœud, modifiez ce fichier pour ajouter la clé publique générée à l’étape 1. Par exemple : `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Validez et copiez la configuration sur chaque nœud du cluster en exécutant `ghe-cluster-config-apply` sur le nœud où vous avez modifié le fichier `/data/user/common/authorized_keys`.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Pour vérifier que le plug-in Nagios peut bien exécuter la commande, exécutez-la de manière interactive à partir de l’hôte Nagios.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Créez une définition de commande dans votre configuration Nagios.
  ###### Exemple de définition

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Ajoutez cette commande à une définition de service pour un nœud du cluster {% data variables.product.prodname_ghe_server %}.

  ###### Exemple de définition

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

Une fois que vous avez ajouté la définition à Nagios, la vérification du service s’exécute en fonction de votre configuration. Le service nouvellement configuré doit apparaître dans l’interface web Nagios.

![Exemple Nagios](/assets/images/enterprise/cluster/nagios-example.png)
