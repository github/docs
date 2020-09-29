---
title: Resolver um conflito de merge no GitHub
intro: Você pode resolver conflitos de merge simples que envolvem alterações concorrentes na linha usando o editor de conflitos.
redirect_from:
  - /articles/resolving-a-merge-conflict-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você só pode resolver conflitos de merge no {% data variables.product.product_name %} causados por alterações concorrentes na linha, como quando as pessoas fazem alterações diferentes na mesma linha do mesmo arquivo em diferentes branches no seu repositório Git. Para todos os outros tipos de conflito de merge, você deve resolver o conflito localmente na linha de comando. Para obter mais informações, consulte "[Resolver um conflito de merge usando a linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line/)".

{% if currentVersion != "free-pro-team@latest" %}
Se um administrador do site desabilitar o editor de conflitos de merge para pull requests entre repositórios, você não poderá usar o editor de conflitos no {% data variables.product.product_name %} e deverá resolver os conflitos de merge na linha de comando. Por exemplo, se o editor de conflitos de merge estiver desabilitado, você não poderá usá-lo em uma pull request entre uma bifurcação e um repositório upstream.
{% endif %}

{% warning %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}
**Aviso:** Ao resolver um conflito de merge em {% data variables.product.product_name %}, todo o [branch-base](/github/getting-started-with-github/github-glossary#base-branch) do seu pull request é mesclado no [cabeçalho do branch](/github/getting-started-with-github/github-glossary#head-branch), mesmo que o cabeçalho do branch seja o branch-padrão do seu repositório ou um branch protegido. Verifique se você deseja realmente fazer commit para esse branch.
{% else %}
**Aviso:** Quando você resolve um conflito de merge no {% data variables.product.product_name %},  todo o [branch base](/github/getting-started-with-github/github-glossary#base-branch) da sua pull request é mesclada ao [branch head](/github/getting-started-with-github/github-glossary#head-branch). Verifique se você deseja realmente fazer commit para esse branch. Se o branch do cabeçalho for o branch-padrão do seu repositório, você terá a opção de criar um novo branch para servir como o branch do cabeçalho para o seu pull request. Se o branch head estiver protegido, você não será capaz de mesclar sua resolução de conflitos nele, então você será solicitado a criar um novo branch head. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)".
{% endif %}

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique na pull request que tem um conflito de merge que você deseja resolver.
1. Próximo à parte inferior da pull request, clique em **Resolve conflicts** (Resolver conflitos). ![Botão de resolução de conflitos de merge](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Dica:** se o botão **Resolve conflicts** (Resolver conflitos) estiver desativado, o conflito de merge da pull request é muito complexo para ser resolvido no {% data variables.product.product_name %}{% if currentVersion != "free-pro-team@latest" %} ou o administrador do site desabilitou o editor de conflitos para pull requests entre repositórios{% endif %}. Você deve resolver o conflito de merge usando um cliente Git alternativo, ou usando o Git na linha de comando. Para obter mais informações, consulte "[Resolver um conflito de merge usando a linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line)".

 {% endtip %}
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
 ![Exemplo de exibição de conflito de merge com marcadores de conflito](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Se houver mais de um conflito de merge no arquivo, role para baixo até o próximo conjunto de marcadores de conflito e repita as etapas quatro e cinco para resolver o conflito de merge.
1. Depois de resolver todos os conflitos do arquivo, clique em **Mark as resolved** (Marcar como resolvido). ![Clique no botão marcar como resolvido](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Se você tiver mais de um arquivo com um conflito, selecione o próximo arquivo que deseja editar no lado esquerdo da página abaixo de "conflicting files" (arquivos conflitantes) e repita as etapas de quatro a sete até resolver todos os conflitos de merge da pull request. ![Selecione o próximo arquivo conflitante, se aplicável](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Depois de resolver todos os conflitos de merge, clique em **Commit merge** (Fazer commit do merge). Isso incorpora todo o branch base ao branch head. ![Resolve merge conflicts button](/assets/images/help/pull_requests/merge-conflict-commit-changes.png){% if currentVersion ver_lt "enterprise-server@2.22" %}
1. Se solicitado, revise o branch presente no commit. Se desejar fazer commit desse branch, clique em **I understand, update _BRANCH_** (Eu entendo, atualizar BRANCH). ![Janela de confirmação do conflito de merge](/assets/images/help/pull_requests/merge-conflict-confirmation.png){% else %}
1. Se solicitado, revise o branch presente no commit.

   Se o branch head for o branch padrão do repositório, você pode escolher atualizar este branch com as mudanças que você fez para resolver o conflito, ou criar um novo branch e usar isso como o branch head da pull request. ![Solicitar a revisão do branch que será atualizado](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Se você escolher criar um novo branch, digite um nome para o branch.

   Se o branch head de sua pull request estiver protegido, você deve criar um novo branch. Você não terá a opção de atualizar o branch protegido.

   Clique em **Criar branch e atualizar meu pull request** ou **Eu entendi, continuar atualizando _BRANCH_**. O texto do botão corresponde à ação que você está executando.
{% endif %}
1. Para fazer merge da pull request, clique em **Merge pull request** (Fazer merge da pull request). Para obter mais informações sobre outras opções de merge da pull request, consulte "[Fazer merge de uma pull request](/articles/merging-a-pull-request/)".

### Leia mais

- "[Sobre merges de pull request](/articles/about-pull-request-merges)"
