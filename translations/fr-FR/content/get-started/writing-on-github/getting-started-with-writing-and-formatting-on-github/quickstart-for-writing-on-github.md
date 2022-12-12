---
title: Démarrage rapide pour l’écriture sur GitHub
intro: 'Découvrez les fonctionnalités de mise en forme avancées en créant un {% ifversion ghae %}Gist pour vous décrire vous-même {% else %}README pour votre profil {% data variables.product.prodname_dotcom %} {% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107172'
---
## Introduction

Markdown est un langage facile à lire et à écrire pour mettre en forme du texte brut. Vous pouvez utiliser la syntaxe Markdown ainsi que d’autres balises HTML pour mettre en forme ce que vous écrivez sur {% data variables.product.prodname_dotcom %}, à des emplacements comme des fichiers README d’un dépôt, et des commentaires sur des demandes de tirage et des problèmes. Dans ce guide, vous allez découvrir certaines fonctionnalités de mise en forme avancées en créant {% ifversion ghae %}un Gist{% else %}ou en modifiant un fichier README pour votre profil {% data variables.product.prodname_dotcom %} {% endif %}.

Si vous débutez avec Markdown, vous pouvez commencer par « [Syntaxe d’écriture et de mise en forme de base](/articles/basic-writing-and-formatting-syntax) » ou par le cours [Communiquer en utilisant Markdown](https://github.com/skills/communicate-using-markdown) {% data variables.product.prodname_learning %}.

{% ifversion not ghae %}

Si vous disposez déjà d’un fichier README de profil, vous pouvez suivre ce guide en ajoutant des éléments à votre fichier README existant ou en créant un Gist avec un fichier Markdown que vous pouvez appeler `about-me.md`. Pour plus d’informations, consultez « [Création de Gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) ».

{% endif %}

{% ifversion ghae %}

## Création d’un gist

Les Gists vous permettent de stocker ou de partager des extraits de code et d’autres informations avec d’autres personnes sur {% data variables.location.product_location %}. Pour utiliser les fonctionnalités de mise en forme dans les Gists, ajoutez un fichier Gist avec une extension `.md`.

1. Accédez à votre {% data variables.gists.gist_homepage %}.
1. Si vous le souhaitez, tapez une description pour le Gist, par exemple « À propos de moi ».
1. Dans le champ **Nom de fichier avec une extension...** , tapez `about-me.md`.

Pour plus d’informations, consultez « [Création de Gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) ».

{% else %}

## Création ou modification du fichier README de votre profil

Le fichier README de votre profil vous permet de partager des informations sur vous-même avec la communauté sur {% data variables.location.product_location %}. Le fichier README s’affiche en haut de la page de votre profil.

Si vous n’avez pas déjà un fichier README de profil, vous pouvez en ajouter un.

1. Créez un dépôt portant le même nom que votre nom d’utilisateur {% data variables.product.prodname_dotcom %} en initialisant le dépôt avec un fichier `README.md`. Pour plus d’informations, consultez « [Gestion de votre README de profil »](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme).
1. Éditer le fichier `README.md` et supprimez le texte du modèle (qui commence par `### Hi there`) qui est automatiquement ajouté quand vous créez le fichier.

Si vous avez déjà un fichier README de profil, vous pouvez l’éditer à partir de la page de votre profil.

{% data reusables.profile.navigating-to-profile %}
1. Cliquez sur {% octicon "pencil" aria-label="The Pencil icon" %} en regard de votre fichier README de profil.

   ![Capture d’écran d’une page de profil, avec l’icône de crayon mise en surbrillance en regard du fichier README de profil](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## Ajout d’une image adaptée à vos visiteurs

Vous pouvez inclure des images dans votre communication sur {% data variables.product.prodname_dotcom %}. Vous allez ajouter ici une image réactive, comme une bannière, en haut de votre {% ifversion ghae %}Gist{% else %}fichier README de profil{% endif %}. 

En utilisant l’élément HTML `<picture>` avec la fonctionnalité multimédia `prefers-color-scheme`, vous pouvez ajouter une image qui change selon qu’un visiteur utilise le mode clair ou sombre. Pour plus d’informations, consultez « [Gestion de vos paramètres de thème](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings) ».

1. Copiez et collez le balisage suivant dans votre fichier {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %}.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. Remplacez les espaces réservés dans le balisage par les URL des images choisies. Sinon, pour essayer d’abord la fonctionnalité, vous pouvez copier les URL depuis notre exemple ci-dessous.

   - Remplacez `YOUR-DARKMODE-IMAGE` par l’URL d’une image à afficher pour les visiteurs en mode sombre.
   - Remplacez `YOUR-LIGHTMODE-IMAGE` par l’URL d’une image à afficher pour les visiteurs en mode clair.
   - Remplacez `YOUR-DEFAULT-IMAGE` par l’URL d’une image à afficher si aucune des autres images ne peut être mise en correspondance, par exemple si le visiteur utilise un navigateur qui ne prend pas en charge la fonctionnalité `prefers-color-scheme`.
1. Pour rendre l’image accessible aux visiteurs qui utilisent un lecteur d’écran, remplacez `YOUR-ALT-TEXT` par une description de l’image.
1. Pour vérifier que l’image est rendue correctement, cliquez sur l’onglet **Aperçu**.

Pour plus d’informations sur l’utilisation d’images dans Markdown, consultez « [Syntaxe de base pour l’écriture et la mise en forme](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images) ».

### Exemple

{% data reusables.getting-started.picture-element-example %}

### Comment cela se présente

![Capture d’écran de l’onglet Aperçu en mode clair, montant l’image d’un soleil qui sourit](/assets/images/help/profile/lightmode-image-example.png)

## Ajout d’un tableau

Vous pouvez utiliser des tableaux Markdown pour organiser les informations. Vous allez utiliser ici un tableau pour vous présenter en classant quelque chose, par exemple les langages de programmation ou les frameworks que vous utilisez le plus, les choses que vous apprenez ou vos passe-temps préférés. Quand une colonne de tableau contient des nombres, il est pratique d’aligner la colonne à droite en utilisant la syntaxe `--:` sous la ligne d’en-tête.

1. Revenez à l’onglet **Modifier le {% ifversion ghae %}nouveau {% endif %}fichier**. 
1. Pour vous présenter, deux lignes sous la balise `</picture>`, ajoutez un en-tête `## About me` et un court paragraphe sur vous-même, comme suit.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. Deux lignes sous ce paragraphe, insérez un tableau en copiant et collant le balisage suivant.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. Dans la colonne de droite, remplacez `THING-TO-RANK` par « Langages », « Passe-temps » ou autre chose, puis renseignez la colonne avec votre liste d’éléments.
1. Pour vérifier que le tableau est rendu correctement, cliquez sur l’onglet **Aperçu**.

Pour plus d’informations, consultez « [Organisation des informations avec des tableaux](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables) ».

### Exemple

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### Comment cela se présente

![Capture d’écran de l’onglet Aperçu, montrant un en-tête « À propos de moi » et un tableau affiché avec une liste de langages](/assets/images/help/profile/markdown-table-example.png)

## Ajout d’une section réduite

Pour garder votre contenu bien ordonné, vous pouvez utiliser la balise `<details>` pour créer une section réduite extensible. 

1. Pour créer une section réduite pour le tableau que vous avez créé, encapsulez votre table dans des balises `<details>` ,comme dans l’exemple suivant.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. Entre les balises `<summary>`, remplacez `THINGS-TO-RANK` par ce que vous avez classé dans votre tableau.
1. Si vous le souhaitez, pour que la section s’affiche ouverte par défaut, ajoutez l’attribut `open` à la balise `<details>`.

   ```HTML
   <details open>
   ```
1. Pour vérifier que la section réduite est rendue correctement, cliquez sur l’onglet **Aperçu**.

### Exemple

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### Comment cela se présente

![Capture d’écran de l’onglet Aperçu, avec une section réduite appelée « My top languages » (Mes langages préférés) marquée d’une flèche déroulante](/assets/images/help/profile/collapsed-section-example.png)

## Ajout d’une citation

Markdown propose de nombreuses autres options pour la mise en forme de votre contenu. Vous allez ajouter ici une règle horizontale pour diviser votre page et un bloc de citation pour mettre en forme votre citation préférée.

1. Dans le bas de votre fichier, deux lignes sous la balise `</details>`, ajoutez une règle horizontale en tapant trois tirets ou plus.

   ```Markdown
   ---
   ```
1. Sous la ligne `---`, ajoutez une citation en tapant un balisage comme ceci.
   
   ```Markdown
   > QUOTE
   ```

   Remplacez `QUOTE` par une citation de votre choix. Vous pouvez aussi copier la citation depuis notre exemple ci-dessous.
1. Pour vérifier tout est rendu correctement, cliquez sur l’onglet **Aperçu**.

### Exemple

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### Comment cela se présente

![Capture d’écran de l’onglet Aperçu, avec une citation en retrait sous une ligne horizontale épaisse](/assets/images/help/profile/markdown-quote-example.png)

## Ajout d’un commentaire

Vous pouvez utiliser la syntaxe des commentaires HTML pour ajouter un commentaire qui sera masqué dans la sortie. Vous allez ajouter ici un commentaire pour vous rappeler de mettre à jour votre {% ifversion ghae %}Gist{% else %}fichier README{% endif %} ultérieurement.

1. Deux lignes sous l’en-tête `## About me`, insérez un commentaire en utilisant le balisage suivant.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   Remplacez `COMMENT` par un élément « à faire » que vous devez vous rappeler de faire plus tard (par exemple ajouter d’autres éléments au tableau).
1. Pour vérifier que votre commentaire est masqué dans la sortie, cliquez sur l’onglet **Aperçu**.

### Exemple

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Enregistrement de votre travail

Quand vous êtes satisfait de vos modifications, enregistrez votre {% ifversion ghae %}Gist. 

- Pour que votre Gist reste masqué pour les moteurs de recherche, mais visible par toute personne avec laquelle vous partagez l’URL, cliquez sur **Créer un Gist secret** 
- Si vous préférez que votre Gist soit visible par tout le monde sur {% data variables.location.product_location %}, cliquez sur **Créer un Gist interne**

{% else %}fichier README de profil en cliquant sur **Commiter les modifications**. 

Le fait de commiter directement dans la branche `main` rendra vos modifications visibles par tous les visiteurs de votre profil. Si vous voulez enregistrer votre travail mais que vous n’êtes pas prêt à le rendre visible sur votre profil, vous pouvez sélectionner **Créer une branche pour ce commit et démarrer une demande de tirage**.

![Capture d’écran de la section « Commiter les modifications »](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## Étapes suivantes

- Continuez à découvrir les fonctionnalités avancées de mise en forme. Par exemple, consultez {% ifversion fpt or ghec %}« [Création de diagrammes](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) » et {% endif %}« [Création et mise en évidence de blocs de code](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) ».
- Utilisez vos nouvelles compétences quand vous communiquez sur GitHub, dans les problèmes, les demandes de tirage et les discussions. Pour plus d’informations, consultez « [Communiquer sur {% data variables.product.prodname_dotcom %}](/get-started/quickstart/communicating-on-github) ».
