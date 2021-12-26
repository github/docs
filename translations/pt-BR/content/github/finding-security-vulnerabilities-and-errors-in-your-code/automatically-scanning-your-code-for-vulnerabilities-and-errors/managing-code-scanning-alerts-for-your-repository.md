---
title: Gerenciar alertas de verificação de código para o seu repositório
shortTitle: Gerenciando alertas
intro: 'Na visão de segurança, você pode visualizar, corrigir ou fechar alertas de possíveis vulnerabilidades ou erros no código do seu projeto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### Sobre os alertas de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para verificar o código em um repositório usando a análise-padrão de {% data variables.product.prodname_codeql %}, uma análise de terceiros ou vários tipos de análise. Quando a análise for concluída, os alertas resultantes serão exibidos lado a lado na visualização de segurança do repositório. Os resultados de ferramentas de terceiros ou de consultas personalizadas podem não incluir todas as propriedades que você vê para alertas detectados pela análise-padrão {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)".

Por padrão, {% data variables.product.prodname_code_scanning %} analisa seu código periodicamente no branch-padrão e durante os pull requests. Para obter informações sobre o gerenciamento de alertas em um pull request, consulte "[Triar aletras de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Sobre detalhes de alertas

Cada alerta destaca um problema com o código e o nome da ferramenta que o identificou. Você pode ver a linha de código que acionou o alerta, bem como propriedades do alerta, como, por exemplo, a gravidade e a natureza do problema. Os alertas também informam quando o problema foi introduzido pela primeira vez. Para os alertas identificados pela análise do {% data variables.product.prodname_codeql %} , você também verá informações sobre como corrigir o problema.

![Exemplo de alerta de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

Se você configurar o {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql %}, isso também poderá detectar problemas no fluxo de dados no seu código. A análise do fluxo de dados encontra potenciais problemas de segurança no código, tais como: usar dados de forma insegura, passar argumentos perigosos para funções e vazar informações confidenciais.

Quando {% data variables.product.prodname_code_scanning %} relata alertas de fluxo de dados, {% data variables.product.prodname_dotcom %} mostra como os dados se movem através do código. {% data variables.product.prodname_code_scanning_capc %} permite que você identifique as áreas do seu código que vazam informações confidenciais que poderia ser o ponto de entrada para ataques de usuários maliciosos.

### Visualizar os alertas de um repositório

Qualquer pessoa com permissão de leitura para um repositório pode ver anotações de {% data variables.product.prodname_code_scanning %} em pull requests. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

Você precisa de permissão de gravação para visualizar um resumo de todos os alertas para um repositório na aba **Segurança**. Por padrão, os alertas são exibidos para o branch-padrão.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Em "{% data variables.product.prodname_code_scanning_capc %}", clique no alerta que você gostaria de explorar. ![Resumo dos alertas](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
1. Opcionalmente, se o alerta destacar um problema com o fluxo de dados, clique em **Mostrar caminhos** para exibir o caminho da fonte de dados até o destino onde é usado. ![O link "Exibir caminhos" em um alerta](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alertas da análise de {% data variables.product.prodname_codeql %} incluem uma descrição do problema. Clique em **Mostrar mais** para obter orientação sobre como corrigir seu código. ![Detalhes para um alerta](/assets/images/help/repository/code-scanning-alert-details.png)

### Corrigir um alerta

Qualquer pessoa com permissão de gravação para um repositório pode corrigir um alerta, fazendo o commit de uma correção do código. Se o repositório tiver {% data variables.product.prodname_code_scanning %} agendado para ser executado em pull requests, recomenda-se registrar um pull request com sua correção. Isso ativará a análise de {% data variables.product.prodname_code_scanning %} referente às alterações e irá testar se sua correção não apresenta nenhum problema novo. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" e " "[Testar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".

Se você tem permissão de escrita em um repositório, você pode visualizar alertas corrigidos, vendo o resumo de alertas e clicando em **Fechado**. Para obter mais informações, consulte "[Visualizar os alertas de um repositório](#viewing-the-alerts-for-a-repository). A lista "Fechado" mostra alertas e alertas corrigidos que os usuários fecharam.

Alertas podem ser corrigidos em um branch, mas não em outro. Você pode usar o menu suspenso "Branch", no resumo dos alertas, para verificar se um alerta é corrigido em um branch específico.

![Filtrar alertas por branch](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)

### Fechar um alerta

Fechar um alerta é uma maneira de resolver um alerta que você considera que não precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
1. Selecione o menu suspenso **Fechar** e clique em um motivo para fechar o alerta.    
   ![Escolher o motivo para fechar o alerta no menu suspenso Fechar](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### Leia mais

- "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)"
- "[Sobre a integração com {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
