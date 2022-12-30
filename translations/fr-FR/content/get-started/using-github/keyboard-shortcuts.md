---
title: Raccourcis clavier
intro: 'Les pages de {% data variables.product.prodname_dotcom %} ont presque toutes un raccourci clavier pour effectuer des actions plus vite.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180776'
---
## À propos des raccourcis clavier

Un appui sur <kbd>?</kbd> sur {% data variables.product.prodname_dotcom %} affiche une boîte de dialogue qui liste les raccourcis clavier disponibles pour cette page. Vous pouvez utiliser ces raccourcis clavier pour effectuer des actions sur le site sans utiliser votre souris pour naviguer.

{% ifversion keyboard-shortcut-accessibility-setting %} Vous pouvez désactiver les raccourcis de touches de caractères, tout en autorisant les raccourcis qui utilisent des touches de modification, dans vos paramètres d’accessibilité. Pour plus d’informations, consultez « [Gestion des paramètres d’accessibilité](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings) ».{% endif %}

{% ifversion command-palette %} La {% data variables.product.prodname_command_palette %} donne également un accès rapide à un large éventail d’actions, sans qu’il soit nécessaire de mémoriser les raccourcis clavier. Pour plus d’informations, consultez « [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette) ».{% endif %}

Les sections suivantes listent quelques raccourcis clavier disponibles, organisés par les pages où vous pouvez les utiliser sur {% data variables.location.product_location %}.

## Raccourcis à l’échelle du site

| Raccourci clavier | Description
|-----------|------------
|<kbd>S</kbd> ou <kbd>/</kbd> | Focus sur la barre de recherche. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».
|<kbd>G</kbd> <kbd>N</kbd> | Accéder à vos notifications. Pour plus d’informations, consultez « [À propos des notifications »](/github/managing-subscriptions-and-notifications-on-github/about-notifications).
|<kbd>Échap</kbd> | Lorsque le focus est sur une fiche contextuelle d’utilisateur, de problème ou de demande de tirage, ferme la fiche contextuelle et remet le focus sur l’élément dans lequel se trouve la fiche contextuelle.
{% ifversion command-palette %}|<kbd>Commande</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Ouvre la {% data variables.product.prodname_command_palette %}. Si vous modifiez du texte Markdown, ouvrez la palette de commandes avec <kbd>Commande</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> ou <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. Pour plus d’informations, consultez « [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette) ».{% endif %}

## Référentiels

| Raccourci clavier | Description
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Accéder à l’onglet **Code**.
|<kbd>G</kbd> <kbd>I</kbd> | Accéder à l’onglet **Problèmes**. Pour plus d’informations, consultez « [À propos des problèmes](/articles/about-issues) ».
|<kbd>G</kbd> <kbd>P</kbd> | Accéder à l’onglet **Demandes de tirage**. Pour plus d’informations, consultez « [À propos des demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ». {% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Accéder à l’onglet **Actions**. Pour plus d’informations, consultez « [À propos des actions](/actions/getting-started-with-github-actions/about-github-actions) ».{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Accéder à l’onglet **Projets**. Pour plus d’informations, consultez « [À propos des tableaux de projet](/articles/about-project-boards) ».
|<kbd>G</kbd> <kbd>W</kbd> | Accéder à l’onglet **Wiki**. Pour plus d’informations, consultez « [À propos des wikis](/communities/documenting-your-project-with-wikis/about-wikis) ».{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Accéder à l’onglet **Discussions**. Pour plus d’informations, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».{% endif %}

## Modification du code source

| Raccourci clavier | Description |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | Ouvre un dépôt ou une demande de tirage dans l’éditeur web sous le même onglet de navigateur. Vous devez être connecté pour utiliser l’éditeur. Pour plus d’informations, consultez « [Éditeur web](/codespaces/developing-in-codespaces/web-based-editor) ».
|<kbd>></kbd> | Ouvre un dépôt ou une demande de tirage dans l’éditeur web sous un nouvel onglet de navigateur. Vous devez être connecté pour utiliser l’éditeur. Pour plus d’informations, consultez « [Éditeur web](/codespaces/developing-in-codespaces/web-based-editor) ».{% endif %} | <kbd>Commande</kbd>+<kbd>B</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour mettre le texte en gras | <kbd>Commande</kbd>+<kbd>I</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour mettre le texte en italique | <kbd>Commande</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour créer un lien{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>7</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>7</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour une liste triée | <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>8</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>8</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour une liste non triée | <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour un guillemet{% endif %} |<kbd>E</kbd> | Ouvrir le fichier de code source sous l’onglet **Modifier le fichier** |<kbd>Commande</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | Commencer la recherche dans l’éditeur de fichiers |<kbd>Commande</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Rechercher le prochain |<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>G</kbd> (Windows/Linux) | Rechercher le précédent |<kbd>Commande</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>F</kbd> (Windows/Linux) | Remplacer <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | Remplacer tout |<kbd>Alt</kbd>+<kbd>G</kbd> | Accéder à la ligne |<kbd>Commande</kbd>+<kbd>Z</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux) | Annuler |<kbd>Commande</kbd>+<kbd>Y</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux) | Rétablir |<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> | Bascule entre les onglets **Modifier le fichier** et **Aperçu des modifications** |<kbd>Commande</kbd>+<kbd>S</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) | Écrire un message de commit

Pour découvrir plus de raccourcis clavier, consultez la [documentation CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Navigation dans le code source

| Raccourci clavier | Description
|-----------|------------
|<kbd>T</kbd> | Active le finder de fichiers
|<kbd>L</kbd> | Accéder à une ligne dans votre code
|<kbd>W</kbd> | Basculer vers une nouvelle branche ou étiquette
|<kbd>O</kbd> | Développer une URL en sa forme canonique. Pour plus d’informations, consultez « [Obtention de liens permanents vers des fichiers](/articles/getting-permanent-links-to-files) ».
|<kbd>I</kbd> | Afficher ou masquer les commentaires sur les différences. Pour plus d’informations, consultez « [Commentaires sur les différences d’une demande de tirage](/articles/commenting-on-the-diff-of-a-pull-request) ».
|<kbd>A</kbd> | Afficher ou masquer les annotations sur les différences
|<kbd>B</kbd> | Ouvrir la vue de blâme. Pour plus d’informations, consultez « [Suivi des modifications dans un fichier](/articles/tracing-changes-in-a-file) ».

## Commentaires

| Raccourci clavier | Description
|-----------|------------
|<kbd>Commande</kbd>+<kbd>B</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour la mise en gras du texte
|<kbd>Commande</kbd>+<kbd>I</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour la mise en italique du texte
|<kbd>Commande</kbd>+<kbd>E</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour le code ou une commande dans une ligne{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>Commande</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour la création d’un lien{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>Commande</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux) | Crée un lien Markdown lorsqu’elle est appliquée sur le texte en surbrillance{% endif %}
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux) | Bascule entre les onglets de commentaires **Écriture** et **Aperçu** {% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>V</kbd> (Windows/Linux) | Colle le lien HTML sous forme de texte brut{% endif %}
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>Option</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | Colle le lien HTML sous forme de texte brut
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>7</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>7</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour une liste triée
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>8</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>8</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour une liste non triée
|<kbd>Commande</kbd>+<kbd>Entrée</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> (Windows/Linux) | Envoie un commentaire
|<kbd>Ctrl</kbd>+<kbd>.</kbd> puis <kbd>Ctrl</kbd>+<kbd>[numéro de réponse enregistré]</kbd> | Ouvre le menu de réponses enregistrées, puis remplit automatiquement le champ de commentaire avec une réponse enregistrée. Pour plus d’informations, consultez la section « [À propos des réponses enregistrées](/articles/about-saved-replies) ».
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>.</kbd> (Windows/Linux) | Insère une mise en forme Markdown pour une citation{% ifversion fpt or ghec %}
|<kbd>Commande</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Insérer une suggestion. Pour plus d’informations, consultez « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ». |{% endif %}
|<kbd>R</kbd> | Citer le texte sélectionné dans votre réponse. Pour plus d’informations, consultez « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax#quoting-text) ». |

## Listes de problèmes et de demandes de tirage

| Raccourci clavier | Description
|-----------|------------
|<kbd>C</kbd> | Créer un incident
|<kbd>Commande</kbd>+<kbd>/</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Placer votre curseur sur la barre de recherche de problèmes ou de demandes de tirage. Pour plus d’informations, consultez « [Filtrage et recherche des problèmes et demandes de tirage](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests) ».||
|<kbd>U</kbd> | Filtrer par auteur
|<kbd>L</kbd> | Filtrer par ou modifier des étiquettes. Pour plus d’informations, consultez « [Filtrage des problèmes et demandes de tirage par étiquettes](/articles/filtering-issues-and-pull-requests-by-labels) ».
|<kbd>Alt</kbd> et clic | Lors du filtrage par étiquettes, exclure des étiquettes. Pour plus d’informations, consultez « [Filtrage des problèmes et demandes de tirage par étiquettes](/articles/filtering-issues-and-pull-requests-by-labels) ».
|<kbd>M</kbd> | Filtrer par ou modifier des jalons. Pour plus d’informations, consultez « [Filtrage des problèmes et demandes de tirage par jalons](/articles/filtering-issues-and-pull-requests-by-milestone) ».
|<kbd>A</kbd> | Filtrer par ou modifier des personnes responsables. Pour plus d’informations, consultez « [Filtrage des problèmes et demandes de tirage par personnes responsables](/articles/filtering-issues-and-pull-requests-by-assignees) ».
|<kbd>O</kbd> ou <kbd>Entrée</kbd> | Problème ouvert

## Problèmes et demandes de tirage
| Raccourci clavier | Description
|-----------|------------
|<kbd>Q</kbd> | Demander un réviseur. Pour plus d’informations, consultez « [Demande d’une révision de demande de tirage](/articles/requesting-a-pull-request-review/) ».
|<kbd>M</kbd> | Définir un jalon. Pour plus d’informations, consultez « [Association de jalons à des problèmes et demandes de tirage](/articles/associating-milestones-with-issues-and-pull-requests/) ».
|<kbd>L</kbd> | Appliquer une étiquette. Pour plus d’informations, consultez « [Application d’étiquettes à des problèmes et demandes de tirage](/articles/applying-labels-to-issues-and-pull-requests/) ».
|<kbd>A</kbd> | Définir une personne responsable. Pour plus d’informations, consultez « [Affectation de problèmes et demandes de tirage à d’autres utilisateurs {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/) ».
|<kbd>X</kbd> | Lier un problème ou une demande de tirage du même dépôt. Pour plus d’informations, consultez « [Liaison d’une demande de tirage à un problème](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/) ».
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux) | Bascule entre les onglets **Écriture** et **Aperçu** {% ifversion fpt or ghec %}
|<kbd>Alt</kbd> et clic | Lors de la création d’un problème à partir d’une liste de tâches, ouvrez le nouveau formulaire de problème sous l’onglet actif en maintenant la touche <kbd>Alt</kbd> enfoncée et en cliquant sur l’icône {% octicon "issue-opened" aria-label="The issue opened icon" %} dans le coin supérieur droit de la tâche. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».
|<kbd>Maj</kbd> et clic | Lors de la création d’un problème à partir d’une liste de tâches, ouvrez le nouveau formulaire de problème sous un nouvel onglet en maintenant la touche <kbd>Maj</kbd> enfoncée et en cliquant sur l’icône {% octicon "issue-opened" aria-label="The issue opened icon" %} dans le coin supérieur droit de la tâche. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».
|<kbd>Commande</kbd> et clic (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd> et clic (Windows/Linux) | Lors de la création d’un problème à partir d’une liste de tâches, ouvrez le nouveau formulaire de problème dans la nouvelle fenêtre en maintenant les touches <kbd>Commande</kbd> ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd> enfoncées et en cliquant sur l’icône {% octicon "issue-opened" aria-label="The issue opened icon" %} dans le coin supérieur droit de la tâche. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».{% endif %}

## Onglet « Fichiers modifiés » dans les demandes de tirage

| Raccourci clavier | Description
|-----------|------------
|<kbd>C</kbd> | Ouvrir le menu déroulant **Commits** pour filtrer les commits qui s’affichent dans les différences
|<kbd>T</kbd> | Déplacer votre curseur vers le champ « Filtrer les fichiers modifiés »
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>Entrée</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>Entrée</kbd> (Windows/Linux) | Envoyer un commentaire de révision |
|<kbd>Option</kbd> et clic (Mac) ou <kbd>Alt</kbd> et clic (Windows/Linux) | Basculer entre la réduction et le développement de tous les commentaires de révision obsolètes ou résolus dans une demande de tirage (par exemple, en maintenant la touche <kbd>Alt</kbd> enfoncée et en cliquant sur **Afficher les obsolètes** ou **Masquer les obsolètes**) |
|Clic, puis <kbd>Maj</kbd> et clic | Commentez plusieurs lignes d’une demande de tirage en cliquant sur un numéro de ligne, en maintenant <kbd>Maj</kbd> enfoncée, puis en cliquant sur un autre numéro de ligne. Pour plus d’informations, consultez « [Commentaires dans une demande de tirage](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) ».|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Navigation dans un projet

| Raccourci clavier | Description
|-----------|------------
|<kbd>Commande</kbd>+<kbd>F</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | Focus sur le champ de filtre
|<kbd>←</kbd> | Déplacer le focus de cellule vers la gauche
|<kbd>→</kbd> | Déplacer le focus de cellule vers la droite
|<kbd>↑</kbd> | Déplacer le focus de cellule vers le haut
|<kbd>↓</kbd> | Déplacer le focus de cellule vers le bas

### Manipulation d’un projet

| Raccourci clavier | Description
|-----------|------------
|<kbd>Entrée</kbd> | Activer/désactiver le mode d’édition pour la cellule ayant le focus
|<kbd>Caractère d'échappement</kbd> | Annuler la modification pour la cellule ayant le focus
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>\</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>\</kbd> (Windows/Linux) | Ouvrir le menu des actions de ligne
|<kbd>Maj</kbd>+<kbd>Espace</kbd> | Sélectionner un élément
|<kbd>Espace</kbd> | Ouvrir l’élément sélectionné
|<kbd>e</kbd> | Archiver les éléments sélectionnés

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### Déplacement d’une colonne

| Raccourci clavier | Description
|-----------|------------
|<kbd>Entrée</kbd> ou <kbd>Espace</kbd> | Commencer à déplacer la colonne ciblée
|<kbd>Échap</kbd> | Annuler le déplacement en cours
|<kbd>Entrée</kbd> | Terminer le déplacement en cours
|<kbd>←</kbd> ou <kbd>H</kbd> | Déplacer la colonne vers la gauche
|<kbd>Commande</kbd>+<kbd>←</kbd> ou <kbd>Commande</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> ou <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Déplacer la colonne vers la position la plus à gauche
|<kbd>→</kbd> ou <kbd>L</kbd> | Déplacer la colonne vers la droite
|<kbd>Commande</kbd>+<kbd>→</kbd> ou <kbd>Commande</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> ou <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Déplacer la colonne vers la position la plus à droite

### Déplacement d’une carte

| Raccourci clavier | Description
|-----------|------------
|<kbd>Entrée</kbd> ou <kbd>Espace</kbd> | Commencer à déplacer la carte ciblée
|<kbd>Échap</kbd> | Annuler le déplacement en cours
|<kbd>Entrée</kbd> | Terminer le déplacement en cours
|<kbd>↓</kbd> ou <kbd>J</kbd> | Déplacer la carte vers le bas
|<kbd>Commande</kbd>+<kbd>↓</kbd> ou <kbd>Commande</kbd>+<kbd>J</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> ou <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux) | Déplacer la carte vers le bas de la colonne
|<kbd>↑</kbd> ou <kbd>K</kbd> | Déplacer la carte vers le haut
|<kbd>Commande</kbd>+<kbd>↑</kbd> ou <kbd>Commande</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> ou <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Déplacer la carte vers le haut de la colonne
|<kbd>←</kbd> ou <kbd>H</kbd> | Déplacer la carte vers le bas de la colonne sur la gauche
|<kbd>Maj</kbd>+<kbd>←</kbd> ou <kbd>Maj</kbd>+<kbd>H</kbd> | Déplacer la carte vers le haut de la colonne sur la gauche
|<kbd>Commande</kbd>+<kbd>←</kbd> ou <kbd>Commande</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> ou <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Déplacer la carte vers le bas de la colonne la plus à gauche
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>←</kbd> ou <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>←</kbd> ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>H</kbd> (Windows/Linux) | Déplacer la carte vers le haut de la colonne la plus à gauche
|<kbd>→</kbd> | Déplacer la carte vers le bas de la colonne sur la droite
|<kbd>Maj</kbd>+<kbd>→</kbd> ou <kbd>Maj</kbd>+<kbd>L</kbd> | Déplacer la carte vers le haut de la colonne sur la droite
|<kbd>Commande</kbd>+<kbd>→</kbd> ou <kbd>Commande</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> ou <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Déplacer la carte vers le bas de la colonne la plus à droite
|<kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>→</kbd> ou <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>→</kbd> ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>L</kbd> (Windows/Linux) | Déplacer la carte vers le bas de la colonne la plus à droite

### Aperçu d’une carte

| Raccourci clavier | Description
|-----------|------------
|<kbd>Échap</kbd> | Fermer le volet d’aperçu de la carte

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Raccourci clavier | Description
|-----------|------------
|<kbd>Commande</kbd>+<kbd>Espace </kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Espace</kbd> (Windows/Linux) | Dans l’éditeur de workflow, obtenir des suggestions pour votre fichier de workflow.
|<kbd>G</kbd> <kbd>F</kbd> | Accéder au fichier de workflow
|<kbd>Maj</kbd>+<kbd>T</kbd> ou <kbd>T</kbd> | Basculer entre les horodatages dans les journaux
|<kbd>Maj</kbd>+<kbd>F</kbd> ou <kbd>F</kbd> | Basculer les journaux en plein écran
|<kbd>Échap</kbd> | Quitter les journaux en plein écran

{% endif %}

## Notifications

| Raccourci clavier | Description
|-----------|------------
|<kbd>E</kbd> | Marquer comme terminé
|<kbd>Maj</kbd>+<kbd>U</kbd>| Marquer comme non lu
|<kbd>Maj</kbd>+<kbd>l</kbd>| Marquer comme lu
|<kbd>Maj</kbd>+<kbd>M</kbd> | Se désabonner

## Graphe réseau

| Raccourci clavier | Description
|-----------|------------
|<kbd>←</kbd> ou <kbd>H</kbd> | Faire défiler vers la gauche
|<kbd>→</kbd> ou <kbd>L</kbd> | Faire défiler vers la droite
|<kbd>↑</kbd> ou <kbd>K</kbd> | Faire défiler vers le haut
|<kbd>↓</kbd> ou <kbd>J</kbd> | Faire défiler vers le bas
|<kbd>Maj</kbd>+<kbd>←</kbd> (Mac) ou </br> <kbd>Maj</kbd>+<kbd>H</kbd> (Windows/Linux) | Faire défiler jusqu’à l’extrémité gauche
|<kbd>Maj</kbd>+<kbd>→</kbd> (Mac) ou </br> <kbd>Maj</kbd>+<kbd>L</kbd> (Windows/Linux) | Faire défiler jusqu’à l’extrémité droite
|<kbd>Maj</kbd>+<kbd>↑</kbd> (Mac) ou </br> <kbd>Maj</kbd>+<kbd>K</kbd> (Windows/Linux) | Faire défiler jusque tout en haut
|<kbd>Maj</kbd>+<kbd>↑</kbd> (Mac) ou </br> <kbd>Maj</kbd>+<kbd>J</kbd> (Windows/Linux) | Faire défiler jusque tout en bas
