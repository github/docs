---
title: Configurar branches protegidos e verificações de status obrigatórias
intro: 'Você pode habilitar branches protegidos para limitar a manipulação dos branches, além de impor verificações de status obrigatórias antes de fazer merge de um branch em uma pull request ou antes de fazer push de commits em um branch local para o branch remoto protegido.'
redirect_from:
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

Qualquer pessoa com permissões de administrador em um repositório pode habilitar restrições de branch.

### Habilitar branches protegidos em um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Clique **Criar**.

### Tipos de verificações de status obrigatórias

| Tipo de verificação de status obrigatória | Configuração                                                                                                                                                  | Requisitos de merge                                                    | Considerações                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rígida**                                | A caixa de seleção **Require branches to be up-to-date before merging** (Exigir a atualização dos branches antes de fazer merge) fica marcada.                | O branch **precisa** ser atualizado no branch base antes do merge.     | Este é o comportamento padrão para verificações de status obrigatórias. Podem ser necessárias mais compilações, já que você precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests no branch base protegido.                                       |
| **Flexível**                              | A caixa de seleção **Require branches to be up-to-date before merging** (Exigir a atualização dos branches antes de fazer merge) **não** fica marcada.        | O branch **não precisa** ser atualizado no branch base antes do merge. | Serão necessárias menos compilações, já que você não precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests. As verificações de status poderão falhar depois que você fizer merge do branch, caso haja alterações incompatíveis com o branch base. |
| **Desabilitada**                          | A caixa de seleção **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge) **não** fica marcada. | O branch não tem restrições de merge.                                  | Se as verificações de status obrigatórias não estiverem habilitadas, os colaboradores poderão fazer merge do branch a qualquer momento, estando ou não atualizados com o branch base. Isso aumenta a possibilidade de alterações incompatíveis.                                              |

### Habilitar verificações de status obrigatórias

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecione **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge). ![Opção Required status checks (Verificações de status obrigatórias)](/assets/images/help/repository/required-status-checks.png)
6. Na lista de verificações de status disponíveis, selecione aquelas que você deseja tornar obrigatórias. ![Lista de verificações de status disponíveis](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
8. Outra opção é desmarcar **Require branches to be up to date before merging** (Exigir que os branches sejam atualizados antes de fazer merge). Se selecionada, isso garante que o branch foi testado com o código mais recente no branch básico. ![Caixa de seleção Status obrigatório rígido ou flexível](/assets/images/help/repository/protecting-branch-loose-status-new.png)
9. Opcionalmente, selecione {% if currentVersion ver_gt "enterprise-server@2.18" %}**Restringir quem pode fazer push em branches correspondentes**{% else %}**Restringir quem pode fazer push neste branch**{% endif %}. ![Caixa de seleção restrição de branch]{% if currentVersion ver_gt "enterprise-server@2.18" %}(/assets/images/help/repository/restrict-branch.png){% else %}(/assets/images/help/repository/restrict-branch-push.png){% endif %}
10. Pesquise e selecione as pessoas{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion ver_gt "enterprise-server@2.18" %} ou apps{% endif %} que terão permissão para fazer push no branch protegido. ![Pesquisa de restrição de branch](/assets/images/help/repository/restrict-branch-search.png)
11. Clique **Criar**.

{% data reusables.repositories.required-status-merge-tip %}
