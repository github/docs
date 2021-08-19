---
title: Fazer checkout de pull requests no local
intro: 'Quando alguém envia a você uma pull request de uma bifurcação ou um branch do seu repositório, talvez você queira fazer merge dela no local para resolver um conflito de merge ou para testar e verificar as alterações antes de fazer merge no {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% note %}

  **Observação:** Autores de pull request podem fornecer a mantenedores do repositório upstream, ou àqueles com acesso push para o repositório upstream,  permissão para fazer commits no branch de comparação de sua pull request em uma bifurcação de propriedade de usuário. Para obter mais informações, consulte "[Permitir alterações no branch de uma pull request criada de uma bifurcação](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

  {% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode conferir um pull request localmente usando {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh pr checkout`](https://cli.github.com/manual/gh_pr_checkout)" na documentação de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Modificar uma pull request ativa no local

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique no pull request que deseja modificar.{% if currentVersion == "free-pro-team@latest" %}
3. Para escolher onde você gostaria de abrir a pull request, selecione **Abrir com o menu suspenso {% octicon "triangle-down" aria-label="The down triangle icon" %}** e clique em uma das abas. ![Link to access command line pull request instructions](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. Na caixa de merge, clique em **instruções para linha de comando**. Siga a sequência de etapas para rebaixar a pull request proposta. ![Link para acessar instruções de pull request da linha de comando](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Como opção, para exibir as alterações propostas no {% data variables.product.prodname_desktop %}, clique em **abrir em {% data variables.product.prodname_desktop %}**. ![Link para abrir uma pull request localmente no Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

### Modificar uma pull request inativa no local

Se o autor de uma pull request não responde às solicitações ou excluiu sua bifurcação, a pull request ainda poderá ser mesclada. No entanto, se quiser fazer alterações em uma pull request e o autor não estiver respondendo, será preciso executar algumas etapas adicionais para atualizar a pull request.

Depois que uma pull request for aberta, {% data variables.product.product_name %} armazena todas as alterações remotamente. Em outras palavras, os commits em uma pull request estão disponíveis em um repositório mesmo antes da pull request sofrer merge. Isso significa que é possível fazer fetch de uma pull request aberta e recriá-la como sua própria.

Qualquer pessoa pode abrir uma pull request anteriormente aberta para continuar trabalhando nela, testá-la ou, até mesmo, abrir uma nova pull request com alterações adicionais. No entanto, somente colaboradores com acesso push podem fazer merge de pull requests.

{% data reusables.repositories.sidebar-issue-pr %}
2. Na lista "Pull Requests", clique na pull request da qual deseja fazer merge.
3. Encontre o número da ID da pull request inativa. Essa é a sequência de dígitos certa após o título da pull request. ![Número da ID de pull requests](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Faça fetch da referência à pull request com base no número da ID, criando um branch no processo.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Alterne para o novo branch que se baseia nesta pull request:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Alternado para um novo branch '<em>BRANCHNAME</em>'
  ```
7. Nesse ponto, você pode fazer qualquer coisa que desejar com este branch. É possível executar alguns testes locais ou fazer merge de outros branches no branch.
8. Quando estiver pronto, você poderá fazer push do novo branch:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Crie uma pull request](/articles/creating-a-pull-request) com seu novo branch.

### Erro: falha ao fazer push de algumas refs

O namespace `refs/pull/` remoto é *somente leitura*. Se você tentar fazer push de qualquer commit nele, este erro será exibido:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Dica:** ao remover ou renomear uma referência remote, seu namespace `refs/pull/origin/` local não será afetado pelas chamadas a `git-remote`.

{% endtip %}
