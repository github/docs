---
title: Sobre alertas de digitalização de códigos
intro: Aprenda os diferentes tipos de alertas de varredura de códigos e as informações que ajuda você a entender o problema nos destaques de cada alerta.
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881224'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para verificar o código em um repositório usando a análise-padrão de {% data variables.product.prodname_codeql %}, uma análise de terceiros ou vários tipos de análise. Quando a análise for concluída, os alertas resultantes serão exibidos lado a lado na visualização de segurança do repositório. Os resultados de ferramentas de terceiros ou de consultas personalizadas podem não incluir todas as propriedades que você vê para alertas detectados pela análise-padrão {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

Por padrão, {% data variables.product.prodname_code_scanning %} analisa seu código periodicamente no branch-padrão e durante os pull requests. Para obter informações sobre como gerenciar os alertas em uma solicitação de pull, confira "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

## Sobre os detalhes do alerta

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como propriedades do alerta, por exemplo, a gravidade do alerta, a gravidade da segurança e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Exemplo de alerta da {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![Exemplo de alerta da {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

Se você configurar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, você também poderá encontrar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

### Sobre os níveis de gravidade

Os níveis de severidade do alerta podem ser `Error`, `Warning` e `Note`.

Se a {% data variables.product.prodname_code_scanning %} estiver habilitada como uma verificação de solicitação de pull, a verificação falhará se detectar algum resultado com a severidade `error`. Você pode especificar o nível de gravidade dos alertas da verificação de código que causa uma falha de verificação. Para obter mais informações, confira "[Como definir as gravidades que causam uma falha na verificação de solicitação de pull](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Sobre níveis de gravidade de segurança

{% data variables.product.prodname_code_scanning_capc %} exibe níveis de gravidade de segurança para alertas gerados por consultas de segurança. Os níveis de severidade de segurança podem ser `Critical`, `High`, `Medium` ou `Low`.

Para calcular a gravidade da segurança de um alerta, usamos dados de Pontuação do Sistema de Vulnerabilidade Comum (CVSS). O CVSS é uma estrutura aberta para comunicar as características e gravidade das vulnerabilidades de software, e é comumente usado por outros produtos de segurança para pontuar alertas. Para obter mais informações sobre como os níveis de severidade são calculados, confira [esta postagem no blog](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

Por padrão, os resultados da {% data variables.product.prodname_code_scanning %} com a severidade de segurança `Critical` ou `High` causará uma falha de verificação. Você pode especificar qual nível de gravidade de segurança para resultados de {% data variables.product.prodname_code_scanning %} causarão uma falha de verificação. Para obter mais informações, confira "[Como definir as gravidades que causam uma falha na verificação de solicitação de pull](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### Sobre as origens de análise

Você pode definir várias configurações de análise de código em um repositório usando diferentes ferramentas e tendo como destino diferentes linguagens ou áreas do código. Cada configuração da verificação de código é a origem de análise de todos os alertas gerados. Por exemplo, um alerta gerado por meio da análise padrão do CodeQL com o GitHub Actions terá uma origem de análise diferente de um alerta gerado externamente e carregado por meio da API de verificação de código.

Se você usar várias configurações para analisar um arquivo, os problemas detectados pela mesma consulta serão relatados como alertas com várias origens de análise. Se um alerta tiver mais de uma origem de análise, um ícone {% octicon "workflow" aria-label="The workflow icon" %} será exibido ao lado de qualquer branch relevante na seção **Branches afetados** no lado direito da página de alerta. Posicione o cursor sobre o ícone {% octicon "workflow" aria-label="The workflow icon" %} para ver os nomes de cada origem de análise e o status do alerta da origem de análise. Veja também o histórico de quando os alertas apareceram em cada origem de análise na linha do tempo da página de alertas. Se um alerta tiver apenas uma origem de análise, nenhuma informação sobre as origens de análise será exibida na página de alertas.

![Alerta da verificação de código com várias origens de análise](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**Observação:** às vezes, um alerta da verificação de código é exibido como corrigido para uma origem de análise, mas ainda fica em aberto para uma segunda origem de análise. Resolva isso executando novamente a segunda configuração da verificação de código para atualizar o status do alerta dessa origem de análise.

{% endnote %}

{% endif %}
### Sobre etiquetas para alertas não encontrados no código do aplicativo

{% data variables.product.product_name %} atribui uma etiqueta de categoria para alertas que não são encontrados no código do aplicativo. A etiqueta está relacionado à localização do alerta.

- **Gerado**: código gerado pelo processo de build
- **Teste**: código de teste
- **Biblioteca**: biblioteca ou código de terceiros
- **Documentação**: documentação

{% data variables.product.prodname_code_scanning_capc %} categoriza arquivos por caminho do arquivo. Você não pode categorizar manualmente os arquivos de origem.

Aqui está um exemplo da lista de alerta de {% data variables.product.prodname_code_scanning %} de um alerta marcado como ocorrência no código da biblioteca.

![Código digitalizando o alerta de biblioteca na lista](/assets/images/help/repository/code-scanning-library-alert-index.png)

Na página de alertas, você poderá ver que o caminho do arquivo é marcado como o código da biblioteca (rótulo `Library`).

![Código digitalizando as informações do alerta de biblioteca](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## Sobre alertas experimentais

{% data reusables.code-scanning.beta-codeql-ml-queries %}

Em repositórios que executam {% data variables.product.prodname_code_scanning %} que usam a ação de {% data variables.product.prodname_codeql %}, você pode ver alguns alertas que estão marcados como experimentais. Esses são os alertas que foram encontrados usando um modelo de aprendizado de máquina para estender os recursos de uma consulta existente {% data variables.product.prodname_codeql %}.

![Alerta experimental de digitalização de código na lista](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### Benefícios de usar modelos de aprendizado de máquina para estender consultas

As consultas que usam modelos de aprendizado de máquina são capazes de encontrar vulnerabilidades no código que foi escrito usando estruturas e bibliotecas que o autor de consulta original não incluiu.

Cada uma das consultas de segurança para {% data variables.product.prodname_codeql %} identifica o código que está vulnerável a um tipo específico de ataque. Os pesquisadores de segurança escrevem as perguntas e incluem as bibliotecas e estruturas mais comuns. Por isso, cada consulta existente encontra utilizações vulneráveis de estruturas e bibliotecas comuns. No entanto, os desenvolvedores utilizam várias estruturas e bibliotecas diferentes, e uma consulta mantida manualmente não pode incluir todas elas. Consequentemente, as consultas mantidas manualmente não proporcionam cobertura a todos os quadros e bibliotecas.

{% data variables.product.prodname_codeql %} usa um modelo de aprendizado de máquina para estender uma consulta de segurança existente a fim de cobrir uma gama mais ampla de estruturas e bibliotecas. O modelo de aprendizado de máquina é treinado para detectar problemas no código que nunca foi visto antes. As perguntas que utilizam o modelo encontrarão resultados para quadros e bibliotecas que não estão descritas na consulta original.

### Alertas identificados que usam aprendizado de máquina

Os alertas encontrados que usam um modelo de aprendizado de máquina são marcados como "Alertas experimentais" para mostrar que a tecnologia está em desenvolvimento ativo. Esses alertas têm uma taxa mais alta de resultados falsospositivo do que as consultas em que se baseiam. O modelo de aprendizado de máquina melhorará com base nas ações do usuário como, por exemplo, marcar um resultado ruim como um falso-positivo ou a resolução de um bom resultado.

![Detalhes do alerta experimental da digitalização de código](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## Habilitando alertas experimentais

O conjunto de consultas padrão de {% data variables.product.prodname_codeql %} não inclui nenhuma consulta que use o aprendizado de máquina para gerar alertas experimentais. Para executar consultas de aprendizado de máquina durante {% data variables.product.prodname_code_scanning %}, você precisa executar as consultas adicionais contidas em um dos seguintes conjuntos de consulta.

{% data reusables.code-scanning.codeql-query-suites %}

Quando você atualizar seu fluxo de trabalho para executar um conjunto de consultas adicional, isso aumentará o tempo de análise.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

Para obter mais informações, confira "[Como configurar a verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)".

## Desabilitando alertas experimentais

A maneira mais simples de desabilitar consultas que usam o machine learning para gerar alertas experimentais é interromper a execução do conjunto de consultas `security-extended` ou `security-and-quality`. No exemplo acima, você removerá o comentário da linha `queries`. Caso você precise continuar executando o pacote `security-extended` ou `security-and-quality` e as consultas de machine learning estão causando problemas, abra um tíquete com [o suporte do {% data variables.product.company_short %}](https://support.github.com/contact) com os detalhes a seguir.

- Título do tíquete: "{% data variables.product.prodname_code_scanning %}: remoção dos alertas experimentais beta"
- Especifique os detalhes dos repositórios ou organizações afetados
- Solicite um encaminhamento para a equipe de engenharia

{% endif %}
