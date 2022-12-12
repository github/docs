---
title: Filtrage des alertes dans la vue d’ensemble de la sécurité
intro: Utiliser des filtres pour afficher des catégories spécifiques d’alertes
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163194'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## À propos du filtrage de la vue d’ensemble de la sécurité

Vous pouvez utiliser des filtres dans une vue d’ensemble de la sécurité pour limiter votre recherche en fonction d’un éventail de facteurs, tels que le niveau de risque d’alerte, le type d’alerte et l’activation des fonctionnalités. Différents filtres sont disponibles selon la vue spécifique{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} et si vous affichez des données au niveau de l’entreprise ou de l’organisation{% endif %}.

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## Filtrer par dépôt

| Qualificateur | Description |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Affiche les données pour le dépôt spécifié. |

## Filtrer selon que les fonctionnalités de sécurité sont activées ou non

Dans les exemples ci-dessous, remplacez `:enabled` par `:not-enabled` pour voir les dépôts où les fonctionnalités de sécurité ne sont pas activées. Ces qualificateurs sont disponibles dans les principales vues récapitulatives.

| Qualificateur | Description |
| -------- | -------- |
| `code-scanning:enabled` | Afficher les dépôts pour lesquels l’{% data variables.product.prodname_code_scanning %} est configurée. | 
| `dependabot:enabled` | Afficher les dépôts pour lesquels les {% data variables.product.prodname_dependabot_alerts %} sont configurées. |
| `secret-scanning:enabled` | Afficher les dépôts pour lesquels les alertes {% data variables.product.prodname_secret_scanning %} sont activées. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Afficher les dépôts avec au moins une fonctionnalité de sécurité activée. |{% else %}
| `not-enabled:any` | Affichez les dépôts avec au moins une fonctionnalité de sécurité qui n’est pas activée. |{% endif %}

{% ifversion security-overview-org-risk-coverage %} La vue Couverture de la sécurité au niveau de l’organisation inclut des filtres supplémentaires.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualificateur | Description |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Afficher les dépôts pour lesquels l’{% data variables.product.prodname_code_scanning %} est configurée pour s’exécuter sur les demandes de tirage. |
| `dependabot-security-updates:enabled` | Afficher les dépôts pour lesquels les mises à jour de sécurité {% data variables.product.prodname_dependabot %} sont configurées.  |
| `secret-scanning-push-protection:enabled` | Afficher les dépôts pour lesquels la protection push est activée pour l’{% data variables.product.prodname_secret_scanning %}. |
{% endif %}

## Filtrer par type de dépôt

Ces qualificateurs sont disponibles dans les principales vues récapitulatives.

| Qualificateur | Description |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Afficher les dépôts publics. | {%- endif %} | `is:internal` | Afficher les dépôts internes. | | `is:private` | Afficher les dépôts privés. | | `archived:true` | Afficher les dépôts archivés. | | `archived:false` | Omettre les dépôts archivés. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Filtrer par niveau de risque pour les dépôts

Le niveau de risque pour un dépôt est déterminé par le nombre et la gravité des alertes provenant des fonctionnalités de sécurité. Si une ou plusieurs fonctionnalités de sécurité ne sont pas activées pour un dépôt, celui-ci a un niveau inconnu de risque. Si les fonctionnalités de sécurité ne détectent aucun risque pour un dépôt, celui-ci a un niveau de risque clair. 

{% ifversion security-overview-org-risk-coverage %} Ces qualificateurs sont disponibles dans la vue au niveau de l’entreprise.
{% endif %}

| Qualificateur | Description |
| -------- | -------- |
| `risk:high` | Afficher les dépôts dont le niveau de risque est élevé. |
| `risk:medium` | Afficher les dépôts dont le niveau de risque est moyen. |
| `risk:low` | Afficher les dépôts dont le niveau de risque est faible. |
| `risk:unknown` | Afficher les dépôts dont le niveau de risque est inconnu. |
| `risk:clear` | Afficher les dépôts dont le niveau de risque n’est pas détecté. |
{% endif %}

## Filtrer par nombre d’alertes

{% ifversion security-overview-org-risk-coverage %}Ces qualificateurs sont disponibles dans la Vue d’ensemble au niveau de l’entreprise et dans la vue Risque de sécurité au niveau de l’organisation. {% else %}Ces qualificateurs sont disponibles dans les principales vues récapitulatives.{% endif %}

| Qualificateur | Description |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Afficher les dépôts qui ont *n* alertes d’{% data variables.product.prodname_code_scanning %}. Ce qualificateur peut utiliser les opérateurs de comparaison `=`, `>` et `<`. |
| <code>secret-scanning:<em>n</em></code> | Afficher les dépôts qui ont *n* alertes d’{% data variables.product.prodname_secret_scanning %}. Ce qualificateur peut utiliser les opérateurs de comparaison `=`, `>` et `<`. |
| <code>dependabot:<em>n</em></code> | Afficher les dépôts qui ont *n* {% data variables.product.prodname_dependabot_alerts %}. Ce qualificateur peut utiliser les opérateurs de comparaison `=`, `>` et `<`. |


## Filtrer par équipe

Ces qualificateurs sont disponibles dans les principales vues récapitulatives.

| Qualificateur | Description |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Affiche les dépôts pour lesquels l’équipe spécifiée (*TEAM-NAME*) dispose des privilèges d’administrateur. |

## Filtrer par rubrique

Ces qualificateurs sont disponibles dans les principales vues récapitulatives.

| Qualificateur | Description |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Affiche les dépôts classifiés avec le nom de rubrique spécifié (*TOPIC-NAME*). |

{% ifversion security-overview-alert-views %}

## Filtres supplémentaires pour les vues d’alerte {% data variables.product.prodname_code_scanning %}

Toutes les alertes d’analyse du code ont l’une des catégories indiquées ci-dessous. Vous pouvez cliquer sur n’importe quel résultat pour voir les détails complets de la requête concernée et la ligne de code qui a déclenché l’alerte.

| Qualificateur | Description |
| -------- | -------- |
|`severity:critical`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées comme critiques.|
|`severity:high`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées comme élevées.|
|`severity:medium`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées comme moyennes.|
|`severity:low`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées comme faibles.|
|`severity:error`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées en tant qu’erreurs.|
|`severity:warning`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées en tant qu’avertissements.|
|`severity:note`|Affiche les alertes d’{% data variables.product.prodname_code_scanning %} classées en tant que remarques.|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Filtres supplémentaires pour les vues d’alerte {% data variables.product.prodname_dependabot %}

Vous pouvez filtrer la vue pour afficher les {% data variables.product.prodname_dependabot_alerts %} prêtes à corriger ou dans lesquelles des informations supplémentaires sur l’exposition sont disponibles. Vous pouvez cliquer sur n’importe quel résultat pour afficher les détails complets de l’alerte.

| Qualificateur | Description |
| -------- | -------- |
|`has:patch`|Affiche les alertes {% data variables.product.prodname_dependabot %} pour les vulnérabilités où une version sécurisée est déjà disponible.|
|`has:vulnerable-calls`|Affiche les alertes {% data variables.product.prodname_dependabot %} dans lesquelles au moins un appel du référentiel vers une fonction vulnérable est détecté. Pour plus d’informations, consultez « [Affichage et mise à jour des alertes Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions) ».|
{% endif %}

{% endif %}

## Filtres supplémentaires pour les vues d’alerte {% data variables.product.prodname_secret_scanning %}

| Qualificateur | Description |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Affiche les alertes pour tous les secrets émis par le fournisseur spécifié.  |
| `secret-type:SERVICE_PROVIDER` | Affiche les alertes pour le secret et le fournisseur spécifiés. |
| `secret-type:CUSTOM-PATTERN` | Affiche les alertes pour les secrets correspondant au modèle personnalisé spécifié.  |

Pour plus d’informations, consultez « [Modèles d’{% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns) ».

