---
title: Comparar commits
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode comparar o estado de seu repositório entre os branches, tags, commits e datas. Para comparar diferentes versões do repositório, adicione `/compare` ao caminho do seu repositório.

Demonstraremos o poder da comparação observando a página de comparação de [uma bifurcação do repo Linguist](https://github.com/octocat/linguist), que está em [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Cada exibição de comparação do repositório contém dois menus suspenso: `base` e `compare`.

`base` deve ser considerado o ponto de partida da sua comparação e `compare` é o ponto final. Durante uma comparação, você sempre pode alterar seus pontos `base` e `compare` clicando em **Editar**.

### Comparar branches

O uso mais comum de Compare é comparar os branches, como quando você está iniciando um novo pull request. Você sempre será direcionado à visualização de comparação do branch ao iniciar [um novo pull request](/articles/creating-a-pull-request).

Para comparar branches, é possível selecionar o nome de um branch no menu suspenso `compare` na parte superior da página.

Veja a seguir um exemplo de uma [comparação entre dois branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

### Comparar tags

A comparação de tags de versão irá mostrar alterações no seu repositório desde a última versão. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} Para obter mais informações, consulte "[Comparar versões](/github/administering-a-repository/comparing-releases)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}Para comparar tags, você pode selecionar o nome de uma tag no menu suspenso `comparar` na parte superior da página.{% else %} Em vez de digitar o nome de um branch, digite o nome da sua tag no menu suspenso `comparar`.{% endif %}

Veja a seguir o exemplo de uma [comparação entre duas tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

### Comparar commits

Você também pode comparar dois commits arbitrários em seu repositório ou suas bifurcações no {% data variables.product.prodname_dotcom %} em uma comparação de diff de dois pontos.

Para comparar rapidamente dois commits ou IDs de objeto do Git (OIDs, Object IDs) diretamente entre si em uma comparação de diff de dois pontos no {% data variables.product.prodname_dotcom %}, edite a URL da página "Comparar alterações" do seu repositório.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Para saber mais sobre outras opções de comparação, consulte "[Comparações de diff de três pontos e dois pontos](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)".

### Comparação entre bifurcações

Você pode comparar seu repositório base e qualquer repositório bifurcado. Essa é a exibição que é apresentada quando um usuário executa uma pull request em um projeto.

Para comparar branches em repositórios diferentes, anteceda os nomes do branch com nomes de usuários. Por exemplo, ao especificar o `octocat:main` para `base` e `octo-org:main` para `compare`você pode comparar o branch `principal` dos repositórios respectivamente que pertencem a `octocat` e `octo-org`.

Veja a seguir o exemplo de uma [comparação entre dois repositórios](https://github.com/octocat/linguist/compare/master...octo-org:master).

### Comparações entre commits

Como atalho, o Git usa a notação `^` para indicar "um commit antes".

Você pode usar essa notação para comparar um único commit ou branch com seus antecessores imediatos. Por exemplo, `96d29b7^^^^^` indica cinco commits anteriores a `96d29b7`, pois há cinco marcas `^`. Digitar `96d29b7^^^^^` no branch `base` e `96d29b7` no branch `compare` compara os cinco commits feitos antes de `96d29b7` com o commit `96d29b7`.

Veja a seguir o exemplo de uma [comparação usando a notação `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

### Leia mais

- "[Alterar o branch base de uma pull request](/articles/changing-the-base-branch-of-a-pull-request)"
