---
title: Suporte para clientes do Subversion
intro: Os repositórios GitHub podem ser acessados por meio do Git e de clientes do Subversion (SVN). Este artigo aborda o uso de um cliente do Subversion no GitHub e alguns problemas comuns que podem ocorrer.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O GitHub oferece suporte a clientes do Subversion por meio do protocolo HTTPS. Usamos uma ponte do Subversion para comunicar comandos svn ao GitHub.

### Recursos do Subversion com suporte no GitHub

#### Fazer checkout

A primeira ação a ser executada é um checkout do Subversion.  Como os clones do Git mantêm o diretório de trabalho (onde você edita os arquivos) separado dos dados do repositório, há apenas um branch no diretório de trabalho de cada vez.

Os checkouts do Subversion são diferentes: eles combinam os dados do repositório nos diretórios de trabalho, por isso há um diretório de trabalho para cada branch e tag de que tenha sido feito checkout.  Em repositórios com muitos branches e tags, fazer checkout de tudo pode sobrecarregar a largura de banda, por isso é recomendável começar com um checkout parcial.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

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

5. Obtenha um checkout vazio do diretório `branches`.  É aqui que ficam todos os branches diferentes de `HEAD` e onde você fará branches de recurso.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

#### Criar branches

É possível criar branches usando a ponte do Subversion para o GitHub.

A partir de seu cliente svn, certifique-se de que o "master" é atual atualizando o `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

Em seguida, use `svn copy` para criar um novo branch:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Branch de tópico more_awesome adicionado'
> Adicionando    branches/more_awesome

> Commit da revisão 2 concluído.
```

É possível confirmar a existência do novo branch na lista suspensa de branches do repositório:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

Você também pode confirmar o novo branch por meio da linha de comando:

```shell
$ git fetch
> Em https://github.com/<em>user</em>/<em>repo</em>/
> * [novo branch]    more_awesome -> origin/more_awesome
```

#### Fazer commits no Subversion

Depois que você tiver adicionado alguns recursos e corrigido alguns erros, vai querer fazer commit dessas alterações no GitHub. O procedimento é exatamente igual ao do Subversion, com o qual você já está acostumado. Edite os arquivos e use `svn commit` para registrar as alterações:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Proteção contra problemas conhecidos'
> Enviando    more_awesome/gizmo.rb
> Transmitindo dados do arquivo.
> Commit da revisão 3 concluído.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Alcance do teste para problemas'
> Adicionando    more_awesome/test
> Adicionando    more_awesome/test/gizmo_test.rb
> Transmitindo dados do arquivo.
> Commit da revisão 4 concluído.
```

#### Alternar entre branches

Para alternar entre branches, você provavelmente vai querer começar com um checkout de `trunk`:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

E depois alternar para outro branch:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

### Localizar o SHA do commit do Git para um commit do Subversion

O servidor do Subversion do GitHub expõe o SHA do commit do Git referente a cada commit do Subversion.

Para ver o SHA do commit, você deve solicitar a propriedade remota sem controle de versão `git-commit`.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Com esse SHA do commit, é possível, por exemplo, procurar o commit do Git no GitHub.

### Leia mais

* "[Propriedades do Subversion com suporte no GitHub](/articles/subversion-properties-supported-by-github)"
