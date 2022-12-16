---
title: Vérification des clés SSH existantes
intro: 'Avant de générer une clé SSH, vous pouvez vérifier si vous n’en avez pas à disposition.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 4487e44b1cbba7038364e92f3194d5c3c06c505b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409106'
---
## À propos des clés SSH

Vous pouvez utiliser SSH pour effectuer des opérations Git dans les dépôts sur {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) ».

Si vous avez une clé SSH existante, vous pouvez utiliser la clé pour authentifier les opérations Git sur SSH.

## Vérification des clés SSH existantes

Avant de générer une nouvelle clé SSH, vous devez rechercher s’il y a des clés existantes sur votre ordinateur local.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Entrez `ls -al ~/.ssh` pour voir si des clés SSH existent déjà.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Vérifiez la liste des fichiers de votre répertoire pour voir si vous disposez déjà d’une clé SSH publique. Par défaut, le {% ifversion ghae %}nom de fichier d’une clé publique prise en charge pour {% data variables.product.product_name %} est *id_rsa.pub*.{% else %}nom de fichier d’une clé publique prise en charge pour {% data variables.product.product_name %} peut être l’un des noms suivants.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Conseil** : Si vous recevez une erreur indiquant que *~/.ssh* n’existe pas, cela indique que vous n’avez pas de paire de clés SSH existante à l’emplacement par défaut. Vous pouvez créer une paire de clés SSH à l’étape suivante.

  {% endtip %}

4. Générez une nouvelle clé SSH ou chargez une clé existante.
    - Si vous ne disposez pas d’une paire de clés publique et privée prise en charge, ou si vous ne souhaitez pas utiliser une paire disponible, générez une nouvelle clé SSH.
    - Si une paire de clés publique et privée existante (par exemple, *id_rsa.pub* et *id_rsa*) est listée que vous souhaitez l’utiliser pour vous connecter à {% data variables.product.product_name %}, vous pouvez ajouter la clé à ssh-agent.

      Pour plus d’informations sur la génération d’une nouvelle clé SSH ou l’ajout d’une clé existante à ssh-agent, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».
