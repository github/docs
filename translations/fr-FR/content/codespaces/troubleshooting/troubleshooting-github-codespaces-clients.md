---
title: Résolution des problèmes liés aux clients GitHub Codespaces
shortTitle: Codespaces clients
intro: 'Cet article fournit des informations vous permettant de résoudre les problèmes susceptibles de se produire avec le client utilisé pour {% data variables.product.prodname_github_codespaces %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186170'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Résolution des problèmes liés au client web {% data variables.product.prodname_vscode %}

Si vous rencontrez des problèmes lors de l’utilisation de {% data variables.product.prodname_github_codespaces %} dans un navigateur qui n’est pas basé sur Chromium, essayez de passer à un navigateur Chromium comme Google Chrome ou Microsoft Edge. Vous pouvez également consulter les problèmes connus liés à votre navigateur dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) en recherchant les problèmes étiquetés avec le nom du navigateur, comme [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si vous rencontrez des problèmes liés à l’utilisation de {% data variables.product.prodname_github_codespaces %} dans un navigateur basé sur Chromium, vous pouvez vérifier si vous rencontrez un autre problème connu avec {% data variables.product.prodname_vscode_shortname %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen).

### Différences par rapport à l’utilisation locale de {% data variables.product.prodname_vscode_shortname %}

Quand vous ouvrez un codespace dans votre navigateur, avec le client web {% data variables.product.prodname_vscode_shortname %}, vous remarquerez certaines différences par rapport à un espace de travail local dans l’application de bureau {% data variables.product.prodname_vscode_shortname %}. Par exemple, certaines combinaisons de touches sont différentes ou absentes et certaines extensions peuvent se comporter différemment. Pour en obtenir un résumé, consultez : « [Limitations et adaptations connues](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) » dans la documentation de {% data variables.product.prodname_vscode_shortname %}.

Vous pouvez consulter les problèmes connus et consigner de nouveaux problèmes avec l’expérience {% data variables.product.prodname_vscode_shortname %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders constitue la version la plus fréquente de {% data variables.product.prodname_vscode_shortname %}. Elle comporte toutes les fonctionnalités et les correctifs de bogues les plus récents, mais peut aussi parfois contenir de nouveaux problèmes à l’origine d’une rupture de build.

Si vous utilisez une build Insiders et remarquez une rupture de comportement, nous vous recommandons de passer à {% data variables.product.prodname_vscode %} Stable et de réessayer.

Cliquez sur {% octicon "gear" aria-label="The manage icon" %} en bas à gauche de l’éditeur, puis sélectionnez **Basculer vers la version stable...** Si le client web {% data variables.product.prodname_vscode_shortname %} ne se charge pas ou si l’icône {% octicon "gear" aria-label="The manage icon" %} n’est pas disponible, vous pouvez forcer le basculement vers {% data variables.product.prodname_vscode %} Stable en ajoutant `?vscodeChannel=stable` à l’URL de votre codespace et en chargeant le codespace à cette URL.

Si le problème n’est pas résolu dans {% data variables.product.prodname_vscode %} Stable, consultez les problèmes connus et, si nécessaire, consignez un nouveau problème avec l’expérience {% data variables.product.prodname_vscode_shortname %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endwebui %}

{% vscode %}

## Résolution des problèmes liés à {% data variables.product.prodname_vscode_shortname %}

Quand vous ouvrez un codespace dans l’application de bureau {% data variables.product.prodname_vscode_shortname %}, vous remarquerez peut-être quelques différences par rapport à un espace de travail local. Toutefois, l’expérience doit être similaire.

Si vous rencontrez des problèmes, vous pouvez consulter les problèmes connus et consigner de nouveaux problèmes avec l’expérience {% data variables.product.prodname_vscode_shortname %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders constitue la version la plus fréquente de {% data variables.product.prodname_vscode_shortname %}. Elle comporte toutes les fonctionnalités et les correctifs de bogues les plus récents, mais peut aussi parfois contenir de nouveaux problèmes à l’origine d’une rupture de build.

Si vous utilisez une build Insiders et remarquez une rupture de comportement, nous vous recommandons de passer à {% data variables.product.prodname_vscode %} Stable et de réessayer.

Pour passer à {% data variables.product.prodname_vscode %} Stable, fermez l’application {% data variables.product.prodname_vscode %} Insiders, ouvrez l’application {% data variables.product.prodname_vscode %} Stable, puis rouvrez votre codespace.

Si le problème n’est pas résolu dans {% data variables.product.prodname_vscode %} Stable, consultez les problèmes connus et, si nécessaire, consignez un nouveau problème avec l’expérience {% data variables.product.prodname_vscode_shortname %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

{% endvscode %}

{% jetbrains %}

## Résolution des problèmes liés aux IDE JetBrains

### Problèmes de performance

Un type de machine {% data variables.product.prodname_github_codespaces %} avec au moins 4 cœurs est recommandé pour exécuter l’un des IDE JetBrains. Pour plus d’informations, consultez « [Modification du type de machine pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) ».

Si vous utilisez une machine avec 4 cœurs ou plus et que le niveau de performance dans JetBrains vous semble médiocre, vous devrez peut-être augmenter la taille maximale du tas Java. 

Nous vous recommandons de définir la taille maximale du tas entre 2 862 Mio (3 Go) et 60 % de la RAM de l’hôte distant.

Voici quelques conseils de départ que vous pouvez ajuster en fonction de la taille du codebase et de la mémoire dont vous avez besoin pour exécuter votre application. Par exemple, si vous avez un codebase volumineux ou compliqué, vous devrez peut-être augmenter la taille du tas. Si vous avez une application plus importante, vous pouvez définir une taille de tas inférieure pour accorder plus de mémoire à l’application.

| Type de machine   | Taille maximale du tas |
| -------------- | ----------------- |
| 4 cœurs         | 3 Go              |
| 8 cœurs         | 4 Go              |
| 16 ou 32 cœurs | 8 Go              |

1. À gauche de la barre de navigation, en haut de la fenêtre d’application, cliquez sur le nom du codespace.

   ![Capture d’écran du bouton de ressources dans JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. Sous l’onglet Performance, notez les détails de la charge du processeur et de la mémoire. Ces informations indiquent si la machine est surchargée.
 
   ![Capture d’écran du bouton Localhost dans JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Cliquez sur l’onglet Paramètres et modifiez la taille du tas sans dépasser 60 % de la mémoire disponible pour votre codespace.

   ![Capture d’écran du paramètre de taille maximale du tas](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Cliquez sur **Enregistrer et redémarrer**.

### Impossible d’ouvrir le client dans MacOS Ventura 

Dans MacOS Ventura, lorsque vous essayez de vous connecter à un codespace à partir de la passerelle JetBrains pour la première fois, un message peut s’afficher vous indiquant que l’application cliente JetBrains « est endommagée et ne peut pas être ouverte ».

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

Si c’est le cas :

1. Cliquez sur **Annuler** pour ignorer ce message.
1. Cliquez sur l’icône Apple, en haut à gauche de l’écran, puis sur **Paramètres système**. 
1. Cliquez sur **Confidentialité et sécurité** et faites défiler jusqu’à la section « Sécurité ».

   ![Capture d’écran de la boîte de dialogue Confidentialité et sécurité](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   Vous voyez un message indiquant que l’utilisation du client JetBrains a été bloquée. 

1. Cliquez sur **Ouvrir quand même** pour ajouter le client JetBrains à vos applications reconnues. 
   Le message s’affiche à nouveau, mais cette fois avec un bouton **Ouvrir**.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Cliquez à nouveau sur **Annuler**.
1. Revenez à l’application JetBrains Gateway et connectez-vous à nouveau au codespace requis.
   Le client JetBrains s’ouvre maintenant avec succès. Après avoir autorisé l’application cliente à s’exécuter sur votre Mac, vous ne verrez plus le message lorsque vous vous connecterez à vos codespaces.

### Problèmes de connexion SSH

Pour vous connecter par le biais du serveur SSH en cours d’exécution dans votre codespace, vous devez disposer dans votre répertoire `~/.ssh` (MacOS et Linux) ou `%HOMEPATH%\.ssh` (Windows) d’une clé SSH qui a déjà été ajoutée à votre compte {% data variables.product.prodname_dotcom %}. Si aucune clé n’est présente dans ce répertoire, {% data variables.product.prodname_cli %} génère des clés pour vous. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui) ».

Si vous rencontrez des problèmes de validation des clés, essayez de mettre à niveau votre version de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez les [instructions de mise à niveau](https://github.com/cli/cli#installation) dans le fichier README de {% data variables.product.prodname_cli %}.

### Problèmes liés à l’IDE JetBrains

Pour obtenir de l’aide sur les problèmes spécifiques à l’IDE JetBrains que vous utilisez ou à l’application JetBrains Gateway, consultez « [Support produit](https://www.jetbrains.com/support/) » sur le site web de JetBrains.

{% endjetbrains %}
