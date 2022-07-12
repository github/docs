---
title: Visualizando e atualizando alertas do Dependabot
intro: 'Se {% data variables.product.product_name %} descobrir dependências inseguras em seu projeto, é possível visualizar detalhes na guia de alertas do Dependabot de seu repositório. Em seguida, você pode atualizar seu projeto para resolver ou ignorar o alerta.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: Ver alertas do Dependabot
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
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

A aba de {% data variables.product.prodname_dependabot_alerts %} do seu repositório lista todos os {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} abertos e fechados correspondentes a {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. Você pode{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filtrar alertas por pacote, ecossistema ou manifesto. Você pode {% endif %} classificar a lista de alertas, e você pode clicar em alertas específicos para mais detalhes. {% ifversion dependabot-bulk-alerts %}Você também pode ignorar ou reabrir os alertas, um por um ou selecionando vários alertas de uma vez.{% else %}Você também pode ignorar ou reabrir alertas. {% endif %} Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).

{% ifversion fpt or ghec or ghes > 3.2 %}
É possível habilitar atualizações de segurança automáticas para qualquer repositório que usa o {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Sobre atualizações para dependências vulneráveis no seu repositório

{% data variables.product.product_name %} gera {% data variables.product.prodname_dependabot_alerts %} quando detectamos que sua base de código está usando dependências com riscos de segurança conhecidos. Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, quando {% data variables.product.product_name %} detecta uma dependência vulnerável no branch padrão, {% data variables.product.prodname_dependabot %} cria um pull request para corrigi-la. O pull request irá atualizar a dependência para a versão minimamente segura possível, o que é necessário para evitar a vulnerabilidade.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}Você pode classificar e filtrar {% data variables.product.prodname_dependabot_alerts %} com os menus suspensos na aba {% data variables.product.prodname_dependabot_alerts %} ou digitando filtros como pares de `key:value` na barra de pesquisa. Os filtros disponíveis são o repositório (por exemplo, `repo:my-repository`), pacote (fpor exemplo, `package:django`), ecossistema (por exemplo, `ecosystem:npm`), manifesto (por exemplo, `manifest:webwolf/pom.xml`), status (por exemplo, `is:open`) e quando uma consultoria tem uma correção (por exemplo, `has: patch`).{% ifversion dependabot-alerts-development-label %} Você também pode filtrar alertas com dados do escopo de dependência, usando `scope`, por exemplo: `scope:development` ou `scope:runtime`. Com `escopo: desenvolvimento`, a lista de alertas mostrará apenas dependências usadas durante o desenvolvimento, não durante a produção.{% endif %}

Cada alerta de {% data variables.product.prodname_dependabot %} tem um identificador único de número e a aba de {% data variables.product.prodname_dependabot_alerts %} lista um alerta para cada vulnerabilidade detectada. O legado de {% data variables.product.prodname_dependabot_alerts %} agrupou as vulnerabilidades por dependência e gerou um único alerta por dependência. Se você acessar um alerta de legado {% data variables.product.prodname_dependabot %}, você será redirecionado para uma aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para esse pacote. {% endif %}
{% endif %}

{% ifversion dependabot-alerts-development-label %}
## Ecossistemas e manifestos compatíveis com o escopo de dependência

<!-- TODO: for now we'd have this table and heading as they are, but we're planning to replace this with at a later date a new heading containing all the available filters in one or more tables -->
{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Os alertas para pacotes listados como dependências de desenvolvimento estão marcados com a etiqueta `Desenvolvimento` na página {% data variables.product.prodname_dependabot_alerts %} e estão também disponíveis para filtragem através do filtro de `escopo`. ![Captura de tela que mostra a etiqueta "Desenvolvimento" na lista de alertas](/assets/images/help/repository/dependabot-alerts-development-label.png)

A página de detalhes de alerta de alertas de pacotes com escopo de desenvolvimento mostra uma seção "Tags", que contém uma etiqueta de `Desenvolvimento`. ![Captura de tela que mostra a seção "Tags" seção na página de detalhes do alerta](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Sobre a detecção de chamadas para funções vulneráveis

{% data reusables.dependabot.vulnerable-calls-beta %}

Quando {% data variables.product.prodname_dependabot %} disser que seu repositório usa uma dependência vulnerável, você deverá determinar quais são as funções vulneráveis e verificar se você as está usando. Com essa informação, você poderá determinar o quão urgente você precisa para atualizar para uma versão segura da dependência.

Para as linguagens compatíveis, {% data variables.product.prodname_dependabot %} detecta automaticamente se você usa uma função vulnerável e adiciona a etiqeuta de "Chamada vulnerável" aos alertas afetados. Você pode usar estas informações na exibição de {% data variables.product.prodname_dependabot_alerts %} para triar e priorizar o trabalho de correção de forma mais eficaz.

{% note %}

**Observação:** Durante a versão beta, esse recurso está disponível apenas para novas consultorias do Python criadas *depois de* 14 de abril de 2022 e para um subconjunto de consultorias históricas do Python. {% data variables.product.prodname_dotcom %} está trabalhando para preencher dados através de consultorias históricas do Python, que são adicionadas constantemente. As chamadas vulneráveis são destacadas apenas nas páginas de {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Captura de tela que mostra um alerta com a etiqueta "Chamada vulnerável"](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Você pode filtrar a visualização para mostrar apenas alertas em que {% data variables.product.prodname_dependabot %} detectou pelo menos uma chamada para uma função vulnerável usando o filtro `has:vulnerable-calls` no campo de busca.

Para alertas quando chamadas vulneráveis forem detectadas, a página de detalhes de alerta mostra informações adicionais:

- Um ou mais blocos de código que mostram onde a função é usada.
- Uma anotação que lista a função em si, com um link para a linha onde a função é chamada.

![Captura de tela que mostra a página de detalhes de alerta para um alerta com uma etiqueta "chamada vulnerável"](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Para obter mais informações, consulte "[Revisando e corrigindo alertas](#reviewing-and-fixing-alerts)" abaixo.

{% endif %}

## Visualizando {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecione o menu suspenso **Repositório**, **Pacote**, **Ecossistema** ou **Manifesto** e clique no filtro que você gostaria de aplicar. Você também pode digitar filtros na barra de pesquisa. Por exemplo, `ecosystem:npm`{% ifversion ghes < 3.7 or ghae-issue-5638 %} or `has:patch`{% endif %}{% ifversion dependabot-alerts-development-label %}, `has:patch` ou `scope:development`{% endif %}. Para ordenar alertas, selecione o menu suspenso **Ordenar** e clique na opção que deseja ordenar.

   Você também pode clicar em uma etiqueta em um alerta para mostrar apenas alertas desse tipo.{% ifversion dependabot-alerts-development-label %} Por exemplo, clicar na etiqueta de `Desenvolvimento` na lista de alertas mostrará apenas os alertas relacionados às dependências usadas em desenvolvimento, não na produção. Para obter informações sobre a lista de ecossistemas compatíveis, consulte "[Ecossistemas e manifestos compatíveis para o escopo de dependência](#supported-ecosystems-and-manifests-for-dependency-scope)".

{% endif %}
{%- ifversion dependabot-bulk-alerts %}
  ![Captura de tela dos menus filtro e ordenação na aba de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}
   ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Clique no alerta que você gostaria de ver.{% ifversion dependabot-bulk-alerts %} ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}
![Alert selected in list of alerts](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir. ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Revisando e corrigindo alertas

É importante garantir que todas as suas dependências estejam limpas de qualquer fraqueza de segurança. Quando {% data variables.product.prodname_dependabot %} descobrir vulnerabilidades {% ifversion GH-advisory-db-supports-malware %}ou malware{% endif %} em suas dependências, você deve avaliar o nível de exposição do seu projeto e determinar quais medidas de correção devem ser tomadas para proteger seu aplicativo.

Se uma versão alterada da dependência estiver disponível, é possível gerar um pull request de {% data variables.product.prodname_dependabot %} para atualizar essa dependência diretamente de um alerta do {% data variables.product.prodname_dependabot %}. Se você tiver {% data variables.product.prodname_dependabot_security_updates %} habilitado, o pull request poderá estar vinculado ao alerta do Dependabot.

Nos casos em que uma versão alterada não está disponível ou em que você não puder atualizar para a versão segura, {% data variables.product.prodname_dependabot %} irá compartilhar informações adicionais para ajudar você a determinar as próximas etapas. Ao clicar para ver um alerta de {% data variables.product.prodname_dependabot %}, você pode ver todos os detalhes da consultoria de segurança para a dependência, incluindo as funções afetadas. Você pode então verificar se seu código chama as funções afetadas. Essa informação pode ajudar você a avaliar seu nível de risco e determinar soluções alternativas ou se você pode aceitar o risco representado pela consultoria de segurança.

{% ifversion dependabot-alerts-vulnerable-calls %}

Para as linguagens compatíveis, {% data variables.product.prodname_dependabot %} detecta chamadas para funções vulneráveis para você. Ao ver um alerta marcado como "Chamada vulnerável", os detalhes incluem o nome da função e um link para o código que a chama. Muitas vezes, é possível tomar decisões com base nestas informações, sem ter de continuar explorando.

{% endif %}

### Corrigir dependências vulneráveis

1. Ver detalhes de um alerta. Para obter mais informações, consulte "[Visualizando {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (acima).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. Se você tiver {% data variables.product.prodname_dependabot_security_updates %} habilitado, é possível que haja um link para um pull request que irá corrigir a dependência. Como alternativa, você pode clicar em **Criar {% data variables.product.prodname_dependabot %} atualização de segurança** na parte superior da página de detalhes do alerta para criar um pull request. ![Crie um botão de atualização de segurança do {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Opcionalmente, se você não usar {% data variables.product.prodname_dependabot_security_updates %}, você pode usar as informações na página para decidir para qual versão de dependência atualizar e criar um pull request para atualizar a dependência de uma versão segura.
{% elsif ghes < 3.3 or ghae %}
1. Você pode usar as informações na página para decidir para qual versão da dependência atualizar e criar um pull request para o manifesto ou bloquear arquivo para uma versão segura.
{% endif %}
1. Quando estiver pronto para atualizar a dependência e resolver a vulnerabilidade, faça merge da pull request.

{% ifversion fpt or ghec or ghes > 3.2 %}
   Cada pull request criado por {% data variables.product.prodname_dependabot %} inclui informações sobre os comandos que você pode usar para controlar {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciar pull requests para atualizações de dependências](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

## Ignorando {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Dica:** Você só pode ignorar alertas abertos.
{% endtip %}

Se você agendar um extenso trabalho para atualizar uma dependência ou decidir que um alerta não precisa ser corrigido, você poderá ignorar o alerta. Ignorando alertas que você já avaliou facilita a triagem de novos alertas conforme eles aparecem.

1. Ver detalhes de um alerta. Para obter mais informações, consulte "[Visualizando dependências vulneráveis](#viewing-dependabot-alerts)" (acima).
1. Selecione o menu suspenso "Ignorar" e clique em um motivo para ignorar o alerta.{% ifversion reopen-dependabot-alerts %} Alertas não descartados podem ser reabertos posteriormente.{% endif %} ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### Ignorar múltiplos alertas de uma vez

1. Veja o {% data variables.product.prodname_dependabot_alerts %} aberto. Para obter mais informações, consulte "[Visualizando {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Opcionalmente, filtre a lista de alertas selecionando um menu suspenso e, em seguida, clicando no filtro que você gostaria de aplicar. Você também pode digitar filtros na barra de pesquisa.
3. À esquerda de cada título de alerta, selecione os alertas que deseja descartar. ![Captura de tela de alertas abertos com caixas de seleção destacadas](/assets/images/help/graphs/select-multiple-alerts.png)
4. Opcionalmente, na parte superior da lista de alertas, selecione todos os alertas na página. ![Captura de tela de todos os alertas abertos selecionados](/assets/images/help/graphs/select-all-alerts.png)
5. Selecione o menu suspenso "Ignorar alertas" e clique em um motivo para ignorar os alertas. ![Captura de tela da página de alertas abertos com o menu suspenso "Ignorar alertas" destacado](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Visualizando e atualizando alertas fechados

{% tip %}

**Dica:** Você só pode reabrir alertas que já foram ignorados anteriormente. Os alertas fechados que já foram corrigidos não podem ser reabertos.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para ver apenas os alertas fechados, clique em **Fechados**.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. Clique no alerta que você gostaria de ver ou atualizar.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. Opcionalmente, se o alerta foi descartado e você deseja reabri-lo, clique em **Reabrir**. Os alertas já corrigidos não podem ser reabertos. ![Captura de tela que mostra o botão "Reabrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reabrindo vários alertas ao mesmo tempo

1. Veja o {% data variables.product.prodname_dependabot_alerts %} fechado. Para obter mais informações, consulte "[Visualizando e atualizando alertas fechados](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (acima).
2. À esquerda de cada título de alerta, selecione os alertas que deseja reabrir. ![Captura de tela de alertas fechados com caixas de seleção destacadas](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Opcionalmente, na parte superior da lista de alertas, selecione todos os alertas fechados na página. ![Captura de tela de alertas fechados com todos os alertas selecionados](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Clique em **Reabrir** para reabrir os alertas. Os alertas já corrigidos não podem ser reabertos. ![Captura de tela de alertas fechados com o botão "Reabrir" destacado](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
