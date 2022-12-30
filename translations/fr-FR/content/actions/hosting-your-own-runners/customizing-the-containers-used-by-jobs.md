---
title: Personnaliser les conteneurs utilisés par les travaux
intro: Vous pouvez personnaliser la manière dont votre exécuteur auto-hébergé invoque un conteneur pour un travail.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881162'
---
{% note %}

**Remarque** : Cette fonctionnalité est actuellement en version bêta et est sujette à modification.

{% endnote %}

## À propos de la personnalisation des conteneurs

{% data variables.product.prodname_actions %} vous permet d’exécuter un travail dans un conteneur, en utilisant l’instruction `container:` dans votre fichier de workflow. Pour plus d’informations, consultez [Exécution de travaux dans un conteneur](/actions/using-jobs/running-jobs-in-a-container). Pour traiter les travaux basés sur des conteneurs, l’exécuteur auto-hébergé crée un conteneur pour chaque travail.

{% data variables.product.prodname_actions %} prend en charge des commandes qui vous permettent de personnaliser la manière dont vos conteneurs sont créés par l’exécuteur auto-hébergé. Par exemple, vous pouvez utiliser ces commandes pour gérer les conteneurs via Kubernetes ou Podman, et vous pouvez également personnaliser les commandes `docker run` ou `docker create` utilisées pour invoquer le conteneur. Les commandes de personnalisation sont exécutées par un script, qui se déclenche automatiquement lorsqu’une variable d’environnement spécifique est définie sur l’exécuteur. Pour plus d’informations, consultez [Déclenchement du script de personnalisation](#triggering-the-customization-script) ci-dessous.

Cette personnalisation n’est disponible que pour les exécuteurs auto-hébergés sous Linux, et l’accès à l’utilisateur root n’est pas nécessaire.

## Commandes de personnalisation des conteneurs

{% data variables.product.prodname_actions %} comprend les commandes suivantes pour la personnalisation du conteneur :

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job) : Appelé lorsqu’un travail est lancé.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job) : Appelé à la fin d’un travail.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step) : Appelé une fois pour chaque action de conteneur dans le travail.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step) : Exécute toute étape qui n’est pas une action de conteneur.

Chacune de ces commandes de personnalisation doit être définie dans son propre fichier JSON. Le nom du fichier doit correspondre au nom de la commande, avec l’extension `.json`. Par exemple, la commande `prepare_job` est définie dans `prepare_job.json`. Ces fichiers JSON seront ensuite exécutés ensemble sur l’exécuteur auto-hébergé, dans le cadre du script principal `index.js`. Ce processus est décrit plus en détail dans « [Génération du script de personnalisation](#generating-the-customization-script) ».

Ces commandes comprennent également des arguments de configuration, expliqués plus en détail ci-dessous.

### `prepare_job`

La commande `prepare_job` est appelée lorsqu’un travail est lancé. {% data variables.product.prodname_actions %} transmet tout conteneur de travail ou de service que le travail possède. Cette commande sera appelée si vous avez des conteneurs de service ou de travail dans le travail. 

{% data variables.product.prodname_actions %} suppose que vous effectuerez les tâches suivantes dans la commande `prepare_job` :

- Effacez tout ce qui a été fait lors des travaux précédents, si nécessaire.
- Créez un réseau, si nécessaire.
- Tirez les conteneurs de travail et de service.
- Démarrez le conteneur de travail.
- Démarrez les conteneurs de service.
- Inscrivez dans le fichier de réponse toute information dont {% data variables.product.prodname_actions %} aura besoin :
  - Requis : Indiquez si le conteneur est un conteneur Linux `alpine` (à l’aide du booléen `isAlpine` ). 
  - Facultatif : Tous les champs de contexte que vous souhaitez définir sur le contexte de travail, sans quoi ils ne seront pas disponibles pour les utilisateurs. Pour plus d’informations, consultez « [Contexte `job`](/actions/learn-github-actions/contexts#job-context) ».
- Renvoie `0` lorsque les contrôles d’intégrité ont réussi et que les conteneurs de travaux/services sont démarrés.

#### Arguments

- `jobContainer` : **Facultatif**. Un objet contenant des informations sur le conteneur de travaux spécifié.
  - `image` : **Obligatoire**. Une chaîne contenant l’image Docker.
  - `workingDirectory` : **Obligatoire**. Une chaîne contenant le chemin absolu du répertoire de travail.
  - `createOptions` : **Facultatif**. Les options facultatives _create_ spécifiées dans le YAML. Pour plus d’informations, consultez [Exemple : Exécution d’un travail dans un conteneur](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables` : **Facultatif**. Définit une carte des variables d’environnement clés.
  - `userMountVolumes` : **Facultatif**. Un tableau de volumes de montage utilisateur définis dans le YAML. Pour plus d’informations, consultez [Exemple : Exécution d’un travail dans un conteneur](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
    - `sourceVolumePath` : **Obligatoire**. Le chemin source au volume qui sera monté dans le conteneur Docker.
    - `targetVolumePath` : **Obligatoire**. Le chemin cible du volume qui sera monté dans le conteneur Docker.
    - `readOnly` : **Obligatoire**. Détermine si le montage doit être en lecture seule ou non.
  - `systemMountVolumes` : **Obligatoire**. Un tableau de montages à monter dans le conteneur, mêmes champs que ci-dessus.
    - `sourceVolumePath` : **Obligatoire**. Le chemin source au volume qui sera monté dans le conteneur Docker.
    - `targetVolumePath` : **Obligatoire**. Le chemin cible du volume qui sera monté dans le conteneur Docker.
    - `readOnly` : **Obligatoire**. Détermine si le montage doit être en lecture seule ou non.
  - `registry` **Facultatif**. Les informations d’identification du registre Docker pour un registre de conteneurs privé.
    - `username` : **Facultatif**. Le nom d’utilisateur du compte du registre.
    - `password` : **Facultatif**. Le mot de passe du compte du registre.
    - `serverUrl` : **Facultatif**. L’URL du registre.
  - `portMappings` : **Facultatif**. Un hachage clé-valeur des ports _source:cible_ à mapper dans le conteneur.
- `services` : **Facultatif**. Un ensemble de conteneurs de services à démarrer.
  - `contextName` : **Obligatoire**. Le nom du service dans le contexte du travail.
  - `image` : **Obligatoire**. Une chaîne contenant l’image Docker.
  - `createOptions` : **Facultatif**. Les options facultatives _create_ spécifiées dans le YAML. Pour plus d’informations, consultez [Exemple : Exécution d’un travail dans un conteneur](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables` : **Facultatif**. Définit une carte des variables d’environnement clés.
  - `userMountVolumes` : **Facultatif**. Un tableau de montages à monter dans le conteneur, mêmes champs que ci-dessus.
    - `sourceVolumePath` : **Obligatoire**. Le chemin source au volume qui sera monté dans le conteneur Docker.
    - `targetVolumePath` : **Obligatoire**. Le chemin cible du volume qui sera monté dans le conteneur Docker.
    - `readOnly` : **Obligatoire**. Détermine si le montage doit être en lecture seule ou non.
  - `registry` **Facultatif**. Les informations d’identification du registre Docker pour le registre de conteneurs privé.
    - `username` : **Facultatif**. Le nom d’utilisateur du compte du registre.
    - `password` : **Facultatif**. Le mot de passe du compte du registre.
    - `serverUrl` : **Facultatif**. L’URL du registre.
  - `portMappings` : **Facultatif**. Un hachage clé-valeur des ports _source:cible_ à mapper dans le conteneur.

#### Exemple d’entrée

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### Exemple de sortie

Cet exemple de sortie est le contenu du site `responseFile` défini dans l’entrée ci-dessus.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

La commande `cleanup_job` est appelée à la fin d’un travail. {% data variables.product.prodname_actions %} suppose que vous effectuerez les tâches suivantes dans la commande `cleanup_job` :

- Arrêtez tous les conteneurs de services ou de travaux en cours d’exécution (ou le pod équivalent).
- Arrêtez le réseau (s’il existe).
- Supprimez tous les conteneurs de travaux ou de services (ou le pod équivalent).
- Supprimez le réseau (s’il existe).
- Nettoyez tout ce qui a été créé pour ce travail.

#### Arguments

Aucun argument n’est fourni pour `cleanup_job`.

#### Exemple d’entrée

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### Exemple de sortie

Aucune sortie n’est attendue pour `cleanup_job`.

### `run_container_step`

La commande `run_container_step` est appelée une fois pour chaque action de conteneur dans votre travail. {% data variables.product.prodname_actions %} suppose que vous effectuerez les tâches suivantes dans la commande `run_container_step` :

- Tirez ou générez le conteneur requis (un échec se produit si vous ne pouvez pas).
- Exécutez l’action du conteneur et renvoyez le code de sortie du conteneur.
- Diffusez en continu la sortie des journaux d’étapes vers stdout et stderr.
- Nettoyez le conteneur après son exécution.

#### Arguments

- `image` : **Facultatif**. Une chaîne contenant l’image Docker. Sinon, un Dockerfile doit être fourni.
- `dockerfile` : **Facultatif**. Une chaîne contenant le chemin vers le Dockerfile, sinon une image doit être fournie.
- `entryPointArgs` : **Facultatif**. Une liste contenant les arguments du point d’entrée.
- `entryPoint` : **Facultatif**. Le point d’entrée du conteneur à utiliser si le point d’entrée par défaut de l’image doit être remplacé.
- `workingDirectory` : **Obligatoire**. Une chaîne contenant le chemin absolu du répertoire de travail.
- `createOptions` : **Facultatif**. Les options facultatives _create_ spécifiées dans le YAML. Pour plus d’informations, consultez [Exemple : Exécution d’un travail dans un conteneur](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
- `environmentVariables` : **Facultatif**. Définit une carte des variables d’environnement clés.
- `prependPath` : **Facultatif**. Un tableau de chemins supplémentaires à ajouter à la variable `$PATH`.
- `userMountVolumes` : **Facultatif**. Un tableau de volumes de montage utilisateur définis dans le YAML. Pour plus d’informations, consultez [Exemple : Exécution d’un travail dans un conteneur](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `sourceVolumePath` : **Obligatoire**. Le chemin source au volume qui sera monté dans le conteneur Docker.
  - `targetVolumePath` : **Obligatoire**. Le chemin cible du volume qui sera monté dans le conteneur Docker.
  - `readOnly` : **Obligatoire**. Détermine si le montage doit être en lecture seule ou non.
- `systemMountVolumes` : **Obligatoire**. Un tableau de montages à monter dans le conteneur, avec les mêmes champs que ci-dessus.
  - `sourceVolumePath` : **Obligatoire**. Le chemin source au volume qui sera monté dans le conteneur Docker.
  - `targetVolumePath` : **Obligatoire**. Le chemin cible du volume qui sera monté dans le conteneur Docker.
  - `readOnly` : **Obligatoire**. Détermine si le montage doit être en lecture seule ou non.
- `registry` **Facultatif**. Les informations d’identification du registre Docker pour un registre de conteneurs privé.
  - `username` : **Facultatif**. Le nom d’utilisateur du compte du registre.
  - `password` : **Facultatif**. Le mot de passe du compte du registre.
  - `serverUrl` : **Facultatif**. L’URL du registre.
- `portMappings` : **Facultatif**. Un hachage clé-valeur des ports _source:cible_ à mapper dans le conteneur.

#### Exemple de saisie d’une image

Si vous utilisez une image Docker, vous pouvez spécifier le nom de l’image dans le paramètre `"image":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Exemple d’entrée pour un Dockerfile

Si votre conteneur est défini par un Dockerfile, cet exemple montre comment spécifier le chemin d’accès à un `Dockerfile` dans votre entrée, en utilisant le paramètre `"dockerfile":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Exemple de sortie

Aucune sortie n’est attendue pour `run_container_step`.

### `run_script_step`

{% data variables.product.prodname_actions %} suppose que vous effectuerez les tâches suivantes :

- Invoque le script fourni à l’intérieur du conteneur de travail et renvoie le code de sortie.
- Diffusez en continu la sortie du journal des étapes vers stdout et stderr.

#### Arguments

- `entryPointArgs` : **Facultatif**. Une liste contenant les arguments du point d’entrée.
- `entryPoint` : **Facultatif**. Le point d’entrée du conteneur à utiliser si le point d’entrée par défaut de l’image doit être remplacé.
- `prependPath` : **Facultatif**. Un tableau de chemins supplémentaires à ajouter à la variable `$PATH`.
- `workingDirectory` : **Obligatoire**. Une chaîne contenant le chemin absolu du répertoire de travail.
- `environmentVariables` : **Facultatif**. Définit une carte des variables d’environnement clés.

#### Exemple d’entrée

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### Exemple de sortie

Aucune sortie n’est attendue pour `run_script_step`.

## Génération du script de personnalisation

{% data variables.product.prodname_dotcom %} a créé un référentiel d’exemple qui montre comment générer des scripts de personnalisation pour Docker et Kubernetes. 

{% note %}

**Remarque :** Les scripts qui en résultent sont disponibles à des fins de test, et vous devrez déterminer s’ils sont adaptés à vos besoins.

{% endnote %}

1. Clonez le référentiel [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) sur votre exécuteur auto-hébergé.

1. Le répertoire `examples/` contient quelques commandes de personnalisation existantes, chacune avec son propre fichier JSON. Vous pouvez examiner ces exemples et les utiliser comme point de départ pour vos propres commandes de personnalisation.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Générez les packages npm. Ces commandes génèrent les fichiers `index.js` dans `packages/docker/dist` et `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Lorsque le site `index.js` est déclenché par {% data variables.product.prodname_actions %}, il exécute les commandes de personnalisation définies dans les fichiers JSON. Pour déclencher le programme `index.js`, vous devrez l’ajouter à votre variable d’environnement `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, comme décrit dans la section suivante.

## Déclenchement du script de personnalisation

Les scripts personnalisés doivent se trouver sur l’exécuteur, mais ne doivent pas être stockés dans le répertoire de l’application d’exécuteur auto-hébergé. Les scripts sont exécutés dans le contexte de sécurité du compte de service qui exécute le service d’exécuteur.

{% note %}

**Remarque** : Le script déclenché est traité de manière synchrone, il bloquera donc l’exécution du travail en cours.

{% endnote %}

Les scripts sont exécutés automatiquement lorsque l’exécuteur possède la variable d’environnement suivante contenant un chemin absolu vers le script :

- `ACTIONS_RUNNER_CONTAINER_HOOK` : le script défini dans cette variable d’environnement est déclenché quand un travail a été affecté à un exécuteur, mais avant l’exécution du travail.

Pour définir cette variable d’environnement, vous pouvez l’ajouter au système d’exploitation ou à un fichier nommé `.env` dans le répertoire d’application d’exécuteur auto-hébergé. Par exemple, l’entrée `.env` suivante permettra à l’exécuteur de lancer automatiquement le script sur `/Users/octocat/runner/index.js` avant l’exécution de chaque série de travaux basés sur un conteneur :

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Si vous voulez vous assurer que votre tâche s’exécute toujours à l’intérieur d’un conteneur et que, par conséquent, les personnalisations du conteneur sont toujours appliquées, vous pouvez définir la variable `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` sur l’exécuteur auto-hébergé sur `true`. Cela fera échouer les travaux qui ne spécifient pas un conteneur de travaux.

## Dépannage

### Pas de paramètre de délai d’attente

Il n’existe actuellement aucun paramètre de délai d’attente disponible pour le script exécutés par `ACTIONS_RUNNER_CONTAINER_HOOK`. Par conséquent, vous pouvez envisager d’ajouter la gestion des délais d’expiration à votre script.

### Examen du journal d’exécution de workflow

Pour vérifier si vos scripts s’exécutent, vous pouvez passer en revue les journaux pour ce travail. Pour plus d’informations sur la vérification des journaux, consultez « [Affichage des journaux pour diagnostiquer les défaillances](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures) ».
