---
title: Editar arquivos no repositório de outro usuário
intro: 'Quando você edita um arquivo no repositório de outro usuário, nós automaticamente [bifurcamos o repositório](/articles/fork-a-repo) e [abrimos uma pull request](/articles/creating-a-pull-request) para você.'
redirect_from:
  - /articles/editing-files-in-another-users-repository/
  - /articles/editing-files-in-another-user-s-repository
  - /articles/editing-files-in-another-users-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

1. No repositório de outro usuário, navegue até a pasta que contém o arquivo que deseja editar. Clique no nome do arquivo a ser editado.
2. Acima do conteúdo do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %}. Neste ponto, o GitHub bifurca o repositório para você.
3. Faça as alterações necessárias no arquivo. ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Clique em **Propose file change** (Propor alteração no arquivo). ![Botão Commit Changes (Fazer commit de alterações)](/assets/images/help/repository/propose_file_change_button.png)
7. Digite um título e uma descrição para a pull request. ![Página Pull Request description (Descrição da pull request)](/assets/images/help/pull_requests/pullrequest-description.png)
8. Clique em **Create pull request** (Criar pull request). ![Botão Pull Request (Pull request)](/assets/images/help/pull_requests/pullrequest-send.png)

### Leia mais

* "[Editar arquivos no repositório](/articles/editing-files-in-your-repository)"
