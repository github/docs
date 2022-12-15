---
title: Gerenciar uma regra de proteção de branch
intro: 'Você pode criar uma regra de proteção de branch para impor determinados fluxos de trabalho para um ou mais branches, como exigir uma revisão de aprovação ou que as verificações de status sejam aprovadas para todas as solicitações de pull mescladas no branch protegido.'
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
shortTitle: Branch protection rule
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614172'
---
## Sobre as regras de proteção do branch

{% data reusables.repositories.branch-rules-example %}

É possível criar uma regra para todos os branches atuais e futuros no repositório com a sintaxe de caractere curinga `*`. Como o {% data variables.product.company_short %} usa o sinalizador `File::FNM_PATHNAME` para a sintaxe `File.fnmatch`, o caractere curinga não corresponde aos separadores de diretório (`/`). Por exemplo, `qa/*` corresponderá a todos os branches que começam com `qa/` e contêm uma barra individual. Você pode incluir várias barras com `qa/**/*` e estender a cadeia de caracteres `qa` com `qa**/**/*` para tornar a regra mais inclusiva. Para obter mais informações sobre as opções de sintaxe para as regras de branch, confira a [documentação de fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Se um repositório tiver várias regras de branch protegido que afetem os mesmos branches, as regras que incluírem um nome de branch específico terão a prioridade mais alta. Se houver mais de uma regra de branch protegido que faça referência ao mesmo nome de branch específico, a regra de branch criada primeiro terá a prioridade mais alta.

As regras de branch protegido que mencionam um caractere especial, como `*`, `?` ou `]`, são aplicadas na ordem em que foram criadas, de modo que as regras mais antigas com esses caracteres tenham uma prioridade mais alta.

Para criar uma exceção a uma regra de branch existente, você pode criar outra regra de proteção de branch que tenha prioridade superior, como uma regra para um nome de branch específico.

Para obter mais informações sobre cada uma das configurações de proteção de branch disponíveis, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".

## Criar uma regra de proteção de branch

Ao criar uma regra de branch, o branch que você especificar ainda não existe no repositório.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Opcionalmente, habilite os pull requests necessários.
   - Em "Proteger os branches correspondentes", selecione **Exigir uma solicitação de pull antes de fazer a mesclagem**.
     ![Caixa de seleção Restrição de revisão da solicitação de pull](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Opcionalmente, para exigir aprovações antes que uma solicitação de pull possa ser mesclada, selecione **Exigir aprovações**, clique no menu suspenso **Número necessário de aprovações antes da mesclagem** e selecione o número de aprovações de revisões que deseja exigir no branch.
     ![Menu suspenso para seleção do número de aprovações de revisão obrigatórias](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. Opcionalmente, habilite as revisões obrigatórias de de pull request.
   - Em "Proteger os branches correspondentes", selecione **Exigir revisões de solicitação de pull antes da mesclagem**.
     ![Caixa de seleção Restrição de revisão da solicitação de pull](/assets/images/help/repository/PR-reviews-required.png)
   - No menu suspenso **Aprovações de revisões obrigatórias**, selecione o número de aprovações de revisões que deseja exigir no branch. 
     ![Menu suspenso para seleção do número de aprovações de revisão obrigatórias](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - Opcionalmente, para ignorar uma revisão de aprovação de solicitação de pull quando um commit de modificação de código for enviado por push para o branch, selecione **Ignorar aprovações de solicitações de pull obsoletas quando novos commits forem enviados por push**.
     ![Caixa de seleção Ignorar aprovações de solicitações de pull obsoletas quando novos commits forem enviados por push](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Opcionalmente, para exigir a revisão de um proprietário do código quando a solicitação de pull afetar o código que tem um proprietário designado, selecione **Exigir revisão de Proprietários do Código**. Para obter mais informações, confira "[Sobre os proprietários de código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".
     ![Exigir revisão dos proprietários do código](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Opcionalmente, para permitir que atores específicos efetuem push do código para o branch sem criar solicitações de pull quando necessário, selecione **Permitir que atores específicos ignorem as solicitações de pull necessárias**. Em seguida, pesquise e selecione os atores que devem ter permissão para ignorar a criação de uma solicitação de pull.
     ![Caixa de seleção Permitir que atores específicos ignorem os requisitos de solicitação de pull]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - Opcionalmente, se o repositório fizer parte de uma organização, selecione **Restringir quem pode ignorar as revisões de solicitação de pull**. Em seguida, procure e selecione os atores que têm permissão para ignorar as revisões de solicitação de pull. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
     ![Caixa de seleção Restringir quem pode ignorar revisões de solicitação de pull]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. Opcionalmente, habilite as verificações de status obrigatórias. Para obter mais informações, confira "[Sobre as verificações de status](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".
   - Selecione **Exigir a aprovação de verificações de status antes da mesclagem**.
     ![Opção Verificações de status obrigatórias](/assets/images/help/repository/required-status-checks.png)
   - Opcionalmente, para garantir que as solicitações de pull sejam testadas com o código mais recente no branch protegido, selecione **Exigir que os branches estejam atualizados antes da mesclagem**.
     ![Caixa de seleção Status obrigatório rígido ou flexível](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Pesquise verificações de status, selecionando as verificações que você deseja exigir.
     ![Interface de pesquisa para verificações de status disponíveis, com uma lista de verificações necessárias](/assets/images/help/repository/required-statuses-list.png)
1. Opcionalmente, selecione **Exigir a resolução de conversas antes da mesclagem**.
  ![Opção Exigir a resolução de conversas antes da mesclagem](/assets/images/help/repository/require-conversation-resolution.png)
1. Opcionalmente, selecione **Exigir commits assinados**.
  ![Opção Exigir commits assinados](/assets/images/help/repository/require-signed-commits.png)
1. Opcionalmente, selecione **Exigir histórico linear**.
  ![Opção Histórico linear obrigatório](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. Opcionalmente, para mesclar as solicitações de pull usando uma fila de mesclagem, selecione **Exigir fila de mesclagem**. {% data reusables.pull_requests.merge-queue-references %} ![Opção Exigir fila de mesclagem](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **Dica:** atualmente, o recurso de fila de mesclagem da solicitação de pull está em versão beta pública limitada e sujeito a alterações. Os proprietários das organizações podem solicitar o acesso antecipado à versão beta entrando na [lista de espera](https://github.com/features/merge-queue/signup).

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. Opcionalmente, para escolher os ambientes nos quais as alterações precisam ser implantadas com sucesso antes da mesclagem, selecione **Exigir que as implantações seja feitas com sucesso antes da mesclagem** e selecione os ambientes.
   ![Opção Exigir implantação bem-sucedida](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. Opcionalmente, selecione {% ifversion bypass-branch-protections %}**Não permitir que as configurações acima sejam ignoradas**.
![Caixa de seleção Não permitir que as configurações acima sejam ignoradas](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png) {% else %}**Aplicar as regras acima aos administradores**.
![Caixa de seleção Aplicar as regras acima aos administradores](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. Opcionalmente, {% ifversion fpt or ghec %} se o repositório pertencer a uma organização que usa o {% data variables.product.prodname_team %} ou o {% data variables.product.prodname_ghe_cloud %},{% endif %} habilite as restrições de branches.
   - Selecione **Restringir quem pode efetuar push em branches correspondentes**.
     ![Caixa de seleção de restrição de branch](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Opcionalmente, para restringir também a criação de branches correspondentes, selecione **Restringir pushes que criam branches correspondentes**.
     ![Caixa de seleção de restrição de criação de branch](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Procurar e selecionar pessoas, equipes ou aplicativos que tenham permissão para fazer push no branch protegido ou criar um branch correspondente.
     ![Pesquisa de restrição de branch]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. Opcionalmente, em "Regras aplicadas a todos, incluindo administradores", selecione **Permitir pushes forçados**.
  ![Opção Permitir pushes forçados](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} Em seguida, escolha quem pode forçar um push para o branch.
    - Selecione **Todos** para permitir que todos com, no mínimo, permissões de gravação no repositório efetuem pushes forçados no branch, incluindo aqueles com permissões de administrador.
    - Selecione **Especificar quem pode efetuar push forçado** para permitir que apenas atores específicos efetuem push forçado no branch. Em seguida, procure e selecione esses atores.
      ![Captura de tela das opções para especificar quem pode forçar um push]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    Para obter mais informações sobre pushes forçados, confira "[Permitir pushes forçados](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)".
1. Opcionalmente, selecione **Permitir exclusões**.
  ![Opção Permitir exclusões de branch](/assets/images/help/repository/allow-branch-deletions.png)
1. Clique em **Criar**.

## Editar uma regra de proteção de branch

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. À direita da regra de proteção de branch que deseja editar, clique em **Editar**.
  ![Botão Editar](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Faça as alterações desejadas na regra de proteção do branch.
1. Clique em **Salvar alterações**.
  ![Botão Salvar alterações](/assets/images/help/repository/save-branch-protection-rule.png)

## Excluir as regras de proteção do branch

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. À direita da regra de proteção de branch que deseja excluir, clique em **Excluir**.
    ![Botão Excluir](/assets/images/help/repository/delete-branch-protection-rule.png)
