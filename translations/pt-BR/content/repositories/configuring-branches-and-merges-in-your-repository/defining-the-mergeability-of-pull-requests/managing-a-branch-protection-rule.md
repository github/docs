---
title: Gerenciar uma regra de proteção de branch
intro: 'Você pode criar uma regra de proteção de branch para aplicar certos fluxos de trabalho para um ou mais branches, como exigir uma revisão de aprovação ou verificações de status de aprovação para todos os pull requests mesclados no branch protegido.'
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
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Regra de proteção de branch
---

## Sobre as regras de proteção do branch

{% data reusables.repositories.branch-rules-example %}

É possível criar uma regra para todos os branches atuais e futuros no repositório com a sintaxe curinga `*`. Pelo fato de o {% data variables.product.company_short %} usar o sinalizador `File::FNM_PATHNAME` para a sintaxe `File.fnmatch`, o curinga não corresponde aos separadores de diretório (`/`). Por exemplo, `qa/*` pode fazer correspondência com todos os branches que começam com `qa/` e contêm uma única barra. Você pode incluir várias barras com `qa/**/*` e você pode estender a string `qa` com `qa**/**/*` para tornar a regra mais inclusiva. Para obter mais informações sobre opções de sintaxe para regras de branch, consulte a [documentação de fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Se um repositório tiver várias regras de branch protegido que afetem os mesmos branches, as regras que incluírem um nome de branch específico terão a prioridade mais alta. Se houver mais de uma regra de branch protegido que faça referência ao mesmo nome de branch específico, a regra de branch criada primeiro terá a prioridade mais alta.

As regras de branch protegido que mencionam um caractere especial, como `*`, `?` ou `]`, são aplicadas na ordem em que foram criadas, de modo que as regras mais antigas com esses caracteres têm uma prioridade mais alta.

Para criar uma exceção a uma regra de branch existente, você pode criar outra regra de proteção de branch que tenha prioridade superior, como uma regra para um nome de branch específico.

Para obter mais informações sobre cada uma das configurações de proteção de branches disponíveis, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)".

## Criar uma regra de proteção de branch

Ao criar uma regra de branch, o branch que você especificar ainda não existe no repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Opcionalmente, habilite os pull requests necessários.
   - Em "Proteger os branches correspondentes", selecione **Exigir um pull request antes de realizar o merge**. ![Caixa de seleção Pull request review restriction (Restrição de revisão de pull request)](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Opcionalmente, para exigir aprovações antes que um pull request possa ser mesclado, selecione **Exigir aprovações**, clique no menu suspenso **Número necessário de aprovações antes do merge** e, em seguida, selecione o número de aprovações de revisões que deseja exigir no branch. ![Menu suspenso para selecionar o número de revisões de aprovação obrigatórias](/assets/images/help/repository/number-of-required-review-approvals-updated.png)
{% else %}
1. Opcionalmente, habilite as revisões obrigatórias de de pull request.
   - Em "Proteger os branches correspondentes", selecione **Exigir revisões de pull request antes do merge**. ![Caixa de seleção Pull request review restriction (Restrição de revisão de pull request)](/assets/images/help/repository/PR-reviews-required.png)
   - Clique no menu suspenso **Revisões de aprovação necessárias** e, em seguida, selecione o número de revisões que você deseja exigir no branch. ![Menu suspenso para selecionar o número de revisões de aprovação obrigatórias](/assets/images/help/repository/number-of-required-review-approvals.png)
{% endif %}
   - Opcionalmente, para ignorar uma revisão de aprovação de pull request quando um commit de modificação de código for enviado por push para o branch, selecione **Ignorar aprovações obsoletas de pull request quando novos commits forem enviados por push**. ![Caixa de seleção Dismiss stale pull request approvals when new commits are pushed (Ignorar aprovações de pull requests obsoletas ao fazer push de novos commits)](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Opcionalmente, para exigir a revisão de um proprietário do código quando o pull request afeta o código que tem um proprietário designado, selecione **Exigir revisão de Proprietários do Código**. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)". ![Require review from code owners (Exigir revisão de proprietários de código)](/assets/images/help/repository/PR-review-required-code-owner.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Opcionalmente, para permitir que pessoas ou equipes específicas enviem código por push para o branch sem criar pull requests quando necessário, selecione **permitir que atores específicos ignorem pull requests**. Em seguida, pesquise e selecione as pessoas ou equipes que devem ter permissão para pular a criação de um pull request. ![Permitir que os atores específicos ignorem a caixa de seleção de requisitos de pull request](/assets/images/help/repository/PR-bypass-requirements.png)
{% endif %}
   - Opcionalmente, se o repositório fizer parte de uma organização, selecione **Restringir quem pode ignorar as revisões de pull request**. Em seguida, procure e selecione as pessoas ou equipes que têm permissão para ignorar as revisões de pull request. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)". ![Caixa de seleção Restrict who can dismiss pull request reviews (Restringir quem pode ignorar revisões de pull request)](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Opcionalmente, habilite as verificações de status obrigatórias. Para obter mais informações, consulte "[Sobre verificações de status](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".
   - Selecione **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge). ![Opção Required status checks (Verificações de status obrigatórias)](/assets/images/help/repository/required-status-checks.png)
   - Opcionalmente, para garantir que os pull requests sejam testados com o código mais recente no branch protegido, selecione **Exigir que os branches estejam atualizados antes do merge**. ![Caixa de seleção Status obrigatório rígido ou flexível](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Pesquise verificações de status, selecionando as verificações que você deseja exigir. ![Interface de pesquisa para verificações de status disponíveis, com lista de verificações necessárias](/assets/images/help/repository/required-statuses-list.png)
{%- ifversion fpt or ghes > 3.1 or ghae %}
1. Opcionalmente, selecione **Exige resolução de conversas antes de fazer merge**. ![Exigir resolução de conversas antes de fazer o merge](/assets/images/help/repository/require-conversation-resolution.png)
{%- endif %}
1. Opcionalmente, selecione **Exigir commits assinados**. ![Opção Require signed commits (Exigir commits assinados)](/assets/images/help/repository/require-signed-commits.png)
1. Opcionalmente, selecione **Exigir histórico linear**. ![Opção de histórico linear necessária](/assets/images/help/repository/required-linear-history.png)
{%- ifversion fpt or ghec %}
1. Opcionalmente, para fazer merge de pull requests usando uma fila de merge, selecione **Exigir fila de merge**. {% data reusables.pull_requests.merge-queue-references %} ![Opção de exigir fila de merge](/assets/images/help/repository/require-merge-queue.png)
  {% tip %}

  **Dica:** O recurso de merge da fila de pull request está atualmente em versão beta pública limitada e sujeito a alterações. Organizations owners can request early access to the beta by joining the [waitlist](https://github.com/features/merge-queue/signup).

  {% endtip %}
{%- endif %}
{%- if required-deployments %}
1. Optionally, to choose which environments the changes must be successfully deployed to before merging, select **Require deployments to succeed before merging**, then select the environments. ![Require successful deployment option](/assets/images/help/repository/require-successful-deployment.png)
{%- endif %}
1. Opcionalmente, selecione **Aplicar as regras acima aos administradores**. ![Aplicar as regras acima à caixa de seleção dos administradores](/assets/images/help/repository/include-admins-protected-branches.png)
1. Opcionalmente, {% ifversion fpt or ghec %} se o repositório pertencer a uma organização que usa {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %},{% endif %} habilitar as restrições de branches.
   - Selecione **Restringir quem pode fazer push para os branches correspondentes**. ![Caixa de seleção Branch restriction (Restrição de branch)](/assets/images/help/repository/restrict-branch.png)
   - Procurar e selecionar pessoas, equipes ou aplicativos que tenham permissão para fazer push para o branch protegido. ![Pesquisa de restrição de branch](/assets/images/help/repository/restrict-branch-search.png)
1. Opcionalmente, em "Regras aplicadas a todos incluindo administradores", selecione **Permitir pushes forçados**. ![Permitir opção push forçado](/assets/images/help/repository/allow-force-pushes.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %}
  Em seguida, escolha quem pode fazer push forçado no branch.
    - Selecione **Todos** para permitir que todos com pelo menos permissões de escrita no repositório para forçar push para o branch, incluindo aqueles com permissões de administrador.
    - Selecione **Especificar quem pode fazer push forçado** para permitir que apenas pessoas ou equipes específicas possam fazer push forçado no branch. Em seguida, procure e selecione essas pessoas ou equipes. ![Captura de tela das opções para especificar quem pode fazer push forçado](/assets/images/help/repository/allow-force-pushes-specify-who.png)
{% endif %}

    Para obter mais informações sobre push forçado, consulte "[Permitir pushes forçados](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)".
1. Opcionalmente, selecione **Permitir exclusões**. ![Permitir a opção de exclusão de branch](/assets/images/help/repository/allow-branch-deletions.png)
1. Clique em **Criar**.

## Editar uma regra de proteção de branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. À direita da regra de proteção de branch que você deseja editar, clique em **Editar**. ![Botão editar](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Faça as alterações desejadas na regra de proteção do branch.
1. Clique em **Save changes** (Salvar alterações). ![Botão Edit message (Editar mensagem)](/assets/images/help/repository/save-branch-protection-rule.png)

## Excluir as regras de proteção do branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. À direita da regra de proteção do branch que você deseja excluir, clique em **Excluir**. ![Botão excluir](/assets/images/help/repository/delete-branch-protection-rule.png)
