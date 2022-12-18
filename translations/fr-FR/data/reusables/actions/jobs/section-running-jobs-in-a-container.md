---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147718204"
---
Utilisez `jobs.<job_id>.container` pour créer un conteneur permettant d’exécuter les étapes d’un travail qui ne spécifient pas encore de conteneur. Si vous avez des étapes qui utilisent à la fois des actions de script et des actions de conteneur, les actions de conteneur s’exécutent en tant que conteneurs frères sur le même réseau avec les mêmes montages de volume.

Si vous ne définissez pas de `container`, toutes les étapes s’exécutent directement sur l’hôte spécifié par `runs-on`, sauf si une étape fait référence à une action configurée pour s’exécuter dans un conteneur.

{% note %}

**Remarque :** L’interpréteur de commandes par défaut pour les étapes `run` incluses dans un conteneur est `sh` plutôt que `bash`. Vous pouvez le remplacer par [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) ou [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% endnote %}

### Exemple : Exécution d’un travail dans un conteneur

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

Quand vous spécifiez uniquement une image conteneur, vous pouvez omettre le mot clé `image`.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
