---
title: Gerenciar o acesso de um indivíduo a um repositório da organização
intro: Você pode gerenciar o acesso de uma pessoa ao repositório de sua organização.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program/
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Pessoas com permissões de administrador podem gerenciar o acesso de integrantes da organização e colaboradores externos a um repositório da organização.

### Remover acesso a repositórios

Ao remover um colaborador de um repositório de sua organização, o colaborador perde os acessos de leitura e gravação no repositório. Caso o repositório seja privado e o colaborador o tenha bifurcado, a bifurcação também é excluída, mas o colaborador ainda manterá quaisquer clones locais de seu repositório.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### Gerenciar o acesso de um indivíduo a um repositório da organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Cloque em **Members** (Integrantes) ou **Outside collaborators** (Colaboradores externos) para gerenciar pessoas com tipos diferentes de acessos. ![Botão para invite (convidar) members (colaboradores) ou outside collaborators (colaboradores externos) para uma organização](/assets/images/help/organizations/select-outside-collaborators.png)
5. À direita do nome do colaborador que deseja remover, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Manage** (Gerenciar). ![Link para manage access (gerenciar acesso)](/assets/images/help/organizations/member-manage-access.png)
6. Na página "Manage access" (Gerenciar acesso), ao lado do repositório clique em **Manage access** (Gerenciar acesso). ![Botão Manage access (Gerenciar acesso) em um repositório](/assets/images/help/organizations/repository-manage-access.png)
7. Revise o acesso da pessoa em determinado repositório, por exemplo, se a pessoa é um colaborador ou tem acesso ao repositório como integrante de equipe. ![Matriz de acesso a repositório para o usuário](/assets/images/help/organizations/repository-access-matrix-for-user.png)

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Limitar interações com o seu repositório](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
