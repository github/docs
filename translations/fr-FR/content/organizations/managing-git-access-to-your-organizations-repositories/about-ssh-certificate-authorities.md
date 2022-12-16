---
title: À propos des autorités de certification SSH
intro: 'Avec une autorité de certification SSH, votre organisation ou votre compte d’entreprise peut fournir des certificats SSH que les membres peuvent utiliser pour accéder à vos ressources avec Git.'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
ms.openlocfilehash: c4940399efa3c1e88c68224c421de7f43f7ea89b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061979'
---
## À propos des autorités de certification SSH

Un certificat SSH est un mécanisme permettant à une clé SSH de signer une autre clé SSH. Si vous utilisez une autorité de certification SSH pour fournir aux membres de votre organisation des certificats SSH signés, vous pouvez ajouter l’autorité de certification à votre compte d’entreprise ou à votre organisation pour autoriser les membres de l’organisation à accéder aux ressources de l’organisation en utilisant leurs certificats. 

{% data reusables.organizations.ssh-ca-ghec-only %}

Après avoir ajouté une autorité de certification SSH à votre organisation ou à votre compte d’entreprise, vous pouvez utiliser cette autorité de certification afin de signer des certificats SSH clients pour les membres de l’organisation. Les membres de l’organisation peuvent ensuite utiliser les certificats signés pour accéder aux dépôts de votre organisation (et uniquement aux dépôts de votre organisation) avec Git. Si vous le souhaitez, vous pouvez exiger que les membres utilisent des certificats SSH pour accéder aux ressources de l’organisation. Pour plus d’informations, consultez « [Gestion des autorités de certification SSH de votre organisation](/articles/managing-your-organizations-ssh-certificate-authorities) » et « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise) ».

Par exemple, vous pouvez créer un système interne qui émet un nouveau certificat pour vos développeurs tous les matins. Chaque développeur peut alors utiliser son certificat quotidien pour travailler dans les dépôts de votre organisation sur {% data variables.product.product_name %}. À la fin de la journée, le certificat peut expirer automatiquement, protégeant ainsi vos dépôts contre toute compromission ultérieure du certificat.

{% ifversion ghec %} Les membres de l’organisation peuvent utiliser leurs certificats signés pour les besoins d’authentification même si vous avez activé l’authentification unique SAML. Sauf si vous rendez les certificats SSH obligatoires, les membres de l’organisation peuvent continuer à utiliser d’autres moyens d’authentification pour accéder aux ressources de votre organisation avec Git, notamment leur nom d’utilisateur et leur mot de passe, leurs jetons d’accès personnels et leurs propres clés SSH.
{% endif %}

Les membres ne pourront pas utiliser leurs certificats pour accéder à des duplications (fork) de vos dépôts appartenant à leurs comptes personnels. 

## À propos des URL SSH avec des certificats SSH

Si votre organisation exige des certificats SSH, pour éviter les erreurs d’authentification, les membres de l’organisation doivent utiliser une URL spéciale qui inclut l’ID de l’organisation quand ils effectuent des opérations Git via SSH. Cette URL spéciale permet au client et au serveur de négocier plus facilement quelle clé sur l’ordinateur du membre doit être utilisée pour l’authentification. Si un membre utilise l’URL standard, qui commence par `git@github.com`, le client SSH risque de fournir la mauvaise clé, entraînant l’échec de l’opération.

Toute personne qui a un accès en lecture au dépôt peut trouver cette URL en sélectionnant le menu déroulant **Code** dans la page principale du dépôt, puis en cliquant sur **Utiliser SSH**.

Si votre organisation n’exige pas de certificats SSH, les membres peuvent continuer à utiliser leurs propres clés SSH ou d’autres moyens d’authentification. Dans ce cas, l’URL spéciale ou l’URL standard (qui commence par `git@github.com`) fonctionne.

## Émission de certificats

Lorsque vous émettez chaque certificat, vous devez inclure une extension qui spécifie pour quelles données {% data variables.product.product_name %} le certificat est utilisé. Par exemple, vous pouvez utiliser la commande `ssh-keygen` d’OpenSSH, en remplaçant _KEY-IDENTITY_ par votre propre identité de clé, et _USERNAME_ par un nom d’utilisateur {% data variables.product.product_name %}. Le certificat que vous générez sera autorisé à agir pour le compte de cet utilisateur sur toutes les ressources de votre organisation. Assurez-vous de valider l’identité de l’utilisateur avant d’émettre le certificat.

{% note %}

**Remarque :** Vous devez effectuer une mise à jour vers OpenSSH 7.6 ou version ultérieure pour utiliser ces commandes.

{% endnote %}

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**Avertissement** : Une fois qu’un certificat a été signé et émis, il ne peut pas être révoqué. Veillez à utiliser l’indicateur -`V` pour configurer la durée de vie du certificat ; sans cet indicateur, le certificat peut être utilisé indéfiniment.

{% endwarning %}

Pour émettre un certificat destiné à une personne qui utilise SSH pour accéder à plusieurs produits {% data variables.product.company_short %}, vous pouvez inclure deux extensions de connexion afin de spécifier le nom d’utilisateur de chaque produit. Par exemple, la commande suivante émet un certificat pour _USERNAME-1_ pour le compte d’utilisateur sur {% data variables.product.prodname_ghe_cloud %}, et pour _USERNAME-2_ pour le compte d’utilisateur sur {% data variables.product.prodname_ghe_managed %} ou {% data variables.product.prodname_ghe_server %} à l’emplacement _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

Vous pouvez restreindre les adresses IP à partir desquelles un membre de l’organisation peut accéder aux ressources de votre organisation, en utilisant une extension `source-address`. L’extension accepte une adresse IP spécifique ou une plage d’adresses IP utilisant la notation CIDR. Vous pouvez spécifier plusieurs adresses ou plages en séparant les valeurs par des virgules. Pour plus d’informations, consultez « [Routage CIDR (Classless Interdomain Routing)](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) » sur Wikipédia.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
