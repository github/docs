---
title: Gerenciar a política de bifurcação da sua organização
intro: 'You can can allow or prevent the forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
permissions: Os proprietários da organização podem gerenciar a política de bifurcação de uma organização.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

By default, new organizations are configured to disallow the forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories.

If you allow forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository. Para obter mais informações, consulte "[Gerenciar a política de bifurcação do seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Bifurcação do repositório", selecione **Permitir bifurcação de repositórios privados** ou **Permitir bifurcação de repositórios internos e privados**. ![Caixa de seleção para permitir ou proibir a bifurcação na organização](/assets/images/help/repository/allow-disable-forking-organization.png)
6. Clique em **Salvar**.

### Leia mais

- "[Sobre bifurcações](/articles/about-forks)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
