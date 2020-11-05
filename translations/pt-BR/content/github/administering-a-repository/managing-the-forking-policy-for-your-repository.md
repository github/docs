---
title: Gerenciando a política de bifurcação para seu repositório
intro: 'You can allow or prevent the forking of a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: Pessoas com permissões de administrador em um repositório podem gerenciar a política de bifurcação para o repositório.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

An organization owner must allow forks of private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. Para obter mais informações, consulte "[Gerenciando a política de bifurcação para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)".

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Features" (Recursos), selecione **Allow forking** (Permitir bifurcação). ![Caixa de seleção para permitir ou proibir a bifurcação de um repositório privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### Leia mais

- "[Sobre bifurcações](/articles/about-forks)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
