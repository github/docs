---
title: Utilisation de SSH sur le port HTTPS
intro: 'Parfois, les pare-feu refusent complètement d’autoriser les connexions SSH.  Si vous n’avez pas la possibilité d’utiliser le [clonage HTTPS avec la mise en cache des informations d’identification](/github/getting-started-with-github/caching-your-github-credentials-in-git), vous pouvez tenter un clonage via la une connexion SSH établie sur le port HTTPS.  Si la plupart des règles de pare-feu autorisent cela, les serveurs proxy peuvent néanmoins interférer.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190321'
---
{% tip %}

**Utilisateurs de {% data variables.product.prodname_ghe_server %}**  : l’accès à {% data variables.product.prodname_ghe_server %} via SSH sur le port HTTPS n’est pas pris en charge.

{% endtip %}

Pour tester s’il est possible d’utiliser SSH sur le port HTTPS, exécutez cette commande SSH :

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Remarque** : Le nom d’hôte pour le port 443 est `ssh.{% data variables.command_line.backticks %}`, pas `{% data variables.command_line.backticks %}`.

{% endnote %}

Si cela a fonctionné, parfait ! Sinon, vous devrez peut-être [suivre notre guide de résolution des problèmes](/articles/error-permission-denied-publickey).

À présent, pour cloner le dépôt, vous pouvez exécuter la commande suivante :

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Activation des connexions SSH sur HTTPS

Si vous êtes en mesure de vous connecter en mode SSH à `git@ssh.{% data variables.command_line.backticks %}` sur le port 443, vous pouvez remplacer vos paramètres SSH afin que toute connexion à {% data variables.location.product_location %} s’exécute via ce serveur et ce port.

Pour définir cela dans votre fichier de configuration SSH, modifiez le fichier à l’emplacement `~/.ssh/config`, puis ajoutez cette section :

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Vous pouvez tester que cela fonctionne en vous reconnectant à {% data variables.location.product_location %} :

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Mise à jour des hôtes connus

La première fois que vous interagissez avec GitHub après avoir basculé sur le port 443, vous pouvez recevoir un message d’avertissement indiquant que l’hôte est introuvable dans `known_hosts`ou qu’il a été trouvé avec un autre nom.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Vous pouvez répondre « oui » à cette question sans problème, en supposant que l’empreinte digitale SSH correspond à l’une des empreintes digitales publiées de GitHub. Pour obtenir la liste des empreintes digitales, consultez « [Empreintes digitales des clés SSH de Github](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) ».
