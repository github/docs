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
shortTitle: Verificar se há chave SSH existente
---

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Digite `ls -al ~/.ssh` para verificar se as chaves SSH existentes estão presentes.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Verifique a listagem do diretório para verificar se você já tem uma chave SSH pública. Por padrão, o nome de arquivo {% ifversion ghae %} de uma chave pública compatível com {% data variables.product.product_name %} é *id_rsa.pub*.{% else %}nomes de arquivos de chaves públicas compatíveis com {% data variables.product.product_name %} são um dos listados a seguir.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Dica**: Se você receber um erro que *~/. sh* não existe, significa que você não tem um par de chave SSH existente no local padrão. Você pode criar um novo par de chaves SSH na próxima etapa.

  {% endtip %}

4. Gere uma nova chave SSH ou faça o upload de uma chave existente.
    - Se você não tem um par de chave pública e privada compatível ou não deseja usar nenhum que esteja disponível, gere uma nova chave SSH.
    - Se você vir uma lista de chaves públicas e privadas (por exemplo, *id_rsa.pub* e *id_rsa*) que você gostaria de usar para conectar-se a {% data variables.product.product_name %}, você pode adicionar a chave ao ssh-agent.

      Para mais informações sobre a geração de uma nova chave SSH ou adicionar uma chave existente ao ssh-agent, consulte "[Gerando uma nova chave SSH e adicionando-a ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".
