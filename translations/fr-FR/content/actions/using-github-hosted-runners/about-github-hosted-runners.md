---
title: À propos des exécuteurs hébergés par GitHub
shortTitle: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} propose des machines virtuelles hébergées pour exécuter les workflows. La machine virtuelle contient un environnement d’outils, de packages et de paramètres utilisables par {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180684'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}

Les exécuteurs sont les machines qui exécutent les travaux dans un workflow {% data variables.product.prodname_actions %}. Par exemple, un exécuteur peut cloner votre dépôt localement, installer un logiciel de test, puis exécuter des commandes qui évaluent votre code. 

{% data variables.product.prodname_dotcom %} fournit des exécuteurs qui vous permettent d’exécuter vos travaux. Toutefois, vous pouvez [héberger vos propres exécuteurs](/actions/hosting-your-own-runners/about-self-hosted-runners). Chaque exécuteur hébergé par {% data variables.product.prodname_dotcom %} est une nouvelle machine virtuelle hébergée par {% data variables.product.prodname_dotcom %} sur laquelle l’application d’exécuteur et d’autres outils sont préinstallés. Elle est disponible avec les systèmes d’exploitation Ubuntu Linux, Windows ou macOS. Lorsque vous utilisez un exécuteur hébergé par {% data variables.product.prodname_dotcom %}, la maintenance et les mises à niveau de la machine sont effectuées automatiquement.

{% ifversion not ghes %}

## Utilisation d’un exécuteur hébergé par {% data variables.product.prodname_dotcom %}

Pour vous servir d’un exécuteur hébergé par {% data variables.product.prodname_dotcom %}, créez un travail et utilisez `runs-on` afin de spécifier le type d’exécuteur qui va traiter le travail, par exemple `ubuntu-latest`, `windows-latest` ou `macos-latest`. Pour obtenir la liste complète des types d’exécuteur, consultez « [Exécuteurs et ressources matérielles pris en charge](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources) ».

Quand le travail commence, {% data variables.product.prodname_dotcom %} provisionne automatiquement une nouvelle machine virtuelle pour ce travail. Toutes les étapes du travail s’exécutent sur la machine virtuelle. Ainsi, elles peuvent partager des informations à l’aide du système de fichiers de l’exécuteur. Vous pouvez exécuter des workflows directement sur la machine virtuelle ou dans un conteneur Docker. À la fin du travail, la machine virtuelle est automatiquement désactivée.

Le diagramme suivant illustre l’exécution de deux travaux d’un workflow sur deux exécuteurs différents hébergés par {% data variables.product.prodname_dotcom %}. 

![Deux exécuteurs traitant des travaux distincts](/assets/images/help/images/overview-github-hosted-runner.png)

L’exemple de workflow suivant comporte deux travaux, nommés `Run-npm-on-Ubuntu` et `Run-PSScriptAnalyzer-on-Windows`. Quand ce workflow se déclenche, {% data variables.product.prodname_dotcom %} provisionne une nouvelle machine virtuelle pour chaque travail. 

- Le travail nommé `Run-npm-on-Ubuntu` s’exécute sur une machine virtuelle Linux, car le `runs-on:` du travail spécifie `ubuntu-latest`. 
- Le travail nommé `Run-PSScriptAnalyzer-on-Windows` s’exécute sur une machine virtuelle Windows, car le `runs-on:` du travail spécifie `windows-latest`. 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

Pendant l’exécution du travail, vous pouvez voir les journaux et la sortie dans l’IU de {% data variables.product.prodname_dotcom %} :

![Sortie du travail dans l’IU d’Actions](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Exécuteurs et ressources matérielles pris en charge

{% ifversion actions-hosted-runners %}

{% note %}

**Remarque** : {% data variables.product.prodname_dotcom %} propose également des {% data variables.actions.hosted_runner %}, qui sont disponibles dans des configurations plus grandes. Pour plus d’informations, consultez « [Spécification des ordinateurs pour les {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners) ».  

{% endnote %} {% endif %}

Spécification matérielle pour les machines virtuelles Windows et Linux :
- Processeur 2 cœurs (x86_64)
- 7 Go de RAM
- 14 Go d’espace sur disque SSD

Spécification matérielle pour les machines virtuelles macOS :
- Processeur 3 cœurs (x86_64)
- 14 Go de RAM
- 14 Go d’espace sur disque SSD

{% data reusables.actions.supported-github-runners %}

Les journaux de workflow répertorient l’exécuteur utilisé pour exécuter un travail. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».

## Logiciels pris en charge

Les outils logiciels inclus dans les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} sont mis à jour chaque semaine. Le processus de mise à jour prend plusieurs jours, et la liste des logiciels préinstallés sur la branche `main` est mise à jour une fois l’ensemble du déploiement terminé.

### Logiciels préinstallés

Les journaux de workflow incluent un lien vers les outils préinstallés sur l’exécuteur exact. Pour trouver ces informations dans le journal de workflow, développez la section `Set up job`. Sous cette section, développez la section `Runner Image`. Le lien suivant `Included Software` décrit les outils préinstallés sur l’exécuteur qui a exécuté le workflow.
![Lien vers les logiciels installés](/assets/images/actions-runner-installed-software-link.png) Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».

Pour obtenir la liste globale des outils inclus pour chaque système d’exploitation d’exécuteur, consultez les liens ci-dessous :

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (déconseillé)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} incluent les outils intégrés par défaut du système d’exploitation, en plus des packages listés dans les références ci-dessus. Par exemple, les exécuteurs Ubuntu et macOS incluent `grep`, `find` et `which`, entre autres outils par défaut. 

### Utilisation des logiciels préinstallés

Nous vous recommandons d’utiliser des actions pour interagir avec les logiciels installés sur les exécuteurs. Cette approche présente plusieurs avantages :
- En général, les actions fournissent des fonctionnalités plus flexibles, comme la sélection des versions, la possibilité de passer des arguments, et des paramètres
- Cela garantit que les versions d’outils utilisées dans votre workflow restent les mêmes, quelles que soient les mises à jour logicielles

S’il y a un outil que vous souhaitez demander, ouvrez un problème dans [actions/runner-images](https://github.com/actions/runner-images). Ce dépôt contient également des annonces sur toutes les principales mises à jour logicielles sur les exécuteurs.

### Installation de logiciels supplémentaires

Vous pouvez installer des logiciels supplémentaires sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Personnalisation des exécuteurs hébergés par GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners) ».

## Hôtes cloud utilisés par les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} héberge les exécuteurs Linux et Windows sur des machines virtuelles `Standard_DS2_v2` dans Microsoft Azure. L’application d’exécuteur {% data variables.product.prodname_actions %} est installée sur ces machines. L’application d’exécuteur hébergé par {% data variables.product.prodname_dotcom %} est une duplication (fork) de l’agent Azure Pipelines. Les paquets ICMP entrants sont bloqués pour toutes les machines virtuelles Azure. Par conséquent, les commandes ping ou traceroute peuvent ne pas fonctionner. Pour plus d’informations sur les ressources `Standard_DS2_v2`, consultez « [Séries Dv2 et DSv2](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series) » dans la documentation de Microsoft Azure.

{% data variables.product.prodname_dotcom %} héberge les exécuteurs macOS dans le propre cloud macOS de {% data variables.product.prodname_dotcom %}.

## Continuité du workflow

{% data reusables.actions.runner-workflow-continuity %}

En outre, si l’exécution du workflow a été correctement mise en file d’attente, mais n’a pas été traitée par un exécuteur hébergé par {% data variables.product.prodname_dotcom %} dans les 45 minutes, l’exécution du workflow mis en file d’attente est ignorée.

## Privilèges d’administration

Les machines virtuelles Linux aussi bien que macOS s’exécutent à l’aide de `sudo` sans mot de passe. Lorsque vous devez exécuter des commandes ou installer des outils qui nécessitent plus de privilèges que ceux de l’utilisateur actuel, vous pouvez utiliser `sudo` sans avoir à fournir de mot de passe. Pour plus d’informations, consultez le [manuel sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html).

Les machines virtuelles Windows sont configurées pour s’exécuter en tant qu’administrateurs avec le Contrôle de compte d’utilisateur (UAC) désactivé. Pour plus d’informations, consultez « [Fonctionnement du contrôle de compte d’utilisateur](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works) » dans la documentation Windows.

## Adresses IP

{% note %}

**Remarque :** Si vous utilisez une liste verte d’adresses IP pour votre organisation ou votre compte d’entreprise {% data variables.product.prodname_dotcom %}, vous ne pouvez pas utiliser des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et vous devez plutôt utiliser des exécuteurs auto-hébergés. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

{% endnote %}

Pour obtenir la liste des plages d’adresses IP utilisées par {% data variables.product.prodname_actions %} pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, vous pouvez utiliser l’API REST {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez la clé `actions` dans la réponse du point de terminaison « [Obtenir les informations de métadonnées GitHub](/rest/reference/meta#get-github-meta-information) ».

Les exécuteurs Windows et Ubuntu sont hébergés dans Azure et ont par la suite les mêmes plages d’adresses IP que les centres de données Azure. Les exécuteurs macOS sont hébergés dans le dans le propre cloud macOS de {% data variables.product.prodname_dotcom %}.

En raison du nombre élevé de plages d’adresses IP pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, nous vous déconseillons d’utiliser ces plages comme listes vertes pour vos ressources internes.

La liste des données d’adresses IP {% data variables.product.prodname_actions %} retournées par l’API est mise à jour une fois par semaine. 

## Systèmes de fichiers

{% data variables.product.prodname_dotcom %} exécute des actions et des commandes d’interpréteur de commandes dans des répertoires spécifiques sur la machine virtuelle. Les chemins des fichiers sur les machines virtuelles ne sont pas statiques. Utilisez les variables d’environnement fournies par {% data variables.product.prodname_dotcom %} pour construire des chemins de fichiers pour les répertoires `home`, `workspace` et `workflow`.

| Répertoire | Variable d’environnement | Description |
|-----------|----------------------|-------------|
| `home` | `HOME` | Contient des données associées aux utilisateurs. Par exemple, ce répertoire peut contenir des informations d’identification provenant d’une tentative de connexion. |
| `workspace` | `GITHUB_WORKSPACE` | Les actions et les commandes d’interpréteur de commandes s’exécutent dans ce répertoire. Une action peut modifier le contenu de ce répertoire, auquel les actions suivantes peuvent accéder. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | Charge utile `POST` de l’événement de webhook qui a déclenché le workflow. {% data variables.product.prodname_dotcom %} réécrit cette opération chaque fois qu’une action s’exécute pour isoler le contenu du fichier entre les actions.

Pour obtenir la liste des variables d’environnement créées par {% data variables.product.prodname_dotcom %} pour chaque workflow, consultez « [Utilisation de variables d’environnement](/github/automating-your-workflow-with-github-actions/using-environment-variables) ».

### Système de fichiers de conteneur Docker

Les actions qui s’exécutent dans des conteneurs Docker ont des répertoires statiques sous le chemin `/github`. Toutefois, nous vous recommandons vivement d’utiliser les variables d’environnement par défaut pour construire des chemins de fichiers dans des conteneurs Docker.

{% data variables.product.prodname_dotcom %} réserve le préfixe du chemin `/github` et crée trois répertoires pour les actions.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## Pour aller plus loin
- « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) »
- Vous pouvez utiliser une stratégie de matrice pour exécuter vos travaux sur plusieurs images. Pour plus d’informations, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

{% endif %}
