---
title: Rôles dans une organisation
intro: Les propriétaires d’organisation peuvent attribuer des rôles à des individus et des équipes afin de leur donner différents ensembles d’autorisations dans l’organisation.
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: 960f6f701ad524220e9e79ada04fa9e4d30b8e9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108285'
---
## À propos des rôles
{% data reusables.organizations.about-roles %}

Les rôles de niveau dépôt donnent aux membres de l’organisation, aux collaborateurs externes et aux équipes de personnes différents niveaux d’accès aux dépôts. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Les rôles de niveau équipe sont des rôles qui donnent des autorisations pour gérer une équipe. Vous pouvez donner à n’importe quel membre individuel d’une équipe le rôle de gestionnaire de l’équipe, ce qui donne au membre un certain nombre d’autorisations d’administration sur une équipe. Pour plus d’informations, consultez « [Attribution du rôle de gestionnaire d’équipe à un membre de l’équipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member) ».

Les rôles de niveau organisation sont des ensembles d’autorisations qui peuvent être affectées à des personnes ou des équipes pour gérer une organisation, et les dépôt, les équipes et les paramètres de l’organisation. Pour plus d’informations sur tous les rôles disponibles au niveau de l’organisation, consultez « [À propos des rôles d’organisation](#about-organization-roles) ».

## À propos des rôles d’organisation

Vous pouvez affecter des personnes ou des équipes à une variété de rôles de niveau organisation pour contrôler l’accès de vos membres à votre organisation et à ses ressources. Pour plus d’informations sur les autorisations individuelles incluses dans chaque rôle, consultez « [Autorisations pour les rôles d’organisation](#permissions-for-organization-roles) ».

{% ifversion enterprise-owner-join-org %} Si votre organisation appartient à un compte d’entreprise, les propriétaires d’entreprise peuvent choisir de rejoindre votre organisation avec n’importe quel rôle. Pour plus d’informations, consultez « [Gestion de votre rôle dans une organisation appartenant à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise) ».
{% endif %}

### Propriétaires de l’organisation
Les propriétaires d’organisation ont un accès d’administration complet à votre organisation. Ce rôle doit être limité, mais ne pas être attribué à moins de deux personnes au sein de votre organisation. Pour plus d’informations, consultez « [Maintien de la continuité de la propriété pour votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization) ».

### Membres d’organisation
Le rôle sans droit d’administration par défaut pour les personnes d’une organisation est celui de membre d’organisation. Par défaut, les membres d’organisation disposent d’un certain nombre d’autorisations, y compris la possibilité de créer des dépôts et des tableaux de bord de projet.

{% ifversion fpt or ghec %}
### Modérateurs d’organisation
Les modérateurs sont des membres de l’organisation qui, en plus de leurs autorisations en tant que membres, sont autorisés à bloquer et débloquer des contributeurs non-membres, à définir des limites d’interaction et à masquer les commentaires dans les dépôt publics appartenant à l’organisation. Pour plus d’informations, consultez « [Gestion des modérateurs dans votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization) ».

### Gestionnaires de facturation
Les responsables de facturation sont des utilisateurs qui peuvent gérer les paramètres de facturation pour votre organisation, comme les informations de paiement. C’est une option pratique si les membres de votre organisation n’ont généralement pas accès aux ressources de facturation. Pour plus d’informations, consultez « [Ajout d’un gestionnaire de facturation à votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization) ».

{% endif %}

{% ifversion security-managers %}
### Gestionnaires de sécurité

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Si votre organisation dispose d’une équipe de sécurité, vous pouvez utiliser le rôle de gestionnaire de sécurité pour accorder aux membres de l’équipe l’accès minimal à l’organisation dont ils ont besoin. Pour plus d’informations, consultez « [Gestion des gestionnaires de sécurité dans votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) ».
{% endif %}
### Gestionnaires {% data variables.product.prodname_github_app %}
Par défaut, seuls les propriétaires d’organisation peuvent gérer les paramètres des {% data variables.product.prodname_github_apps %} appartenant à une organisation. Pour permettre à des utilisateurs supplémentaires de gérer des {% data variables.product.prodname_github_apps %} appartenant à une organisation, un propriétaire peut leur accorder des autorisations de gestionnaire de {% data variables.product.prodname_github_app %}.

Quand vous désignez un utilisateur comme responsable de {% data variables.product.prodname_github_app %} dans votre organisation, vous pouvez lui accorder l’accès pour gérer les paramètres de tout ou partie des {% data variables.product.prodname_github_apps %} appartenant à l’organisation. Pour plus d'informations, consultez les pages suivantes :

- « [Ajout de gestionnaires d’application GitHub dans votre organisation](/articles/adding-github-app-managers-in-your-organization) »
- « [Suppression de gestionnaires d’application GitHub de votre organisation](/articles/removing-github-app-managers-from-your-organization) »

### Collaborateurs externes
Pour sécuriser les données de votre organisation tout en autorisant l’accès aux dépôts, vous pouvez ajouter des *collaborateurs externes*. {% data reusables.organizations.outside_collaborators_description %}

## Autorisations pour les rôles d’organisation

{% ifversion fpt %} Certaines des fonctionnalités listées ci-dessous sont limitées aux organisations utilisant {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Autorisation d’organisation | Propriétaires | Membres | Modérateurs | Gestionnaires de facturation | Gestionnaires de sécurité |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Créer des dépôts (consultez « [Restriction de la création de dépôts dans votre organisation](/articles/restricting-repository-creation-in-your-organization) ») | **X** | **X** | **X** |  | **X**  |
| Visualiser et modifier les informations de facturation | **X** |  |  | **X** |  |
| Inviter des personnes à rejoindre l’organisation | **X** |  |  |  |  |
| Modifier et annuler des invitations à rejoindre l’organisation | **X** |  |  |  |  |
| Supprimer des membres de l’organisation | **X** |  |  |  |  |
| Rétablir des membres antérieurs de l’organisation | **X** |  |  |  |  |
| Ajouter et supprimer des personnes dans **toutes les équipes** | **X** |  |  |  |  |
| Promouvoir des membres de l’organisation en *gestionnaire d’équipe* | **X** |  |  |  |  |
| Configurer les affectations de révision de code (consultez « [Gestion de l’affectation de révision de code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team) ») | **X** |  |  |  |  |
| Définir des rappels planifiés (consultez « [Gestion des rappels planifiés pour les demandes de tirage](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests) ») | **X** |  |  |  |  |
| Ajouter des collaborateurs à **tous les dépôts** | **X** |  |  |  |  |
| Accéder au journal d’audit de l’organisation | **X** |  |  |  |  |
| Modifier la page de profil de l’organisation (consultez « [À propos du profil de votre organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile) ») | **X** |  |  |  |  |{% ifversion ghec %}
| Vérifier les domaines de l’organisation (consultez « [Vérification du domaine de votre organisation](/articles/verifying-your-organization-s-domain) ») | **X** |  |  |  |  |
| Restreindre les notifications par e-mail aux domaines vérifiés ou approuvés (consultez « [Restriction des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ») | **X** |  |  |  |  |{% endif %}
| Supprimer **toutes les équipes** | **X** |  |  |  |  |
| Supprimer le compte d’organisation, y compris tous les dépôts | **X** |  |  |  |  |
| Créer des équipes (consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ») | **X** | **X** | **X** |  | **X**  |
| [Déplacer des équipes dans la hiérarchie d’une organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Créer des tableaux de bord de projet (consultez « [Autorisations de tableau de bord de projet pour une organisation](/articles/project-board-permissions-for-an-organization) ») | **X** | **X** | **X** |  | **X**  |
| Voir tous les membres et équipes de l’organisation | **X** | **X** | **X** |  | **X**  |
| Utiliser @mention pour n’importe quelle équipe visible | **X** | **X** | **X** |  | **X**  |
| Peut être rendu *gestionnaire d’équipe* | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Voir les insights de l’organisation (consultez « [Visualisation des insights pour votre organisation](/articles/viewing-insights-for-your-organization) ») | **X** | **X** | **X** |  | **X**  |{% endif %}
| Visualiser et publier des discussions d’équipe publiques pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** | **X** | **X** |  | **X**  |
| Visualiser et publier des discussions d’équipe privées pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** |  |  |  |  |
| Modifier et supprimer des discussions d’équipe dans **toutes les équipes** (consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments) ») | **X** |  |  |  |  |
| Désactiver les discussions d’équipe pour une organisation (consultez « [Désactivation des discussions d’équipe pour votre organisation](/articles/disabling-team-discussions-for-your-organization) ») | **X** |  |  |  |  |
| Masquer les commentaires sur les commits accessibles en écriture, les demandes de tirage et les problèmes (consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment) ») | **X** | **X** | **X** |  | **X** |
| Masquer les commentaires sur _tous_ les commits, demandes de tirage et problèmes (consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment) ») | **X** |  | **X** |  | **X** |
| Bloquer et débloquer des contributeurs non-membres (consultez « [Blocage d’un utilisateur dans votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) ») | **X** |  | **X** |  |  |
| Limiter les interactions pour certains utilisateurs dans des dépôts publics (consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) ») | **X** |  | **X** |  |  |{% ifversion ghec %}
| Gérer la visualisation des insights sur les dépendances de l’organisation (consultez « [Modification de la visibilité des insights sur les dépendances de votre organisation](/articles/changing-the-visibility-of-your-organizations-dependency-insights) ») | **X** |  |  |  |  |{% endif %}
| Définir une image de profil d’équipe dans **toutes les équipes** (consultez « [Définition de l’image de profil de votre équipe](/articles/setting-your-team-s-profile-picture) ») | **X** |  |  |  |  |
| Comptes de commanditaire et gestion des parrainages de l’organisation (consultez « [Parrainage des contributeurs open source](/sponsors/sponsoring-open-source-contributors) ») | **X** |  |  | **X** | **X**  |
| Gérer les mises à jour par e-mail depuis des comptes parrainés (consultez « [Gestion des mises à jour depuis des comptes de commanditaires de votre organisation](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors) ») | **X** |  |  |  |  |
| Attribuer vos parrainages à une autre organisation (pour plus d’informations, consultez « [Attribution de parrainages à votre organisation](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization) ») | **X** |  |  |  |  |
| Gérer la publication de sites {% data variables.product.prodname_pages %} depuis des dépôts de l’organisation (consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ») | **X** |  |  |  |  |
| Gérer les paramètres de sécurité et d’analyse (consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ») | **X** |  |  |  | **X** |
| Visualiser la vue d’ensemble de la sécurité pour l’organisation (consultez « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ») | **X** |  |  |  | **X** |{% ifversion ghec %}
| Activer et appliquer [l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Gérer l’accès SAML d’un utilisateur à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Gérer les autorités de certification SSH d’une organisation (consultez « [Gestion des autorités de certification SSH de votre organisation](/articles/managing-your-organizations-ssh-certificate-authorities) ») | **X** |  |  |  |  |{% endif %}
| Transférer des dépôts | **X** |  |  |   |  |
| Acheter, installer, gérer la facturation et annuler des applications {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Lister les applications dans {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Recevoir des [{% data variables.product.prodname_dependabot_alerts %} sur les dépendances non sécurisées](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) pour tous les dépôts d’une organisation | **X** |  |  |  | **X** |
| Gérer les {% data variables.product.prodname_dependabot_security_updates %} (consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ») | **X** |  |  |  | **X** |
| [Gérer la stratégie de duplication](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Limiter l’activité dans les dépôt publics dans une organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Tirer (lire) *tous les dépôts* dans l’organisation | **X** |  |  |  | **X** |
| Pousser (écrire) et cloner (copier) *tous les dépôt* dans l’organisation | **X** |  |  |  |  |
| Convertir des membres de l’organisation en [collaborateurs externes](#outside-collaborators) | **X** |  |  |  |  |
| [Voir les personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Exporter une liste des personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Gérer le nom de branche par défaut (consultez « [Gestion du nom de branche par défaut pour les dépôts de votre organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization) ») | **X** |  |  |  |  |
| Gérer les étiquettes par défaut (consultez « [Gestion des étiquettes par défaut pour les dépôts de votre organisation](/articles/managing-default-labels-for-repositories-in-your-organization) ») | **X** |  |  |  |  |{% ifversion ghec %}
| Activer la synchronisation des équipes (consultez « [Gestion de la synchronisation des équipes pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ») | **X** |  |  |  |  |{% endif %}
| Gérer les révisions des demandes de tirage dans l’organisation (consultez « [Gestion des révisions des demandes de tirage dans votre organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization) ») | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Action d’organisation | Propriétaires | Membres | Gestionnaires de sécurité |
|:--------------------|:------:|:-------:|:-------:|
| Inviter des personnes à rejoindre l’organisation | **X** |  |  |
| Modifier et annuler des invitations à rejoindre l’organisation | **X** |  |  |
| Supprimer des membres de l’organisation | **X** | | |  |
| Rétablir des membres antérieurs de l’organisation | **X** | | |  |
| Ajouter et supprimer des personnes dans **toutes les équipes** | **X** |  |  |
| Promouvoir des membres de l’organisation en *gestionnaire d’équipe* | **X** |  |  |
| Configurer les affectations de révision de code (consultez « [Gestion de l’affectation de révision de code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team) ») | **X** |  |  |
| Ajouter des collaborateurs à **tous les dépôts** | **X** |  |  |
| Accéder au journal d’audit de l’organisation | **X** |  |  |
| Modifier la page de profil de l’organisation (consultez « [À propos du profil de votre organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile) ») | **X** |  |  |{% ifversion ghes %}
| Vérifier les domaines de l’organisation (consultez « [Vérification du domaine de votre organisation](/articles/verifying-your-organization-s-domain) ») | **X** |  |  |
| Restreindre les notifications par e-mail aux domaines vérifiés ou approuvés (consultez « [Restriction des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ») | **X** |  |  |{% endif %}
| Supprimer **toutes les équipes** | **X** |  |  |
| Supprimer le compte d’organisation, y compris tous les dépôts | **X** |  |  |
| Créer des équipes (consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ») | **X** | **X** | **X**  |
| Voir tous les membres et équipes de l’organisation | **X** | **X** | **X**  |
| Utiliser @mention pour n’importe quelle équipe visible | **X** | **X** | **X**  |
| Peut être rendu *gestionnaire d’équipe* | **X** | **X** | **X**  |
| Transférer des dépôts | **X** | |  |
| Gérer les paramètres de sécurité et d’analyse (consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ») | **X** | | **X** |{% ifversion ghes %}
| Visualiser la vue d’ensemble de la sécurité pour l’organisation (consultez « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ») | **X** | | **X** |{% endif %}{% ifversion ghes %}
| Gérer les {% data variables.product.prodname_dependabot_security_updates %} (consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ») | **X** | | **X** |{% endif %}
| Gérer les autorités de certification SSH d’une organisation (consultez « [Gestion des autorités de certification SSH de votre organisation](/articles/managing-your-organizations-ssh-certificate-authorities) ») | **X** |  |  |
| Créer des tableaux de bord de projet (consultez « [Autorisations de tableau de bord de projet pour une organisation](/articles/project-board-permissions-for-an-organization) ») | **X** | **X** | **X** |
| Visualiser et publier des discussions d’équipe publiques pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** | **X** | **X**  |
| Visualiser et publier des discussions d’équipe privées pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** |  |  |
| Modifier et supprimer des discussions d’équipe dans **toutes les équipes** (pour plus d’informations, consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments) ») | **X** |  |  |  |
| Masquer les commentaires sur les commits, les demandes de tirage et les problèmes (consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment) ») | **X** | **X** | **X**  |
| Désactiver les discussions d’équipe pour une organisation (consultez « [Désactivation des discussions d’équipe pour votre organisation](/articles/disabling-team-discussions-for-your-organization) ») | **X** |  |  |
| Définir une image de profil d’équipe dans **toutes les équipes** (consultez « [Définition de l’image de profil de votre équipe](/articles/setting-your-team-s-profile-picture) ») | **X** |  |  |{% ifversion ghes %}
| Gérer la publication de sites {% data variables.product.prodname_pages %} depuis des dépôts de l’organisation (consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ») | **X** | |  |{% endif %}
| [Déplacer des équipes dans la hiérarchie d’une organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Tirer (lire) *tous les dépôts* dans l’organisation | **X** | | **X** |
| Pousser (écrire) et cloner (copier) *tous les dépôt* dans l’organisation | **X** | |  |
| Convertir des membres de l’organisation en [collaborateurs externes](#outside-collaborators) | **X** | |  |
| [Voir les personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Exporter une liste des personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Gérer les étiquettes par défaut (consultez « [Gestion des étiquettes par défaut pour les dépôts de votre organisation](/articles/managing-default-labels-for-repositories-in-your-organization) ») | **X** | |  |{% ifversion pull-request-approval-limit %}
| Gérer les révisions des demandes de tirage dans l’organisation (consultez « [Gestion des révisions des demandes de tirage dans votre organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization) ») | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Gérer les listes vertes d’adresses IP (consultez « [Restriction du trafic réseau vers votre entreprise](/admin/configuration/restricting-network-traffic-to-your-enterprise) ») | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Action d’organisation | Propriétaires | Membres |
|:--------------------|:------:|:-------:|
| Inviter des personnes à rejoindre l’organisation | **X** |  |
| Modifier et annuler des invitations à rejoindre l’organisation | **X** |  |
| Supprimer des membres de l’organisation | **X** | | |
| Rétablir des membres antérieurs de l’organisation | **X** | | |
| Ajouter et supprimer des personnes dans **toutes les équipes** | **X** |  |  
| Promouvoir des membres de l’organisation en *gestionnaire d’équipe* | **X** |  |
| Configurer les affectations de révision de code (consultez « [Gestion des paramètres de révision de code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team) ») | **X** |  |
| Ajouter des collaborateurs à **tous les dépôts** | **X** |  |
| Accéder au journal d’audit de l’organisation | **X** |  |
| Modifier la page de profil de l’organisation (consultez « [À propos du profil de votre organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile) ») | **X** |  |  |{% ifversion ghes %}
| Vérifier les domaines de l’organisation (consultez « [Vérification du domaine de votre organisation](/articles/verifying-your-organization-s-domain) ») | **X** |  |
| Restreindre les notifications par e-mail aux domaines vérifiés ou approuvés (consultez « [Restriction des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ») | **X** |  |{% endif %}
| Supprimer **toutes les équipes** | **X** |  |
| Supprimer le compte d’organisation, y compris tous les dépôts | **X** |  |
| Créer des équipes (consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ») | **X** | **X** |
| Voir tous les membres et équipes de l’organisation | **X** | **X** |
| Utiliser @mention pour n’importe quelle équipe visible | **X** | **X** |
| Peut être rendu *gestionnaire d’équipe* | **X** | **X** |
| Transférer des dépôts | **X** | |
| Gérer les autorités de certification SSH d’une organisation (consultez « [Gestion des autorités de certification SSH de votre organisation](/articles/managing-your-organizations-ssh-certificate-authorities) ») | **X** |  |
| Créer des tableaux de bord de projet (consultez « [Autorisations de tableau de bord de projet pour une organisation](/articles/project-board-permissions-for-an-organization) ») | **X** | **X** | |
| Visualiser et publier des discussions d’équipe publiques pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** | **X** |  |
| Visualiser et publier des discussions d’équipe privées pour **toutes les équipes** (consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ») | **X** |  |  |
| Modifier et supprimer des discussions d’équipe dans **toutes les équipes** (pour plus d’informations, consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments) ») | **X** |  |  |
| Masquer les commentaires sur les commits, les demandes de tirage et les problèmes (consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment) ») | **X** | **X** | **X** |
| Désactiver les discussions d’équipe pour une organisation (consultez « [Désactivation des discussions d’équipe pour votre organisation](/articles/disabling-team-discussions-for-your-organization) ») | **X** |  |  |
| Définir une image de profil d’équipe dans **toutes les équipes** (consultez « [Définition de l’image de profil de votre équipe](/articles/setting-your-team-s-profile-picture) ») | **X** |  |  |{% ifversion ghes %}
| Gérer la publication de sites {% data variables.product.prodname_pages %} depuis des dépôts de l’organisation (consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ») | **X** | |{% endif %}
| [Déplacer des équipes dans la hiérarchie d’une organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Tirer (lire), pousser (écrire) et cloner (copier) *tous les dépôt* dans l’organisation | **X** | |
| Convertir des membres de l’organisation en [collaborateurs externes](#outside-collaborators) | **X** | |
| [Voir les personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Exporter une liste des personnes ayant accès à un dépôt de l’organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Gérer les étiquettes par défaut (consultez « [Gestion des étiquettes par défaut pour les dépôts de votre organisation](/articles/managing-default-labels-for-repositories-in-your-organization) ») | **X** | |
{% ifversion ghae %}| Gérer les listes vertes d’adresses IP (consultez « [Restriction du trafic réseau vers votre entreprise](/admin/configuration/restricting-network-traffic-to-your-enterprise) ») | **X** | |{% endif %}

{% endif %}

## Pour aller plus loin

- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
- « [Autorisations de tableau de projet pour une organisation](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization) »
