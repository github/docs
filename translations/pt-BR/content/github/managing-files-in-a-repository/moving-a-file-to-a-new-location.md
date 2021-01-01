---
title: Mover um arquivo para um novo local
intro: 'Ao editar um arquivo, você pode escolher movê-lo para qualquer local em seu repositório, mesmo se o diretório não existir.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Além de alterar o local do arquivo, também é possível [atualizar o conteúdo de seu arquivo](/articles/editing-files-in-your-repository) ou [dar um novo nome a ele](/articles/renaming-a-file) no mesmo commit.

{% tip %}

**Dicas**:

- Se você tentar mover um arquivo em um repositório que não tem acesso, bifurcaremos o projeto para sua conta de usuário e ajudaremos você a enviar [uma pull request](/articles/about-pull-requests) para o repositório original depois de fazer o commit da alteração.
- Alguns arquivos, como imagens, exigem que você os mova com a linha de comando. Para obter mais informações, consulte "[Mover um arquivo para um novo local usando a linha de comando](/articles/moving-a-file-to-a-new-location-using-the-command-line)".
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. No repositório, navegue até o arquivo que deseja mover.
2. No canto superior direito da exibição do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor de arquivos. ![Ícone Edit file (Editar arquivo)](/assets/images/help/repository/move-file-edit-file-icon.png)
3. No campo nome de arquivo, mude o nome do arquivo usando estas diretrizes: ![Editar um nome de arquivo](/assets/images/help/repository/moving_files.gif)
    - Para mover o arquivo **para uma subpasta**, digite o nome da pasta desejada, seguido por `/`. Sua nova pasta é um novo item na navegação estrutural.
    - Para mover o arquivo para um diretório **acima da localização atual do arquivo**, coloque o cursor no início do campo nome do arquivo e digite `../` para pular um nível de diretório inteiro ou pressione a tecla `backspace` para editar o nome da pasta principal.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
