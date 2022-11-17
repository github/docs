---
title: Éditeur web github.dev
intro: 'Utilisez le github.dev {% data variables.product.prodname_serverless %} à partir de votre référentiel ou de votre demande de tirage (pull request) pour créer et valider des modifications.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: d1c21f3e75ecc4fec282c9156943c137287d203c
ms.sourcegitcommit: caab4edbbeedf23e9062e48a67c35224772b6efa
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160476'
---
{% note %}

**Remarque :** Le {% data variables.product.prodname_serverless %} github.dev est actuellement en préversion bêta. Vous pouvez formuler des commentaires [dans nos discussions](https://github.com/community/community/discussions/categories/general).

{% endnote %}

## À propos du {% data variables.product.prodname_serverless %}

Le {% data variables.product.prodname_serverless %} introduit une expérience d’édition légère qui s’exécute entièrement dans votre navigateur. Avec le {% data variables.product.prodname_serverless %}, vous pouvez parcourir les fichiers et les dépôts de code source à partir de {% data variables.product.prodname_dotcom %}, ainsi qu’apporter et valider des modifications de code. Vous pouvez ouvrir n’importe quel dépôt, duplication ou demande de tirage dans l’éditeur.

Le {% data variables.product.prodname_serverless %} est disponible gratuitement pour tout le monde sur {% data variables.product.prodname_dotcom_the_website %}.

Le {% data variables.product.prodname_serverless %} offre bon nombre des avantages de {% data variables.product.prodname_vscode %}, tels que la recherche, la mise en surbrillance de la syntaxe et un affichage de contrôle de code source. Vous pouvez également utiliser une Synchronisation des paramètres pour partager vos propres paramètres {% data variables.product.prodname_vscode_shortname %} avec l’éditeur. Pour plus d’informations, consultez [Synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) dans la documentation {% data variables.product.prodname_vscode_shortname %}.

Le {% data variables.product.prodname_serverless %} s’exécute entièrement dans le bac à sable de votre navigateur. L’éditeur ne clone pas le dépôt, mais utilise plutôt [l’extension de Dépôts GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) pour exécuter la plupart des fonctionnalités que vous utiliserez. Votre travail est enregistré dans le stockage local du navigateur jusqu’à ce que vous le validiez. Vous devez valider régulièrement vos modifications pour vous assurer qu’elles soient toujours accessibles.

Vous devez être connecté pour utiliser l’éditeur web.

## Ouverture du {% data variables.product.prodname_serverless %}

Vous pouvez ouvrir n’importe quel dépôt {% data variables.product.prodname_dotcom %} dans le {% data variables.product.prodname_serverless %} de l’une des manières suivantes :

- Pour ouvrir le dépôt dans le même onglet de navigateur, appuyez sur <kbd>.</kbd> pendant vous parcourez un dépôt ou une demande de tirage sur {% data variables.product.prodname_dotcom %}.
 
  Pour ouvrir le dépôt dans un nouvel onglet de navigateur, appuyez sur <kbd>></kbd>.

- Modifiez l’URL de « github.com » en « github.dev ».
- Lors de l’affichage d’un fichier, utilisez le menu déroulant en regard de {% octicon "pencil" aria-label="The edit icon" %} et sélectionnez **Ouvrir dans github.dev**.

  ![Menu déroulant du bouton Modifier le fichier](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} et le {% data variables.product.prodname_serverless %}

{% data variables.product.prodname_serverless %} et {% data variables.product.prodname_github_codespaces %} vous permettent tous deux de modifier votre code directement à partir de votre référentiel. Toutefois, ils offrent des avantages légèrement différents, selon votre cas d’usage.

|| {% data variables.product.prodname_serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **Coût** | Libre.      | Quota mensuel gratuit pour l’utilisation des comptes personnels. Pour plus d’informations sur les prix, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#github-codespaces-pricing) ».|
| **Disponibilité** | Disponible pour tout le monde sur GitHub.com. | Disponible pour tout le monde sur GitHub.com. |
| **Démarrage** | Le {% data variables.product.prodname_serverless %} s’ouvre instantanément d’un appui sur une touche, et vous pouvez commencer à l’utiliser immédiatement, sans devoir attendre une configuration ou une installation supplémentaires. | Lorsque vous créez ou reprenez un codespace, une machine virtuelle est affectée à celui-ci, et le conteneur est configuré en fonction du contenu d’un fichier `devcontainer.json`. Cette configuration peut prendre quelques minutes pour créer l’environnement. Pour plus d’informations, consultez « [Création d’un Codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ». |
| **Calcul**  | Étant donné qu’il n’y a pas de calcul associé, vous ne pouvez pas générer et exécuter votre code ou utiliser le terminal intégré. | Avec {%  data variables.product.prodname_github_codespaces %}, vous bénéficiez de la puissance d’une machine virtuelle dédiée sur laquelle vous pouvez exécuter et déboguer votre application.|
| **Accès du Terminal** | Aucun. | {% data variables.product.prodname_github_codespaces %} fournit un ensemble commun d’outils par défaut, ce qui signifie que vous pouvez utiliser le Terminal exactement comme vous le feriez dans votre environnement local.|
| **Extensions**  | Seul un sous-ensemble d’extensions pouvant s’exécuter sur le web apparaît dans l’affichage Extensions et peut être installé. Pour plus d’informations, consultez « [Utilisation d’extensions](#using-extensions) ».| Avec {% data variables.product.prodname_github_codespaces %}, vous pouvez utiliser la plupart des extensions de la {% data variables.product.prodname_vscode_marketplace %}.|

### Continuer à travailler sur {% data variables.product.prodname_codespaces %}

Vous pouvez démarrer votre workflow dans le {% data variables.product.prodname_serverless %} et continuer à travailler sur un codespace. Si vous tentez d’accéder à l’affichage Exécuter et déboguer ou au Terminal, vous serez averti qu’ils ne sont pas disponibles dans le {% data variables.product.prodname_serverless %}.

Pour poursuivre votre travail dans un codespace, cliquez sur **Continuer à travailler sur...** et sélectionnez **Créer un codespace** pour créer un codespace sur votre branche active. Avant de choisir cette option, vous devez valider toutes les modifications.

![Capture d’écran montrant le bouton « Continuer à travailler sur » dans l’interface utilisateur](/assets/images/help/codespaces/codespaces-continue-working.png)

## Utilisation du contrôle de code source

Lorsque vous utilisez le {% data variables.product.prodname_serverless %}, toutes les actions sont gérées via l’affichage Contrôle de code source, qui se trouve dans la Barre d’activité sur le côté gauche. Pour plus d’informations sur l’affichage Contrôle de code source, consultez « [Contrôle de version](https://code.visualstudio.com/docs/editor/versioncontrol) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

Étant donné que l’éditeur web utilise l’extension Dépôts GitHub pour alimenter des fonctionnalités, vous pouvez changer de branche sans avoir à dissimuler les modifications. Pour plus d’informations, consultez « [Dépôts GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

### Créer une branche

{% data reusables.codespaces.create-or-switch-branch %} Toute modification non validée que vous avez apportée dans votre ancienne branche sera disponible sur votre nouvelle branche.

### Validation de vos modifications

{% data reusables.codespaces.source-control-commit-changes %} 
5. Une fois vos modifications validées, elles sont automatiquement envoyées (push) à votre branche sur {% data variables.product.prodname_dotcom %}.
### Créer une demande de tirage

{% data reusables.codespaces.source-control-pull-request %}

### Utilisation d’une demande de tirage existante

Vous pouvez utiliser le {% data variables.product.prodname_serverless %} pour travailler avec une demande de tirage existante.

1. Accédez à la demande de tirage que vous souhaitez ouvrir dans le {% data variables.product.prodname_serverless %}.
2. Appuyez `.` pour ouvrir la demande de tirage dans le {% data variables.product.prodname_serverless %}.
3. Une fois que vous avez apporté des modifications, validez-les en suivant les étapes décrites dans [Valider vos modifications](#commit-your-changes). Vos modifications étant validées directement dans la branche, il n’est pas nécessaire de les envoyer (push).

## Utilisation d’extensions

Le {% data variables.product.prodname_serverless %} prend en charge les extensions {% data variables.product.prodname_vscode_shortname %} qui ont été spécifiquement créées ou mises à jour pour s’exécuter sur le web. Ces extensions sont appelées « extensions web ». Pour savoir comment créer une extension web ou mettre à jour votre extension existante pour travailler à partir du web, consultez « [Extensions web](https://code.visualstudio.com/api/extension-guides/web-extensions) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

Les extensions qui peuvent s’exécuter dans le {% data variables.product.prodname_serverless %} apparaissent dans l’affichage Extensions et peuvent être installées. Si vous utilisez la Synchronisation des paramètres, toutes les extensions compatibles sont également installées automatiquement. Pour plus d’informations, consultez « [Synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.


## Dépannage

Si vous rencontrez des problèmes lors de l’ouverture du {% data variables.product.prodname_serverless %}, essayez ce qui suit :

- Assurez-vous que vous êtes connecté à {% data variables.product.prodname_dotcom %}.
- Désactivez tout bloqueur de publicité.
- Utilisez une fenêtre non incognito dans votre navigateur pour ouvrir le {% data variables.product.prodname_serverless %}.

### Limitations connues

- Le {% data variables.product.prodname_serverless %} est actuellement prise en charge dans Chrome (et divers autres navigateurs basés sur Chromium), Edge, Firefox et Safari. Nous vous recommandons d’utiliser les dernières versions de ces navigateurs.
- Il se peut que certaines combinaisons de touches ne fonctionnent pas, selon le navigateur que vous utilisez. Ces limitations de combinaison de touches sont documentées dans la section « [Limitations et adaptations connues](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) » de la documentation {% data variables.product.prodname_vscode_shortname %}.
- Il se peut que `.` ne fonctionne pas pour ouvrir le {% data variables.product.prodname_serverless %}, en fonction de la disposition de votre clavier local. Dans ce cas, vous pouvez ouvrir un dépôt {% data variables.product.prodname_dotcom %} dans {% data variables.product.prodname_serverless %} en modifiant l’URL de `github.com`en `github.dev`.
