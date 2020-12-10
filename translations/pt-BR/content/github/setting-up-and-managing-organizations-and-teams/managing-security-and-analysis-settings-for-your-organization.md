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

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.security.security-and-analysis-features-enable-read-only %}
{% endif %}

### Habilitar ou desabilitar recursos para repositórios existentes

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
6. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão. ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
7. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização. ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Habilitar ou desabilitar recursos para novos repositórios

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Em "Configurar recursos de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios na sua organização. ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Sobre proteger o seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)"
- "[Manter suas dependências atualizadas automaticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
