---
title: Alterar informações de autor
redirect_from:
  - /change-author-info/
  - /changing-author-info/
  - /articles/changing-author-info
intro: 'Para alterar o nome e/ou endereço de e-mail registrado em commits existentes, você deve reescrever todo o histórico do seu repositório Git.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Aviso**: esta ação é destrutiva para o histórico do repositório. Se você estiver colaborando em um repositório com outras pessoas, não é uma boa ideia reescrever o histórico publicado. Você só deve fazer isso em caso de emergência.

{% endwarning %}

### Alterar o histórico do seu repositório no Git usando um script

Criamos um script que vai alterar todos os commits que anteriormente tinham o endereço de e-mail antigo em seus campos de autor ou committer para usar o nome e o endereço de e-mail corretos.

{% tip %}

**Observação**: executar esse script reescreve o histórico de todos os colaboradores do repositório. Após conclusão dessas etapas, qualquer pessoa com bifurcações ou clones devem fazer fetch do histórico reescrito e fazer rebase de todas as alterações locais no histórico reescrito.

{% endtip %}

Antes de executar esse script, você precisará:

* Do endereço de e-mail antigo que aparece nos campos de autor/commiter que deseja alterar
* Do nome e endereço de e-mail corretos aos quais deseja que os commits sejam atribuídos

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone vazio do seu repositório:
  ```shell
  git clone --bare https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
  cd <em>repo</em>.git
  ```
3. Copie e cole o script, substituindo as seguintes variáveis com base nas informações coletadas:
    * `OLD_EMAIL`
    * `CORRECT_NAME`
    * `CORRECT_EMAIL`

  ```shell
  #!/bin/sh

  git filter-branch --env-filter '

  OLD_EMAIL="your-old-email@example.com"
  CORRECT_NAME="Your Correct Name"
  CORRECT_EMAIL="your-correct-email@example.com"

  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags
  ```

4. Pressione **Enter** para executar o script.
5. Revise o novo histórico do Git a fim de verificar se há erros.
6. Publique o histórico corrigido no {% data variables.product.product_name %}:
  ```shell
  git push --force --tags origin 'refs/heads/*'
  ```
7. Limpe o clone temporário:
  ```shell
  cd ..
  rm -rf <em>repo</em>.git
  ```
