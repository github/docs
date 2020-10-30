---
title: Gerenciar alertas da varredura de código
shortTitle: Gerenciando alertas
intro: 'Você pode visualizar, corrigir e fechar alertas de possíveis vulnerabilidades ou erros no código do seu projeto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'As pessoas com permissões de gravação em um repositório podem gerenciar os alertas de {% data variables.product.prodname_code_scanning %} para o repositório.'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Depois que você habilitar o {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} exibirá alertas do {% data variables.product.prodname_code_scanning %} no seu repositório. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como propriedades do alerta, como, por exemplo, a gravidade e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

![Exemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Se você não tomar a ação recomendada pelo alerta, você poderá fechar o alerta manualmente. Por exemplo, você pode fechar um alerta para o código usado para testes ou se você achar que o alerta é um falso positivo. Você também pode querer fechar um alerta se o esforço de corrigir o erro de codificação for maior do que o benefício potencial de melhorar o código.

Por padrão, o {% data variables.product.prodname_dotcom %} exibe alertas para o branch-padrão e para quaisquer branches protegidos. Você pode classificar e filtrar a lista de alertas para ver apenas os alertas pelos quais você se interessa.

Você pode ver os alertas introduzidos em um pull request e tomar medidas imediatas. Quando {% data variables.product.prodname_code_scanning %} encontra vulnerabilidades ou erros em um pull request, {% data variables.product.prodname_dotcom %} exibe anotações na linha do tempo e nas visualizações diferenciais do pull request.

Se você habilitar o {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, isso também poderá detectar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

{% data reusables.code-scanning.you-can-upload-third-party-analysis %} {% data reusables.code-scanning.get-started-uploading-third-party-data %}

Se você fizer a varredura do seu código usando uma ferramenta de terceiros ou fizer a varredura do seu código com consultas personalizadas de {% data variables.product.prodname_codeql %}, {% data variables.product.prodname_dotcom %} só usará as propriedades compatíveis do SARIF 2.1.0 para exibir alertas. Os resultados de ferramentas de terceiros ou consultas personalizadas podem não incluir todas as propriedades que você vê ao fazer a varredura do seu código usando as consultas-padrão de {% data variables.product.prodname_codeql %} no {% data variables.product.company_short %}. Para obter mais informações, consulte "[Suporte SARIF para {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)".

### Visualizar um alerta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Opcionalmente, se o alerta destaca um problema com o fluxo de dados, clique em **Mostrar caminhos** para revisar o caminho dos dados. ![Exemplo de alerta de fluxo de dados](/assets/images/help/repository/code-scanning-show-paths.png)

### Fechar um alerta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Use o menu suspenso "Fechar", e clique em um motivo para fechar o alerta. ![Escolher o motivo para fechar o alerta no menu suspenso "Fechar"](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

### Leia mais

- "[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)"
- "[{% data variables.product.prodname_code_scanning_capc %} API](/v3/code-scanning)"
