---
title: Utilisation des phrases secrètes de clé SSH
intro: Vous pouvez sécuriser vos clés SSH et configurer un agent d’authentification pour vous éviter d’avoir à entrer votre phrase secrète chaque fois que vous utilisez vos clés SSH.
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 5ddacfa052b866fe1cbd601caa8a1ff9ab6934fd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409114'
---
## À propos des phrases secrètes pour les clés SSH

Avec une clé SSH, si quelqu’un a accès à votre ordinateur, il peut obtenir l’accès à tous les systèmes utilisant cette clé. Pour ajouter une couche de sécurité, vous pouvez ajouter une phrase secrète à votre clé SSH. Pour éviter d’entrer la phrase secrète chaque fois que vous vous connectez, vous pouvez enregistrer en toute sécurité votre phrase secrète dans l’agent SSH.

## Ajout ou modification d’une phrase secrète

Vous pouvez modifier la phrase secrète d’une clé privée existante sans regénérer la paire de clés en tapant la commande suivante :

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Si votre clé a déjà une phrase secrète, vous êtes invité à l’entrer avant de pouvoir définir une nouvelle phrase secrète.

{% windows %}

## Lancement automatique de `ssh-agent` sur Git pour Windows

Vous pouvez exécuter `ssh-agent` automatiquement quand vous ouvrez un interpréteur de commandes Bash ou Git. Copiez les lignes suivantes et collez-les dans votre fichier `~/.profile` ou `~/.bashrc` dans l’interpréteur de commandes Git :

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Si votre clé privée n’est pas stockée à l’un des emplacements par défaut (comme `~/.ssh/id_rsa`), vous devez indiquer à votre agent d’authentification SSH où la trouver. Pour ajouter votre clé à ssh-agent, tapez `ssh-add ~/path/to/my_key`. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) ».

{% tip %}

**Conseil :** Si vous le souhaitez, vous pouvez configurer `ssh-agent` pour qu’il oublie votre clé après un certain temps en exécutant `ssh-add -t <seconds>`.

{% endtip %}

Maintenant, quand vous exécutez Git Bash pour la première fois, vous êtes invité à entrer votre phrase secrète :

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

Le processus `ssh-agent` poursuit son exécution jusqu’à ce que vous vous déconnectiez, arrêtiez votre ordinateur ou tuiez le processus.

{% endwindows %}

{% mac %}

## Enregistrement de votre phrase secrète dans le trousseau

Sur Mac OS X Leopard et jusqu’à Mac OS X El Capitan, ces fichiers de clés privées par défaut sont gérés automatiquement :

- *.ssh/id_rsa*
- *.ssh/identity*

La première fois que vous utilisez votre clé, vous êtes invité à entrer votre phrase secrète. Si vous choisissez d’enregistrer la phrase secrète avec votre trousseau, vous n’aurez pas à l’entrer à nouveau.

Sinon, vous pouvez stocker votre phrase secrète dans le trousseau quand vous ajoutez votre clé à ssh-agent. Pour plus d’informations, consultez « [Ajout de votre clé SSH à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) ».

{% endmac %}
