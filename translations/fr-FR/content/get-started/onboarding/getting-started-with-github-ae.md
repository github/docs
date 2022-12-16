---
title: Bien démarrer avec GitHub AE
intro: 'Démarrage de la définition et de la configuration de {% data variables.product.product_name %} pour {% data variables.location.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180060'
---
Ce guide vous accompagne tout au long de l’installation, de la configuration et de la gestion des paramètres pour {% data variables.location.product_location %} sur {% data variables.product.product_name %} en tant que propriétaire d’entreprise. Pour plus d’informations sur {% data variables.product.product_name %}, consultez « [À propos de {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae) ».

## Partie 1 : Configuration de {% data variables.product.product_name %}
Pour commencer à utiliser {% data variables.product.product_name %}, vous pouvez créer votre compte d’entreprise, initialiser {% data variables.product.product_name %}, configurer une liste d’adresses IP autorisées, configurer l’authentification et le provisionnement des utilisateurs, et gérer la facturation pour {% data variables.location.product_location %}.

### 1. Création de votre compte d’entreprise {% data variables.product.product_name %}
Vous devez commencer par acheter {% data variables.product.product_name %}. Pour plus [d’informations, contactez l’équipe de vente de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Initialisation de {% data variables.product.product_name %}
Une fois que {% data variables.product.company_short %} a créé le compte de propriétaire pour {% data variables.location.product_location %} sur {% data variables.product.product_name %}, vous recevez un e-mail pour vous connecter et effectuer l’initialisation. Lors de l’initialisation, en tant que propriétaire de l’entreprise, vous nommez {% data variables.location.product_location %}, configurez une authentification unique (SSO) SAML, créez des stratégies pour toutes les organisations dans {% data variables.location.product_location %}, puis configurez un contact de support pour les membres de votre entreprise. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae) ».

### 3. Restriction du trafic réseau
Vous pouvez configurer une liste verte d’adresses IP spécifiques afin de restreindre l’accès aux ressources détenues par des organisations au sein de votre compte d’entreprise. Pour plus d’informations, consultez « [Restriction du trafic réseau vers votre entreprise avec une liste d’adresses IP autorisées](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) ».

### 4. Gestion des identités et des accès pour {% data variables.location.product_location %}
Vous pouvez gérer de manière centralisée l’accès à {% data variables.location.product_location %} sur {% data variables.product.product_name %} à partir d’un fournisseur d’identité en utilisant une authentification unique (SSO) SAML pour l’authentification utilisateur et SCIM pour le provisionnement d’utilisateurs. Une fois que vous avez configuré l’approvisionnement, vous pouvez affecter des utilisateurs à l’application, ou les désaffecter, à partir du fournisseur d’identité, en créant ou désactivant des comptes d’utilisateur dans l’entreprise. Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) ».

### 5. Gestion de la facturation pour {% data variables.location.product_location %}
Les propriétaires de l’abonnement pour {% data variables.location.product_location %} sur {% data variables.product.product_name %} peuvent voir les détails de facturation pour {% data variables.product.product_name %} dans le portail Azure. Pour plus d’informations, consultez « [Gestion de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».

## Partie 2 : Organisation et gestion des membres de l’entreprise
En tant que propriétaire de l’entreprise, pour {% data variables.product.product_name %}, vous pouvez gérer des paramètres aux niveaux utilisateur, dépôt, équipe et organisation. Vous pouvez gérer les membres de {% data variables.location.product_location %}, créer et gérer des organisations, définir des stratégies pour la gestion du dépôt, ainsi que créer et gérer des équipes.

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
Pour augmenter la sécurité de {% data variables.location.product_location %}, vous pouvez surveiller {% data variables.location.product_location %} et configurer des fonctionnalités de sécurité et d’analyse pour vos organisations.

### 1. Surveillance de {% data variables.location.product_location %}
Vous pouvez surveiller {% data variables.location.product_location %} avec votre tableau de bord d’activité et une journalisation d’audit. Pour plus d’informations, consultez « [Supervision de l’activité dans votre entreprise](/admin/monitoring-activity-in-your-enterprise) ».

### 2. Configuration de fonctionnalités de sécurité pour vos organisations
{% data reusables.getting-started.configuring-security-features %}

## Partie 4 : Personnalisation et automatisation du travail sur {% data variables.location.product_location %}
Vous pouvez personnaliser et automatiser le travail au sein d’organisations dans {% data variables.location.product_location %} avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} et {% data variables.product.prodname_pages %}.

### 1. Utilisation de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 2. Génération de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Pour plus d’informations sur l’activation et la configuration de {% data variables.product.prodname_actions %} pour {% data variables.product.product_name %}, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae) ».

### 3. Utilisation de {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Partie 5 : Utilisation des ressources d’apprentissage et de support de {% data variables.product.prodname_dotcom %}
Les membres de votre entreprise peuvent en apprendre davantage sur Git et {% data variables.product.prodname_dotcom %} avec nos ressources d’apprentissage, et vous pouvez obtenir l’aide dont vous avez besoin auprès du Support entreprise {% data variables.product.prodname_dotcom %}.

### 1. Lecture à propose de {% data variables.product.product_name %} sur {% data variables.product.prodname_docs %}
Vous pouvez lire une documentation qui reflète les fonctionnalités disponibles avec {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

### 2. Apprendre avec {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Faire appel au Support {% data variables.product.prodname_dotcom %} Enterprise
{% data reusables.getting-started.contact-support-enterprise %}
