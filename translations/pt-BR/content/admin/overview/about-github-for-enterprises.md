---
title: Sobre o GitHub para empresas
intro: 'As empresas podem usar os produtos corporativos do {% data variables.product.prodname_dotcom %} para aprimorar todo o ciclo de vida de desenvolvimento de software.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192646'
---
## Sobre o {% data variables.product.prodname_dotcom %} para empresas

O {% data variables.product.prodname_dotcom %} é uma plataforma de desenvolvedor completa para criar, escalar e fornecer softwares seguros. As empresas usam nosso conjunto de produtos para dar suporte a todo o ciclo de vida de desenvolvimento de software, aumentando a velocidade do desenvolvimento e melhorando a qualidade do código.

Os desenvolvedores podem armazenar e controlar a versão do código-fonte nos repositórios, usando problemas e projetos a fim de planejar e acompanhar o trabalho. Eles podem realizar a codificação em um ambiente de desenvolvimento hospedado em nuvem, o {% data variables.product.prodname_github_codespaces %}, e revisar as alterações de código uns dos outros com solicitações de pull, usando recursos de segurança de código para manter segredos e vulnerabilidades fora da base de código. Por fim, é possível automatizar o pipeline de compilação, teste e implantação com o {% data variables.product.prodname_actions %} e hospedar pacotes de software com o {% data variables.product.prodname_registry %}.

Quando as empresas adotam o {% data variables.product.prodname_enterprise %}, o ROI (retorno sobre o investimento) é alto. Por exemplo, os desenvolvedores economizam 45 minutos por dia e o tempo de integração e treinamento é reduzido em 40%. Para saber mais, confira [O Impacto Econômico Total do {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

Para simplificar a administração de todas as fases do ciclo de vida de desenvolvimento de software, fornecemos um só ponto de visibilidade e gerenciamento chamado conta corporativa. As contas corporativas permitem gerenciar o faturamento e as configurações, aplicar políticas e auditar as pessoas com acesso aos recursos da sua empresa. Para obter mais informações, confira "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)".

Opcionalmente, é possível adicionar recursos extras de segurança de código com o {% data variables.product.prodname_GH_advanced_security %}, além de opções de suporte aprimoradas com o {% data variables.contact.premium_support %}. Para saber mais, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" e "[Sobre o {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}.”{% endif %}

## Sobre as opções de implantação

Ao comprar o {% data variables.product.prodname_enterprise %}, você obtém acesso ao {% data variables.product.prodname_ghe_cloud %} e ao {% data variables.product.prodname_ghe_server %}. O {% data variables.product.prodname_ghe_cloud %} é um conjunto de funcionalidades avançadas no {% data variables.product.prodname_dotcom_the_website %}, e o {% data variables.product.prodname_ghe_server %} é uma plataforma auto-hospedada. Para saber mais, confira "[Sobre o {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" na documentação do {% data variables.product.prodname_ghe_server %}.{% else %}."{% endif %}

Para o {% data variables.product.prodname_ghe_cloud %}, é possível permitir que os desenvolvedores criem e gerenciem as próprias contas pessoais ou usar o {% data variables.product.prodname_emus %} a fim de criar e gerenciar as contas de usuário deles. Para obter mais informações, confira "[Sobre a autenticação em sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

O {% data variables.product.prodname_ghe_managed %} tem disponibilidade limitada para clientes selecionados com requisitos rigorosos de segurança e conformidade. Para saber mais, confira "[Sobre o {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}" na documentação do {% data variables.product.prodname_ghe_managed %}.{% else %}."{% endif %}

Aproveite o poder do {% data variables.product.prodname_dotcom_the_website %} mesmo ao usar o {% data variables.product.prodname_ghe_server %} ou o {% data variables.product.prodname_ghe_managed %} por meio da ativação do {% data variables.product.prodname_github_connect %}, que permite configurar recursos e fluxos de trabalho adicionais, como o {% data variables.product.prodname_dependabot_alerts %}, para dependências não seguras.{% ifversion ghec %}

- "[Sobre o {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" na documentação do {% data variables.product.prodname_ghe_server %}
- "[Sobre o {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" na documentação do {% data variables.product.prodname_ghe_managed %}{% else %} Para saber mais, confira "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".{% endif %}

## Leitura adicional

- [Comparação do {% data variables.product.prodname_dotcom %} com outras soluções de DevOps](https://resources.github.com/devops/tools/compare/) nos Recursos da {% data variables.product.company_short %}
