---
title: Setting up code scanning for a repository
shortTitle: Setting up code scanning
intro: 'You can set up {% data variables.product.prodname_code_scanning %} by adding a workflow to your repository.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Options for setting up {% data variables.product.prodname_code_scanning %}

You decide how to generate {% data variables.product.prodname_code_scanning %} alerts, and which tools to use, at a repository level. O {% data variables.product.product_name %} fornece suporte totalmente integrado para a análise do {% data variables.product.prodname_codeql %} e também é compatível com ferramentas de análise usando ferramentas de terceiros. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)".

{% data reusables.code-scanning.enabling-options %}

### Setting up {% data variables.product.prodname_code_scanning %} using actions

{% if currentVersion == "free-pro-team@latest" %}Usar ações para executar {% data variables.product.prodname_code_scanning %} levará minutos. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. À direita de "{% data variables.product.prodname_code_scanning_capc %}", clique em **Configurar {% data variables.product.prodname_code_scanning %}**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}If {% data variables.product.prodname_code_scanning %} is missing, you need to ask an organization owner or repository administrator to enable {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" or "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %} ![Botão "Configurar {% data variables.product.prodname_code_scanning %}" à direita de "{% data variables.product.prodname_code_scanning_capc %}" na Visão Geral de Segurança](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Em "Começar com {% data variables.product.prodname_code_scanning %}", clique em **Configurar este fluxo de trabalho** no {% data variables.product.prodname_codeql_workflow %} ou em um fluxo de trabalho de terceiros. ![Botão "Configurar este fluxo de trabalho" em "Começar com cabeçalho de {% data variables.product.prodname_code_scanning %}"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Para personalizar como {% data variables.product.prodname_code_scanning %} faz a varredura do seu código, edite o fluxo de trabalho.

   Geralmente, você pode fazer commit do {% data variables.product.prodname_codeql_workflow %} sem fazer nenhuma alteração nele. No entanto, muitos dos fluxos de trabalho de terceiros exigem uma configuração adicional. Portanto, leia os comentários no fluxo de trabalho antes de fazer o commit.

   Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
6. Use o menu suspenso **Iniciar commit** e digite uma mensagem de commit. ![Iniciar commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escolha se você gostaria de fazer commit diretamente no branch-padrão ou criar um novo branch e iniciar um pull request. ![Escolher onde fazer commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Clique em **Fazer commit do novo arquivo** ou **Propor novo arquivo**.

No {% data variables.product.prodname_codeql_workflow %} padrão, {% data variables.product.prodname_code_scanning %} está configurado para analisar o seu código cada vez que você fizer push de uma alteração no branch-padrão ou em qualquer branch protegido, ou criar um pull request contra o branch padrão. Como resultado, {% data variables.product.prodname_code_scanning %} vai começar agora.

### Bulk set up of {% data variables.product.prodname_code_scanning %}
You can set up {% data variables.product.prodname_code_scanning %} in many repositories at once using a script. Para obter um exemplo de um script que apresenta pull requests para adicionar um fluxo de trabalho de {% data variables.product.prodname_actions %} em vários repositórios, veja o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs).

### Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}

After setting up {% data variables.product.prodname_code_scanning %} for your repository, you can watch the output of the actions as they run.

{% data reusables.repositories.actions-tab %}

  Você verá uma lista que inclui uma entrada para executar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. O texto da entrada é o título que você deu à sua mensagem de commit.

  ![Lista de ações que mostram o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Clique na entrada para o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}.

1. Clique no nome do trabalho à esquerda. Por exemplo, **Analise (LANGUAGE)**.

  ![Saída do log do fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revise a saída de log das ações deste fluxo de trabalho enquanto elas são executadas.

1. Depois que todos os trabalhos forem concluídos, você poderá visualizar os as informações dos alertas de {% data variables.product.prodname_code_scanning %} que foram identificados. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Observação:** Se você criou um pull request para adicionar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %} ao repositório, os alertas desse pull request não serão exibidos diretamente na página de {% data variables.product.prodname_code_scanning_capc %} até que o pull request seja mesclado. Se algum alerta for encontrado, você poderá visualizá-los, antes do merge do pull request, clicando no link dos **_n_ alertas encontrados** no banner na página de {% data variables.product.prodname_code_scanning_capc %}.

  ![Clique no link "n alertas encontrados"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### Entendendo as verificações de pull request

Each {% data variables.product.prodname_code_scanning %} workflow you set to run on pull requests always has at least two entries listed in the checks section of a pull request. Há uma entrada para cada um dos trabalhos de análise no fluxo de trabalho e uma entrada final para os resultados da análise.

Os nomes das verificações de análise de {% data variables.product.prodname_code_scanning %} assumem a forma: "TOOL NAME / JOB NAME (TRIGGER)." Por exemplo, para {% data variables.product.prodname_codeql %}, a análise do código C++ tem a entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." Você pode clicar em **Detalhes** em uma entrada de análise de {% data variables.product.prodname_code_scanning %} para ver os dados de registro. Isso permite que você corrija um problema caso ocorra uma falha no trabalho de análise. Por exemplo, para a análise de {% data variables.product.prodname_code_scanning %} de linguagens compiladas, isto pode acontecer se a ação não puder criar o código.

  ![Verificações de pull request de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Quando os trabalhos de {% data variables.product.prodname_code_scanning %} forem concluídos, {% data variables.product.prodname_dotcom %} calcula se quaisquer alertas foram adicionados pelo pull request e adiciona a entrada "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" à lista de verificações. Depois de {% data variables.product.prodname_code_scanning %} ser executado pelo menos uma vez, você poderá clicar em **Detalhes** para visualizar os resultados da análise. Se você usou um pull request para adicionar {% data variables.product.prodname_code_scanning %} ao repositório, você verá inicialmente uma mensagem de "Análise ausente" ao clicar em **Detalhes** na verificação de resultados de "{% data variables.product.prodname_code_scanning_capc %} / NOME DA FERRAMENTA".

  ![Análise ausente para mensagem de commit](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### Motivos da mensagem "faltando ausente"

Depois que {% data variables.product.prodname_code_scanning %} analisou o código em um pull request, ele precisa comparar a análise do branch de tópico (o branch que você usou para criar o pull request) com a análise do branch de base (o branch no qual você deseja mesclar o pull request). Isso permite que {% data variables.product.prodname_code_scanning %} calcule quais alertas foram recém-introduzidos pelo pull request, que alertas já estavam presentes no branch de base e se alguns alertas existentes são corrigidos pelas alterações no pull request. Inicialmente, se você usar um pull request para adicionar {% data variables.product.prodname_code_scanning %} a um repositório, o branch de base ainda não foi analisado. Portanto, não é possível computar esses detalhes. Neste caso, ao clicar na verificação de resultados no pull request você verá a mensagem "Análise ausente para o commit de base SHA-HASH".

Há outras situações em que não pode haver análise para o último commit do branch de base para um pull request. Isso inclui:

* O pull request foi levantado contra um branch diferente do branch padrão, e este branch não foi analisado.

  Para verificar se um branch foi verificado, acesse a página {% data variables.product.prodname_code_scanning_capc %}, clique no menu suspenso **Branch** e selecione o branch relevante.

  ![Escolha um branch no menu suspenso Branch](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  A solução nesta situação é adicionar o nome do branch de base para a especificação `on:push` e `on:pull_request` no fluxo de trabalho de {% data variables.product.prodname_code_scanning %} nesse branch e, em seguida, fazer uma alteração que atualize o pull request aberto que você deseja escanear.

* O último commit no branch de base para o pull request está atualmente sendo analisado e a análise ainda não está disponível.

  Aguarde alguns minutos e depois faça push de uma alteração no pull request para acionar o recurso de {% data variables.product.prodname_code_scanning %}.

* Ocorreu um erro ao analisar o último commit no branch base e a análise para esse commit não está disponível.

  Faça merge uma mudança trivial no branch de base para acionar {% data variables.product.prodname_code_scanning %} neste commit mais recente e, em seguida, faça push de uma alteração para o pull request reiniciar {% data variables.product.prodname_code_scanning %}.

### Próximas etapas

After setting up {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- Visualizar todos os alertas de {% data variables.product.prodname_code_scanning %} gerados para este repositório. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".
- View any alerts generated for a pull request submitted after you set up {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar notificações para execuções concluídas. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Investigue todos os problemas que ocorrerem com a configuração inicial de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Solucionar problemas no fluxo de trabalho de {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)".
- Personalize como {% data variables.product.prodname_code_scanning %} faz a varredura de código no seu repositório. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
