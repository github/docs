---
title: Configuration de l’application d’exécuteur auto-hébergé en tant que service
intro: Vous pouvez configurer l’application de l’exécuteur auto-hébergée en tant que service pour démarrer automatiquement l’application de l’exécuteur au démarrage de la machine.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Run runner app on startup
ms.openlocfilehash: d9f89bafe27314d321a30e2ce6c4eb8c98ec7dbb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705195'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Arrêtez l’application d’exécution auto-hébergée si elle est en cours d’exécution.{% endcapture %} {% capture service_non_windows_intro_shell %}Sur l’ordinateur de l’exécuteur, ouvrez un interpréteur de commandes dans le répertoire où vous avez installé l’application d’exécuteur auto-hébergée. Utilisez les commandes ci-dessous pour installer et gérer le service d’exécution auto-hébergé.{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Remarque** : Vous devez ajouter un exécuteur à {% data variables.product.product_name %} avant de configurer l’application d’exécuteur auto-hébergé en tant que service. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners) ».

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

Pour les systèmes Linux qui utilisent `systemd`, vous pouvez utiliser le script `svc.sh` qui est créé après l’ajout de l’exécuteur que vous devez installer et gérer à l’aide de l’application en tant que service.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Remarque :** la configuration de l’application d’exécuteur auto-hébergée en tant que service sur Windows fait partie du processus de configuration de l’application. Si vous avez déjà configuré l’application d’exécution auto-hébergée, mais que vous n’avez pas choisi de la configurer en tant que service, vous devez supprimer l’exécuteur de {% data variables.product.prodname_dotcom %} et reconfigurer l’application. Lorsque vous configurez à nouveau l’application, choisissez l’option permettant de configurer l’application en tant que service.

Pour plus d’informations, consultez « [Suppression d’exécuteurs auto-hébergés](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners) ».

{% endnote %}

Vous pouvez gérer le service de l’exécuteur dans l’application Windows **Services** ou utiliser PowerShell pour exécuter les commandes ci-dessous.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Installation du service

{{ service_first_step }}
1. Installez en utilisant la commande suivante :

   ```shell
   sudo ./svc.sh install
   ```

1. Sinon, la commande accepte un argument facultatif `user` pour installer le service en tant qu’utilisateur différent.

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## Installation du service

{{ service_first_step }}
1. Installez en utilisant la commande suivante :

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## Démarrage du service

Démarrez le service en utilisant la commande suivante :

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %} {% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh start
```
{% endmac %}

## Vérification de l’état du service

Vérifiez l’état du service avec la commande suivante :

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %} {% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Pour plus d’informations sur l’affichage de l’état de votre exécuteur auto-hébergé, consultez « [Analyse et résolution des problèmes des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».

## Arrêt du service

Arrêtez le service en utilisant la commande suivante :

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %} {% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## Désinstallation du service

1. Arrêtez le service s’il est en cours d’exécution.
1. Désinstallez le service en utilisant la commande suivante :

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}  {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}  {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## Personnalisation du service de l’exécuteur auto-hébergé

Si vous ne souhaitez pas utiliser la configuration de service par défaut `systemd` ci-dessus, vous pouvez créer un service personnalisé ou utiliser le mécanisme de service que vous préférez. Envisagez d’utiliser le modèle `serviced` sur `actions-runner/bin/actions.runner.service.template` en tant que référence. Si vous utilisez un service personnalisé, le service de l’exécuteur auto-hébergé doit toujours être appelé à l’aide du point d’entrée `runsvc.sh`.

{% endlinux %}

{% mac %}

## Personnalisation du service de l’exécuteur auto-hébergé

Si vous ne souhaitez pas utiliser la configuration de service launchd par défaut ci-dessus, vous pouvez créer un service personnalisé ou utiliser le mécanisme de service que vous préférez. Envisagez d’utiliser le modèle `plist` sur `actions-runner/bin/actions.runner.plist.template` en tant que référence. Si vous utilisez un service personnalisé, le service de l’exécuteur auto-hébergé doit toujours être appelé à l’aide du point d’entrée `runsvc.sh`.

{% endmac %}
