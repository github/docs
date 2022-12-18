---
title: Cycle de vie des codespaces
intro: 'Vous pouvez développer dans un environnement {% data variables.product.prodname_github_codespaces %} et conserver vos données tout au long du cycle de vie du codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
  - /codespaces/developing-in-codespaces/the-codespace-lifecycle
ms.openlocfilehash: 8f223bce2acf2f6dc6200271397c0d70f28aefe4
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188359'
---
## À propos du cycle de vie d’un codespace

Le cycle de vie d’un codespace commence lorsque vous créez un codespace et se termine lorsque vous le supprimez. Vous pouvez vous déconnecter et vous reconnecter à un codespace actif sans que cela n’affecte ses processus en cours d’exécution. Vous pouvez arrêter et redémarrer un codespace sans perdre les modifications que vous avez apportées à votre projet.

## Création d’un codespace

Lorsque vous souhaitez travailler sur un projet, vous pouvez choisir de créer un codespace ou d’ouvrir un codespace existant. Vous pouvez créer un codespace à partir d’une branche de votre dépôt chaque fois que vous développez dans {% data variables.product.prodname_github_codespaces %} ou conserver un codespace à long terme pour une fonctionnalité. {% data reusables.codespaces.starting-new-project-template %} Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) » et « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) ».

{% data reusables.codespaces.max-number-codespaces %} De même, si vous atteignez le nombre maximal de codespaces actifs et que vous essayez d’en démarrer un autre, vous êtes invité à arrêter l’un de vos codespaces actifs.

Si vous choisissez de créer un codespace chaque fois que vous travaillez sur un projet, vous devez régulièrement envoyer (push) vos modifications afin que les nouvelles validations soient sur {% data variables.product.prodname_dotcom %}. Si vous choisissez d’utiliser un codespace à long terme pour votre projet, vous devez extraire la branche par défaut de votre référentiel chaque fois que vous commencez à travailler dans ce codespace afin que votre environnement dispose des dernières validations. Ce workflow est très similaire à celui qui consiste à travailler sur un projet sur votre ordinateur local. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Enregistrement des modifications dans un codespace

Lorsque vous vous connectez à un codespace via le web, l’enregistrement automatique est systématiquement activé pour l’éditeur web et configuré de manière à enregistrer les modifications après un certain délai. Lorsque vous vous connectez à un codespace via {% data variables.product.prodname_vscode %} s’exécutant sur votre bureau, vous devez activer l’enregistrement automatique. Pour plus d’informations, consultez [Enregistrer/Enregistrer automatiquement](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) dans la documentation {% data variables.product.prodname_vscode %}.

Votre travail sera enregistré sur une machine virtuelle dans le cloud. Vous pouvez fermer et arrêter un codespace et revenir ultérieurement au travail enregistré. En présence de modifications non enregistrées, votre éditeur vous invite à les enregistrer avant de quitter. Toutefois, si votre codespace est supprimé, votre travail l’est également. Pour conserver votre travail, vous devez commiter vos modifications et les pousser (push) vers votre dépôt distant, ou publier votre travail dans un nouveau dépôt distant si vous avez créé votre codespace à partir d’un modèle. Pour plus d’informations, consultez « [Utilisation d’un contrôle de code source dans votre codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) ».

## Délais d’expiration pour {% data variables.product.prodname_github_codespaces %}

Si vous laissez votre codespace s’exécuter sans interaction, ou si vous quittez votre codespace sans l'arrêter explicitement, il s’arrête après une période d'inactivité et cesse de fonctionner. Par défaut, un codespace expire après 30 minutes d’inactivité, mais vous pouvez personnaliser le délai d’expiration des codespaces que vous créez. Pour plus d’informations sur la définition du délai d’expiration par défaut de vos espaces de code, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) ». Pour plus d’informations sur l’arrêt d’un codespace, consultez « [Arrêt d’un codespace](#stopping-a-codespace) ».

Lorsqu'un codespace expire, vos données sont conservées à partir du dernier enregistrement de vos modifications. Pour plus d’informations, consultez « [Enregistrement des modifications dans un codespace](#saving-changes-in-a-codespace) ».

## Reconstruction d’un codespace

Vous pouvez régénérer votre codespace pour implémenter les modifications apportées à la votre configuration du conteneur de développement. Pour la plupart des utilisations, vous pouvez créer un codespace comme alternative à la reconstruction d’un codespace. Par défaut, lorsque vous régénérez votre codespace, {% data variables.product.prodname_github_codespaces %} réutilisera les images de votre cache pour accélérer le processus de régénération. Vous pouvez également effectuer une régénération complète qui efface votre cache et régénère le conteneur avec de nouvelles images.

Pour plus d'informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) » et « [Effectuer une régénération complète d'un conteneur](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container) ».

## Arrêt d’un codespace

{% data reusables.codespaces.stopping-a-codespace %} Pour plus d’informations, consultez « [Arrêt et démarrage d’un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace) ».

## Suppression d’un codespace

Vous pouvez créer un codespace pour une tâche particulière, puis le supprimer en toute sécurité après avoir envoyé (push) vos modifications vers une branche distante.

Si vous essayez de supprimer un codespace avec des validations Git non envoyées (push), votre éditeur vous informe de la présence de modifications non envoyées (push) vers une branche distante. Vous pouvez envoyer les modifications souhaitées, puis supprimer votre codespace ou continuer de supprimer votre codespace et toutes les modifications non validées. Vous pouvez également exporter votre code vers une nouvelle branche sans créer de codespace. Pour plus d’informations, consultez « [Exportation des modifications vers une branche](/codespaces/troubleshooting/exporting-changes-to-a-branch) ».

Les codespaces qui ont été arrêtés et qui restent inactifs pendant une période spécifiée sont supprimés automatiquement. Par défaut, les codespaces inactifs sont supprimés après 30 jours, mais vous pouvez personnaliser votre période de conservation des codespaces. Pour plus d’informations, consultez « [Configuration de la suppression automatique de vos espaces de code](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ».

Si vous créez un codespace, il accumule des frais de stockage jusqu’à ce qu’il soit supprimé, qu’il soit actif ou arrêté. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage) ». La suppression d’un codespace ne réduit pas le montant facturable actuel pour {% data variables.product.prodname_github_codespaces %}, qui s’accumule pendant chaque cycle de facturation mensuel. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

Pour plus d’informations sur la suppression d’un codespace, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

## Perte de la connexion lors de l’utilisation de {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} est un environnement de développement cloud et nécessite une connexion Internet. Si vous perdez la connexion à Internet lors de l’utilisation d’un codespace, vous ne pouvez pas accéder à celui-ci. Toutes les modifications non validées sont cependant enregistrées. Une fois la connexion à Internet rétablie, vous pouvez vous connecter à votre codespace dans l'état exact où vous l'avez laissé. En cas de connexion à Internet instable, vous devez valider et envoyer (push) vos modifications régulièrement.

S’il vous arrive souvent de travailler hors connexion, vous pouvez utiliser votre fichier `devcontainer.json` avec l’[extension « Dev Containers »](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) pour {% data variables.product.prodname_vscode_shortname %} afin de créer et d’attacher un conteneur de développement local pour votre dépôt. Pour plus d’informations, consultez [Développement à l’intérieur d’un conteneur](https://code.visualstudio.com/docs/remote/containers) dans la documentation {% data variables.product.prodname_vscode %}.
