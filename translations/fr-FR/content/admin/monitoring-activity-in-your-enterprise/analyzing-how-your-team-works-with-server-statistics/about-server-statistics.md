---
title: À propos des statistiques du serveur
intro: 'Vous pouvez utiliser {% data variables.product.prodname_server_statistics %} pour analyser vos propres données agrégées à partir de {% data variables.product.prodname_ghe_server %} et nous aider à améliorer les produits {% data variables.product.company_short %}.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185184'
---
## À propos des avantages des {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} peut vous aider à anticiper les besoins de votre organisation, à comprendre le fonctionnement de votre équipe et à montrer la valeur que vous tirez de {% data variables.product.prodname_ghe_server %}.

Une fois activé, {% data variables.product.prodname_server_statistics %} collecte des données agrégées sur la quantité de certaines fonctionnalités utilisées sur votre instance au fil du temps. Contrairement à d’autres points de terminaison de l’[API Admin Stats](/rest/reference/enterprise-admin#admin-stats), qui retournent uniquement des données pour le dernier jour, {% data variables.product.prodname_server_statistics %} fournit des données historiques de toutes les métriques {% data variables.product.prodname_server_statistics %} collectées depuis le jour où vous avez activé la fonctionnalité. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_server_statistics %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) ».

Lorsque vous activez {% data variables.product.prodname_server_statistics %}, vous contribuez à améliorer {% data variables.product.prodname_dotcom %}. Les données agrégées que vous fournirez nous donnent des insights sur la façon dont {% data variables.product.prodname_dotcom %} apporte de la valeur à nos clients. Ces informations permettent à {% data variables.product.company_short %} de prendre des décisions de produit meilleures et plus éclairées, ce qui vous bénéficie au final.

## À propos de la sécurité des données

Nous respectons vos données. Nous ne transmettrons jamais les données de {% data variables.location.product_location %} sauf si vous nous avez donné l’autorisation de le faire.

Nous ne collectons aucune donnée personnelle. Nous ne collectons pas non plus de contenu {% data variables.product.company_short %}, comme le code, les problèmes, les commentaires ou le contenu de la demande de tirage.

Seuls les propriétaires du compte d’entreprise connecté ou de l’organisation sur {% data variables.product.prodname_ghe_cloud %} peuvent accéder aux données.

Seules certaines métriques d’agrégation sont collectées sur les référentiels, les problèmes, les demandes d’extraction et d’autres fonctionnalités. Pour afficher la liste des métriques agrégées collectées, consultez « [{% data variables.product.prodname_server_statistics %} collectées](#server-statistics-data-collected) ». 

Toutes les mises à jour des métriques collectées se produisent dans les mises en production de fonctionnalité ultérieures de {% data variables.product.prodname_ghe_server %} et sont décrites dans les [notes de publication de {% data variables.product.prodname_ghe_server %}](/admin/release-notes). En outre, nous mettrons à jour cet article avec toutes les mises à jour de métriques.

Pour mieux comprendre comment nous stockons et sécurisons {% data variables.product.prodname_server_statistics %}, consultez « [Sécurité de GitHub](https://github.com/security) ».

### À propos de la rétention et de la suppression des données

{% data variables.product.company_short %} collecte des données {% data variables.product.prodname_server_statistics %} tant que votre licence {% data variables.product.prodname_ghe_server %} est active et que la fonctionnalité {% data variables.product.prodname_server_statistics %} est activée.

Si vous souhaitez supprimer vos données, vous pouvez le faire en contactant le support technique GitHub, votre représentant de compte {% data variables.product.prodname_dotcom %} ou votre responsable de réussite client.  En règle générale, nous supprimons les données dans la période spécifiée dans notre déclaration de confidentialité. Pour plus d’informations, consultez la [déclaration de confidentialité de {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data), dans la documentation {% data variables.product.prodname_dotcom_the_website %}.

### À propos de la portabilité des données

En tant que propriétaire d’organisation ou propriétaire d’entreprise sur {% data variables.product.prodname_ghe_cloud %}, vous pouvez accéder à {% data variables.product.prodname_server_statistics %} en exportant les données dans un fichier CSV ou JSON ou via l’API REST {% data variables.product.prodname_server_statistics %}. Pour plus d’informations, consultez « [Demande de {% data variables.product.prodname_server_statistics %} à l’aide de l’API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api) » ou « [Exportation de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics) ».

## À propos de la désactivation de la collecte de données

Vous pouvez désactiver la fonctionnalité {% data variables.product.prodname_server_statistics %} à tout moment. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_server_statistics %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) ».

## {% data variables.product.prodname_server_statistics %} data collected

Une fois que vous avez activé {% data variables.product.prodname_server_statistics %}, les métriques sont collectées via un travail quotidien qui s’exécute sur {% data variables.location.product_location %}. Les métriques d’agrégation sont stockées sur votre compte d’entreprise ou d’organisation sur {% data variables.product.prodname_ghe_cloud %} et ne sont pas stockées sur {% data variables.location.product_location %}.

Les métriques d’agrégation suivantes seront collectées et transmises quotidiennement et représentent le total pour la journée.

Colonne CSV | Nom | Description |
---------- | ---- | ----------- |
Un   | `github_connect.features_enabled` | Tableau des fonctionnalités {% data variables.product.prodname_github_connect %} activées pour votre instance (consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features) ») |
B   | `host_name` | Le nom d’hôte de votre instance |
C   | `dormant_users.dormancy_threshold` | La durée pendant laquelle un utilisateur doit être inactif pour être considéré comme étant dormant |
D   | `dormant_users.total_dormant_users` | Nombre de comptes d’utilisateurs dormants |
E   | `ghes_version` | Version de {% data variables.product.product_name %} que votre instance exécute |
F   | `server_id` | UUID généré pour votre instance
G   | `collection_date` | Date à laquelle les métriques ont été collectées |
H   | `schema_version` | Version du schéma de base de données utilisé pour stocker ces données |
I   | `ghe_stats.comments.total_commit_comments` | Nombre de commentaires sur les validations |
J   | `ghe_stats.comments.total_gist_comments` | Nombre de commentaires sur les Gists |
K   | `ghe_stats.comments.total_issue_comments` | Nombre de commentaires sur les problèmes | 
L   | `ghe_stats.comments.total_pull_request_comments` | Nombre de commentaires sur les demandes de tirage (pull requests) |
M   | `ghe_stats.gists.total_gists` | Nombre de Gists (secrets et publics) |
N   | `ghe_stats.gists.private_gists` | Nombre de Gists secrets |
O   | `ghe_stats.gists.public_gists` | Nombre de Gists publics |
P   | `ghe_stats.hooks.total_hooks` | Nombre de crochets de pré-réception (actifs et inactifs) |
Q   | `ghe_stats.hooks.active_hooks` | Nombre de crochets de pré-réception actifs |
R   | `ghe_stats.hooks.inactive_hooks` | Nombre de crochets de pré-réception inactifs |
S   | `ghe_stats.issues.total_issues` | Nombre de problèmes (ouverts et fermés) |
T   | `ghe_stats.issues.open_issues` | Nombre de problèmes ouverts |
U   | `ghe_stats.issues.closed_issues` | Nombre de problèmes fermés |
V   | `ghe_stats.milestones.total_milestones` | Nombre de jalons (ouverts et fermés) |
W   | `ghe_stats.milestones.open_milestones` | Nombre de jalons ouverts |
X   | `ghe_stats.milestones.closed_milestones` | Nombre de jalons fermés |
O   | `ghe_stats.orgs.total_orgs` | Nombre d’organisations (activées et désactivées) |
Z   | `ghe_stats.orgs.disabled_orgs` | Nombre d’organisations désactivées |
AA | `ghe_stats.orgs.total_teams` | Nombre d’équipes |
AB | `ghe_stats.orgs.total_team_members` | Nombre de membres de l’équipe |
Secteur | `ghe_stats.pages.total_pages` | Nombre de sites {% data variables.product.prodname_pages %} |
AD | `ghe_stats.pulls.total_pulls` | Nombre de demandes de tirage |
AE | `ghe_stats.pulls.merged_pulls` | Nombre de demandes de tirage fusionnées |
AF | `ghe_stats.pulls.mergeable_pulls` | Nombre de demandes de tirage actuellement fusionnables |
Groupe de disponibilité | `ghe_stats.pulls.unmergeable_pulls` | Nombre de demandes de tirage actuellement non fusionnables |
AH | `ghe_stats.repos.total_repos` | Nombre de référentiels (référentiels en amont et duplications) |
Intelligence artificielle | `ghe_stats.repos.root_repos` | Nombre de référentiels en amont |
AJ | `ghe_stats.repos.fork_repos` | Nombre de duplications |
AK | `ghe_stats.repos.org_repos` | Nombre de référentiels détenus par des organisations |
AL | `ghe_stats.repos.total_pushes` | Nombre d’envois (push) vers des référentiels |
AM | `ghe_stats.repos.total_wikis` | Nombre de wikis |
AN | `ghe_stats.users.total_users` | Nombre de comptes d’utilisateur |
AO | `ghe_stats.users.admin_users` | Nombre de comptes d’utilisateur administrateurs de site |
AP | `ghe_stats.users.suspended_users` | Nombre de comptes d’utilisateur suspendus |

## Exemples de données {% data variables.product.prodname_server_statistics %}

Pour voir un exemple des en-têtes inclus dans l’exportation CSV pour {% data variables.product.prodname_server_statistics %}, téléchargez [l’exemple CSV {% data variables.product.prodname_server_statistics %}](/assets/server-statistics-csv-example.csv).

Pour voir un exemple de charge utile de réponse pour l’API {% data variables.product.prodname_server_statistics %}, consultez « [Demander {% data variables.product.prodname_server_statistics %} à l’aide de l’API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api) ».
