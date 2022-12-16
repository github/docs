---
title: "Erreur\_: Type de clé inconnu"
intro: 'Cette erreur signifie que le type de clé SSH que vous avez utilisé n’a pas été reconnu ou n’est pas pris en charge par votre client SSH. '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065897'
---
## À propos de l’erreur `unknown key type`

Quand vous générez une nouvelle clé SSH, vous pouvez recevoir une erreur `unknown key type` si votre client SSH ne prend pas en charge le type de clé que vous spécifiez.{% mac %}Pour résoudre ce problème sur macOS, vous pouvez mettre à jour votre client SSH ou installer un nouveau client SSH.

## Prérequis

Homebrew doit être installé. Pour plus d’informations, consultez le [guide d’installation](https://docs.brew.sh/Installation) dans la documentation Homebrew.

## Résolution du problème

{% warning %}

**Avertissement :** Si vous installez OpenSSH, votre ordinateur ne pourra pas récupérer les phrases secrètes stockées dans le trousseau Apple. Vous devrez entrer votre phrase secrète ou interagir avec votre clé de sécurité matérielle chaque fois que vous vous authentifierez avec SSH auprès de {% data variables.product.prodname_dotcom %} ou d’un autre service web.

Si vous supprimez OpenSSH, les phrases secrètes stockées dans votre trousseau sont à nouveau récupérables. Vous pouvez supprimer OpenSSH en entrant la commande `brew uninstall openssh` dans Terminal.

{% endwarning %}

1. Ouvrez Terminal.
2. Entrez la commande `brew install openssh`.
3. Quittez et relancez Terminal.
4. Réessayez la procédure de génération d’une nouvelle clé SSH. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key) ».

{% endmac %}{% linux %}Pour résoudre ce problème sur Linux, utilisez le gestionnaire de package pour votre distribution Linux afin d’installer une nouvelle version d’OpenSSH ou compilez une nouvelle version à partir de la source. Si vous installez une autre version d’OpenSSH, la capacité d’autres applications à s’authentifier par le biais de SSH peut être affectée. Pour plus d’informations, consultez la documentation de votre distribution.{% endlinux %}
