---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158852"
---
- Pour filtrer les correspondances de plusieurs valeurs (requête OR), séparez les valeurs par une virgule. Par exemple, `label:"good first issue",bug` répertorie tous les problèmes étiquetés `good first issue` ou `bug`.
- Pour filtrer l’absence d’une valeur spécifique, placez `-` devant votre filtre. Par exemple, `-label:"bug"` n’affichera que les éléments qui ne comportent pas l’étiquette `bug`.
- Pour filtrer l’absence de toutes les valeurs, entrez `no:` suivi du nom du champ. Par exemple, `no:assignee` n’affichera que les éléments dépourvus de personne responsable.
- Pour filtrer par état, entrez `is:`. Par exemple, `is: issue` ou `is:open`.
- Séparez plusieurs filtres par un espace. Par exemple, `status:"In progress" -label:"bug" no:assignee` n’affichera que les éléments dont l’état est `In progress`, et dépourvus d’étiquette `bug` et de personne responsable.
- Pour filtrer l’itération précédente, actuelle ou suivante d’un champ d’itération, utilisez `@previous`, `@current` ou `@next`. Par exemple : `iteration:@current`.
- Pour filtrer les éléments attribués à la visionneuse, utilisez `@me`. Par exemple : `assignee:@me`. Toute personne utilisant cette vue verra les éléments qui lui sont attribués.
- Pour filtrer par date de dernière mise à jour d’un élément, utilisez `last-updated:` suivi du nombre de jours. Ce filtre prend uniquement en charge `{number}days` (ou `1day` pour un seul jour) comme unité. Par exemple, `last-updated:7days` montre uniquement les éléments qui ont été mis à jour pour la dernière fois il y a 7 jours ou plus.
- Pour filtrer les champs de dates et de nombres, utilisez les requêtes de plage `>`, `>=`, `<`, `<=` et `..`. Par exemple : `target:2022-03-01..2022-03-15`. Pour plus d’informations, consultez « [Présentation de la syntaxe de recherche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) ». {% ifversion projects-v2-tasklists %}
- Pour filtrer les problèmes suivis par un problème spécifié, utilisez `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` et remplacez `<OWNER>` par le propriétaire du dépôt, `<REPO>` par le nom du dépôt et `<ISSUE NUMBER>` par le numéro de problème. {% endif %}
