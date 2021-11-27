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

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Alguns deles são incluídos em todos os planos{% ifversion not ghae %}, como o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Outras funcionalidades de segurança exigem uma licença de {% data variables.product.prodname_GH_advanced_security %} para ser executada em repositórios, além dos repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion fpt or ghes > 3.0 or ghec %}For more information about purchasing {% data variables.product.prodname_GH_advanced_security %}, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% endif %}

## Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** - Pesquisa de possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detectar segredos, por exemplo, chaves e tokens, que foram verificados no repositório. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

Para obter informações sobre funcionalidades de {% data variables.product.prodname_advanced_security %} em desenvolvimento, consulte "[Plano de trabalho de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para uma visão geral de todas as funcionalidades de segurança, consulte "[ funcionalidades de segurança de{% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion ghes or ghec %}

## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level, see "[Overview of {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment)."

To review the rollout phases we recommended in more detail, see "[Deploying {% data variables.product.prodname_GH_advanced_security %} in your enterprise](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)."

{% endif %}

{% ifversion ghes or ghae %}
## Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.product_name %}

{% ifversion ghes %}
O administrador do site deve habilitar {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de poder utilizar essas funcionalidades. Para obter mais informações, consulte "[Configurar funcionalidades avançadas de segurança](/admin/configuration/configuring-advanced-security-features)".
{% endif %}

Após configurar o sistema, você poderá habilitar e desabilitar esses recursos no nível da organização ou repositório. Para mais informações, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% endif %}

{% ifversion not ghae %}
## Habilitar funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.prodname_dotcom_the_website %}

Para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, Essas funcionalidades estão permanentemente habilitadas e só podem ser desabilitadas se você alterar a visibilidade do projeto para que o código não seja mais público.

Para outros repositórios, uma vez que você tenha uma licença da conta corporativa, é possível habilitar e desabilitar essas funcionalidades no nível da organização ou repositório. {% ifversion fpt or ghes > 3.0 or ghec %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
Se você tem uma conta corporativa, a utilização da licença para toda a empresa é exibida na página de licença corporativa. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

{% ifversion ghec or ghes > 3.0 or ghae-next  %}

## Leia mais

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
