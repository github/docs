---
title: Alterar o branch base de uma pull request
intro: 'Depois que uma pull request é aberta, você pode alterar o branch base para comparar as alterações na pull request em relação a um branch diferente.'
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Aviso**: quando você altera o branch base da sua pull request, alguns commits podem ser removidos da linha do tempo. Os comentários da revisão também podem se tornar desatualizados, pois a linha de código mencionada no comentário pode não fazer mais parte das alterações na pull request.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja modificar.
3. Ao lado do título da pull request, clique em **Edit** (Editar). ![Botão de edição Pull request](/assets/images/help/pull_requests/pull-request-edit.png)
4. No menu suspenso do branch base, selecione o branch base em relação ao qual deseja [comparar as alterações](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Menu suspenso do branch base ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Leia as informações sobre como alterar o branch base e clique em **Change base** (Alterar base). ![Botão de confirmação de alteração do branch base ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Dica:** Ao abrir um pull request, {% data variables.product.product_name %} definirá a base para o commit das referências de branches. Se o branch for atualizado no futuro, {% data variables.product.product_name %} não irá atualizar o commit do branch de base.

{% endtip %}

### Leia mais

- "[Criar uma pull request](/articles/creating-a-pull-request)"
- "[Sobre pull requests](/articles/about-pull-requests)"
- "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
