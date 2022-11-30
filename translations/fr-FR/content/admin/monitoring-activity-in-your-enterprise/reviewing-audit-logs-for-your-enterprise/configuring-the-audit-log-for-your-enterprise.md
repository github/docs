---
title: Configuration du journal d’audit de votre entreprise
intro: Vous pouvez configurer les paramètres du journal d’audit de votre entreprise.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106564'
---
## À propos de la configuration du journal d’audit

Vous pouvez configurer une période de conservation pour les données du journal d’audit et voir les détails du stockage d’index.

{% ifversion enable-git-events %} Après avoir configuré une période de conservation, vous pouvez activer ou désactiver l’affichage des événements liés à Git dans le journal d’audit.
{% endif %}

## Configuration d’une période de conservation pour les données du journal d’audit

Vous pouvez configurer une période de conservation des données du journal d’audit pour {% data variables.location.product_location %}. Les données qui dépassent la période que vous configurez sont définitivement supprimées du disque.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Sous « Configurer les paramètres de conservation du journal d’audit », sélectionnez le menu déroulant et cliquez sur une période de conservation.

   ![Capture d’écran du menu déroulant des paramètres de conservation du journal d’audit](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Cliquez sur **Enregistrer**.

{% ifversion enable-git-events %}
## Gestion des événements Git dans le journal d’audit

Vous pouvez activer ou désactiver l’affichage des événements liés à Git, tels que `git.clone` et `git.push`, dans votre journal d’audit. Pour obtenir la liste des événements Git qui sont journalisés, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions) ».

Si vous activez les événements Git, en raison du grand nombre d’événements Git journalisés, nous vous recommandons de surveiller le stockage de fichiers de votre instance et de passer en revue vos configurations d’alerte associées. Pour plus d’informations, consultez « [Surveillance du stockage](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage) ».

Avant de pouvoir activer les événements Git dans le journal d’audit, vous devez configurer une période de conservation pour les données du journal d’audit autre que « Infinie ». Pour plus d’informations, consultez « [Configuration d’une période de conservation pour les données du journal d’audit](#configuring-a-retention-period-for-audit-log-data) ».

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Sous « Accepter les événements Git », sélectionnez ou désélectionnez **Activer les événements Git dans le journal d’audit**.

   ![Capture d’écran de la case à cocher pour activer les événements Git dans le journal d’audit](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Cliquez sur **Enregistrer**.

{% endif %}
