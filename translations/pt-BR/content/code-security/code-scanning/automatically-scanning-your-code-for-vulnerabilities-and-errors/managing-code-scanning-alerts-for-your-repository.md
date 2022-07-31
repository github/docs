---
title: Gerenciar alertas de verificação de código para o seu repositório
shortTitle: Gerenciar alertas
intro: 'Na visão de segurança, {% ifversion delete-code-scanning-alerts %}você pode visualizar, corrigir, ignorar ou excluir alertas {% else %}que você pode visualizar, corrigir, ou dispensar alertas{% endif %} de possíveis vulnerabilidades ou erros no código do seu projeto.'
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
---

{% data reusables.code-scanning.beta %}

## Visualizar os alertas de um repositório

Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de {% data variables.product.prodname_code_scanning %} em pull requests. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Você precisa de permissão de gravação para visualizar um resumo de todos os alertas para um repositório na aba **Segurança**.

Por padrão, a página de verificação de código de alertas é filtrada para mostrar alertas apenas para o branch padrão do repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Opcionalmente, use a caixa de pesquisa de texto livre ou os menus suspensos para filtrar alertas. Por exemplo, você pode filtrar pela ferramenta usada para identificar alertas. ![Filtrar por ferramenta](/assets/images/help/repository/code-scanning-filter-by-tool.png)
{% data reusables.code-scanning.explore-alert %}
![Resumo dos alertas](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
     {% data reusables.code-scanning.alert-default-branch %}
     ![The "Affected branches" section in an alert](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Opcionalmente, se o alerta destacar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o destino onde é usado.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
   ![O link "Exibir caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png)
   {% else %}
   ![O link "Exibir caminhos" em um alerta](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png)
   {% endif %}
2. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter orientação sobre como corrigir seu código. ![Detalhes para um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

Para obter mais informações, consulte "[Sobre alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)".

{% note %}

**Observação:** Para análise de {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_codeql %}, você pode ver informações sobre a última execução em um cabeçalho na parte superior da lista de alertas de {% data variables.product.prodname_code_scanning %} para o repositório.

Por exemplo, você pode ver quando o último scanner foi executada, o número de linhas de código analisadas em comparação com o número total de linhas de código no seu repositório, e o número total de alertas gerados. ![Banner de interface do usuário](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Filtrando alertas de {% data variables.product.prodname_code_scanning %}

Você pode filtrar os alertas exibidos no modo de exibição de alertas de {% data variables.product.prodname_code_scanning %}. Isso é útil caso haja muitos alertas pois você pode se concentrar em um determinado tipo de alerta. Existem alguns filtros predefinidos e uma série de palavras-chave que você pode usar para refinar a lista de alertas exibidos.

- Para usar um filtro predefinido, clique **Filtros** ou em um filtro exibido no cabeçalho da lista de alertas e escolha um filtro na lista suspensa.
  {% ifversion fpt or ghes or ghec %}![Filtros predefinidos](/assets/images/help/repository/code-scanning-predefined-filters.png)
  {% else %}![Predefined filters](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Para usar uma palavra-chave, digite diretamente na caixa de texto dos filtros ou:
  1. Clique na caixa de filtros para exibir uma lista de todas as palavras-chave de filtro disponíveis.
  2. Clique na palavra-chave que deseja usar e, em seguida, selecione um valor na lista suspensa. ![Lista de filtros de palavra-chave](/assets/images/help/repository/code-scanning-filter-keywords.png)

O benefício de usar filtros de palavra-chave é que apenas os valores com resultados são exibidos nas listas suspensas. Isso facilita evitar filtros de configuração que não encontram resultados.

Se você inserir vários filtros, a visualização mostrará alertas que correspondem a _todos_ esses filtros. Por exemplo, `is:closed severity:high branch:main` só exibirá alertas de alta gravidade fechados e que estão presentes no branch `principal`. A exceção são os filtros relacionados a refs (`ref`, `branch` e `pr`): `is:open branch:main branch:next` irá mostrar alertas abertos do branch `principal` do `próximo` branch.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
{% data reusables.code-scanning.filter-non-default-branches %}
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

Você pode prefixar o filtro `tag` com `-` para excluir resultados com essa tag. Por exemplo, `-tag:style` mostra apenas alertas que não têm a tag `estilo`{% ifversion codeql-ml-queries %} e `-tag:experimental` omitirá todos os alertas experimentais. Para obter mais informações, consulte "[Sobre alertas de{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."{% else %}.{% endif %}

{% endif %}

### Restringir resultados apenas ao código do aplicativo

Você pode usar o filtro "Apenas alertas no código do aplicativo" ou a palavra-chave `autofilter:true` e valor para restringir os resultados de alertas no código do aplicativo. Consulte "[Sobre etiquetas para alertas que não estão no código de aplicativos](#about-labels-for-alerts-that-are-not-found-in-application-code)" acima para mais informações sobre os tipos de código que não são código do aplicativo.

{% ifversion fpt or ghes or ghec %}

## Pesquisando alertas de {% data variables.product.prodname_code_scanning %}

Você pode pesquisar na lista de alertas. Isso é útil se houver um grande número de alertas no seu repositório, ou, por exemplo, se você não souber o nome exato de um alerta. {% data variables.product.product_name %} realiza a pesquisa de texto livre:
- O nome do alerta
- Os detalhes do alerta (isso também inclui as informações ocultas da visualização por padrão na seção ocultável **Mostrar mais**)
 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
 ![Informações de alerta usadas em pesquisas](/assets/images/help/repository/code-scanning-free-text-search-areas.png)
 {% else %}
 ![Informações de alerta usadas em pesquisas](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) 
{% endif %}
| Pesquisa compatível                                      | Exemplo de sintaxe | Resultados                                                              |
| -------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------- |
| Pesquisa de uma palavra                                  | `injeção`          | Retorna todos os alertas que contêm a palavra `injeção`                 |
| Pesquisa de múltiplas palavras                           | `injeção sql`      | Retorna todos os alertas que contêm `sql` ou `injeção`                  |
| Pesquisa de correspondência exata</br>(use aspas duplas) | `"injeção sql"`    | Retorna todos os alertas que contém a frase exata `injection sql`       |
| OU pesquisa                                              | `sql OU injeção`   | Retorna todos os alertas que contêm `sql` ou `injeção`                  |
| Pesquisa E                                               | `sql E injeção`    | Retorna todos os alertas que contêm ambas as palavras `sql` e `injeção` |

{% tip %}

**Dicas:**
- A busca múltipla de palavras é equivalente a uma busca OU.
- A pesquisa E retornará resultados em que os termos da pesquisa são encontrados _em qualquer lugar_, em qualquer ordem no nome ou informações do alerta.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. À direita dos menus suspensos de **Filtros**, digite as palavras-chave a serem pesquisadas na caixa de pesquisa de texto livre. ![A caixa de pesquisa de texto livre](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Pressione <kbd>retornar</kbd>. O anúncio do alerta conterá os alertas {% data variables.product.prodname_code_scanning %} alertas abertos correspondentes aos seus critérios de busca.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Rastreando alertas de {% data variables.product.prodname_code_scanning %} em problemas

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
{% data reusables.code-scanning.github-issues-integration %}
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" e " "[Testar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem permissão de escrita em um repositório, você pode visualizar alertas corrigidos, vendo o resumo de alertas e clicando em **Fechado**. Para obter mais informações, consulte "[Visualizar os alertas de um repositório](#viewing-the-alerts-for-a-repository). A lista "Fechado" mostra alertas e alertas corrigidos que os usuários ignoraram.

Você pode usar a pesquisa de texto livre ou os filtros para exibir um subconjunto de alertas e, em seguida, marcar todos os alertas correspondentes como fechados.

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o filtro "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

![Filtrar alertas por branch](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
{% data reusables.code-scanning.filter-non-default-branches %}
{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
{% note %}

**Observação:** Se você executar a digitalização de código usando várias configurações, às vezes, um alerta terá múltiplas origens da análise. A menos que você execute todas as configurações regularmente, você poderá ver alertas fixos em uma análise de origem, mas não em outra. Para obter mais informações, consulte[Sobre as origens da análise](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)".

{% endnote %}
{% endif %}
## Ignorando ou {% ifversion delete-code-scanning-alerts %}ou excluindo{% endif %} alertas

Há duas formas de fechar um alerta. Você pode corrigir o problema no código ou pode ignorar o alerta. {% ifversion delete-code-scanning-alerts %}Como alternativa, se você tiver permissões de administrador para o repositório, será possível excluir alertas. Excluir alertas é útil em situações em que você configurou uma ferramenta {% data variables.product.prodname_code_scanning %} e, em seguida, decidiu removê-la ou em situações em que você configurou a análise de {% data variables.product.prodname_codeql %} com um conjunto de consultas maior do que você deseja continuar usando, e, em seguida, você removeu algumas consultas da ferramenta. Em ambos os casos, excluir alertas permite limpar os seus resultados de {% data variables.product.prodname_code_scanning %}. Você pode excluir alertas da lista de resumo dentro da aba de **Segurança** .{% endif %}

Ignorar um alerta é uma maneira de fechar um alerta que você considera que não precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Você pode ignorar alertas de anotações de {% data variables.product.prodname_code_scanning %} no código ou da lista de resumo dentro na aba **Segurança**.

Ao descartar um alerta:

- Ele é ignorado em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- O alerta é movido para a lista "Fechado" no resumo dos alertas, onde você pode reabri-lo, se necessário.
- A razão pela qual você fechou o alerta foi registrada.{% ifversion comment-dismissed-code-scanning-alert %}
- Opcionalmente, você pode comentar em uma rejeição para registrar o contexto de uma rejeição de alerta.{% endif %}
- Da próxima vez que {% data variables.product.prodname_code_scanning %} for executado, o mesmo código não gerará um alerta.

{% ifversion delete-code-scanning-alerts %}Ao excluir um alerta:

- Ele é excluído em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- Ele _não é_ adicionado à lista "Fechado" no resumo dos alertas.
- Se o código que gerou o alerta permanecer o mesmo e a mesma ferramenta {% data variables.product.prodname_code_scanning %} for executada novamente sem qualquer alteração de configuração, o alerta será exibido novamente nos seus resultados das análises.{% endif %}

Para ignorar{% ifversion delete-code-scanning-alerts %}ou excluir{% endif %} alertas:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Se você tem permissões de administrador para o repositório e deseja excluir alertas para esta ferramenta de {% data variables.product.prodname_code_scanning %}, selecione algumas ou todas as caixas de seleção e clique em **Excluir**.

   ![Excluir alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, você pode usar a pesquisa de texto livre ou os filtros para exibir um subconjunto de alertas e, em seguida, excluir todos os alertas correspondentes de uma só vez. Por exemplo, se você removeu uma consulta da análise de {% data variables.product.prodname_codeql %}, você pode usar o filtro "Regra" para listar apenas os alertas dessa consulta e, em seguida, selecionar e apagar todos esses alertas.

{% ifversion ghes or ghae %}
  ![Filtrar alertas por regra](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filtrar alertas por regra](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}{% endif %}
1. Se você deseja ignorar um alerta, é importante explorar primeiro o alerta para que você possa escolher o motivo correto para ignorá-lo. Clique no alerta que você deseja explorar.

![Abrir um alerta da lista de resumo](/assets/images/help/repository/code-scanning-click-alert.png)

1. Revise o alerta e clique em {% ifversion comment-dismissed-code-scanning-alert %}**para ignorar o alerta** e escolher ou digitar um motivo para fechar o alerta. ![Captura de tela do alerta de verificação de código com menu suspenso para escolher o motivo da rejeição destacado](/assets/images/help/repository/code-scanning-alert-drop-down-reason.png)
{% else %}**Ignorar** e escolher um motivo para fechar o alerta.
  ![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)
{% endif %}

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Ignorar múltiplos alertas de uma vez

Se um projeto tem vários alertas que você deseja ignorar pelo mesmo motivo, você pode ignorá-los em massa do resumo de alertas. Normalmente, você pode querer filtrar a lista e, em seguida, ignorar todos os alertas correspondentes. Por exemplo, você pode querer ignorar todos os alertas atuais no projeto que foram marcados para uma vulnerabilidade específica de Enumeração de Fraqueza Comum (CWE).

## Leia mais

- "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Sobre a integração com {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
