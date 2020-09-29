---
title: Gerenciar a política de bifurcação da sua organização
intro: 'Você pode permitir ou impedir a bifurcação de qualquer repositório privado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e interno{% endif %} que pertence à sua organização.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
permissions: Os proprietários da organização podem gerenciar a política de bifurcação de uma organização.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Por padrão, as novas organizações estão configuradas para não permitir a bifurcação de repositórios privados{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e internos{% endif %}.

Se você permitir a bifurcação de repositórios privados{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e internos{% endif %} no nível da organização você também poderá configurar a capacidade de bifurcar um repositório privado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou interno{% endif %}. Para obter mais informações, consulte "[Gerenciar a política de bifurcação do seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

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
