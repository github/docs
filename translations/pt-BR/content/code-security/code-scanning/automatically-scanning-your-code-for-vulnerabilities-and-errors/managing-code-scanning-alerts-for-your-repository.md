---
title: Gerenciar alertas de verificação de código para o seu repositório
shortTitle: Gerenciar alertas
intro: 'Da visão de segurança, você pode visualizar, corrigir, ignorar ou excluir alertas de potenciais vulnerabilidades ou erros no código do seu projeto.'
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

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

## Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para verificar o código em um repositório usando a análise-padrão de {% data variables.product.prodname_codeql %}, uma análise de terceiros ou vários tipos de análise. Quando a análise for concluída, os alertas resultantes serão exibidos lado a lado na visualização de segurança do repositório. Os resultados de ferramentas de terceiros ou de consultas personalizadas podem não incluir todas as propriedades que você vê para alertas detectados pela análise-padrão {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

Por padrão, {% data variables.product.prodname_code_scanning %} analisa seu código periodicamente no branch-padrão e durante os pull requests. Para obter informações sobre o gerenciamento de alertas em um pull request, consulte "[Triar aletras de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Sobre detalhes de alertas

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como as propriedades do alerta, como, por exemplo, a gravidade{% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}, gravidade da segurança,{% endif %} e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

![Exemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Se você configurar o {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, isso também poderá detectar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

### Sobre os níveis de gravidade

Níveis de gravidade do alerta podem ser `Error`, `Warning` ou `Note`.

Por padrão, qualquer resultado de digitalização de código com uma gravidade de `error` irá gerar uma falha de verificação. {% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}Você pode especificar o nível de gravidade no qual os pull requests que habilitam alertas de verificação de código devem falhar. Para obter mais informações, consulte[Definir as gravidades causadoras da falha de verificação de pull request](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)."{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4697 or ghec %}
### Sobre níveis de gravidade de segurança

{% data variables.product.prodname_code_scanning_capc %} exibe níveis de gravidade de segurança para alertas gerados por consultas de segurança. Níveis de severidade de segurança podem ser `graves`, `altos`, `médios` ou `baixos`.

Para calcular a gravidade da segurança de um alerta, usamos dados de Pontuação do Sistema de Vulnerabilidade Comum (CVSS). O CVSS é uma estrutura aberta para comunicar as características e gravidade das vulnerabilidades de software, e é comumente usado por outros produtos de segurança para pontuar alertas. Para obter mais informações sobre como os níveis de gravidade são calculados, consulte [o post do blogue](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

Por padrão, qualquer resultado de verificação de código com uma gravidade de segurança de `Grave` ou `Alta` irá causar uma falha de verificação. Você pode especificar qual nível de segurança para os resultados da digitalização do código deve causar uma falha de verificação. Para obter mais informações, consulte[Definir as gravidades causadoras da falha de verificação de pull request](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)."{% endif %}

### Sobre etiquetas para alertas não encontrados no código do aplicativo

{% data variables.product.product_name %} atribui uma etiqueta de categoria para alertas que não são encontrados no código do aplicativo. A etiqueta está relacionado à localização do alerta.

- **Gerado**: Código gerado pelo processo de compilação
- **Teste**: Código de teste
- **Biblioteca**: Biblioteca ou código de terceiros
- **Documentação**: Documentação

{% data variables.product.prodname_code_scanning_capc %} categoriza arquivos por caminho do arquivo. Você não pode categorizar manualmente os arquivos de origem.

Aqui está um exemplo da lista de alerta de {% data variables.product.prodname_code_scanning %} de um alerta marcado como ocorrendo no código da biblioteca.

![Código digitalizando o alerta de biblioteca na lista](/assets/images/help/repository/code-scanning-library-alert-index.png)

Na página de alerta, você pode ver que o caminho do arquivo é marcado como código da biblioteca (etiqueta `Biblioteca`).

![Código digitalizando as informações do alerta de biblioteca](/assets/images/help/repository/code-scanning-library-alert-show.png)

## Visualizar os alertas de um repositório

Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de {% data variables.product.prodname_code_scanning %} em pull requests. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Você precisa de permissão de gravação para visualizar um resumo de todos os alertas para um repositório na aba **Segurança**.

Por padrão, a página de verificação de código de alertas é filtrada para mostrar alertas apenas para o branch padrão do repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
1. Opcionalmente, use a caixa de pesquisa de texto livre ou os menus suspensos para filtrar alertas. Por exemplo, você pode filtrar pela ferramenta usada para identificar alertas. ![Filter by tool](/assets/images/help/repository/code-scanning-filter-by-tool.png){% endif %}
1. Em "{% data variables.product.prodname_code_scanning_capc %}", clique no alerta que você gostaria de explorar.
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
  ![Resumo dos alertas](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Opcionalmente, se o alerta destacar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o destino onde é usado. ![O link "Exibir caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter orientação sobre como corrigir seu código. ![Detalhes para um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
{% note %}

**Observação:** Para análise de {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_codeql %}, você pode ver informações sobre a última execução em um cabeçalho na parte superior da lista de alertas de {% data variables.product.prodname_code_scanning %} para o repositório.

Por exemplo, você pode ver quando o último scanner foi executada, o número de linhas de código analisadas em comparação com o número total de linhas de código no seu repositório, e o número total de alertas gerados. ![Banner de interface do usuário](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}
{% endif %}

## Filtrando alertas de {% data variables.product.prodname_code_scanning %}

Você pode filtrar os alertas exibidos no modo de exibição de alertas de {% data variables.product.prodname_code_scanning %}. Isso é útil caso haja muitos alertas pois você pode se concentrar em um determinado tipo de alerta. Existem alguns filtros predefinidos e uma série de palavras-chave que você pode usar para refinar a lista de alertas exibidos.

- Para usar um filtro predefinido, clique **Filtros** ou em um filtro exibido no cabeçalho da lista de alertas e escolha um filtro na lista suspensa.
  {% ifversion fpt or ghes > 3.0 or ghec %}![Filtros predefinidos](/assets/images/help/repository/code-scanning-predefined-filters.png)
  {% else %}![Predefined filters](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Para usar uma palavra-chave, digite diretamente na caixa de texto dos filtros ou:
  1. Clique na caixa de filtros para exibir uma lista de todas as palavras-chave de filtro disponíveis.
  2. Clique na palavra-chave que deseja usar e, em seguida, selecione um valor na lista suspensa. ![Lista de filtros de palavra-chave](/assets/images/help/repository/code-scanning-filter-keywords.png)

O benefício de usar filtros de palavra-chave é que apenas os valores com resultados são exibidos nas listas suspensas. Isso facilita evitar filtros de configuração que não encontram resultados.

Se você inserir vários filtros, a visualização mostrará alertas que correspondem a _todos_ esses filtros. Por exemplo, `is:closed severity:high branch:main` só exibirá alertas de alta gravidade fechados e que estão presentes no branch `principal`. A exceção são os filtros relacionados a refs (`ref`, `branch` e `pr`): `is:open branch:main branch:next` irá mostrar alertas abertos do branch `principal` do `próximo` branch.

### Restringir resultados apenas ao código do aplicativo

Você pode usar o filtro "Apenas alertas no código do aplicativo" ou a palavra-chave `autofilter:true` e valor para restringir os resultados de alertas no código do aplicativo. Consulte "[Sobre etiquetas para alertas que não estão no código de aplicativos](#about-labels-for-alerts-that-are-not-found-in-application-code)" acima para mais informações sobre os tipos de código que não são código do aplicativo.

{% ifversion fpt or ghes > 3.1 or ghec %}

## Pesquisando alertas de {% data variables.product.prodname_code_scanning %}

Você pode pesquisar na lista de alertas. Isso é útil se houver um grande número de alertas no seu repositório, ou, por exemplo, se você não souber o nome exato de um alerta. {% data variables.product.product_name %} realiza a pesquisa de texto livre:
- O nome do alerta
- A descrição do alerta
- Os detalhes do alerta (isso também inclui as informações ocultas da visualização por padrão na seção ocultável **Mostrar mais**)

 ![Informações de alerta usadas em pesquisas](/assets/images/help/repository/code-scanning-free-text-search-areas.png)

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
- A busca E retornará resultados em que os termos da pesquisa são encontrados _em qualquer lugar_, em qualquer ordem no nome do alerta, descrição ou detalhes.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. À direita dos menus suspensos de **Filtros**, digite as palavras-chave a serem pesquisadas na caixa de pesquisa de texto livre. ![A caixa de pesquisa de texto livre](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Pressione <kbd>retornar</kbd>. O anúncio do alerta conterá os alertas {% data variables.product.prodname_code_scanning %} alertas abertos correspondentes aos seus critérios de busca.

{% endif %}

## Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" e " "[Testar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem permissão de escrita em um repositório, você pode visualizar alertas corrigidos, vendo o resumo de alertas e clicando em **Fechado**. Para obter mais informações, consulte "[Visualizar os alertas de um repositório](#viewing-the-alerts-for-a-repository). A lista "Fechado" mostra alertas e alertas corrigidos que os usuários ignoraram.

Você pode usar{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %} a pesquisa de texto livre ou{% endif %} os filtros para exibir um subconjunto de alertas e, em seguida, marcar, por sua vez, todos os alertas correspondentes como fechados.

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o menu suspenso "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
![Filtrar alertas por branch](/assets/images/help/repository/code-scanning-branch-filter.png)
{% else %}
![Filtrar alertas por branch](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)
{% endif %}

## Ignorar ou excluir alertas

Há duas formas de fechar um alerta. Você pode corrigir o problema no código ou pode ignorar o alerta. Como alternativa, se você tiver permissões de administrador para o repositório, será possível excluir alertas. Excluir alertas é útil em situações em que você configurou uma ferramenta {% data variables.product.prodname_code_scanning %} e, em seguida, decidiu removê-la ou em situações em que você configurou a análise de {% data variables.product.prodname_codeql %} com um conjunto de consultas maior do que você deseja continuar usando, e, em seguida, você removeu algumas consultas da ferramenta. Em ambos os casos, excluir alertas permite limpar os seus resultados de {% data variables.product.prodname_code_scanning %}. Você pode excluir alertas da lista de resumo dentro da aba **Segurança**.

Ignorar um alerta é uma maneira de fechar um alerta que você considera que não precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Você pode ignorar alertas de anotações de {% data variables.product.prodname_code_scanning %} no código ou da lista de resumo dentro na aba **Segurança**.

Ao descartar um alerta:

- Ele é ignorado em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- O alerta é movido para a lista "Fechado" no resumo dos alertas, onde você pode reabri-lo, se necessário.
- O motivo pelo qual você fechou o alerta foi gravado.
- Da próxima vez que {% data variables.product.prodname_code_scanning %} for executado, o mesmo código não gerará um alerta.

Ao excluir um alerta:

- Ele é excluído em todos os branches.
- O alerta é removido do número de alertas atuais para o seu projeto.
- Ele _não é_ adicionado à lista "Fechado" no resumo dos alertas.
- Se o código que gerou o alerta permanecer o mesmo, e a mesma ferramenta {% data variables.product.prodname_code_scanning %} for executada novamente sem qualquer alteração de configuração, o alerta será exibido novamente nos resultados das análises.

Para ignorar ou excluir alertas:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Se você tem permissões de administrador para o repositório e deseja excluir alertas para esta ferramenta de {% data variables.product.prodname_code_scanning %}, selecione algumas ou todas as caixas de seleção e clique em **Excluir**.

   ![Excluir alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, você pode usar{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}} a pesquisa de texto livre ou{% endif %} os filtros para exibir um subconjunto de alertas e, em seguida, excluir todos os alertas correspondentes de uma só vez. Por exemplo, se você removeu uma consulta da análise de {% data variables.product.prodname_codeql %}, você pode usar o filtro "Regra" para listar apenas os alertas dessa consulta e, em seguida, selecionar e apagar todos esses alertas.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
  ![Filtrar alertas por regra](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filtrar alertas por regra](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}

1. Se você deseja ignorar um alerta, é importante explorar primeiro o alerta para que você possa escolher o motivo correto para ignorá-lo. Clique no alerta que você deseja explorar.

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
   ![Abrir um alerta da lista de resumo](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Revise o alerta e clique em **Ignorar** e escolha um motivo para fechar o alerta. ![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Ignorar múltiplos alertas de uma vez

Se um projeto tem vários alertas que você deseja ignorar pelo mesmo motivo, você pode ignorá-los em massa do resumo de alertas. Normalmente, você pode querer filtrar a lista e, em seguida, ignorar todos os alertas correspondentes. Por exemplo, você pode querer ignorar todos os alertas atuais no projeto que foram marcados para uma vulnerabilidade específica de Enumeração de Fraqueza Comum (CWE).

## Leia mais

- "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Sobre a integração com {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
