---
title: Commit et revue des changements apportés à votre projet
intro: '{% data variables.product.prodname_desktop %} suit tous les changements de tous les fichiers au fur et à mesure que vous les modifiez. Vous pouvez décider comment regrouper les changements pour créer des commits significatifs.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105373'
---
## À propos des commits

{% data reusables.commits.about-commits %} Vous pouvez également ajouter un coauteur aux commits auxquels vous collaborez.

{% data reusables.desktop.update-email-address %} Pour plus d’informations, consultez « [Configuration de Git pour GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop) ».

## Choix d’une branche et apport de changements

1. [Créez une branche](/desktop/guides/contributing-to-projects/managing-branches), ou sélectionnez une branche existante en cliquant sur {% octicon "git-branch" aria-label="The branch icon" %} **Branche actuelle** dans la barre d’outils, puis en sélectionnant la branche dans la liste.

  ![Menu déroulant permettant de changer la branche actuelle](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Choix du mode d’affichage des différences

Vous pouvez changer la façon dont les différences sont affichées dans {% data variables.product.prodname_desktop %} en fonction de vos besoins de vérification.

Pour changer la façon dont vous visualisez les différences, dans le coin supérieur droit de la vue des différences, cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
- Pour changer le mode d’affichage de l’ensemble des différences, sous « Affichage des différences », sélectionnez **Unifié** ou **Fractionné**. Le mode Unifié montre les changements de manière linéaire, alors que le mode Fractionné montre l’ancien contenu sur le côté gauche et le nouveau contenu sur le côté droit.
- Pour masquer les changements liés aux espaces blancs et vous concentrer sur les changements plus importants, sélectionnez **Masquer les changements liés aux espaces blancs**.

![Menu d’options de la vue des différences](/assets/images/help/desktop/diff-selection.png)

Si vous devez voir une plus grande partie du fichier que celle affichée par défaut dans {% data variables.product.prodname_desktop %}, vous pouvez développer la vue des différences.
- Pour voir les lignes suivantes au-dessus ou en dessous des changements mis en évidence, cliquez sur la flèche au-dessus ou en dessous des numéros de ligne.
- Pour voir l’intégralité du fichier, cliquez avec le bouton droit dans la vue des différences, puis cliquez sur **Développer le fichier entier**.

![Développer la vue des différences](/assets/images/help/desktop/expand-diff-view.png)

## Sélection des changements à inclure dans un commit

Au fur et à mesure que vous apportez des changements aux fichiers dans votre éditeur de texte et que vous les enregistrez localement, vous voyez également les changements dans {% data variables.product.prodname_desktop %}.

* L’icône rouge {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} indique des fichiers supprimés.
* L’icône jaune {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} indique des fichiers modifiés.
* L’icône verte {% octicon "diff-added" aria-label="The diff added icon color-green" %} indique des fichiers ajoutés.
* Pour accéder aux changements ayant fait l’objet d’un stash, cliquez sur **Changements avec stash**.

  ![Option Changements avec stash](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Cochez la case pour commiter tous les fichiers changés](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Cochez les cases en regard des fichiers à commiter](/assets/images/help/desktop/commit-some.png)

### Création d’un commit partiel

Si un fichier contient plusieurs changements, mais que vous souhaitez inclure uniquement une partie de ces changements dans un commit, vous pouvez créer un commit partiel. Le reste de vos changements demeure intact, ce qui vous permet d’effectuer des modifications et des commits supplémentaires. Cela vous permet d’effectuer des commits distincts et importants, par exemple pour séparer les changements liés à des sauts de ligne dans un commit, des changements liés à du code ou du texte.

Pour exclure de votre commit les lignes ayant fait l’objet de changements, cliquez sur une ou plusieurs lignes changées afin de faire disparaître ce qui est en bleu. Les lignes restantes surlignées en bleu sont incluses dans le commit.

  ![Lignes non sélectionnées dans un fichier](/assets/images/help/desktop/partial-commit.png)

## Abandon des changements
S’il existe des changements non commités que vous ne souhaitez pas conserver, vous pouvez les abandonner. Cela entraîne la suppression des changements apportés aux fichiers sur votre ordinateur. Vous pouvez abandonner tous les changements non commités dans un ou plusieurs fichiers, ou vous pouvez abandonner des lignes spécifiques que vous avez ajoutées.

Les changements abandonnés sont enregistrés dans un fichier daté mis à la Corbeille. Vous pouvez récupérer les changements abandonnés tant que la Corbeille n’a pas été vidée.

### Abandon des changements apportés à un ou plusieurs fichiers

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![Option d’abandon des changements dans le menu contextuel](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![Bouton Abandonner les changements dans la boîte de dialogue de confirmation](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### Abandon des changements apportés à une ou plusieurs lignes
Vous pouvez abandonner une ou plusieurs lignes changées qui ne sont pas commitées.

{% note %}

**Remarque :** L’abandon de lignes uniques est désactivé dans un groupe de changements entraînant l’ajout et la suppression de lignes.

{% endnote %}

Pour abandonner une ligne ajoutée, dans la liste des lignes changées, cliquez avec le bouton droit sur la ligne à abandonner, puis sélectionnez **Abandonner la ligne ajoutée**.

  ![Abandonner une seule ligne dans la boîte de dialogue de confirmation](/assets/images/help/desktop/discard-single-line.png)

Pour abandonner un groupe de lignes changées, cliquez avec le bouton droit sur la barre verticale à droite des numéros de ligne correspondant aux lignes à abandonner, puis sélectionnez **Abandonner les lignes ajoutées**.

  ![Abandonner un groupe de lignes ajoutées dans la boîte de dialogue de confirmation](/assets/images/help/desktop/discard-multiple-lines.png)


## Écrire un message de commit et pousser vos changements

Une fois que vous êtes satisfait des changements à inclure dans votre commit, écrivez votre message de commit, puis poussez vos changements. Si vous avez collaboré à un commit, vous pouvez également attribuer un commit à plusieurs auteurs.

{% note %}

**Remarque** : {% data reusables.desktop.tags-push-with-commits %} Pour plus d’informations, consultez « [Gestion des étiquettes](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags) ».

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Champ du message de commit](/assets/images/help/desktop/commit-message.png)
1. Si vous le souhaitez, pour attribuer un commit à un autre auteur, cliquez sur l’icône d’ajout de coauteurs, puis tapez le ou les noms d’utilisateurs à inclure.

  ![Ajouter un coauteur au message de commit](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![Bouton Valider](/assets/images/help/desktop/commit-button.png)
4. Si la branche dans laquelle vous essayez d’effectuer le commit est protégée, Desktop vous le signale.
    - Pour déplacer vos changements, cliquez sur **changer de branche**.
    - Pour commiter vos changements dans la branche protégée, cliquez sur **Commiter dans _BRANCHE_**.

  Pour plus d’informations sur les branches protégées, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».

  ![Avertissement relatif à une branche protégée](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. Si vous disposez d’une demande de tirage basée sur la branche sur laquelle vous travaillez, {% data variables.product.prodname_desktop %} affiche le statut des vérifications effectuées pour la demande de tirage. Pour plus d’informations sur les vérifications, consultez « [Affichage et réécriture des vérifications dans GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop) ».

 ![Les vérifications s’affichent en regard du nom de la branche](/assets/images/help/desktop/checks-dialog.png)

 Si aucune demande de tirage n’a été créée pour la branche actuelle, {% data variables.product.prodname_desktop %} vous donne la possibilité d’en créer une. Pour plus d’informations, consultez « [Création d’un problème ou d’une demande de tirage](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request) ».

 ![Création d’une demande de tirage](/assets/images/help/desktop/mac-create-pull-request.png)
