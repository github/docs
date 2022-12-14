---
title: Personnalisation des vues de votre projet (bêta)
intro: Affichez les informations dont vous avez besoin en changeant la disposition, le regroupement, le tri et les filtres dans votre projet.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Projects
ms.openlocfilehash: 86b8d7e439b19327b1f752f8d893e349665168f4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128681"
---
{% data reusables.projects.projects-beta %}

## <a name="project-command-palette"></a>Palette de commandes du projet

Utilisez la palette de commandes du projet pour modifier rapidement les paramètres et exécuter des commandes dans votre projet.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper une partie d’une commande ou parcourez la fenêtre de la palette de commandes pour rechercher une commande. Pour obtenir d’autres exemples de commandes, consultez les sections suivantes.

## <a name="changing-the-project-layout"></a>Modification de la disposition du projet

Vous pouvez afficher votre projet sous forme de table ou de tableau.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Changer de disposition ».
3. Choisissez la commande souhaitée. Par exemple, **Changer de disposition : Table**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté d’un nom de vue, puis cliquer sur **Table** ou **Tableau**.

## <a name="showing-and-hiding-fields"></a>Affichage et masquage de champs

Vous pouvez afficher ou masquer un champ spécifique.

### <a name="showing-and-hiding-fields-in-table-layout"></a>Affichage et masquage de champs dans la disposition de table

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper l’action que vous souhaitez effectuer (« afficher » ou « masquer ») ou le nom du champ.
3. Choisissez la commande souhaitée. Par exemple, **Afficher : Jalon**.

Vous pouvez également cliquer sur {% octicon "plus" aria-label="the plus icon" %} à droite de la table. Dans le menu déroulant qui s’affiche, indiquez les champs à afficher ou à masquer. Une icône {% octicon "check" aria-label="check icon" %} indique les champs affichés.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom du champ, puis cliquer sur **Masquer le champ**.

### <a name="showing-and-hiding-fields-in-board-layout"></a>Affichage et masquage de champs dans la disposition de tableau

1. Cliquez sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom de la vue.
2. Sous **configuration**, cliquez sur {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. Dans le menu affiché, sélectionnez des champs pour les ajouter à la vue ou désélectionnez des champs pour les supprimer de la vue.

## <a name="reordering-fields"></a>Réorganisation des champs

Vous pouvez changer l’ordre des champs.

1. Cliquez sur l’en-tête du champ.
2. Tout en cliquant dessus, faites glisser le champ à l’emplacement souhaité.

## <a name="reordering-rows"></a>Réorganisation des lignes

Dans la disposition de table, vous pouvez changer l’ordre des lignes.

1. Cliquez sur le numéro au début de la ligne.
2. Tout en cliquant dessus, faites glisser la ligne à l’emplacement souhaité.

## <a name="sorting-by-field-values"></a>Tri par valeurs de champ

Dans la disposition de table, vous pouvez trier les éléments selon une valeur de champ.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Trier par » ou le nom du champ selon lequel le tri sera effectué.
3. Choisissez la commande souhaitée. Par exemple, **Trier par : Destinataires, croissant**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom du champ à utiliser pour le tri, puis cliquer sur **Tri croissant** ou sur **Tri décroissant**.

{% note %}

**Remarque :** Quand une table est triée, vous ne pouvez pas réorganiser manuellement les lignes.

{% endnote %}

Pour supprimer un tri, les étapes à effectuer sont similaires.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Supprimer le tri par ».
3. Choisissez **Supprimer le tri par**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom de la vue, puis cliquer sur l’élément de menu qui indique le tri actuel.

## <a name="grouping-by-field-values-in-table-layout"></a>Regroupement par valeurs de champ dans la disposition de table

Dans la disposition de table, vous pouvez regrouper des éléments selon une valeur de champ personnalisée. Quand des éléments sont regroupés, si vous faites glisser un élément vers un nouveau groupe, la valeur de ce groupe est appliquée. Par exemple, si vous regroupez des éléments par « État », puis faites glisser un élément avec l’état `In progress` vers le groupe `Done`, l’état de l’élément passe à `Done`. De même, quand vous ajoutez un nouvel élément à un groupe, cet élément est renseigné avec la valeur du groupe.

{% note %}

**Remarque :** Actuellement, vous ne pouvez pas regrouper des éléments par titre, étiquettes, réviseurs ou demandes de tirage liées.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Regrouper par » ou le nom du champ selon lequel le regroupement sera effectué.
3. Choisissez la commande souhaitée. Par exemple, **Regrouper par : État**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom de champ à utiliser pour le regroupement, puis cliquer sur **Regrouper par valeurs**.

Pour supprimer un regroupement, les étapes à effectuer sont similaires.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Supprimer le regroupement par ».
3. Choisissez **Supprimer le regroupement par**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté du nom de la vue, puis cliquer sur l’élément de menu qui indique le regroupement actuel.

## <a name="setting-the-column-field-in-board-layout"></a>Définition du champ de colonne dans la disposition de tableau

Dans la disposition de tableau, choisissez un champ de sélection unique ou d’itération pour vos colonnes. Si vous faites glisser un élément vers une nouvelle colonne, la valeur de cette colonne est appliquée à l’élément déplacé. Par exemple, si vous utilisez le champ « État » pour vos colonnes de tableau, puis faites glisser un élément avec l’état `In progress` vers la colonne `Done`, l’état de l’élément passe à `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Commencez à taper « Champ de colonne par » ou le nom du champ que vous souhaitez utiliser pour vos colonnes.
1. Choisissez la commande souhaitée. Par exemple, **Champ de colonne par : État**.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté de la vue du tableau que vous souhaitez modifier, puis cliquer sur {% octicon "columns" aria-label="the column icon" %} **Champ de colonne**. Sélectionnez ensuite le champ que vous souhaitez utiliser pour les colonnes du tableau.

## <a name="filtering-items"></a>Filtrage d’éléments

Cliquez sur {% octicon "filter" aria-label="the filter icon" %} en haut de la table pour afficher la barre « Filtrer par mot clé ou par champ ». Commencez à taper le nom et la valeur du champ à utiliser pour le filtrage. Pendant la saisie, des valeurs possibles apparaissent.

{% data reusables.projects.projects-filters %}

Vous pouvez également utiliser la palette de commandes.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Filtrer par » ou le nom du champ selon lequel le filtrage sera effectué.
3. Choisissez la commande souhaitée. Par exemple, **Filtrer par état**.
4. Entrez la valeur qui doit servir de filtre. Par exemple : « En cours ». Vous pouvez également utiliser comme filtre l’absence de valeurs spécifiques (par exemple, choisissez « Exclure l’état », puis un état) ou l’absence de toutes les valeurs (par exemple, « Aucun état »).

Dans la disposition de tableau, vous pouvez cliquer sur des données d’élément pour filtrer les éléments avec cette valeur. Par exemple, cliquez sur un destinataire pour afficher uniquement les éléments de ce destinataire. Pour supprimer le filtre, cliquez à nouveau sur les données d’élément.

Pour plus d’informations, consultez « [Filtrage de projets](/issues/trying-out-the-new-projects-experience/filtering-projects) ».

## <a name="creating-a-project-view"></a>Création d’une vue de projet

Les vues de projet vous permettent de voir rapidement des aspects spécifiques de votre projet. Chaque vue apparaît sous un onglet séparé dans votre projet. 

Par exemple, vous pouvez avoir :
- Une vue qui présente tous les éléments qui n’ont pas encore démarré (filtrer sur « État »).
- Une vue qui présente la charge de travail pour chaque équipe (regrouper par un champ « Équipe » personnalisé).
- Une vue qui présente les éléments avec la date d’expédition cible la plus ancienne (trier par un champ de date).

Pour ajouter une nouvelle vue :

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Nouvelle vue » (pour créer une vue) ou « Dupliquer la vue » (pour dupliquer la vue actuelle).
3. Choisissez la commande souhaitée.

Vous pouvez également cliquer sur {% octicon "plus" aria-label="the plus icon" %} **Nouvelle vue** à côté de la vue la plus à droite.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté d’un nom de vue, puis cliquer sur **Dupliquer la vue**.

La nouvelle vue est automatiquement enregistrée.

## <a name="saving-changes-to-a-view"></a>Enregistrement des modifications apportées à une vue

Quand vous apportez des modifications à une vue (notamment pour trier, réorganiser, filtrer ou regrouper des données), un point apparaît à côté du nom de la vue pour indiquer la présence de modifications non enregistrées. 

![Indicateur de modifications non enregistrées](/assets/images/help/projects/unsaved-changes.png)

Si vous ne souhaitez pas enregistrer les modifications, vous pouvez ignorer cet indicateur. Personne d’autre ne verra vos modifications.

Pour enregistrer la configuration actuelle de la vue pour tous les membres du projet :
1. {% data reusables.projects.open-command-palette %}
1. Commencez à taper « Enregistrer la vue » ou « Enregistrer les modifications dans une nouvelle vue ».
1. Choisissez la commande souhaitée.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté d’un nom de vue, puis cliquer sur **Enregistrer la vue** ou **Enregistrer les modifications dans une nouvelle vue**.

## <a name="reordering-saved-views"></a>Réorganisation de vues enregistrées

Pour modifier l’ordre des onglets contenant vos vues enregistrées, cliquez sur un onglet et faites-le glisser vers un nouvel emplacement.

Le nouvel ordre des onglets est automatiquement enregistré.

## <a name="renaming-a-saved-view"></a>Renommage d’une vue enregistrée

Pour renommer une vue :
1. Double-cliquez sur le nom sous l’onglet Projet.
1. Changez le nom.
1. Appuyez sur Entrée ou cliquez en dehors de l’onglet.

Le changement de nom est automatiquement enregistré.

## <a name="deleting-a-saved-view"></a>Suppression d’une vue enregistrée

Pour supprimer une vue :
1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper « Supprimer la vue ».
3. Choisissez la commande souhaitée.

Vous pouvez également cliquer sur {% octicon "triangle-down" aria-label="the drop-down icon" %} à côté d’un nom de vue, puis cliquer sur **Supprimer la vue**.

## <a name="further-reading"></a>Pour aller plus loin

- « [À propos des projets (bêta)](/issues/trying-out-the-new-projects-experience/about-projects) »
- « [Création d’un projet (bêta)](/issues/trying-out-the-new-projects-experience/creating-a-project) »
