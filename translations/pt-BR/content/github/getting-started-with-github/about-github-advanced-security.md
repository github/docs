---
title: Sobre o GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} disponibiliza funcionalidades extras de segurança para os clientes em uma licença de {% data variables.product.prodname_advanced_security %}. Essas funcionalidades também estão habilitadas para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Sobre o {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Algumas delas estão incluídas em todos os planos, por exemplo: gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}. Outras funcionalidades de segurança exigem uma licença de {% data variables.product.prodname_GH_advanced_security %} para ser executada em repositórios, além dos repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}. (Ou seja, repositórios privados e internos em {% data variables.product.prodname_dotcom_the_website %}, e todos os repositórios em {% data variables.product.prodname_ghe_server %}.)

Para uma visão geral de todas as funcionalidades de segurança, consulte "[Sobre como proteger seu repositório](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)". Para obter informações sobre os requisitos de permissão para ações relacionadas às funcionalidades de segurança, consulte "[Níveis de permissão do repositório para uma organização](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)".

### Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** - Pesquisa de possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detectar segredos, por exemplo, chaves e tokens, que foram verificados no repositório. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Revisar as mudanças de dependências em um pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".
{% endif %}

Para obter informações sobre funcionalidades de {% data variables.product.prodname_advanced_security %} em desenvolvimento, consulte "[Plano de trabalho de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)".

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.prodname_ghe_server %}

O administrador do site deve habilitar {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de poder utilizar essas funcionalidades. Para obter mais informações, consulte "[Configurar funcionalidades avançadas de segurança](/admin/configuration/configuring-advanced-security-features)".

Após configurar o sistema, você poderá habilitar e desabilitar esses recursos no nível da organização ou repositório. Para mais informações, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
Para obter informações sobre a compra de uma licença para

{% data variables.product.prodname_GH_advanced_security %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}.
{% endif %}

### Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.prodname_dotcom_the_website %}

Para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, essas funcionalidades estão permanentemente habilitadas e só serão desabilitados se você alterar a visibilidade do projeto, de modo que o código não seja mais público.

Para todos os outros repositórios, uma vez que você tenha uma licença, é possível habilitar e desabilitar essas funcionalidades no nível de organização ou repositório. {% if currentVersion == "free-pro-team@latest" %}Para mais informações, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
Para obter informações sobre a compra de uma licença para

{% data variables.product.prodname_GH_advanced_security %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}.
{% endif %}
