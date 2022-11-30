---
title: Sobre métodos de merge no GitHub
intro: 'Você pode permitir que contribuidores com acesso push ao seu repositório façam merge das respectivas pull requests no {% data variables.product.product_location %} com diferentes opções de merge ou apliquem um método de merge específico para todas as pull requests do seu repositório.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} É possível aplicar um tipo de método de merge, como combinação por squash ou rebase de commit, apena habilitando o método desejado para o repositório.

{% data reusables.pull_requests.default_merge_option %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
O método de merge padrão cria um commit de mesclagem. Você pode impedir que uma pessoa faça pushing com commits por merge em um branch protegido aplicando um histórico de commit linear. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-linear-history)."{% endif %}

### Combinar por squash os commits de merge

{% data reusables.pull_requests.squash_and_merge_summary %}

Antes de habilitar a combinação de commits por squash, considere estas desvantagens:
- Você perde informações sobre quando alterações específicas foram originalmente feitas e quem criou os commits combinados por squash.
- Se você continuar trabalhando no branch principal de um pull request após a combinação por squash e o merge, e, em seguida, criar um novo pull request entre os mesmos branches, commits que você já tenha combinado por squash e feito merge serão listados no novo pull request. Você também pode ter conflitos que tenha que resolver repetidamente em cada pull request consecutivo. Para obter mais informações, consulte "[Sobre merges da pull request](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)".
- Alguns comandos Git que usam a ID "SHA" ou "hash" podem ser mais difíceis de usar, pois a ID SHA para os commits originais é perdida. Por exemplo, usar [`git rerere`](https://git-scm.com/docs/git-rerere) pode não ser tão eficaz.

Para obter mais informações, consulte "[Configurar combinação de commits por squash para pull requests](/articles/configuring-commit-squashing-for-pull-requests)".

### Fazer rebase e merge de seus commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Antes de habilitar o rebase de commit, leve em consideração estas desvantagens:
- Os contribuidores do repositório podem ter que fazer rebase na linha de comando, resolver conflitos e forçar push de suas alterações no branch de tópico da pull request (ou branch de head remoto) para que possam usar a opção **rebase and merge** (fazer rebase e merge) no {% data variables.product.product_location %}. O push forçado deve ser feito com cuidado para que os contribuidores não substituam o trabalho que outras pessoas usaram como base para o respectivo trabalho. Para saber mais sobre quando a opção **Rebase and merge** (Fazer rebase e merge) é desabilitada no {% data variables.product.product_location %} e sobre o fluxo de trabalho para reabilitá-la, consulte "[Sobre merges de pull request](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)".

Para obter mais informações, consulte "[Configurar rebase de commit para pull requests](/articles/configuring-commit-rebasing-for-pull-requests)".
