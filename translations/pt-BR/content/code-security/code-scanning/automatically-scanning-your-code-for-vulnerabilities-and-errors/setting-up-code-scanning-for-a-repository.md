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
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Opções para configuração de {% data variables.product.prodname_code_scanning %}

Você decide como gerar alertas de {% data variables.product.prodname_code_scanning %} e quais ferramentas usar no nível de um repositório. O {% data variables.product.product_name %} fornece suporte totalmente integrado para a análise do {% data variables.product.prodname_codeql %} e também é compatível com ferramentas de análise usando ferramentas de terceiros. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)

{% data reusables.code-scanning.enabling-options %}

## Configurar {% data variables.product.prodname_code_scanning %} usando ações

{% ifversion fpt %}Usando ações para executar {% data variables.product.prodname_code_scanning %} usará minutos. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. À direita dos " alertas de {% data variables.product.prodname_code_scanning_capc %}", clique em **Configurar {% data variables.product.prodname_code_scanning %}**. {% ifversion fpt or ghes > 3.0 %}Se {% data variables.product.prodname_code_scanning %} está faltando, peça ao proprietário da organização ou administrador do repositório para habilitar {% data variables.product.prodname_GH_advanced_security %}. Para mais informações consulte "[Gerenciar as configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" ou "[Gerenciar as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).{% endif %} ![Botão "Configurar {% data variables.product.prodname_code_scanning %}" à direita de "{% data variables.product.prodname_code_scanning_capc %}" na Visão Geral de Segurança](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Em "Começar com {% data variables.product.prodname_code_scanning %}", clique em **Configurar este fluxo de trabalho** no {% data variables.product.prodname_codeql_workflow %} ou em um fluxo de trabalho de terceiros. !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png){% ifversion fpt or ghes > 2.22 %}Os fluxos de trabalho são exibidos apenas se forem relevantes para as linguagens de programação detectadas no repositório. O {% data variables.product.prodname_codeql_workflow %} é sempre exibido, mas o botão "Configurar este fluxo de trabalho" só é habilitado se a análise de {% data variables.product.prodname_codeql %} for compatível com as linguagens presentes no repositório.{% endif %}
5. Para personalizar como {% data variables.product.prodname_code_scanning %} faz a varredura do seu código, edite o fluxo de trabalho.

   Geralmente, você pode fazer commit do {% data variables.product.prodname_codeql_workflow %} sem fazer nenhuma alteração nele. No entanto, muitos dos fluxos de trabalho de terceiros exigem uma configuração adicional. Portanto, leia os comentários no fluxo de trabalho antes de fazer o commit.

   Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)."
6. Use o menu suspenso **Iniciar commit** e digite uma mensagem de commit. ![Iniciar commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escolha se você gostaria de fazer commit diretamente no branch-padrão ou criar um novo branch e iniciar um pull request. ![Escolher onde fazer commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Clique em **Fazer commit do novo arquivo** ou **Propor novo arquivo**.

No {% data variables.product.prodname_codeql_workflow %} padrão, {% data variables.product.prodname_code_scanning %} está configurado para analisar o seu código cada vez que você fizer push de uma alteração no branch-padrão ou em qualquer branch protegido, ou criar um pull request contra o branch padrão. Como resultado, {% data variables.product.prodname_code_scanning %} vai começar agora.

## Configuração em massa de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} em vários repositórios de uma vez usando um script. If you'd like to use a script to raise pull requests that add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository for an example using Powershell, or [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) for teams who do not have Powershell and instead would like to use NodeJS.

## Entendendo as verificações de pull request

Cada fluxo de trabalho de {% data variables.product.prodname_code_scanning %} que você configurar para ser executado em pull requests sempre terá pelo menos duas entradas listadas na seção de verificações de um pull request. Há uma entrada para cada um dos trabalhos de análise no fluxo de trabalho e uma entrada final para os resultados da análise.

Os nomes das verificações de análise de {% data variables.product.prodname_code_scanning %} assumem a forma: "TOOL NAME / JOB NAME (TRIGGER)." Por exemplo, para {% data variables.product.prodname_codeql %}, a análise do código C++ tem a entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." Você pode clicar em **Detalhes** em uma entrada de análise de {% data variables.product.prodname_code_scanning %} para ver os dados de registro. Isso permite que você corrija um problema caso ocorra uma falha no trabalho de análise. Por exemplo, para a análise de {% data variables.product.prodname_code_scanning %} de linguagens compiladas, isto pode acontecer se a ação não puder criar o código.

  ![Verificações de pull request de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Quando os trabalhos de {% data variables.product.prodname_code_scanning %} forem concluídos, {% data variables.product.prodname_dotcom %} calcula se quaisquer alertas foram adicionados pelo pull request e adiciona a entrada "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" à lista de verificações. Depois de {% data variables.product.prodname_code_scanning %} ser executado pelo menos uma vez, você poderá clicar em **Detalhes** para visualizar os resultados da análise. Se você usou um pull request para adicionar {% data variables.product.prodname_code_scanning %} ao repositório, você verá inicialmente uma mensagem de "Análise ausente" ao clicar em **Detalhes** na verificação de resultados de "{% data variables.product.prodname_code_scanning_capc %} / NOME DA FERRAMENTA".

  ![Análise ausente para mensagem de commit](/assets/images/help/repository/code-scanning-missing-analysis.png)

### Motivos da mensagem "faltando ausente"

Depois que {% data variables.product.prodname_code_scanning %} analisou o código em um pull request, ele precisa comparar a análise do branch de tópico (o branch que você usou para criar o pull request) com a análise do branch de base (o branch no qual você deseja mesclar o pull request). Isso permite que {% data variables.product.prodname_code_scanning %} calcule quais alertas foram recém-introduzidos pelo pull request, que alertas já estavam presentes no branch de base e se alguns alertas existentes são corrigidos pelas alterações no pull request. Inicialmente, se você usar um pull request para adicionar {% data variables.product.prodname_code_scanning %} a um repositório, o branch de base ainda não foi analisado. Portanto, não é possível computar esses detalhes. Neste caso, ao clicar na verificação de resultados no pull request você verá a mensagem "Análise ausente para o commit de base SHA-HASH".

Há outras situações em que não pode haver análise para o último commit do branch de base para um pull request. Isso inclui:

* O pull request foi levantado contra um branch diferente do branch padrão, e este branch não foi analisado.

  Para verificar se um branch foi verificado, acesse a página {% data variables.product.prodname_code_scanning_capc %}, clique no menu suspenso **Branch** e selecione o branch relevante.

{% ifversion fpt or ghes > 3.1 %}
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
