---
title: Exportation de l’activité du journal d’audit pour votre entreprise
intro: Vous pouvez exporter les données d’événements Git et d’audit vers un fichier pour une analyse hors connexion.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060737'
---
## À propos des exportations de données d’événements du journal d’audit et Git

Vous pouvez exporter le journal d’audit en téléchargeant un fichier JSON ou CSV à partir de votre entreprise sur {% data variables.product.product_name %}. Quand vous exportez des événements du journal d’audit, vous pouvez effectuer des interrogations avec un ou plusieurs des qualificateurs pris en charge pour filtrer les événements de journal spécifiques à exporter. Pour plus d’informations sur les qualificateurs de recherche, consultez « [Recherche basée sur l’action effectuée](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed) ».

Vous pouvez exporter des données d’événements Git en téléchargeant un fichier JSON à partir du journal d’audit de votre entreprise. Vous ne pouvez pas effectuer d’interrogation pour filtrer et exporter des événements Git spécifiques dans l’interface utilisateur du journal d’audit comme vous pouvez le faire avec les données du journal d’audit. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

Au lieu d’exporter des événements de journal, vous pouvez utiliser l’API pour récupérer des événements du journal d’audit ou configurer {% data variables.product.product_name %} pour envoyer des données d’audit en streaming à mesure que les événements sont journalisés. Pour plus d’informations, consultez « [Utilisation de l’API de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) » et « [Streaming de journaux d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) ».

## Exportation des données du journal d’audit

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Si vous le souhaitez, pour exporter uniquement les résultats filtrés, effectuez une recherche avec un ou plusieurs qualificateurs ou filtres de journal pris en charge.
2. Sélectionnez le menu déroulant **Exporter** en regard de {% octicon "download" aria-label="The Download icon" %}, puis choisissez le format de fichier (JSON ou CSV) pour l’exportation des événements de journal.

    ![Bouton Exporter](/assets/images/help/organizations/org-audit-log-export.png)

## Exportation des données d’événements Git

Vous pouvez également exporter des données d’événements Git par plage de dates.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Sélectionnez le menu déroulant **Exporter des événements Git** en regard de {% octicon "download" aria-label="The Download icon" %}, puis choisissez une plage de dates pour l’exportation des événements de journal.

    ![Bouton Exporter des événements Git](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Cliquez sur **Télécharger les résultats** en regard de {% octicon "file-zip" aria-label="The File-zip icon" %} pour télécharger le fichier.
1. Les données sont exportées dans un fichier JSON compressé. Pour extraire les données JSON, décompressez le fichier à l’aide d’une commande ou d’un client utilitaire d’archivage. Par exemple :

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
