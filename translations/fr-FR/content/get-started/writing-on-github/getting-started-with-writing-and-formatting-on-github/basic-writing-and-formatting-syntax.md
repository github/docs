---
title: Syntaxe de base pour l’écriture et la mise en forme
intro: Créez une mise en forme sophistiquée pour votre prose et votre code sur GitHub avec une syntaxe simple.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169247'
---
## En-têtes

Pour créer un titre, ajoutez un à six symboles <kbd>#</kbd> avant le texte de votre titre. Le nombre de <kbd>#</kbd> que vous utilisez déterminera la taille du titre.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Titres H1, H2 et H6 affichés](/assets/images/help/writing/headings-rendered.png)

Lorsque vous utilisez deux titres ou plus, GitHub génère automatiquement une table des matières à laquelle vous pouvez accéder en cliquant sur {% octicon "list-unordered" aria-label="The unordered list icon" %} dans l’en-tête de fichier. Chaque titre de titre est listé dans la table des matières, et vous pouvez cliquer sur un titre pour accéder à la section sélectionnée. 

![Capture d’écran mettant en évidence l’icône de table des matières](/assets/images/help/repository/headings_toc.png)

## Style du texte

Vous pouvez indiquer l’importance d’un texte en gras, en italique, en barré, en indice ou en superscript dans les champs de commentaires et les fichiers `.md`.  

| Style | Syntaxe | Raccourci clavier | Exemple | Sortie |
| --- | --- | --- | --- | --- |
| Gras | `** **` ou `__ __`| <kbd>Commande</kbd>+<kbd>B</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **Ceci est du texte en gras** |
| Italique | `* *` ou `_ _`     | <kbd>Commande</kbd>+<kbd>I</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *Ceci est du texte en italique* |
| Barré | `~~ ~~` | | `~~This was mistaken text~~` | ~~Ceci est du texte erroné~~ |
| Gras et italique imbriqué | `** **` et `_ _` | | `**This text is _extremely_ important**` | **Ce texte est _extrêmement_ important** |
| Tous en gras et italique | `*** **_` | | `_*_All this text is important_*_` | _ *_Tout ce texte est important_** |
| Indice | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>Il s’agit d’un texte en indice</sub> |
| Superscript | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>Il s’agit d’un texte en superscript</sup> |

## Citation de texte

Vous pouvez citer du texte avec un <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Texte cité affiché](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Astuce :** Lorsque vous affichez une conversation, vous pouvez citer automatiquement du texte dans un commentaire en mettant en surbrillance le texte, puis en tapant <kbd>R</kbd>. Vous pouvez citer un commentaire entier en cliquant sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis **Citer la réponse**. Pour plus d’informations sur les raccourcis clavier, consultez « [Raccourcis clavier](/articles/keyboard-shortcuts/) ».

{% endtip %}

## Citation de code

Vous pouvez citer du code ou une commande dans une phrase avec des accents graves uniques. Le texte entre les accents graves ne sera pas mis en forme. Vous pouvez également appuyer sur le raccourci clavier <kbd>Commande</kbd>+<kbd>E</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) pour insérer les accents graves d’un bloc de code dans une ligne de Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Bloc de code inline affiché](/assets/images/help/writing/inline-code-rendered.png)

Pour mettre en forme du code ou du texte dans son propre bloc distinct, utilisez des accents graves triples.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Bloc de code affiché](/assets/images/help/writing/code-block-rendered.png)

Pour plus d’informations, consultez « [Création et mise en surbrillance de blocs de code](/articles/creating-and-highlighting-code-blocks) ».

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Modèles de couleurs pris en charge

Dans les questions, les demandes de tirage et les discussions, vous pouvez indiquer les couleurs dans une phrase en utilisant des accents graves. Un modèle de couleur pris en charge dans les accents graves affichera une visualisation de la couleur.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Modèle de couleur pris en charge pour le rendu.](/assets/images/help/writing/supported-color-models-rendered.png)

Voici les modèles de couleurs actuellement pris en charge.

| Color | Syntaxe | Exemple | Sortie |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Modèle de couleur pris en charge pour le rendu au format HEX.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Modèle de couleur pris en charge pour le rendu au format RGB.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Modèle de couleur pris en charge pour le rendu au format HSL.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Remarques :**

- Un modèle de couleur pris en charge ne peut pas comporter d’espace initial ou final entre les accents graves.
- La visualisation de la couleur n’est prise en charge que dans les problèmes, les demandes de tirage et les discussions.

{% endnote %}

## Liens

Vous pouvez créer un lien inline en plaçant le texte du lien entre crochets `[ ]`, puis en plaçant l’URL entre parenthèses `( )`. Vous pouvez également utiliser le raccourci clavier <kbd>Commande</kbd>+<kbd>K</kbd> pour créer un lien.{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} Quand du texte est sélectionné, vous pouvez coller une URL à partir de votre Presse-papiers pour créer automatiquement un lien à partir de la sélection.{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} Vous pouvez également créer un lien hypertexte Markdown en mettant le texte en surbrillance et en utilisant le raccourci clavier <kbd>Commande</kbd>+<kbd>V</kbd>. Si vous souhaitez remplacer le texte par le lien, utilisez le raccourci clavier <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Lien affiché](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Astuce :** {% data variables.product.product_name %} crée automatiquement des liens lorsque des URL valides sont écrites dans un commentaire. Pour plus d’informations, consultez « [Références et URL automatiquement liées](/articles/autolinked-references-and-urls) ».

{% endtip %}

## Liens de section

{% data reusables.repositories.section-links %}

## Liens relatifs

{% data reusables.repositories.relative-links %}

## Images

Vous pouvez afficher une image en ajoutant <kbd>!</kbd> et en enveloppant le texte de remplacement dans `[ ]`. Ensuite, placez le lien de l’image entre parenthèses `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Image affichée](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} prend en charge l’incorporation d’images dans vos problèmes, demandes de tirage (pull requests){% ifversion fpt or ghec %}, discussions{% endif %}, commentaires et fichiers `.md`. Vous pouvez afficher une image à partir de votre dépôt, ajouter un lien à une image en ligne ou charger une image. Pour plus d’informations, consultez « [Chargement de ressources](#uploading-assets) ».

{% tip %}

**Astuce :** Lorsque vous souhaitez afficher une image qui se trouve dans votre dépôt, vous devez utiliser des liens relatifs plutôt que des liens absolus.

{% endtip %}

Voici quelques exemples d’utilisation de liens relatifs pour afficher une image.

| Context | Lien relatif |
| ------ | -------- |
| Dans un fichier `.md` sur la même branche | `/assets/images/electrocat.png` |
| Dans un fichier `.md` sur une autre branche | `/../main/assets/images/electrocat.png` |
| Dans les problèmes, les demandes de tirage et les commentaires du dépôt | `../blob/main/assets/images/electrocat.png?raw=true` |
| Dans un fichier `.md` dans un autre dépôt | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| Dans les problèmes, les demandes de tirage et les commentaires d’un autre dépôt | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Remarque** : Les deux derniers liens relatifs du tableau ci-dessus fonctionnent pour les images d’un dépôt privé uniquement si la visionneuse dispose au moins d’un accès en lecture au dépôt privé qui contient ces images.

{% endnote %}

Pour plus d’informations, consultez « [Liens relatifs](#relative-links) ».

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Spécification du thème pour l’affichage d’une image

Vous pouvez spécifier le thème d’affichage d’une image dans le format Markdown en utilisant l’élément HTML `<picture>` en combinaison avec la fonction média `prefers-color-scheme`. Nous faisons la distinction entre les modes de couleur clairs et sombres. Il existe donc deux options disponibles. Vous pouvez utiliser ces options pour afficher des images optimisées pour les arrière-plans sombres ou clairs. Cela est particulièrement utile pour les images PNG transparentes.

Par exemple, le code suivant affiche une image de soleil pour les thèmes clairs et une lune pour les thèmes sombres :

{% data reusables.getting-started.picture-element-example %}

L’ancienne méthode permettant de spécifier les images en fonction du thème, en utilisant un fragment ajouté à l’URL (`#gh-dark-mode-only` ou `#gh-light-mode-only`), est obsolète et sera supprimée au profit de la nouvelle méthode décrite ci-dessus.
{% endif %}

## Listes

Vous pouvez créer une liste non triée en faisant précéder une ou plusieurs lignes de texte de <kbd>-</kbd>, <kbd>*</kbd> ou <kbd>+</kbd>.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Liste non triée affichée](/assets/images/help/writing/unordered-list-rendered.png)

Pour trier votre liste, faites précéder chaque ligne d’un nombre.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Liste triée affichée](/assets/images/help/writing/ordered-list-rendered.png)

### Listes imbriquées

Vous pouvez créer une liste imbriquée en mettant en retrait un ou plusieurs éléments de liste sous un autre élément.

Pour créer une liste imbriquée en utilisant l’éditeur web sur {% data variables.product.product_name %} ou un éditeur de texte qui utilise une police à espacement fixe, comme [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), vous pouvez aligner votre liste visuellement. Tapez des caractères d’espace devant votre élément de liste imbriqué, jusqu’à ce que le caractère de marqueur de liste (<kbd>-</kbd> ou <kbd>*</kbd>) se trouve directement sous le premier caractère du texte dans l’élément au-dessus de lui.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Remarque** : Dans l’éditeur web, vous pouvez effectuer une mise en retrait gauche ou droit d’une ou plusieurs lignes de texte en mettant d’abord en surbrillance les lignes souhaitées, puis en utilisant respectivement <kbd>Tab</kbd> ou <kbd>Maj</kbd>+<kbd>Tab</kbd>.

{% endtip %}

![Liste imbriquée avec alignement mis en surbrillance](/assets/images/help/writing/nested-list-alignment.png)

![Liste avec deux niveaux d’éléments imbriqués](/assets/images/help/writing/nested-list-example-1.png)

Pour créer une liste imbriquée dans l’éditeur de commentaires sur {% data variables.product.product_name %}, qui n’utilise pas de police à espacement fixe, vous pouvez examiner l’élément de liste juste au-dessus de la liste imbriquée et compter le nombre de caractères qui apparaissent avant le contenu de l’élément. Tapez ensuite ce nombre de caractères d’espace devant l’élément de liste imbriqué.

Dans cet exemple, vous pouvez ajouter un élément de liste imbriqué sous l’élément de liste `100. First list item` en mettant en retrait l’élément de liste imbriqué un minimum de cinq espaces, car il y a cinq caractères (`100. `) avant `First list item`.

```markdown
100. First list item
     - First nested list item
```

![Liste avec un élément de liste imbriqué](/assets/images/help/writing/nested-list-example-3.png)   

Vous pouvez créer plusieurs niveaux de listes imbriquées à l’aide de la même méthode. Par exemple, étant donné que le premier élément de liste imbriqué comporte sept caractères (`␣␣␣␣␣-␣`) avant le contenu de la liste imbriquée `First nested list item`, vous devrez mettre en retrait le deuxième élément de liste imbriqué de sept espaces.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Liste avec deux niveaux d’éléments imbriqués](/assets/images/help/writing/nested-list-example-2.png)    

Pour plus d’exemples, consultez la [spécification Markdown saveur GitHub](https://github.github.com/gfm/#example-265).

## Listes de tâches

{% data reusables.repositories.task-list-markdown %}

Si une description d’élément de liste de tâches commence par une parenthèse, vous devez l’échapper avec <kbd>\\</kbd> :

`- [ ] \(Optional) Open a followup issue`

Pour plus d’informations, consultez « [À propos des listes de tâches](/articles/about-task-lists) ».

## Mention de personnes et d’équipes

Vous pouvez mentionner une personne ou une [équipe](/articles/setting-up-teams/) sur {% data variables.product.product_name %} en tapant <kbd>@</kbd> plus son nom d’utilisateur ou son nom d’équipe. Cela déclenchera une notification et attirera l’attention sur la conversation. Les utilisateurs recevront également une notification si vous modifiez un commentaire de façon à mentionner leur nom d’utilisateur ou leur nom d’équipe. Pour plus d'informations sur les notifications, consultez « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications).

{% note %}

**Remarque :** une personne ne sera notifiée d'une mention que si elle a un accès en lecture au dépôt et, si celui-ci appartient à une organisation, si elle est membre de cette organisation.

{% endnote %}

`@github/support What do you think about these updates?`

![@mention affiché](/assets/images/help/writing/mention-rendered.png)

Lorsque vous mentionnez une équipe parente, les membres de ses équipes enfants reçoivent également des notifications, ce qui simplifie la communication avec plusieurs groupes de personnes. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams) ».

L’entrée d’un symbole <kbd>@</kbd> affiche une liste de personnes ou d’équipes sur un projet. La liste est filtrée à mesure que vous tapez. Par conséquent, une fois que vous avez trouvé le nom de la personne ou de l’équipe que vous recherchez, vous pouvez utiliser les touches de direction pour la sélectionner et appuyer sur Tab ou Entrée pour compléter le nom. Pour les équipes, entrez le @organization/team-name, et tous les membres de cette équipe seront abonnés à la conversation.

Les résultats de saisie semi-automatique sont limités aux collaborateurs du dépôt et à tous les autres participants sur le thread.

## Référencement de problèmes et de demandes de tirage

Vous pouvez afficher une liste de problèmes et de demandes de tirage suggérés dans le dépôt en tapant <kbd>#</kbd>. Tapez le numéro ou le titre du problème ou de la demande de tirage pour filtrer la liste, puis appuyez sur Tab ou Entrée pour compléter le résultat mis en surbrillance.

Pour plus d’informations, consultez « [Références et URL automatiquement liées](/articles/autolinked-references-and-urls) ».

## Référencement de ressources externes

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Pièces jointes au contenu

Certaines {% data variables.product.prodname_github_apps %} fournissent des informations dans {% data variables.product.product_name %} pour les URL liées à leurs domaines inscrits. {% data variables.product.product_name %} affiche les informations fournies par l’application sous l’URL dans le corps ou le commentaire d’un problème ou d’une demande de tirage.

![Pièce jointe au contenu](/assets/images/github-apps/content_reference_attachment.png)

Pour afficher les pièces jointes au contenu, vous devez avoir une {% data variables.product.prodname_github_app %} qui utilise l’API Content Attachments installée sur le dépôt. {% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Installation d’une application dans votre compte personnel](/articles/installing-an-app-in-your-personal-account) » et « [Installation d’une application dans votre organisation](/articles/installing-an-app-in-your-organization) ».{% endif %}

Les pièces jointes au contenu ne seront pas affichées pour les URL qui font partie d’un lien Markdown.

Pour plus d’informations sur la création d’une {% data variables.product.prodname_github_app %} qui utilise des pièces jointes au contenu, consultez « [Utilisation des pièces jointes au contenu](/apps/using-content-attachments) ». {% endif %}

## Chargement de ressources

Vous pouvez charger des ressources telles que des images en les faisant glisser-déplacer, en les sélectionnant dans un explorateur de fichiers ou en les collant. Vous pouvez charger des ressources vers des problèmes, des demandes de tirage, des commentaires et des fichiers `.md` dans votre dépôt.

## Utilisation d’emojis

Vous pouvez ajouter des emojis en tapant `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Emoji affiché](/assets/images/help/writing/emoji-rendered.png)

Si vous tapez <kbd>:</kbd>, une liste d’émojis suggérés s’affiche. La liste est filtrée à mesure que vous tapez. Par conséquent, une fois que vous avez trouvé l’émoji recherché, appuyez sur **Tab** ou **Entrée** pour compléter le résultat mis en surbrillance.

Pour obtenir la liste complète des émojis et codes disponibles, consultez l’[Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Paragraphes

Vous pouvez créer un paragraphe en laissant une ligne vide entre des lignes de texte.

## Notes de bas de page

Vous pouvez ajouter des notes de bas de page à votre contenu à l’aide de cette syntaxe entre crochets :

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

La note de bas de page s’affiche comme suit :

![Note de bas de page affichée](/assets/images/site/rendered-footnote.png)

{% tip %}

**Remarque** : La position d’une note de bas de page dans votre Markdown n’influence pas l’endroit où la note de bas de page sera affichée. Vous pouvez écrire une note de bas de page juste après votre référence à la note de bas de page ; elle sera quand même affichée en bas du markdown.

Les notes de bas de page ne sont pas prises en charge dans les wikis.

{% endtip %}

## Masquage du contenu avec des commentaires

Vous pouvez indiquer à {% data variables.product.product_name %} de masquer le contenu du Markdown affiché en plaçant le contenu dans un commentaire HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Ignorer la mise en forme de Markdown

Vous pouvez indiquer à {% data variables.product.product_name %} d’ignorer (ou d’échapper) la mise en forme de Markdown en plaçant <kbd>\\</kbd> devant le caractère Markdown.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Caractère d’échappement affiché](/assets/images/help/writing/escaped-character-rendered.png)

Pour plus d’informations, consultez « [Markdown Syntax »](https://daringfireball.net/projects/markdown/syntax#backslash) de Daring Fireball.

## Désactivation de l’affichage de Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

## Pour aller plus loin

- [Spécification Markdown saveur {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- «  [À propos de l’écriture et de la mise en forme sur GitHub](/articles/about-writing-and-formatting-on-github) »
- « [Utilisation de la mise en forme avancée](/articles/working-with-advanced-formatting) »
- « [Démarrage rapide pour l’écriture sur {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github) »
