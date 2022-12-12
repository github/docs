---
title: Résolution des problèmes liés à GitHub Actions pour votre entreprise
intro: 'Résolution des problèmes courants qui se produisent durant l’utilisation de {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107300'
---
## Vérification de l’intégrité de {% data variables.product.prodname_actions %}

Vous pouvez vérifier l’intégrité de {% data variables.product.prodname_actions %} sur {% data variables.location.product_location %} avec l’utilitaire en ligne de commande `ghe-actions-check`. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check) » et « [Accès à l’interpréteur de commandes (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».

## Configuration d’exécuteurs auto-hébergés lors de l’utilisation d’un certificat auto-signé pour {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Pour plus d’informations, consultez « [Configuration de TLS](/admin/configuration/configuring-tls) ».

### Installation du certificat sur l’ordinateur exécuteur

Pour qu’un exécuteur auto-hébergé se connecte à une instance {% data variables.product.prodname_ghe_server %} en utilisant un certificat auto-signé, vous devez installer le certificat sur l’ordinateur exécuteur afin de renforcer la sécurité de la connexion.

Pour savoir comment installer un certificat, consultez la documentation du système d’exploitation de votre exécuteur.

### Configuration de Node.JS pour utiliser le certificat

La plupart des actions sont écrites en JavaScript et exécutées avec Node.js, qui n’utilise pas le magasin de certificats du système d’exploitation. Pour que l’application d’exécuteur auto-hébergé utilise le certificat, vous devez définir la variable d’environnement `NODE_EXTRA_CA_CERTS` sur l’ordinateur exécuteur.

Vous pouvez définir la variable d’environnement en tant que variable d’environnement système ou la déclarer dans un fichier nommé _.env_ dans le répertoire d’application d’exécuteur auto-hébergé.

Par exemple :

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Les variables d’environnement étant lues au démarrage de l’application d’exécuteur auto-hébergé, vous devez définir les variables d’environnement avant de configurer ou de démarrer l’application d’exécuteur auto-hébergé. Si la configuration de votre certificat change, vous devez redémarrer l’application d’exécuteur auto-hébergé.

### Configuration de conteneurs Docker pour utiliser le certificat

Si vous utilisez des actions de conteneur ou des conteneurs de service Docker dans vos workflows, vous devrez peut-être aussi installer le certificat dans votre image Docker en plus de définir la variable d’environnement ci-dessus.

## Configuration des paramètres de proxy HTTP pour {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Si ces paramètres ne sont pas correctement configurés, vous obtiendrez peut-être des erreurs telles que `Resource unexpectedly moved to https://<IP_ADDRESS>` pendant la définition ou la modification de votre configuration {% data variables.product.prodname_actions %}.

## Exécuteurs ne se connectant pas à {% data variables.product.prodname_ghe_server %} avec un nouveau nom d’hôte

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

Si vous déployez {% data variables.product.prodname_ghe_server %} dans votre environnement avec un nouveau nom d’hôte et que l’ancien nom d’hôte ne se résout plus en votre instance, les exécuteurs auto-hébergés ne pourront pas se connecter à l’ancien nom d’hôte et n’exécuteront aucun travail.

Vous devrez mettre à jour la configuration de vos exécuteurs auto-hébergés pour qu’ils utilisent le nouveau nom d’hôte de {% data variables.location.product_location %}. Pour chaque exécuteur auto-hébergé, vous devrez effectuer l’une des procédures suivantes :

* Dans le répertoire de l’application d’exécuteur auto-hébergé, modifiez les fichiers `.runner` et `.credentials` pour remplacer toutes les occurrence de l’ancien nom d’hôte par le nouveau nom d’hôte, puis redémarrez l’application d’exécuteur auto-hébergé.
* Supprimez l’exécuteur de {% data variables.product.prodname_ghe_server %} à l’aide de l’interface utilisateur, puis rajoutez-le. Pour plus d’informations, consultez « [Suppression d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/removing-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

## Travaux bloqués et limites de mémoire et de processeur {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} se compose de plusieurs services s’exécutant sur {% data variables.location.product_location %}. Par défaut, ces services sont configurés avec des limites de processeur et de mémoire par défaut qui sont censées fonctionner avec la plupart des instances. Cependant, les utilisateurs qui sollicitent fortement {% data variables.product.prodname_actions %} peuvent avoir besoin d’ajuster ces paramètres.

Si vous remarquez que les travaux ne se lancent pas (même en présence d’exécuteurs inactifs) ou que leur progression n’est pas mise à jour ou qu’elle ne varie pas dans l’interface utilisateur, il se peut que vous avez atteint les limites de processeur ou de mémoire.

### 1. Vérifier l’utilisation globale du processeur et de la mémoire dans la console de gestion

Accédez à la console de gestion puis, dans le tableau de bord moniteur, sous « Intégrité du système », inspectez les graphiques globaux du processeur et de la mémoire. Pour plus d’informations, consultez « [Accès au tableau de bord moniteur](/admin/enterprise-management/accessing-the-monitor-dashboard) ».

Si l’utilisation globale du processeur sous « Intégrité du système » est proche de 100 % ou qu’il ne reste plus de mémoire libre, {% data variables.location.product_location %} s’exécute au maximum de sa capacité et doit faire l’objet d’un scale-up. Pour plus d’informations, consultez « [Augmentation des ressources processeur ou mémoire](/admin/enterprise-management/increasing-cpu-or-memory-resources) ».

### 2. Vérifier l’utilisation globale du processeur et de la mémoire pour les travaux Nomad dans la console de gestion

Si l’utilisation globale du processeur et de la mémoire sous « Intégrité du système » est correcte, faites défiler la page du tableau de bord moniteur vers le bas jusqu’à la section « Travaux Nomad », puis examinez les graphiques « Pourcentage processeur » et « Utilisation de la mémoire ».

Chaque tracé visible dans ces graphiques correspond à un service. Pour les services {% data variables.product.prodname_actions %}, recherchez :

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Si l’un de ces services a atteint un taux d’utilisation du processeur de 100 % ou en est proche ou que la mémoire est proche de leur limite (2 Go par défaut), il est peut-être nécessaire d’augmenter les ressources allouées à ces services. Parmi les services ci-dessus, notez ceux qui sont proches de leur limite ou qui l’ont atteinte.

### 3. Augmenter l’allocation de ressources pour les services ayant atteint leur limite

1. Connectez-vous à l’interpréteur de commandes d’administration avec SSH. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».
1. Exécutez la commande suivante pour voir quelles ressources sont disponibles pour une allocation :

   ```shell
   nomad node status -self
   ```

   Dans la sortie, recherchez la section « Allocated Resources » (Ressources allouées). Il se présente sous la forme suivante :

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Pour le processeur et la mémoire, la quantité **totale** allouée pour **tous** les services correspond à la valeur de gauche, et la quantité disponible correspond à la valeur de droite. Dans l’exemple ci-dessus, la quantité de mémoire allouée est de 23 Gio sur un total de 32 Gio. Cela signifie qu’il reste 9 Gio de mémoire à allouer.

   {% warning %}

   **Avertissement :** Veillez à ne pas allouer plus de ressources que vous n’en possédez au total, car les services ne démarreront pas.

   {% endwarning %}
1. Passez au répertoire `/etc/consul-templates/etc/nomad-jobs/actions` :

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   Ce répertoire contient trois fichiers qui correspondent aux services {% data variables.product.prodname_actions %} ci-dessus :

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Pour les services dont vous avez noté qu’ils nécessitent un ajustement, ouvrez le fichier correspondant et recherchez le groupe `resources` qui se présente comme suit :

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   Les valeurs sont exprimées en MHz pour les ressources processeur et en Mo pour les ressources mémoire.

   Ainsi, pour augmenter les limites des ressources dans l’exemple ci-dessus, avec 1 GHz pour le processeur et 4 Go pour la mémoire, apportez les modifications suivantes :

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Enregistrez et fermez le fichier.
1. Exécutez `ghe-config-apply` pour appliquer les modifications.

    Pendant l’exécution de `ghe-config-apply`, si vous obtenez la sortie `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, il est probable que la modification a occasionné une surallocation de ressources processeur ou mémoire. Dans ce cas, modifiez à nouveau les fichiers de configuration et réduisez la quantité de ressources processeur et mémoire allouées, puis réexécutez `ghe-config-apply`.
1. Une fois la configuration appliquée, exécutez `ghe-actions-check` pour vérifier que les services {% data variables.product.prodname_actions %} sont opérationnels.

{% ifversion fpt or ghec or ghes %}
## Résolution des défaillances quand {% data variables.product.prodname_dependabot %} déclenche des workflows existants

{% data reusables.dependabot.beta-security-and-version-updates %}

Après avoir configuré les mises à jour {% data variables.product.prodname_dependabot %} pour {% data variables.location.product_location %}, il se peut que constatiez des défaillances quand des workflows existants sont déclenchés par des événements {% data variables.product.prodname_dependabot %}.

Par défaut, les exécutions de workflows {% data variables.product.prodname_actions %} qui sont déclenchées par {% data variables.product.prodname_dependabot %} à partir d’événements `push`, `pull_request`, `pull_request_review` ou `pull_request_review_comment` ont considérées comme ayant été ouvertes à partir d’une duplication (fork) de dépôt. Contrairement aux workflows déclenchés par d’autres acteurs, cela signifie qu’ils reçoivent un `GITHUB_TOKEN` en lecture seule et qu’ils n’ont pas accès aux secrets qui sont normalement disponibles. Ainsi, les flux de travail qui tentent d’écrire dans le dépôt échouent quand ils sont déclenchés par {% data variables.product.prodname_dependabot %}.

Il existe trois façons de résoudre ce problème :

1. Vous pouvez mettre à jour vos workflows de sorte qu’ils ne soient plus déclenchés par {% data variables.product.prodname_dependabot %} en utilisant une expression de ce type : `if: github.actor != 'dependabot[bot]'`. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».
2. Vous pouvez modifier vos workflows de sorte qu’ils utilisent un processus en deux étapes qui comprend `pull_request_target` qui ne présente pas ces limites. Pour plus d’informations, consultez « [Automatisation de {% data variables.product.prodname_dependabot %} avec {% data variables.product.prodname_actions %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events) ».
3. Vous pouvez permettre aux workflows déclenchés par {% data variables.product.prodname_dependabot %} d’accéder aux secrets et autoriser le terme `permissions` à augmenter l’étendue par défaut de `GITHUB_TOKEN`. Pour plus d’informations, consultez « [Permettre aux workflows déclenchés par {% data variables.product.prodname_dependabot %} d’accéder aux secrets et leur accorder des autorisations supérieures](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions) » ci-dessous.

### Permettre aux workflows déclenchés par {% data variables.product.prodname_dependabot %} d’accéder aux secrets et leur accorder des autorisations supérieures

1. Connectez-vous à l’interpréteur de commandes d’administration avec SSH. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».
1. Pour supprimer les limites sur les workflows déclenchés par {% data variables.product.prodname_dependabot %} sur {% data variables.location.product_location %}, utilisez la commande suivante.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. Appliquez la configuration.
    ```shell
    $ ghe-config-apply
    ```
1. Revenez à {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## Résolution des problèmes liés aux actions groupées dans {% data variables.product.prodname_actions %}

Si vous obtenez l’erreur suivante pendant l’installation de {% data variables.product.prodname_actions %} dans {% data variables.product.prodname_ghe_server %}, vous pouvez résoudre le problème en installant les actions groupées et les workflows de démarrage officiels.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

Pour installer les actions groupées et les workflows de démarrage officielles dans une organisation désignée dans {% data variables.product.prodname_ghe_server %}, suivez cette procédure.

1. Identifiez l’organisation qui va stocker les actions groupées et les flux de travail de démarrage officiels. Vous pouvez créer une nouvelle organisation ou en réutiliser une existante. 
    - Pour créer une organisation, consultez « [Création d’une organisation en partant de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ». 
    - Pour obtenir de l’aide concernant le nom à donner à l’organisation, consultez « [Noms réservés](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names) ». 

1. Connectez-vous à l’interpréteur de commandes d’administration avec SSH. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».
1. Pour désigner votre organisation en tant qu’emplacement de stockage des actions groupées, utilisez la commande `ghe-config`, en `ORGANIZATION` remplaçant par le nom de votre organisation.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    et
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  Pour ajouter les actions groupées à votre organisation, annulez le SHA.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. Appliquez la configuration.
    ```shell
    $ ghe-config-apply
    ```

Une fois ces étapes terminées, vous pouvez reprendre la configuration de {% data variables.product.prodname_actions %} à l’étape « [Gestion des autorisations d’accès pour GitHub Actions dans votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise) ».

{% endif %}
