---
title: Criar um commit em nome de uma organização
intro: 'Você pode criar commits em nome de uma organização adicionando um trailer à mensagem do commit. Os commits atribuídos a uma organização incluem um selo "em nome de" no {% data variables.product.product_name %}.'
redirect_from:
  - Creating a commit on behalf of an organization
versions:
  free-pro-team: '*'
---

{% note %}

**Observação:** a capacidade de criar um commit em nome de uma organização, atualmente, está em versão beta pública e sujeita a alterações.

{% endnote %}

Para criar commits em nome de uma organização:

- você deve ser um integrante da organização indicado no trailer
- você deve assinar o commit
- o e-mail do seu commit e o e-mail da organização devem estar em um domínio verificado pela organização
- sua mensagem do commit deve terminar com o trailer do commit `on-behalf-of: @org <name@organization.com>`
  - `org` é o login da organização
  - `name@organization.com` está no domínio da organização

A organização pode usar o e-mail `name@organization.com` como um ponto público de contato para esforços de código aberto.

### Criar commits com um selo `on-behalf-of` na linha de comando

1. Digite sua mensagem de commit e uma descrição curta e significativa de suas alterações. Depois da descrição do commit, em vez de inserir aspas para encerrar, adicione duas linhas vazias.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Dica:** Se você estiver usando um editor de texto na linha de comando para digitar sua mensagem de commit, certifique-se de que existem duas novas linhas entre o final da sua descrição do commit e o indicador `on-behalf-of:`.

  {% endtip %}

2. Na próxima linha da mensagem do commit, digite `on-behalf-of: @org <name@organization.com>` e, em seguida, aspas de fechamento.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

O novo commit, mensagem e selo aparecerão no {% data variables.product.product_location %} na próxima vez que você fizer push. Para obter mais informações, consulte "[Fazer push das alterações em um repositório remoto](/articles/pushing-commits-to-a-remote-repository/)".

### Criar commits com um selo `on-behalf-of` no {% data variables.product.product_name %}

Depois que fizer alterações em um arquivo usando um editor web no {% data variables.product.product_name %}, você poderá criar um commit em nome da sua organização adicionando um trailer `on-behalf-of:` à mensagem do commit.

1. Depois de fazer as alterações, na parte inferior da página, digite uma mensagem de commit curta e significativa que descreve as alterações feitas. ![Mensagem do commit para sua alteração](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Na caixa de texto abaixo da mensagem do commit, adicione `on-behalf-of: @org <name@organization.com>`.

  ![Exemplo de trailer on-behalf-of da mensagem do commit na segunda caixa de texto da mensagem do commit](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Clique em **Commit changes** (Fazer commit de alterações) ou **Propose changes** (Propor alterações).

O novo commit, mensagem e selo aparecerão no {% data variables.product.product_location %}.

### Leia mais

- "[Exibir contribuições no perfil](/articles/viewing-contributions-on-your-profile)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Exibir um resumo da atividade do repositório](/articles/viewing-a-summary-of-repository-activity)"
- "[Exibir contribuidores de um projeto](/articles/viewing-a-projects-contributors)"
- "[Alterar uma mensagem do commit](/articles/changing-a-commit-message)"
