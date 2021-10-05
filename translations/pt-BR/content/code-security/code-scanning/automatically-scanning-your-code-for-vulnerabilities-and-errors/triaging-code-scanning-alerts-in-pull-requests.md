---
title: Alertas de varredura de código de triagem em pull requests
shortTitle: Alertas de triagem em pull requests
intro: 'Quando {% data variables.product.prodname_code_scanning %} identifica um problema em um pull request, você poderá revisar o código destacado e resolver o alerta.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

## Sobre os resultados de {% data variables.product.prodname_code_scanning %} em pull requests

Em repositórios onde {% data variables.product.prodname_code_scanning %} está configurado como uma verificação de pull request, {% data variables.product.prodname_code_scanning %} verifica o código no pull request. Por padrão, isso é limitado a pull requests que visam o branch-padrão ou branches protegidos, mas você pode alterar esta configuração em {% data variables.product.prodname_actions %} ou em um sistema de CI/CD de terceiros. Se o merge das alterações introduziria novos alertas de {% data variables.product.prodname_code_scanning %} no branch de destino, estes serão relatados como resultados de verificação no pull request. Os alertas também são exibidos como anotações na aba **Arquivos alterados** do pull request. Se você tiver permissão de gravação no repositório, você poderá ver qualquer alerta de {% data variables.product.prodname_code_scanning %} existente na aba **Segurança**. Para obter informações sobre os alertas do repositório, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} do repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_capc %} results" check must pass before you can merge the pull request. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Sobre {% data variables.product.prodname_code_scanning %} como uma verificação de pull request

Há muitas opções para configurar {% data variables.product.prodname_code_scanning %} como uma verificação de pull request. Portanto, a configuração exata de cada repositório irá variar e alguns terão mais de uma verificação.

### {% data variables.product.prodname_code_scanning_capc %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_capc %} results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 %} To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts). "

![{% data variables.product.prodname_code_scanning_capc %} results check on a pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}, `critical`, or `high`,{% endif %} the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![Ocorreu uma falha na verificação de {% data variables.product.prodname_code_scanning %} em um pull request](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae-next %}You can override the default behavior in your repository settings, by specifying the level of severities {% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}and security severities {% endif %}that will cause a pull request check failure. For more information, see "[Defining the severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. A verificação de análise pode falhar se houver problemas de configuração ou se o pull request altera a criação para uma linguagem que a análise precisa para compilar (por exemplo, C/C++, C#, ou Java).

Assim como com outras verificações de pull request, você poderá ver informações completas da falha de verificação na aba de **Verificações**. Para obter mais informações sobre configuração e solução de problemas, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" ou "[Solução de problemas do fluxo de trabalho de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Viewing an alert on your pull request

You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

![Alerta de anotação em um diff de pull request](/assets/images/help/repository/code-scanning-pr-annotation.png)

Se você tiver permissão de gravação para o repositório, algumas anotações conterão links com contexto adicional para o alerta. No exemplo acima, da análise de {% data variables.product.prodname_codeql %}, você pode clicar em **valor fornecido pelo usuário** para ver onde os dados não confiáveis entram no fluxo de dados (isso é referido como a fonte). Neste caso, você também pode ver o caminho completo desde a fonte até o código que usa os dados (o sumidouro), clicando em **Mostrar caminhos**. Isto faz com que seja fácil verificar se os dados não são confiáveis ou se a análise não reconheceu uma etapa de sanitização de dados entre a fonte e o destino. Para obter informações sobre a análise do fluxo de dados usando {% data variables.product.prodname_codeql %}, consulte "[Sobre a análise do fluxo de dados](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)".

Para ver mais informações sobre um alerta, os usuários com permissão de gravação podem clicar no link **Mostrar mais detalhes**, exibido na anotação. Isso permite que você veja todos os contextos e metadados fornecidos pela ferramenta em uma exibição de alerta. No exemplo abaixo, você pode ver tags que mostram a gravidade, o tipo e as enumerações de fraquezas comuns relevantes (CWEs) para o problema. A vista mostra também quais commits introduziram o problema.

Na visualização detalhada de um alerta, algumas ferramentas de {% data variables.product.prodname_code_scanning %}, como a análise de {% data variables.product.prodname_codeql %} também incluem uma descrição do problema e um link **Mostrar mais** para obter orientações sobre como corrigir seu código.

![Descrição do alerta e link para mostrar mais informações](/assets/images/help/repository/code-scanning-pr-alert.png)

## Corrigir de um alerta no seu pull request

Qualquer pessoa com acesso push a um pull request pode corrigir um alerta de {% data variables.product.prodname_code_scanning %} que seja identificado nesse pull request. Se você fizer commit de alterações na solicitação do pull request, isto acionará uma nova execução das verificações do pull request. Se suas alterações corrigirem o problema, o alerta será fechado e a anotação removida.

## Ignorar um alerta no seu pull request

Uma forma alternativa de fechar um alerta é ignorá-lo. Você pode descartar um alerta se não acha que ele precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Se você tem permissão de gravação no repositório, o botão **Ignorar** estará disponível nas anotações de código e no resumo de alertas. Ao clicar em **Ignorar** será solicitado que você escolha um motivo para fechar o alerta.

![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obter mais informações sobre alertas ignorados, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".
