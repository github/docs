---
title: Localizar métodos e funções modificados em uma pull request
intro: 'É possível encontrar facilmente as modificações propostas para um método ou função em uma pull request em arquivos *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb*.'
redirect_from:
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Qualquer pessoa com acesso de leitura em um repositório pode visualizar uma lista das modificações de funções e métodos em determinados arquivos de uma pull request.

O resumo da lista de métodos e funções é criado a partir destes tipos de arquivos compatíveis:
  - Go
  - JavaScript (inclui Typescript, Flow e outros tipos de JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request onde você quer localizar os métodos e funções modificados.
{% data reusables.repositories.changed-files %}
4. Para ver um resumo da lista das funções e métodos modificados, clique em **Jump to...** (Pular para..). ![Menu suspenso Jump to (Pular para)](/assets/images/help/pull_requests/jump-to-menu.png)
5. Selecione a função ou método modificado no menu suspenso. Também é possível inserir o nome da função ou método para filtrar os resultados. ![Filtrar funções e métodos](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Observação:** caso não veja as funções ou métodos que você esperava, confirme que seu código compila e não tem erros. Somente funções e métodos modificados nesta pull request e encontrados em arquivos *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb* é que são exibidos no menu suspenso.

 {% endnote %}

6. Você será redirecionado à primeira linha da função ou método selecionado. ![visualizar função ou método em arquivos modificados](/assets/images/help/pull_requests/view-selected-function-or-method.png)

### Leia mais

- "[Sobre comparar branches em uma pull request](/articles/about-comparing-branches-in-pull-requests)"
- "[Filtrar arquivos em uma pull request por tipo de arquivo](/articles/filtering-files-in-a-pull-request)"
