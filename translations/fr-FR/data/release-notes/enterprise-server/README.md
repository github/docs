---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193309"
---
# Notes de publication de GitHub Enterprise Server

Disponibles ici : https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Ajout de notes de publication à une version de GitHub Enterprise Server dépréciée

Pendant la dépréciation d’une version de GitHub Enterprise Server selon [ce modèle de problème](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md), Docs Engineering supprime les fichiers YAML avec les notes de publication de la version de `github/docs-internal`.

Si une partie prenante demande une mise à jour des notes de publication dépréciées, vous pouvez les mettre à jour en effectuant les étapes suivantes.

1. Extrayez la branche longue durée <code>enterprise-<em>VERSION</em>-release</code> et créez une demande de tirage pour mettre à jour les notes de publication de la version dépréciée sur cette branche.
2. Contactez #docs-engineering pour demander un « re-scrape » et une mise à jour du contenu stocké dans Azure. Consultez la section sur le « re-scraping » du contenu dans la [check-list de dépréciation](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md).

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

Les données YAML sont traitées et triées par `middleware/contextualizers/ghes-release-notes.js` et ajoutées à l’objet `context`.

### Dispositions

Les données d’objet `context` sont rendues par `components/release-notes`.

La page des notes de publication a une conception personnalisée avec CSS dans `stylesheets/release-notes.scss`.

### schéma

Le schéma qui valide les données YAML réside dans `tests/helpers/schemas/release-notes-schema.js`. Consultez le fichier de schéma pour découvrir les propriétés requises et facultatives.

Le schéma est testé dans `tests/linting/lint-files.js`. Le test échoue si les données ne réussissent pas la validation.
