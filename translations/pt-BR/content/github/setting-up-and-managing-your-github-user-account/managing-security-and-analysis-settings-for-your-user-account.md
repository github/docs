---
title: Gerenciar as configurações de segurança e análise para a sua conta de usuário
intro: 'Você pode controlar recursos que protegem e analisam o código nos seus projetos no {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
---

### Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger seus repositórios. Este tópico diz como você pode gerenciar as funcionalidades de segurança e análise de todos os seus repositórios existentes ou novos.

Você ainda pode gerenciar os recursos de segurança e análise para repositórios individuais. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obter uma visão geral da segurança do repositório, consulte "[Sobre como proteger seu repositório](/github/administering-a-repository/about-securing-your-repository). "

### Habilitar ou desabilitar recursos para repositórios existentes

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão. ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para habilitar ou desabilitar o recurso para todos os repositórios que você possui. ![Botão para desabilitar ou habilitar recurso](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

### Habilitar ou desabilitar recursos para novos repositórios

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Em "Configurar recursos de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios na sua organização. ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Leia mais

- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
{% if currentVersion == "free-pro-team@latest" %}- "[Manter as suas dependências atualizadas automaticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
