---
title: Authentification auprès de GitHub
shortTitle: Authentication
intro: 'Vous pouvez accéder de façon sécurisée aux ressources de votre compte dans {% data variables.product.prodname_desktop %} en vous authentifiant auprès de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  fpt: '*'
ms.openlocfilehash: e88d59a03d876b23d8eb72aae7324db64981096f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105273'
---
## À propos de l’authentification

Pour garantir la sécurité de votre compte, vous devez vous authentifier avant de pouvoir utiliser {% data variables.product.prodname_desktop %} et accéder aux ressources sur {% data variables.product.prodname_dotcom %}.

Avant de vous authentifier, {% data reusables.desktop.get-an-account %}

{% mac %}

## Authentification d’un compte sur {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %}
3. À droite de « {% data variables.product.prodname_dotcom_the_website %} », cliquez sur **Connexion**.
  ![Bouton de connexion pour GitHub](/assets/images/help/desktop/mac-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}


{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Une fois que {% data variables.product.prodname_dotcom %} a authentifié votre compte, suivez les invites pour retourner à {% data variables.product.prodname_desktop %}.

## Authentification d’un compte sur {% data variables.product.prodname_ghe_server %}


{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Pour ajouter un compte sur {% data variables.product.product_location_enterprise %}, tapez l’URL de votre instance sous « Adresse de l’enterprise », puis cliquez sur **Continuer**.
  ![Bouton de connexion pour GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png) {% data reusables.desktop.sign-in-browser %}
1. Pour vous authentifier auprès d’un compte {% data variables.product.product_location_enterprise %}, tapez vos informations d’identification de compte, puis cliquez sur **Connexion**.
  ![Bouton de connexion pour {% data variables.product.prodname_ghe_server %} dans le navigateur](/assets/images/help/desktop/enterprise-sign-in-button-browser.png)

  Ou bien, si vous êtes déjà connecté à {% data variables.product.product_location_enterprise %}, suivez les invites pour revenir à {% data variables.product.prodname_desktop %} afin de terminer l’authentification. 

{% endmac %}

{% windows %}

## Authentification d’un compte sur {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %}
3. À droite de « GitHub.com », cliquez sur **Connexion**.
  ![Bouton de connexion pour GitHub](/assets/images/help/desktop/windows-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}

  {% data reusables.user-settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Une fois que {% data variables.product.prodname_dotcom %} a authentifié votre compte, suivez les invites pour retourner à {% data variables.product.prodname_desktop %}.

## Authentification d’un compte sur {% data variables.product.prodname_enterprise %}


{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Pour ajouter un compte {% data variables.product.prodname_enterprise %}, tapez vos informations d’identification sous « Adresse de l’entreprise », puis cliquez sur **Continuer**.
  ![Bouton de connexion pour GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png) {% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

## Résolution des problèmes d’authentification

Si {% data variables.product.prodname_desktop %} rencontre une erreur d’authentification, aidez-vous des messages d’erreur pour résoudre le problème.

Si vous rencontrez une erreur d’authentification, essayez d’abord de vous déconnecter, puis de vous reconnecter à votre compte sur {% data variables.product.prodname_desktop %}.

Pour certaines erreurs, {% data variables.product.prodname_desktop %} affiche un message d’erreur. Si ce n’est pas le cas, ou si vous souhaitez obtenir plus d’informations sur une erreur, consultez les fichiers journaux de {% data variables.product.prodname_desktop %} en suivant les étapes ci-après.

{% mac %}

1. Utilisez le menu déroulant **Aide**, puis cliquez sur **Afficher les journaux dans le Finder**.
  ![Bouton Afficher les journaux dans le Finder](/assets/images/help/desktop/mac-show-logs.png)
2. Sélectionnez le fichier journal correspondant à la date à laquelle vous avez rencontré l’erreur d’authentification.

{% endmac %}

{% windows %}

1. Utilisez le menu déroulant **Aide**, puis cliquez sur **Afficher les journaux dans l’Explorateur**.
  ![Bouton Afficher les journaux dans l’Explorateur](/assets/images/help/desktop/windows-show-logs.png)
2. Sélectionnez le fichier journal correspondant à la date à laquelle vous avez rencontré l’erreur d’authentification.

{% endwindows %}

Passez en revue les informations de résolution des problèmes ci-dessous pour rechercher le message d’erreur rencontré.

### Informations d’identification incorrectes

```shell
Error: Bad credentials
```

Cette erreur signifie qu’il existe un problème avec les informations d’identification stockées pour votre compte.

Pour résoudre le problème, déconnectez-vous de votre compte sur {% data variables.product.prodname_desktop %}, puis reconnectez-vous.

### Jeton vide

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - <username> (empty token)
```

Cette erreur signifie que {% data variables.product.prodname_desktop %} ne trouve pas le jeton d’accès créé dans le trousseau système.

Pour résoudre le problème, déconnectez-vous de votre compte sur {% data variables.product.prodname_desktop %}, puis reconnectez-vous.

### Dépôt introuvable

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

Cette erreur signifie que vous n’avez pas l’autorisation d’accéder au dépôt que vous essayez de cloner.

Pour résoudre le problème, contactez la personne de votre organisation qui gère les autorisations.

### Impossible de lire le dépôt distant

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

Cette erreur signifie que vous n’avez pas de clé SSH valide configurée.

Pour résoudre le problème, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à l’agent SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

### Échec du clonage

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

Cette erreur signifie que le dépôt que vous essayez de cloner contient des sous-modules auxquels vous n’avez pas accès, ou que vous n’avez pas de clé SSH valide configurée.

Si vous n’avez pas accès aux sous-modules, résolvez le problème en contactant la personne qui gère les autorisations du dépôt.

Si vous n’avez pas de clé SSH valide configurée, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à l’agent SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

{% windows %}

### Impossible de lire la réponse AskPass

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

Cette erreur peut être due à plusieurs événements.

Si les entrées de Registre `Command Processor` sont modifiées, {% data variables.product.prodname_desktop %} répond par une erreur `Authentication failed`. Pour vérifier si ces entrées de Registre ont été modifiées, suivez les étapes ci-après.

1. Ouvrez l’éditeur du Registre (`regedit.exe`), puis accédez aux emplacements suivants.
  `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\`
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. Vérifiez s’il existe une valeur `Autorun` à l’un ou l’autre des emplacements.
3. S’il existe une valeur `Autorun`, supprimez-la.

Si votre nom d’utilisateur Windows comporte des caractères Unicode étendus, cela peut entraîner une erreur de réponse AskPass. Pour résoudre le problème, créez un compte d’utilisateur Windows, puis migrez vos fichiers vers ce compte. Pour plus d’informations, consultez « [Créer un compte d’utilisateur dans Windows](https://support.microsoft.com/en-us/help/13951/windows-create-user-account) » au sein de la documentation Microsoft.

{% endwindows %}

## Pour aller plus loin
- « [À propos de l’authentification auprès de GitHub](/github/authenticating-to-github/about-authentication-to-github) »
