---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104105"
---
# Notes de publication de GitHub Enterprise Server

Disponibles ici : https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Fonctionnement

### Fichier de contenu d’espace réservé

Un fichier de contenu existe dans `content/admin/release-notes.md`. Il contient une propriété frontmatter `layout: release-notes` spéciale et aucun contenu Markdown. La source des notes de publication provient des données YAML.

### Source YAML

Les données sources des notes de publication sont disponibles dans ce répertoire (`data/release-notes/enterprise-server`).

Les répertoires sont nommés par numéro de version GHES (avec un trait d’union au lieu du point).

Les fichiers YAML contenus dans chaque répertoire sont nommés par numéro de patch. Le nom de certains fichiers de patch peut se terminer par `-rc<num>.yml`, ce qui signifie qu’il s’agit d’une version Release Candidate (RC). Un fichier RC requiert également `release_candidate: true` dans les données YAML.

Les notes de publication des versions déconseillées de GHES (voir `lib/enterprise-server-releases.js`) ne sont **pas** supprimées du site et continueront à apparaître à côté des versions actuellement prises en charge.

Notez que les fichiers de patch peuvent être déconseillés individuellement (c’est-à-dire masqués sur le site de documentation) par une propriété `deprecated: true` facultative.

### Traitement de l’intergiciel

Les données YAML sont traitées et triées par `middleware/contextualizers/release-notes.js` et ajoutées à l’objet `context`.

### Dispositions

Les données d’objet `context` sont rendues par `components/release-notes`.

La page des notes de publication a une conception personnalisée avec CSS dans `stylesheets/release-notes.scss`.

### schéma

Le schéma qui valide les données YAML réside dans `tests/helpers/schemas/ghes-release-notes-schema.js`. Consultez le fichier de schéma pour découvrir les propriétés requises et facultatives.

Le schéma est testé dans `tests/linting/lint-files.js`. Le test échoue si les données ne réussissent pas la validation.
