---
title: Verificar se há chaves SSH
intro: 'Antes de gerar uma chave SSH, você pode verificar se há outras chaves SSH.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Digite `ls -al ~/.ssh` para verificar se as chaves SSH existentes estão presentes:

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```
3. Verifique a listagem do diretório para verificar se você já tem uma chave SSH pública. Por padrão, os nomes de arquivo das chaves públicas são um dos seguintes:
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*

Se você não tiver um par de chaves pública e privada ou não deseja usar algum que esteja disponível para conectar-se a {% data variables.product.product_name %}, [gere uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Se você vir uma lista de chaves públicas e privadas (por exemplo, *id_rsa. ub* e *id_rsa*) que você gostaria de usar para conectar-se a {% data variables.product.product_name %}, você poderá [adicionar sua chave SSH ao ssh-agent-](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

{% tip %}

**Dica:** se você receber um erro informando que *~/.ssh* não existe, não se preocupe! Nós o criaremos quando [gerarmos uma chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% endtip %}
