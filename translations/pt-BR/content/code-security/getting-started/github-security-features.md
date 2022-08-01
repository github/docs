---
title: Funcionalidades de segurança do GitHub
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
---

## Sobre as funcionalidades de segurança de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} tem funcionalidades de segurança que ajudam a manter códigos e segredos seguros nos repositórios e entre organizações. {% data reusables.advanced-security.security-feature-availability %}

O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades de segurança que você pode visualizar, pesquisar e filtrar. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Disponível para todos os repositórios
### Política de segurança

Facilite o acesso dos seus usuários para relatar confidencialmente vulnerabilidades de segurança que encontraram no seu repositório. Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% ifversion fpt or ghec %}
### Consultorias de segurança

Discute em particular e corrige vulnerabilidades de segurança no código do seu repositório. Em seguida, você pode publicar uma consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade e incentivar os integrantes da comunidade a atualizá-la. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% endif %}
{% ifversion fpt or ghec or ghes > 3.2 %}

### {% data variables.product.prodname_dependabot_alerts %} e atualizações de segurança

Ver alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e escolher se deseja gerar pull requests para atualizar essas dependências automaticamente. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" e "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% ifversion ghes < 3.3 or ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Exibir alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e gerenciar esses alertas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### atualizações de versão de {% data variables.product.prodname_dependabot %}

Use {% data variables.product.prodname_dependabot %} para levantar automaticamente os pull requests a fim de manter suas dependências atualizadas. Isso ajuda a reduzir a exposição a versões mais antigas de dependências. Usar versões mais recentes facilita a aplicação de patches, caso as vulnerabilidades de segurança sejam descobertas e também torna mais fácil para {% data variables.product.prodname_dependabot_security_updates %} levantar, com sucesso, os pull requests para atualizar as dependências vulneráveis. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
{% endif %}

### Gráfico de dependências
O gráfico de dependências permite explorar os ecossistemas e pacotes dos quais o repositório depende e os repositórios e pacotes que dependem do seu repositório.

Você pode encontrar o gráfico de dependências na aba **Ideias** para o seu repositório. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

### Visão geral de segurança para repositórios
Para todos os repositórios públicos, a visão geral de segurança mostra quais funcionalidades de segurança estão habilitadas no repositório e oferece a opção de configurar quaisquer recursos de segurança disponíveis que não estão habilitadas no momento.

## Disponível com {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}
As funcionalidades de {% data variables.product.prodname_GH_advanced_security %} a seguir estão disponíveis e são grátos para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}. As organizações que usam {% data variables.product.prodname_ghe_cloud %} com uma licença para {% data variables.product.prodname_GH_advanced_security %} podem usar o conjunto completo de funcionalidades em qualquer um dos seus repositórios. Para obter uma lista dos recursos disponíveis com {% data variables.product.prodname_ghe_cloud %}, consulte a [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Muitas funcionalidades de {% data variables.product.prodname_GH_advanced_security %} estão disponíveis e gratuitos para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}. As organizações de uma empresa que tem uma licença {% data variables.product.prodname_GH_advanced_security %} podem usar todos as funcionalidades a seguir em seus repositórios. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %}
As funcionalidades de {% data variables.product.prodname_GH_advanced_security %} estão disponíveis para empresas com uma licença para {% data variables.product.prodname_GH_advanced_security %}. As funcionalidades são restritas aos repositórios pertencentes a uma organização. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %}
As funcionalidades de {% data variables.product.prodname_GH_advanced_security %} estão disponíveis para repositórios pertencentes a uma organização. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Detectar automaticamente vulnerabilidades de segurança e erros de codificação em códigos novos ou modificados. São destacados os problemas potenciais, com informações detalhadas, o que permite que você corrija o código antes que seja mesclado no seu branch-padrão. Para obter mais informações, consulte "[Sobre a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Detectar automaticamente segredos vazados em todos os repositórios públicos. {% data variables.product.company_short %} informa ao provedor de serviços relevante que o segredo pode estar comprometido. Para obter detalhes dos segredos e provedores de serviço compatíveis, consulte "[ Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

{% ifversion not fpt %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %}
Disponível apenas com uma licença para {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Detectar automaticamente tokens ou credenciais que foram verificados em um repositório. Você pode visualizar alertas para quaisquer segredos que {% data variables.product.company_short %} encontrar no seu código, para que você saiba quais tokens ou credenciais tratar como comprometidas. Para obter mais informações, consulte "[Sobre a varredura de segredos](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)."
{% endif %}

### Revisão de dependência

Mostre o impacto completo das alterações nas dependências e veja detalhes de qualquer versão vulnerável antes de fazer merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion ghec or ghes or ghae %}
### Visão geral de segurança das organizações{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}, empresas,{% endif %} e equipes

{% ifversion ghec %}
Disponível apenas com uma licença para {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Revise a configuração de segurança e os alertas para sua organização e identifique os repositórios com maior risco. Para obter mais informações, consulte "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)".
{% endif %}

## Leia mais
- "[Produtos do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)"
- "[Suporte à linguagem de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
