---
title: À propos de SSH
intro: 'Le protocole SSH vous permet de vous connecter et de vous authentifier auprès de serveurs et de services distants. Avec des clés SSH, vous pouvez vous connecter à {% data variables.product.product_name %} sans fournir votre nom d’utilisateur et votre {% data variables.product.pat_generic %} à chaque visite.{% ifversion ssh-commit-verification %} Vous pouvez également utiliser une clé SSH pour signer des commits.{% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118978'
---
{% data reusables.ssh.about-ssh %} Pour plus d’informations sur SSH, consultez [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) sur Wikipedia.

Quand vous configurez SSH, vous devez générer une nouvelle clé SSH privée et l’ajouter à l’agent SSH. Vous devez aussi ajouter la clé SSH publique à votre compte sur {% data variables.product.product_name %} avant de l’utiliser pour vous authentifier{% ifversion ssh-commit-verification %} ou signer des commits{% endif %}. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) »{% ifversion ssh-commit-verification %}, {% else %} et{% endif %} « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %} » et « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification){% endif %} ».

Vous pouvez sécuriser davantage votre clé SSH à l’aide d’une clé de sécurité matérielle. Ceci nécessite que la clé de sécurité matérielle physique soit attachée à votre ordinateur quand la paire de clés est utilisée pour l’authentification avec SSH. Vous pouvez également sécuriser votre clé SSH en ajoutant votre clé à ssh-agent et en utilisant une phrase secrète. Pour plus d’informations, consultez « [Utilisation de phrases secrètes de clé SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases) ».

{% ifversion fpt or ghec %}Pour utiliser votre clé SSH avec un dépôt appartenant à une organisation qui utilise l’authentification unique SAML, vous devez autoriser la clé. Pour plus d’informations, consultez « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}{% endif %}

Pour assurer la sécurité du compte, vous pouvez consulter régulièrement votre liste de clés SSH et révoquer toutes les clés non valides ou compromises. Pour plus d’informations, consultez « [Examen de vos clés SSH](/github/authenticating-to-github/reviewing-your-ssh-keys) ».

{% ifversion fpt or ghec %} Si vous n’avez pas utilisé votre clé SSH depuis un an, {% data variables.product.prodname_dotcom %} supprime automatiquement votre clé SSH inactive par mesure de précaution. Pour plus d’informations, consultez « [Clés SSH supprimées ou manquantes](/articles/deleted-or-missing-ssh-keys) ».
{% endif %}

{% ifversion fpt %} Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent fournir des certificats SSH, que les membres peuvent utiliser pour accéder aux dépôts de cette organisation sans avoir à les ajouter à leur compte sur {% data variables.product.product_name %}. Si vous utilisez un certificat SSH, vous ne pouvez pas l’utiliser pour accéder aux duplications (forks) des dépôts de l’organisation, si ces duplications appartiennent à votre compte personnel. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %} Si vous êtes membre d’une organisation qui fournit des certificats SSH, vous pouvez utiliser votre certificat pour accéder aux dépôts de cette organisation sans l’ajouter à votre compte sur {% data variables.product.product_name %}. Vous ne pouvez pas utiliser votre certificat pour accéder aux duplications des dépôts de l’organisation, si ces duplications appartiennent à votre compte personnel. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) ».
{% endif %}
## Pour aller plus loin

- « [Résolution des problèmes liés à SSH](/articles/troubleshooting-ssh) »
