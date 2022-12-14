---
title: Cycle de vie des codespaces
intro: Vous pouvez développer dans un environnement {% data variables.product.prodname_codespaces %} et conserver vos données tout au long du cycle de vie de l’espace de code.
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 21aa691b94c8247a11a06537523cdaa070bd24b9
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876924"
---
## À propos du cycle de vie d’un codespace

Le cycle de vie d’un codespace commence lorsque vous créez un codespace et se termine lorsque vous le supprimez. Vous pouvez vous déconnecter et vous reconnecter à un codespace actif sans que cela n’affecte ses processus en cours d’exécution. Vous pouvez arrêter et redémarrer un codespace sans perdre les modifications que vous avez apportées à votre projet.

## Création d’un codespace

Lorsque vous souhaitez travailler sur un projet, vous pouvez choisir de créer un codespace ou d’ouvrir un codespace existant. Vous pouvez créer un codespace à partir d’une branche de votre projet chaque fois que vous développez dans {% data variables.product.prodname_codespaces %} ou conserver un codespace à long terme pour une fonctionnalité. Pour plus d’informations, consultez « [Création d’un espace de code](/codespaces/developing-in-codespaces/creating-a-codespace) ».

{% data reusables.codespaces.max-number-codespaces %} De même, si vous atteignez le nombre maximal de codespaces actifs et que vous essayez d’en démarrer un autre, vous êtes invité à arrêter l’un de vos codespaces actifs.

Si vous choisissez de créer un codespace chaque fois que vous travaillez sur un projet, vous devez régulièrement envoyer (push) vos modifications afin que les nouvelles validations soient sur {% data variables.product.prodname_dotcom %}. Si vous choisissez d’utiliser un codespace à long terme pour votre projet, vous devez extraire la branche par défaut de votre référentiel chaque fois que vous commencez à travailler dans ce codespace afin que votre environnement dispose des dernières validations. Ce workflow est très similaire à celui qui consiste à travailler sur un projet sur votre ordinateur local. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Enregistrement des modifications dans un codespace

Lorsque vous vous connectez à un codespace via le web, l’enregistrement automatique est systématiquement activé pour l’éditeur web et configuré de manière à enregistrer les modifications après un certain délai. Lorsque vous vous connectez à un codespace via {% data variables.product.prodname_vscode %} s’exécutant sur votre bureau, vous devez activer l’enregistrement automatique. Pour plus d’informations, consultez [Enregistrer/Enregistrer automatiquement](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) dans la documentation {% data variables.product.prodname_vscode %}.

Si vous souhaitez enregistrer vos modifications dans le référentiel Git du système de fichiers du codespace, validez-les et envoyez-les (push) vers une branche distante.

En présence de modifications non enregistrées, votre éditeur vous invite à les enregistrer avant de quitter.

## Délai d’expiration des codespaces

Si vous laissez votre codespace s’exécuter sans interaction, ou si vous quittez votre codespace sans l'arrêter explicitement, il s’arrête après une période d'inactivité et cesse de fonctionner. Par défaut, un codespace expire après 30 minutes d’inactivité, mais vous pouvez personnaliser le délai d’expiration des codespaces que vous créez. Pour plus d’informations sur la définition du délai d’expiration par défaut de vos espaces de code, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) ». Pour plus d’informations sur l’arrêt d’un codespace, consultez « [Arrêt d’un codespace](#stopping-a-codespace) ».

Lorsqu'un codespace expire, vos données sont conservées à partir du dernier enregistrement de vos modifications. Pour plus d’informations, consultez « [Enregistrement des modifications dans un codespace](#saving-changes-in-a-codespace) ».

## Reconstruction d’un codespace

Vous pouvez reconstruire votre codespace pour restaurer un état propre comme si vous aviez créé un nouveau codespace. Pour la plupart des utilisations, vous pouvez créer un codespace comme alternative à la reconstruction d’un codespace. Vous êtes plus susceptible de reconstruire un codespace pour implémenter les modifications apportées à votre conteneur de développement. Lorsque vous reconstruisez un codespace, tous les conteneurs Docker, images, volumes et caches sont nettoyés, puis le codespace est reconstruit.

Si vous avez besoin que certaines de ces données persistent lors d'une reconstruction, vous pouvez créer, à l'emplacement souhaité du conteneur, un lien symbolique (symlink) vers le répertoire persistant. Par exemple, dans votre répertoire `.devcontainer`, vous pouvez créer un répertoire `config` qui sera conservé lors d’une reconstruction. Vous pouvez ensuite créer un lien symbolique vers le répertoire `config` et son contenu sous forme de `postCreateCommand` dans votre fichier `devcontainer.json`.

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

## Arrêt d’un codespace

Vous pouvez, à tout moment, arrêter un codespace. Lorsque vous arrêtez un codespace, tous les processus en cours d’exécution sont arrêtés et l’historique de terminal est effacé. Ensuite, lorsque vous le redémarrez, toutes les modifications enregistrées dans votre codespace sont disponibles. Si vous n’arrêtez pas explicitement un codespace, il continue de s’exécuter jusqu’à son expiration au terme du délai d’inactivité. Pour plus d’informations, consultez « [Délai d’expiration des codespaces](#codespaces-timeouts) ».

Seuls les codespaces en cours d’exécution entraînent des frais d’UC ; un codespace arrêté entraîne uniquement des coûts de stockage.

Vous pouvez arrêter et redémarrer un codespace pour appliquer des modifications. Par exemple, si vous modifiez le type d’ordinateur utilisé pour votre codespace, vous devez l’arrêter et le redémarrer pour que la modification prenne effet. Vous pouvez également arrêter votre codespace et choisir de le redémarrer ou de le supprimer en cas d’erreur ou d’événement inattendu. Pour plus d’informations, consultez « [Suspension ou arrêt d’un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace) ».

## Suppression d’un codespace

Vous pouvez créer un codespace pour une tâche particulière, puis le supprimer en toute sécurité après avoir envoyé (push) vos modifications vers une branche distante.

Si vous essayez de supprimer un codespace avec des validations Git non envoyées (push), votre éditeur vous informe de la présence de modifications non envoyées (push) vers une branche distante. Vous pouvez envoyer les modifications souhaitées, puis supprimer votre codespace ou continuer de supprimer votre codespace et toutes les modifications non validées. Vous pouvez également exporter votre code vers une nouvelle branche sans créer de codespace. Pour plus d’informations, consultez « [Exportation des modifications vers une branche](/codespaces/troubleshooting/exporting-changes-to-a-branch) ».

Vous êtes facturé pour le stockage de tous vos codespaces. Lorsque vous supprimez un codespace, vous n’êtes plus facturé.

Pour plus d’informations sur la suppression d’un codespace, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

## Perte de connexion lors de l’utilisation de Codespaces

{% data variables.product.prodname_codespaces %} est un environnement de développement basé sur le cloud et nécessite une connexion Internet. Si vous perdez la connexion à Internet lors de l’utilisation d’un codespace, vous ne pouvez pas accéder à celui-ci. Toutes les modifications non validées sont cependant enregistrées. Une fois la connexion à Internet rétablie, vous pouvez vous connecter à votre codespace dans l'état exact où vous l'avez laissé. En cas de connexion à Internet instable, vous devez valider et envoyer (push) vos modifications régulièrement.

S’il vous arrive souvent de travailler hors connexion, vous pouvez utiliser votre fichier `devcontainer.json` avec l’extension [« {% data variables.product.prodname_vscode %} Remote - Containers »](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) pour créer et attacher un conteneur de développement local pour votre référentiel. Pour plus d’informations, consultez [Développement à l’intérieur d’un conteneur](https://code.visualstudio.com/docs/remote/containers) dans la documentation {% data variables.product.prodname_vscode %}.
