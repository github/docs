---
title: Sobre branches protegidos
intro: 'Você pode proteger branches importantes definindo regras de proteção de branch, que definem se os colaboradores podem excluir ou forçar push para o branch e definem os requisitos para todos os pushes para o branch, tais como verificações de status de passagem ou um histórico linear de commits.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 8ec8ac1b43eacc64f44cf785f66a370466bbae8b
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111566'
---
## Sobre as regras de proteção do branch

É possível aplicar certos fluxos de trabalho ou requisitos antes que um colaborador possa fazer push de alterações em um branch no repositório, incluindo o merge de um pull request no branch, criando uma regra de proteção de branch.

Por padrão, cada regra de proteção de branch desabilita push forçado para os branches correspondentes e impede que os branches correspondentes sejam excluídos. Você pode, opcionalmente, desabilitar essas restrições e habilitar configurações adicionais de proteção de branches.

{% ifversion bypass-branch-protections %} Por padrão, as restrições de uma regra de proteção de branch não se aplicam a pessoas com permissões de administrador para o repositório ou funções personalizadas com a permissão "ignorar proteções de branch". Você pode aplicar opcionalmente as restrições a administradores e funções com a permissão "ignorar proteções de branch" também. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% else %} Por padrão, as restrições de uma regra de proteção de branch não se aplicam a pessoas com permissões de administrador para o repositório. Opcionalmente, você também pode escolher incluir administradores.{% endif %}

{% data reusables.repositories.branch-rules-example %} Para obter mais informações sobre padrões de nomes de branches, confira "[Como gerenciar uma regra de proteção de branch](/github/administering-a-repository/managing-a-branch-protection-rule)".

{% data reusables.pull_requests.you-can-auto-merge %}

## Sobre as configurações de proteção do branch

Para cada regra de proteção do branch, você pode escolher habilitar ou desabilitar as seguintes configurações.
- [Exigir revisões de solicitação de pull antes da mesclagem](#require-pull-request-reviews-before-merging)
- [Exigir verificações de status antes do merge](#require-status-checks-before-merging)
- [Exigir resolução de conversa antes de merge](#require-conversation-resolution-before-merging)
- [Exigir commits assinados](#require-signed-commits)
- [Exigir histórico linear](#require-linear-history) {% ifversion fpt or ghec %}
- [Exigir a fila de mesclagem](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- [Exigir que as implantações tenham êxito antes da mesclagem](#require-deployments-to-succeed-before-merging) {%- endif %} {%- ifversion lock-branch %}
- [Bloquear branch](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [Não permitir que as configurações acima sejam ignoradas](#do-not-allow-bypassing-the-above-settings){% else %}– [Incluir administradores](#include-administrators){% endif %}
- [Restringir quem pode fazer push para branches correspondentes](#restrict-who-can-push-to-matching-branches)
- [Permitir pushes forçados](#allow-force-pushes)
- [Permitir exclusões](#allow-deletions)

Para obter mais informações sobre como configurar a proteção de branch, confira "[Como gerenciar uma regra de proteção de branch](/github/administering-a-repository/managing-a-branch-protection-rule)".

### Exigir revisões de pull request antes do merge

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Se você habilitar as revisões necessárias, os colaboradores só podem fazer push das alterações em um branch protegido por meio de um pull request aprovado pelo número necessário de revisores com permissões de gravação.

Se uma pessoa com permissões de administrador escolher a opção **Solicitar alterações** em uma revisão, ela precisará aprovar a solicitação de pull antes que a mesclagem possa ser feita. Se um revisor que solicita alterações em um pull request não estiver disponível, qualquer pessoa com permissões de gravação no repositório poderá ignorar a revisão de bloqueio.

{% data reusables.repositories.review-policy-overlapping-commits %}

Se um colaborador tentar fazer merge de um pull request com revisões pendentes ou rejeitadas no branch protegido, o colaborador receberá uma mensagem de erro.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Opcionalmente, você pode escolher ignorar as aprovações de pull request obsoletas quando commits são enviados por push. Se alguém fizer push de um commit que modifica código para um pull request aprovado, a aprovação será ignorada e o pull request não poderá ser mesclado. Isso não se aplica se o colaborador fizer push de commits que não modificam código, como mesclar o branch de base no branch do pull request. Para obter informações sobre o branch base, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Opcionalmente, você pode restringir a capacidade de ignorar comentários de pull request para pessoas ou equipes específicas. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

Opcionalmente, você pode optar por exigir análises dos proprietários do código. Se você o fizer, qualquer pull request que afeta código com o proprietário do código deverá ser aprovado pelo proprietário desse código antes que o pull request possa ser mesclada no branch protegido.

{% ifversion last-pusher-require-approval %} Opcionalmente, você pode exigir aprovações de alguém que não seja a última pessoa a enviar por push para um branch para que uma solicitação de pull possa ser mesclada. Isso garante que mais de uma pessoa veja as solicitações de pull no estado final antes que elas sejam mescladas em um branch protegido. Se você habilitar esse recurso, o usuário mais recente a efetuar push das alterações precisará de uma aprovação, independentemente da proteção para aprovações necessárias no branch. Os usuários que já revisaram uma solicitação de pull podem reaprová-la após o push mais recente para atender a esse requisito.
{% endif %}

### Exigir verificações de status antes do merge

As verificações de status obrigatórias garantem que todos os testes de CI sejam aprovados antes que os colaboradores possam fazer alterações em um branch protegido. Para obter mais informações, consulte "<a href="/articles/configuring-protected-branches/">Configurar branches protegidos</a>" e "<a href="/articles/enabling-required-status-checks">Habilitar verificações de status obrigatórias</a>". Para obter mais informações, confira "[Sobre as verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

Para habilitar as verificações de status necessárias, é necessário configurar o repositório para usar a API de status de commit. Para obter mais informações, confira "[Status de commit](/rest/commits/statuses)" na documentação da API REST.

Depois de habilitar a verificação de status obrigatória, todas as verificações de status necessárias deverão passar para que os colaboradores possam fazer merge das alterações no branch protegido. Depois que todas as verificações de status necessárias passarem, quaisquer commits devem ser enviados por push para outro branch e, em seguida, mesclados ou enviados por push diretamente para o branch protegido.

Qualquer pessoa ou integração com permissões de gravação em um repositório pode definir o estado de qualquer verificação de status no repositório{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}, mas em alguns casos você só pode aceitar uma verificação de status de um {% data variables.product.prodname_github_app %} específico. Ao adicionar a verificação de status necessária, você pode selecionar um aplicativo que definiu essa verificação recentemente como a fonte esperada de atualizações de status.{% endif %} Se o status for definido por qualquer outra pessoa ou integração, o merge não será permitido. Se você selecionar "qualquer fonte", você ainda pode verificar manualmente o autor de cada status, listado na caixa de merge.

Você pode configurar as verificações de status obrigatórias como "flexível" ou "rígida". O tipo de verificação de status obrigatória que você escolher determinará se o branch precisará ser atualizado com o branch base antes do merge.

| Tipo de verificação de status obrigatória | Configuração | Requisitos de merge | Considerações |
| --- | --- | --- | --- |
| **Rigoroso** | A caixa de seleção **Exigir a atualização dos branches antes da mesclagem** está marcada. | O branch **precisa** estar atualizado com o branch base antes da mesclagem. | Este é o comportamento padrão para verificações de status obrigatórias. Podem ser necessárias mais compilações, já que você precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests no branch base protegido.|
| **Flexível** | A caixa de seleção **Exigir a atualização dos branches antes da mesclagem** **não** está marcada. | O branch **não** precisa estar atualizado com o branch base antes da mesclagem. | Serão necessárias menos compilações, já que você não precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests. As verificações de status poderão falhar depois que você fizer merge do branch, caso haja alterações incompatíveis com o branch base. |
| **Desabilitado** | A caixa de seleção **Exigir a aprovação de verificações de status antes da mesclagem** **não** está marcada. | O branch não tem restrições de merge. | Se as verificações de status obrigatórias não estiverem habilitadas, os colaboradores poderão fazer merge do branch a qualquer momento, estando ou não atualizados com o branch base. Isso aumenta a possibilidade de alterações incompatíveis.

Para obter informações sobre solução de problemas, confira "[Solução de problemas de verificações de status obrigatórias](/github/administering-a-repository/troubleshooting-required-status-checks)".

### Exigir resolução de conversa antes de merge

Exige que todos os comentários no pull request sejam resolvidos antes de poder fazer merge em um branch protegido. Isso garante que todos os comentários sejam resolvidos ou reconhecidos antes do merge.

### Exigir commits assinados

Quando você habilitar a assinatura de commit obrigatória em um branch, os colaboradores {% ifversion fpt or ghec %}e os bots{% endif %} só poderão efetuar push de commits que foram assinados e verificados no branch. Para obter mais informações, confira "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)".

{% note %}

{% ifversion fpt or ghec %} **Observações:** 

* Se você habilitou o modo vigilante, que indica que seus commits serão sempre assinados, todos os commits que {% data variables.product.prodname_dotcom %} indentificar como "parcialmente verificado" serão permitidos em branches que exijam commits assinados. Para obter mais informações sobre o modo vigilante, confira "[Como ver os status de verificação de todos os seus commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".
* Se um colaborador fizer push de um commit não assinado para um branch que exige assinaturas de commit, o colaborador deverá fazer rebase do commit para incluir uma assinatura verificada e, em seguida, fazer push forçado no commit reescrito para o branch.

{% else %} **Observação:** se um colaborador efetuar push de um commit não assinado para um branch que exige assinaturas de commit, o colaborador precisará trocar a base do commit para incluir uma assinatura verificada e efetuar um push forçado do commit reescrito para o branch.
{% endif %}

{% endnote %}

Você sempre pode fazer push de commits locais para o branch se os commits forem assinados e verificados. {% ifversion fpt or ghec %}Você também pode mesclar commits assinados e verificados no branch usando uma solicitação de pull no {% data variables.product.product_name %}. No entanto, você não pode mesclar por squash nem mesclar uma solicitação de pull no branch no {% data variables.product.product_name %}, a menos que seja o autor da solicitação de pull.{% else %} No entanto, você não pode mesclar as solicitações de pull no branch no {% data variables.product.product_name %}.{% endif %} Você pode {% ifversion fpt or ghec %}mesclar por squash e {% endif %}mesclar as solicitações de pull localmente. Para obter mais informações, confira "[Como verificar as solicitações de pull localmente](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)".

{% ifversion fpt or ghec %} Para obter mais informações sobre os métodos de mesclagem, confira "[Sobre os métodos de mesclagem do {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)".{% endif %}

### Exigir histórico linear

Aplicar o histórico linear de commit impede que os colaboradores façam push de commits de merge no branch. Isto significa que quaisquer pull requests mesclada no branch protegido devem usar um merge squash ou um merge rebase. Um histórico de commit estritamente linear pode ajudar as equipes a reverter alterações mais facilmente. Para obter mais informações sobre os métodos de mesclagem, confira "[Sobre as mesclagens de solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".

Antes de exigir um histórico de commit linear, seu repositório deve permitir merge squash ou merge rebase. Para obter mais informações, confira "[Como configurar mesclagens de solicitações de pull](/github/administering-a-repository/configuring-pull-request-merges)".

{% ifversion fpt or ghec %}
### Exigir uma fila de fusão

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### Exigir que as implantações tenham êxito antes da mesclagem

Você pode exigir que as alterações sejam implantadas com sucesso em ambientes específicos antes que um branch possa ser mesclado. Por exemplo, você pode usar essa regra para garantir que as alterações sejam implantadas com sucesso em um ambiente de preparo antes que as alterações sejam mescladas com o branch padrão.

{% ifversion lock-branch %}
### Bloquear branch

O bloqueio de um branch garante que nenhum commit seja feito no branch. Por padrão, um repositório com fork não dá suporte à sincronização de repositório upstream. Você pode habilitar a opção **Permitir a sincronização de fork** para efetuar pull de alterações do repositório upstream, impedindo outras contribuições para o branch do fork.
{%  endif %}

{% ifversion bypass-branch-protections %}### Não permitir que as configurações acima sejam ignoradas{% else %}
### Incluir administradores{% endif %}

{% ifversion bypass-branch-protections %} Por padrão, as restrições de uma regra de proteção de branch não se aplicam a pessoas com permissões de administrador para o repositório ou funções personalizadas com a permissão "ignorar proteções de branch" em um repositório. 

Você pode habilitar essa configuração para aplicar as restrições a administradores e funções com a permissão "ignorar proteções de branch" também.  Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% else %} Por padrão, as regras de branch protegidos não se aplicam a pessoas com permissões de administrador em um repositório. Você pode habilitar essa configuração para incluir administradores em suas regras de branch protegido.{% endif %}

### Restringir quem pode fazer push para branches correspondentes

{% ifversion fpt or ghec %} Você pode habilitar as restrições do branch se o seu repositório pertencer a uma organização que usa o {% data variables.product.prodname_team %} ou o {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Ao habilitar as restrições de branches, apenas usuários, equipes ou aplicativos com permissão podem fazer push para o branch protegido. Você pode visualizar e editar usuários, equipes ou aplicativos com acesso de push a um branch protegido nas configurações do branch protegido. Quando as verificações de status forem necessárias, as pessoas, as equipes e os aplicativos com permissão para fazer push em um branch protegido ainda serão impedidos de realizar a mesclagem no branch se a verificação necessária falhar. As pessoas, equipes, e aplicativos que têm permissão para fazer push em um branch protegido ainda precisarão criar um pull request quando forem necessários pull requests.

{% ifversion restrict-pushes-create-branch %} Opcionalmente, você pode aplicar as mesmas restrições à criação de branches que correspondam à regra. Por exemplo, se você criar uma regra que só permita que uma determinada equipe envie por push para quaisquer branches que contenham a palavra `release`, somente os membros dessa equipe poderão criar um novo branch que contenha a palavra `release`.
{% endif %}

Você só pode fornecer acesso de push a um branch protegido, ou dar permissão para criar um branch correspondente, a usuários, equipes ou {% data variables.product.prodname_github_apps %} instalados com acesso de gravação a um repositório. As pessoas e os aplicativos com permissões de administrador em um repositório sempre conseguem enviar por push a um branch protegido{% ifversion restrict-pushes-create-branch %} ou criar um branch correspondente{% endif %}.

### Permitir push forçado

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Por padrão, o {% data variables.product.product_name %} bloqueia os pushes forçados em todos os branches protegidos. Ao habilitar push forçado em um branch protegido, você pode escolher um dos dois grupos que podem fazer push forçado:

1. Permitir que todos com, no mínimo, permissões de gravação para que o repositório faça push forçado no branch, incluindo aqueles com permissões de administrador.
1. Permitir apenas pessoas ou equipes específicas façam push forçado no branch.

Se alguém fizer um push forçado em um branch, ele poderá substituir commits em que outros colaboradores colaboradores basearam seu trabalho. As pessoas podem ter conflitos de merge ou pull requests corrompidos.

{% else %} Por padrão, o {% data variables.product.product_name %} bloqueia os pushes forçados em todos os branches protegidos. Quando você habilitar push forçado em um branch protegido, qualquer pessoa com, pelo menos, permissões de gravação no repositório pode forçar o push ao branch, incluindo aqueles com permissões de administrador. Se alguém fizer um push forçado em um branch, ele poderá substituir commits em que outros colaboradores colaboradores basearam seu trabalho. As pessoas podem ter conflitos de merge ou pull requests corrompidos.
{% endif %}

Habilitar push forçado não irá substituir quaisquer outras regras de proteção de branch. Por exemplo, se um branch exigir um histórico de commit linear, você não poderá forçar commits a mesclar commits para esse branch.

{% ifversion ghes or ghae %}Você não pode habilitar os pushes forçados para um branch protegido se um administrador do site bloquear os pushes forçados para todos os branches do seu repositório. Para obter mais informações, consulte "[Bloquear pushes impostos para repositórios pertencentes a uma conta pessoal ou organização](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)".

Se um administrador do site bloquear pushes forçados apenas para o branch padrão, você ainda pode habilitar pushes forçados para qualquer outro branch protegido.{% endif %}

### Permitir exclusões

Por padrão, você não pode excluir um branch protegido. Ao habilitar a exclusão de um branch protegido, qualquer pessoa com permissão de gravação no repositório pode excluir o branch.
