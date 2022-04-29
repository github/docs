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
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---


{% data reusables.code-scanning.beta %}

## Sobre os resultados de {% data variables.product.prodname_code_scanning %} em pull requests

Em repositórios onde {% data variables.product.prodname_code_scanning %} está configurado como uma verificação de pull request, {% data variables.product.prodname_code_scanning %} verifica o código no pull request. Por padrão, isso é limitado a pull requests que visam o branch-padrão ou branches protegidos, mas você pode alterar esta configuração em {% data variables.product.prodname_actions %} ou em um sistema de CI/CD de terceiros. Se o merge das alterações introduziria novos alertas de {% data variables.product.prodname_code_scanning %} no branch de destino, estes serão relatados como resultados de verificação no pull request. Os alertas também são exibidos como anotações na aba **Arquivos alterados** do pull request. Se você tiver permissão de gravação no repositório, você poderá ver qualquer alerta de {% data variables.product.prodname_code_scanning %} existente na aba **Segurança**. Para obter informações sobre os alertas do repositório, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} do repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 or ghec %}
Em repositórios em que {% data variables.product.prodname_code_scanning %} está configurado para digitalizar sempre que o código é enviado por push, o {% data variables.product.prodname_code_scanning %} também mapeará os resultados com qualquer solicitação de pull pull aberto e irá adicionar os alertas como anotações nos mesmos lugares que as outras verificações de pull request. Para obter mais informações, consulte "[Digitalizando ao enviar por push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".
{% endif %}

Se o seu pull request for direcionado a um branch protegido que usa {% data variables.product.prodname_code_scanning %} e o proprietário do repositório tiver configurado as verificações de status necessárias, a verificação de "resultados de {% data variables.product.prodname_code_scanning_capc %}" deve passar antes que você possa fazer o merge do pull request. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Sobre {% data variables.product.prodname_code_scanning %} como uma verificação de pull request

Há muitas opções para configurar {% data variables.product.prodname_code_scanning %} como uma verificação de pull request. Portanto, a configuração exata de cada repositório irá variar e alguns terão mais de uma verificação.

### Verificação de resultados de {% data variables.product.prodname_code_scanning_capc %}

Para todas as configurações de {% data variables.product.prodname_code_scanning %}, a verificação que contém os resultados de {% data variables.product.prodname_code_scanning %} é: **resultados de {% data variables.product.prodname_code_scanning_capc %}**. Os resultados de cada ferramenta de análise utilizada são mostrados separadamente. Todos os novos alertas gerados por alterações no pull request são exibidos como anotações.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 or ghec %} Para ver o conjunto completo de alertas para o branch analisado, clique em **Ver todos os alertas do branch**. Isso abre a visualização completa de alerta onde você pode filtrar todos os alertas sobre o branch por tipo, gravidade, tag, etc. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts). "

![Verificação de resultados de {% data variables.product.prodname_code_scanning_capc %} em um pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### Falhas de verificação de resultados {% data variables.product.prodname_code_scanning_capc %}

Se os resultados {% data variables.product.prodname_code_scanning %} encontrarem algum problema com uma gravidade de `erro`{% ifversion fpt or ghes > 3.1  or ghae or ghec %}, `grave` ou `alto`,{% endif %} a verificação irá falhar e o erro será relatado nos resultados da verificação. Se todos os resultados encontrados por {% data variables.product.prodname_code_scanning %} tiverem gravidades menores, os alertas serão tratados como avisos ou observações e a verificação será considerada bem-sucedida.

![Ocorreu uma falha na verificação de {% data variables.product.prodname_code_scanning %} em um pull request](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}Você pode substituir o comportamento padrão nas configurações do repositório, ao especificar o nível de gravidade {% ifversion fpt or ghes > 3.1  or ghae or ghec %}e gravidade de segurança {% endif %}que causarão uma falha de verificação de pull request. Para obter mais informações, consulte[Definir as gravidades causadoras da falha de verificação de pull request](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Outras verificações de {% data variables.product.prodname_code_scanning %}

Dependendo da sua configuração, você poderá ver verificações adicionais em execução em pull requests com {% data variables.product.prodname_code_scanning %} configurados. Estes são geralmente fluxos de trabalho que analisam o código ou que fazem o upload dos resultados de {% data variables.product.prodname_code_scanning %}. Essas verificações são úteis para a resolução de problemas em caso de problemas com a análise.

Por exemplo, se o repositório usar o {% data variables.product.prodname_codeql_workflow %}, será executada uma verificação de **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** para cada linguagem antes que a verificação de resultados seja executada. A verificação de análise pode falhar se houver problemas de configuração ou se o pull request altera a criação para uma linguagem que a análise precisa para compilar (por exemplo, C/C++, C#, ou Java).

Assim como com outras verificações de pull request, você poderá ver informações completas da falha de verificação na aba de **Verificações**. Para obter mais informações sobre configuração e solução de problemas, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" ou "[Solução de problemas do fluxo de trabalho de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Visualizando um alerta no seu pull request

Você pode ver todos os alertas de {% data variables.product.prodname_code_scanning %} introduzidos em um pull request que exibem a guia **Arquivos alterados**. Cada alerta é exibido como uma anotação nas linhas de código que acionaram o alerta. A gravidade do alerta é exibida na anotação.

![Alerta de anotação em um diff de pull request](/assets/images/help/repository/code-scanning-pr-annotation.png)

Se você tiver permissão de gravação para o repositório, algumas anotações conterão links com contexto adicional para o alerta. No exemplo acima, da análise de {% data variables.product.prodname_codeql %}, você pode clicar em **valor fornecido pelo usuário** para ver onde os dados não confiáveis entram no fluxo de dados (isso é referido como a fonte). Neste caso, você também pode ver o caminho completo desde a fonte até o código que usa os dados (o sumidouro), clicando em **Mostrar caminhos**. Isto faz com que seja fácil verificar se os dados não são confiáveis ou se a análise não reconheceu uma etapa de sanitização de dados entre a fonte e o destino. Para obter informações sobre a análise do fluxo de dados usando {% data variables.product.prodname_codeql %}, consulte "[Sobre a análise do fluxo de dados](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)".

Para ver mais informações sobre um alerta, os usuários com permissão de gravação podem clicar no link **Mostrar mais detalhes**, exibido na anotação. Isso permite que você veja todos os contextos e metadados fornecidos pela ferramenta em uma exibição de alerta. No exemplo abaixo, você pode ver tags que mostram a gravidade, o tipo e as enumerações de fraquezas comuns relevantes (CWEs) para o problema. A vista mostra também quais commits introduziram o problema.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
{% data reusables.code-scanning.alert-default-branch %}
{% endif %}

Na visualização detalhada de um alerta, algumas ferramentas de {% data variables.product.prodname_code_scanning %}, como a análise de {% data variables.product.prodname_codeql %} também incluem uma descrição do problema e um link **Mostrar mais** para obter orientações sobre como corrigir seu código.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
![Descrição do alerta e link para mostrar mais informações](/assets/images/help/repository/code-scanning-pr-alert.png)
{% else %}
![Descrição do alerta e link para mostrar mais informações](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png)
{% endif %}
## Corrigir de um alerta no seu pull request

Qualquer pessoa com acesso push a um pull request pode corrigir um alerta de {% data variables.product.prodname_code_scanning %} que seja identificado nesse pull request. Se você fizer commit de alterações na solicitação do pull request, isto acionará uma nova execução das verificações do pull request. Se suas alterações corrigirem o problema, o alerta será fechado e a anotação removida.

## Ignorar um alerta no seu pull request

Uma forma alternativa de fechar um alerta é ignorá-lo. Você pode descartar um alerta se não acha que ele precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Se você tem permissão de gravação no repositório, o botão **Ignorar** estará disponível nas anotações de código e no resumo de alertas. Ao clicar em **Ignorar** será solicitado que você escolha um motivo para fechar o alerta.

![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obter mais informações sobre ignorar alertas, consulte {% if delete-code-scanning-alerts %}"[Gerenciando alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts).{% else %} "[Gerenciando alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)".{% endif %}
