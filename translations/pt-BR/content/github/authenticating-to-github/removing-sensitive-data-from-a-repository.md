---
title: Remover dados confidenciais do repositório
intro: 'Se você fizer commit de dados confidenciais, como uma senha ou chave SSH em um repositório Git, poderá removê-los do histórico. Para remover completamente os arquivos não desejados do histórico do repositório, use o comando "git filter-branch" ou a ferramenta de código aberto BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

O comando `git filter-branch` e o BFG Repo-Cleaner regravam o histórico do repositório, o que altera os SHAs dos commits existentes que você altera e quaisquer commits dependentes. Os SHAs do commit alterados podem afetar as pull requests abertas no repositório. Recomendamos que você faça merge ou feche todas todas as pull requests abertas antes de remover os arquivos do repositório.

Você pode remover o arquivo com o commit mais recente com `git rm`. Para obter mais informações sobre como remover um arquivo que foi adicionado com o commit mais recente, consulte "[Remover arquivos do histórico do repositório](/articles/removing-files-from-a-repository-s-history)".

{% warning %}

**Aviso: depois de fazer push de um commit para o {% data variables.product.product_name %}, considere todos os dados do commit como comprometidos.** Se tiver feito o commit de uma senha, altere-a! Se tiver feito commit de uma chave, crie outra.

Este artigo explica como fazer commits com dados confidenciais que não podem ser acessados de nenhum branch ou tag no repositório do {% data variables.product.product_name %}. No entanto, é importante destacar que esses commits talvez ainda possam ser acessados em clones ou bifurcações do repositório diretamente por meio de hashes SHA-1 em visualizações em cache no {% data variables.product.product_name %} e por meio de qualquer pull request que faça referência a eles. Você não pode fazer nada em relação aos clones e às bifurcações do repositório, mas você pode remover permanentemente as visualizações em cache e as referências aos dados confidenciais em pull requests no {% data variables.product.product_name %} entrando em contato com o {% data variables.contact.contact_support %}.

{% endwarning %}

### Remover um arquivo do histórico do repositório

#### Usar o BFG

O [BFG Repo-Cleaner](http://rtyley.github.io/bfg-repo-cleaner/) é uma ferramenta desenvolvida e mantida pela comunidade de código aberto. Ele fornece uma alternativa mais rápida e simples ao `git filter-branch` para remover dados não desejados. Por exemplo: para remover o arquivo com dados confidenciais sem alterar o commit mais recente, execute:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para substituir todo o texto relacionado no `passwords.txt` sempre que ele for encontrado no histórico do repositório, execute:

```shell
$ bfg --replace-text passwords.txt
```

Depois que os dados confidenciais são removidos, você deve fazer push forçado das suas alterações para {% data variables.product.product_name %}.

```shell
$ git push --force
```

Consulte as instruções completas de download e uso na documentação do [BFG Repo-Cleaner](http://rtyley.github.io/bfg-repo-cleaner/).

#### Usar o filter-branch

{% warning %}

**Aviso:** se você executar o código `git filter-branch` depois de fazer stash das alterações, não conseguirá recuperar as alterações com outros comandos de stash. Antes de executar `git filter-branch`, recomendamos que você desfaça o stash de quaisquer alterações feitas. Para desfazer o stash do último conjunto de alterações no qual você fez stash, execute `git stash show -p | git apply -R`. Para obter mais informações, consulte [Ferramentas do Git - Fazendo Stash](https://git-scm.com/book/en/v1/Git-Tools-Stashing).

{% endwarning %}

Para demonstrar como o `git filter-branch` funciona, mostraremos como remover o arquivo com dados confidenciais do histórico do repositório e adicioná-lo ao `.gitignore` para impedir a repetição acidental do commit.

1. Se você ainda não tiver uma cópia local do repositório com dados confidenciais no histórico, [faça um clone do repositório](/articles/cloning-a-repository/) no computador local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
2. Acesse o diretório de trabalho do repositório.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
3. Execute o seguinte comando substituindo `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` pelo **caminho do arquivo que deseja remover, não apenas o nome do arquivo**. Esses argumentos vão:
    - Forçar o Git a processar, mas não fazer checkout, do histórico completo de cada branch e tag
    - Remover o arquivo especificado, bem como qualquer commit vazio gerado como resultado
    - **Sobrescrever as tags existentes**
        ```shell
        $ git filter-branch --force --index-filter \
        "git rm --cached --ignore-unmatch <em>PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA</em>" \
        --prune-empty --tag-name-filter cat -- --all
        > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (266/266)
        > Ref 'refs/heads/main' was rewritten
        ```

  {% note %}

  **Observação:** se o arquivo com dados confidenciais existir em qualquer outro caminho (porque foi movido ou renomeado), execute esse comando nesses caminhos também.

  {% endnote %}

4. Adicione o arquivo com dados confidenciais ao `.gitignore` para impedir a repetição acidental do commit.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
5. Verifique se você removeu todo o conteúdo desejado do histórico do repositório e fez checkout de todos os branches.
6. Quando estiver satisfeito com o estado do repositório, force o push das alterações locais para sobrescrever o repositório do {% data variables.product.product_name %} e todos os branches presentes no push:
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
7. Para remover o arquivo com dados confidenciais das [versões com tag](/articles/about-releases), você também precisará forçar o push das tags do Git:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. Entre em contato com o {% data variables.contact.contact_support %} e solicite a remoção das visualizações em cache e das referências aos dados confidenciais em pull requests no {% data variables.product.product_name %}.
9. Peça para os colaboradores [fazerem rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), *e não* merge, nos branches criados a partir do histórico antigo do repositório. Um commit de merge poderia reintroduzir o histórico antigo completo (ou parte dele) que você acabou de se dar ao trabalho de corrigir.
10. Depois de algum tempo e de verificar que o `git filter-branch` não teve nenhum efeito colateral indesejado, você poderá forçar a remoção de todas as referências e a coleta como lixo de todos os objetos do repositório local com os seguintes comandos (usando o Git 1.8.5 ou mais recente):
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **Observação:** você também pode conseguir isso fazendo push do histórico filtrado em um repositório novo ou vazio e, em seguida, criando um clone usando o {% data variables.product.product_name %}.

  {% endnote %}

### Evitar commits acidentais no futuro

Há alguns truques simples para evitar fazer commit de coisas não desejadas:

- Use um programa visual, como o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) e o [gitk](https://git-scm.com/docs/gitk), para fazer commit das alterações. Nos programas visuais, geralmente é mais fácil ver exatamente quais arquivos serão adicionados, excluídos e modificados em cada commit.
- Evite os comandos catch-all `git add .` e `git commit -a` na linha de comando— use `git add filename` e `git rm filename` para fazer stage de arquivos individuais.
- Use o `git add --interactive` para revisar e fazer stage das alterações em cada arquivo de forma individual.
- Use o `git diff --cached` para revisar as alterações que você incluiu no stage para commit. Esse é o diff exato que o `git commit` produzirá, contanto que você não use o sinalizador `-a`.

### Leia mais

- [man page de `git filter-branch`](https://git-scm.com/docs/git-filter-branch)
- [Pro Git: Ferramentas do Git - Reescrevendo o Histórico](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
