---
title: Prise en charge des fichiers Dockerfile pour GitHub Actions
shortTitle: Dockerfile support
intro: 'Lors de la création d’une `Dockerfile` pour une action de conteneur Docker, vous devez savoir comment certaines instructions Docker interagissent avec GitHub Actions et le fichier de métadonnées d’une action.'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086105'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des instructions Dockerfile

Un `Dockerfile` contient des instructions et des arguments qui définissent le contenu et le comportement de démarrage d’un conteneur Docker. Pour plus d’informations sur les instructions que Docker prend en charge, consultez « [Dockerfile reference](https://docs.docker.com/engine/reference/builder/) » dans la documentation Docker.

## Instructions Dockerfile et remplacement des instructions

Certaines instructions Docker interagissent avec GitHub Actions, et le fichier de métadonnées d’une action peut remplacer certaines instructions Docker. Vous devez savoir comment votre fichier Dockerfile interagit avec {% data variables.product.prodname_actions %} pour éviter tout comportement inattendu.

### Utilisateur

Les actions Docker doivent être exécutées par l’utilisateur Docker par défaut (racine). N’utilisez pas l’instruction `USER` dans votre `Dockerfile`, car vous ne pourrez pas accéder au `GITHUB_WORKSPACE`. Pour plus d’informations, consultez « [Utilisation des variables d’environnement](/actions/configuring-and-managing-workflows/using-environment-variables) » et [USER reference](https://docs.docker.com/engine/reference/builder/#user) dans la documentation Docker.

### FROM

La première instruction du fichier `Dockerfile` doit être `FROM`, qui sélectionne une image de base Docker. Pour plus d’informations, consultez [FROM reference](https://docs.docker.com/engine/reference/builder/#from) dans la documentation Docker.

Voici quelques bonnes pratiques concernant la définition de l’argument `FROM` :

- Il est recommandé d’utiliser des images Docker officielles. Par exemple, `python` ou `ruby`.
- Utilisez une étiquette de version s’il en existe une, de préférence avec une version principale. Par exemple, utilisez `node:10` au lieu de `node:latest`.
- Il est recommandé d’utiliser des images Docker basées sur le système d’exploitation [Debian](https://www.debian.org/).

### WORKDIR

{% data variables.product.product_name %} définit le chemin du répertoire de travail dans la variable d’environnement `GITHUB_WORKSPACE`. Il est recommandé de ne pas utiliser l’instruction `WORKDIR` dans votre `Dockerfile`. Avant l’exécution de l’action, {% data variables.product.product_name %} monte le répertoire `GITHUB_WORKSPACE` sur tout ce qui se trouvait à cet emplacement dans l’image Docker, puis il définit `GITHUB_WORKSPACE` comme répertoire de travail. Pour plus d’informations, consultez « [Utilisation des variables d’environnement](/actions/configuring-and-managing-workflows/using-environment-variables) » et [WORKDIR reference](https://docs.docker.com/engine/reference/builder/#workdir) dans la documentation Docker.

### ENTRYPOINT

Si vous définissez `entrypoint` dans le fichier de métadonnées d’une action, cela remplacera le fichier `ENTRYPOINT` défini dans le `Dockerfile`. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %} »](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint).

L’instruction Docker `ENTRYPOINT` peut avoir un format _shell_ ou un format _exec_. La documentation Docker `ENTRYPOINT` recommande d’utiliser le format _exec_ de l’instruction `ENTRYPOINT`. Pour plus d’informations sur les formats _exec_ et _shell_, consultez la [ENTRYPOINT reference](https://docs.docker.com/engine/reference/builder/#entrypoint) dans la documentation Docker.

Vous ne devez pas utiliser `WORKDIR` pour spécifier votre point d’entrée dans le Dockerfile. Au lieu de cela, vous devez utiliser un chemin absolu. Pour plus d’informations, consultez [WORKDIR](#workdir).

Si vous configurez votre conteneur pour utiliser le format _exec_ de l’instruction `ENTRYPOINT`, les `args` configurés dans le fichier de métadonnées de l’action ne s’exécuteront pas dans un interpréteur de commandes. Si les `args` de l’action contiennent une variable d’environnement, celle-ci ne sera pas substituée. Par exemple, l’utilisation du format _exec_ suivant n’affiche pas la valeur stockée dans `$GITHUB_SHA`, mais affiche `"$GITHUB_SHA"` à la place.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Si vous souhaitez une substitution de variable, utilisez le format _shell_ ou exécutez directement un interpréteur de commandes. Par exemple, à l’aide du format _exec_ suivant, vous pouvez exécuter un interpréteur de commandes pour afficher la valeur stockée dans la variable d’environnement `GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Pour fournir les `args` définis dans le fichier de métadonnées de l’action à un conteneur Docker qui utilise le format _exec_ dans `ENTRYPOINT`, nous vous recommandons de créer un script shell nommé `entrypoint.sh` que vous appellerez à partir de l’instruction `ENTRYPOINT` :

#### Exemple de *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### Exemple de fichier *entrypoint.sh*

À l’aide de l’exemple de Dockerfile ci-dessus, {% data variables.product.product_name %} envoie les `args` configurés dans le fichier de métadonnées de l’action en tant qu’arguments à `entrypoint.sh`. Ajoutez le `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) en haut du fichier `entrypoint.sh` pour utiliser explicitement l’interpréteur de commandes compatible [POSIX](https://en.wikipedia.org/wiki/POSIX) du système.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Votre code doit être exécutable. Vérifiez que le fichier `entrypoint.sh` dispose d’autorisations `execute` avant de l’utiliser dans un workflow. Vous pouvez modifier l’autorisation à partir de votre terminal à l’aide de cette commande :
  ``` sh
  chmod +x entrypoint.sh
  ```

Lorsqu’un script shell `ENTRYPOINT` n’est pas exécutable, vous recevez une erreur similaire à celle-ci :

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

Si vous définissez `args` dans le fichier de métadonnées de l’action, `args` remplacera l’instruction `CMD` spécifiée dans le fichier de métadonnées de l’action `Dockerfile`. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %} »](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs).

Si vous utilisez `CMD` dans votre `Dockerfile`application, suivez les instructions suivantes :

{% data reusables.actions.dockerfile-guidelines %}

## Fonctionnalités Linux prises en charge

{% data variables.product.prodname_actions %} prend en charge les fonctionnalités Linux par défaut qui sont prises en charge par Docker. Il n’est pas possible d’ajouter ni de supprimer des fonctionnalités. Pour plus d’informations sur les fonctionnalités Linux par défaut qui sont prises en charge par Docker, consultez « [Runtime privilege and Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities) » dans la documentation Docker. Pour en savoir plus sur les fonctionnalités Linux, consultez « [Overview of Linux capabilities](http://man7.org/linux/man-pages/man7/capabilities.7.html) » dans les pages de manuel Linux.
