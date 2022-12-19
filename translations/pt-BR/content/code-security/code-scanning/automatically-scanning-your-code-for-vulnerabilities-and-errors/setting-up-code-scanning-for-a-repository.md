---
title: Configurar a varredura de código para um repositório
shortTitle: Set up code scanning
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
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161131'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Opções para configuração de {% data variables.product.prodname_code_scanning %}

Você decide como gerar alertas de {% data variables.product.prodname_code_scanning %} e quais ferramentas usar no nível de um repositório. O {% data variables.product.product_name %} fornece suporte totalmente integrado para a análise do {% data variables.product.prodname_codeql %} e também é compatível com ferramentas de análise usando ferramentas de terceiros. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)".

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** caso deseje usar a análise do CodeQL, este artigo descreve os recursos disponíveis na versão da ação do CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão do {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, confira o [artigo sobre o {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obter informações sobre os últimos recursos. {% ifversion not ghae %} Para obter informações sobre como usar a última versão, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## Pré-requisitos

Antes de configurar {% data variables.product.prodname_code_scanning %} para um repositório, você deverá garantir que haja pelo menos um executor de {% data variables.product.prodname_actions %} auto-hospedado disponível para o repositório.

Os proprietários da empresa, administradores de organização e repositórios podem adicionar executores auto-hospedados. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec %}
## Configurar {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** este artigo descreve os recursos disponíveis na versão da ação do CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão do {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, confira o [artigo sobre o {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obter informações sobre os últimos recursos. {% ifversion not ghae %} Para obter informações sobre como usar a última versão, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} Os fluxos de trabalho iniciais de {% data variables.product.prodname_code_scanning_capc %} estão disponíveis apenas para o seu repositório se {% data variables.product.prodname_code_scanning %} estiver habilitado.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Se o repositório já tiver, pelo menos, um fluxo de trabalho configurado e em execução, clique em **Novo fluxo de trabalho** e vá para a etapa 5. Se, atualmente, não houver fluxos de trabalho configurados para o repositório, vá para a próxima etapa.
   ![Captura de tela do botão Novo fluxo de trabalho](/assets/images/help/security/actions-new-workflow-button.png)
1. Role a página para baixo até a categoria "Segurança" e clique em **Configurar** no fluxo de trabalho que deseja configurar ou clique em **Exibir tudo** para ver todos os fluxos de trabalho de segurança disponíveis.
   ![Captura de tela da seção Segurança de fluxos de trabalho do Actions](/assets/images/help/security/actions-workflows-security-section.png)
1. No painel direito da página do fluxo de trabalho, clique em **Documentação** e siga as instruções na tela para adaptar o fluxo de trabalho às suas necessidades.
   ![Captura de tela da guia Documentação de fluxos de trabalho iniciais](/assets/images/help/security/actions-workflows-documentation.png) Para obter mais informações, confira "[Como usar fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows#using-starter-workflows)" e "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

{% endif %}

## Configurando {% data variables.product.prodname_code_scanning %} manualmente

{% ifversion fpt %}

Você pode configurar o {% data variables.product.prodname_code_scanning %} em qualquer repositório público em que você tenha acesso de gravação.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. À direita de "{% data variables.product.prodname_code_scanning_capc %} alertas", clique em **Configurar dados {% data variables.product.prodname_code_scanning %}** . {% ifversion ghec or ghes or ghae %} Se {% data variables.product.prodname_code_scanning %} estiver ausente, você precisará pedir a um proprietário da organização ou administrador de repositório para habilitar {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Para obter mais informações, veja "[Gerenciando configurações de segurança e análise em sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" ou "[Gerenciando configurações de segurança e análise em seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
 ![Botão "Configurar a {% data variables.product.prodname_code_scanning %}" à direita da "{% data variables.product.prodname_code_scanning_capc %}" na Visão Geral de Segurança](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Em "Introdução à {% data variables.product.prodname_code_scanning %}", clique em **Configurar este fluxo de trabalho** no {% data variables.code-scanning.codeql_workflow %} ou em um fluxo de trabalho de terceiros.
 ![O botão "Configurar este fluxo de trabalho" no título "Introdução à {% data variables.product.prodname_code_scanning %}"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Os fluxos de trabalho só serão exibidos se forem relevantes para as linguagens de programação detectadas no repositório. O {% data variables.code-scanning.codeql_workflow %} é sempre exibido, mas o botão "Configurar este fluxo de trabalho" só fica habilitado se a análise do {% data variables.product.prodname_codeql %} dá suporte às linguagens presentes no repositório.
5. Para personalizar como {% data variables.product.prodname_code_scanning %} faz a varredura do seu código, edite o fluxo de trabalho.

   Geralmente, você pode fazer commit do {% data variables.code-scanning.codeql_workflow %} sem fazer nenhuma alteração nele. No entanto, muitos dos fluxos de trabalho de terceiros exigem configuração adicional, portanto, leia os comentários no fluxo de trabalho antes de fazer commit.

   Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
6. Clique na lista suspensa **Iniciar commit** e digite uma mensagem de commit.
 ![Iniciar commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escolha se você gostaria de confirmar diretamente na ramificação padrão ou criar uma ramificação e iniciar uma solicitação de pull.
 ![Escolher o local do commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Clique em **Confirmar novo arquivo** ou **Propor novo arquivo**.

No {% data variables.code-scanning.codeql_workflow %} padrão, a {% data variables.product.prodname_code_scanning %} está configurada para analisar o código cada vez que você efetua push de uma alteração para o branch padrão ou para qualquer branch protegido ou quando aciona uma solicitação de pull no branch padrão. Como resultado, {% data variables.product.prodname_code_scanning %} vai começar agora.

Os gatilhos `on:pull_request` e `on:push` para varredura de código são úteis para finalidades diferentes. Para obter mais informações, confira "[Como verificar solicitações de pull](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)" e "[Como fazer a verificação durante o push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".
## Configuração em massa de {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} em vários repositórios de uma vez usando um script. Caso deseje usar um script para gerar solicitações de pull que adicionam um fluxo de trabalho do {% data variables.product.prodname_actions %} a vários repositórios, confira o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver um exemplo do uso do PowerShell ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para as equipes que não têm o PowerShell e desejam usar o NodeJS.

## Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}

Depois de configurar o {% data variables.product.prodname_code_scanning %} para o seu repositório, você poderá inspecionar a saída das ações conforme forem executadas.

{% data reusables.repositories.actions-tab %}

  Você verá uma lista que inclui uma entrada para executar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. O texto da entrada é o título que você deu à sua mensagem de commit.

  ![Lista de ações que mostram o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Clique na entrada para o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}.

1. Clique no nome do trabalho à esquerda. Por exemplo, **Analisar (LANGUAGE)** .

  ![Saída do log do fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revise a saída de log das ações deste fluxo de trabalho enquanto elas são executadas.

1. Depois que todos os trabalhos forem concluídos, você poderá visualizar os as informações dos alertas de {% data variables.product.prodname_code_scanning %} que foram identificados. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Observação:** se você gerou uma solicitação de pull para adicionar o fluxo de trabalho da {% data variables.product.prodname_code_scanning %} ao repositório, os alertas da solicitação de pull só são exibidos diretamente na página da {% data variables.product.prodname_code_scanning_capc %} quando a solicitação de pull é mesclada. Se algum alerta for encontrado, você poderá vê-los antes da mesclagem da solicitação de pull clicando no link **_n_ alertas encontrados** no banner da página da {% data variables.product.prodname_code_scanning_capc %}.

![Clique no link "n alertas encontrados"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Entendendo as verificações de pull request

Cada fluxo de trabalho de {% data variables.product.prodname_code_scanning %} que você configurar para ser executado em pull requests sempre terá pelo menos duas entradas listadas na seção de verificações de um pull request. Há uma entrada para cada um dos trabalhos de análise no fluxo de trabalho e uma entrada final para os resultados da análise.

Os nomes das verificações de análise de {% data variables.product.prodname_code_scanning %} assumem a forma: "TOOL NAME / JOB NAME (TRIGGER)." Por exemplo, para {% data variables.product.prodname_codeql %}, a análise do código C++ tem a entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." Clique em **Detalhes** em uma entrada da análise da {% data variables.product.prodname_code_scanning %} para ver os dados de log. Isso permite que você corrija um problema caso ocorra uma falha no trabalho de análise. Por exemplo, para a análise de {% data variables.product.prodname_code_scanning %} de linguagens compiladas, isto pode acontecer se a ação não puder criar o código.

  ![Verificações de pull request de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Quando os trabalhos de {% data variables.product.prodname_code_scanning %} forem concluídos, {% data variables.product.prodname_dotcom %} calcula se quaisquer alertas foram adicionados pelo pull request e adiciona a entrada "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" à lista de verificações. Depois que a {% data variables.product.prodname_code_scanning %} for executada, pelo menos, uma vez, clique em **Detalhes** para ver os resultados da análise.

{% ifversion ghes < 3.5 or ghae %} Se você usar uma solicitação de pull para adicionar a {% data variables.product.prodname_code_scanning %} ao repositório, logo verá a mensagem "Análise não encontrada" ao clicar em **Detalhes** nos resultados da verificação de {% data variables.product.prodname_code_scanning_capc %}/NOME DA FERRAMENTA.

  ![Análise não encontrada para mensagem de commit](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

A tabela lista uma ou mais categorias. Cada categoria está relacionada a análises específicas, para a mesma ferramenta e commit, realizadas em uma linguagem diferente ou em uma parte diferente do código. Para cada categoria a tabela mostra as duas análises que {% data variables.product.prodname_code_scanning %} tentou comparar para determinar quais alertas foram introduzidos ou corrigidos no pull request.

Por exemplo, na captura de tela acima, {% data variables.product.prodname_code_scanning %} encontrou uma análise para o commit do merge do pull request, mas não há análise para o cabeçalho do branch principal.

### Motivos para a mensagem "Análise não encontrada"


Depois que {% data variables.product.prodname_code_scanning %} analisou o código em um pull request, ele precisa comparar a análise do branch de tópico (o branch que você usou para criar o pull request) com a análise do branch de base (o branch no qual você deseja mesclar o pull request). Isso permite que {% data variables.product.prodname_code_scanning %} calcule quais alertas foram recém-introduzidos pelo pull request, que alertas já estavam presentes no branch de base e se alguns alertas existentes são corrigidos pelas alterações no pull request. Inicialmente, se você usar um pull request para adicionar {% data variables.product.prodname_code_scanning %} a um repositório, o branch de base ainda não foi analisado. Portanto, não é possível computar esses detalhes. Neste caso, ao clicar na verificação de resultados na solicitação de pull você verá a mensagem "Análise não encontrada".

Há outras situações em que não pode haver análise para o último commit do branch de base para um pull request. Estão incluídos:

* O pull request foi levantado contra um branch diferente do branch padrão, e este branch não foi analisado.

  Para ver se um branch foi verificado, acesse a página da {% data variables.product.prodname_code_scanning_capc %}, clique no menu suspenso **Branch** e selecione o branch relevante.

  ![Escolha um branch no menu suspenso Branch](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  A solução nesta situação é adicionar o nome do branch base à especificação `on:push` e `on:pull_request` no fluxo de trabalho da {% data variables.product.prodname_code_scanning %} nesse branch e fazer uma alteração que atualize a solicitação de pull em aberto que você deseja verificar.

* O último commit no branch de base para o pull request está atualmente sendo analisado e a análise ainda não está disponível.

  Aguarde alguns minutos e depois faça push de uma alteração no pull request para acionar o recurso de {% data variables.product.prodname_code_scanning %}.

* Ocorreu um erro ao analisar o último commit no branch base e a análise para esse commit não está disponível.

  Faça merge uma mudança trivial no branch de base para acionar {% data variables.product.prodname_code_scanning %} neste commit mais recente e, em seguida, faça push de uma alteração para o pull request reiniciar {% data variables.product.prodname_code_scanning %}.

{% endif %}

## Próximas etapas

Após configurar a opção {% data variables.product.prodname_code_scanning %}, e permitir que suas ações sejam concluídas, você pode:

- Visualizar todos os alertas de {% data variables.product.prodname_code_scanning %} gerados para este repositório. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
- Visualizar todos os alertas gerados para um pull request enviado após configurar {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como fazer a triagem de alertas da {% data variables.product.prodname_code_scanning %} em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar notificações para execuções concluídas. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Visualizar os logs gerados pela análise do {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como ver os logs da {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)".
- Investigue todos os problemas que ocorrerem com a configuração inicial de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Solução de problemas de fluxos de trabalho do {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".
- Personalize como {% data variables.product.prodname_code_scanning %} faz a varredura de código no seu repositório. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
