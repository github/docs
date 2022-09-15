---
title: Gerenciamento de alertas de varredura de código para seu repositório
shortTitle: Manage alerts
intro: 'Na exibição de segurança, {% ifversion delete-code-scanning-alerts %}, você pode ver, corrigir, ignorar ou excluir alertas {% else %}você pode ver, corrigir ou ignorar alertas{% endif %} de possíveis vulnerabilidades ou erros no código do projeto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693324'
---
{% data reusables.code-scanning.beta %}

## Visualizar os alertas de um repositório

Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de {% data variables.product.prodname_code_scanning %} em pull requests. Para obter mais informações, confira "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Você precisa ter a permissão de gravação para ver um resumo de todos os alertas de um repositório na guia **Segurança**.

Por padrão, a página de verificação de código de alertas é filtrada para mostrar alertas apenas para o branch padrão do repositório.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Opcionalmente, use a caixa de pesquisa de texto livre ou os menus suspensos para filtrar alertas. Por exemplo, você pode filtrar pela ferramenta usada para identificar alertas.
   ![Filtrar por ferramenta](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![Resumo dos alertas](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![A seção "Branches afetados" em um alerta](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Opcionalmente, se o alerta realçar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o coletor em que é usado.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![O link "Mostrar caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![O link "Mostrar caminhos" em um alerta](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter diretrizes sobre como corrigir o código.
   ![Detalhes de um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

Para obter mais informações, confira "[Sobre os alertas da {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)".

{% note %}

**Observação:** para a análise da {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}, você pode ver informações sobre a última execução em um cabeçalho na parte superior da lista de alertas da {% data variables.product.prodname_code_scanning %} do repositório. 

Por exemplo, você pode ver quando o último scanner foi executada, o número de linhas de código analisadas em comparação com o número total de linhas de código no seu repositório, e o número total de alertas gerados.
  ![Banner da interface do usuário](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Filtrando alertas de {% data variables.product.prodname_code_scanning %}

Você pode filtrar os alertas exibidos no modo de exibição de alertas de {% data variables.product.prodname_code_scanning %}. Isso é útil caso haja muitos alertas pois você pode se concentrar em um determinado tipo de alerta. Existem alguns filtros predefinidos e uma série de palavras-chave que você pode usar para refinar a lista de alertas exibidos. 

- Para usar um filtro predefinido, clique em **Filtros** ou em um filtro mostrado no cabeçalho da lista de alertas e escolha um filtro na lista suspensa.
  {% ifversion fpt or ghes or ghec %}![Filtros predefinidos](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![Filtros predefinidos](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Para usar uma palavra-chave, digite diretamente na caixa de texto dos filtros ou:
  1. Clique na caixa de filtros para exibir uma lista de todas as palavras-chave de filtro disponíveis.
  2. Clique na palavra-chave que deseja usar e, em seguida, selecione um valor na lista suspensa.
  ![Lista de filtros de palavra-chave](/assets/images/help/repository/code-scanning-filter-keywords.png)

O benefício de usar filtros de palavra-chave é que apenas os valores com resultados são exibidos nas listas suspensas. Isso facilita evitar filtros de configuração que não encontram resultados.

Se você inserir vários filtros, a exibição mostrará os alertas que correspondem a _todos_ esses filtros. Por exemplo, `is:closed severity:high branch:main` exibirá apenas os alertas de alta gravidade fechados presentes no branch `main`. A exceção a isso são filtros relacionados a referências (`ref`, `branch` e `pr`): `is:open branch:main branch:next` mostrará os alertas abertos dos branches `main`e `next`.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

Você pode preceder o filtro `tag` com `-` para excluir os resultados com essa marca. Por exemplo, `-tag:style` só mostra os alertas que não têm a tag `style`{% ifversion codeql-ml-queries %} e `-tag:experimental` omitirá todos os alertas experimentais. Para obter mais informações, confira "[Sobre os alertas da {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% else %}.{% endif %}

{% endif %}

### Restringir resultados apenas ao código do aplicativo

Use o filtro "Apenas alertas no código do aplicativo" ou a palavra-chave `autofilter:true` e o valor para restringir os resultados aos alertas no código do aplicativo. Confira "[Sobre os rótulos de alertas que não estão no código do aplicativo](#about-labels-for-alerts-that-are-not-found-in-application-code)" acima para obter mais informações sobre os tipos de código que não são o código do aplicativo.

{% ifversion fpt or ghes or ghec %}

## Pesquisando alertas de {% data variables.product.prodname_code_scanning %}

Você pode pesquisar na lista de alertas. Isso é útil se houver um grande número de alertas no seu repositório, ou, por exemplo, se você não souber o nome exato de um alerta. {% data variables.product.product_name %} realiza a pesquisa de texto livre:
- O nome do alerta
- Os detalhes do alerta (isso também inclui as informações ocultas da exibição por padrão na seção recolhível **Mostrar mais**) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![As informações de alerta usadas nas pesquisas](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![As informações de alerta usadas nas pesquisas](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| Pesquisa compatível | Exemplo de sintaxe | Resultados |
| ---- | ---- | ---- |
| Pesquisa de uma palavra | `injection` | Retorna todos os alertas que contêm a palavra `injection` |
| Pesquisa de múltiplas palavras | `sql injection` | Retorna todos os alertas que contêm `sql` ou `injection` |
| Pesquisa de correspondência exata</br>(use aspas duplas) |  `"sql injection"` | Retorna todos os alertas que contêm a frase exata `sql injection` |
| OU pesquisa | `sql OR injection` | Retorna todos os alertas que contêm `sql` ou `injection` |
| Pesquisa E | `sql AND injection` | Retorna todos os alertas que contêm palavras `sql` e `injection` | 

{% tip %}

**Dicas:** 
- A busca múltipla de palavras é equivalente a uma busca OU.
- A pesquisa AND retornará resultados em que os termos da pesquisa são encontrados _em qualquer lugar_ e em qualquer ordem no nome ou nos detalhes do alerta.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. À direita dos menus suspensos **Filtros**, digite as palavras-chave a serem pesquisadas na caixa de pesquisa de texto livre.
  ![A caixa de pesquisa de texto livre](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Pressione <kbd>Retornar</kbd>. O anúncio do alerta conterá os alertas {% data variables.product.prodname_code_scanning %} alertas abertos correspondentes aos seus critérios de busca.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Rastreando alertas de {% data variables.product.prodname_code_scanning %} em problemas

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" e "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem a permissão de gravação em um repositório, visualize os alertas corrigidos vendo o resumo de alertas e clicando em **Fechados**. Para obter mais informações, confira "[Como ver os alertas de um repositório](#viewing-the-alerts-for-a-repository)". A lista "Fechado" mostra alertas e alertas corrigidos que os usuários ignoraram.

Você pode usar a pesquisa de texto livre ou os filtros para ver um subconjunto de alertas e depois marcar todos os alertas correspondentes como fechados. 

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o filtro "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

![Filtrar alertas por branch](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**Observação:** se você executar a verificação de código usando várias configurações, às vezes um alerta terá várias origens de análise. A menos que você execute todas as configurações regularmente, poderá ver alertas corrigidos em uma origem de análise, mas não em outra. Para obter mais informações, confira "[Sobre as origens da análise](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)".

{% endnote %} {% endif %}
## Como ignorar {% ifversion delete-code-scanning-alerts %}ou excluir{% endif %} alertas

Há duas formas de fechar um alerta. Você pode corrigir o problema no código ou pode ignorar o alerta. {% ifversion delete-code-scanning-alerts %}Como alternativa, se você tiver permissões de administrador no repositório, poderá excluir alertas. Excluir alertas é útil em situações em que você configurou uma ferramenta {% data variables.product.prodname_code_scanning %} e, em seguida, decidiu removê-la ou em situações em que você configurou a análise de {% data variables.product.prodname_codeql %} com um conjunto de consultas maior do que você deseja continuar usando, e, em seguida, você removeu algumas consultas da ferramenta. Em ambos os casos, excluir alertas permite limpar os seus resultados de {% data variables.product.prodname_code_scanning %}. Exclua os alertas da lista de resumo na guia **Segurança**.{% endif %}

Ignorar um alerta é uma maneira de fechar um alerta que você não acha que precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Você pode ignorar alertas de anotações da {% data variables.product.prodname_code_scanning %} no código ou na lista de resumo na guia **Segurança**.

Ao descartar um alerta:

- Ele é ignorado em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- O alerta é movido para a lista "Fechado" no resumo dos alertas, onde você pode reabri-lo, se necessário.
- O motivo pelo qual você fechou o alerta é registrado.{% ifversion comment-dismissed-code-scanning-alert %} 
- Opcionalmente, você pode fazer um comentário para registrar o contexto de um alerta ignorado.{% endif %}
- Da próxima vez que {% data variables.product.prodname_code_scanning %} for executado, o mesmo código não gerará um alerta.

{% ifversion delete-code-scanning-alerts %}Quando você exclui um alerta:

- Ele é excluído em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- Ele _não_ é adicionado à lista "Fechados" no resumo dos alertas.
- Se o código que gerou o alerta permanecer o mesmo, e a mesma ferramenta {% data variables.product.prodname_code_scanning %} for executada novamente sem qualquer alteração de configuração, o alerta será exibido novamente nos resultados das análises.{% endif %}

Para ignorar {% ifversion delete-code-scanning-alerts %}ou excluir alertas {% endif %}:

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Se você tem permissões de administrador no repositório e deseja excluir alertas para esta ferramenta de {% data variables.product.prodname_code_scanning %}, selecione algumas ou todas as caixas de seleção e clique em **Excluir**.

   ![Excluir alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, você pode usar a pesquisa de texto livre e os filtros para ver um subconjunto de alertas e depois excluir todos os alertas correspondentes de uma só vez. Por exemplo, se você removeu uma consulta da análise de {% data variables.product.prodname_codeql %}, você pode usar o filtro "Regra" para listar apenas os alertas dessa consulta e, em seguida, selecionar e apagar todos esses alertas.

{% ifversion ghes or ghae %} ![Filtrar alertas por regra](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![Filtrar alertas por regra](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. Se você deseja ignorar um alerta, é importante explorar primeiro o alerta para que você possa escolher o motivo correto para ignorá-lo. Clique no alerta que você deseja explorar.
![Abra um alerta da lista de resumo](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. Revise o alerta, clique em **Ignorar alerta** e escolha ou digite um motivo para fechá-lo. 
  ![Captura de tela do alerta de verificação de código com um menu suspenso para escolher o motivo enfatizado do alerta ignorado](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. Revise o alerta, clique em **Ignorar** e escolha um motivo para fechá-lo.
  ![Como escolher um motivo para descartar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Ignorar múltiplos alertas de uma vez

Se um projeto tem vários alertas que você deseja ignorar pelo mesmo motivo, você pode ignorá-los em massa do resumo de alertas. Normalmente, você pode querer filtrar a lista e, em seguida, ignorar todos os alertas correspondentes. Por exemplo, você pode querer ignorar todos os alertas atuais no projeto que foram marcados para uma vulnerabilidade específica de Enumeração de Fraqueza Comum (CWE).

## Leitura adicional

- "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Sobre a integração à {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
