---
title: Journaux GitHub Codespaces
intro: 'Vue d’ensemble des journaux utilisés par {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159691'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Les informations sur {% data variables.product.prodname_github_codespaces %} sont consignées dans plusieurs journaux :

{% webui %}

- Journaux de codespace
- Journaux de création
- Journaux de console du navigateur (pour le client web {% data variables.product.prodname_vscode_shortname %})

Les journaux d’extension sont disponibles si vous utilisez {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode_shortname %}. Pour obtenir des détails, cliquez sur l’onglet « {% data variables.product.prodname_vscode %} » ci-dessus.

{% endwebui %}

{% vscode %}

- Journaux de codespace
- Journaux de création
- Journaux d’extension (pour l’application de bureau {% data variables.product.prodname_vscode_shortname %}) 

Des journaux de navigateur sont disponibles si vous utilisez {% data variables.product.prodname_github_codespaces %} dans votre navigateur. Pour obtenir des détails, cliquez sur l’onglet « Navigateur web » ci-dessus.

{% endvscode %}

{% cli %}

- Journaux de codespace
- Journaux de création

D’autres journaux sont disponibles si vous utilisez {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode_shortname %} ou dans votre navigateur web. Pour obtenir des détails, cliquez sur les onglets ci-dessus.

{% endcli %}

{% jetbrains %}

- Journaux de création

D’autres journaux sont disponibles si vous utilisez {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode_shortname %} ou dans votre navigateur web. Pour obtenir des détails, cliquez sur les onglets ci-dessus.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. Si vous utilisez {% data variables.product.prodname_github_codespaces %} dans le navigateur, vérifiez que vous êtes connecté au codespace que vous voulez déboguer.
1. Ouvrez la {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux)), puis tapez **Exporter les journaux**. Sélectionnez **Codespaces : Exporter les journaux** dans la liste pour télécharger les journaux.
1. Définissez l’emplacement auquel enregistrer l’archive zip des journaux, puis cliquez sur **Enregistrer** (bureau) ou sur **OK** (web).
1. Si vous utilisez {% data variables.product.prodname_github_codespaces %} dans le navigateur, cliquez avec le bouton droit sur l’archive zip des journaux à partir du mode Explorateur et sélectionnez **Télécharger...** pour les télécharger sur votre ordinateur local.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Ouvrez la {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux)), puis tapez **Exporter les journaux**. Sélectionnez **Codespaces : Exporter les journaux** dans la liste pour télécharger les journaux.
1. Définissez l’emplacement auquel enregistrer l’archive zip des journaux, puis cliquez sur **Enregistrer** (bureau) ou sur **OK** (web).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

Actuellement, vous ne pouvez pas utiliser {% data variables.product.prodname_cli %} pour accéder à ces journaux. Pour y accéder, ouvrez votre codespace dans {% data variables.product.prodname_vscode_shortname %} ou dans un navigateur.

{% endcli %}

## Journaux de création

Ces journaux contiennent des informations sur le conteneur, le conteneur de développement et leur configuration. Ils s’avèrent utiles pour déboguer les problèmes de configuration et d’installation.

{% webui %}

1. Connectez-vous au codespace à déboguer.
2. Ouvrez la {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux)), puis tapez **Journaux de création**. Sélectionnez **Codespaces : Voir le journal de création** dans la liste pour ouvrir le fichier `creation.log`.

Pour partager le journal avec le support, vous pouvez copier le texte du journal de création dans un éditeur de texte et enregistrer le fichier localement.

{% endwebui %}

{% vscode %}

Ouvrez la {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux)), puis tapez **Journaux de création**. Sélectionnez **Codespaces : Voir le journal de création** dans la liste pour ouvrir le fichier `creation.log`.

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

{% vscode %}

## Journaux d’extension

Ces journaux sont disponibles uniquement pour les utilisateurs de bureau de {% data variables.product.prodname_vscode_shortname %}. Ils s’avèrent utiles si l’extension {% data variables.product.prodname_github_codespaces %} ou l’éditeur {% data variables.product.prodname_vscode_shortname %} rencontrent des problèmes qui empêchent toute création ou connexion.

1. Dans {% data variables.product.prodname_vscode_shortname %}, ouvrez la palette de commandes.
1. Tapez **Journaux** et sélectionnez **Développeur : Ouvrir le dossier des journaux d’extension** dans la liste pour ouvrir le dossier du journal d’extension dans l’explorateur de fichiers de votre système.

À partir de cette vue, vous pouvez accéder aux journaux générés par les différentes extensions que vous utilisez dans {% data variables.product.prodname_vscode_shortname %}. Vous verrez des journaux pour {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_dotcom %} Authentication et Git, en plus des autres extensions que vous avez activées.

{% endvscode %}

{% webui %}

## Journaux de console de navigateur

Ces journaux ne s’avèrent utiles que si vous souhaitez déboguer des problèmes liés à l’utilisation de {% data variables.product.prodname_github_codespaces %} dans le navigateur. Ils sont utiles pour le débogage des problèmes de création et de connexion à {% data variables.product.prodname_github_codespaces %}.

1. Dans la fenêtre de navigateur du codespace à déboguer, ouvrez la fenêtre des outils de développement.
1. Affichez l’onglet « Console » et cliquez sur **erreurs** dans la barre latérale gauche pour afficher uniquement les erreurs.
1. Dans la zone de journal située à droite, cliquez avec le bouton droit et sélectionnez **Enregistrer sous** pour enregistrer une copie des erreurs sur votre ordinateur local.
  ![Enregistrer les erreurs](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. Dans la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}, cliquez sur l’icône du journal.

   ![Capture d’écran du bouton de journal](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## Journaux JetBrains

Vous pouvez télécharger les journaux de l’IDE JetBrains distant et de l’application cliente locale en accédant au menu **Aide** de l’application cliente JetBrains et en cliquant sur **Collecter les journaux de l’hôte et du client**.

{% endjetbrains %}

## Pour aller plus loin

- « [Examen des journaux d’audit de votre organisation pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces) »
- « [Examen des journaux de sécurité pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces) »
