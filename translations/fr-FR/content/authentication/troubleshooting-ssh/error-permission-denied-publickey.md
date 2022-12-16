---
title: "Erreur\_: Autorisation refusée (clé publique)"
intro: "L’erreur «\_Autorisation refusée\_» signifie que le serveur a rejeté votre connexion. Il peut y avoir plusieurs raisons à cela, et les exemples les plus courants vous sont expliqués ci-dessous."
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: fdf69ae9777127851e1e0a1e85b5907ebd4a3557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085881'
---
## La commande `sudo` ou les privilèges élevés doivent-ils être utilisés avec Git ?

Vous ne devez pas utiliser la commande `sudo` ou les privilèges élevés, tels que les autorisations d’administrateur, avec Git. Si vous avez une *très bonne raison* d’utiliser `sudo`, assurez-vous que vous l’utilisez avec chaque commande (il est probablement préférable d’utiliser `su` pour obtenir un interpréteur de commandes comme racine à ce stade). Si vous [générez des clés SSH](/articles/generating-an-ssh-key) sans `sudo` puis essayez d’utiliser une commande comme `sudo git push`, vous n’utiliserez pas les mêmes clés que celles que vous avez générées.

## Vérifier que vous vous connectez au serveur approprié

La frappe est contraignante, nous le savons tous. Faites attention à ce que vous tapez ; vous ne pouvez pas vous connecter à « githib.com » ou « guthub.com ». Dans certains cas, un réseau d’entreprise peut également provoquer des problèmes de résolution de l’enregistrement DNS.

Pour vous assurer que vous vous connectez au domaine approprié, vous pouvez entrer la commande suivante :

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

La connexion doit être établie sur le port 22{% ifversion fpt or ghec %}, sauf si vous remplacez les paramètres pour utiliser [SSH via HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

## Utiliser toujours l’utilisateur « git »

Toutes les connexions, y compris celles des URL distantes, doivent être effectuées en tant qu’utilisateur « git ». Si vous essayez de vous connecter avec votre nom d’utilisateur {% data variables.product.product_name %}, l’opération échoue :

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Si votre connexion a échoué et que vous utilisez une URL distante avec votre nom d’utilisateur {% data variables.product.product_name %}, vous pouvez [changer l’URL distante pour utiliser l’utilisateur « git »](/github/getting-started-with-github/managing-remote-repositories).

Vous devez vérifier votre connexion en tapant :

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

## Vérifier que vous disposez d’une clé en cours d’utilisation

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Vérifiez que vous avez une clé privée générée et chargée dans SSH. 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Vérifiez que vous avez une clé privée générée et chargée dans SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Vérifiez que vous avez une clé privée générée et chargée dans SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

La commande `ssh-add` *doit* afficher une longue chaîne de chiffres et de lettres. Si elle n’affiche rien, vous devez [générer une nouvelle clé SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) et l’associer à {% data variables.product.product_name %}.

{% tip %}

**Conseil** : Sur la plupart des systèmes, les clés privées par défaut (`~/.ssh/id_rsa` et `~/.ssh/identity`) sont automatiquement ajoutées à l’agent d’authentification SSH. Vous n’avez pas besoin d’exécuter `ssh-add path/to/key`, sauf si vous remplacez le nom de fichier quand vous générez une clé.

{% endtip %}

### Obtention de détails supplémentaires

Vous pouvez également vérifier que la clé est en cours d’utilisation en essayant de vous connecter à `git@{% data variables.command_line.backticks %}` :

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Dans cet exemple, nous n’avons pas de clés utilisable par SSH. La chaîne « -1 » à la fin des lignes « identity file » signifie que SSH n’a pas pu trouver de fichier à utiliser. Plus loin, les lignes « Trying private key » indiquent également qu’aucun fichier n’a été trouvé. Si un fichier existait, ces lignes indiqueraient « 1 » et « Offering public key », respectivement :

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

## Vérifier que la clé publique est attachée à votre compte

Vous devez fournir votre clé publique à {% data variables.product.product_name %} pour établir une connexion sécurisée.

{% mac %}

1. Ouvrez le terminal.
2. Démarrez l’agent SSH en arrière-plan.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Recherchez et notez l’empreinte digitale de votre clé publique. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Comparez la liste des clés SSH à la sortie de la commande `ssh-add`.
![Liste des clés SSH dans {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Ouvrez la ligne de commande.
2. Démarrez l’agent SSH en arrière-plan.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Recherchez et notez l’empreinte digitale de votre clé publique. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Comparez la liste des clés SSH à la sortie de la commande `ssh-add`.
![Liste des clés SSH dans {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Ouvrez le terminal.
2. Démarrez l’agent SSH en arrière-plan.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Recherchez et notez l’empreinte digitale de votre clé publique. Si vous utilisez OpenSSH 6.7 ou version antérieure :
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si vous utilisez OpenSSH 6.8 ou version ultérieure :
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Comparez la liste des clés SSH à la sortie de la commande `ssh-add`.
![Liste des clés SSH dans {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Si vous ne voyez pas votre clé publique dans {% data variables.product.product_name %}, vous devez [ajouter votre clé SSH à {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) pour l’associer à votre ordinateur.

{% warning %}

**Avertissement** : Si vous voyez une clé SSH que vous ne connaissez pas sur {% data variables.product.product_name %}, supprimez-la immédiatement et contactez le {% data variables.contact.contact_support %}, pour obtenir de l’aide. Une clé publique non identifiée peut indiquer un problème de sécurité. Pour plus d’informations, consultez « [Examen de vos clés SSH](/articles/reviewing-your-ssh-keys) ».

{% endwarning %}
