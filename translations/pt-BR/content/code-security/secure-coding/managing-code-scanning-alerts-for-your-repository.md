---
title: Gerenciar alertas de verificação de código para o seu repositório
shortTitle: Gerenciando alertas
intro: 'Da visão de segurança, você pode visualizar, corrigir, ignorar ou excluir alertas de potenciais vulnerabilidades ou erros no código do seu projeto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
topics:
  - Security
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para verificar o código em um repositório usando a análise-padrão de {% data variables.product.prodname_codeql %}, uma análise de terceiros ou vários tipos de análise. Quando a análise for concluída, os alertas resultantes serão exibidos lado a lado na visualização de segurança do repositório. Os resultados de ferramentas de terceiros ou de consultas personalizadas podem não incluir todas as propriedades que você vê para alertas detectados pela análise-padrão {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

Por padrão, {% data variables.product.prodname_code_scanning %} analisa seu código periodicamente no branch-padrão e durante os pull requests. Para obter informações sobre o gerenciamento de alertas em um pull request, consulte "[Triar aletras de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Sobre detalhes de alertas

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como propriedades do alerta, como, por exemplo, a gravidade e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

![Exemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Se você configurar o {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, isso também poderá detectar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

### Visualizar os alertas de um repositório

Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de {% data variables.product.prodname_code_scanning %} em pull requests. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Você precisa de permissão de gravação para visualizar um resumo de todos os alertas para um repositório na aba **Segurança**. Por padrão, os alertas são exibidos para o branch-padrão.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
1. Opcionalmente, use os menus suspensos para filtrar alertas. Por exemplo, você pode filtrar pela ferramenta usada para identificar alertas. ![Filter by tool](/assets/images/help/repository/code-scanning-filter-by-tool.png){% endif %}
1. Em "{% data variables.product.prodname_code_scanning_capc %}", clique no alerta que você gostaria de explorar.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![Resumo dos alertas](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Opcionalmente, se o alerta destacar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o destino onde é usado. ![O link "Exibir caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter orientação sobre como corrigir seu código. ![Detalhes para um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

### Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" e " "[Testar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem permissão de escrita em um repositório, você pode visualizar alertas corrigidos, vendo o resumo de alertas e clicando em **Fechado**. Para obter mais informações, consulte "[Visualizar os alertas de um repositório](#viewing-the-alerts-for-a-repository). A lista "Fechado" mostra alertas e alertas corrigidos que os usuários ignoraram.

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o menu suspenso "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
![Filtrar alertas por branch](/assets/images/help/repository/code-scanning-branch-filter.png)
{% else %}
![Filtrar alertas por branch](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)
{% endif %}

### Ignorar ou excluir alertas

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

   Opcionalmente, você pode usar os filtros para exibir um subconjunto de alertas e, em seguida, excluir todos os alertas de correspondência de uma só vez. Por exemplo, se você removeu uma consulta da análise de {% data variables.product.prodname_codeql %}, você pode usar o filtro "Regra" para listar apenas os alertas dessa consulta e, em seguida, selecionar e apagar todos esses alertas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![Filtrar alertas por regra](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filtrar alertas por regra](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}

1. Se você deseja ignorar um alerta, é importante explorar primeiro o alerta para que você possa escolher o motivo correto para ignorá-lo. Clique no alerta que você deseja explorar.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
   ![Abrir um alerta da lista de resumo](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![Lista de alertas de {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}

1. Revise o alerta e clique em **Ignorar** e escolha um motivo para fechar o alerta. ![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### Ignorar múltiplos alertas de uma vez

Se um projeto tem vários alertas que você deseja ignorar pelo mesmo motivo, você pode ignorá-los em massa do resumo de alertas. Normalmente, você pode querer filtrar a lista e, em seguida, ignorar todos os alertas correspondentes. Por exemplo, você pode querer ignorar todos os alertas atuais no projeto que foram marcados para uma vulnerabilidade específica de Enumeração de Fraqueza Comum (CWE).

### Leia mais

- "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Sobre a integração com {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
