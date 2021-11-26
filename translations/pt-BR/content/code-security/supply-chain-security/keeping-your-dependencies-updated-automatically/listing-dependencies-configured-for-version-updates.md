---
title: Listando dependências configuradas para atualizações da versão
intro: 'Você pode visualizar as dependências que {% data variables.product.prodname_dependabot %} monitora para atualizações.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: Listar dependências configuradas
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Visualizando dependências monitoradas por {% data variables.product.prodname_dependabot %}

Depois de habilitar as atualizações de versão, você pode confirmar que a sua configuração está correta usando a aba **{% data variables.product.prodname_dependabot %}** no gráfico de dependências para o repositório. Para obter mais informações, consulte "[Habilitando e desabilitando as atualizações da versão de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. Opcionalmente, para visualizar os arquivos monitorados para um gerenciador de pacotes, clique no {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} associado. ![Arquivos de dependências monitorados](/assets/images/help/dependabot/monitored-dependency-files.png)

Se quaisquer dependências estiverem faltando, verifique os arquivos de log em busca de erros. Se algum gerenciador de pacotes faltar, revise o arquivo de configuração.

## Visualizando arquivos de log {% data variables.product.prodname_dependabot %}

1. Na aba **{% data variables.product.prodname_dependabot %}** , clique em **Última verificação em *TIME* atrás** para ver o arquivo de log gerado pelo {% data variables.product.prodname_dependabot %} durante a última verificação de atualizações de versão. ![Visualizar arquivo de log](/assets/images/help/dependabot/last-checked-link.png)
2. Opcionalmente, para executar novamente a verificação da versão, clique em **Procurar atualizações**. ![Verificar atualizações](/assets/images/help/dependabot/check-for-updates.png)
