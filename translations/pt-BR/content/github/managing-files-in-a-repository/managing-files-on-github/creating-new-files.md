---
title: Criar arquivos
intro: 'Você pode criar arquivos diretamente no {% data variables.product.product_name %} em qualquer repositório no qual tenha acesso de gravação.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
Ao criar um arquivo no {% data variables.product.product_name %}, lembre-se do seguinte:

- Se você tentar criar um arquivo em um repositório ao qual não tem acesso, bifurcaremos o projeto para sua conta de usuário e ajudaremos você a enviar [uma pull request](/articles/about-pull-requests) para o repositório original depois que fizer o commit da alteração.
- Os nomes de arquivos criados por meio da interface da web podem conter apenas caracteres alfanuméricos e hífens (`-`). Para usar outros caracteres, [crie e faça commit dos arquivos localmente e, em seguida, faça push deles no repositório do {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. No seu repositório, navegue até a pasta em que deseja criar um arquivo.
{% data reusables.files.add-file %}
4. No campo de nome do arquivo, digite o nome e a extensão do arquivo. Para criar subdiretórios, digite o separador de diretório `/`. ![Nome do novo arquivo](/assets/images/help/repository/new-file-name.png)
5. Na guia **Edit new file** (Editar novo arquivo), adicione conteúdo ao arquivo. ![Conteúdo no novo arquivo](/assets/images/help/repository/new-file-content.png)
6. Para revisar o novo conteúdo, clique em **Preview** (Visualizar). ![Botão New file preview (Visualização de novo arquivo)](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leia mais

- "[Adicionar um arquivo a um repositório](/articles/adding-a-file-to-a-repository)"
- "[Adicionar um arquivo a um repositório usando a linha de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
