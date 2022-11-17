---
title: Renommage d’une organisation
intro: 'Si votre projet ou votre entreprise a changé de nom, vous pouvez mettre à jour le nom de votre organisation en conséquence.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106221'
---
{% tip %}

**Astuce :** Seuls les propriétaires d’organisation peuvent renommer une organisation. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## Que se passe-t-il si je change le nom de mon organisation ?

Dès que vous changez le nom de votre organisation, votre ancien nom d’organisation est disponible. Quand vous changez le nom de votre organisation, la plupart des références à vos dépôts sous l’ancien nom d’organisation sont automatiquement mises à jour avec le nouveau nom. Toutefois, certains liens vers votre profil ne sont pas redirigés automatiquement.

### Changements qui se produisent automatiquement

- {% data variables.product.prodname_dotcom %} redirige automatiquement les références vers vos dépôts.  Les liens web vers les **dépôts** existants de votre organisation continuent de fonctionner. Cette opération peut prendre quelques minutes après le changement.
- Vous pouvez continuer à pousser vos dépôts locaux sur l’ancienne URL de suivi à distance sans la mettre à jour. Toutefois, nous vous recommandons de mettre à jour toutes les URL existantes de dépôt distant après le changement de nom de votre organisation. Comme votre ancien nom d’organisation peut être utilisé par tout le monde dès que vous le changez, le nouveau propriétaire d’organisation peut créer des dépôts qui remplacent les entrées de redirection vers votre dépôt. Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».
- Les commits Git précédents sont également attribués de manière appropriée aux utilisateurs de votre organisation.

### Changements qui ne sont pas automatiques

Après le changement de nom de votre organisation :
- Les liens vers la page de profil de votre ancienne organisation, par exemple, `https://{% data variables.command_line.backticks %}/previousorgname`, retournent une erreur 404. Nous vous recommandons de mettre à jour les liens des autres sites vers votre organisation{% ifversion fpt or ghec %}, comme vos profils LinkedIn ou Twitter{% endif %}.
- Les demandes d’API qui utilisent l’ancien nom d’organisation retournent une erreur 404. Nous vous recommandons de mettre à jour l’ancien nom d’organisation dans vos demandes d’API.
- Il n’y a pas de redirection automatique de [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) pour les équipes qui utilisent le nom de l’ancienne organisation.{% ifversion ghec %}
- Si l’authentification unique (SSO) SAML est activée pour l’organisation, vous devez mettre à jour le nom d’organisation dans l’application pour {% data variables.product.prodname_ghe_cloud %} avec votre fournisseur d’identité. Si vous ne mettez pas à jour le nom d’organisation avec votre fournisseur d’identité, les membres de l’organisation ne peuvent plus s’authentifier sur votre fournisseur d’identité pour accéder aux ressources de l’organisation. Pour plus d’informations, consultez « [Connexion de votre fournisseur d’identité à votre organisation](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization) ».{% endif %}

## Changement du nom de votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. En bas de la page des paramètres, sous « Renommer l’organisation », cliquez sur **Renommer l’organisation**.
  ![Bouton Renommer l’organisation](/assets/images/help/settings/settings-rename-organization.png)

## Pour aller plus loin

* « [Pourquoi mes commits sont-ils liés au mauvais utilisateur ?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user) »
