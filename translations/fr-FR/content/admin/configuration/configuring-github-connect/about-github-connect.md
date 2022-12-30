---
title: À propos de GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} améliore {% data variables.product.product_name %} en vous donnant accès à d’autres fonctionnalités et workflows qui s’appuient sur la puissance de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160815'
---
## À propos de {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} améliore {% data variables.product.product_name %} en permettant à {% data variables.location.product_location %} de tirer parti de la puissance de {% data variables.product.prodname_dotcom_the_website %} de manière limitée. Après avoir activé {% data variables.product.prodname_github_connect %}, vous pouvez activer des fonctionnalités et des workflows supplémentaires qui s’appuient sur {% data variables.product.prodname_dotcom_the_website %}, comme les {% data variables.product.prodname_dependabot_alerts %} pour les vulnérabilités de sécurité qui sont suivies dans la {% data variables.product.prodname_advisory_database %}.

{% data variables.product.prodname_github_connect %} n’ouvre pas {% data variables.location.product_location %} à l’Internet public. Les données privées de votre entreprise ne sont à aucun moment exposées aux utilisateurs de {% data variables.product.prodname_dotcom_the_website %}. En effet, {% data variables.product.prodname_github_connect %} transmet uniquement les données limitées nécessaires aux différentes fonctionnalités que vous choisissez d’activer. À moins que vous activiez la synchronisation de licence, aucune donnée personnelle n’est transmise par {% data variables.product.prodname_github_connect %}. Pour plus d’informations sur les données transmises par {% data variables.product.prodname_github_connect %}, consultez « [Transmission de données pour {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect) ».

L’activation de {% data variables.product.prodname_github_connect %} ne permet pas aux utilisateurs de {% data variables.product.prodname_dotcom_the_website %} d’apporter des modifications à {% data variables.product.product_name %}.

Pour activer {% data variables.product.prodname_github_connect %}, vous devez configurer une connexion entre {% data variables.location.product_location %} et un compte d’organisation ou d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} qui utilise {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %} Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».

Après avoir activé {% data variables.product.prodname_github_connect %}, vous pourrez activer des fonctionnalités telles que {% ifversion ghes %}synchronisation automatique des licences utilisateur et {% endif %}{% data variables.product.prodname_dependabot_alerts %}. Pour plus d’informations sur toutes les fonctionnalités disponibles, consultez « [Fonctionnalités de {% data variables.product.prodname_github_connect %}](#github-connect-features) ».

## Fonctionnalités de {% data variables.product.prodname_github_connect %}

Après avoir configuré la connexion entre {% data variables.location.product_location %} et {% data variables.product.prodname_ghe_cloud %}, vous pouvez activer individuellement des fonctionnalités de {% data variables.product.prodname_github_connect %} pour votre entreprise.

Fonctionnalité | Description | Plus d’informations | ------- | ----------- | ---------------- |{% ifversion ghes %} Synchronisation automatique des licences utilisateur | Gérez l’utilisation des licences dans vos déploiements {% data variables.product.prodname_enterprise %} en synchronisant automatiquement les licences utilisateur de {% data variables.location.product_location %} avec {% data variables.product.prodname_ghe_cloud %}. | « [Activation de la synchronisation automatique des licences utilisateur pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise) »{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | Permet aux utilisateurs de rechercher et de corriger les vulnérabilités dans les dépendances de code. | « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) » {% endif %} Actions {% data variables.product.prodname_dotcom_the_website %} | Permet aux utilisateurs d’utiliser les actions de {% data variables.product.prodname_dotcom_the_website %} dans les fichiers workflow. | « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) »{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Analysez vos propres données agrégés à partir du serveur GitHub Enterprise et aidez-nous à améliorer les produits GitHub. | « [Activation de {% data variables.product.prodname_server_statistics %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) »{% endif %} Recherche unifiée | Permet aux utilisateurs d’inclure des dépôts de {% data variables.product.prodname_dotcom_the_website %} dans les résultats des recherches qu’ils font depuis {% data variables.location.product_location %}. | « [Activation de la {% data variables.enterprise.prodname_unified_search %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise) » Contributions unifiées | Permet aux utilisateurs d’inclure les nombres de contributions anonymisées pour leur travail de {% data variables.location.product_location %} dans leurs graphes de contributions sur {% data variables.product.prodname_dotcom_the_website %}. | « [Activation des {% data variables.enterprise.prodname_unified_contributions %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise) »

## Transmission de données pour {% data variables.product.prodname_github_connect %} 

Quand {% data variables.product.prodname_github_connect %} est activé, un enregistrement stocke des informations à propos de la connexion dans {% data variables.product.prodname_ghe_cloud %}. Si vous activez des fonctionnalités de {% data variables.product.prodname_github_connect %}, d’autres données seront passées.

{% note %}

**Remarque :** À aucun moment des référentiels, des problèmes ou des demandes de tirage (pull requests) ne sont transmis de {% data variables.product.product_name %} vers {% data variables.product.prodname_dotcom_the_website %} par {% data variables.product.prodname_github_connect %}.

{% endnote %}

### Données passées quand {% data variables.product.prodname_github_connect %} est activé.

Quand vous activez {% data variables.product.prodname_github_connect %} ou des fonctionnalités spécifiques de {% data variables.product.prodname_github_connect %}, un enregistrement sur {% data variables.product.prodname_ghe_cloud %} stocke les informations suivantes à propos de la connexion.
{% ifversion ghes %}
- La partie relative à la clé publique de votre licence {% data variables.product.prodname_ghe_server %}
- Un hachage de votre licence {% data variables.product.prodname_ghe_server %}
- Le nom de client de votre licence {% data variables.product.prodname_ghe_server %}
- La version de {% data variables.location.product_location_enterprise %}{% endif %}
- Le nom d’hôte de {% data variables.location.product_location %}
- Le compte d’organisation ou d’entreprise sur {% data variables.product.prodname_ghe_cloud %} qui est connecté à {% data variables.location.product_location %}
- Le jeton d’authentification qui est utilisé par {% data variables.location.product_location %} pour effectuer des demandes à {% data variables.product.prodname_ghe_cloud %}
- Si le protocole TLS (Transport Layer Security) est activé et configuré pour {% data variables.location.product_location %}{% ifversion ghes %}
- Les fonctionnalités de {% data variables.product.prodname_github_connect %} qui sont activées pour {% data variables.location.product_location %} ainsi que la date et l’heure d’activation{% endif %}
- Seuil de dormance pour votre entreprise
- Nombre d’utilisateurs dormants pour votre entreprise
- Nombre de sièges utilisant une licence, ce qui n’inclut pas les utilisateurs suspendus

{% data variables.product.prodname_github_connect %} synchronise les données de connexion ci-dessus entre {% data variables.location.product_location %} et {% data variables.product.prodname_ghe_cloud %} une fois par semaine, à compter du jour et de l’heure approximative à laquelle {% data variables.product.prodname_github_connect %} a été activé.

### Données passées par des fonctionnalités de {% data variables.product.prodname_github_connect %}.

Des données supplémentaires sont transmises si vous activez des fonctionnalités individuelles de {% data variables.product.prodname_github_connect %}.

Fonctionnalité | Données | Quel est le sens du flux de données ? | Où sont utilisées les données ? | ------- | ---- | --------- | ------ |{% ifversion ghes %} Synchronisation automatique des licences utilisateur | ID utilisateur et adresse e-mail de chaque utilisateur {% data variables.product.product_name %} | De {% data variables.product.product_name %} à {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | Alertes de vulnérabilité | De {% data variables.product.prodname_dotcom_the_website %} à {% data variables.product.product_name %} | {% data variables.product.product_name %} | {% endif %} {% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | Dépendances et métadonnées pour le référentiel de chaque dépendance<br><br>Si une dépendance est stockée dans un dépôt privé sur {% data variables.product.prodname_dotcom_the_website %}, les données ne sont transmises que si {% data variables.product.prodname_dependabot %} est configuré et autorisé à accéder à ce dépôt. | De {% data variables.product.prodname_dotcom_the_website %} vers {% data variables.product.product_name %} | {% data variables.product.product_name %} {% endif %} Actions {% data variables.product.prodname_dotcom_the_website %} | Nom de l’action, action (fichier YAML de {% data variables.product.prodname_marketplace %}) | De {% data variables.product.prodname_dotcom_the_website %} vers {% data variables.product.product_name %}<br><br>De {% data variables.product.product_name %} à {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Agréger des métriques sur l’utilisation de {% data variables.product.prodname_ghe_server %}. Pour obtenir la liste complète des métriques, consultez « [À propos de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected) ». | De {% data variables.product.product_name %} vers {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} Recherche unifiée | Termes de recherche, résultats de recherche | De {% data variables.product.prodname_dotcom_the_website %} vers {% data variables.product.product_name %}<br><br>De {% data variables.product.product_name %} vers {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} Contributions unifiées | Nombres de contributions | De {% data variables.product.product_name %} vers {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Pour aller plus loin

- « [Comptes d’entreprise](/graphql/guides/managing-enterprise-accounts) » dans la documentation d’API GraphQL
