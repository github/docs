---
title: Gestion des appartenances aux équipes avec des groupes de fournisseur d’identité
shortTitle: Manage teams with your IdP
intro: You can manage team membership on {% data variables.product.product_name %} through your identity provider (IdP) by connecting IdP groups with your {% data variables.product.prodname_emu_enterprise %}.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Enterprise
- SSO
- Teams
ms.openlocfilehash: 2dc5a5ae3a8aad9cf589e148764dec1991c2c8f7
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104893"
---
## <a name="about-team-management-with--data-variablesproductprodname_emus-"></a>À propos de la gestion d’équipe avec {% data variables.product.prodname_emus %}

Avec {% data variables.product.prodname_emus %}, vous pouvez gérer l’appartenance aux équipes au sein de votre entreprise par le biais de votre IdP. Quand vous connectez une équipe de l’une des organisations de votre entreprise à un groupe d’IdP, les modifications d’appartenance à partir du groupe d’IdP sont reflétées automatiquement dans votre entreprise, ce qui réduit la nécessité d’effectuer des mises à jour manuelles et de rédiger des scripts personnalisés. 

Quand, à la suite d’une modification d’un groupe d’IdP ou d’une nouvelle connexion d’équipe, un {% data variables.product.prodname_managed_user %} rejoint une équipe d’une organisation dont {% data variables.product.prodname_managed_user %} n’était pas déjà membre, il est automatiquement ajouté à l’organisation. Les propriétaires d’organisation peuvent également gérer manuellement l’appartenance à l’organisation. Quand vous déconnectez un groupe d’une équipe, les utilisateurs qui sont devenus membres de l’organisation par le biais de l’appartenance à l’équipe sont supprimés de l’organisation si leur appartenance à l’organisation ne leur est pas affectée d’une autre manière.

Vous pouvez connecter une équipe de votre entreprise à un groupe d’IdP. Vous pouvez affecter le même groupe d’IdP à plusieurs équipes de votre entreprise.

Si vous connectez une équipe existante à un groupe d’IdP, vous devez d’abord supprimer les membres qui ont été ajoutés manuellement. Après la connexion d’une équipe de votre entreprise à un groupe d’IdP, l’administrateur de votre idP doit modifier l’appartenance à l’équipe par le biais du fournisseur d’identité. Vous ne pouvez pas gérer l’appartenance à l’équipe sur {% data variables.product.prodname_dotcom_the_website %}.

Quand l’appartenance au groupe change sur votre IdP, celui-ci envoie une requête SCIM avec les modifications à {% data variables.product.prodname_dotcom_the_website %} selon la planification déterminée par votre IdP. Il se peut donc que la modification ne soit pas immédiate. Toutes les requêtes qui modifient l’appartenance à l’équipe ou à l’organisation sont inscrites dans le journal d’audit comme modifications apportées par le compte utilisé pour configurer le provisionnement d’utilisateur.

Les équipes connectées à des groupes d’idP ne peuvent pas être parentes d’autres équipes ni enfants d’une autre équipe. Si l’équipe que vous souhaitez connecter à un groupe d’IdP est une équipe parente ou enfant, nous vous recommandons de créer une équipe ou de supprimer les relations imbriquées qui font de votre équipe une équipe parente.

Pour gérer l’accès au dépôt pour toute équipe de votre entreprise, y compris les équipes connectées à un groupe d’IdP, vous devez apporter les modifications sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe au dépôt d’une organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) ».

## <a name="creating-a-new-team-connected-to-an-idp-group"></a>Création d’une équipe connectée à un groupe d’IdP

Tout membre d’une organisation peut créer une équipe et la connecter à un groupe d’IdP. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. Pour connecter une équipe, sélectionnez le menu déroulant « Groupes de fournisseur d’identité », puis cliquez sur l’équipe que vous souhaitez connecter.
    ![Menu déroulant pour choisir des groupes de fournisseur d’identité](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## <a name="managing-the-connection-between-an-existing-team-and-an-idp-group"></a>Gestion de la connexion entre une équipe existante et un groupe d’IdP

Les propriétaires d’organisation et les responsables d’équipe peuvent gérer la connexion existante entre un groupe d’IdP et une équipe.

{% note %}

**Remarque** : Avant de connecter une équipe existante sur {% data variables.product.prodname_dotcom_the_website %} à un groupe d’idP pour la première fois, vous devez supprimer tous les membres de l’équipe sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Suppression de membres d’organisation d’une équipe](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team) ».

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Si vous le souhaitez, sous « Groupe de fournisseur d’identité », à droite du groupe d’IdP que vous souhaitez déconnecter, cliquez sur {% octicon "x" aria-label="X symbol" %}. 
    ![Désélectionner un groupe d’IdP connecté à partir de l’équipe GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. Pour connecter un groupe d’IdP, sous « Groupe de fournisseur d’identité », sélectionnez le menu déroulant, puis cliquez sur un groupe de fournisseur d’identité dans la liste.
    ![Menu déroulant pour choisir le groupe de fournisseur d’identité](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Cliquez sur **Save changes**.

## <a name="viewing-idp-groups-group-membership-and-connected-teams"></a>Voir les groupes d’IdP, l’appartenance aux groupes et les équipes connectées

Vous pouvez consulter la liste des groupes d’IdP, voir toutes les équipes connectées à un groupe d’IdP et voir l’appartenance de chaque groupe d’IdP sur {% data variables.product.product_name %}. Vous devez modifier l’appartenance à un groupe sur votre fournisseur d’identité.

{% data reusables.enterprise-accounts.access-enterprise %}
1. Pour consulter la liste des groupes d’IdP, dans la barre latérale gauche, cliquez sur {% octicon "key" aria-label="The key icon" %} **Fournisseur d’identité**.
    ![Capture d’écran montrant l’onglet « Fournisseur d’identité » dans la barre latérale de l’entreprise](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. Pour voir les membres et les équipes connectés à un groupe d’IdP, cliquez sur le nom du groupe.
    ![Capture d’écran montrant la liste des groupes d’IdP, le nom du groupe est mis en surbrillance](/assets/images/help/enterprises/select-idp-group.png)
4. Pour voir les équipes connectées au groupe d’IdP, cliquez sur **Équipes**. 
    ![Capture d’écran montrant le bouton « Équipes »](/assets/images/help/enterprises/idp-groups-team-switcher.png)
