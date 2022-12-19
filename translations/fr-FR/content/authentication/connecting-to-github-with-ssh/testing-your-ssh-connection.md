---
title: Test de votre connexion SSH
intro: 'Après avoir configuré votre clé SSH et ajouté celle-ci à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, vous pouvez tester votre connexion.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338972'
---
Avant de tester votre connexion SSH, vous devez :
- [Vérifier les clés SSH existantes](/articles/checking-for-existing-ssh-keys)
- [Générer une nouvelle clé SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Ajouter une nouvelle clé SSH à votre compte GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

Quand vous testez votre connexion, vous devez authentifier cette action à l’aide de votre mot de passe, c’est-à-dire la phrase secrète de clé SSH que vous avez créée précédemment. Pour plus d’informations sur l’utilisation des phrases secrètes de clé SSH, consultez [« Utilisation des phrases secrètes de clé SSH ».](/articles/working-with-ssh-key-passphrases)

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Entrez les informations suivantes :
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Vous pouvez voir un avertissement comme celui présenté ci-dessous :

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Vérifiez que l’empreinte digitale dans le message que vous voyez correspond à {% ifversion fpt or ghec %}[l’empreinte digitale de clé publique de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} l’empreinte digitale de clé publique de votre entreprise{% endif %}. Si c’est le cas, tapez `yes` :
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Le message d'erreur suivant peut s'afficher :
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  Il s’agit d’un problème connu avec certaines distributions Linux. Pour plus d’informations, consultez [« Erreur : L’agent a reconnu un échec de connexion ».](/articles/error-agent-admitted-failure-to-sign)

  {% endlinux %}

   {% note %}

   **Remarque :** La commande à distance doit quitter avec le code 1.

   {% endnote %}

4. Vérifiez que le message obtenu contient votre nom d’utilisateur. Si un message « autorisation refusée » s’affiche, consultez [« Erreur : Autorisation refusée (clé publique) ».](/articles/error-permission-denied-publickey)
