---
title: Sobre o GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} disponibiliza funcionalidades extras de segurança para os clientes sob uma licença de {% data variables.product.prodname_advanced_security %}.{% ifversion fpt or ghec %} Esses recursos também estão habilitados para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: Segurança Avançada GitHub
---

## Sobre o {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Alguns deles são incluídos em todos os planos{% ifversion not ghae %}, como o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Outras funcionalidades de segurança exigem que {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} seja executado em repositórios, além de repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes > 3.0 or ghec %}Para obter minformações sobre a compra de uma licença para {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre a cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}Não há cobrança para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.prodname_ghe_managed %} na versão beta.{% elsif fpt %}para comprar uma licença de {% data variables.product.prodname_GH_advanced_security %}, você deverá usar {% data variables.product.prodname_enterprise %}. Para obter informações sobre a atualização para {% data variables.product.prodname_enterprise %} com {% data variables.product.prodname_GH_advanced_security %}, consulte "[produtos GitHub](/get-started/learning-about-github/githubs-products)" e "[Sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% endif %}

## Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** - Pesquisa de possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detectar segredos, por exemplo, chaves e tokens, que foram verificados no repositório. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

{% ifversion ghec or ghes > 3.1 %}
- **Visão geral de segurança** - Revise a configuração de segurança e os alertas para uma organização e identifique os repositórios com maior risco. Para obter mais informações, consulte "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)".
{% endif %}

Para obter informações sobre funcionalidades de {% data variables.product.prodname_advanced_security %} em desenvolvimento, consulte "[Plano de trabalho de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para uma visão geral de todas as funcionalidades de segurança, consulte "[ funcionalidades de segurança de{% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion fpt or ghec %}
As funcionalidades de {% data variables.product.prodname_GH_advanced_security %} estão habilitadas para todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}. As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} também podem habilitar essas funcionalidades para repositórios internos e privados. Eles também têm acesso a uma visão geral de segurança a nível da organização. {% ifversion fpt %}Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).{% endif %}
{% endif %}

{% ifversion ghes or ghec %}
## Implantando o GitHub Advanced Security na sua empresa

Para saber mais sobre o que você precisa saber para planejar a sua implantação de {% data variables.product.prodname_GH_advanced_security %} em nível alto, consulte "[Visão geral da implantação de {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment)".

Para revisar as fases de implementação que recomendamos de forma mais detalhada, consulte "[Implantando {% data variables.product.prodname_GH_advanced_security %} na sua empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise). "
{% endif %}

{% ifversion not fpt %}
## Habilitando funcionalidades de {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %}
O administrador do site deve habilitar {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de poder utilizar essas funcionalidades. Para obter mais informações, consulte "[Configurar funcionalidades avançadas de segurança](/admin/configuration/configuring-advanced-security-features)".

Após configurar o sistema, você poderá habilitar e desabilitar esses recursos no nível da organização ou repositório.

{%- elsif ghec %}
Para repositórios públicos, essas funcionalidades estão permanentemente habilitadas e só podem ser desabilitadas se você alterar a visibilidade do projeto para que o código não seja mais público.

Para outros repositórios, uma vez que você tenha uma licença da conta corporativa, é possível habilitar e desabilitar essas funcionalidades no nível da organização ou repositório.

{%- elsif ghae %}
Você pode habilitar e desabilitar essas funcionalidades no nível da organização ou do repositório.
{%- endif %}
Para mais informações, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% ifversion ghec or ghes > 3.0 %}
Se você tem uma conta corporativa, a utilização da licença para toda a empresa é exibida na página de licença corporativa. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.0 or ghae  %}
## Leia mais

- "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua conta corporativa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
