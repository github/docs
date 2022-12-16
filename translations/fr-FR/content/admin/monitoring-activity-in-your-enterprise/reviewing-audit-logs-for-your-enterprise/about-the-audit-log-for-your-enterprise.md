---
title: À propos du journal d’audit de votre entreprise
intro: 'Pour prendre en charge le débogage et la conformité interne et externe, {% data variables.product.product_name %} fournit des journaux d’événements audités de type {% ifversion ghes %} système,{% endif %} utilisateur, organisation et dépôt.'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: be8600e2037793a145fd2484742ddd3eb52e91a4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159036'
---
## À propos des journaux d’audit

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Vous pouvez superviser l’activité de votre entreprise non seulement en consultant votre journal d’audit, mais aussi, par exemple, {% ifversion ghes or ghae %}en consultant les journaux de poussées (push) et {% endif %}en gérant les webhooks globaux. Pour plus d’informations, consultez « [Exploration de l’activité utilisateur dans votre entreprise](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity) ».

## Utilisation de vos journaux d’audit

Si vous êtes propriétaire d’entreprise{% ifversion ghes %} ou administrateur de site{% endif %}, vous pouvez interagir avec les données du journal d’audit de votre entreprise de plusieurs façons :
- Vous pouvez voir le journal d’audit de votre entreprise. Pour plus d’informations, consultez « [Accès au journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise) ».
- Vous pouvez rechercher des événements spécifiques dans le journal d’audit{% ifversion ghec %} et exporter les données du journal d’audit{% endif %}. Pour plus d’informations, consultez « [Recherche dans le journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) »{% ifversion ghec %} et « [Exportation du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise) »{% endif %}.{% ifversion token-audit-log %}
- Vous pouvez identifier tous les événements qui ont été effectués par un jeton d’accès spécifique. Pour plus d’informations, consultez « [Identification des événements de journal d’audit effectués par un jeton d’accès](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) ».{% endif %}{% ifversion audit-data-retention-tab %}
- Vous pouvez configurer des paramètres, tels que la période de conservation des événements du journal d’audit{% ifversion enable-git-events %} et l’inclusion ou non des événements Git{% endif %}. Pour plus d’informations, consultez « [Configuration du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise) ».{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- Vous pouvez afficher l’adresse IP associée aux événements dans le journal d’audit. Pour plus d’informations, consultez « [Affichage des adresses IP dans le journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise) ».
{%- endif %} {%- ifversion audit-log-streaming %}
- Vous pouvez envoyer en streaming les données d’événements d’audit et Git à partir de {% data variables.product.prodname_dotcom %} vers un système de gestion des données externe. Pour plus d’informations, consultez « [Streaming de journaux d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) ».
{%- endif %} {%- ifversion ghes %}
- Vous pouvez transférer les journaux d’audit et système de votre entreprise vers un système de monitoring hébergé par un tiers. Pour plus d’informations, consultez « [Transfert de journaux](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding) ».
{%- endif %}
- Vous pouvez utiliser l’API de journal d’audit pour voir les actions effectuées dans votre entreprise. Pour plus d’informations, consultez « [Utilisation de l’API de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) ».

Pour obtenir la liste complète des actions pouvant figurer dans le journal d’audit de votre entreprise, consultez « [Actions du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) ».

## Pour aller plus loin
- « [Examen du journal d’audit de votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization) » {%- ifversion ghes %}
- « [À propos des journaux système](/admin/enterprise-management/monitoring-your-appliance/about-system-logs) » {%- endif %}
