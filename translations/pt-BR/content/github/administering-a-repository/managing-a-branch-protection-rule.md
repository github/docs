---
title: Managing a branch protection rule
intro: 'You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
---

### About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Pelo fato de o {% data variables.product.company_short %} usar o sinalizador `File::FNM_PATHNAME` para a sintaxe `File.fnmatch`, o curinga não corresponde aos separadores de diretório (`/`). Por exemplo, `qa/*` pode fazer correspondência com todos os branches que começam com `qa/` e contêm uma única barra. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. Para obter mais informações sobre opções de sintaxe para regras de branch, consulte a [documentação de fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Se um repositório tiver várias regras de branch protegido que afetem os mesmos branches, as regras que incluírem um nome de branch específico terão a prioridade mais alta. Se houver mais de uma regra de branch protegido que faça referência ao mesmo nome de branch específico, a regra de branch criada primeiro terá a prioridade mais alta.

As regras de branch protegido que mencionam um caractere especial, como `*`, `?` ou `]`, são aplicadas na ordem em que foram criadas, de modo que as regras mais antigas com esses caracteres têm uma prioridade mais alta.

Para criar uma exceção a uma regra de branch existente, você pode criar outra regra de proteção de branch que tenha prioridade superior, como uma regra para um nome de branch específico.

For more information about each of each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

### Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**. ![Caixa de seleção Pull request review restriction (Restrição de revisão de pull request)](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you'd like to require on the branch. ![Menu suspenso para selecionar o número de revisões de aprovação obrigatórias](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**. ![Caixa de seleção Dismiss stale pull request approvals when new commits are pushed (Ignorar aprovações de pull requests obsoletas ao fazer push de novos commits)](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)". ![Require review from code owners (Exigir revisão de proprietários de código)](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. Para obter mais informações, consulte "
Ignorar uma revisão de pull request". ![Caixa de seleção Restrict who can dismiss pull request reviews (Restringir quem pode ignorar revisões de pull request)](/assets/images/help/repository/PR-review-required-dismissals.png)</p></li> </ul> 
     
     1. Optionally, enable required status checks. 
      - Selecione **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge). ![Opção Required status checks (Verificações de status obrigatórias)](/assets/images/help/repository/required-status-checks.png)

   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**. ![Caixa de seleção Status obrigatório rígido ou flexível](/assets/images/help/repository/protecting-branch-loose-status.png)

   - Na lista de verificações de status disponíveis, selecione as verificações que você deseja tornar obrigatórias.![Lista de verificações de status disponíveis](/assets/images/help/repository/required-statuses-list.png)

1. Optionally, select **Require signed commits**. ![Opção Require signed commits (Exigir commits assinados)](/assets/images/help/repository/require-signed-commits.png)

1. Optionally, select **Require linear history**. ![Opção de histórico linear necessária](/assets/images/help/repository/required-linear-history.png)

1. Outra opção é selecionar **Include administrators** (Incluir administradores). ![Caixa de seleção Include administrators (Incluir administradores)](/assets/images/help/repository/include-admins-protected-branches.png)

1. Optionally,{% if currentVersion == "free-pro-team@latest" %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   
      - Select **Restrict who can push to matching branches**. ![Caixa de seleção Branch restriction (Restrição de branch)](/assets/images/help/repository/restrict-branch.png)

   - Procurar e selecionar pessoas, equipes ou aplicativos que tenham permissão para fazer push para o branch protegido. ![Pesquisa de restrição de branch](/assets/images/help/repository/restrict-branch-search.png)

1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**. ![Permitir opção push forçado](/assets/images/help/repository/allow-force-pushes.png)

1. Optionally, select **Allow deletions**. ![Permitir a opção de exclusão de branch](/assets/images/help/repository/allow-branch-deletions.png)

1. Clique em **Criar**.



### Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.sidebar-settings %}



{% data reusables.repositories.repository-branches %}

1. To the right of the branch protection rule you want to edit, click **Edit**. ![Botão editar](/assets/images/help/repository/edit-branch-protection-rule.png)

1. Make your desired changes to the branch protection rule.

1. Clique em **Save changes** (Salvar alterações). ![Botão Edit message (Editar mensagem)](/assets/images/help/repository/save-branch-protection-rule.png)



### Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.sidebar-settings %}



{% data reusables.repositories.repository-branches %}

1. To the right of the branch protection rule you want to delete, click **Delete**. ![Botão excluir](/assets/images/help/repository/delete-branch-protection-rule.png)
