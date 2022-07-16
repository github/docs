---
title: Configurando o gráfico de dependências
intro: Você pode permitir que os usuários identifiquem as dependências dos seus projetos habilitando o gráfico de dependências.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configurar gráfico de dependências
---

## Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %}

Para obter mais informações, consulte "[Sobre o gráfico de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec %}
## Sobre a configuração do gráfico de dependência
Para gerar um gráfico de dependência, {% data variables.product.product_name %} precisa de acesso somente leitura ao manifesto de dependência e arquivos de bloqueio para um repositório. O gráfico de dependências é gerado automaticamente para todos os repositórios públicos e você pode optar por habilitá-lo para repositórios privados. Para obter mais informações sobre a visualização do gráfico de dependências, consulte "[Explorando as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)".

{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

{% ifversion ghes %} ## Habilitando o gráfico de dependências
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Habilitar e desabilitar o gráfico de dependências para um repositório privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

Quando o gráfico de dependências é ativado pela primeira vez, todos manifesto e arquivos de bloqueio para ecossistemas suportados são analisados imediatamente. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Uma vez habilitado, o gráfico é atualizado automaticamente a cada push no repositório{% ifversion fpt or ghec %} e a cada push para outros repositórios no gráfico{% endif %}.

{% ifversion ghes %}
{% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %}
{% endif %}

## Leia mais

{% ifversion ghec %}- "[Visualizando insights para sua organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Visualizando e atualizando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solução de problemas na detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
