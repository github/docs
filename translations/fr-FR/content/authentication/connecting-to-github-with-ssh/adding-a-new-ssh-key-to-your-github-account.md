---
title: Ajout d’une nouvelle clé SSH à votre compte GitHub
intro: 'Pour configurer votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} de façon à utiliser votre clé SSH nouvelle (ou existante), vous devez aussi ajouter cette dernière à votre compte.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 041d72c2cf48d6d5b8ce0e6b609b0982b54f2e97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653305'
---
## À propos de l’ajout de clés SSH à votre compte

{% data reusables.ssh.about-ssh %} Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) ».

{% ifversion ssh-commit-verification %}Vous pouvez également utiliser SSH pour signer des commits et des étiquettes. Pour plus d’informations sur la signature de commit, consultez « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) ».{% endif %}

Après avoir généré une paire de clés SSH, vous devez ajouter la clé publique dans {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} afin d’activer l’accès SSH pour votre compte.

## Prérequis

Avant d’ajouter une nouvelle clé SSH à votre compte dans {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, effectuez les étapes suivantes.

1. Recherchez les clés SSH existantes. Pour plus d’informations, consultez « [Vérification des clés SSH existantes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys) ».
1. Générez une nouvelle clé SSH et ajoutez-la à l’agent SSH de votre ordinateur. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

## Ajout d’une nouvelle clé SSH à votre compte

Après avoir ajouté une nouvelle clé d’authentification SSH à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, vous pouvez reconfigurer n’importe quel dépôt local pour utiliser SSH. Pour plus d’informations, consultez « [Faire passer les URL de dépôt distant de HTTPS à SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh) ».

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Cliquez sur **Nouvelle clé SSH** ou **Ajouter une clé SSH**.
{% ifversion ssh-commit-verification %} ![Bouton Clé SSH](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![Bouton Clé SSH](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. Dans le champ « Titre », ajoutez une étiquette descriptive pour la nouvelle clé. Par exemple, si vous utilisez un ordinateur portable personnel, vous pouvez nommer cette clé « Ordinateur portable personnel ».
{% ifversion ssh-commit-verification %}
6. Sélectionnez le type de clé : authentification ou signature. Pour plus d’informations sur la signature de commit, consultez « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) ».
{% endif %}
7. Collez votre clé dans le champ « Clé ».
{% ifversion ssh-commit-verification %} ![Le champ de clé](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![Le champ de clé](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. Cliquez sur **Ajouter une clé SSH**.
  ![Bouton Ajouter une clé](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour pouvoir utiliser {% data variables.product.prodname_cli %} afin d’ajouter une clé SSH à votre compte, vous devez vous authentifier auprès de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez [`gh auth login`](https://cli.github.com/manual/gh_auth_login) dans la documentation {% data variables.product.prodname_cli %}.

{% ifversion ssh-commit-verification %} Actuellement, vous pouvez uniquement utiliser {% data variables.product.prodname_cli %} pour ajouter des clés d’authentification SSH. Vous ne pouvez pas ajouter de clés de signature SSH.{% endif %}

Pour ajouter une clé d’authentification SSH à votre compte GitHub, utilisez la sous-commande `ssh-key add` en spécifiant votre clé publique.

```shell
gh ssh-key add <em>key-file</em>
```

Pour inclure un titre pour la nouvelle clé, utilisez l’indicateur `-t` ou `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Si vous avez généré votre clé SSH en suivant les instructions fournies dans « [Génération d’une nouvelle clé SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) », vous pouvez ajouter la clé à votre compte avec cette commande.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Pour aller plus loin

- « [Autorisation d’une clé SSH pour l’utiliser avec l’authentification unique SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) » {% endif %}
