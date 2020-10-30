---
title: Gerenciar alertas de verificação de código para o seu repositório
shortTitle: Gerenciando alertas
intro: 'You can view, fix, {% if currentVersion == "enterprise-server@2.22" %}or close{% else %}dismiss, or delete{% endif %} alerts for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'As pessoas com permissão de gravação em um repositório podem gerenciar alertas de {% data variables.product.prodname_code_scanning %} do repositório.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
---

{% data reusables.code-scanning.beta %}

### Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para verificar o código em um repositório usando a análise-padrão de {% data variables.product.prodname_codeql %}, uma análise de terceiros ou vários tipos de análise. Quando a análise for concluída, os alertas resultantes serão exibidos lado a lado na visualização de segurança do repositório. Os resultados de ferramentas de terceiros ou de consultas personalizadas podem não incluir todas as propriedades que você vê para alertas detectados pela análise-padrão {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

Por padrão, {% data variables.product.prodname_code_scanning %} analisa seu código periodicamente no branch-padrão e durante os pull requests. Para obter informações sobre o gerenciamento de alertas em um pull request, consulte "[Triar aletras de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

### Sobre detalhes de alertas

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como propriedades do alerta, como, por exemplo, a gravidade e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

![Exemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Se você habilitar o {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, isso também poderá detectar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

### Visualizar um alerta

Qualquer pessoa com permissão de leitura para um repositório pode ver alertas de {% data variables.product.prodname_code_scanning %} em pull requests. No entanto, você precisa de permissão de gravação para ver um resumo de alertas de repositório na aba **Segurança**. Por padrão, os alertas são exibidos para o branch-padrão.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Em "{% data variables.product.prodname_code_scanning_capc %}", clique no alerta que você gostaria de explorar. ![Resumo dos alertas](/assets/images/help/repository/code-scanning-click-alert.png)
1. Opcionalmente, se o alerta destacar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o destino onde é usado. ![O link "Exibir caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter orientação sobre como corrigir seu código. ![Detalhes para um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

### Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" e " "[Testar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem permissão de escrita em um repositório, você pode visualizar alertas corrigidos, vendo o resumo de alertas e clicando em **Fechado**. Para obter mais informações, consulte "[Visualizar um alerta](#viewing-an-alert). The "Closed" list shows fixed alerts and alerts that users have {% if currentVersion == "enterprise-server@2.22" %}closed{% else %}dismissed{% endif %}.

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o menu suspenso "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

![Filtrar alertas por branch](/assets/images/help/repository/code-scanning-branch-filter.png)

{% if currentVersion == "enterprise-server@2.22" %}

### Fechar um alerta

Fechar um alerta é uma maneira de resolver um alerta que você considera que não precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %}

{% else %}

### Ignorar ou excluir alertas

Há duas formas de fechar um alerta. Você pode corrigir o problema no código ou pode ignorar o alerta. Alternatively, if you have admin permissions for the repository, you can delete alerts. Excluir alertas é útil em situações em que você habilitou uma ferramenta {% data variables.product.prodname_code_scanning %} e, em seguida, decidiu removê-la ou em situações em que você habilitou a análise de {% data variables.product.prodname_codeql %} com um conjunto de consultas maior do que você deseja continuar usando, e, em seguida, você removeu algumas consultas da ferramenta. Em ambos os casos, excluir alertas permite limpar os seus resultados de {% data variables.product.prodname_code_scanning %}. Você pode excluir alertas da lista de resumo dentro da aba **Segurança**.

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

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "enterprise-server@2.22" %}
{% data reusables.code-scanning.click-alert-in-list %}
1. Select the **Close** drop-down menu and click a reason for closing the alert.    
   ![Escolher o motivo para fechar o alerta no menu suspenso Fechar](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

1. If you have admin permissions for the repository, and you want to delete alerts for this {% data variables.product.prodname_code_scanning %} tool, select some or all of the check boxes and click **Delete**.

   ![Excluir alertas](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Opcionalmente, você pode usar os filtros para exibir um subconjunto de alertas e, em seguida, excluir todos os alertas de correspondência de uma só vez. Por exemplo, se você removeu uma consulta da análise de {% data variables.product.prodname_codeql %}, você pode usar o filtro "Regra" para listar apenas os alertas dessa consulta e, em seguida, selecionar e apagar todos esses alertas.

  ![Filtrar alertas por regra](/assets/images/help/repository/code-scanning-filter-by-rule.png)

1. Se você deseja ignorar um alerta, é importante explorar primeiro o alerta para que você possa escolher o motivo correto para ignorá-lo. Clique no alerta que você deseja explorar.

   ![Abrir um alerta da lista de resumo](/assets/images/help/repository/code-scanning-click-alert.png)

1. Revise o alerta e clique em **Ignorar** e escolha um motivo para fechar o alerta. ![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### Ignorar múltiplos alertas de uma vez

Se um projeto tem vários alertas que você deseja ignorar pelo mesmo motivo, você pode ignorá-los em massa do resumo de alertas. Normalmente, você pode querer filtrar a lista e, em seguida, ignorar todos os alertas correspondentes. Por exemplo, você pode querer ignorar todos os alertas atuais no projeto que foram marcados para uma vulnerabilidade específica de Enumeração de Fraqueza Comum (CWE).

{% endif %}

### Leia mais

- "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Habilitar {% data variables.product.prodname_code_scanning %} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)"
- "[Sobre a integração com {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
