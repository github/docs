---
title: Visualizando e atualizando alertas do Dependabot
intro: 'Se o {% data variables.product.product_name %} descobrir dependências inseguras no seu projeto, você poderá visualizá-las na guia de alertas do Dependabot no seu repositório. Você pode atualizar seu projeto para resolver ou descartar o alerta.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185548'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

A guia {% data variables.product.prodname_dependabot_alerts %} do repositório lista todos os {% data variables.product.prodname_dependabot_alerts %} abertos e fechados{% ifversion fpt or ghec or ghes %} e as {% data variables.product.prodname_dependabot_security_updates %} correspondentes{% endif %}. Você pode{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} filtrar os alertas por pacote, ecossistema ou manifesto. Você pode {% endif %} classificar a lista de alertas, além de poder clicar em alertas específicos para mais detalhes. {% ifversion dependabot-bulk-alerts %}Você também pode ignorar ou reabrir alertas, um por um ou selecionando vários alertas ao mesmo tempo. {% else %}Você também pode ignorar ou reabrir alertas. {% endif %} Para obter mais informações, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." 

{% ifversion fpt or ghec or ghes %} Você pode habilitar atualizações automáticas de segurança para qualquer repositório que usa os {% data variables.product.prodname_dependabot_alerts %} e o grafo de dependência. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Sobre atualizações para dependências vulneráveis no seu repositório

{% data variables.product.product_name %} gera {% data variables.product.prodname_dependabot_alerts %} quando detectamos que sua base de código está usando dependências com riscos de segurança conhecidos. Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, quando {% data variables.product.product_name %} detecta uma dependência vulnerável no branch padrão, {% data variables.product.prodname_dependabot %} cria um pull request para corrigi-la. O pull request irá atualizar a dependência para a versão minimamente segura possível, o que é necessário para evitar a vulnerabilidade.

Cada alerta de {% data variables.product.prodname_dependabot %} tem um identificador único de número e a aba de {% data variables.product.prodname_dependabot_alerts %} lista um alerta para cada vulnerabilidade detectada. O legado de {% data variables.product.prodname_dependabot_alerts %} agrupou as vulnerabilidades por dependência e gerou um único alerta por dependência. Se você acessar um alerta de legado {% data variables.product.prodname_dependabot %}, você será redirecionado para uma aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para esse pacote. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Você pode filtrar e classificar {% data variables.product.prodname_dependabot_alerts %} usando uma variedade de filtros e opções de classificação disponíveis na interface do usuário. Para obter mais informações, confira "[Como priorizar {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)", abaixo.

## Como priorizar {% data variables.product.prodname_dependabot_alerts %}

A {% data variables.product.company_short %} ajuda você a priorizar a correção de {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} Por padrão, {% data variables.product.prodname_dependabot_alerts %} são classificados por importância. A ordem de classificação "Mais importante" ajuda você a priorizar em quais {% data variables.product.prodname_dependabot_alerts %} se concentrar primeiro. Os alertas são classificados com base no impacto potencial, capacidade de ação e relevância. Nosso cálculo de priorização está constantemente sendo aprimorado e inclui fatores como pontuação CVSS, escopo de dependência e se chamadas de função vulneráveis são encontradas no alerta.

![Captura de tela da lista suspensa Classificar com a classificação "Mais importante" selecionada](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

Além dos filtros disponíveis por meio da barra de pesquisa, você pode classificar e filtrar dados {% data variables.product.prodname_dependabot_alerts %} usando os menus suspensos na parte superior da lista de alertas. A barra de pesquisa também permite a pesquisa completa de texto de alertas e avisos de segurança relacionados. Você pode pesquisar parte de um nome de consultoria de segurança ou descrição para retornar os alertas em seu repositório relacionados a esse aviso de segurança. Por exemplo, a pesquisa `yaml.load() API could execute arbitrary code` retornará {% data variables.product.prodname_dependabot_alerts %} vinculados a "[PyYAML desserializa de maneira insegura cadeias de caracteres YAML que levam à execução arbitrária do código](https://github.com/advisories/GHSA-rprw-h62v-c2w7)" à medida que a cadeia de caracteres de pesquisa aparece na descrição do aviso.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![ Captura de tela dos menus de filtro e classificação na guia de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} Você pode selecionar um filtro em um menu suspenso na parte superior da lista e, em seguida, clicar no filtro que você deseja aplicar.
   ![Captura de tela dos menus de filtro e classificação na guia dos {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Ecossistemas e manifestos com suporte para escopo de dependência

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Os alertas para pacotes listados como dependências de desenvolvimento são marcados com o rótulo `Development` na página {% data variables.product.prodname_dependabot_alerts %} e também estão disponíveis para filtragem por meio do filtro `scope`.

![Captura de tela mostrando o rótulo "Desenvolvimento" na lista de alertas](/assets/images/help/repository/dependabot-alerts-development-label.png)

A página de detalhes dos alertas em pacotes com escopo de desenvolvimento mostra uma seção "Tags" que contém um rótulo `Development`.

![Captura de tela mostrando a seção "Tags" na página de detalhes do alerta](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Sobre a detecção de chamadas para funções vulneráveis

{% data reusables.dependabot.vulnerable-calls-beta %}

Quando {% data variables.product.prodname_dependabot %} informa que seu repositório usa uma dependência vulnerável, você precisa determinar quais são as funções vulneráveis e verificar se você as está usando. Depois de ter essas informações, você pode determinar com que urgência precisa atualizar para uma versão segura da dependência. 

Para idiomas com suporte, {% data variables.product.prodname_dependabot %} detecta automaticamente se você usa uma função vulnerável e adiciona o rótulo "Chamada vulnerável" aos alertas afetados. Você pode usar essas informações na exibição {% data variables.product.prodname_dependabot_alerts %} para fazer a triagem e priorizar o trabalho de correção com mais eficiência.

{% note %}

**Observação**: durante a versão beta, esse recurso está disponível apenas para novos avisos do Python criados *após* 14 de abril de 2022 e para um subconjunto de avisos históricos do Python. {% data variables.product.prodname_dotcom %} está trabalhando para preencher dados em outros avisos históricos do Python, que são adicionados continuamente. Chamadas vulneráveis são destacadas apenas nas páginas {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Captura de tela mostrando um alerta com o rótulo "Chamada vulnerável"](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Você pode filtrar a exibição para mostrar apenas alertas em que {% data variables.product.prodname_dependabot %} detectou pelo menos uma chamada para uma função vulnerável usando o filtro `has:vulnerable-calls` no campo de pesquisa.

Para alertas em que chamadas vulneráveis são detectadas, a página de detalhes do alerta mostra informações adicionais:

- Um ou mais blocos de código mostrando onde a função é usada.
- Uma anotação listando a própria função, com um link para a linha onde a função é chamada.

![Captura de tela mostrando a página de detalhes do alerta para um alerta com um rótulo "Chamada vulnerável"](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Para obter mais informações, confira "[Revisão e correção de alertas](#reviewing-and-fixing-alerts)" abaixo.

{% endif %}

## Exibir {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecione um filtro no menu suspenso e clique no filtro que deseja aplicar. Você também pode digitar filtros na barra de pesquisa. Para obter mais informações sobre filtragem e classificação de alertas, confira "[Como priorizar {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)".
{%- ifversion dependabot-bulk-alerts %} ![Captura de tela do filtro e dos menus de classificação na guia {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![Captura de tela do filtro e dos menus de classificação na guia {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Clique no alerta que você deseja exibir.{% ifversion dependabot-bulk-alerts %} ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![Alerta selecionado na lista de alertas](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir.
  ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## Revisão e correção de alertas

É importante garantir que todas as suas dependências estejam livres de quaisquer falhas de segurança. Quando {% data variables.product.prodname_dependabot %} descobre vulnerabilidades {% ifversion GH-advisory-db-supports-malware %}ou malware{% endif %} descobre vulnerabilidades em suas dependências, você deve avaliar o nível de exposição do seu projeto e determinar quais etapas de correção devem ser tomadas para proteger seu aplicativo.

Se uma versão corrigida da dependência estiver disponível, você poderá gerar uma solicitação de pull {% data variables.product.prodname_dependabot %} para atualizar essa dependência diretamente de um alerta {% data variables.product.prodname_dependabot %}. Se você tiver a opção {% data variables.product.prodname_dependabot_security_updates %} habilitada, a solicitação de pull poderá ser vinculada ao alerta do Dependabot. 

Nos casos em que uma versão corrigida não está disponível ou você não pode atualizar para a versão segura, {% data variables.product.prodname_dependabot %} compartilha informações adicionais para ajudar você a determinar as próximas etapas. Ao clicar para visualizar um alerta {% data variables.product.prodname_dependabot %}, você pode ver os detalhes completos do aviso de segurança para a dependência, incluindo as funções afetadas. Em seguida, você pode verificar se o código chama as funções afetadas. Essas informações podem ajudar a avaliar melhor o seu nível de risco e determinar soluções alternativas ou se você pode aceitar o risco representado pela conselho de segurança.

{% ifversion dependabot-alerts-vulnerable-calls %}

Para idiomas com suporte, {% data variables.product.prodname_dependabot %} detecta chamadas para funções vulneráveis para você. Quando você visualiza um alerta rotulado como "Chamada vulnerável", os detalhes incluem o nome da função e um link para o código que a chama. Muitas vezes, você poderá tomar decisões com base nessas informações, sem explorar mais.

{% endif %}

### Corrigir dependências vulneráveis

1. Exiba os detalhes de um alerta. Para obter mais informações, confira "[Exibir {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" acima.
{% ifversion fpt or ghec or ghes %}
1. Se você tiver a opção {% data variables.product.prodname_dependabot_security_updates %} habilitada, poderá haver um link para uma solicitação de pull que corrigirá a dependência. Como alternativa, você pode clicar em **Criar atualização de segurança {% data variables.product.prodname_dependabot %}** na parte superior da página de detalhes do alerta para criar uma solicitação de pull.
  ![Botão Criar uma atualização de segurança do {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Opcionalmente, se você não usar {% data variables.product.prodname_dependabot_security_updates %}, poderá usar as informações na página para decidir para qual versão da dependência atualizar e criar uma solicitação de pull para atualizar a dependência para uma versão segura.
{% elsif ghae %}
1. Você pode usar as informações na página para decidir para qual versão da dependência atualizar e criar uma solicitação de pull para o arquivo de manifesto ou bloqueio para uma versão segura.
{% endif %}
1. Quando estiver pronto para atualizar a dependência e resolver a vulnerabilidade, faça merge da pull request. 

{% ifversion fpt or ghec or ghes %} Cada solicitação de pull gerada pelo {% data variables.product.prodname_dependabot %} inclui informações sobre os comandos que você pode usar para controlar o {% data variables.product.prodname_dependabot %}. Para obter mais informações, confira "[Como gerenciar solicitações de pull para atualizações de dependência](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

## Ignorar {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Dica:** você só pode ignorar alertas em aberto.
{% endtip %}

Se você agendar um trabalho extensivo para atualizar uma dependência ou decidir que um alerta não precisa ser corrigido, poderá ignorar o alerta. Ignorar alertas que você já avaliou facilita a triagem de novos alertas à medida que aparecem.

1. Exiba os detalhes de um alerta. Para obter mais informações, confira "[Exibir dependências vulneráveis](#viewing-dependabot-alerts)" (acima).
1. Selecione o menu suspenso "Ignorar" e clique em um motivo para ignorar o alerta.{% ifversion reopen-dependabot-alerts %} Os alertas ignorados não corrigidos poderão ser reabertos mais tarde.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. Opcionalmente, adicione um comentário de ignorar. O comentário de ignorar será adicionado à linha do tempo do alerta e pode ser usado como justificativa em auditorias e relatórios. Você pode recuperar ou definir um comentário usando a API do GraphQL. O comentário está contido no campo `dismissComment`. Para obter mais informações, confira "[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)" na documentação da API do GraphQL.
![Captura de tela mostrando como ignorar um alerta por meio do menu suspenso "Ignorar", com a opção de adicionar um comentário de ignorar](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Clique em **Ignorar alerta**.
{% else %} ![Como escolher o motivo para ignorar o alerta no menu suspenso "Ignorar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### Ignorar múltiplos alertas de uma vez

1. Exibição dos {% data variables.product.prodname_dependabot_alerts %} em aberto. Para obter mais informações, confira "[Exibir {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Opcionalmente, filtre a lista de alertas selecionando um menu suspenso e clique no filtro que você deseja aplicar. Você também pode digitar filtros na barra de pesquisa.
3. À esquerda de cada título de alerta, selecione os alertas que você deseja ignorar.
   ![Captura de tela de alertas abertos com caixas de seleção enfatizadas](/assets/images/help/graphs/select-multiple-alerts.png)
4. Opcionalmente, na parte superior da lista de alertas, selecione todos os alertas na página.
   ![Captura de tela de todos os alertas abertos selecionados](/assets/images/help/graphs/select-all-alerts.png)
5. Selecione a lista suspensa "Ignorar alertas" e clique em um motivo para ignorar os alertas.
   ![Captura de tela da página abrir alertas com a lista suspensa "Ignorar alertas" enfatizada](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Visualizando e atualizando alertas fechados

Você pode visualizar todos os alertas abertos e reabrir alertas que foram descartados anteriormente. Alertas fechados que já foram corrigidos não poderão ser reabertos.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para ver apenas os alertas fechados, clique em **Fechados**.

   {%- ifversion dependabot-bulk-alerts %} ![Captura de tela mostrando a opção "Fechado"](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![Captura de tela mostrando a opção "Fechado"](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. Clique no alerta que deseja ver ou atualizar.

   {%- ifversion dependabot-bulk-alerts %} ![Captura de tela mostrando um alerta dependabot destacado](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![Captura de tela mostrando um alerta dependabot destacado](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Opcionalmente, se o alerta foi ignorado e você deseja reabri-lo, clique em **Reabrir**. Alertas que já foram corrigidos não poderão ser reabertos.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![Captura de tela mostrando o botão "Reabrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reabrir múltiplos alertas de uma vez

1. Exibir os {% data variables.product.prodname_dependabot_alerts %} fechados. Para obter mais informações, confira "[Exibir e atualizar alertas fechados](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (acima).
2. À esquerda de cada título de alerta, selecione os alertas que você deseja reabrir.
   ![Captura de tela de alertas fechados com caixas de seleção enfatizadas](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Opcionalmente, na parte superior da lista de alertas, selecione todos os alertas fechados na página.
   ![Captura de tela de alertas fechados com todos os alertas selecionados](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Clique em **Reabrir** para reabrir os alertas. Alertas que já foram corrigidos não poderão ser reabertos.
   ![Captura de tela dos alertas fechados com o botão "Reabrir" enfatizado](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## Revisão dos logs de auditoria do {% data variables.product.prodname_dependabot_alerts %}

Quando um membro da sua organização {% ifversion not fpt %}ou empresa {% endif %}executa uma ação relacionada ao {% data variables.product.prodname_dependabot_alerts %}, você pode examiná-las no log de auditoria. Para obter mais informações sobre como acessar o log, confira "[Como examinar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}" e "[Como ecessar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."{% else %}."{% endif %} {% ifversion dependabot-alerts-audit-log %}

![Captura de tela do log de auditoria mostrando alertas do Dependabot](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

Os eventos no log de auditoria do {% data variables.product.prodname_dependabot_alerts %} incluem detalhes da ação, como quem a executou, qual foi executada e quando. {% ifversion dependabot-alerts-audit-log %}O evento também inclui um link para o alerta em si. Quando um membro da sua organização descarta um alerta, o evento exibe o motivo da demissão e o comentário. {% endif %} Para obter informações sobre as ações das ações do {% data variables.product.prodname_dependabot_alerts %}, confira a categoria `repository_vulnerability_alert` em "[Como examinar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}" and "[Eventos de log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)."{% else %}."{% endif %}
