---
title: Habilitar verificações de status obrigatórias
intro: Os administradores de repositório podem impor verificações de status obrigatórias antes de fazer merge de um branch em uma pull request ou antes de fazer push de commits em um branch local para o branch remoto protegido.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.protected-branches-options %}

Antes de habilitar as verificações de status necessárias, é necessário configurar o repositório para usar a API de status. Para obter mais informações, consulte "[Construindo um Servidor CI](/guides/building-a-ci-server/)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Em "Proteger os branches correspondentes", selecione **Exigir verificações de status para passar antes de realizar o merge**. ![Opção Required status checks (Verificações de status obrigatórias)](/assets/images/help/repository/required-status-checks.png)
7. Outra opção é selecionar **Exigir branches atualizados antes de efetuar merge**  Se selecionada, isso garante que o branch foi testado com o código mais recente no branch básico. ![Caixa de seleção Status obrigatório rígido ou flexível](/assets/images/help/repository/protecting-branch-loose-status.png)
7. Na lista de verificações de status disponíveis, selecione as verificações que você deseja tornar obrigatórias.![Lista de verificações de status disponíveis](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. Clique em **Criar**.

{% data reusables.repositories.required-status-merge-tip %}
