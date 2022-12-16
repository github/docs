---
title: Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent
intro: 'Une fois que vous avez vérifié les clés SSH existantes, vous pouvez générer une nouvelle clé SSH à utiliser pour l’authentification, puis l’ajouter à l’agent ssh.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118971'
---
## À propos des phrases secrètes de clé SSH

{% data reusables.ssh.about-ssh %} Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) ».

Lorsque vous générez une clé SSH, vous pouvez ajouter une phrase secrète pour sécuriser davantage la clé. Chaque fois que vous utilisez la clé, vous devez entrer la phrase secrète. Si votre clé a une phrase secrète et que vous ne souhaitez pas entrer la phrase secrète chaque fois que vous utilisez la clé, vous pouvez ajouter votre clé à l’agent SSH. L’agent SSH gère vos clés SSH et mémorise votre phrase secrète.

Si vous n’avez pas encore de clé SSH, vous devez en générer une que vous utiliserez pour l’authentification. Si vous ne savez pas si vous disposez déjà d’une clé SSH, vous pouvez vérifier les clés existantes. Pour plus d’informations, consultez « [Vérification des clés SSH existantes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys) ».

Si vous souhaitez utiliser une clé de sécurité matérielle pour vous authentifier auprès de {% data variables.product.product_name %}, vous devez générer une nouvelle clé SSH pour votre clé de sécurité matérielle. Vous devez connecter votre clé de sécurité matérielle à votre ordinateur quand vous vous authentifiez avec la paire de clés. Pour plus d’informations, consultez les [notes de publication d’OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Génération d’une nouvelle clé GPG

Vous pouvez générer une nouvelle clé SSH sur votre ordinateur local. Après avoir généré la clé, vous pouvez l’ajouter à votre compte sur {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} afin d’activer l’authentification pour les opérations Git sur SSH.

{% ifversion ghes %}

Si vous êtes administrateur de site pour {% data variables.location.product_location %}, vous pouvez utiliser la même clé pour vous accorder un accès SSH administratif à l’instance. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Collez le texte ci-dessous en indiquant votre adresse e-mail {% data variables.product.product_name %}.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **Remarque :** Si vous utilisez un système hérité qui ne prend pas en charge l’algorithme Ed25519, utilisez :
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   Cette opération crée une clé SSH, qui utilise l’e-mail fourni comme étiquette.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
Quand vous êtes invité à entrer un fichier où enregistrer la clé, vous pouvez appuyer sur **Entrée** pour accepter l’emplacement du fichier par défaut. Notez que si vous avez déjà créé des clés SSH, ssh-keygen peut vous demander de réécrire une autre clé, auquel cas nous vous recommandons de créer une clé SSH avec un nom personnalisé. Pour ce faire, tapez l’emplacement du fichier par défaut et remplacez id_ssh_keyname par le nom personnalisé de votre clé.


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. À l’invite, tapez une phrase secrète sécurisée. Pour plus d’informations, consultez « [Utilisation de phrases secrètes de clé SSH](/articles/working-with-ssh-key-passphrases) ».
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Ajout de votre clé SSH à ssh-agent

Avant d’ajouter une nouvelle clé SSH à ssh-agent pour gérer vos clés, vous devez vérifier les clés SSH existantes et générer une nouvelle clé SSH. <span class="platform-mac">Quand vous ajoutez votre clé SSH à l’agent, utilisez la commande macOS `ssh-add` par défaut et non une application installée par [macports](https://www.macports.org/), [homebrew](http://brew.sh/) ou une autre source externe.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Si vous utilisez macOS Sierra version 10.12.2 ou ultérieure, vous devez modifier votre fichier `~/.ssh/config`pour charger automatiquement les clés dans ssh-agent et stocker les phrases secrètes dans votre trousseau.

   * Tout d’abord, vérifiez si votre fichier `~/.ssh/config` existe à l’emplacement par défaut.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * Si le fichier n’existe pas, créez-le.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Ouvrez votre fichier `~/.ssh/config`, puis modifiez-le pour qu’il contienne les lignes suivantes. Si votre fichier de clé SSH a un nom ou un chemin différent de ceux de l’exemple de code, modifiez le nom de fichier ou le chemin pour qu’ils correspondent à votre configuration actuelle.

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Remarques :**

     - Si vous avez choisi de ne pas ajouter de phrase secrète à votre clé, vous devez omettre la ligne `UseKeychain`.

     - Si vous voyez une erreur `Bad configuration option: usekeychain`, ajoutez une ligne supplémentaire à la section `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}` de la ou des configurations.

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Ajoutez votre clé privée SSH à ssh-agent et stockez votre phrase secrète dans le trousseau. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **Remarque :** L’option `--apple-use-keychain` stocke la phrase secrète dans votre trousseau quand vous ajoutez une clé SSH à ssh-agent. Si vous avez choisi de ne pas ajouter de phrase secrète à votre clé, exécutez la commande sans l’option `--apple-use-keychain`.

   L’option `--apple-use-keychain` se trouve dans la version standard de `ssh-add` d’Apple. Dans les versions macOS antérieures à Monterey (12.0), les indicateurs `--apple-use-keychain` et `--apple-load-keychain` utilisaient respectivement la syntaxe `-K` et `-A`.

  Si vous n’avez pas la version standard de `ssh-add` d’Apple installée, vous pouvez recevoir une erreur. Pour plus d’informations, consultez « [Erreur : ssh-add : option non conforme -- K](/articles/error-ssh-add-illegal-option-k) ».


   {% endnote %}

4. Ajoutez la clé SSH à votre compte sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Vérifiez que ssh-agent est en cours d’exécution. Vous pouvez utiliser les instructions de la section « Lancement automatique de ssh-agent » dans « [Utilisation des phrases secrètes de clé SSH](/articles/working-with-ssh-key-passphrases) » ou le démarrer manuellement :
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Ajoutez votre clé privée SSH à ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Ajoutez la clé SSH à votre compte sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Ajoutez votre clé privée SSH à ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Ajoutez la clé SSH à votre compte sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».

{% endlinux %}

## Génération d’une nouvelle clé SSH pour une clé de sécurité matérielle

Si vous utilisez macOS ou Linux, vous devrez peut-être mettre à jour votre client SSH ou installer un nouveau client SSH avant de générer une clé SSH. Pour plus d’informations, consultez « [Erreur : Type de clé inconnu](/github/authenticating-to-github/error-unknown-key-type) ».

1. Insérez votre clé de sécurité matérielle dans votre ordinateur.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Collez le texte ci-dessous en indiquant l’adresse e-mail de votre compte sur {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %} {% note %}

   **Remarque :** Si la commande échoue et que l’erreur `invalid format` ou `feature not supported,` se produit, vous utilisez peut-être une clé de sécurité matérielle qui ne prend pas en charge l’algorithme Ed25519. Entrez plutôt la commande suivante.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}
4. Quand vous y êtes invité, appuyez sur le bouton de votre clé de sécurité matérielle.
5. Quand vous êtes invité à entrer un fichier dans lequel enregistrer la clé, appuyez sur Entrée pour accepter l’emplacement du fichier par défaut.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. Quand vous êtes invité à taper une phrase secrète, appuyez sur **Entrée**.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. Ajoutez la clé SSH à votre compte sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Ajout d’une nouvelle clé SSH à votre compte {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».
