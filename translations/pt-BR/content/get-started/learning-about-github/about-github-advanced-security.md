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

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Alguns deles são incluídos em todos os planos{% ifversion not ghae %}, como o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}{% endif %}. As outras funcionalidades de segurança exigem uma licença de {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} para ser executada em repositórios, além dos repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}{% endif %}.{% ifversion fpt %} Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security).{% endif %}

{% ifversion ghes or ghec %}Para obter minformações sobre a compra de uma licença para {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre a cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}Não há cobrança para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.prodname_ghe_managed %} na versão beta.{% elsif fpt %}para comprar uma licença de {% data variables.product.prodname_GH_advanced_security %}, você deverá usar {% data variables.product.prodname_enterprise %}. Para obter informações sobre a atualização para {% data variables.product.prodname_enterprise %} com {% data variables.product.prodname_GH_advanced_security %}, consulte "[produtos GitHub](/get-started/learning-about-github/githubs-products)" e "[Sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% endif %}

{% ifversion not fpt %}

## Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** - Pesquisa de possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detectar segredos, por exemplo, chaves e tokens, que foram verificados no repositório.{% if secret-scanning-push-protection %} Se a proteção de push estiver habilitada, também irá detectar segredos quando eles são enviados por push para o seu repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)" e "[Protegendo pushes com {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).{% else %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

{% ifversion ghec or ghes > 3.1 %}
- **Visão geral de segurança** - Revise a configuração de segurança e os alertas para uma organização e identifique os repositórios com maior risco. Para obter mais informações, consulte "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)".
{% endif %}

{% ifversion fpt or ghec %}
A tabela abaixo resume a disponibilidade de funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para repositórios públicos e privados. |{% ifversion fpt %}
|                        |           Repositório público            | Repositório privado sem {% data variables.product.prodname_advanced_security %} | Repositório privado com {% data variables.product.prodname_advanced_security %}
|:----------------------:|:----------------------------------------:|:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
|  Varredura de código   |                   Sim                    |                                        Não                                        |                                        Sim                                        |
|   Varredura secreta    | Sim **(apenas funcionalidade limitada)** |                                        Não                                        |                                        Sim                                        |
| Revisão de dependência |                   Sim                    |                                        Não                                        |                                        Sim                                        |{% endif %}
|
{% ifversion ghec %}
|                          |           Repositório público            | Repositório privado sem {% data variables.product.prodname_advanced_security %} | Repositório privado com {% data variables.product.prodname_advanced_security %}
|:------------------------:|:----------------------------------------:|:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
|   Varredura de código    |                   Sim                    |                                        Não                                        |                                        Sim                                        |
|    Varredura secreta     | Sim **(apenas funcionalidade limitada)** |                                        Não                                        |                                        Sim                                        |
|  Revisão de dependência  |                   Sim                    |                                        Não                                        |                                        Sim                                        |
| Visão geral da segurança |                   Não                    |                                        Não                                        |                                        Sim                                        |
{% endif %}

{% endif %}

Para obter informações sobre funcionalidades de {% data variables.product.prodname_advanced_security %} em desenvolvimento, consulte "[Plano de trabalho de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para uma visão geral de todas as funcionalidades de segurança, consulte "[ funcionalidades de segurança de{% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion fpt or ghec %}
As funcionalidades de{% data variables.product.prodname_GH_advanced_security %} estão habilitadas para todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghec %}, exceto para a visão geral de segurança{% endif %}. As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} também podem habilitar essas funcionalidades para repositórios internos e privados. Elas também têm acesso a uma visão geral de segurança no nível da organização. {% ifversion fpt %}Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).{% endif %}
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

{% ifversion ghec or ghes %}
Se você tem uma conta corporativa, a utilização da licença para toda a empresa é exibida na página de licença corporativa. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## Sobre os fluxos de trabalho iniciais para {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %}
{% data reusables.advanced-security.starter-workflow-overview %}

Para mais informações sobre fluxos de trabalho iniciais, consulte "[Configurando {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)" e "[Usando fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows)".

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Leia mais

- "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua conta corporativa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
{% endif %}
