---
title: Gestion des projets à l’aide de Jira
intro: 'Vous pouvez intégrer Jira avec {% data variables.product.product_name %} pour la gestion de projet.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104166'
---
## Connexion de Jira à une organisation {% data variables.product.prodname_enterprise %}

1. Connectez-vous à votre compte {% data variables.product.prodname_enterprise %} à l’adresse http[s]://[nom d’hôte]/login. Si vous êtes déjà connecté, cliquez sur le logo {% data variables.product.prodname_dotcom %} dans le coin supérieur gauche.
2. Cliquez sur l’icône de votre profil sous le logo {% data variables.product.prodname_dotcom %} et sélectionnez l’organisation que vous souhaitez connecter à Jira.

  ![Sélectionner une organisation](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Cliquez sur le lien **Modifier les paramètres de _nom de l’organisation_**.

  ![Modifier les paramètres de l’organisation](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. Dans la barre latérale gauche, sous **Paramètres du développeur**, cliquez sur **Applications OAuth**.

  ![Sélectionner les applications OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Cliquez sur le bouton **Inscrire une nouvelle application**.

  ![Bouton Inscrire une nouvelle application](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Renseignez les paramètres de l’application :
    - Dans le champ **Nom de l’application**, tapez « Jira » ou tout nom que vous souhaitez utiliser pour identifier l’instance Jira.
    - Dans le champ **URL de la page d’accueil**, tapez l’URL complète de votre instance Jira.
    - Dans le champ **URL de rappel d’autorisation**, tapez l’URL complète de votre instance Jira.
7. Cliquez sur **Register application**.
8. En haut de la page, notez l’**ID client** et la **clé secrète client**. Vous en aurez besoin pour configurer votre instance Jira.

## Configuration de l’instance Jira

1. Sur votre instance Jira, connectez-vous à un compte disposant d’un accès administratif.
2. En haut de la page, cliquez sur l’icône de paramètres (engrenage) et choisissez **Applications**.

  ![Sélectionner des applications dans les paramètres Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. Dans la barre latérale gauche, sous **Intégrations**, cliquez sur **Comptes DVCS**.

  ![Menu Intégrations Jira - Comptes DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Cliquez sur **Lier un compte Bitbucket Cloud ou {% data variables.product.prodname_dotcom %}** .

  ![Lier un compte GitHub à Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. Dans le mode **Ajouter un nouveau compte**, renseignez vos paramètres {% data variables.product.prodname_enterprise %} :
    - Dans le menu déroulant **Hôte**, choisissez **{% data variables.product.prodname_enterprise %}** .
    - Dans le champ **Équipe ou compte d’utilisateur**, tapez le nom de votre compte d’utilisateur ou de votre organisation {% data variables.product.prodname_enterprise %}.
    - Dans le champ **Clé OAuth**, tapez l’ID client de votre application développeur {% data variables.product.prodname_enterprise %}.
    - Dans le champ **Secret OAuth**, tapez la clé secrète client pour votre application développeur {% data variables.product.prodname_enterprise %}.
    - Si vous ne souhaitez pas lier de nouveaux référentiels appartenant à votre organisation ou compte d’utilisateur {% data variables.product.prodname_enterprise %}, désélectionnez **Lier automatiquement les nouveaux référentiels**.
    - Si vous ne souhaitez pas activer les validations intelligentes, désélectionnez **Activer les validations intelligentes**.
    - Cliquez sur **Add**.
6. Passez en revue les autorisations que vous accordez à votre compte {% data variables.product.prodname_enterprise %}, puis cliquez sur **Autoriser l’application**.
7. Si nécessaire, tapez votre mot de passe pour continuer.
