---
title: Suporte para clientes do Subversion
intro: Os repositórios GitHub podem ser acessados por meio do Git e de clientes do Subversion (SVN). Este artigo aborda o uso de um cliente do Subversion no GitHub e alguns problemas comuns que podem ocorrer.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: 49422fbd5dd07b84975172f077091e92bcd5b543
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126702'
---
O GitHub oferece suporte a clientes do Subversion por meio do protocolo HTTPS. Usamos uma ponte do Subversion para comunicar comandos svn ao GitHub.

## Recursos do Subversion com suporte no GitHub

### Check-out

A primeira ação a ser executada é um checkout do Subversion.  Como os clones do Git mantêm o diretório de trabalho (onde você edita os arquivos) separado dos dados do repositório, há apenas um branch no diretório de trabalho de cada vez.

Os check-outs do Subversion são diferentes: eles combinam os dados do repositório nos diretórios de trabalho, ou seja, há um diretório de trabalho para cada branch e tag com check-out. Para repositórios com muitos branches e muitas tags, o check-out de tudo pode ser uma carga de largura de banda. Portanto, você deve começar com um check-out parcial.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. Faça um checkout vazio do repositório:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Obtenha o branch `trunk`. A ponte do Subversion mapeia o trunk com o branch HEAD do Git.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Obtenha um check-out vazio do diretório `branches`.  É nele que se encontram todos os branches que não são `HEAD` e em que você criará branches de recursos.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### Criar branches

É possível criar branches usando a ponte do Subversion para o GitHub.

No cliente do SVN, verifique se o branch padrão é atual atualizando `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

Em seguida, use `svn copy` para criar um branch:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

É possível confirmar a existência do novo branch na lista suspensa de branches do repositório:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

Você também pode confirmar o novo branch por meio da linha de comando:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Fazer commits no Subversion

Depois que você adicionar alguns recursos e corrigir alguns erros, o ideal será fazer commit dessas alterações no GitHub. O procedimento é exatamente igual ao do Subversion, com o qual você já está acostumado. Edite os arquivos e use `svn commit` para registrar as alterações:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Alternar entre branches

Para alternar entre branches, provavelmente, o ideal é começar com um check-out de `trunk`:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

E depois alternar para outro branch:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

## Localizar o SHA do commit do Git para um commit do Subversion

O servidor do Subversion do GitHub expõe o SHA do commit do Git referente a cada commit do Subversion.

Para ver o SHA de commit, você deve solicitar a propriedade remota sem controle de versão `git-commit`.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Com esse SHA do commit, é possível, por exemplo, procurar o commit do Git no GitHub.

## Leitura adicional

* "[Propriedades do Subversion compatíveis com o GitHub](/articles/subversion-properties-supported-by-github)"
