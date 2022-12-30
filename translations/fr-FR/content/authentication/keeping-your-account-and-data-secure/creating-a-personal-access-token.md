---
title: Création d’un jeton d’accès personnel
intro: 'Vous pouvez créer un {% data variables.product.pat_generic %} à utiliser à la place d’un mot de passe avec la ligne de commande ou à l’aide de l’API.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107748'
---
{% warning %}

**Avertissement** : Considérez vos jetons d’accès comme des mots de passe.

Pour accéder à {% data variables.product.company_short %} à partir de la ligne de commande, utilisez {% data variables.product.prodname_cli %} ou le [Gestionnaire d’informations d’identification Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) au lieu de créer un {% data variables.product.pat_generic %}.

Quand vous utilisez un {% data variables.product.pat_generic %} dans un script, stockez votre jeton en tant que secret, et exécutez votre script via {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».{%- ifversion ghec or fpt %} Vous pouvez également stocker votre jeton en tant que secret {% data variables.product.prodname_codespaces %}, et exécuter votre script dans {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».{% endif %}

Si ces options ne sont pas possibles, envisagez d’utiliser un autre service comme l’[interface CLI 1Password](https://developer.1password.com/docs/cli/secret-references/) pour stocker votre jeton de manière sécurisée.

{% endwarning %}

## À propos des {% data variables.product.pat_generic %}

Les {% data variables.product.pat_generic_caps %} représentent une alternative à l’utilisation de mots de passe pour l’authentification auprès de {% data variables.product.product_name %} durant l’utilisation de l’[API GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) ou de la [ligne de commande](#using-a-token-on-the-command-line). Les {% data variables.product.pat_generic_caps %} permettent l’accès aux ressources {% data variables.product.company_short %} en votre nom. Pour permettre l’accès aux ressources au nom d’une organisation ou dans le cadre d’intégrations de longue durée, vous devez utiliser une {% data variables.product.prodname_github_app %}. Pour plus d’informations, consultez « [À propos des applications](/developers/apps/getting-started-with-apps/about-apps) ».

{% ifversion pat-v2 %}

{% data variables.product.company_short %} prend en charge deux types de {% data variables.product.pat_generic %} : les {% data variables.product.pat_v2 %} et les {% data variables.product.pat_v1_plural %}. {% data variables.product.company_short %} vous recommande d’utiliser des {% data variables.product.pat_v2 %} à la place de {% data variables.product.pat_v1_plural %} autant que possible. Les {% data variables.product.pat_v2_caps %} présentent plusieurs avantages au niveau de la sécurité par rapport aux {% data variables.product.pat_v1_plural %} :

- Chaque jeton ne peut accéder qu’aux ressources appartenant à un seul utilisateur ou une seule organisation.
- Chaque jeton peut uniquement accéder à des dépôts spécifiques.
- Chaque jeton se voit octroyer des autorisations spécifiques, qui offrent plus de contrôle que les étendues octroyées aux {% data variables.product.pat_v1_plural %}.
- Chaque jeton doit avoir une date d’expiration.
- Les propriétaires d’organisation peuvent imposer une approbation à tous les {% data variables.product.pat_v2 %} ayant accès aux ressources de l’organisation.{% ifversion ghec or ghes or ghae %}
- Les propriétaires d’entreprise peuvent imposer une approbation pour tous les {% data variables.product.pat_v2 %} ayant accès aux ressources dans les organisations appartenant à l’entreprise.{% endif %}

De plus, les propriétaires d’organisation peuvent restreindre l’accès des {% data variables.product.pat_v1 %} à leur organisation{% ifversion ghec or ghes or ghae %}, et les propriétaires d’entreprise peuvent restreindre l’accès des {% data variables.product.pat_v1 %} à l’entreprise ou aux organisations appartenant à l’entreprise{% endif %}.

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## Création d’un {% data variables.product.pat_v2 %}

{% note %}

**Remarque** : {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Vérifiez votre adresse e-mail](/github/getting-started-with-github/verifying-your-email-address), si elle n’a pas encore été vérifiée.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Jetons affinés**.
1. Cliquez sur **Générer un nouveau jeton**.
1. Le cas échéant, sous **Nom du jeton**, entrez un nom pour le jeton.
1. Sous **Expiration**, sélectionnez une date d’expiration pour le jeton.
1. Le cas échéant, sous **Description**, ajoutez une note pour décrire la finalité du jeton.
1. Sous **Propriétaire de ressource**, sélectionnez un propriétaire de ressource. Le jeton peut uniquement accéder aux ressources appartenant au propriétaire de ressource sélectionné. Les organisations dont vous êtes membre n’apparaissent pas, sauf si l’organisation a opté pour les {% data variables.product.pat_v2 %}. Pour plus d’informations, consultez « [Définition d’une stratégie de {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».{% ifversion ghec or ghae %} Vous devrez peut-être effectuer une authentification unique (SSO) SAML si l’organisation sélectionnée l’impose, et si vous n’avez pas encore de session SAML active.{% endif %}
1. Le cas échéant, si le propriétaire de ressource est une organisation qui impose une approbation pour les {% data variables.product.pat_v2 %}, dans la zone située sous le propriétaire de ressource, entrez une justification de la demande.
1. Sous **Accès au dépôt**, sélectionnez les dépôts auxquels vous souhaitez que le jeton accède. Vous devez choisir l’accès minimal au dépôt répondant à vos besoins. Les jetons incluent toujours un accès en lecture seule à tous les dépôts publics sur GitHub.
1. Si vous avez sélectionné **Sélectionner uniquement les dépôts** à l’étape précédente, sous la liste déroulante **Dépôts sélectionnés**, sélectionnez les dépôts auxquels vous souhaitez que le jeton accède.
1. Sous **Autorisations**, sélectionnez les autorisations à octroyer au jeton. Selon les informations que vous avez spécifiées pour le propriétaire de la ressource et l’accès au dépôt, il existe des autorisations relatives au dépôt, à l’organisation et au compte. Vous devez choisir les autorisations minimales nécessaires à vos besoins. Pour plus d’informations sur les autorisations nécessaires à chaque opération d’API REST, consultez « [Autorisations nécessaires pour les {% data variables.product.pat_v2 %}](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens) ».
1. Cliquez sur **Générer un jeton**.

Si vous avez sélectionné une organisation en tant que propriétaire de ressource et si cette organisation impose une approbation pour les {% data variables.product.pat_v2 %}, votre jeton est marqué comme étant `pending` jusqu’à ce qu’il soit examiné par un administrateur d’organisation. Votre jeton ne peut pas lire les ressources publiques tant qu’il n’a pas été approuvé. Si vous êtes propriétaire de l’organisation, votre demande est automatiquement approuvée. Pour plus d’informations, consultez « [Vérification et révocation des {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization) ».

{% endif %}

## Création d’un {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

**Remarque** : Les propriétaires d’organisation peuvent restreindre l’accès des {% data variables.product.pat_v1 %} à leur organisation. Si vous essayez d’utiliser un {% data variables.product.pat_v1 %} pour accéder aux ressources d’une organisation qui a désactivé l’accès des {% data variables.product.pat_v1 %}, votre requête échouera en indiquant la réponse 403. À la place, vous devez utiliser une {% data variables.product.prodname_github_app %}, une {% data variables.product.prodname_oauth_app %} ou un {% data variables.product.pat_v2 %}.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Remarque** : Votre {% data variables.product.pat_v1 %} peut accéder à tous les dépôts auxquels vous avez accès. {% data variables.product.company_short %} vous recommande d’utiliser à la place des {% data variables.product.pat_v2 %}, que vous pouvez restreindre à des dépôts spécifiques. Les {% data variables.product.pat_v2_caps %} vous permettent également de spécifier des autorisations précises à la place de larges étendues.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Vérifiez votre adresse e-mail](/github/getting-started-with-github/verifying-your-email-address), si elle n’a pas encore été vérifiée.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Jetons (classique)** .{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1. Sélectionnez **Générer un nouveau jeton**, puis cliquez sur **Générer un nouveau jeton (classique)** .{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. Donnez à votre jeton un nom descriptif.
   ![Champ de description du jeton](/assets/images/help/settings/token_description.png)
6. Pour attribuer à votre jeton un délai d’expiration, sélectionnez le menu déroulant **Expiration**, puis cliquez sur une valeur par défaut ou utilisez le sélecteur de date.
   ![Champ d’expiration du jeton](/assets/images/help/settings/token_expiration.png)
7. Sélectionnez les étendues à octroyer à ce jeton. Pour utiliser votre jeton afin d’accéder aux dépôts à partir de la ligne de commande, sélectionnez **dépôt**. Un jeton sans étendues attribuées peut accéder aux informations publiques uniquement. Pour plus d’informations, consultez « [Étendues disponibles](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes) ».
   {% ifversion fpt or ghes or ghec %} ![Sélection des étendues de jeton](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Sélection des étendues de jeton](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Cliquez sur **Générer un jeton**.
   ![Bouton Générer un jeton](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Jeton créé](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Jeton créé](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Jeton créé](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. Pour utiliser votre jeton afin d’accéder aux ressources appartenant à une organisation qui utilise l’authentification unique SAML, autorisez ce jeton. Pour plus d’informations, consultez « [Autorisation de l’utilisation d’un {% data variables.product.pat_generic %} avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}{% endif %}

## Utilisation d’un jeton sur la ligne de commande

{% data reusables.command_line.providing-token-as-password %}

Les {% data variables.product.pat_generic_caps %} peuvent uniquement être utilisés pour les opérations Git HTTPS. Si votre dépôt utilise une URL distante SSH, vous devez [faire passer le dépôt distant de SSH à HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Si vous n’êtes pas invité à entrer votre nom d’utilisateur et votre mot de passe, il se peut que vos informations d’identification soient en cache sur votre ordinateur. Vous pouvez [mettre à jour vos informations d’identification dans le trousseau](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) pour remplacer votre ancien mot de passe par le jeton.

Au lieu d’entrer manuellement votre {% data variables.product.pat_generic %} pour chaque opération Git HTTPS, vous pouvez mettre en cache votre {% data variables.product.pat_generic %} avec un client Git. Git stocke temporairement vos informations d’identification en mémoire jusqu’à ce qu’un intervalle d’expiration soit écoulé. Vous pouvez également stocker le jeton dans un fichier texte brut que Git peut lire avant chaque requête. Pour plus d’informations, consultez « [Mise en cache de vos informations d’identification {% data variables.product.prodname_dotcom %} dans Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) ».

## Pour aller plus loin

- « [À propos de l’authentification auprès de GitHub](/github/authenticating-to-github/about-authentication-to-github) »
- « [Expiration et révocation des jetons](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation) »
