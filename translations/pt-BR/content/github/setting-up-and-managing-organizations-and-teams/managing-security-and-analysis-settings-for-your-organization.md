---
title: Gerenciar as configurações de segurança e análise para a sua organização
intro: 'Você pode controlar recursos que protegem e analisam o código nos projetos da sua organização no {% data variables.product.prodname_dotcom %}.'
permissions: Os proprietários da organização podem gerenciar as configurações de segurança e análise de repositórios na organização.
versions:
  free-pro-team: '*'
---

### Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger os repositórios na sua organização. É possível gerenciar os recursos de segurança e análise para todos os repositórios existentes ou novos que os integrantes criarem na sua organização.
{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Displaying the security and analysis settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable security and analysis features for the repositories in your organization.

### Enabling or disabling a feature for all existing repositories

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
1. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão. ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
1. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização. ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Enabling or disabling a feature for all new repositories when they are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Em "Configurar recursos de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios na sua organização. ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Allowing Dependabot to access private repositories

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to the targeted dependency files. By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository. For more information, including details of limitations to private dependency support, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. In the "{% data variables.product.prodname_dependabot %} repository access" section, click the settings button **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) A list is displayed showing all of the private repositories in your organization. ![The Repositories list](/assets/images/help/organizations/repositories-dialog.png)
1. Select the repositories that {% data variables.product.prodname_dependabot %} can access.
1. Click **Select repositories**.


### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Sobre proteger o seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)"
- "[Manter suas dependências atualizadas automaticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
