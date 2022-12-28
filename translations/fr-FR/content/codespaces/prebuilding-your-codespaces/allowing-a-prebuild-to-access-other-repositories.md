---
title: Autorisation d’une prébuild à accéder à d’autres dépôts
shortTitle: Allow external repo access
intro: 'Vous pouvez autoriser votre prébuild à avoir accès à d’autres référentiels {% data variables.product.prodname_dotcom %} afin qu’elle puisse être générée avec succès.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: c88433a59ca297f419aec787f9cff1b6c3013c89
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107316'
---
Par défaut, le workflow {% data variables.product.prodname_actions %} d’une configuration de prébuild peut uniquement accéder au contenu de son propre dépôt. Votre projet peut utiliser des ressources supplémentaires, situées ailleurs, pour créer l’environnement de développement.

## Autorisation d’une prébuild à accéder en lecture à des ressources externes

Vous pouvez configurer l’accès en lecture à d’autres dépôts {% data variables.product.prodname_dotcom %} avec le même propriétaire de dépôt, en spécifiant des autorisations dans le fichier `devcontainer.json` utilisé par votre configuration de prébuild. Pour plus d’informations, consultez « [Gestion de l’accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) ».

{% note %}

**Remarque** : Vous pouvez accorder uniquement des autorisations en lecture de cette façon, et le propriétaire du dépôt cible doit être le même que le propriétaire du dépôt pour lequel vous créez une prébuild. Par exemple, si vous créez une configuration de prébuild pour le dépôt `octo-org/octocat`, vous pourrez accorder des autorisations en lecture pour d’autres dépôts `octo-org/*` si cela est spécifié dans le fichier `devcontainer.json` et que vous disposez vous-même des autorisations.

{% endnote %}

Lorsque vous créez ou modifiez une configuration de prébuild pour un fichier `devcontainer.json` qui configure l’accès en lecture à d’autres dépôts avec le même propriétaire de dépôt, vous êtes invité à accorder ces autorisations lorsque vous cliquez sur **Créer** ou **Mettre à jour**. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild) ».

## Autorisation d’une prébuild à accéder en écriture à des ressources externes

Si votre projet a besoin d’un accès en écriture sur les ressources ou si les ressources externes résident dans un dépôt avec un propriétaire autre que celui du dépôt pour lequel vous créez une configuration de prébuild, vous pouvez utiliser un {% data variables.product.pat_generic %} pour accorder cet accès.

Vous devez créer un compte personnel et utiliser ce compte pour créer un {% data variables.product.pat_v1 %} avec les étendues appropriées.

1. Créez un compte personnel sur {% data variables.product.prodname_dotcom %}. 
   
   {% warning %}
   
   **Avertissement** : Même si vous pouvez générer le {% data variables.product.pat_v1 %} en utilisant votre compte personnel existant, nous vous recommandons vivement de créer un autre compte doté uniquement d’un accès aux dépôts cibles nécessaires pour votre scénario. En effet, l’autorisation `repository` du jeton d’accès octroie un accès à tous les dépôts auxquels le compte a accès. Pour plus d’informations, consultez « [Inscription à un nouveau compte GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account) » et « [Durcissement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access) ».
   
   {% endwarning %}
1. Octroyez au nouveau compte un accès en lecture aux dépôts nécessaires. Pour plus d’informations, consultez « [Gestion de l’accès d’une personne à un dépôt d’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository) ».
1. En étant connecté au nouveau compte, créez un {% data variables.product.pat_v1 %} avec l’étendue `repo`. Éventuellement, si la prébuild a besoin de télécharger des packages à partir de {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, sélectionnez aussi l’étendue `read:packages`. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

   ![Étendues « repo » et « packages » sélectionnées pour un {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   Si la prébuild utilise un package issu de {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, vous avez besoin soit d’octroyer au nouveau compte un accès au package, soit de configurer le package de sorte à ce qu’il hérite des autorisations d’accès du dépôt dont vous créez la prébuild. Pour plus d’informations, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ».   
{% ifversion ghec %}1. Autorisez l’utilisation du jeton avec une authentification unique (SSO) SAML afin que ce dernier puisse accéder aux dépôts appartenant à des organisations pour lesquelles l’authentification unique est activée. Pour plus d’informations, consultez « [Autorisation de l’utilisation d’un {% data variables.product.pat_generic %} avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) ».

   ![Bouton permettant de configurer l’authentification SSO pour un {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Copiez la chaîne du jeton. Vous allez l’attribuer à un secret de dépôt {% data variables.product.prodname_codespaces %}.
1. Reconnectez-vous au compte qui dispose d’un accès administrateur au dépôt. 
1. Dans le dépôt pour lequel vous voulez créer des prébuilds {% data variables.product.prodname_github_codespaces %}, créez un secret de dépôt {% data variables.product.prodname_codespaces %} appelé `CODESPACES_PREBUILD_TOKEN`, en lui donnant la valeur du jeton que vous avez créé et copié. Pour plus d’informations, consultez « [Gestion des secrets chiffrés de votre dépôt et de votre organisation pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository) ».

Le {% data variables.product.pat_generic %} est utilisé pour toutes les prébuilds ultérieures créées pour votre dépôt. Contrairement à d’autres secrets de dépôt {% data variables.product.prodname_codespaces %}, le secret `CODESPACES_PREBUILD_TOKEN` est utilisé uniquement pour créer la prébuild. Il n’est pas disponible pour être utilisé dans des codespaces créés à partir de votre dépôt.

## Pour aller plus loin

- « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds) »
- « [Résolution des problèmes liés aux prébuilds](/codespaces/troubleshooting/troubleshooting-prebuilds) »
