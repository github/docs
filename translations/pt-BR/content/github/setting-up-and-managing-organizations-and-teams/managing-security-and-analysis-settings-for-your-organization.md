---
title: Gerenciar as configurações de segurança e análise para a sua organização
intro: 'Você pode controlar recursos que protegem e analisam o código nos projetos da sua organização no {% data variables.product.prodname_dotcom %}.'
permissions: Os proprietários da organização podem gerenciar as configurações de segurança e análise de repositórios na organização.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger os repositórios na sua organização. É possível gerenciar os recursos de segurança e análise para todos os repositórios existentes ou novos que os integrantes criarem na sua organização. {% if currentVersion == "free-pro-team@latest" %}If you have a license for {% data variables.product.prodname_GH_advanced_security %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Exibir as configurações de segurança e análise

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable all security and analysis features for the repositories in your organization. {% if currentVersion == "free-pro-team@latest" %}If your organization, or the enterprise that owns it, has a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features.

![{% data variables.product.prodname_GH_advanced_security %} features](/assets/images/help/organizations/security-and-analysis-highlight-ghas.png)
{% endif %}

### Habilitar ou desabilitar um recurso para todos os repositórios existentes

You can enable or disable features for all repositories. {% if currentVersion == "free-pro-team@latest" %}The impact of your changes on repositories in your organization is determined by their visibility:

- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **{% data variables.product.prodname_dependabot_alerts %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_GH_advanced_security %}** - Your changes affect only private repositories because {% data variables.product.prodname_GH_advanced_security %} and the related features are always enabled for public repositories.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Your changes affect only private repositories where {% data variables.product.prodname_GH_advanced_security %} is also enabled. {% data variables.product.prodname_secret_scanning_caps %} is always enabled for public repositories.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
2. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
1. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}

### Enabling or disabling a feature automatically when new repositories are added

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories
{% if currentVersion == "free-pro-team@latest" %}, or all new private repositories,{% endif %} in your organization.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}

   {% data reusables.advanced-security.note-org-enable-uses-seats %}

{% if currentVersion == "free-pro-team@latest" %}

### Permitir que o Dependabot acesse repositórios privados

{% data reusables.dependabot.beta-note %}

{% data variables.product.prodname_dependabot %} pode verificar referências de dependências desatualizadas em um projeto e gerar automaticamente um pull request para atualizá-las. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible.

Por padrão, {% data variables.product.prodname_dependabot %} não pode atualizar as dependências localizadas em repositórios privados. Entretanto, se uma dependência estiver em um repositório privado de {% data variables.product.prodname_dotcom %} dentro da mesma organização que o projeto que usa essa dependência, você pode permitir que {% data variables.product.prodname_dependabot %} atualize a versão com sucesso, dando-lhe acesso à hospedagem do repositório. Para obter mais informações, incluindo detalhes das limitações para o suporte de dependências privadas, consulte "[Sobre atualizações da versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates)".

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Na seção "acesso ao repositório de {% data variables.product.prodname_dependabot %}" clique no botão de configurações **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) Uma lista é exibida mostrando todos os repositórios privados da sua organização. ![A lista de repositórios](/assets/images/help/organizations/repositories-dialog.png)
1. Selecione os repositórios que {% data variables.product.prodname_dependabot %} pode acessar.
1. Clique em **Selecionar repositórios**.
{% endif %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[About secret scanning](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
