---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104097"
---
# Notes de publication pour GitHub AE

Affiché ici : https://docs.github.com/en/github-ae@latest/admin/release-notes

## Fonctionnement

### Fichier de contenu d’espace réservé

Un fichier de contenu existe dans `content/admin/release-notes.md`. Il contient une propriété frontmatter `layout: release-notes` spéciale et aucun contenu Markdown. La source des notes de publication provient des données YAML.

### Source YAML

Les données sources des notes de publication se trouvent dans ce répertoire (`data/release-notes/github-ae`).

Les répertoires sont nommés par mois. Les fichiers YAML sont nommés par les données d’une version hebdomadaire.

Une propriété booléenne appelée `currentWeek` doit être définie dans chaque fichier YAML. Cette propriété ne peut pas être définie sur true pour plus d’un fichier à la fois.

Notez que les fichiers correctifs peuvent être déconseillés individuellement (c’est-à-dire masqués sur le site de documentation) via une propriété facultative `deprecated: true`.

### Traitement de l’intergiciel

Les données YAML sont traitées et triées par `middleware/contextualizers/release-notes.js` et ajoutées à l’objet `context`.

### Dispositions

Les données d’objet `context` sont rendues par `components/release-notes`.

La page des notes de publication a une conception personnalisée avec CSS dans `stylesheets/release-notes.scss`.

### schéma

Le schéma qui valide les données YAML réside dans `tests/helpers/schemas/ghae-release-notes-schema.js`. Consultez le fichier de schéma pour découvrir les propriétés requises et facultatives.

Le schéma est testé dans `tests/linting/lint-files.js`. Le test échoue si les données ne réussissent pas la validation.
