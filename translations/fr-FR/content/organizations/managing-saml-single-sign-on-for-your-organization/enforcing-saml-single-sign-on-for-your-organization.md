---
title: Appliquer l’authentification unique SAML pour votre organisation
intro: Les propriétaires et administrateurs de l’organisation peuvent appliquer l’authentification unique SAML afin que tous les membres de l’organisation doivent s’authentifier via un fournisseur d’identité (IDP).
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109408'
---
## À propos de l’application de l’authentification unique SAML pour votre organisation

Quand vous activez l’authentification unique SAML, {% data variables.product.prodname_dotcom %} invite les membres qui visitent les ressources de l’organisation sur {% data variables.product.prodname_dotcom_the_website %} à s’authentifier sur votre fournisseur d’identité, ce qui lie le compte personnel du membre à une identité sur le fournisseur d’identité. Les membres peuvent néanmoins toujours accéder aux ressources de l’organisation avant l’authentification auprès de votre fournisseur d’identité.

![Bannière avec une invite d’authentification via l’authentification unique SAML pour accéder à l’organisation](/assets/images/help/saml/sso-has-been-enabled.png)

Vous pouvez aussi imposer l’authentification unique SAML pour votre organisation. {% data reusables.saml.when-you-enforce %} La mise en application supprime de l’organisation tous les membres et administrateurs qui n’ont pas été authentifiés via votre fournisseur d’identité. {% data variables.product.company_short %} envoie une notification par e-mail à chaque utilisateur supprimé. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Si un utilisateur rejoint l’organisation dans un délai de trois mois, les privilèges d’accès et les paramètres de l’utilisateur sont restaurés. Pour plus d’informations, consultez « [Rétablissement d’un ancien membre de votre organisation](/articles/reinstating-a-former-member-of-your-organization) ».

Les bots et les comptes de service qui n’ont pas d’identités externes configurées dans le fournisseur d’identité de votre organisation sont également supprimés quand vous imposez l’authentification unique SAML. Pour plus d’informations sur les bots et les comptes de service, consultez « [Gestion des bots et des comptes de service avec l’authentification unique SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on) ».

Si votre organisation est détenue par un compte d’entreprise, le fait d’exiger SAML pour le compte d’entreprise va remplacer la configuration SAML au niveau de l’organisation et imposer l’authentification unique SAML pour chaque organisation de l’entreprise. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

{% tip %}

**Conseil :** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Imposer l’authentification unique SAML pour votre organisation

1. Activez et testez l’authentification unique SAML pour votre organisation, puis authentifiez-vous au moins une fois auprès de votre fournisseur d’identité. Pour plus d’informations, consultez « [Activation et test de l’authentification unique SAML pour votre organisation](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) ».
1. Préparez-vous à imposer l’authentification unique SAML pour votre organisation. Pour plus d’informations, consultez « [Préparation à l’application de l’authentification unique SAML dans votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization) ».
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Sous « Authentification unique SAML », sélectionnez **Exiger l’authentification unique SAML pour tous les membres de l’organisation _ORGANISATION_**.
    ![Case à cocher « Exiger l’authentification unique SAML »](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Si des membres de l’organisation n’ont pas été authentifiés via votre fournisseur d’identité, {% data variables.product.company_short %} affiche les membres. Si vous imposez l’authentification unique SAML, {% data variables.product.company_short %} supprime les membres de l’organisation. Passez en revue l’avertissement, puis cliquez sur **Supprimer les membres et exiger l’authentification unique SAML**.
    ![Boîte de dialogue « Confirmer l’application de l’authentification unique SAML » avec la liste des membres à supprimer de l’organisation](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Sous « Codes de récupération de l’authentification unique », passez en revue vos codes de récupération. Stockez les codes de récupération à un emplacement sûr, comme un gestionnaire de mots de passe.

## Pour aller plus loin

- « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) »
