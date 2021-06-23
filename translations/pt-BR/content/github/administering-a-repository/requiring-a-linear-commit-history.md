---
title: Exigindo um histórico de commit linear
intro: Você pode exigir um histórico de commit linear para bloquear todos os commits de merge a partir de um branch protegido.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

Qualquer pessoa com permissões de administrador pode exigir um histórico de commit linear.

### Sobre a aplicação do histórico de commit linear

Impor um histórico de commit linear impede que commits de merge sofram push para o branch protegido. Isto significa que quaisquer pull requests mesclada no branch protegido devem usar um merge squash ou um merge rebase. Um histórico de commit estritamente linear pode ajudar as equipes a fazer backtracks de mudanças de forma mais eficiente. Para obter mais informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".

{% data reusables.repositories.protected-branches-options %}

Antes de exigir um histórico de commit linear, seu repositório deve permitir merge squash ou merge rebase. Para obter mais informações, consulte "[Configurando merges da pull request](/github/administering-a-repository/configuring-pull-request-merges)".


### Exigindo um histórico de commit linear

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Em "Proteger os branches correspondentes", selecione **Exigir histórico linear**. ![Opção de histórico linear necessária](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. Clique em **Criar**.
