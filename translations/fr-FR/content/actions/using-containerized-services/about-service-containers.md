---
title: À propos des conteneurs de service
intro: 'Vous pouvez utiliser des conteneurs de services pour connecter des bases de données, des services web, des caches mémoire et d’autres outils à votre workflow.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145107157'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des conteneurs de service

Les conteneurs de service sont des conteneurs Docker qui fournissent un moyen simple et portable d’héberger des services dont vous pouvez avoir besoin pour tester ou utiliser votre application dans un workflow. Par exemple, votre workflow peut avoir besoin d’exécuter des tests d’intégration qui nécessitent un accès à une base de données et à un cache mémoire.

Vous pouvez configurer des conteneurs de service pour chaque travail d’un workflow. {% data variables.product.prodname_dotcom %} crée un nouveau conteneur Docker pour chaque service configuré dans le workflow et détruit le conteneur de service une fois le travail terminé. Les étapes d’un travail peuvent communiquer avec tous les conteneurs de service qui font partie du même travail. Toutefois, vous ne pouvez pas créer et utiliser des conteneurs de service à l’intérieur d’une action composite. 

{% data reusables.actions.docker-container-os-support %}

## Communication avec des conteneurs de service

Vous pouvez configurer des travaux dans un workflow pour qu’ils s’exécutent directement sur une machine d’exécuteur ou dans un conteneur Docker. La communication entre un travail et ses conteneurs de service est différente selon qu’un travail s’exécute directement sur la machine de l’exécuteur ou dans un conteneur.

### Exécution de travaux dans un conteneur

Lorsque vous exécutez des travaux dans un conteneur, {% data variables.product.prodname_dotcom %} connecte les conteneurs de service au travail à l’aide de réseaux de pont définis par l’utilisateur de Docker. Pour plus d’informations, consultez « [Utiliser des réseaux de pont](https://docs.docker.com/network/bridge/) » dans la documentation Docker.

L’exécution du travail et des services dans un conteneur simplifie l’accès réseau. Vous pouvez accéder à un conteneur de service à l’aide de l’étiquette que vous configurez dans le workflow. Le nom d’hôte du conteneur de service est automatiquement mappé au nom de l’étiquette. Par exemple, si vous créez un conteneur de service avec l’étiquette `redis`, le nom d’hôte du conteneur de service est `redis`.

Vous n’avez pas besoin de configurer de ports pour les conteneurs de service. Par défaut, tous les conteneurs qui font partie du même réseau Docker s’exposent tous les ports entre eux et aucun port n’est exposé en dehors du réseau Docker.

### Exécution de travaux sur la machine de l’exécuteur

Lorsque vous exécutez des travaux directement sur la machine de l’exécuteur, vous pouvez accéder aux conteneurs de service à l’aide de `localhost:<port>` ou de `127.0.0.1:<port>`. {% data variables.product.prodname_dotcom %} configure le réseau de conteneurs pour permettre la communication entre le conteneur de service et l’hôte Docker.

Lorsqu’un travail s’exécute directement sur une machine d’exécuteur, par défaut, le service s’exécutant dans le conteneur Docker n’expose pas ses ports au travail sur l’exécuteur. Vous devez mapper les ports sur le conteneur de service à l’hôte Docker. Pour plus d’informations, consultez « [Mappage des ports de conteneur de service et d’hôte Docker](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports) ».

## Création de conteneurs de service

Vous pouvez utiliser le mot clé `services` pour créer des conteneurs de service qui font partie d’un travail dans votre workflow. Pour plus d’informations, consultez [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

Cet exemple crée un service appelé `redis` dans un travail appelé `container-job`. Dans cet exemple, l’hôte Docker est le conteneur `node:16-bullseye`.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Mappage des ports de conteneur de service et d’hôte Docker

Si votre travail s’exécute dans un conteneur Docker, vous n’avez pas besoin de mapper les ports sur l’hôte ou le conteneur de service. Si votre travail s’exécute directement sur la machine de l’exécuteur, vous devez mapper tous les ports de conteneur de service requis aux ports de la machine d’exécuteur hôte.

Vous pouvez mapper les ports de conteneurs de service à l’hôte Docker à l’aide du mot clé `ports`. Pour plus d’informations, consultez [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Valeur de `ports` |    Description |
|------------------|--------------|
| `8080:80` |   Mappe le port TCP 80 dans le conteneur au port 8080 sur l’hôte Docker. |
| `8080:80/udp` |   Mappe le port UDP 80 dans le conteneur au port 8080 sur l’hôte Docker. |
| `8080/udp`    | Mappe un port UDP choisi de façon aléatoire dans le conteneur au port UDP 8080 sur l’hôte Docker. |

Lorsque vous mappez des ports à l’aide du mot clé `ports`, {% data variables.product.prodname_dotcom %} utilise la commande `--publish` pour publier les ports du conteneur sur l’hôte Docker. Pour plus d’informations, consultez « [Mise en réseau de conteneurs Docker](https://docs.docker.com/config/containers/container-networking/) » dans la documentation Docker.

Lorsque vous spécifiez le port d’hôte Docker, mais pas le port du conteneur, le port du conteneur est attribué de manière aléatoire à un port libre. {% data variables.product.prodname_dotcom %} définit le port de conteneur affecté dans le contexte du conteneur de service. Par exemple, pour un conteneur de service `redis`, si vous avez configuré le port d’hôte Docker 5432, vous pouvez accéder au port de conteneur correspondant à l’aide du contexte `job.services.redis.ports[5432]`. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts#job-context) ».

### Exemple de mappage de ports Redis

Cet exemple mappe le port `redis` de conteneur de service 6379 au port d’hôte Docker 6379.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

## Pour aller plus loin

- « [Création de conteneurs de service Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers) »
- « [Création de conteneurs de service PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers) »
