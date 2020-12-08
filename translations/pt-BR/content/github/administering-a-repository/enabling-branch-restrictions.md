---
title: Habilitar restrições de branch
intro: 'Você pode impor restrições de branch para que apenas alguns usuários, equipes ou aplicativos possam fazer push em um branch protegido em repositórios pertencentes à sua organização.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Qualquer pessoa com permissões de administrador em um repositório organization-owned pode habilitar restrições de branch.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. Em "Proteger os branches correspondentes", selecione **Restringir quem pode fazer push em branches correspondentes**. ![Caixa de seleção Branch restriction (Restrição de branch)](/assets/images/help/repository/restrict-branch.png)
8. Procurar e selecionar pessoas, equipes ou aplicativos que tenham permissão para fazer push para o branch protegido. ![Pesquisa de restrição de branch](/assets/images/help/repository/restrict-branch-search.png)
9. Clique em **Criar**.

### Leia mais

- "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)"
- "[Configurar branches protegidos](/github/administering-a-repository/configuring-protected-branches)"
- "[Sobre verificações de status obrigatórias](/github/administering-a-repository/about-required-status-checks)"
- "[Habilitar verificações de status obrigatórias](/github/administering-a-repository/enabling-required-status-checks)"
