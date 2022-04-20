---
title: Configurar a varredura de código para um repositório
shortTitle: Configurar varredura de código
intro: 'Você pode configurar {% data variables.product.prodname_code_scanning %} adicionando um fluxo de trabalho ao seu repositório.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Opções para configuração de {% data variables.product.prodname_code_scanning %}

Você decide como gerar alertas de {% data variables.product.prodname_code_scanning %} e quais ferramentas usar no nível de um repositório. O {% data variables.product.product_name %} fornece suporte totalmente integrado para a análise do {% data variables.product.prodname_codeql %} e também é compatível com ferramentas de análise usando ferramentas de terceiros. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
{% data reusables.code-scanning.about-analysis-origins-link %}
{% endif %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Se você desejar usar a análise de CodeQL, este artigo descreve as funcionalidades disponíveis com a versão da ação CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão de {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação CodeQL, consulte o [o artigo de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obter informações sobre as funcionalidades mais recentes. {% ifversion not ghae %} Para obter informações sobre como usar a versão mais recente, consulte "[Configurando a digitalização de código para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %}
{% endif %}

{% ifversion ghae %}
## Pré-requisitos

Antes de configurar {% data variables.product.prodname_code_scanning %} para um repositório, você deverá garantir que haja pelo menos um executor de {% data variables.product.prodname_actions %} auto-hospedado disponível para o repositório.

Os proprietários da empresa, administradores de organização e repositórios podem adicionar executores auto-hospedados. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec %}
## Configurar {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Este artigo descreve as funcionalidades disponíveis com a versão da ação CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão de {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação CodeQL, consulte o [o artigo de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obter informações sobre as funcionalidades mais recentes. {% ifversion not ghae %} Para obter informações sobre como usar a versão mais recente, consulte "[Configurando a digitalização de código para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %}
{% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} Os fluxos de trabalho iniciais de {% data variables.product.prodname_code_scanning_capc %} estão disponíveis apenas para o seu repositório se {% data variables.product.prodname_code_scanning %} estiver habilitado.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Se o repositório já tiver pelo menos um fluxo de trabalho configurado e em execução, clique em **Novo fluxo de trabalho** e vá para a etapa 5. Se, atualmente, não houver fluxos de trabalho configurados para o repositório, vá para a próxima etapa. ![Captura de tela do botão novo fluxo de trabalho](/assets/images/help/security/actions-new-workflow-button.png)
1. Role para baixo até a categoria "Segurança" e clique em **Configurar** no fluxo de trabalho que você deseja configurar, ou clique em **Visualizar todos** para ver todos os fluxos de trabalho de segurança disponíveis. ![Captura de tela da seção de segurança de fluxos de trabalho](/assets/images/help/security/actions-workflows-security-section.png)
1. No painel direito da página do fluxo de trabalho, clique em **Documentação** e siga as instruções na tela para adaptar o fluxo de trabalho às suas necessidades. ![Screenshot of the Documentation tab for starter workflows](/assets/images/help/security/actions-workflows-documentation.png) Para obter mais informações, consulte "[Usndo fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows#using-starter-workflows)" e "[Configurando {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)."

{% endif %}

## Configurando {% data variables.product.prodname_code_scanning %} manualmente

{% ifversion fpt %}

Você pode configurar {% data variables.product.prodname_code_scanning %} em qualquer repositório público onde tenha acesso de gravação.

{% endif %}

{% data reusables.code-scanning.billing %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. À direita dos alertas de "{% data variables.product.prodname_code_scanning_capc %} ", clique em **Configurar {% data variables.product.prodname_code_scanning %}**.{% ifversion ghec or ghes or ghae %} Se faltar {% data variables.product.prodname_code_scanning %}, você deverá pedir a um proprietário ou administrador da organização que havilite o {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" ou "[gerenciando configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". ![Botão "Configurar {% data variables.product.prodname_code_scanning %}" à direita de "{% data variables.product.prodname_code_scanning_capc %}" na Visão Geral de Segurança](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Em "Começar com {% data variables.product.prodname_code_scanning %}", clique em **Configurar este fluxo de trabalho** no {% data variables.product.prodname_codeql_workflow %} ou em um fluxo de trabalho de terceiros. !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Os fluxos de trabalho são exibidos apenas se forem relevantes para as linguagens de programação detectadas no repositório. O {% data variables.product.prodname_codeql_workflow %} é sempre exibido, mas o botão "Configurar este fluxo de trabalho" só é habilitado se a análise de {% data variables.product.prodname_codeql %} for compatível com as linguagens presentes no repositório.
5. Para personalizar como {% data variables.product.prodname_code_scanning %} faz a varredura do seu código, edite o fluxo de trabalho.

   Geralmente, você pode fazer commit do {% data variables.product.prodname_codeql_workflow %} sem fazer nenhuma alteração nele. No entanto, muitos dos fluxos de trabalho de terceiros exigem uma configuração adicional. Portanto, leia os comentários no fluxo de trabalho antes de fazer o commit.

   Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)."
6. Use o menu suspenso **Iniciar commit** e digite uma mensagem de commit. ![Iniciar commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escolha se você gostaria de fazer commit diretamente no branch-padrão ou criar um novo branch e iniciar um pull request. ![Escolher onde fazer commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Clique em **Fazer commit do novo arquivo** ou **Propor novo arquivo**.

No {% data variables.product.prodname_codeql_workflow %} padrão, {% data variables.product.prodname_code_scanning %} está configurado para analisar o seu código cada vez que você fizer push de uma alteração no branch-padrão ou em qualquer branch protegido, ou criar um pull request contra o branch padrão. Como resultado, {% data variables.product.prodname_code_scanning %} vai começar agora.

Os gatilhos `on:pull_request` e `on:push` para digitalização de código são úteis para diferentes finalidades. Para obter mais informações, consulte "[Digitalizando pull requests](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)" e "[Digitalizando ao fazer push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".
## Configuração em massa de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} em vários repositórios de uma vez usando um script. Se você desejar de usar um script para levantar pull requests que adicionam um fluxo de trabalho de {% data variables.product.prodname_actions %} a vários repositórios, consulte o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver um exemplo usando PowerShell ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para equipes que não possuem PoweSshell e que gostariam de usar o NodeJS.

## Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}

Depois de configurar o {% data variables.product.prodname_code_scanning %} para o seu repositório, você poderá inspecionar a saída das ações conforme forem executadas.

{% data reusables.repositories.actions-tab %}

  Você verá uma lista que inclui uma entrada para executar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. O texto da entrada é o título que você deu à sua mensagem de commit.

  ![Lista de ações que mostram o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Clique na entrada para o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}.

1. Clique no nome do trabalho à esquerda. Por exemplo, **Analise (LANGUAGE)**.

  ![Saída do log do fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revise a saída de log das ações deste fluxo de trabalho enquanto elas são executadas.

1. Depois que todos os trabalhos forem concluídos, você poderá visualizar os as informações dos alertas de {% data variables.product.prodname_code_scanning %} que foram identificados. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Observação:** Se você criou um pull request para adicionar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %} ao repositório, os alertas desse pull request não serão exibidos diretamente na página de {% data variables.product.prodname_code_scanning_capc %} até que o pull request seja mesclado. Se algum alerta for encontrado, você poderá visualizá-los, antes do merge do pull request, clicando no link dos **_n_ alertas encontrados** no banner na página de {% data variables.product.prodname_code_scanning_capc %}.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
  ![Clique no link "n alertas encontrados"](/assets/images/help/repository/code-scanning-alerts-found-link.png)
{% else %}
  ![Clique no link "n alertas encontrados"](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)
{% endif %}

{% endnote %}

## Entendendo as verificações de pull request

Cada fluxo de trabalho de {% data variables.product.prodname_code_scanning %} que você configurar para ser executado em pull requests sempre terá pelo menos duas entradas listadas na seção de verificações de um pull request. Há uma entrada para cada um dos trabalhos de análise no fluxo de trabalho e uma entrada final para os resultados da análise.

Os nomes das verificações de análise de {% data variables.product.prodname_code_scanning %} assumem a forma: "TOOL NAME / JOB NAME (TRIGGER)." Por exemplo, para {% data variables.product.prodname_codeql %}, a análise do código C++ tem a entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." Você pode clicar em **Detalhes** em uma entrada de análise de {% data variables.product.prodname_code_scanning %} para ver os dados de registro. Isso permite que você corrija um problema caso ocorra uma falha no trabalho de análise. Por exemplo, para a análise de {% data variables.product.prodname_code_scanning %} de linguagens compiladas, isto pode acontecer se a ação não puder criar o código.

  ![Verificações de pull request de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Quando os trabalhos de {% data variables.product.prodname_code_scanning %} forem concluídos, {% data variables.product.prodname_dotcom %} calcula se quaisquer alertas foram adicionados pelo pull request e adiciona a entrada "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" à lista de verificações. Depois de {% data variables.product.prodname_code_scanning %} ser executado pelo menos uma vez, você poderá clicar em **Detalhes** para visualizar os resultados da análise. Se você usou um pull request para adicionar {% data variables.product.prodname_code_scanning %} ao repositório, inicialmente você verá uma mensagem de {% ifversion fpt or ghes > 3.2 or ghae-issue-3891 or ghec %} "Análise não encontrada"{% else %}"Análise ausente"{% endif %} ao clicar em **Detalhes** na verificação de "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME"

{% ifversion fpt or ghes > 3.2 or ghae-issue-3891 or ghec %}
  ![Análise não encontrada para mensagem de commit](/assets/images/help/repository/code-scanning-analysis-not-found.png)

A tabela lista uma ou mais categorias. Cada categoria está relacionada a análises específicas, para a mesma ferramenta e commit, realizadas em uma linguagem diferente ou em uma parte diferente do código. Para cada categoria a tabela mostra as duas análises que {% data variables.product.prodname_code_scanning %} tentou comparar para determinar quais alertas foram introduzidos ou corrigidos no pull request.

Por exemplo, na captura de tela acima, {% data variables.product.prodname_code_scanning %} encontrou uma análise para o commit do merge do pull request, mas não há análise para o cabeçalho do branch principal.
{% else %}
  ![Análise ausente para mensagem de commit](/assets/images/enterprise/3.2/repository/code-scanning-missing-analysis.png)
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghae-issue-3891 or ghec %}
### Motivos para a mensagem "Análise não encontrada"
{% else %}
### Motivos para a mensagem "Análise ausente"
{% endif %}

Depois que {% data variables.product.prodname_code_scanning %} analisou o código em um pull request, ele precisa comparar a análise do branch de tópico (o branch que você usou para criar o pull request) com a análise do branch de base (o branch no qual você deseja mesclar o pull request). Isso permite que {% data variables.product.prodname_code_scanning %} calcule quais alertas foram recém-introduzidos pelo pull request, que alertas já estavam presentes no branch de base e se alguns alertas existentes são corrigidos pelas alterações no pull request. Inicialmente, se você usar um pull request para adicionar {% data variables.product.prodname_code_scanning %} a um repositório, o branch de base ainda não foi analisado. Portanto, não é possível computar esses detalhes. Neste caso, quando você clicar nos resultados verificando o pull request você verá a mensagem {% ifversion fpt or ghes > 3.2 or ghae-issue-3891 or ghec %}"Análise não encontrada"{% else %}"Análise ausente do commit base SHA-HASH"{% endif %}.

Há outras situações em que não pode haver análise para o último commit do branch de base para um pull request. Isso inclui:

* O pull request foi levantado contra um branch diferente do branch padrão, e este branch não foi analisado.

  Para verificar se um branch foi verificado, acesse a página {% data variables.product.prodname_code_scanning_capc %}, clique no menu suspenso **Branch** e selecione o branch relevante.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
  ![Escolha um branch no menu suspenso Branch](/assets/images/help/repository/code-scanning-branch-dropdown.png)
{% else %}
  ![Escolha um branch no menu suspenso Branch](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-dropdown.png)
{% endif %}

  A solução nesta situação é adicionar o nome do branch de base para a especificação `on:push` e `on:pull_request` no fluxo de trabalho de {% data variables.product.prodname_code_scanning %} nesse branch e, em seguida, fazer uma alteração que atualize o pull request aberto que você deseja escanear.

* O último commit no branch de base para o pull request está atualmente sendo analisado e a análise ainda não está disponível.

  Aguarde alguns minutos e depois faça push de uma alteração no pull request para acionar o recurso de {% data variables.product.prodname_code_scanning %}.

* Ocorreu um erro ao analisar o último commit no branch base e a análise para esse commit não está disponível.

  Faça merge uma mudança trivial no branch de base para acionar {% data variables.product.prodname_code_scanning %} neste commit mais recente e, em seguida, faça push de uma alteração para o pull request reiniciar {% data variables.product.prodname_code_scanning %}.

## Próximas etapas

Após configurar a opção {% data variables.product.prodname_code_scanning %}, e permitir que suas ações sejam concluídas, você pode:

- Visualizar todos os alertas de {% data variables.product.prodname_code_scanning %} gerados para este repositório. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
- Visualizar todos os alertas gerados para um pull request enviado após configurar {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Triar alertas de {% data variables.product.prodname_code_scanning %} em pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar notificações para execuções concluídas. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Visualizar os logs gerados pela análise do {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Visualizar registros de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)".
- Investigue todos os problemas que ocorrerem com a configuração inicial de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Solucionar problemas no fluxo de trabalho de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".
- Personalize como {% data variables.product.prodname_code_scanning %} faz a varredura de código no seu repositório. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)."
