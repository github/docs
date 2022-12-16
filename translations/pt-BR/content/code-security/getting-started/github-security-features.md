---
title: Recursos de segurança do GitHub
intro: 'Uma visão geral das funcionalidades de segurança de {% data variables.product.prodname_dotcom %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: ccd17816c0e5f62666520a677862c2a9f108c742
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158730'
---
## Sobre as funcionalidades de segurança de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} tem funcionalidades de segurança que ajudam a manter códigos e segredos seguros nos repositórios e entre organizações. {% data reusables.advanced-security.security-feature-availability %}

O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades de segurança que você pode visualizar, pesquisar e filtrar. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Disponível para todos os repositórios
### Política de segurança

Facilite o acesso dos seus usuários para relatar confidencialmente vulnerabilidades de segurança que encontraram no seu repositório. Para obter mais informações, confira "[Como adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% ifversion fpt or ghec %}
### Avisos de segurança

Discute em particular e corrige vulnerabilidades de segurança no código do seu repositório. Em seguida, você pode publicar uma consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade e incentivar os integrantes da comunidade a atualizá-la. Para obter mais informações, confira "[Sobre os consultores de segurança do repositório](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} e atualizações de segurança

Ver alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e escolher se deseja gerar pull requests para atualizar essas dependências automaticamente. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" e "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Exibir alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e gerenciar esses alertas. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### atualizações de versão de {% data variables.product.prodname_dependabot %}

Use {% data variables.product.prodname_dependabot %} para levantar automaticamente os pull requests a fim de manter suas dependências atualizadas. Isso ajuda a reduzir a exposição a versões mais antigas de dependências. Usar versões mais recentes facilita a aplicação de patches, caso as vulnerabilidades de segurança sejam descobertas e também torna mais fácil para {% data variables.product.prodname_dependabot_security_updates %} levantar, com sucesso, os pull requests para atualizar as dependências vulneráveis. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
{% endif %}

### Gráfico de dependências
O gráfico de dependências permite explorar os ecossistemas e pacotes dos quais o repositório depende e os repositórios e pacotes que dependem do seu repositório.

Encontre o grafo de dependência na guia **Insights** do seu repositório. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% ifversion security-overview-displayed-alerts %}
### Visão geral da segurança

A visão geral de segurança permite que você examine as configurações de segurança e os alertas, o que facilita a identificação dos repositórios e organizações em maior risco. Para saber mais, confira "[Sobre visões gerais de segurança](/code-security/security-overview/about-the-security-overview)".

{% else %}
### Visão geral de segurança para repositórios
A visão geral de segurança mostra quais funcionalidades de segurança estão habilitadas para o repositório e oferece a opção de configurar todas as funcionalidades de segurança disponíveis que não estejam habilitadas atualmente.
{% endif %}

## Disponível com {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %} Os recursos a seguir do {% data variables.product.prodname_GH_advanced_security %} estão disponíveis e são gratuitos para repositórios públicos no {% data variables.product.prodname_dotcom_the_website %}. As organizações que usam {% data variables.product.prodname_ghe_cloud %} com uma licença para {% data variables.product.prodname_GH_advanced_security %} podem usar o conjunto completo de funcionalidades em qualquer um dos seus repositórios. Para ver uma lista dos recursos disponíveis no {% data variables.product.prodname_ghe_cloud %}, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %} Muitos recursos do {% data variables.product.prodname_GH_advanced_security %} estão disponíveis e são gratuitos para repositórios públicos no {% data variables.product.prodname_dotcom_the_website %}. As organizações de uma empresa com uma licença do {% data variables.product.prodname_GH_advanced_security %} podem usar as funcionalidades a seguir em todos os repositórios. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} Os recursos do {% data variables.product.prodname_GH_advanced_security %} estão disponíveis para empresas com uma licença do {% data variables.product.prodname_GH_advanced_security %}. As funcionalidades são restritas aos repositórios pertencentes a uma organização. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} Os recursos do {% data variables.product.prodname_GH_advanced_security %} estão disponíveis para os repositórios pertencentes a uma organização. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Detectar automaticamente vulnerabilidades de segurança e erros de codificação em códigos novos ou modificados. São destacados os problemas potenciais, com informações detalhadas, o que permite que você corrija o código antes que seja mesclado no seu branch-padrão. Para obter mais informações, confira "[Sobre a verificação de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Detectar automaticamente segredos vazados em todos os repositórios públicos. {% data variables.product.company_short %} informa ao provedor de serviços relevante que o segredo pode estar comprometido. Para obter detalhes dos segredos e dos provedores de serviço compatíveis, confira "[Padrões dos {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} Disponível apenas com uma licença do {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Detectar automaticamente tokens ou credenciais que foram verificados em um repositório. Você pode visualizar alertas para quaisquer segredos que {% data variables.product.company_short %} encontrar no seu código, para que você saiba quais tokens ou credenciais tratar como comprometidas. Para obter mais informações, confira "[Sobre a verificação de segredos](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)".
{% endif %}

### Análise de dependência

Mostre o impacto completo das alterações nas dependências e veja detalhes de qualquer versão vulnerável antes de fazer merge de um pull request. Para obter mais informações, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Visão geral de segurança para organizações{% ifversion ghes > 3.4 or ghae > 3.4 %}, enterprises,{% endif %} e equipes

Revise a configuração de segurança e os alertas para sua organização e identifique os repositórios com maior risco. Para saber mais, confira "[Sobre visões gerais de segurança](/code-security/security-overview/about-the-security-overview)".
{% endif %}

## Leitura adicional
- "[Produtos do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)"
- "[Suporte à linguagem do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
