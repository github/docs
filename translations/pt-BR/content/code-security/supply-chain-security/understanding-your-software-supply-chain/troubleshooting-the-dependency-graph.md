---
title: Solução de problemas para o gráfico de dependências
intro: 'Se as informações de dependências relatadas pelo gráfico de dependências não é o que você esperava, há uma série de pontos a considerar e várias coisas que você pode verificar.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 30c4830c125e9b20ada59e0e0e29fa0eb5c6c649
ms.sourcegitcommit: a9af58ef52d8d109186053d184d9b1e52e5f0323
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148128901'
---
{% data reusables.dependabot.result-discrepancy %}

## O gráfico de dependências só encontra dependências nos manifestos e nos arquivos de bloquei?

O grafo de dependência inclui {% ifversion dependency-submission-api %}automaticamente{% endif %} informações sobre dependências declaradas explicitamente no ambiente. Ou seja, dependências que são especificadas em um manifesto ou um arquivo de bloqueio. O gráfico de dependências, geralmente, também inclui dependências transitivas, mesmo quando não são especificadas em um arquivo de travamento analisando as dependências das dependências em um arquivo de manifesto.

O grafo de dependência não inclui {% ifversion dependency-submission-api %}automaticamente{% endif %} dependências "soltas". Dependências "soltas" são arquivos individuais copiados de outra fonte e verificados no repositório diretamente ou dentro de um arquivo (como um arquivo ZIP ou JAR), em vez de ser referenciadas pelo manifesto ou arquivo de bloqueio do gerenciador de pacotes. 

{% ifversion dependency-submission-api %}No entanto, você pode usar a API Envio de dependência (beta) para adicionar dependências ao grafo de dependência de um projeto, mesmo que as dependências não sejam declaradas em um arquivo de manifesto ou de bloqueio, como as dependências resolvidas quando um projeto é criado. O grafo de dependência exibirá as dependências enviadas agrupadas por ecossistema, mas separadamente das dependências analisadas dos arquivos de manifesto ou de bloqueio. Para obter mais informações sobre a API Envio de dependência, confira "[Como usar a API Envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Verificação**: a dependência ausente para um componente que não está especificado no arquivo de manifesto ou de bloqueio do repositório?

## O gráfico de dependências detecta dependências especificadas usando variáveis?

O gráfico de dependências analisa como são carregados para {% data variables.product.prodname_dotcom %}. O gráfico de dependência não tem acesso ao ambiente de construção do projeto. Portanto, ele não pode resolver variáveis usadas dentro dos manifestos. Se você usar variáveis dentro de um manifesto para especificar o nome, ou o que é mais comum, a versão de uma dependência, essa dependência não será incluída {% ifversion dependency-submission-api %}automaticamente{% endif %} no grafo de dependência.

{% ifversion dependency-submission-api %}No entanto, você pode usar a API Envio de dependência (beta) para adicionar dependências ao grafo de dependência de um projeto, mesmo que as dependências só sejam resolvidas na criação do projeto. Para obter mais informações sobre a API Envio de dependência, confira "[Como usar a API Envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Verificação**: a dependência ausente é declarada no manifesto por meio de uma variável para o nome ou a versão?

## Existem limites que afetam os dados do gráfico de dependências?

Sim, o gráfico de dependências tem duas categorias de limites:

1. **Limites de processamento**

    Eles afetam o gráfico de dependências exibido dentro de {% data variables.product.prodname_dotcom %} e também impedem que sejam criados {% data variables.product.prodname_dependabot_alerts %}.

    Manifestos com tamanho superior a 0.5 MB são processados apenas para contas corporativas. Para outras contas, manifestos acima de 0,5 MB são ignorados e não criarão {% data variables.product.prodname_dependabot_alerts %}.

    Por padrão, o {% data variables.product.prodname_dotcom %} não processará mais de {% ifversion fpt %}150{% else %}600{% endif %} manifestos por repositório. {% data variables.product.prodname_dependabot_alerts %} não foi criado para manifestos acima deste limite. Se você precisar aumentar o limite, entre em contato com {% data variables.contact.contact_support %}. 

2. **Limites de visualização**

    Eles afetam o que é exibido no gráfico de dependências dentro de {% data variables.product.prodname_dotcom %}. No entanto, eles não afetam {% data variables.product.prodname_dependabot_alerts %} que foram criados.

    A exibição de dependências do gráfico de dependências em um repositório só exibe 100 manifestos. De modo geral, isso é adequado, já que é significativamente maior do que o limite de processamento descrito acima. Em situações em que o limite de processamento é superior a 100, os {% data variables.product.prodname_dependabot_alerts %} são criados para quaisquer manifestos que não são mostrados dentro de {% data variables.product.prodname_dotcom %}.

**Verificação**: a dependência ausente está em um arquivo de manifesto com mais de 0,5 MB ou em um repositório com um grande número de manifestos?

## Leitura adicional

- "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solução de problemas de detecção de dependências vulneráveis](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes %}
- "[Solução de problemas de erros do {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
