---
title: À propos de l’authentification unique SAML
intro: 'Vous pouvez accéder à {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}une organisation qui utilise l’authentification unique (SSO) SAML{% endif %} en s’authentifiant {% ifversion ghae %}avec l’authentification unique (SSO) SAML {% endif %}via un fournisseur d''identité (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111512'
---
## À propos de l’authentification unique SAML

{% ifversion ghae %}

L’authentification unique SAML permet à un propriétaire d’entreprise de contrôler et de sécuriser l’accès à {% data variables.product.product_name %} de manière centralisée à partir d’un fournisseur d’identité SAML. Quand vous accédez à {% data variables.location.product_location %}à l’aide d’un navigateur, {% data variables.product.product_name %} vous redirige vers votre fournisseur d’identité pour vous authentifier. Quand vous vous authentifiez avec un compte sur l’IdP, celui-ci vous redirige vers {% data variables.location.product_location %}. {% data variables.product.product_name %} vérifie la réponse de votre IdP, puis accorde l’accès.

{% data reusables.saml.you-must-periodically-authenticate %}

Si vous ne pouvez pas accéder à {% data variables.product.product_name %}, contactez votre propriétaire d’entreprise local ou votre administrateur pour {% data variables.product.product_name %}. Vous pouvez trouver des informations de contact pour votre entreprise en cliquant sur **Support** en bas de n’importe quelle page sur {% data variables.product.product_name %}. {% data variables.product.company_short %} et le {% data variables.contact.github_support %} n’ont pas accès à votre IdP et ne peuvent pas résoudre les problèmes d’authentification. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Les propriétaires d’organisation peuvent inviter votre compte personnel sur {% data variables.product.prodname_dotcom %} à rejoindre leur organisation qui utilise l’authentification unique SAML. Vous pourrez alors contribuer à l’organisation et conserver votre identité et vos contributions existantes sur {% data variables.product.prodname_dotcom %}.

Si vous êtes membre d’une {% data variables.enterprise.prodname_emu_enterprise %}, vous allez plutôt utiliser un nouveau compte provisionné pour vous et contrôlé par votre entreprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

Quand vous tentez d’accéder à la plupart des ressources privées d’une organisation qui utilise l’authentification unique SAML, {% data variables.product.prodname_dotcom %} vous redirige vers le fournisseur d’identité SAML de l’organisation pour vous authentifier. Après votre être authentifié avec votre compte sur le fournisseur d’identité, vous êtes redirigé par celui-ci vers {% data variables.product.prodname_dotcom %}, où vous pouvez accéder aux ressources de l’organisation.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Si vous vous êtes récemment authentifié auprès du fournisseur d’identité SAML de votre organisation dans votre navigateur, vous êtes automatiquement autorisé quand vous accédez à une organisation {% data variables.product.prodname_dotcom %} qui utilise l’authentification unique SAML. Si vous ne vous êtes pas récemment authentifié auprès du fournisseur d’identité SAML de votre organisation dans votre navigateur, vous devez vous authentifier auprès du fournisseur d’identité SAML pour pouvoir accéder à l’organisation.

{% data reusables.saml.you-must-periodically-authenticate %}

## Identités SAML liées

Lorsque vous vous authentifiez auprès de votre compte IdP et que vous revenez sur {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} enregistre un lien dans l’organisation ou l’entreprise entre votre compte personnel {% data variables.product.prodname_dotcom %} et l’identité SAML à laquelle vous vous êtes connecté.  Cette identité liée est utilisée pour valider votre appartenance à cette organisation, et en fonction de la configuration de votre organisation ou entreprise, elle est également utilisée pour déterminer les organisations et les équipes dont vous êtes membre. Chaque compte {% data variables.product.prodname_dotcom %} peut être lié à exactement une identité SAML par organisation. De même, chaque identité SAML peut être liée à exactement un compte {% data variables.product.prodname_dotcom %} dans une organisation. 

Si vous vous connectez avec une identité SAML déjà liée à un autre compte {% data variables.product.prodname_dotcom %}, vous recevez un message d’erreur indiquant que vous ne pouvez pas vous connecter avec cette identité SAML. Ce cas peut se produire si vous tentez d’utiliser un nouveau compte {% data variables.product.prodname_dotcom %} pour travailler au sein de votre organisation. Si vous n’aviez pas l’intention d’utiliser cette identité SAML avec ce compte {% data variables.product.prodname_dotcom %}, vous devez vous déconnecter de cette identité SAML, puis répéter la connexion SAML. Si vous souhaitez utiliser cette identité SAML avec votre compte {% data variables.product.prodname_dotcom %}, vous devez demander à votre administrateur de dissocier votre identité SAML de votre ancien compte afin de pouvoir l’associer à votre nouveau compte.  Selon la configuration de votre organisation ou de votre entreprise, votre administrateur peut également avoir besoin de réaffecter votre identité dans votre fournisseur SAML.  Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) ».

Si l’identité SAML avec laquelle vous vous connectez ne correspond pas à l’identité SAML actuellement liée à votre compte {% data variables.product.prodname_dotcom %}, vous recevez un avertissement indiquant que vous êtes sur le point de lier une nouvelle fois votre compte. Étant donné que votre identité SAML est utilisée pour régir l’accès et l’appartenance aux équipes, le fait de continuer avec la nouvelle identité SAML peut entraîner la perte de votre accès aux équipes et aux organisations dans {% data variables.product.prodname_dotcom %}. Continuez seulement si vous savez que vous êtes censé utiliser cette nouvelle identité SAML pour vos futures authentifications. 

## Autorisation des {% data variables.product.pat_generic %}s et des clés SSH avec l’authentification unique SAML

Pour utiliser l’API ou Git sur la ligne de commande afin d’accéder au contenu protégé d’une organisation qui utilise l’authentification unique SAML, vous devez utiliser un {% data variables.product.pat_generic %} autorisé sur HTTPS ou une clé SSH autorisée.

Si vous n'avez pas de {% data variables.product.pat_generic %} ou de clé SSH, vous pouvez créer un {% data variables.product.pat_generic %} pour la ligne de commande ou générer une nouvelle clé SSH. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) » ou « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

Pour utiliser une clé SSH ou un {% data variables.product.pat_generic %} nouveau ou existant avec une organisation qui utilise ou applique l’authentification unique SAML, vous devez autoriser le jeton ou la clé SSH en vue d’une utilisation avec une telle organisation. Pour plus d’informations, consultez « [Autorisation d’un {% data variables.product.pat_generic %} à utiliser avec l’authentification unique SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) » ou « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) ».

## À propos des {% data variables.product.prodname_oauth_apps %}, des {% data variables.product.prodname_github_apps %} et de l’authentification unique SAML

Vous devez avoir une session SAML active chaque fois que vous autorisez une {% data variables.product.prodname_oauth_app %} ou une {% data variables.product.prodname_github_app %} à accéder à une organisation qui utilise ou applique l’authentification unique SAML. Vous pouvez créer une session SAML active en accédant à `https://github.com/orgs/ORGANIZATION-NAME/sso` dans votre navigateur.

Une fois qu’un propriétaire d’entreprise ou d’organisation active ou applique l’authentification unique SAML pour une organisation, et après vous être authentifié via SAML pour la première fois, vous devez ré-autoriser toutes les {% data variables.product.prodname_oauth_apps %} ou {% data variables.product.prodname_github_apps %} que vous avez précédemment autorisées à accéder à l’organisation. 

Pour afficher les {% data variables.product.prodname_oauth_apps %} que vous avez autorisées, visitez votre [page des {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Pour afficher les {% data variables.product.prodname_github_apps %} que vous avez autorisées, visitez votre [page des {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Pour aller plus loin

{% ifversion ghec %}- « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) »{% endif %} {% ifversion ghae %}- « [À propos de la gestion des identités et des accès pour votre entreprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise) »{% endif %}
