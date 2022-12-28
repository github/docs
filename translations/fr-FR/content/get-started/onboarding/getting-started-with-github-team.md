---
title: Bien démarrer avec GitHub Team
intro: 'Avec les groupes {% data variables.product.prodname_team %}, les personnes peuvent collaborer sur de nombreux projets en même temps dans un compte d’organisation.'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139159'
---
Ce guide vous accompagne tout au long de l’installation, de la configuration et de la gestion de votre compte {% data variables.product.prodname_team %} en tant que propriétaire d’organisation.

## Partie 1 : Configuration de votre compte sur {% data variables.product.product_location %}
Pour commencer à utiliser {% data variables.product.prodname_team %}, vous devez créer un compte personnel ou vous connecter à votre compte existant sur {% data variables.product.prodname_dotcom %}, créer une organisation et configurer la facturation.

### 1. À propos des organisations
Les organisations sont des comptes partagés dans lesquels des entreprises et des projets open source peuvent collaborer sur de nombreux projets à la fois. Les propriétaires et les administrateurs peuvent gérer l’accès des membres aux données et aux projets de l’organisation avec des fonctionnalités d’administration et de sécurité sophistiquées. Pour plus d’informations sur les fonctionnalités des organisations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations) ».

### 2. Création d’une organisation et inscription à {% data variables.product.prodname_team %}
Avant de créer une organisation, vous devez créer un compte personnel ou vous connecter à votre compte existant sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Inscription à un nouveau compte {% data variables.product.prodname_dotcom %}](/get-started/signing-up-for-github/signing-up-for-a-new-github-account) ».

Une fois votre compte personnel configuré, vous pouvez créer une organisation et choisir un plan. C’est là que vous pouvez choisir un abonnement {% data variables.product.prodname_team %} pour votre organisation. Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

### 3. Gestion de la facturation pour une organisation
Vous devez gérer les paramètres de facturation, le mode de paiement, ainsi que les fonctionnalités et produits payants pour chacun de vos comptes personnels et chacune de vos organisations séparément. Vous pouvez basculer entre les paramètres de vos différents comptes à l’aide du sélecteur de contexte dans vos paramètres. Pour plus d’informations, consultez « [Basculement entre les paramètres de vos différents comptes](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts) ».

La page des paramètres de facturation de votre organisation vous permet de gérer des paramètres tels que le mode de paiement, le cycle de facturation et l’e-mail de facturation, ou afficher des informations telles que l’abonnement, la date de facturation et l’historique des paiements. Vous pouvez également afficher et mettre à niveau votre stockage et vos minutes GitHub Actions. Pour plus d’informations sur la gestion de vos paramètres de facturation, consultez « [Gestion de vos paramètres de facturation {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings) ».

Seuls les membres de l’organisation titulaires du rôle *propriétaire* ou *gestionnaire de facturation* peuvent accéder aux paramètres de facturation de votre organisation, ou les modifier. Un gestionnaire de facturation est une personne qui gère les paramètres de facturation pour votre organisation, et n’utilise pas de licence payante dans l’abonnement de votre organisation. Pour plus d’informations sur l’ajout d’un gestionnaire de facturation à votre organisation, consultez « [Ajout d’un gestionnaire de facturation à votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization) ».


## Partie 2 : Ajout de membres et configuration d’équipes
Après avoir créé votre organisation, vous pouvez inviter des membres et définir des autorisations et des rôles. Vous pouvez également créer différents niveaux d’équipes, et définir des niveaux d’autorisations personnalisés pour les dépôts, tableaux de projet et applications de votre organisation.

### 1. Gestion des membres de votre organisation
{% data reusables.getting-started.managing-org-members %}

### 2. Autorisations et rôles d’organisation
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. À propos des équipes et de leur création
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Gestion des paramètres d’une équipe
{% data reusables.getting-started.managing-team-settings %}

### 5. Octroi à des personnes et équipes de l’accès à des dépôts, tableaux de projet et applications
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Partie 3 : Gestion de la sécurité pour votre organisation
Vous pouvez contribuer à la sécurisation de votre organisation en recommandant ou en exigeant une authentification à 2 facteurs pour les membres de votre organisation, en configurant des fonctionnalités de sécurité, et en examinant le journal d’audit et les intégrations de votre organisation.

### 1. Exigence d’une authentification à 2 facteurs
{% data reusables.getting-started.requiring-2fa %}

### 2. Configuration de fonctionnalités de sécurité pour votre organisation
{% data reusables.getting-started.configuring-security-features %}

### 3. Examen du journal d’audit et des intégrations de votre organisation
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Partie 4 : Définition de stratégies au niveau de l’organisation
### 1. Gestion de stratégies d’organisation
{% data reusables.getting-started.managing-org-policies %}
### 2. Gestion des modifications du dépôt
{% data reusables.getting-started.managing-repo-changes %}
### 3. Utilisation de fichiers d’intégrité de la communauté et des outils de modération au niveau de l’organisation
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Partie 5 : Personnalisation et automatisation de votre travail sur {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Utilisation de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Utilisation de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 3. Génération de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. Publication et gestion de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Partie 6 : Participation à la communauté de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.participating-in-community %}
### 1. Contribution à des projets open source
{% data reusables.getting-started.open-source-projects %}

### 2. Interaction avec {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Lecture à propos de {% data variables.product.prodname_team %} sur {% data variables.product.prodname_docs %}
Vous pouvez lire une documentation qui reflète les fonctionnalités disponibles avec {% data variables.product.prodname_team %}. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

### 4. Apprentissage avec {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Soutien de la communauté open source
{% data reusables.getting-started.sponsors %}

### 6. Contact de {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Pour aller plus loin

- « [Bien démarrer avec votre compte GitHub](/get-started/onboarding/getting-started-with-your-github-account) »
