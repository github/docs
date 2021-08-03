---
title: Sobre proteger seu repositório
intro: 'O {% data variables.product.product_name %} fornece uma série de maneiras que você pode ajudar a manter seu repositório protegido.'
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

### Configurar o seu repositório com segurança

O primeiro passo para proteger um repositório é configurar quem pode ver e modificar o seu código. Para obter mais informações, consulte "[Gerenciar configurações do repositório](/github/administering-a-repository/managing-repository-settings)".

### Proteger o repositório

{% data variables.product.prodname_dotcom %} tem um conjunto crescente de recursos de segurança que ajudam você a manter seu código protegido. Você pode encontrá-los na aba **Segurança** do seu repositório.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### Disponível para todos os repositórios

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- **Política de segurança**

  Facilite o acesso dos seus usuários para relatar confidencialmente vulnerabilidades de segurança que encontraram no seu repositório. Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **Consultorias de segurança**

  Discute em particular e corrige vulnerabilidades de segurança no código do seu repositório. Em seguida, você pode publicar uma consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade e incentivá-los a fazer a atualização. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

- **{% data variables.product.prodname_dependabot_alerts %} e atualizações de segurança**

  Ver alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e escolher se deseja gerar pull requests para atualizar essas dependências automaticamente. Para obter mais informações, consulte "[Sobre alertas de dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) e "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
 {% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
- **{% data variables.product.prodname_dependabot_alerts %}**

  Exibir alertas sobre dependências conhecidas por conter vulnerabilidades de segurança e gerenciar esses alertas. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
  {% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **atualizações de versão de {% data variables.product.prodname_dependabot %}**

  Use {% data variables.product.prodname_dependabot %} para levantar automaticamente os pull requests a fim de manter suas dependências atualizadas. Isso ajuda a reduzir a exposição a versões mais antigas de dependências. Usar versões mais recentes facilita a aplicação de patches, caso as vulnerabilidades de segurança sejam descobertas e também torna mais fácil para {% data variables.product.prodname_dependabot_security_updates %} levantar, com sucesso, os pull requests para atualizar as dependências vulneráveis. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
  {% endif %}
  {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### Disponível {% if currentVersion == "free-pro-team@latest" %}para repositórios públicos e para repositórios {% endif %}com {% data variables.product.prodname_advanced_security %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Essas funcionalidades estão disponíveis {% if currentVersion == "free-pro-team@latest" %}para todos os repositórios públicos e para repositórios privados pertencentes a organizações com {% else %}se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
  {% endif %}

- **Alertas de {% data variables.product.prodname_code_scanning_capc %}**

  Detectar automaticamente vulnerabilidades de segurança e erros de codificação em códigos novos ou modificados. São destacados os problemas potenciais, com informações detalhadas, o que permite que você corrija o código antes que seja mesclado no seu branch-padrão. Para obter mais informações, consulte "[Sobre a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **Alertas de {% data variables.product.prodname_secret_scanning_caps %}**

  {% if currentVersion == "free-pro-team@latest" %}Para repositórios privados, veja {% else %}Visualizar {% endif %}qualquer segredo que {% data variables.product.prodname_dotcom %} encontrou no seu código. Você deve tratar os tokens ou credenciais verificados no repositório como comprometidos. Para obter mais informações, consulte "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **Revisão de dependências** - Mostra o impacto total das alterações nas dependências e vê detalhes de qualquer versão vulnerável antes de realizar o merge de um pull request. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Explorar dependências
O gráfico de dependências de {% data variables.product.prodname_dotcom %} permite que você explore:

* Ecossistemas e pacotes dos quais o repositório depende
* Repositórios e pacotes que dependem do seu repositório

Você deve habilitar o gráfico de dependências antes de {% data variables.product.prodname_dotcom %} pode gerar {% data variables.product.prodname_dependabot_alerts %} para dependências com vulnerabilidades de segurança. {% if currentVersion == "free-pro-team@latest" %}Habilitar o gráfico de dependências também permite que {% data variables.product.prodname_dotcom %} execute revisões de dependências de pull requests.{% endif %}

Você pode encontrar o gráfico de dependências na aba **Ideias** para o seu repositório. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}
