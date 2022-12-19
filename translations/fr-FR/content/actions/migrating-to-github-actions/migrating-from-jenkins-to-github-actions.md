---
title: Migration de Jenkins vers GitHub Actions
intro: '{% data variables.product.prodname_actions %} et Jenkins partagent plusieurs similitudes, ce qui facilite grandement la migration vers {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Jenkins
  - Migration
  - CI
  - CD
shortTitle: Migrate from Jenkins
ms.openlocfilehash: a0b54ede4d19d97bf750122b72e245b7c6033ad9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193321'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Jenkins et {% data variables.product.prodname_actions %} vous permettent tous deux de créer des workflows qui génèrent, testent, publient, libèrent et déploient automatiquement du code. Jenkins et {% data variables.product.prodname_actions %} partagent certaines similitudes dans la configuration de workflow :

- Jenkins crée des workflows à l’aide de _pipelines déclaratifs_, qui sont similaires aux fichiers de workflow {% data variables.product.prodname_actions %}.
- Jenkins utilise des _phases_ pour exécuter une collection d’étapes, tandis que {% data variables.product.prodname_actions %} utilise des travaux pour regrouper une ou plusieurs étapes ou commandes individuelles.
- Jenkins et {% data variables.product.prodname_actions %} prennent en charge les builds basées sur des conteneurs. Pour plus d’informations, consultez « [Création d’une action de conteneur Docker](/articles/creating-a-docker-container-action) ».
- Les étapes ou les tâches peuvent être réutilisées et partagées avec la communauté.

Pour plus d’informations, consultez « [Concepts de base de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions) ».

## Différences clés

- Jenkins a deux types de syntaxe pour créer des pipelines : pipeline déclaratif et pipeline scripté. {% data variables.product.prodname_actions %} utilise YAML pour créer des workflows et des fichiers de configuration. Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions) ».
- Les déploiements Jenkins sont généralement auto-hébergés, avec des utilisateurs qui conservent les serveurs dans leurs propres centres de données. {% data variables.product.prodname_actions %} offre une approche cloud hybride en hébergeant ses propres exécuteurs que vous pouvez utiliser pour exécuter des travaux, tout en prenant en charge les exécuteurs auto-hébergés. Pour plus d’informations, consultez [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners).

## Comparaison des fonctionnalités

### Distribution de vos builds

Jenkins vous permet d’envoyer des builds à un seul agent de build ou de les répartir entre plusieurs agents. Vous pouvez également classifier ces agents en fonction de différents attributs, tels que les types de systèmes d’exploitation.

De même, {% data variables.product.prodname_actions %} peut envoyer des travaux à des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} ou auto-hébergés, et vous pouvez utiliser des étiquettes pour classifier les exécuteurs en fonction de différents attributs. Pour plus d’informations, consultez « [Présentation de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions#runners) » et « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

### Utilisation de sections pour organiser les pipelines

Jenkins divise ses pipelines déclaratifs en plusieurs sections. De même, {% data variables.product.prodname_actions %} organise ses workflows dans des sections distinctes. Le tableau ci-dessous compare les sections Jenkins au workflow {% data variables.product.prodname_actions %}.

| Directives Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |  |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs) |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## using, directives

Jenkins utilise des directives pour gérer les _pipelines déclaratifs_. Ces directives définissent les caractéristiques de votre workflow et son exécution. Le tableau ci-dessous montre comment ces directives sont mappées aux concepts dans {% data variables.product.prodname_actions %}.

| Directives Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Syntaxe cron Jenkins](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)            | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname) |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | {% ifversion ghae %} Outils en ligne de commande disponibles dans `PATH` sur vos systèmes d’exécuteurs auto-hébergés. {% data reusables.actions.self-hosted-runners-software %}{% else %}[Spécifications pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) |{% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs) |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) |

## Utilisation de phases séquentielles

### Traitement parallèle des travaux

Jenkins peut exécuter les `stages` et `steps` en parallèle, tandis que {% data variables.product.prodname_actions %} n’exécute actuellement des travaux qu’en parallèle.

| Jenkins parallèle | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### Matrix

{% data variables.product.prodname_actions %} et Jenkins vous permettent tous deux d’utiliser une matrice pour définir différentes combinaisons de systèmes.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context) |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |  |

### Utilisation des étapes pour exécuter des tâches

Jenkins regroupe des `steps` en `stages`. Chacune de ces étapes peut être un script, une fonction ou une commande, entre autres. De même, {% data variables.product.prodname_actions %} utilise des `jobs` pour exécuter des groupes spécifiques d’`steps`.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Exemples de tâches courantes

### Planification d’un pipeline à exécuter avec `cron`

<table>
<tr>
<th>
Pipeline Jenkins
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

### Configuration des variables d’environnement dans un pipeline

<table>
<tr>
<th>
Pipeline Jenkins
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Génération à partir de projets en amont

<table>
<tr>
<th>
Pipeline Jenkins
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

### Génération avec plusieurs systèmes d’exploitation

<table>
<tr>
<th>
Pipeline Jenkins
</th>
<th>
Workflow {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```

</td>
</tr>
</table>
