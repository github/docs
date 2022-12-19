---
title: Alertas de varredura de código de triagem em pull requests
shortTitle: Triage alerts in pull requests
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
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162739'
---
{% data reusables.code-scanning.beta %}

## Sobre os resultados de {% data variables.product.prodname_code_scanning %} em pull requests

Em repositórios onde {% data variables.product.prodname_code_scanning %} está configurado como uma verificação de pull request, {% data variables.product.prodname_code_scanning %} verifica o código no pull request. Por padrão, isso é limitado a pull requests que visam o branch-padrão ou branches protegidos, mas você pode alterar esta configuração em {% data variables.product.prodname_actions %} ou em um sistema de CI/CD de terceiros. Se a mesclagem das alterações for gerar novos alertas de {% data variables.product.prodname_code_scanning %} no branch de destino, os alertas serão relatados em vários locais.

- Verificar os resultados na solicitação de pull {% ifversion code-scanning-pr-conversations-tab %}
- A guia **Conversa** da solicitação de pull, que faz parte de uma revisão de solicitação de pull {% endif %} 
- A guia **Arquivos alterados** da solicitação de pull

Se você tiver permissão de gravação no repositório, poderá ver todos os alertas existentes da {% data variables.product.prodname_code_scanning %} na guia **Segurança**. Para obter informações sobre os alertas do repositório, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} para seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Nos repositórios em que a {% data variables.product.prodname_code_scanning %} estiver configurada para verificar o código sempre que ele é enviado por push, a {% data variables.product.prodname_code_scanning %} também mapeará os resultados a qualquer solicitação de pull aberta e adicionará os alertas como anotações nos mesmos lugares que as outras verificações de solicitação de pull. Para obter mais informações, confira "[Verificação durante o push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".

Se o seu pull request for direcionado a um branch protegido que usa {% data variables.product.prodname_code_scanning %} e o proprietário do repositório tiver configurado as verificações de status necessárias, a verificação de "resultados de {% data variables.product.prodname_code_scanning_capc %}" deve passar antes que você possa fazer o merge do pull request. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

## Sobre {% data variables.product.prodname_code_scanning %} como uma verificação de pull request

Há muitas opções para configurar {% data variables.product.prodname_code_scanning %} como uma verificação de pull request. Portanto, a configuração exata de cada repositório irá variar e alguns terão mais de uma verificação. 

### Verificação de resultados de {% data variables.product.prodname_code_scanning_capc %}

Para todas as configurações da {% data variables.product.prodname_code_scanning %}, a verificação que contém os resultados da {% data variables.product.prodname_code_scanning %} é: **Resultados da {% data variables.product.prodname_code_scanning_capc %}** . Os resultados de cada ferramenta de análise utilizada são mostrados separadamente. Todos os novos alertas gerados por alterações no pull request são exibidos como anotações. 

Para ver o conjunto completo de alertas do branch analisado, clique em **Exibir todos os alertas do branch**. Isso abrirá a exibição completa do alerta em que você poderá filtrar todos os alertas do branch por tipo, severidade, marca etc. Para obter mais informações, confira "[Como gerenciar alertas da verificação de código para seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)".

![Verificação de resultados de {% data variables.product.prodname_code_scanning_capc %} em uma solicitação de pull](/assets/images/help/repository/code-scanning-results-check.png)

### Falhas de verificação de resultados {% data variables.product.prodname_code_scanning_capc %}

Se a verificação de resultados de {% data variables.product.prodname_code_scanning %} encontrar problemas com uma severidade `error`, `critical` ou `high`, a verificação falhará e o erro será relatado nos resultados da verificação. Se todos os resultados encontrados por {% data variables.product.prodname_code_scanning %} tiverem gravidades menores, os alertas serão tratados como avisos ou observações e a verificação será considerada bem-sucedida.

![Ocorreu uma falha na verificação de {% data variables.product.prodname_code_scanning %} em um pull request](/assets/images/help/repository/code-scanning-check-failure.png)

Você pode substituir o comportamento padrão nas configurações do repositório especificando o nível de severidades e as severidades de segurança que causarão falha da solicitação de pull. Para obter mais informações, confira "[Como definir as severidades que causam uma falha na verificação de solicitação de pull](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Outras verificações de {% data variables.product.prodname_code_scanning %}

Dependendo da sua configuração, você poderá ver verificações adicionais em execução em pull requests com {% data variables.product.prodname_code_scanning %} configurados. Estes são geralmente fluxos de trabalho que analisam o código ou que fazem o upload dos resultados de {% data variables.product.prodname_code_scanning %}. Essas verificações são úteis para a resolução de problemas em caso de problemas com a análise. 

Por exemplo, se o repositório usar o {% data variables.code-scanning.codeql_workflow %}, uma verificação **{% data variables.product.prodname_codeql %}/Analisar (LINGUAGEM)** será executada para cada linguagem antes que a verificação de resultados seja executada. A verificação de análise pode falhar se houver problemas de configuração ou se o pull request altera a criação para uma linguagem que a análise precisa para compilar (por exemplo, C/C++, C#, ou Java). 

Assim como acontece com outras verificações de solicitação de pull, você pode ver detalhes completos da falha de verificação na guia **Verificações**. Para obter mais informações sobre como configurar e solucionar problemas, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" ou "[Solução de problemas do fluxo de trabalho do {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

## Visualizando um alerta no seu pull request

{% ifversion code-scanning-pr-conversations-tab %} Você pode ver os alertas de {% data variables.product.prodname_code_scanning %} introduzidos em uma solicitação de pull na guia **Conversa**. O {% data variables.product.prodname_code_scanning_capc %} posta uma revisão de solicitação de pull que mostra cada alerta como uma anotação nas linhas de código que dispararam o alerta. Você pode comentar os alertas, ignorar os alertas e ver os caminhos para os alertas, diretamente nas anotações. Você pode ver os detalhes completos de um alerta clicando no link "Mostrar mais detalhes", que acessa a página de detalhes do alerta.

![Anotação de alerta na guia Conversas de uma solicitação de pull](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

Você também pode ver todos os alertas de {% data variables.product.prodname_code_scanning %} na guia **Arquivos alterados** da solicitação de pull. Os alertas de{% data variables.product.prodname_code_scanning %} existentes em um arquivo que estão fora da comparação de alterações introduzidas na solicitação de pull só aparecerão na guia **Arquivos alterados**.

{% else %} Você pode ver os alertas de {% data variables.product.prodname_code_scanning %} introduzidos em uma solicitação de pull acessando a guia **Arquivos alterados**. Cada alerta é mostrado como uma anotação nas linhas de código que dispararam o alerta. A gravidade do alerta é exibida na anotação. 

![Anotação de alerta em uma comparação de solicitação de pull](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

Se você tiver permissão de gravação para o repositório, algumas anotações conterão links com contexto adicional para o alerta. No exemplo acima, na análise do {% data variables.product.prodname_codeql %}, clique no **valor fornecido pelo usuário** para ver em que ponto os dados não confiáveis entram no fluxo de dados (isso é conhecido como a origem). Nesse caso, você também pode ver o caminho completo do código-fonte do código que usa os dados (o coletor) clicando em **Mostrar caminhos**. Isto faz com que seja fácil verificar se os dados não são confiáveis ou se a análise não reconheceu uma etapa de sanitização de dados entre a fonte e o destino. Para obter informações sobre como analisar o fluxo de dados usando o {% data variables.product.prodname_codeql %}, confira "[Sobre a análise de fluxo de dados](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)".

Para ver mais informações sobre um alerta, os usuários com a permissão de gravação podem clicar no link **Mostrar mais detalhes** mostrado na anotação. Isso permite que você veja todos os contextos e metadados fornecidos pela ferramenta em uma exibição de alerta. No exemplo abaixo, você pode ver tags que mostram a gravidade, o tipo e as enumerações de fraquezas comuns relevantes (CWEs) para o problema. A vista mostra também quais commits introduziram o problema.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

Na exibição detalhada de um alerta, algumas ferramentas da {% data variables.product.prodname_code_scanning %}, como a análise do {% data variables.product.prodname_codeql %}, também incluem uma descrição do problema e um link **Mostrar mais** para obter diretrizes sobre como corrigir seu código.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![Descrição do alerta e link para mostrar mais informações](/assets/images/help/repository/code-scanning-pr-alert.png) {% else %} ![Descrição do alerta e link para mostrar mais informações](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Como comentar um alerta em uma solicitação de pull

Você pode comentar os alertas de {% data variables.product.prodname_code_scanning %} introduzidos pelas alterações em uma solicitação de pull. Os alertas aparecem como anotações na guia **Conversa** de uma solicitação de pull, fazendo parte de uma revisão de solicitação de pull, e também são mostrados na guia **Arquivos alterados**. Você só pode comentar os alertas introduzidos pelas alterações em uma solicitação de pull. Os alertas de {% data variables.product.prodname_code_scanning %} existentes, em arquivos que estejam fora das alterações introduzidas na solicitação de pull, aparecerão na guia **Arquivos alterados**, mas não podem ser comentados.

Você pode exigir que todas as conversas em uma solicitação de pull, incluindo as relacionadas a alertas de {% data variables.product.prodname_code_scanning %} sejam resolvidas antes que a solicitação de pull possa ser mesclada. Para obter mais informações, confira "[Sobre os branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging)".
{% endif %}
## Corrigir de um alerta no seu pull request

Qualquer pessoa com acesso push a um pull request pode corrigir um alerta de {% data variables.product.prodname_code_scanning %} que seja identificado nesse pull request. Se você fizer commit de alterações na solicitação do pull request, isto acionará uma nova execução das verificações do pull request. Se suas alterações corrigirem o problema, o alerta será fechado e a anotação removida.

## Ignorar um alerta no seu pull request

Uma forma alternativa de fechar um alerta é ignorá-lo. Você pode descartar um alerta se não acha que ele precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Se você tiver permissão de gravação no repositório, o botão **Ignorar** estará disponível nas anotações de código e no resumo de alertas. Quando você clicar em **Ignorar**, precisará escolher um motivo para fechar o alerta.
{% ifversion comment-dismissed-code-scanning-alert %} ![Captura de tela do alerta de verificação de código com uma lista suspensa para escolher o motivo enfatizado do alerta ignorado](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![Como escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obter mais informações sobre como ignorar alertas, confira {% ifversion delete-code-scanning-alerts %}"[Como gerenciar alertas de {% data variables.product.prodname_code_scanning %} no repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".{% else %} "[Como gerenciar alertas de {% data variables.product.prodname_code_scanning %} no repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)".{% endif %}
