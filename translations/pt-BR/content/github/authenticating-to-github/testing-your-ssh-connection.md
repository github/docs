---
title: Testar a conexão SSH
intro: 'Depois de configurar a chave SSH e adicioná-la à sua conta do {% data variables.product.product_name %}, você pode testar a conexão.'
redirect_from:
  - /articles/testing-your-ssh-connection
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Antes de testar a conexão SSH, é recomendável que você tenha:
- [Verificado se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)
- [Gerado uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adicionado uma nova chave SSH à sua conta do GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

Quando você testar a conexão, precisará autenticar essa ação usando sua senha, que é a frase secreta da chave SSH que você criou anteriormente. Para obter mais informações sobre esse assunto, consulte ["Trabalhar com frases secretas da chave SSH"](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Insira o seguinte:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Você poderá receber um aviso como este:

  ```shell
  > Não é possível estabelecer a autenticidade do host '{% data variables.command_line.codeblock %} (IP ADDRESS)'.
  > A impressão digital da chave RSA é SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Tem certeza de que deseja continuar com a conexão (sim/não)?
  ```

3. Verifique se a impressão digital na mensagem exibida corresponde à das mensagens na etapa 2 e digite `sim`:
  ```shell
  > Olá, <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Você poderá ver esta mensagem de erro:
  ```shell
  ...
  Agente com falha ao entrar usando a chave.
  debug1: Não há mais métodos de autenticação para tentar.
  Permissão negada (publickey).
  ```

  Esse é um problema conhecido com determinadas distribuições Linux. Para obter mais informações, consulte ["Erro: agente com falha ao entrar"](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

4. Verifique se a mensagem resultante contém seu nome de usuário. Se você receber uma mensagem de "permissão negada", consulte ["Erro: permissão negada (publickey)"](/articles/error-permission-denied-publickey).
