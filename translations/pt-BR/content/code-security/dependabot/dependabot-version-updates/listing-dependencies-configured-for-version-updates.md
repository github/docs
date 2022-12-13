---
title: Listando dependências configuradas para atualizações da versão
intro: 'Você pode visualizar as dependências que {% data variables.product.prodname_dependabot %} monitora para atualizações.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108270'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Visualizando dependências monitoradas por {% data variables.product.prodname_dependabot %}

Depois de habilitar as atualizações de versão, confirme se a configuração está correta usando a guia **{% data variables.product.prodname_dependabot %}** no grafo de dependência do repositório. Para obter mais informações, confira "[Como configurar as atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. Opcionalmente, para ver os arquivos monitorados de um gerenciador de pacotes, clique no {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Arquivos de dependência monitorados](/assets/images/help/dependabot/monitored-dependency-files.png)

Se quaisquer dependências estiverem faltando, verifique os arquivos de log em busca de erros. Se algum gerenciador de pacotes faltar, revise o arquivo de configuração.

## Visualizando arquivos de log {% data variables.product.prodname_dependabot %}

1. Na guia **{% data variables.product.prodname_dependabot %}** , clique em **Verificado pela última vez há *TIME*** para ver o arquivo de log gerado pelo {% data variables.product.prodname_dependabot %} durante a última verificação das atualizações de versão.
  ![Exibir arquivo de log](/assets/images/help/dependabot/last-checked-link.png)
2. Opcionalmente, para executar novamente a verificação de versão, clique em **Verificar se há atualizações**.
  ![Verificar atualizações](/assets/images/help/dependabot/check-for-updates.png)
