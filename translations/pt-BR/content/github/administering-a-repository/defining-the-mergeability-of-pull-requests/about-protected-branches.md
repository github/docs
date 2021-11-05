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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Sobre as regras de proteção do branch

É possível aplicar certos fluxos de trabalho ou requisitos antes que um colaborador possa fazer push de alterações em um branch no repositório, incluindo o merge de um pull request no branch, criando uma regra de proteção de branch.

Por padrão, cada regra de proteção de branch desabilita push forçado para os branches correspondentes e impede que os branches correspondentes sejam excluídos. Você pode, opcionalmente, desabilitar essas restrições e habilitar configurações adicionais de proteção de branches.

Por padrão, as restrições de uma regra de proteção de branch não se aplicam a pessoas com permissões de administrador para o repositório. Opcionalmente, você também pode escolher incluir administradores.

{% data reusables.repositories.branch-rules-example %} Para obter mais informações sobre os padrões de nomes do branch, consulte "[Gerenciar uma regra de proteção de branch](/github/administering-a-repository/managing-a-branch-protection-rule)".

{% data reusables.pull_requests.you-can-auto-merge %}

### Sobre as configurações de proteção do branch

Para cada regra de proteção do branch, você pode escolher habilitar ou desabilitar as seguintes configurações.
- [Exigir revisões de pull request antes do merge](#require-pull-request-reviews-before-merging)
- [Exigir verificações de status antes do merge](#require-status-checks-before-merging)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
- [Exigir resolução de conversas antes do merge](#require-conversation-resolution-before-merging){% endif %}
- [Exigir commits assinados](#require-signed-commits)
- [Exigir histórico linear](#require-linear-history)
- [Incluir administradores](#include-administrators)
- [Restringir quem pode fazer push para branches correspondentes](#restrict-who-can-push-to-matching-branches)
- [Permitir push forçado](#allow-force-pushes)
- [Permitir exclusões](#allow-deletions)

Para obter mais informações sobre como configurar a proteção de branches, consulte "[Gerenciar uma regra de proteção de branch](/github/administering-a-repository/managing-a-branch-protection-rule)".

#### Exigir revisões de pull request antes do merge

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Se você habilitar as revisões necessárias, os colaboradores só podem fazer push das alterações em um branch protegido por meio de um pull request aprovado pelo número necessário de revisores com permissões de gravação.

Se uma pessoa com permissões de administrador escolher a opção **Solicitar alterações** em uma revisão, essa pessoa deverá aprovar o pull request antes que o merge possa ser efetuado. Se um revisor que solicita alterações em um pull request não estiver disponível, qualquer pessoa com permissões de gravação no repositório poderá ignorar a revisão de bloqueio.

{% data reusables.repositories.review-policy-overlapping-commits %}

Se um colaborador tentar fazer merge de um pull request com revisões pendentes ou rejeitadas no branch protegido, o colaborador receberá uma mensagem de erro.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Opcionalmente, você pode escolher ignorar as aprovações de pull request obsoletas quando commits são enviados por push. Se alguém fizer push de um commit que modifica código para um pull request aprovado, a aprovação será ignorada e o pull request não poderá ser mesclado. Isso não se aplica se o colaborador fizer push de commits que não modificam código, como mesclar o branch de base no branch do pull request. Para obter mais informações sobre branch base, consulte "[Sobre pull requests](/articles/about-pull-requests)".

Opcionalmente, você pode restringir a capacidade de ignorar comentários de pull request para pessoas ou equipes específicas. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/articles/dismissing-a-pull-request-review)".

Opcionalmente, você pode optar por exigir análises dos proprietários do código. Se você o fizer, qualquer pull request que afeta código com o proprietário do código deverá ser aprovado pelo proprietário desse código antes que o pull request possa ser mesclada no branch protegido.

#### Exigir verificações de status antes do merge

As verificações de status obrigatórias garantem que todos os testes de CI sejam aprovados antes que os colaboradores possam fazer alterações em um branch protegido. Para obter mais informações, consulte "[Configurar branches protegidos](/articles/configuring-protected-branches/)" e "[Habilitar verificações de status obrigatórias](/articles/enabling-required-status-checks)". Para obter mais informações, consulte "[Sobre verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

Antes de habilitar as verificações de status necessárias, é necessário configurar o repositório para usar a API de status. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#statuses)" na documentação do REST.

Depois de habilitar a verificação de status obrigatória, todas as verificações de status necessárias deverão passar para que os colaboradores possam fazer merge das alterações no branch protegido. Depois que todas as verificações de status necessárias passarem, quaisquer commits devem ser enviados por push para outro branch e, em seguida, mesclados ou enviados por push diretamente para o branch protegido.

{% note %}

**Observação:** Qualquer pessoa ou integração com permissões de gravação em um repositório pode configurar o estado de qualquer verificação de status no repositório. O {% data variables.product.company_short %} não analisa se o autor de uma verificação está autorizado a criar uma verificação com um determinado nome ou modificar um status existente. Antes de realizar o merge de uma pull request, você deve verificar se o autor de cada status, listado na caixa de merge, é esperado.

{% endnote %}

Você pode configurar as verificações de status obrigatórias como "flexível" ou "rígida". O tipo de verificação de status obrigatória que você escolher determinará se o branch precisará ser atualizado com o branch base antes do merge.

| Tipo de verificação de status obrigatória | Configuração                                                                                                                                                  | Requisitos de merge                                                    | Considerações                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rígida**                                | A caixa de seleção **Exigir a atualização dos branches antes de fazer merge** fica marcada.                                                                   | O branch **precisa** ser atualizado no branch base antes do merge.     | Este é o comportamento padrão para verificações de status obrigatórias. Podem ser necessárias mais compilações, já que você precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests no branch base protegido.                                       |
| **Flexível**                              | A caixa de seleção **Exigir a atualização dos branches antes de fazer merge** **não** fica marcada.                                                           | O branch **não precisa** ser atualizado no branch base antes do merge. | Serão necessárias menos compilações, já que você não precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests. As verificações de status poderão falhar depois que você fizer merge do branch, caso haja alterações incompatíveis com o branch base. |
| **Desabilitada**                          | A caixa de seleção **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge) **não** fica marcada. | O branch não tem restrições de merge.                                  | Se as verificações de status obrigatórias não estiverem habilitadas, os colaboradores poderão fazer merge do branch a qualquer momento, estando ou não atualizados com o branch base. Isso aumenta a possibilidade de alterações incompatíveis.                                              |

Para obter informações sobre a solução de problemas, consulte "[Solucionar problemas para as verificações de status obrigatórias](/github/administering-a-repository/troubleshooting-required-status-checks)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### Exigir resolução de conversa antes de merge

Exige que todos os comentários no pull request sejam resolvidos antes de poder fazer merge em um branch protegido. Isso garante que todos os comentários sejam resolvidos ou reconhecidos antes do merge.
{% endif %}

#### Exigir commits assinados

Ao habilitar a assinatura de commit obrigatória em um branch, os contribuidores {% if currentVersion == "free-pro-team@latest" %}e bots{% endif %} só podem fazer push de commits que foram assinados e verificados no branch. Para obter mais informações, consulte "[Sobre verificação de assinatura commit](/articles/about-commit-signature-verification)".

{% note %}

{% if currentVersion == "free-pro-team@latest" %}
**Notas:**

* Se você habilitou o modo vigilante, que indica que seus commits serão sempre assinados, todos os commits que {% data variables.product.prodname_dotcom %} indentificar como "parcialmente verificado" serão permitidos em branches que exijam commits assinados. Para obter mais informações sobre o modo vigilante, consulte "[Exibir status de verificação para todos os seus commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".
* Se um colaborador fizer push de um commit não assinado para um branch que exige assinaturas de commit, o colaborador deverá fazer rebase do commit para incluir uma assinatura verificada e, em seguida, fazer push forçado no commit reescrito para o branch.

{% else %}
**Observação:** Se um colaborador fizer push de um commit não assinado para um branch que exige assinaturas de commit, o colaborador deverá fazer rebase do commit para incluir uma assinatura verificada e, em seguida, fazer push forçado no commit reescrito para o branch.
{% endif %}

{% endnote %}

Você sempre pode fazer push de commits locais para o branch se os commits forem assinados e verificados. {% if currentVersion == "free-pro-team@latest" %}Você também pode fazer merge de commits assinados e verificados no branch usando um pull request em {% data variables.product.product_name %}. No entanto, você não pode realizar a combinação por squash e fazer o merge de um pull request no branch em {% data variables.product.product_name %} a menos que você seja o autor do pull request.{% else %}No entanto, você não pode fazer merge de pull requests no branch em {% data variables.product.product_name %}.{% endif %} Você pode {% if currentVersion == "free-pro-team@latest" %}fazer combinação por squash e {% endif %} fazer merge de pull requests localmente. Para obter mais informações, consulte "[Fazer checkout de pull requests localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)".

{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações sobre métodos de merge, consulte "[Sobre métodos de merge em {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github){% endif %}

#### Exigir histórico linear

Aplicar o histórico linear de commit impede que os colaboradores façam push de commits de merge no branch. Isto significa que quaisquer pull requests mesclada no branch protegido devem usar um merge squash ou um merge rebase. Um histórico de commit estritamente linear pode ajudar as equipes a reverter alterações mais facilmente. Para obter mais informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".

Antes de exigir um histórico de commit linear, seu repositório deve permitir merge squash ou merge rebase. Para obter mais informações, consulte "[Configurando merges da pull request](/github/administering-a-repository/configuring-pull-request-merges)".

#### Incluir administradores

Por padrão, as regras de branch protegidos não se aplicam a pessoas com permissões de administrador em um repositório. Você pode habilitar essa configuração para incluir administradores em suas regras de branch protegido.

#### Restringir quem pode fazer push para branches correspondentes

{% if currentVersion == "free-pro-team@latest" %}
Você pode habilitar as restrições do branch se seu repositório for propriedade de uma organização que usa {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Ao habilitar as restrições de branches, apenas usuários, equipes ou aplicativos com permissão podem fazer push para o branch protegido. Você pode visualizar e editar usuários, equipes ou aplicativos com acesso de push a um branch protegido nas configurações do branch protegido.

Você só pode dar acesso de push a um branch protegido a usuários, equipes ou {% data variables.product.prodname_github_apps %} instalados com acesso de gravação a um repositório. As pessoas e os aplicativos com permissões de administrador em um repositório sempre conseguem fazer push em um branch protegido.

#### Permitir push forçado

Por padrão, os blocks do {% data variables.product.product_name %} fazem push forçado em todos os branches protegidos. Quando você habilitar push forçado em um branch protegido, qualquer pessoa com, pelo menos, permissões de gravação no repositório pode forçar o push ao branch, incluindo aqueles com permissões de administrador.

Habilitar push forçado não irá substituir quaisquer outras regras de proteção de branch. Por exemplo, se um branch exigir um histórico de commit linear, você não poderá forçar commits a mesclar commits para esse branch.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}Você não pode habilitar push forçados para um branch protegido se um administrador do site bloqueou o push forçado para todos os branches no seu repositório. Para obter mais informações, consulte "[Bloqueando push forçado para repositórios de propriedade de uma conta de usuário ou organização](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Se um administrador do site bloquear pushes forçados apenas para o branch padrão, você ainda pode habilitar pushes forçados para qualquer outro branch protegido.{% endif %}

#### Permitir exclusões

Por padrão, você não pode excluir um branch protegido. Ao habilitar a exclusão de um branch protegido, qualquer pessoa com permissão de gravação no repositório pode excluir o branch.
