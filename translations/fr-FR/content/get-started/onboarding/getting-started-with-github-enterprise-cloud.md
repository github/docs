---
title: Bien démarrer avec GitHub Enterprise Cloud
intro: 'Commencez à configurer et à gérer votre organisation {% data variables.product.prodname_ghe_cloud %} ou votre compte d’entreprise.'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163799'
---
Ce guide vous accompagne tout au long de la mise en place, de la configuration et de la gestion de votre compte {% data variables.product.prodname_ghe_cloud %} en tant que propriétaire d’organisation ou d’entreprise.

{% data reusables.enterprise.ghec-cta-button %}

## Partie 1 : Choix du type de compte

{% data variables.product.prodname_dotcom %} fournit deux types de produits Enterprise :

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

La principale différence entre les produits est que {% data variables.product.prodname_ghe_cloud %} est hébergé par {% data variables.product.prodname_dotcom %}, tandis que {% data variables.product.prodname_ghe_server %} est auto-hébergé.

{% data reusables.enterprise.about-github-for-enterprises %}

Avec {% data variables.product.prodname_ghe_cloud %}, vous avez la possibilité d’utiliser {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

Si vous choisissez plutôt de laisser vos membres créer et gérer leurs propres comptes personnels, vous pouvez utiliser deux types de comptes avec {% data variables.product.prodname_ghe_cloud %} :

- Un compte d’organisation unique
- Un compte d’entreprise contenant plusieurs organisations

### Compréhension des différences entre un compte d’organisation et un compte d’entreprise

Sont disponibles avec {% data variables.product.prodname_ghe_cloud %} des comptes d’organisation et des comptes d’entreprise. Une organisation est un compte partagé dans lequel des groupes de personnes peuvent collaborer sur plusieurs projets à la fois, et les propriétaires et les administrateurs peuvent gérer l’accès aux données et aux projets. Un compte d’entreprise permet la collaboration entre plusieurs organisations, tandis que les propriétaires peuvent gérer de manière centralisée la stratégie, la facturation et la sécurité de ces organisations. Pour plus d’informations sur les différences, consultez « [Organisations et comptes d’entreprise](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts) ».

Si vous choisissez un compte d’entreprise, gardez à l’esprit que certaines stratégies peuvent être définies uniquement au niveau d’une organisation, tandis que d’autres sont applicables à toutes les organisations d’une entreprise.

Une fois que vous avez choisi le type de compte souhaité, vous pouvez passer à la configuration de votre compte. Dans chacune des sections de ce guide, accédez à la section du compte d’organisation unique ou à la section du compte d’entreprise en fonction de votre type de compte.

## Partie 2 : Configuration du compte
Pour commencer à utiliser {% data variables.product.prodname_ghe_cloud %}, vous devez créer votre compte d’organisation ou d’entreprise, puis configurer et afficher les paramètres de facturation, les abonnements et l’utilisation.
### Configuration d’un compte d’organisation unique avec {% data variables.product.prodname_ghe_cloud %}

#### 1. À propos des organisations
Les organisations sont des comptes partagés dans lesquels des groupes de personnes peuvent collaborer simultanément sur de nombreux projets. Avec {% data variables.product.prodname_ghe_cloud %}, les propriétaires et les administrateurs ont la possibilité de gérer leur organisation avec une authentification et une gestion avancées des utilisateurs, ainsi que des options de support et de sécurité accrues. Pour plus d’informations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».
#### 2. Création ou mise à niveau d’un compte d’organisation

Pour utiliser un compte d’organisation avec {% data variables.product.prodname_ghe_cloud %}, vous devez d’abord créer une organisation. Lorsqu’il vous est demandé de choisir un plan, sélectionnez « Entreprise ». Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

Si vous disposez déjà d’un compte d’organisation que vous souhaitez mettre à niveau, suivez la procédure décrite dans « [Mise à niveau de votre abonnement {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription) ».
#### 3. Configuration et gestion de la facturation

Lorsque vous choisissez d’utiliser un compte d’organisation avec {% data variables.product.prodname_ghe_cloud %}, vous avez d’abord accès à un [essai de 30 jours](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Si vous n’achetez pas {% data variables.product.prodname_enterprise %} ni {% data variables.product.prodname_team %} avant la fin de votre essai, votre organisation est rétrogradée vers {% data variables.product.prodname_free_user %} et perd l’accès à tous les outils et fonctionnalités avancés inclus uniquement dans les produits payants. Pour plus d’informations, consultez « [Fin de l’essai](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial) ».

La page des paramètres de facturation de votre organisation vous permet de gérer différents paramètres (mode de paiement, cycle de facturation, etc.), d’afficher des informations sur votre abonnement, et de mettre à niveau votre stockage et les minutes {% data variables.product.prodname_actions %}. Pour plus d’informations sur la gestion de vos paramètres de facturation, consultez « [Gestion des paramètres de facturation de {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings) ».

Seuls les membres de l’organisation disposant du rôle *propriétaire* ou *gestionnaire de facturation* peuvent accéder aux paramètres de facturation de l’organisation et les modifier. Un gestionnaire de facturation est un utilisateur qui gère les paramètres de facturation de l’organisation et n’utilise pas de licence payante dans l’abonnement de l’organisation. Pour plus d’informations sur l’ajout d’un gestionnaire de facturation à l’organisation, consultez « [Ajout d’un gestionnaire de facturation à l’organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization) ».

### Configuration d’un compte d’entreprise avec {% data variables.product.prodname_ghe_cloud %}

#### 1. À propos des comptes d’entreprise

Un compte d’entreprise vous permet de gérer de manière centralisée les stratégies et les paramètres de plusieurs organisations {% data variables.product.prodname_dotcom %}, notamment l’accès des membres, la facturation et l’utilisation, et la sécurité. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts) ».

#### 2. Création d’un compte d’entreprise

 Les clients {% data variables.product.prodname_ghe_cloud %} payant par facture peuvent créer un compte d’entreprise directement via {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account). » 
 
 Les clients {% data variables.product.prodname_ghe_cloud %} qui ne payent pas actuellement par facture peuvent contacter [l’équipe des ventes de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact) pour créer un compte d’entreprise pour vous.

#### 3. Ajout d’organisations à votre compte d’entreprise

Vous pouvez créer des organisations à gérer dans votre compte d’entreprise. Pour plus d’informations, consultez « [Ajout d’organisations à votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise) ».

Contactez votre représentant de compte de vente {% data variables.product.prodname_dotcom %} si vous souhaitez transférer une organisation existante dans votre compte d’entreprise.
#### 4. Affichage de l’abonnement et de l’utilisation du compte d’entreprise
Vous pouvez à tout moment afficher l’abonnement actuel, l’utilisation des licences, les factures, l’historique des paiements et d’autres informations de facturation de votre compte d’entreprise. Les propriétaires d’entreprise et les gestionnaires de facturation peuvent accéder aux paramètres de facturation des comptes d’entreprise et les gérer. Pour plus d’informations, consultez « [Affichage de l’abonnement et de l’utilisation d’un compte d’entreprise](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) ».

## Partie 3 : Gestion des membres et des équipes de l’organisation ou de l’entreprise avec {% data variables.product.prodname_ghe_cloud %}

### Gestion des membres et des équipes de l’organisation
Vous pouvez définir des autorisations et des rôles membres, créer et gérer des équipes et accorder l’accès aux référentiels dans votre organisation. 
#### 1. Gestion des membres de l’organisation
{% data reusables.getting-started.managing-org-members %}
#### 2. Autorisations et rôles d’organisation
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. À propos des équipes et de leur création
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Gestion des paramètres d’une équipe
{% data reusables.getting-started.managing-team-settings %}
#### 5. Octroi à des personnes et équipes de l’accès à des dépôts, tableaux de projet et applications
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Gestion des membres d’un compte d’entreprise
La gestion des membres d’une entreprise est distincte de la gestion des membres et des équipes d’une organisation. Il est important de noter que les propriétaires d’entreprise et les administrateurs ne peuvent pas accéder aux paramètres au niveau de l’organisation ni gérer les membres des organisations de leur entreprise, à moins de devenir propriétaires d’une organisation. Pour plus d’informations, consultez la section ci-dessus, « [Gestion des membres et des équipes de l’organisation](#managing-members-and-teams-in-your-organization) ».

Si votre entreprise utilise {% data variables.product.prodname_emus %}, vos membres sont complètement managés par le biais de votre fournisseur d’identité. L’ajout de membres, la modification de leur appartenance et l’attribution de rôles sont tous gérés à l’aide du fournisseur d’identité. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».

Si votre entreprise n’utilise pas {% data variables.product.prodname_emus %}, procédez comme suit.

#### 1. Attribution de rôles dans une entreprise
Par défaut, tous les utilisateurs d’une entreprise sont membres de l’entreprise. Il existe également des rôles d’administration, notamment le propriétaire d’entreprise et le gestionnaire de facturation, qui possèdent des niveaux d’accès différents aux paramètres et aux données d’entreprise. Pour plus d’informations, consultez « [Rôles dans une entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».
#### 2. Invitations à gérer votre entreprise
Vous pouvez inviter des personnes à gérer votre entreprise en tant que propriétaires d’entreprise ou gestionnaires de facturation, et supprimer ceux qui n’ont plus besoin d’accès. Pour plus d’informations, consultez « [Inviter des personnes à gérer votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) ».

Vous pouvez également accorder aux membres de l’entreprise la possibilité de gérer les tickets de support sur le portail de support. Pour plus d’informations, consultez « [Gestion des droits au support pour votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise) ».
#### 3. Visualisation des personnes présentes dans l’entreprise
Pour auditer l’accès aux ressources de l’entreprise ou l’utilisation des licences utilisateur, vous pouvez afficher chaque administrateur d’entreprise, membre de l’entreprise et collaborateur externe de votre entreprise. Vous avez la possibilité de voir les organisations auxquelles appartient un membre et les référentiels spécifiques auxquels un collaborateur extérieur a accès. Pour plus d’informations, consultez « [Visualisation des personnes dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise) ».

## Partie 4 : Gestion de la sécurité avec {% data variables.product.prodname_ghe_cloud %}

* [Gestion de la sécurité d’une seule organisation](#managing-security-for-a-single-organization)
* [Gestion de la sécurité d’une {% data variables.enterprise.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Gestion de la sécurité d’un compte d’entreprise sans {% data variables.enterprise.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Gestion de la sécurité d’une seule organisation
Vous pouvez contribuer à sécuriser votre organisation en exigeant l’authentification à deux facteurs, en configurant des fonctionnalités de sécurité, en examinant le journal d’audit et les intégrations de votre organisation, et en activant l’authentification unique SAML et la synchronisation d’équipe.
#### 1. Activation de l’authentification à deux facteurs
{% data reusables.getting-started.requiring-2fa %}
#### 2. Configuration de fonctionnalités de sécurité pour votre organisation
{% data reusables.getting-started.configuring-security-features %}

#### 3. Examen du journal d’audit et des intégrations de votre organisation
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Activation et application de l’authentification unique SAML dans l’organisation
Si vous gérez vos applications et les identités des membres de votre organisation avec un fournisseur d’identité (IdP, Identity Provider), vous pouvez configurer l’authentification unique (SSO, Single-Sign-On) SAML pour contrôler et sécuriser l’accès aux ressources de l’organisation (référentiels, problèmes, demandes de tirage, etc.). Lorsque les membres de l’organisation accèdent aux ressources de l’organisation qui utilisent l’authentification unique SAML, {% data variables.product.prodname_dotcom %} les redirige vers votre fournisseur d’identité pour s’authentifier. Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) ».

Les propriétaires d’organisation peuvent choisir de désactiver, d’activer sans appliquer ou d’activer et d’appliquer l’authentification unique SAML. Pour plus d’informations, consultez « [Activation et test de l’authentification unique SAML dans l’organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) » et « [Application de l’authentification unique SAML dans l’organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization) ».
#### 5. Gestion de la synchronisation d’équipe dans l’organisation
Activez la synchronisation d’équipe entre votre fournisseur d’identité et {% data variables.product.prodname_dotcom %} pour permettre aux propriétaires d’organisation et aux gestionnaires d’équipe de lier les équipes de votre organisation aux groupes du fournisseurs d’identité. Pour plus d’informations, consultez « [Gestion de la synchronisation d’équipe dans l’organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ».

### Gestion de la sécurité d’une {% data variables.enterprise.prodname_emu_enterprise %}

Avec {% data variables.product.prodname_emus %}, l’accès et l’identité sont gérés de manière centralisée par le biais de votre fournisseur d’identité. L’authentification à deux facteurs et les autres exigences de connexion doivent être activées et appliquées sur votre fournisseur d’identité. 

#### 1. Activation de l’authentification unique SAML et approvisionnement dans une {% data variables.enterprise.prodname_emu_enterprise %}

Dans une {% data variables.enterprise.prodname_emu_enterprise %}, tous les membres sont approvisionnés et gérés par le fournisseur d’identité. Vous devez activer l’authentification unique SAML et l’approvisionnement SCIM pour pouvoir commencer à utiliser votre entreprise. Pour plus d’informations sur la configuration de l’authentification unique SAML et l’approvisionnement d’une {% data variables.enterprise.prodname_emu_enterprise %}, consultez « [Configuration de l’authentification unique SAML pour une entreprise avec utilisateurs gérés](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

#### 2. Gestion des équipes dans une {% data variables.enterprise.prodname_emu_enterprise %} avec le fournisseur d’identité

Vous pouvez relier les équipes de vos organisations aux groupes de sécurité de votre fournisseur d’identité, et gérer l’appartenance de vos équipes et l’accès aux référentiels par le biais de votre fournisseur d’identité. Pour plus d’informations, consultez « [Gestion des appartenances aux équipes avec les groupes d’un fournisseur d’identité](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups) ».

#### 3. Gestion des adresses IP autorisées pour les organisations d’une {% data variables.enterprise.prodname_emu_enterprise %}

Vous pouvez configurer une liste verte pour des adresses IP spécifiques afin de restreindre l’accès aux ressources appartenant aux organisations de votre {% data variables.enterprise.prodname_emu_enterprise %}. Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) ».

#### 4. Application de stratégies de fonctionnalités de sécurité avancée dans une {% data variables.enterprise.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Gestion de la sécurité d’un compte d’entreprise sans {% data variables.enterprise.prodname_managed_users %}
Pour gérer la sécurité de votre entreprise, vous pouvez exiger l’authentification à deux facteurs, gérer les adresses IP autorisées, activer l’authentification unique SAML et la synchronisation d’équipe au niveau de l’entreprise, et vous inscrire aux fonctionnalités avancées de sécurité de GitHub pour les appliquer. 

#### 1. Exigence de l’authentification à deux facteurs et gestion des adresses IP autorisées pour les organisations d’un compte d’entreprise
Les propriétaires d’entreprise peuvent exiger que les membres, gestionnaires de facturation et collaborateurs externes de toutes les organisations appartenant à un compte d’entreprise utilisent l’authentification à deux facteurs pour sécuriser leurs comptes personnels. Nous vous recommandons d’informer au préalable tous ceux qui ont accès aux organisations de votre entreprise. Vous pouvez également configurer une liste verte pour des adresses IP spécifiques afin de restreindre l’accès aux ressources appartenant aux organisations de votre compte d’entreprise. 

Pour plus d’informations sur l’application de l’authentification à deux facteurs et les listes d’adresses IP autorisées, consultez « [Application de stratégies de paramètres de sécurité dans une entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise) ».
#### 2. Activation et application de l’authentification unique SAML dans les organisations d’un compte d’entreprise
Vous pouvez gérer de manière centralisée l’accès aux ressources de votre entreprise, l’appartenance à l’organisation et l’appartenance à l’équipe à l’aide de votre fournisseur d’identité et de l’authentification unique SAML. Les propriétaires d’entreprise ont la possibilité d’activer l’authentification unique SAML dans toutes les organisations détenues par un compte d’entreprise. Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès pour votre entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) ».

#### 3. Gestion de la synchronisation d’équipe
Vous pouvez activer et gérer la synchronisation d’équipe entre un fournisseur d’identité et {% data variables.product.prodname_dotcom %} pour permettre aux organisations appartenant à votre compte d’entreprise de gérer l’appartenance à l’équipe avec des groupes du fournisseur d’identité. Pour plus d’informations, consultez « [Gestion de la synchronisation d’équipe dans les organisations d’un compte d’entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise) ».

#### 4. Application de stratégies de fonctionnalités de sécurité avancée dans un compte d’entreprise
{% data reusables.getting-started.enterprise-advanced-security %}

## Partie 5 : Gestion des stratégies et des paramètres au niveau de l’organisation et de l’entreprise

### Gestion des paramètres d’une seule organisation
Pour gérer et modérer votre organisation, vous pouvez définir des stratégies d’organisation, gérer les autorisations de modification du référentiel et utiliser des fichiers d’intégrité communautaire au niveau de l’organisation.
#### 1. Gestion des stratégies d’organisation
{% data reusables.getting-started.managing-org-policies %}
#### 2. Gestion des modifications du dépôt
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Utilisation de fichiers d’intégrité de la communauté et des outils de modération au niveau de l’organisation
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Gestion des paramètres d’un compte d’entreprise
Pour gérer et modérer votre entreprise, vous pouvez définir les stratégies des organisations de l’entreprise, afficher les journaux d’audit, configurer des webhooks et restreindre les notifications par e-mail.
#### 1. Gestion des stratégies des organisations d’un compte d’entreprise

Vous pouvez choisir d’appliquer un certain nombre de stratégies pour toutes les organisations appartenant à votre entreprise ou d’autoriser la définition de ces stratégies dans chaque organisation. Parmi les types de stratégies applicables figurent la gestion des référentiels, le panneau de projet et les stratégies d’équipe. Pour plus d’informations, consultez « [Définition de stratégies pour votre entreprise](/enterprise-cloud@latest/admin/policies) ».
#### 2. Affichage des journaux d’audit, configuration des webhooks et restriction des notifications par e-mail de l’entreprise
Vous pouvez afficher les actions de toutes les organisations appartenant à votre compte d’entreprise dans le journal d’audit de l’entreprise. Vous avez également la possibilité de configurer des webhooks pour recevoir des événements provenant des organisations appartenant à votre compte d’entreprise. Pour plus d’informations, consultez « [Examen des journaux d’audit de l’entreprise](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) » et « [Monitoring de l’entreprise](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise) ».

Vous pouvez également restreindre les notifications par e-mail de votre compte d’entreprise afin que les membres de l’entreprise ne puissent utiliser qu’une adresse e-mail d’un domaine vérifié ou approuvé pour recevoir des notifications. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise) ».

## Partie 6 : Personnalisation et automatisation du travail de l’organisation ou de l’entreprise sur {% data variables.product.prodname_dotcom %}
Les membres de votre organisation ou de votre entreprise peuvent utiliser les outils de {% data variables.product.prodname_marketplace %}, l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} et les fonctionnalités {% data variables.product.product_name %} existantes pour personnaliser et automatiser leur travail.

### 1. Utilisation de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Utilisation de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}
### 3. Génération de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. Publication et gestion de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. Utilisation de {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} est un service d’hébergement de site statique qui prend directement des fichiers HTML, CSS et JavaScript dans un référentiel et publie un site web. Vous pouvez gérer la publication des sites {% data variables.product.prodname_pages %} au niveau de l’organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} dans l’organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) » et « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages) ».
## Partie 7 : Participation à la communauté {% data variables.product.prodname_dotcom %}

Les membres de votre organisation ou de votre entreprise peuvent utiliser les ressources de formation et de support de GitHub pour obtenir l’aide dont ils ont besoin. Vous avez également la possibilité de soutenir la communauté open source. 

### 1. Lecture de documents relatifs à {% data variables.product.prodname_ghe_cloud %} sur {% data variables.product.prodname_docs %}
Vous pouvez lire la documentation qui reflète les fonctionnalités disponibles avec {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

{% data reusables.enterprise.best-practices %}

### 2. Formation avec {% data variables.product.prodname_learning %}
Les membres de votre organisation ou de votre entreprise peuvent acquérir de nouvelles compétences en menant à bien des projets amusants et réalistes dans votre propre référentiel GitHub avec [{% data variables.product.prodname_learning %}](https://skills.github.com/). Chaque cours consiste en une leçon pratique créée par la communauté GitHub et enseignée par un bot convivial.

Pour plus d’informations, consultez « [Ressources de formation Git et {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/quickstart/git-and-github-learning-resources) ».
### 3. Soutien à la communauté open source
{% data reusables.getting-started.sponsors %}

### 4. Contact de {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} vous permet d’envoyer des demandes de support prioritaires avec un temps de réponse cible de huit heures. Pour plus d’informations, consultez « [Support {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/github-enterprise-cloud-support) ».
