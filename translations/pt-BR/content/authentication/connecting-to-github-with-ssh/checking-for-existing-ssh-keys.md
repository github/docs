---
title: Verificar se há chaves SSH
intro: 'Antes de gerar uma chave SSH, você pode verificar se há outras chaves SSH.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409104'
---
## Sobre chaves SSH

Você pode usar o SSH para executar operações do Git em repositórios em {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Se você tiver uma chave SSH existente, poderá usar a chave para autenticar as operações do Git por SSH.

## Verificar se há chaves SSH

Antes de gerar uma nova chave SSH, verifique se há chaves existentes no computador local.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Insira `ls -al ~/.ssh` para ver se as chaves SSH existentes estão presentes.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Verifique a listagem do diretório para verificar se você já tem uma chave SSH pública. Por padrão, {% ifversion ghae %}o nome de arquivo de uma chave pública compatível para o {% data variables.product.product_name %} é *id_rsa.pub*.{% else %}os nomes de arquivos de chaves públicas compatíveis para o {% data variables.product.product_name %} são um dos mostrados a seguir.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Dica**: se você receber um erro indicando que *~/.ssh* não existe, você não terá um par de chaves SSH existente no local padrão. Você pode criar um novo par de chaves SSH na próxima etapa.

  {% endtip %}

4. Gere uma nova chave SSH ou faça o upload de uma chave existente.
    - Se você não tem um par de chave pública e privada compatível ou não deseja usar nenhum que esteja disponível, gere uma nova chave SSH.
    - Se um par de chaves pública e privada existente estiver listado (por exemplo, *id_rsa.pub* e *id_rsa*) que você deseja usar para se conectar ao {% data variables.product.product_name %}, você poderá adicionar a chave ao ssh-agent.

      Para obter mais informações sobre a geração de uma nova chave SSH ou a adição de uma chave existente ao ssh-agent, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".
