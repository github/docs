---
title: Gerenciando a política de bifurcação para seu repositório
intro: 'Você pode permitir ou impedir a bifurcação de um repositório privado específico{% ifversion ghae or ghes or ghec %} ou interno{% endif %} pertencente a uma organização.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Gerenciar a política de bifurcação
---

Um proprietário de organização deve permitir bifurcações de repositórios privados{% ifversion ghae or ghes or ghec %} e internos{% endif %} no nível da organização antes que você possa permitir ou impedir bifurcações de um repositório específico. Para obter mais informações, consulte "[Gerenciando a política de bifurcação para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Features" (Recursos), selecione **Allow forking** (Permitir bifurcação). ![Caixa de seleção para permitir ou proibir a bifurcação de um repositório privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Leia mais

- "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
