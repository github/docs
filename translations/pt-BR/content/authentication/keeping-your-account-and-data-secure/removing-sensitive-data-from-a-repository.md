---
title: Remover dados confidenciais do repositório
intro: 'Se você fizer commit de dados confidenciais, como uma senha ou chave SSH em um repositório Git, poderá removê-los do histórico. Para remover completamente arquivos indesejados do histórico de um repositório, você pode usar a ferramenta `git filter-repo` ou a ferramenta de código aberto BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remover dados confidenciais
---

A ferramenta `git filter-repo` e o BFG Repo-Cleaner reescrevem o histórico do seu repositório, que muda os SHAs para os commits existentes que você altera e quaisquer commits dependentes. Os SHAs do commit alterados podem afetar as pull requests abertas no repositório. Recomendamos que você faça merge ou feche todas todas as pull requests abertas antes de remover os arquivos do repositório.

Você pode remover o arquivo com o commit mais recente com `git rm`. Para obter informações sobre a remoção de um arquivo que foi adicionado com o commit mais recente, consulte "[Sobre arquivos grandes em {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)".

{% warning %}

**Aviso**: Este artigo diz a você como tornar commits com dados confidenciais inacessíveis a partir de quaisquer branches ou tags do seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. No entanto, esses commits talvez ainda possam ser acessados em clones ou bifurcações do repositório diretamente por meio de hashes SHA-1 em visualizações em cache no {% data variables.product.product_name %} e por meio de qualquer pull request que faça referência a eles. Não é possível remover dados confidenciais dos clones ou bifurcações de usuários do seu repositório, mas você pode remover permanentemente as visualizações e referências em cache para os dados confidenciais em pull requests no {% data variables.product.product_name %} entrando em contato com {% data variables.contact.contact_support %}.

**Depois de ter feito o push de um commit para {% data variables.product.product_name %}, você deve considerar todos os dados confidenciais no commit comprometido.** Se você fez o commit de uma senha, altere-a! Se tiver feito commit de uma chave, crie outra. A remoção dos dados comprometidos não resolve sua exposição inicial, especialmente em clones ou bifurcações existentes do seu repositório. Considere essas limitações ao tomar a decisão de reescrever a história do repositório.

{% endwarning %}

## Remover um arquivo do histórico do repositório

É possível limpar um arquivo do histórico do seu repositório usando a ferramenta `git filter-repo` ou a ferramenta de código aberto BFG Repo-Cleaner.

### Usar o BFG

O [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) é uma ferramenta desenvolvida e mantida pela comunidade de código aberto. Ele fornece uma alternativa mais rápida e simples ao `git filter-branch` para remover dados não desejados.

Por exemplo: para remover o arquivo com dados confidenciais sem alterar o commit mais recente, execute:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para substituir todo o texto relacionado no `passwords.txt` sempre que ele for encontrado no histórico do repositório, execute:

```shell
$ bfg --replace-text passwords.txt
```

Depois que os dados confidenciais são removidos, você deve fazer push forçado das suas alterações para {% data variables.product.product_name %}. Fazer push forçado reescreve o histórico do repositório, o que remove dados confidenciais do histórico de commit. Se você fizer push forçado, isso poderá pode sobrescrever commits nos quais outras pessoas basearam o seu trabalho.

```shell
$ git push --force
```

Consulte as instruções completas de download e uso na documentação do [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

### Usando arquivo git filter-repo

{% warning %}

**Aviso:** se você executar `git filter-repo` após acumular as alterações, você não poderá recuperar suas alterações com outros comandos acumulados. Antes de executar `git filter-repo`, recomendamos cancelar a acumulação de todas as alterações que você fez. Para desfazer o stash do último conjunto de alterações no qual você fez stash, execute `git stash show -p | git apply -R`. Para obter mais informações, consulte [Ferramentas do Git - Acúmulo e limpeza](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Para ilustrar como `git filter-repo` funciona, mostraremos como remover seu arquivo com dados confidenciais do histórico do repositório e adicioná-lo a `. itignore` para garantir que não se faça o commit novamente de forma acindelal.

1. Instale a versão mais recente da ferramenta [git filter-repo](https://github.com/newren/git-filter-repo). Você pode instalar `git-filter-repo` manualmente ou usando um gerenciador de pacotes. Por exemplo, para instalar a ferramenta com o HomeBrew, use o comando `brew install`.
  ```
  brew install git-filter-repo
  ```
  Para obter mais informações, consulte [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) no repositório `newren/git-filter-repo`.

2. Se você ainda não tiver uma cópia local do repositório com dados confidenciais no histórico, [faça um clone do repositório](/articles/cloning-a-repository/) no computador local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Acesse o diretório de trabalho do repositório.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Execute o seguinte comando substituindo `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` pelo **caminho do arquivo que deseja remover, não apenas o nome do arquivo**. Esses argumentos vão:
    - Forçar o Git a processar, mas não fazer checkout, do histórico completo de cada branch e tag
    - Remover o arquivo especificado, bem como qualquer commit vazio gerado como resultado
    - Remova algumas configurações, como a URL remota, armazenada no arquivo *.git/config*. Você deverá fazer backup deste arquivo com antecedência para a restauração mais adiante.
    - **Sobrescrever as tags existentes**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Contando objetos: 100% (210/210), concluído.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Observação:** se o arquivo com dados confidenciais existir em qualquer outro caminho (porque foi movido ou renomeado), execute esse comando nesses caminhos também.

  {% endnote %}

5. Adicione o arquivo com dados confidenciais ao `.gitignore` para impedir a repetição acidental do commit.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Verifique se você removeu todo o conteúdo desejado do histórico do repositório e fez checkout de todos os branches.
7. Quando você estiver satisfeito com o estado do seu repositório, faça push forçado das alterações locais para sobrescrever o repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, bem como de todos os branches para os quais você fez o push. É necessário um push forçado para remover dados confidenciais do seu histórico de commit.
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
8. Para remover o arquivo com dados confidenciais das [versões com tag](/articles/about-releases), você também precisará forçar o push das tags do Git:
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

## Remover completamente os dados de {% data variables.product.prodname_dotcom %}

Depois de usar a ferramenta BFG ou `git filter-repo` para remover os dados confidenciais e fazer push das suas alterações para {% data variables.product.product_name %}, você deve seguir mais algumas etapas para remover completamente os dados de {% data variables.product.product_name %}.

1. Entre em contato com o {% data variables.contact.contact_support %} e solicite a remoção das visualizações em cache e das referências aos dados confidenciais em pull requests no {% data variables.product.product_name %}. Forneça o nome do repositório e/ou um link para o commit que você precisa removido.{% ifversion ghes %} Para obter mais informações sobre como os administradores do site podem remover objetos do Git inacessíveis, consulte "[Utilitários da linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)."{% endif %}

2. Peça para os colaboradores [fazerem rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), *e não* merge, nos branches criados a partir do histórico antigo do repositório. Um commit de merge poderia reintroduzir o histórico antigo completo (ou parte dele) que você acabou de se dar ao trabalho de corrigir.

3. Após decorrido um tempo e você estiver confiante de que a ferramenta BFG / `git filter-repo` não teve efeitos colaterais, você poderá forçar todos os objetos no seu repositório local a serem dereferenciados e lixo coletado com os seguintes comandos (usando o Git 1.8.5 ou mais recente):
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

## Evitar commits acidentais no futuro

Há alguns truques simples para evitar fazer commit de coisas não desejadas:

- Use um programa visual, como o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) e o [gitk](https://git-scm.com/docs/gitk), para fazer commit das alterações. Nos programas visuais, geralmente é mais fácil ver exatamente quais arquivos serão adicionados, excluídos e modificados em cada commit.
- Evite os comandos catch-all `git add .` e `git commit -a` na linha de comando— use `git add filename` e `git rm filename` para fazer stage de arquivos individuais.
- Use o `git add --interactive` para revisar e fazer stage das alterações em cada arquivo de forma individual.
- Use o `git diff --cached` para revisar as alterações que você incluiu no stage para commit. Esse é o diff exato que o `git commit` produzirá, contanto que você não use o sinalizador `-a`.

## Leia mais

- [página man de `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Ferramentas do Git - Reescrevendo o Histórico](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[Sobre a digitalização de segredos](/code-security/secret-security/about-secret-scanning)"
