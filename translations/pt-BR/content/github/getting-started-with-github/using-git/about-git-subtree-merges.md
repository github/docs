---
title: Sobre merges de subárvore do Git
redirect_from:
  - /articles/working-with-subtree-merge/
  - /subtree-merge/
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
intro: 'Se precisar gerenciar vários projetos em um único repositório, você poderá usar um *merge de subárvore* para manipular todas as referências.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre merges de subárvore

Normalmente, um merge de subárvore é usado para conter um repositório dentro de outro repositório. O "sub-repositório" é armazenado em uma pasta do repositório principal.

A melhor maneira de explicar merges de subárvore é mostrar com exemplo. O que faremos:

- Criar um repositório vazio chamado `test` que represente nosso projeto
- Fazer merge de outro repositório nele como uma subárvore chamada `Spoon-Knife`.
- O projeto `test` usará esse subprojeto como se ele fosse parte do mesmo repositório.
- Fazer fetch de atualizações em `Spoon-Knife` em nosso projeto `test`.

### Configurar o repositório vazio para um merge de subárvore

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um novo diretório e navegue até ele.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. Inicialize um novo repositório Git.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. Crie e faça commit de um novo arquivo.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

### Adicionar um novo repositório como uma subárvore

1. Adicione uma nova URL remota apontando para o projeto separado em que estávamos interessados.
  ```shell
  $ git remote add -f spoon-knife git@github.com:octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From git://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Faça merge do projeto `Spoon-Knife` no projeto Git local. Isso não muda qualquer um de seus arquivos localmente, mas prepara o Git para a próxima etapa.

  Se você estiver usando o Git 2.9 ou superior:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Se estiver usando o Git 2.8 ou abaixo:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. Crie um diretório chamado **spoon-knife** e copie o histórico do projeto `Spoon-Knife` do Git nele.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Faça commit das alterações para mantê-las seguras.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Embora tenhamos adicionado apenas um subprojeto, qualquer número de subprojetos pode ser incorporado a um repositório Git.

{% tip %}

**Dica**: se, futuramente, você criar um clone do repositório, os remotes adicionados não serão criados para você. Será preciso adicioná-los novamente usando [o comando `git remote add`](/github/getting-started-with-github/managing-remote-repositories).

{% endtip %}

### Sincronizar com atualizações e alterações

Quando um subprojeto é adicionado, ele não é mantido automaticamente em sincronia com as alterações de upstream. Você precisará atualizar o subprojeto com o seguinte comando:

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

Para o exemplo acima, o comando seria:

```shell
$ git pull -s subtree spoon-knife main
```

### Leia mais

- [O capítulo "Mesclagem avançada" do livro _Pro Git_](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- "[Como usar a estratégia de merge de subárvore](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)"
