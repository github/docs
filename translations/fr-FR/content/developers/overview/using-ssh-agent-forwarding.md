---
title: Utilisation du transfert d’agent SSH
intro: 'Pour simplifier le déploiement sur un serveur, vous pouvez configurer le transfert de l’agent SSH pour utiliser en toute sécurité des clés SSH locales.'
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: ca827e1fc70288acc2da5c3a28ecfd71ece4a504
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996256'
---
Le transfert d’agent SSH peut être utilisé pour effectuer le déploiement sur un serveur simple.  Il vous permet d’utiliser vos clés SSH locales au lieu de laisser des clés (sans phrase secrète !) sur votre serveur.

Si vous avez déjà configuré une clé SSH pour interagir avec {% data variables.product.product_name %}, vous êtes probablement familiarisé avec `ssh-agent`. Il s’agit d’un programme qui s’exécute en arrière-plan et garde votre clé chargée en mémoire, de sorte que vous n’avez pas besoin d’entrer votre phrase secrète chaque fois que vous devez utiliser la clé. Ce qui est bien c’est que vous pouvez choisir de laisser les serveurs accéder à votre `ssh-agent` local comme s’ils s’exécutaient déjà sur le serveur. C’est comme si vous demandiez à un ami d’entrer son mot de passe pour pouvoir utiliser son ordinateur.

Consultez le [Guide Tech Tips de Steve Friedl][tech-tips] pour obtenir une explication plus détaillée du transfert d’agent SSH.

## Configuration du transfert d’agent SSH

Vérifiez que votre propre clé SSH est configurée et fonctionne. Vous pouvez utiliser [notre guide sur la génération de clés SSH][generating-keys] si vous ne l’avez pas encore fait.

Vous pouvez tester le fonctionnement de votre clé locale en entrant `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` dans le terminal :

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

C’est bien parti. Configurons SSH pour autoriser le transfert d’agent sur votre serveur.

1. Dans votre éditeur de texte préféré, ouvrez le fichier sur `~/.ssh/config`. Si ce fichier n’existe pas, créez-le en entrant `touch ~/.ssh/config` dans le terminal.

2. Entrez le texte suivant dans le fichier, en remplaçant `example.com` par le nom de domaine ou l’IP de votre serveur :

        Host example.com
          ForwardAgent yes

{% warning %}

**Avertissement :** Vous pouvez être tenté d’utiliser un caractère générique de type `Host *` pour appliquer ce paramètre à toutes les connexions SSH. Ce n’est pas vraiment une bonne idée, car dans ce cas vous partagez vos clés SSH locales avec *tous* les serveurs sur lesquels vous avez une connexion SSH. Ils n’ont alors pas d’accès direct aux clés, mais ils peuvent les utiliser *comme si c’était vous* pendant l’établissement de la connexion. **Vous devez uniquement ajouter les serveurs que vous approuvez et que vous voulez utiliser avec le transfert d’agent.**

{% endwarning %}

## Test du transfert d’agent SSH

Pour tester le transfert d’agent sur votre serveur, vous pouvez ouvrir une connexion SSH sur votre serveur et exécuter `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` une fois de plus.  Si tout se passe bien, vous obtenez la même invite que celle que vous avez eu localement.

Si vous n’êtes pas sûr que votre clé locale est utilisée, vous pouvez également inspecter la variable `SSH_AUTH_SOCK` sur votre serveur :

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

Si la variable n’est pas définie, le transfert d’agent ne fonctionne pas :

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## Résolution des problèmes de transfert d’agent SSH

Voici quelques éléments à examiner pendant la résolution des problèmes de transfert d’agent SSH.

### Vous devez utiliser une URL SSH pour extraire du code

Le transfert SSH fonctionne uniquement avec les URL SSH, et non avec les URL HTTP(S). Consultez le fichier `.git/config` sur votre serveur et vérifiez que l’URL est une URL de type SSH comme ci-dessous :

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### Vos clés SSH doivent fonctionner localement

Pour que vos clés fonctionnent avec le transfert d’agent, elles doivent d’abord fonctionner localement. [Notre guide sur la génération de clés SSH][generating-keys] peut vous aider à configurer vos clés SSH localement.

### Votre système doit autoriser le transfert d’agent SSH

Parfois, les configurations système interdisent le transfert d’agent SSH. Vous pouvez vérifier si un fichier de configuration système est utilisé en entrant la commande suivante dans le terminal :

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

Dans l’exemple ci-dessus, le fichier `~/.ssh/config` est chargé en premier, puis `/etc/ssh_config` est lu.  Nous pouvons inspecter ce fichier pour voir s’il remplace nos options en exécutant les commandes suivantes :

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

Dans cet exemple, notre fichier `/etc/ssh_config` indique spécifiquement `ForwardAgent no`, ce qui est un moyen de bloquer le transfert d’agent. La suppression de cette ligne dans le fichier doit permettre de faire fonctionner le transfert d’agent une fois de plus.

### Votre serveur doit autoriser le transfert d’agent SSH sur les connexions entrantes

Le transfert d’agent peut également être bloqué sur votre serveur. Vous pouvez vérifier que le transfert d’agent est autorisé en ouvrant une connexion SSH sur le serveur et en exécutant `sshd_config`. La sortie de cette commande doit indiquer que `AllowAgentForwarding` est défini.

### Votre `ssh-agent` local doit être en cours d’exécution

Sur la plupart des ordinateurs, le système d’exploitation lance `ssh-agent` automatiquement pour vous.  Toutefois, sur Windows, vous devez le faire manuellement. Nous avons [un guide sur la façon de démarrer `ssh-agent` chaque fois que vous ouvrez Git Bash][autolaunch-ssh-agent].

Pour vérifier que `ssh-agent` s’exécute sur votre ordinateur, tapez la commande suivante dans le terminal :

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### Votre clé doit être disponible pour `ssh-agent`

Vous pouvez vérifier que votre clé est visible pour `ssh-agent` en exécutant la commande suivante :

```shell
ssh-add -L
```

Si la commande indique qu’aucune identité n’est disponible, vous devez ajouter votre clé :

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

Sur macOS, `ssh-agent` « oublie » cette clé chaque fois qu’il est redémarré. Toutefois, vous pouvez importer vos clés SSH dans le trousseau avec cette commande :

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
