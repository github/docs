---
title: Journaux Codespaces
intro: Vue d’ensemble des emplacements de journalisation utilisés par {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145086645"
---
Les informations sur {% data variables.product.prodname_codespaces %} sont générées dans trois journaux différents :

- Journaux de codespace
- Journaux de création
- Journaux d’extension (bureau {% data variables.product.prodname_vscode %}) ou journaux de console de navigateur ({% data variables.product.prodname_vscode %} sur le web)

## <a name="codespace-logs"></a>Journaux de codespace

Ces journaux contiennent des informations détaillées sur le codespace, le conteneur, la session et l’environnement {% data variables.product.prodname_vscode %}. Ils s’avèrent utiles pour diagnostiquer les problèmes de connexion et d’autres comportements inattendus. Par exemple, le codespace se bloque, mais l’option « Recharger Windows » le débloque pendant quelques minutes, ou bien vous êtes déconnecté aléatoirement du codespace, mais vous pouvez vous y reconnecter immédiatement.

{% webui %}

1. Si vous utilisez {% data variables.product.prodname_codespaces %} dans le navigateur, vérifiez que vous êtes connecté au codespace que vous voulez déboguer.
1. Ouvrez la palette de commandes {% data variables.product.prodname_vscode %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)) et tapez **Exporter les journaux**. Sélectionnez **Codespaces : Exporter les journaux** dans la liste pour télécharger les journaux.
1. Définissez l’emplacement auquel enregistrer l’archive zip des journaux, puis cliquez sur **Enregistrer** (bureau) ou sur **OK** (web).
1. Si vous utilisez {% data variables.product.prodname_codespaces %} dans le navigateur, cliquez avec le bouton droit sur l’archive zip des journaux à partir du mode Explorateur et sélectionnez **Télécharger...** pour les télécharger sur votre ordinateur local.

{% endwebui %}

{% vscode %}

1. Ouvrez la palette de commandes {% data variables.product.prodname_vscode %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)) et tapez **Exporter les journaux**. Sélectionnez **Codespaces : Exporter les journaux** dans la liste pour télécharger les journaux.
1. Définissez l’emplacement auquel enregistrer l’archive zip des journaux, puis cliquez sur **Enregistrer** (bureau) ou sur **OK** (web).

{% endvscode %}

{% cli %}

Actuellement, vous ne pouvez pas utiliser {% data variables.product.prodname_cli %} pour accéder à ces journaux. Pour y accéder, ouvrez votre codespace dans {% data variables.product.prodname_vscode %} ou dans un navigateur.

{% endcli %}

## <a name="creation-logs"></a>Journaux de création

Ces journaux contiennent des informations sur le conteneur, le conteneur de développement et leur configuration. Ils s’avèrent utiles pour déboguer les problèmes de configuration et d’installation.


{% webui %}

1. Connectez-vous au codespace à déboguer.
2. Ouvrez la {% data variables.product.prodname_vscode_command_palette %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)) et tapez **Journaux de création**. Sélectionnez **Codespaces : Voir le journal de création** dans la liste pour ouvrir le fichier `creation.log`.

Pour partager le journal avec le support, vous pouvez copier le texte du journal de création dans un éditeur de texte et enregistrer le fichier localement.

{% endwebui %}

{% vscode %}

Ouvrez la palette de commandes (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)) et tapez **Journaux de création**. Sélectionnez **Codespaces : Voir le journal de création** dans la liste pour ouvrir le fichier `creation.log`.

Pour partager le journal avec le support, vous pouvez copier le texte du journal de création dans un éditeur de texte et enregistrer le fichier localement.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour voir le journal de création, utilisez la sous-commande `gh codespace logs`. Après avoir entré la commande, faites votre choix dans la liste des codespaces affichés.

```shell
gh codespace logs
```

Pour plus d’informations sur cette commande, consultez [le manuel de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_logs).

Pour partager le journal avec le support, vous pouvez enregistrer la sortie dans un fichier :

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

## <a name="extension-logs"></a>Journaux d’extension

Ces journaux sont disponibles uniquement pour les utilisateurs de bureau {% data variables.product.prodname_vscode %}. Ils s’avèrent utiles si l’extension {% data variables.product.prodname_codespaces %} ou l’éditeur {% data variables.product.prodname_vscode %} rencontrent des problèmes qui empêchent toute création ou connexion.

1. Dans {% data variables.product.prodname_vscode %}, ouvrez la palette de commandes.
1. Tapez **Journaux** et sélectionnez **Développeur : Ouvrir le dossier des journaux d’extension** dans la liste pour ouvrir le dossier du journal d’extension dans l’explorateur de fichiers de votre système.

À partir de cette vue, vous pouvez accéder aux journaux générés par les différentes extensions que vous utilisez dans {% data variables.product.prodname_vscode %}. Vous pouvez y voir les journaux de GitHub Codespaces, GitHub Authentication et Git, en plus des éventuelles autres extensions que vous avez activées.

## <a name="browser-console-logs"></a>Journaux de console de navigateur

Ces journaux s’avèrent utiles uniquement si vous voulez déboguer des problèmes liés à l’utilisation de {% data variables.product.prodname_codespaces %} dans le navigateur. Ils servent à corriger les problèmes liés à la création et à la connexion à {% data variables.product.prodname_codespaces %}.

1. Dans la fenêtre de navigateur du codespace à déboguer, ouvrez la fenêtre des outils de développement.
1. Affichez l’onglet « Console » et cliquez sur **erreurs** dans la barre latérale gauche pour afficher uniquement les erreurs.
1. Dans la zone de journal située à droite, cliquez avec le bouton droit et sélectionnez **Enregistrer sous** pour enregistrer une copie des erreurs sur votre ordinateur local.
  ![Enregistrer les erreurs](/assets/images/help/codespaces/browser-console-log-save.png)
