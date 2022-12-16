---
title: Automatisation de la migration avec GitHub Actions Importer
intro: 'Utilisez {% data variables.product.prodname_actions_importer %} pour planifier et automatiser votre migration vers {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159680'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[Mentions légales](#legal-notice)

{% note %}

**Remarque** : {% data variables.product.prodname_actions_importer %} est disponible en préversion publique. Visitez la [page d’inscription](https://github.com/features/actions-importer/signup) pour demander l’accès à la préversion. Une fois l’accès accordé, vous pourrez utiliser l’extension CLI `gh-actions-importer`

{% endnote %}

## À propos de {% data variables.product.prodname_actions_importer %}

Vous pouvez utiliser {% data variables.product.prodname_actions_importer %} pour planifier vos pipelines CI/CD et les migrer automatiquement vers {% data variables.product.prodname_actions %} depuis Azure DevOps, CircleCI, GitLab, Jenkins et Travis CI.

{% data variables.product.prodname_actions_importer %} est distribué en tant que conteneur Docker et utilise une extension [CLI {% data variables.product.prodname_dotcom %}](https://cli.github.com) pour interagir avec le conteneur.

Tout workflow converti par {% data variables.product.prodname_actions_importer %} doit être inspecté pour vérifier son exactitude avant de l’utiliser en tant que charge de travail de production. L’objectif est d’atteindre un taux de conversion de 80 % pour chaque workflow. Toutefois, le taux de conversion réel dépend de la composition de chaque pipeline qui est converti.

## Plateformes CI prises en charge

Vous pouvez utiliser {% data variables.product.prodname_actions_importer %} pour effectuer une migration à partir des plateformes suivantes :

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire pour chacune des plateformes prises en charge.

## Prérequis

{% data variables.product.prodname_actions_importer %} a les exigences suivantes :

- Vous devez avoir obtenu l’accès à la préversion publique de {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Utilisez un {% data variables.product.pat_generic %} avec l’étendue `read:packages` activée.
{%- else %}
- Vous devez disposer d’informations d’identification pour vous authentifier auprès du {% data variables.product.prodname_container_registry %} {% data variables.product.prodname_registry %}. Pour plus d’informations, consultez « [Utilisation du registre de conteneurs](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry) ».
{% endif %}
- Un environnement dans lequel vous pouvez exécuter des conteneurs basés sur Linux et installer les outils nécessaires.
  - Docker est [installé](https://docs.docker.com/get-docker/) et en cours d’exécution.
  - L’[interface CLI {% data variables.product.prodname_dotcom %}](https://cli.github.com) est installée.

  {% note %}

  **Remarque** : Le conteneur {% data variables.product.prodname_actions_importer %} et l’interface CLI n’ont pas besoin d’être installés sur le même serveur que votre plateforme CI.

  {% endnote %}

### Installation de l’extension CLI {% data variables.product.prodname_actions_importer %}

1. Installez l’extension CLI {% data variables.product.prodname_actions_importer %} :

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Vérifiez que l’extension est installée :

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Mise à jour de l’interface CLI {% data variables.product.prodname_actions_importer %}

Pour vous assurer que vous exécutez la dernière version de {% data variables.product.prodname_actions_importer %}, vous devez exécuter régulièrement la commande `update` :

```bash
$ gh actions-importer update
```

Vous devez être authentifié auprès du {% data variables.product.prodname_container_registry %} pour que cette commande réussisse. Vous pouvez également fournir des informations d’identification en utilisant les paramètres `--username` et `--password-stdin` :

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Authentification depuis la ligne de commande

Vous devez configurer des informations d’identification qui permettent à {% data variables.product.prodname_actions_importer %} de communiquer avec {% data variables.product.prodname_dotcom %} et votre serveur CI actuel. Vous pouvez configurer ces informations d’identification en utilisant des variables d’environnement ou un fichier `.env.local`. Vous pouvez configurer les variables d’environnement dans une invite interactive, en exécutant la commande suivante :

```bash
$ gh actions-importer configure
```

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire sur l’utilisation des variables d’environnement.

## Utilisation de l’interface CLI {% data variables.product.prodname_actions_importer %}

Utilisez les sous-commandes de `gh actions-importer` pour commencer votre migration vers {% data variables.product.prodname_actions %}, notamment `audit`, `forecast`, `dry-run` et `migrate`.

### Audit de vos pipelines CI existants

La sous-commande `audit` peut être utilisée pour planifier votre migration CI/CD en analysant votre empreinte CI/CD actuelle. Cette analyse peut être utilisée pour planifier une chronologie de migration vers {% data variables.product.prodname_actions %}.

Pour exécuter un audit, utilisez la commande suivante afin de déterminer les options dont vous disposez :

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire sur l’exécution d’un audit.

### Prévision de l’utilisation

La sous-commande `forecast` passe en revue l’utilisation historique du pipeline pour créer une prévision de l’utilisation de {% data variables.product.prodname_actions %}.

Pour exécuter une prévision, utilisez la commande suivante afin de déterminer les options dont vous disposez :

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire sur l’exécution d’une prévision.

### Test du processus de migration

La sous-commande `dry-run` peut être utilisée pour convertir un pipeline en son équivalent {% data variables.product.prodname_actions %}, puis écrire le workflow dans votre système de fichiers local.

Pour effectuer un test, utilisez la commande suivante afin de déterminer les options dont vous disposez :

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire sur l’exécution d’un test.

### Migration d’un pipeline vers {% data variables.product.prodname_actions %}

La sous-commande `migrate` peut être utilisée pour convertir un pipeline en son équivalent GitHub Actions, puis créer une demande de tirage (pull request) avec le contenu.

Pour exécuter une migration, utilisez la commande suivante afin de déterminer les options dont vous disposez :

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Une fois l’accès à la préversion accordé, vous pourrez accéder à une documentation de référence supplémentaire sur l’exécution d’une migration.

## Mentions légales

Certaines parties ont été adaptées à partir de https://github.com/github/gh-actions-importer/ sous la licence MIT :

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
