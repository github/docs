---
title: Affichage de vos commanditaires et de vos parrainages
intro: Vous pouvez afficher et exporter des informations détaillées et des analyses sur vos commanditaires et vos parrainages.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134203'
---
## À propos des commanditaires et des parrainages

Vous pouvez afficher l’analyse de vos parrainages actuels et passés, les paiements que vous avez reçus des commanditaires et des événements, tels que les annulations et les changements de niveau de commanditaire pour vos parrainages. Vous pouvez également afficher les activités telles que les nouveaux parrainages, les modifications apportées aux parrainages et les parrainages annulés. Vous pouvez filtrer la liste des activités par date. Vous pouvez également exporter des données de parrainage pour le compte que vous affichez au format CSV ou JSON.

## À propos des métadonnées de transaction

Pour suivre l’emplacement de vos parrainages, vous pouvez utiliser des URL personnalisées avec des métadonnées pour votre profil {% data variables.product.prodname_sponsors %} ou la page de validation. Les métadonnées seront incluses dans votre exportation de transactions dans la colonne de métadonnées. Pour plus d’informations sur l’exportation de données transactionnelles, consultez « [Exportation de vos données de parrainage](#exporting-your-sponsorship-data) ».

Les métadonnées doivent utiliser le format `key=value` et peuvent être ajoutées à la fin de ces URL.

- Profil de compte parrainé : `https://github.com/sponsors/{account}`
- Validation de parrainage : `https://github.com/sponsors/{account}/sponsorships`

Les métadonnées sont conservées dans l’URL lorsqu’un commanditaire potentiel bascule les comptes à parrainer, sélectionne les paiements mensuels ou ponctuels et choisit un autre niveau.

### Conditions requises de la syntaxe

Vos métadonnées doivent respecter les exigences suivantes, qui ne s’appliquent à aucun autre paramètre d’URL passé.

- Les clés doivent être préfixées par `metadata_`, par exemple `metadata_campaign`. Dans votre exportation de transactions, le préfixe `metadata_` sera supprimé de la clé.
- Les clés et les valeurs doivent contenir uniquement des valeurs alphanumériques, des tirets ou des traits de soulignement. Si des caractères non acceptés sont transmis dans des clés ou des valeurs, une erreur 404 s’affiche.
- Les espaces ne sont pas autorisés.
- Un maximum de **10** paires clé-valeur est accepté par demande. Si d’autres sont passées, seules les 10 premières seront enregistrées.
- Un maximum de **25** caractères par clé est accepté. Si d’autres sont passés, seuls les 25 premiers seront enregistrés.
- Un maximum de **100** caractères par clé est accepté. Si d’autres sont passés, seuls les 100 premiers seront enregistrés.

Par exemple, vous pouvez utiliser `https://github.com/sponsors/{account}?metadata_campaign=myblog` pour suivre les parrainages provenant de votre blog. `metadata_campaign` est la clé et `myblog` la valeur. Dans la colonne de métadonnées de votre exportation de transactions, la clé est répertoriée en tant que `campaign`.

## Affichage de vos commanditaires et de vos parrainages

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Si vous le souhaitez, pour filtrer vos commanditaires par niveau, utilisez le menu déroulant **Filtre**, cliquez sur **Niveaux actifs** ou **Niveaux supprimés**, puis sélectionnez un niveau.
  ![Menu déroulant pour filtrer par niveau](/assets/images/help/sponsors/filter-drop-down.png)

## Affichage de l’activité de parrainage récente

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## Exportation de vos données de parrainage

Vous pouvez exporter vos transactions de parrainage par mois. {% data variables.product.company_short %} vous enverra un e-mail contenant des données de transaction pour tous vos commanditaires pour le mois que vous sélectionnez. Une fois l’exportation terminée, vous pouvez exporter un autre mois de données. Vous pouvez exporter jusqu’à 10 jeux de données par heure pour l’un de vos comptes parrainés.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. En haut à droite, cliquez sur {% octicon "download" aria-label="The download icon" %} **Exporter**.
  ![Bouton Exporter](/assets/images/help/sponsors/export-all.png)
1. Choisissez un délai d’exécution et un format pour les données que vous souhaitez exporter, puis cliquez sur **Démarrer l’exportation**.
  ![Options d’exportation de données](/assets/images/help/sponsors/export-your-sponsors.png)
