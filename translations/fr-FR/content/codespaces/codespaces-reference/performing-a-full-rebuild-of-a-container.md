---
title: Effectuer une régénération complète d'un conteneur
intro: 'Si vous manquez d''espace disque ou si vous voulez vous assurer que la configuration de votre conteneur de développement fonctionnera dans de nouveaux espaces de code, vous pouvez effectuer une régénération complète d''un conteneur.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180841'
---
## À propos de la régénération d’un conteneur

Lorsque vous travaillez dans un codespace, votre environnement de développement est un conteneur Docker qui s’exécute sur une machine virtuelle. Si vous modifiez la configuration de votre conteneur de développement à partir d'un codespace et souhaitez appliquer ces modifications au codespace actuel, vous devez régénérer le conteneur.

Par défaut, lorsque vous régénérez un conteneur, {% data variables.product.prodname_github_codespaces %} accélère le processus de génération en réutilisant les images mises en cache lors des précédentes générations du conteneur. C'est généralement le moyen le plus rapide d'implémenter des changements dans la configuration de votre conteneur de développement, pour les raisons suivantes.
- {% data variables.product.prodname_github_codespaces %} peut réutiliser les images dans votre cache plutôt que de les récupérer dans les registres des conteneurs.
- Les parties de la configuration de votre conteneur de développement qui définissent la façon dont le conteneur est généré, par exemple les caractéristiques du conteneur de développement et les instructions Dockerfile, peuvent avoir déjà été implémentées dans les couches d'image de votre cache, ce qui vous évite d'avoir à attendre que ces processus s'exécutent à nouveau. (Cependant, les commandes de votre configuration qui s'exécutent après la génération du conteneur, telles que `onCreateCommand`, s'exécuteront à nouveau).

Vous souhaiterez parfois effectuer une régénération complète de votre conteneur. Lors d'une régénération complète, {% data variables.product.prodname_github_codespaces %} nettoie tous les conteneurs, images et volumes Docker du cache, puis régénère votre conteneur avec les nouvelles images extraites. Tous les réglages définis dans votre configuration s'exécuteront à nouveau, générant ainsi de nouvelles couches d'images. Vous pouvez effectuer une régénération complète après de nombreuses itérations de régénération de votre conteneur avec des images mises en cache, dans des situations telles que les suivantes.

- Vous voulez vous assurer que l'installation définie dans votre configuration ne dépend pas des images mises en cache et qu'elle s'exécutera comme prévu lorsque quelqu'un utilisateur créera un nouveau codespace basé sur la configuration. Par exemple, une dépendance peut avoir été supprimée de l'image de base depuis sa dernière insertion dans votre codespace.
- Vous voulez libérer l'espace disque utilisé par votre cache, par exemple si vous êtes à court d'espace disque ou si vous voulez minimiser les frais de stockage. Votre cache d'image peut utiliser une quantité importante d'espace disque si vous avez modifié votre image de base plusieurs fois, si vous avez apporté un grand nombre de modifications itératives à votre configuration ou si vous exécutez plusieurs conteneurs avec Docker Compose.

## Effectuer une régénération complète

Vous pouvez effectuer une régénération complète dans {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.command-pallette %}
1. Commencez à taper « Rebuild », puis sélectionnez **Codespaces: Full Rebuild Container**.

   ![Capture d'écran de la commande Full Rebuild Container dans la palette de commandes](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## Persistance des données lors d'une régénération complète

Tous les fichiers et dossiers contenus dans le répertoire `/workspaces` de votre codespace sont toujours conservés lors d'une régénération. Vous n'avez pas besoin de modifier les paramètres ni d'ajouter une configuration pour conserver le contenu de ce répertoire lors d'une régénération complète.

Si vous souhaitez conserver des fichiers en dehors du répertoire `/workspaces` lors d'une régénération complète, vous pouvez créer, à l'emplacement souhaité du conteneur, un lien symbolique (symlink) vers le répertoire persistant. Par exemple, dans votre répertoire `/workspaces/.devcontainer`, vous pouvez créer un répertoire `config` qui sera conservé lors d’une reconstruction. Vous pouvez ensuite créer un lien symbolique vers le répertoire `config` et son contenu sous forme de `postCreateCommand` dans votre fichier `devcontainer.json`.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

Dans l’exemple de fichier `postCreate.sh` ci-dessous, le contenu du répertoire `config` est lié symboliquement au répertoire de base.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Pour aller plus loin
- [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
