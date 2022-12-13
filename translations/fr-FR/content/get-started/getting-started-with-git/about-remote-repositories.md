---
title: À propos des référentiels distants
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'L’approche collaborative de GitHub du développement dépend de la publication de commits de votre dépôt local sur {% data variables.product.product_name %} pour que d’autres personnes puissent voir, récupérer (fetch) et mettre à jour.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130889'
---
## À propos des référentiels distants

URL distante est le terme que Git utilise pour désigner « l’emplacement où votre code est stocké ». Cette URL peut être votre référentiel sur GitHub ou sur la duplication d’un autre utilisateur, ou même sur un serveur complètement différent.

Vous ne pouvez envoyer qu’à deux types d’adresses URL :

* Une URL HTTPS, comme `https://{% data variables.command_line.backticks %}/user/repo.git`
* Une URL SSH, comme `git@{% data variables.command_line.backticks %}:user/repo.git`

Git associe une URL distante avec un nom, et votre référentiel distant par défaut est généralement appelé `origin`.

## Création de référentiels distants

Vous pouvez utiliser la commande `git remote add` pour faire correspondre une URL distante avec un nom.
Par exemple, vous entreriez ce qui suit dans la ligne de commande :

```shell
git remote add origin &lt;REMOTE_URL>
```

Cela associe le nom `origin` à la `REMOTE_URL`.

Vous pouvez utiliser la commande `git remote set-url` pour [modifier l’URL d’un référentiel distant](/get-started/getting-started-with-git/managing-remote-repositories).

## Choix d’une URL pour votre référentiel distant

Il existe plusieurs façons de cloner des dépôts disponibles sur {% data variables.location.product_location %}.

Lorsque vous affichez un référentiel lors de la connexion à votre compte, les URL que vous pouvez utiliser pour cloner le projet sur votre ordinateur sont disponibles sous les détails du référentiel.

Pour plus d’informations sur la définition ou la modification de votre URL distante, consultez « [Gestion des référentiels distants](/get-started/getting-started-with-git/managing-remote-repositories) ».

## Clonage avec des URL HTTPS

Les URL de clonage `https://` sont disponibles sur tous les référentiels, quelle que soit la visibilité. Les URL de clone `https://` fonctionnent même si vous êtes derrière un pare-feu ou un proxy.

Lorsque vous `git clone`, `git fetch`, `git pull` ou `git push` dans un référentiel distant à l’aide d’URL HTTPS en ligne de commande, Git vous demande vos nom d’utilisateur et mot de passe {% data variables.product.product_name %}. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Conseils** :
- Vous pouvez utiliser un assistant d’informations d’identification pour que Git mémorise vos informations d’identification {% data variables.product.prodname_dotcom %} chaque fois qu’il communique avec {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Mise en cache de vos informations d’identification {% data variables.product.prodname_dotcom %} dans Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) ».
- Pour cloner un référentiel sans s’authentifier auprès de {% data variables.product.product_name %} sur la ligne de commande, vous pouvez utiliser {% data variables.product.prodname_desktop %} pour cloner à la place. Pour plus d’informations, consultez « [Clonage d’un dépôt de {% data variables.product.prodname_dotcom %} vers {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop) ».

{% endtip %}

 {% ifversion fpt or ghec %} Si vous préférez utiliser SSH, mais que vous ne pouvez pas vous connecter via le port 22, vous pouvez utiliser SSH via le port HTTPS. Pour plus d’informations, consultez « [Utilisation de SSH sur le port HTTPS](/github/authenticating-to-github/using-ssh-over-the-https-port) ». {% endif %}

## Clonage avec des URL SSH

Les URL SSH fournissent l’accès à un référentiel Git via SSH, un protocole sécurisé. Pour utiliser ces URL, vous devez générer une paire de clés SSH sur votre ordinateur et ajouter la clé **publique** à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Pour plus d’informations, consultez « [Connexion à {% data variables.product.prodname_dotcom %} avec SSH](/github/authenticating-to-github/connecting-to-github-with-ssh) ».

Lorsque vous `git clone`, `git fetch`, `git pull` ou `git push` vers un référentiel distant à l’aide d’URL SSH, vous êtes invité à entrer un mot de passe et vous devez fournir la phrase secrète de votre clé SSH. Pour plus d’informations, consultez « [Utilisation de phrases secrètes de clé SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases) ».

{% ifversion fpt or ghec %} Si vous accédez à une organisation qui utilise l’authentification unique SAML, vous devez autoriser votre clé SSH à accéder à l’organisation avant de vous authentifier. Pour plus d’informations, consultez « [À propos de l’authentification avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on) » et « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}

{% tip %}

**Conseil** : Vous pouvez utiliser une URL SSH pour cloner un référentiel sur votre ordinateur ou pour déployer votre code sur des serveurs de production. Vous pouvez également utiliser le transfert de l’agent SSH avec votre script de déploiement pour éviter de gérer les clés sur le serveur. Pour plus d’informations, consultez « [Utilisation du transfert d’agent SSH](/developers/overview/using-ssh-agent-forwarding) ».

{% endtip %}

## Clonage avec {% data variables.product.prodname_cli %}

Vous pouvez également installer {% data variables.product.prodname_cli %} pour utiliser les workflows {% data variables.product.product_name %} dans votre terminal. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

{% ifversion not ghae %}
## Clonage avec Subversion

Vous pouvez également utiliser un client [Subversion](https://subversion.apache.org/) pour accéder à n’importe quel référentiel sur {% data variables.product.prodname_dotcom %}. Subversion offre un ensemble de fonctionnalités différent de Git. Pour plus d’informations, consultez « [Quelles sont les différences entre Subversion et Git ?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git) »

Vous pouvez également accéder aux référentiels sur {% data variables.product.prodname_dotcom %} à partir des clients Subversion. Pour plus d’informations, consultez « [Prise en charge des clients Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients) ».
{% endif %}
