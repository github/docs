---
title: Sobre o GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} disponibiliza funcionalidades extras de segurança para os clientes sob uma licença de {% data variables.product.prodname_advanced_security %}.{% if currentVersion == "free-pro-team@latest" %} Esses recursos também estão habilitados para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - segurança
---

### Sobre o {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Alguns deles são incluídos em todos os planos{% if currentVersion != "github-ae@latest" %}, como o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Outras funcionalidades de segurança exigem uma licença de {% data variables.product.prodname_GH_advanced_security %} para ser executada em repositórios, além dos repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.

{% if currentVersion == "free-pro-team@latest" %}Para obter mais informações, consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)."{% elsif currentVersion ver_gt "enterprise-server@2. 2" %}Para obter informações sobre a compra de uma licença para {% data variables.product.prodname_GH_advanced_security %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. % elsif currentVersion == "github-ae@latest" %}Não há nenhuma cobrança para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.prodname_ghe_managed %} durante a versão beta.{% endif %}

### Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** - Pesquisa de possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detectar segredos, por exemplo, chaves e tokens, que foram verificados no repositório. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

Para obter informações sobre funcionalidades de {% data variables.product.prodname_advanced_security %} em desenvolvimento, consulte "[Plano de trabalho de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para uma visão geral de todas as funcionalidades de segurança, consulte "[Sobre como proteger seu repositório](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)".

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.product_name %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
O administrador do site deve habilitar
{% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de poder utilizar estas funcionalidades. Para obter mais informações, consulte "[Configurar funcionalidades avançadas de segurança](/admin/configuration/configuring-advanced-security-features)".
{% endif %}

Após configurar o sistema, você poderá habilitar e desabilitar esses recursos no nível da organização ou repositório. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.prodname_dotcom_the_website %}

Para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, Essas funcionalidades estão permanentemente habilitadas e só podem ser desabilitadas se você alterar a visibilidade do projeto para que o código não seja mais público.

Para outros repositórios, uma vez que você tenha uma licença da conta corporativa, é possível habilitar e desabilitar essas funcionalidades no nível da organização ou repositório. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Se você tem uma conta corporativa, a utilização da licença para toda a empresa é exibida na página de licença corporativa. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Leia mais

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)"

{% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### Leia mais

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
