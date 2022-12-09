---
title: Bien démarrer avec GitHub Enterprise Server
intro: 'Commencez à configurer et à gérer {% data variables.location.product_location %}.'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163415'
---
Ce guide vous accompagne tout au long de l’installation, de la configuration et de la gestion de {% data variables.location.product_location %} en tant qu’administrateur d’entreprise.

{% data variables.product.company_short %} offre deux façons de déployer {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} héberge {% data variables.product.prodname_ghe_cloud %}. Vous pouvez déployer et héberger {% data variables.product.prodname_ghe_server %} dans votre propre centre de données ou chez un fournisseur de cloud pris en charge.

Pour plus d’informations sur {% data variables.product.product_name %}, consultez « [À propos de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server). »

## Partie 1 : Installation de {% data variables.product.product_name %}
Pour bien démarrer avec {% data variables.product.product_name %}, vous devez créer votre compte d’entreprise, installer l’instance, utiliser la console de gestion pour la configuration initiale, configurer votre instance et gérer la facturation. 
### 1. Créer votre compte d’entreprise
Avant d’installer {% data variables.product.product_name %}, vous pouvez créer un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} en contactant l’[équipe des ventes de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} est utile pour la facturation et pour les fonctionnalités partagées avec {% data variables.product.prodname_dotcom_the_website %} via {% data variables.product.prodname_github_connect %}.  Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».
### 2. Installer {% data variables.product.product_name %}
Pour bien démarrer avec {% data variables.product.product_name %}, vous devez installer l’appliance sur une plateforme de virtualisation de votre choix. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance) ».

### 3. Utiliser la console de gestion
Vous utilisez la console de gestion pour effectuer le processus de configuration initiale au premier lancement de {% data variables.location.product_location %}. Vous pouvez également utiliser la console de gestion pour gérer les paramètres de l’instance comme la licence, le domaine, l’authentification et TLS. Pour plus d’informations, consultez « [Accès à la console de gestion](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) ».

### 4. Configuration de {% data variables.location.product_location %}
En plus de la console de gestion, vous pouvez utiliser le tableau de bord d’administration du site et le shell d’administration (SSH) pour gérer {% data variables.location.product_location %}. Par exemple, vous pouvez configurer des applications et des limites de débit, afficher des rapports et utiliser des utilitaires en ligne de commande. Pour plus d’informations, consultez « [Configuration de votre entreprise](/admin/configuration/configuring-your-enterprise) ».

Vous pouvez conserver les paramètres réseau par défaut utilisés par {% data variables.product.product_name %} via le protocole DHCP (Dynamic Host Configuration Protocol) ou bien configurer les paramètres réseau dans la console de machine virtuelle. Vous pouvez aussi configurer un serveur proxy ou des règles de pare-feu. Pour plus d’informations, consultez « [Configuration des paramètres réseau](/admin/configuration/configuring-network-settings) ».

### 5. Configurer la haute disponibilité
Vous pouvez configurer la haute disponibilité pour {% data variables.location.product_location %} afin de réduire l’impact des défaillances matérielles et des pannes réseau. Pour plus d’informations, consultez « [Configuration de la haute disponibilité](/admin/enterprise-management/configuring-high-availability) ».

### 6. Configurer une instance de préproduction
Vous pouvez configurer une instance de préproduction pour valider les modifications, planifier la reprise d’activité après sinistre et tester les mises à jour avant de les appliquer à {% data variables.location.product_location %}.  Pour plus d’informations, consultez « [Configuration d’une instance intermédiaire](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance) ».

### 7. Définir les sauvegardes et la reprise d’activité après sinistre
Pour protéger vos données de production, vous pouvez configurer des sauvegardes automatiques de {% data variables.location.product_location %} avec {% data variables.product.prodname_enterprise_backup_utilities %}. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance) ».

### 8. Gérer la facturation pour votre entreprise
La facturation de toutes les organisations et instances de {% data variables.product.product_name %} connectées à votre compte d’entreprise est agrégée en une seule facture pour tous vos services {% data variables.product.prodname_dotcom %}.com payants. Les propriétaires d’entreprise et les gestionnaires de facturation peuvent voir et gérer les paramètres de facturation définis pour les comptes d’entreprise. Pour plus d’informations, consultez « [Gestion de la facturation pour votre entreprise](/admin/overview/managing-billing-for-your-enterprise) ».

## Partie 2 : Organisation et gestion de votre équipe
En tant que propriétaire ou administrateur d’entreprise, vous pouvez gérer les paramètres aux niveaux utilisateur, dépôt, équipe et organisation. Vous pouvez gérer les membres de votre entreprise, créer et gérer des organisations, définir des stratégies pour la gestion des dépôts ainsi que créer et gérer des équipes.

### 1. Gérer les membres de {% data variables.location.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Créer des organisations
{% data reusables.getting-started.creating-organizations %}

### 3. Ajouter des membres à des organisations
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Créer des équipes
{% data reusables.getting-started.creating-teams %}

### 5. Définir des niveaux d’autorisation pour les organisations et les dépôts
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Appliquer des stratégies de gestion des dépôts
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Partie 3 : Génération en toute sécurité
Pour renforcer la sécurité de {% data variables.location.product_location %}, vous pouvez configurer l’authentification des membres de l’entreprise, utiliser des outils et les journaux d’audit pour maintenir la conformité, configurer des fonctionnalités de sécurité et d’analyse pour vos organisations et éventuellement activer {% data variables.product.prodname_GH_advanced_security %}.
### 1. Authentifier les membres de l’entreprise
Vous pouvez utiliser la méthode d’authentification intégrée de {% data variables.product.product_name %}, ou choisir un fournisseur d’authentification externe, par exemple CAS, LDAP ou SAML, pour intégrer vos comptes existants et gérer de manière centralisée les accès utilisateur à {% data variables.location.product_location %}. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».

Vous pouvez également exiger une authentification à 2 facteurs pour chacune de vos organisations. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs pour une organisation](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization) ».

### 2. Maintenir la conformité
Vous pouvez implémenter les vérifications d’état requises et commiter ces vérifications afin de respecter les normes de conformité de votre organisation et d’automatiser les workflows de conformité. Vous pouvez également utiliser le journal d’audit de votre organisation pour examiner les actions effectuées par votre équipe. Pour plus d’informations, consultez « [Application d’une stratégie avec des hooks de préréception](/admin/policies/enforcing-policy-with-pre-receive-hooks) » et « [À propos du journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) ».

{% ifversion ghes %}
### 3. Configurer les fonctionnalités de sécurité pour vos organisations
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. Activer les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %}
Vous pouvez mettre à niveau votre licence {% data variables.product.product_name %} pour inclure {% data variables.product.prodname_GH_advanced_security %}. Cette licence donne accès à des fonctionnalités supplémentaires qui aident les utilisateurs à détecter et résoudre les problèmes de sécurité dans leur code, tels que l’analyse du code et des secrets. Pour plus d’informations, consultez « [{% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) ».
{% endif %}

## Partie 4 : Personnalisation et automatisation du travail dans votre entreprise dans {% data variables.product.prodname_dotcom %}
Vous pouvez personnaliser et automatiser le travail dans les organisations de votre entreprise avec {% data variables.product.prodname_dotcom %} et {% data variables.product.prodname_oauth_apps %}, l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} et {% data variables.product.prodname_pages %}.

### 1. Créer avec {% data variables.product.prodname_github_apps %} et {% data variables.product.prodname_oauth_apps %}
Vous pouvez créer des intégrations avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, comme {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_apps %}, en vue de les utiliser ensuite dans les organisations pour compléter et étendre vos workflows. Pour plus d’informations, consultez « [À propos des applications](/developers/apps/getting-started-with-apps/about-apps) ».
### 2. Utiliser l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Créer avec {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Pour plus d’informations sur l’activation et la configuration de {% data variables.product.prodname_actions %} sur {% data variables.product.product_name %}, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».

### 4. Publier et gérer des packages avec {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

Pour plus d’informations sur l’activation et la configuration de {% data variables.product.prodname_registry %} pour {% data variables.location.product_location %}, consultez « [Bien démarrer avec {% data variables.product.prodname_registry %} pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) ».
{% endif %}

### 5. Utiliser {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Partie 5 : Connexion à d’autres ressources {% data variables.product.prodname_dotcom %}
Vous pouvez utiliser {% data variables.product.prodname_github_connect %} pour partager des ressources.

Si vous êtes propriétaire d’une instance de {% data variables.product.product_name %} et d’un compte d’entreprise ou d’organisation {% data variables.product.prodname_ghe_cloud %}, vous pouvez activer {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} vous permet de partager des workflows et fonctionnalités spécifiques entre {% data variables.location.product_location %} et {% data variables.product.prodname_ghe_cloud %}, par exemple une recherche unifiée et des contributions. Pour plus d’informations, consultez « [Connexion de {% data variables.product.prodname_ghe_server %} à {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud) ».

## Partie 6 : Utilisation des ressources d’apprentissage et de support de {% data variables.product.prodname_dotcom %}
Les membres de votre entreprise peuvent utiliser nos ressources d’apprentissage pour en apprendre davantage sur Git et {% data variables.product.prodname_dotcom %}. Vous pouvez aussi contacter le Support {% data variables.product.prodname_dotcom %} Enterprise si vous avez besoin d’aide pour configurer et gérer {% data variables.location.product_location %}.

### 1. Consulter la documentation relative à {% data variables.product.product_name %} sur {% data variables.product.prodname_docs %}

Vous pouvez consulter la documentation qui décrit les fonctionnalités disponibles avec {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

{% data reusables.enterprise.best-practices %}

### 2. Apprendre avec {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Faire appel au Support {% data variables.product.prodname_dotcom %} Enterprise
{% data reusables.getting-started.contact-support-enterprise %}
