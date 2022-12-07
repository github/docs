---
title: "Erreur\_: Numéro de fichier incorrect"
intro: 'Cette erreur signifie généralement que vous n’avez pas pu vous connecter au serveur. Souvent, cela est dû aux pare-feu et aux serveurs proxy.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: db2a47ad6029790cdbf9f0212087acc659326941
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085886'
---
Quand vous exécutez des commandes Git distantes ou que vous vous connectez en mode SSH, votre connexion peut expirer :

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

## Résolution du problème

### Utiliser le protocole HTTPS

Souvent, la solution la plus simple consiste simplement à éviter SSH entièrement. La plupart des pare-feu et des proxys autorisent le trafic HTTPS sans problème. Pour tirer parti de cela, modifiez l’[URL distante](/github/getting-started-with-github/about-remote-repositories) que vous utilisez :

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### Tester à partir d’un autre réseau

Si vous pouvez connecter l’ordinateur à un autre réseau qui n’a pas de pare-feu, vous pouvez essayer de tester votre connexion SSH à {% data variables.product.product_name %}. Si tout fonctionne normalement, contactez votre administrateur réseau pour obtenir de l’aide sur la façon de changer les paramètres de pare-feu afin que votre connexion SSH à {% data variables.product.product_name %} réussisse.

{% ifversion fpt or ghec %}

### Utilisation de SSH sur le port HTTPS

Si l’utilisation de HTTPS n’est pas une option et que votre administrateur de pare-feu refuse d’autoriser les connexions SSH, vous pouvez essayer d’utiliser [SSH sur le port HTTPS](/articles/using-ssh-over-the-https-port).

{% endif %}

{% ifversion fpt or ghec %}

## Pour aller plus loin

- « [Résolution des problèmes liés à la connectivité](/articles/troubleshooting-connectivity-problems) »

{% endif %}
