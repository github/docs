---
title: Gerenciando a política de bifurcação para seu repositório
intro: 'Você pode permitir ou impedir a bifurcação de um repositórios privado específico{% if currentVersion == "free-pro-team@latest" or currentversion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} ou interno{% endif %} pertencente a uma organização.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: Pessoas com permissões de administrador em um repositório podem gerenciar a política de bifurcação para o repositório.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

Um proprietário da organização deve permitir bifurcações de repositórios privado{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} e internos{% endif %} no nível da organização antes de permitir ou não permitir bifurcações em um repositório específico. Para obter mais informações, consulte "[Gerenciando a política de bifurcação para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Features" (Recursos), selecione **Allow forking** (Permitir bifurcação). ![Caixa de seleção para permitir ou proibir a bifurcação de um repositório privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### Leia mais

- "[Sobre bifurcações](/articles/about-forks)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
