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

### Exibir as configurações de segurança e análise

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

A página exibida permite que você habilite ou desabilite os recursos de segurança e análise dos repositórios na sua organização.

### Habilitar ou desabilitar um recurso para todos os repositórios existentes

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
1. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão. ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
1. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização. ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Habilitar ou desabilitar um recurso para todos os novos repositórios quando forem adicionados

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Em "Configurar recursos de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios na sua organização. ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Permitir que o Dependabot acesse repositórios privados

{% data variables.product.prodname_dependabot %} pode verificar referências de dependências desatualizadas em um projeto e gerar automaticamente um pull request para atualizá-las. Para fazer isso, {% data variables.product.prodname_dependabot %} deve ter acesso aos arquivos de dependência de destino. Por padrão, {% data variables.product.prodname_dependabot %} não pode atualizar as dependências localizadas em repositórios privados. Entretanto, se uma dependência estiver em um repositório privado de {% data variables.product.prodname_dotcom %} dentro da mesma organização que o projeto que usa essa dependência, você pode permitir que {% data variables.product.prodname_dependabot %} atualize a versão com sucesso, dando-lhe acesso à hospedagem do repositório. Para obter mais informações, incluindo detalhes das limitações para o suporte de dependências privadas, consulte "[Sobre atualizações da versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates)".

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Na seção "acesso ao repositório de {% data variables.product.prodname_dependabot %}" clique no botão de configurações **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) Uma lista é exibida mostrando todos os repositórios privados da sua organização. ![A lista de repositórios](/assets/images/help/organizations/repositories-dialog.png)
1. Selecione os repositórios que {% data variables.product.prodname_dependabot %} pode acessar.
1. Clique em **Selecionar repositórios**.


### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Sobre proteger o seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)"
- "[Manter suas dependências atualizadas automaticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
