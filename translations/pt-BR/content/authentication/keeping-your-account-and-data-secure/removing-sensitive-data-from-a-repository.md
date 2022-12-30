---
title: Remover dados confidenciais de um repositório
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
shortTitle: Remove sensitive data
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083627'
---
A ferramenta `git filter-repo` e o BFG Repo-Cleaner reescrevem o histórico do repositório, o que altera os SHAs dos commits existentes alterados por você e todos os commits dependentes. Os SHAs de commits alterados podem afetar as solicitações de pull abertas no repositório. Recomendamos mesclar ou fechar todas as solicitações de pull abertas antes de remover arquivos do repositório.

Você pode remover o arquivo do último commit com `git rm`. Para obter informações sobre como remover um arquivo que foi adicionado com o commit mais recente, confira "[Sobre arquivos grandes no {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)".

{% warning %}

**Aviso**: este artigo diz a você como tornar commits com dados confidenciais inacessíveis a partir de quaisquer branches ou tags do seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. No entanto, esses commits talvez ainda possam ser acessados em clones ou bifurcações do repositório diretamente por meio de hashes SHA-1 em visualizações em cache no {% data variables.product.product_name %} e por meio de qualquer pull request que faça referência a eles. Não é possível remover dados confidenciais dos clones ou bifurcações de usuários do seu repositório, mas você pode remover permanentemente as visualizações e referências em cache para os dados confidenciais em pull requests no {% data variables.product.product_name %} entrando em contato com {% data variables.contact.contact_support %}. 

**Depois de efetuar push de um commit para o {% data variables.product.product_name %}, você deverá considerar todos os dados confidenciais no commit comprometido.** Se você tiver efetuado commit de uma senha, altere-a. Se tiver feito commit de uma chave, crie outra. A remoção dos dados comprometidos não resolve sua exposição inicial, especialmente em clones ou bifurcações existentes do seu repositório. Considere essas limitações ao tomar a decisão de reescrever a história do repositório.

{% endwarning %}

## Remover um arquivo do histórico do repositório

Você pode limpar um arquivo do histórico do repositório usando a ferramenta `git filter-repo` ou a ferramenta de código aberto BFG Repo-Cleaner.

### Usar o BFG

O [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) é uma ferramenta criada e mantida pela comunidade de código aberto. Ele fornece uma alternativa mais rápida e simples ao `git filter-branch` para remover dados indesejados. 

Por exemplo: para remover o arquivo com dados confidenciais sem alterar o commit mais recente, execute:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para substituir todo o texto listado em `passwords.txt` em todas as ocorrências no histórico do repositório, execute:

```shell
$ bfg --replace-text passwords.txt
```

Depois que os dados confidenciais são removidos, você deve fazer push forçado das suas alterações para {% data variables.product.product_name %}. Fazer push forçado reescreve o histórico do repositório, o que remove dados confidenciais do histórico de commit. Se você fizer push forçado, isso poderá pode sobrescrever commits nos quais outras pessoas basearam o seu trabalho.

```shell
$ git push --force
```

Confira a documentação do [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) para obter instruções completas de uso e download.

### Usando arquivo git filter-repo

{% warning %}

**Aviso:** se você executar `git filter-repo` após fazer stash das alterações, não poderá recuperar as alterações com outros comandos de stash. Antes de executar `git filter-repo`, é recomendado cancelar o stash das alterações feitas. Para cancelar o stash do último conjunto de alterações com stash, execute `git stash show -p | git apply -R`. Para obter mais informações, confira [Ferramentas do Git – Stash e limpeza](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Para ilustrar como o `git filter-repo` funciona, mostraremos como remover o arquivo que contém dados confidenciais do histórico do repositório e adicioná-lo ao `.gitignore` para garantir que ele não sofra um novo commit acidental.

1. Instale a última versão da ferramenta [git filter-repo](https://github.com/newren/git-filter-repo). Você pode instalar o `git-filter-repo` manualmente ou usando um gerenciador de pacotes. Por exemplo, para instalar a ferramenta com HomeBrew, use o comando `brew install`.
  ```
  brew install git-filter-repo
  ```
  Para obter mais informações, confira [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) no repositório `newren/git-filter-repo`.

2. Se você ainda não tem uma cópia local do repositório que contém dados confidenciais no histórico, [clone o repositório](/articles/cloning-a-repository/) no computador local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Navegue até o diretório de trabalho do repositório.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Execute o comando a seguir, substituindo `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` pelo **caminho para o arquivo que deseja remover, não apenas o nome do arquivo**. Esses argumentos vão:
    - Forçar o Git a processar todo o histórico de cada branch e marca, mas não fazer check-out
    - Remover o arquivo especificado, bem como todos os commits vazios gerados como resultado
    - Remova algumas configurações, como a URL remota, armazenada no arquivo *.git/config*. É interessante fazer backup desse arquivo antes para que ele possa ser restaurado mais tarde.
    - **Substituir as marcas existentes**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Observação:** se o arquivo com os dados confidenciais costumava estar em qualquer outro caminho (porque foi movido ou renomeado), você também precisa executar esse comando nesses caminhos.

  {% endnote %}

5. Adicione o arquivo que contém dados confidenciais ao `.gitignore` para garantir que ele não sofra um novo commit acidental.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Verifique se você removeu tudo o que queria do histórico do repositório e se foi feito check-out de todos os branches.
7. Quando estiver satisfeito com o estado do repositório, faça pushes forçados das alterações locais para substituir o repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, bem como todos os branches para os quais você efetuou push: É necessário um push forçado para remover dados confidenciais do seu histórico de commit.
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
8. Para remover o arquivo confidencial das [versões marcadas](/articles/about-releases), você também precisará forçar o push das marcas do Git:
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

Depois de usar a ferramenta BFG ou `git filter-repo` para remover os dados confidenciais e efetuar push das alterações para o {% data variables.product.product_name %}, você precisa executar mais algumas etapas para remover por completo os dados do {% data variables.product.product_name %}.

1. Entre em contato com o {% data variables.contact.contact_support %} e solicite a remoção das visualizações em cache e das referências aos dados confidenciais em pull requests no {% data variables.product.product_name %}. Forneça o nome do repositório e/ou um link para a confirmação que você precisa remover. {% ifversion ghes %} Para obter mais informações sobre como os administradores de site podem remover objetos Git inacessíveis, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)". {% endif %}

2. Diga aos colaboradores para [trocar a base](https://git-scm.com/book/en/Git-Branching-Rebasing) (*não* fazer a mesclagem) dos branches que eles criaram fora do histórico do repositório antigo (afetado). Um commit de merge poderia reintroduzir o histórico antigo completo (ou parte dele) que você acabou de se dar ao trabalho de corrigir.

3. Depois que algum tempo tiver passado e você estiver confiante de que a ferramenta BFG/`git filter-repo` não teve efeitos colaterais não intencionais, force todos os objetos no repositório local a serem desreferenciados e faça a coleta de lixo com os seguintes comandos (usando o Git 1.8.5 ou mais recente):
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

   **Observação:** faça isso também enviando por push o histórico filtrado para um repositório novo ou vazio e fazendo um clone novo do {% data variables.product.product_name %}.

  {% endnote %}

## Evitar commits acidentais no futuro

Há alguns truques simples para evitar fazer commit de coisas não desejadas:

- Use um programa visual como o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) ou o [gitk](https://git-scm.com/docs/gitk) para fazer commit das alterações. Nos programas visuais, geralmente é mais fácil ver exatamente quais arquivos serão adicionados, excluídos e modificados em cada commit.
- Evite os comandos catch-all `git add .` e `git commit -a` na linha de comando: use `git add filename` e `git rm filename` para preparar os arquivos individualmente.
- Use `git add --interactive` para revisar e preparar alterações individualmente em cada arquivo.
- Use `git diff --cached` para revisar as alterações que você preparou para commit. Essa é a comparação exata que `git commit` produzirá, desde que você não use o sinalizador `-a`.

## Leitura adicional

- [Página de manual do `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Ferramentas do Git – Reescrita do histórico](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[Sobre a verificação de segredos](/code-security/secret-security/about-secret-scanning)"
