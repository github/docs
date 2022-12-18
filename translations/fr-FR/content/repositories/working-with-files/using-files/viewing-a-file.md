---
title: Affichage d’un fichier
intro: Vous pouvez afficher le contenu brut du fichier ou suivre les modifications apportées aux lignes d’un fichier et découvrir comment les différentes parties du fichier ont évolué au fil du temps.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179848'
---
## Affichage ou copie du contenu d’un fichier brut

L’affichage brut vous permet d’afficher ou de copier le contenu brut d’un fichier sans aucun style.

{% data reusables.repositories.navigate-to-repo %}
1. Cliquez sur le fichier que vous souhaitez afficher.
2. Dans le coin supérieur droit de l’affichage du fichier, cliquez sur **Brut**.
![Capture d’écran du bouton Brut dans l’en-tête du fichier](/assets/images/help/repository/raw-file-button.png)
3. Si vous le souhaitez, pour copier le contenu du fichier brut, dans le coin supérieur droit de l’affichage du fichier, cliquez sur **{% octicon "copy" aria-label="The copy icon" %}** .

## Affichage de l’historique de révision ligne par ligne pour un fichier

L’affichage des blâmes vous permet de voir l’historique de révision ligne par ligne pour un fichier entier ou l’historique de révision d’une seule ligne dans un fichier en cliquant sur {% octicon "versions" aria-label="The prior blame icon" %}. Chaque fois que vous cliquez sur {% octicon "versions" aria-label="The prior blame icon" %}, vous voyez des informations sur la révision précédente pour cette ligne, notamment qui a commité la modification et quand.

![Affichage des blâmes Git](/assets/images/help/repository/git_blame.png)

Dans un fichier ou une demande de tirage (pull request), vous pouvez également utiliser le menu {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} pour afficher le blâme Git pour une ligne ou une plage de lignes sélectionnée.

![Menu kebab avec option permettant d’afficher le blâme Git pour une ligne sélectionnée](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Conseil :** À la ligne de commande, vous pouvez également utiliser `git blame` pour afficher l’historique de révision des lignes dans un fichier. Pour plus d’informations, consultez la [documentation Git sur `git blame`](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Cliquez pour ouvrir le fichier dont vous souhaitez afficher l’historique des lignes.
3. Dans le coin supérieur droit de l’affichage du fichier, cliquez sur **Blâmer** pour ouvrir l’affichage des blâmes.
![Bouton Blâmer](/assets/images/help/repository/blame-button.png)
4. Pour voir les révisions antérieures d’une ligne spécifique, ou blâmer à nouveau, cliquez sur {% octicon "versions" aria-label="The prior blame icon" %} jusqu’à ce que vous trouviez les modifications qui vous intéressent.
![Bouton de blâme précédent](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Ignorer des commits dans l’affichage des blâmes

Toutes les révisions spécifiées dans le fichier `.git-blame-ignore-revs`, qui doit se trouver dans le répertoire racine de votre dépôt, sont masquées de l’affichage des blâmes à l’aide du paramètre de configuration Git `git blame --ignore-revs-file`. Pour plus d’informations, consultez [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) dans la documentation Git.

1. Dans le répertoire racine de votre dépôt, créez un fichier nommé `.git-blame-ignore-revs`.
2. Ajoutez les hachages de commit que vous souhaitez exclure de l’affichage des blâmes pour ce fichier. Nous vous recommandons de structurer le fichier comme suit, y compris les commentaires :

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Commitez et poussez (push) les changements.

Maintenant, lorsque vous visitez l’affichage des blâmes, les révisions listées ne sont pas incluses dans le blâme. Vous voyez la bannière **Révisions dans .git-blame-ignore-revs ignorées** qui indique que certains commits peuvent être masqués :

![Capture d’écran d’une bannière sur l’affichage des blâmes avec un lien vers le fichier .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Cela peut être utile si quelques commits apportent des modifications importantes à votre code. Vous pouvez également utiliser le fichier lors de l’exécution locale de `git blame` :

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

Vous pouvez également configurer votre dépôt Git local afin qu’il ignore toujours les révisions dans ce fichier :

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## Contournement de `.git-blame-ignore-revs` dans l’affichage des blâmes

Si l’affichage des blâmes d’un fichier indique **Révisions dans .git-blame-ignore-revs ignorées**, vous pouvez toujours contourner `.git-blame-ignore-revs` et consulter l’affichage des blâmes normal. Dans l’URL, ajoutez un `~` au SHA et les **Révisions dans .git-blame-ignore-revs ignorées** disparaîtront.
