---
title: Surveillance des exécuteurs auto-hébergés et résolution des problèmes
intro: Vous pouvez surveiller vos exécuteurs auto-hébergés pour voir leur activité et diagnostiquer les problèmes courants.
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Monitor & troubleshoot
ms.openlocfilehash: 57ca9cad51c1936171fcadd73497cf313dd86dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065633'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vérification de l’état d’un exécuteur auto-hébergé

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Sous « Exécuteurs », vous pouvez consulter la liste des exécuteurs inscrits, y compris le nom, les étiquettes et le statut de l’exécuteur.

    Il peut s’agir d'un des états suivants :

    * **Inactif** : l’exécuteur est connecté à {% data variables.product.product_name %} et est prêt à exécuter des travaux.
    * **Actif** : l’exécuteur exécute actuellement un travail.
    * **Hors connexion** : l’exécuteur n’est pas connecté à {% data variables.product.product_name %}. Cela peut être dû au fait que la machine est hors connexion, que l’application d’exécuteur auto-hébergé n’est pas en cours d’exécution sur la machine ou que l’application d’exécuteur auto-hébergé ne peut pas communiquer avec {% data variables.product.product_name %}.

## Résolution des problèmes de connectivité réseau

### Vérification de la connectivité réseau d’un exécuteur auto-hébergé

Vous pouvez utiliser le script `run` de l’application d’exécuteur auto-hébergé avec le paramètre `--check` pour vérifier qu’un exécuteur auto-hébergé peut accéder à tous les services réseau requis sur {% data variables.product.product_location %}.

En plus de `--check`, vous devez fournir deux arguments au script :

* `--url` avec l’URL de votre dépôt, organisation ou entreprise {% data variables.product.company_short %}. Par exemple : `--url https://github.com/octo-org/octo-repo`.
* `--pat` avec la valeur d’un jeton d’accès personnel, qui doit avoir l’étendue `workflow`. Par exemple : `--pat ghp_abcd1234`. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

Par exemple :

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

Le script teste chaque service et génère une sortie `PASS` ou `FAIL` pour chacun d’eux. Si vous avez des vérifications ayant échoué, vous pouvez voir plus d’informations sur le problème dans le fichier journal concernant la vérification. Les fichiers journaux se trouvent dans le répertoire `_diag` où vous avez installé l’application d’exécuteur, et le chemin d’accès du fichier journal pour chaque vérification s’affiche dans la sortie de console du script.

Si vous avez des vérifications ayant échoué, vous devez également vérifier que votre machine d’exécuteur auto-hébergé répond à toutes les exigences de communication. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements) ».

### Désactivation de la vérification de certificat TLS
{% ifversion ghes %} Par défaut, l’application d’exécuteur auto-hébergé vérifie le certificat TLS pour {% data variables.product.product_name %}.  Si votre {% data variables.product.product_name %} possède un certificat auto-signé ou émis en interne, vous pouvez désactiver la vérification du certificat TLS à des fins de test.
{% else %} Par défaut, l’application d’exécuteur auto-hébergé vérifie le certificat TLS pour {% data variables.product.product_name %}.  Si vous rencontrez des problèmes réseau, vous pouvez désactiver la vérification de certificat TLS à des fins de test.
{% endif %}

Pour désactiver la vérification de la certification TLS dans l’application de l’exécuteur auto-hébergé, définissez la variable d’environnement `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` sur `1` avant de configurer et d’exécuter l’application d’exécuteur auto-hébergé.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

**Avertissement** : La désactivation de la vérification TLS n’est pas recommandée, car TLS assure la confidentialité et l’intégrité des données entre l’application d’exécuteur auto-hébergé et {% data variables.product.product_name %}. Nous vous recommandons d’installer le certificat {% data variables.product.product_name %} dans le magasin de certificats du système d’exploitation pour votre exécuteur auto-hébergé. Pour obtenir des conseils sur l’installation du certificat {% data variables.product.product_name %}, contactez votre fournisseur de système d’exploitation.

{% endwarning %}

## Examen des fichiers journaux d’application d’exécuteur auto-hébergé

Vous pouvez surveiller l’état de l’application d’exécuteur auto-hébergé et ses activités. Les fichiers journaux sont conservés dans le répertoire `_diag` où vous avez installé l’application d’exécuteur, et un nouveau journal est généré chaque fois que l’application est démarrée. Le nom de fichier commence par *Runner_* et est suivi d’un horodatage UTC du démarrage de l’application.

Pour obtenir des journaux détaillés sur les exécutions des travaux de workflow, consultez la section suivante décrivant les fichiers *Worker_* .

## Examen du fichier journal d’un travail

L’application d’exécuteur auto-hébergé crée un fichier journal détaillé pour chaque travail qu’elle traite. Ces fichiers sont stockés dans le répertoire `_diag` où vous avez installé l’application d’exécuteur, et le nom de fichier commence par *Worker_* .

{% linux %}

## Utilisation de journalctl pour vérifier le service d’application d’exécuteur auto-hébergé

Pour les exécuteurs auto-hébergés basés sur Linux qui exécutent l’application à l’aide d’un service, vous pouvez utiliser `journalctl` pour surveiller leur activité en temps réel. Le service basé sur systemd par défaut utilise la convention d’affectation de noms suivante : `actions.runner.<org>-<repo>.<runnerName>.service`. Ce nom est tronqué s’il dépasse 80 caractères. Par conséquent, la meilleure façon de trouver le nom du service est de vérifier le fichier _.service_. Par exemple :

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Si cela échoue du fait que le service est installé ailleurs, vous pouvez rechercher le nom du service dans la liste des services en cours d’exécution. Par exemple, sur la plupart des systèmes Linux, vous pouvez utiliser la commande `systemctl` :

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

Vous pouvez utiliser `journalctl` pour surveiller l’activité en temps réel de l’exécuteur auto-hébergé :

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

Dans cet exemple de sortie, vous pouvez voir `runner01` démarrer, recevoir un travail nommé `testAction`, puis afficher l’état résultant :

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Pour afficher la configuration `systemd`, vous pouvez localiser le fichier de service ici : `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
Si vous souhaitez personnaliser le service d’application d’exécuteur auto-hébergé, ne modifiez pas directement ce fichier. Suivez les instructions décrites dans « [Configuration de l’application d’exécuteur auto-hébergé en tant que service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service) ».

{% endlinux %}

{% mac %}

## Utilisation de `launchd` pour vérifier le service de l’application d’exécuteur auto-hébergé

Pour les exécuteurs auto-hébergés basés sur macOS qui exécutent l’application en tant que service, vous pouvez utiliser `launchctl` pour surveiller leur activité en temps réel. Le service par défaut basé sur launchd utilise la convention d’affectation de noms suivante : `actions.runner.<org>-<repo>.<runnerName>`. Ce nom est tronqué s’il dépasse 80 caractères, de sorte que la meilleure façon de rechercher le nom du service consiste à vérifier le fichier _.service_ dans le répertoire de l’exécuteur :

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

Le script `svc.sh` utilise `launchctl` pour vérifier si l’application est en cours d’exécution. Par exemple :

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

La sortie obtenue inclut l’ID de processus et le nom du service `launchd` de l’application.

Pour afficher la configuration `launchd`, vous pouvez localiser le fichier de service ici : `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
Si vous souhaitez personnaliser le service d’application d’exécuteur auto-hébergé, ne modifiez pas directement ce fichier. Suivez les instructions décrites dans « [Configuration de l’application d’exécuteur auto-hébergé en tant que service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1) ».

{% endmac %}

{% windows %}

## Utilisation de PowerShell pour vérifier le service de l’application d’exécuteur auto-hébergé

Pour les exécuteurs auto-hébergés basés sur Windows qui exécutent l’application en tant que service, vous pouvez utiliser PowerShell pour surveiller leur activité en temps réel. Le service utilise la convention d’affectation de noms `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. Vous pouvez également rechercher le nom du service en vérifiant le fichier _.service_ dans le répertoire de l’exécuteur :

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Vous pouvez afficher l’état de l’exécuteur dans l’application Windows _Services_ (`services.msc`). Vous pouvez également utiliser PowerShell pour vérifier si le service est en cours d’exécution :

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

Vous pouvez utiliser PowerShell pour vérifier l’activité récente de l’exécuteur auto-hébergé. Dans cet exemple de sortie, vous pouvez voir le démarrage de l’application, recevoir un travail nommé `testAction`, puis afficher l’état résultant :

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## Surveillance du processus de mise à jour automatique

Nous vous recommandons de vérifier régulièrement le processus de mise à jour automatique, car l’exécuteur auto-hébergé ne pourra pas traiter les travaux s’il tombe en dessous d’un certain seuil de version. L’application d’exécuteur auto-hébergé est automatiquement mise à jour, mais notez que ce processus n’inclut aucune mise à jour du système d’exploitation ni d’autres logiciels. Vous devez gérer séparément ces mises à jour.

Vous pouvez afficher les activités de mise à jour dans les fichiers journaux *Runner_* . Par exemple :

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

En outre, vous trouverez plus d’informations dans les fichiers journaux _SelfUpdate_ situés dans le répertoire `_diag` où vous avez installé l’application d’exécuteur.

{% linux %}

## Résolution des problèmes liés aux conteneurs dans les exécuteurs auto-hébergés

### Vérification de l’installation de Docker

Si vos travaux nécessitent des conteneurs, l’exécuteur auto-hébergé doit être basé sur Linux et Docker doit être installé. Vérifiez que votre exécuteur auto-hébergé dispose de Docker et que le service est en cours d’exécution.

Vous pouvez utiliser `systemctl` pour vérifier l’état du service :

```shell
$ sudo systemctl is-active docker.service
active
```

Si Docker n’est pas installé, les actions dépendantes échouent avec les erreurs suivantes :

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Vérification des autorisations Docker

Si votre travail échoue avec l’erreur suivante :

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Vérifiez que le compte de service de l’exécuteur auto-hébergé dispose de l’autorisation nécessaire pour utiliser le service Docker. Vous pouvez identifier ce compte en vérifiant la configuration de l’exécuteur auto-hébergé dans `systemd`. Par exemple :

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## Résolution des exécuteurs hors connexion après une mise à niveau de {% data variables.product.product_location %}

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

Si vos exécuteurs sont hors connexion pour cette raison, mettez à jour manuellement les exécuteurs. Pour plus d’informations, consultez les instructions d’installation pour [la dernière version](https://github.com/actions/runner/releases/latest) dans le dépôt actions/runner.
{% endif %}
