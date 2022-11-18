---
title: Personnalisation d’une vue
intro: 'Affichez les informations dont vous avez besoin en changeant la disposition, le regroupement et le tri dans votre projet.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 0a7d1076fcf1a9d7f20b65a5e0a75b7d8029f834
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106772'
---
## Modification de la disposition du projet

Vous pouvez afficher votre projet sous forme de table ou de tableau.

{% data reusables.projects.open-view-menu %}
1. Sous « Disposition », cliquez sur **Tableau** ou **Panneau**.
   ![Capture d’écran montrant l’option Disposition](/assets/images/help/projects-v2/table-or-board.png)

 

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Changer de disposition ».

## Affichage et masquage de champs

Vous pouvez afficher ou masquer un champ spécifique.

{% data reusables.projects.open-view-menu %}
1. Sous « Configuration », cliquez sur {% octicon "note" aria-label="the note icon" %} et la liste des champs actuellement affichés.
   ![Capture d’écran montrant l’option de menu Afficher et masquer les champs](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Sélectionnez ou désélectionnez les champs que vous voulez afficher ou masquer.
   ![Capture d’écran montrant le menu Afficher et masquer les champs](/assets/images/help/projects-v2/show-hide-fields.png)

Vous pouvez également masquer des champs individuels en mode Tableau.

1. À côté du champ que vous souhaitez masquer, cliquez sur {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Capture d’écran montrant l’icône du menu Champ](/assets/images/help/projects-v2/modify-field-menu.png)
1. Cliquez sur {% octicon "eye-closed" aria-label="the eye closed icon" %} **Masquer le champ**.
   ![Capture d’écran montrant l’option de menu Masquer le champ](/assets/images/help/projects-v2/hide-field-via-menu.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « afficher », « masquer » ou le nom du champ.

## Réorganisation des champs

Dans la disposition Tableau, vous pouvez changer l’ordre des champs.

1. Cliquez sur l’en-tête du champ.
   ![Capture d’écran montrant l’en-tête du champ](/assets/images/help/projects-v2/select-field-header.png)
2. Tout en continuant à cliquer dessus, faites glisser le champ à l’emplacement souhaité.

## Réorganisation des lignes

Dans la disposition de table, vous pouvez changer l’ordre des lignes.

1. Cliquez sur le numéro au début de la ligne.
   ![Capture d’écran montrant le numéro de ligne](/assets/images/help/projects-v2/select-row-number.png)
2. Tout en continuant à cliquer dessus, faites glisser la ligne à l’emplacement souhaité.

## Tri par valeurs de champ

Dans la disposition de table, vous pouvez trier les éléments selon une valeur de champ.

{% note %}

**Remarque :** Quand une table est triée, vous ne pouvez pas réorganiser manuellement les lignes.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Cliquez sur **Trier**.
   ![Capture d’écran montrant l’élément de menu Trier](/assets/images/help/projects-v2/sort-menu-item.png)
1. Cliquez sur le champ par lequel vous voulez trier.
   ![Capture d’écran montrant le menu Trier](/assets/images/help/projects-v2/sort-menu.png)
2. Si vous le souhaitez, pour changer l’ordre de tri, cliquez sur {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Capture d’écran montrant l’option Ordre de tri](/assets/images/help/projects-v2/sort-order.png)
3. Si vous le souhaitez, pour supprimer un tri, cliquez sur {% octicon "x" aria-label="the x icon" %} **Aucun tri** en bas de la liste.
   ![Capture d’écran montrant « Aucun tri »](/assets/images/help/projects-v2/no-sorting.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Trier par ».

## Regroupement par valeurs de champ dans la disposition de table

Dans la disposition de table, vous pouvez regrouper des éléments selon une valeur de champ personnalisée. Quand des éléments sont regroupés, si vous faites glisser un élément vers un nouveau groupe, la valeur de ce groupe est appliquée. Par exemple, si vous regroupez des éléments par « État », puis faites glisser un élément avec l’état `In progress` vers le groupe `Done`, l’état de l’élément passe à `Done`. De même, quand vous ajoutez un nouvel élément à un groupe, cet élément est renseigné avec la valeur du groupe.

{% note %}

**Remarque :** Vous ne pouvez pas regrouper des éléments par titre, étiquettes, réviseurs ou demandes de tirage liées.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "rows" aria-label="the rows icon" %} **Regrouper**.
   ![Capture d’écran montrant l’élément de menu Regrouper](/assets/images/help/projects-v2/group-menu-item.png)
1. Cliquez sur le champ par lequel regrouper.
   ![Capture d’écran montrant le menu Regrouper](/assets/images/help/projects-v2/group-menu.png)
2. Si vous le souhaitez, pour désactiver le regroupement, cliquez sur {% octicon "x" aria-label="the x icon" %} **Aucun regroupement** en bas de la liste.
   ![Capture d’écran montrant « Aucun regroupement »](/assets/images/help/projects-v2/no-grouping.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Regrouper par ».

{% ifversion projects-v2-numeric-summary %}

## Affichage de la somme d’un champ numérique

Vous pouvez configurer une vue pour montrer la somme d’un ou plusieurs champs numériques, y compris un nombre d’éléments dans le groupe ou la colonne. Par exemple, si vous avez un champ numérique qui suit le nombre d’heures que chaque élément peut prendre pour se terminer, vous pouvez afficher la somme de ces heures pour chaque groupe ou colonne.

Dans la disposition en tableau, les sommes des champs sont affichées en haut de chaque colonne. Dans la disposition en table, quand vous activez le regroupement selon un champ, les sommes des champs sont incluses dans l’en-tête de chaque groupe.

{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "number" aria-label="the number icon" %} **Somme des champs**.
   
   ![Capture d’écran montrant l’élément de menu Somme des champs](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. Sélectionnez les champs à inclure.
   
   ![Capture d’écran montrant le menu Somme des champs](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## Définition du champ de colonne dans la disposition de tableau

Dans la disposition de tableau, choisissez un champ de sélection unique ou d’itération pour vos colonnes. Si vous faites glisser un élément vers une nouvelle colonne, la valeur de cette colonne est appliquée à l’élément déplacé. Par exemple, si vous utilisez le champ « État » pour vos colonnes de tableau, puis faites glisser un élément avec l’état `In progress` vers la colonne `Done`, l’état de l’élément passe à `Done`.

{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "columns" aria-label="the columns icon" %} **Champ de colonne**.
   ![Capture d’écran montrant l’élément Champ de colonne](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Cliquez sur le champ que vous souhaitez utiliser.
   ![Capture d’écran montrant le menu Champ de colonne](/assets/images/help/projects-v2/column-field-menu.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Champ de colonne ».

{% ifversion projects-v2-column-visibility %}

## Affichage et masquage de champs dans la disposition en tableau

Dans la disposition en tableau, vous pouvez choisir les colonnes à afficher. Les colonnes disponibles sont constituées du contenu du champ de la colonne sélectionnée.

1. Dans la disposition en tableau, faites défiler vers la droite de vos colonnes, puis cliquez sur {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Capture d’écran montrant le bouton avec le symbole Plus](/assets/images/help/projects-v2/board-add-column.png)
   
1. Sélectionnez les colonnes que vous voulez montrer.
   
   ![Capture d’écran montrant la liste des colonnes](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}
