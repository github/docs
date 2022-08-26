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

Cada alerta de {% data variables.product.prodname_dependabot %} tem um identificador único de número e a aba de {% data variables.product.prodname_dependabot_alerts %} lista um alerta para cada vulnerabilidade detectada. O legado de {% data variables.product.prodname_dependabot_alerts %} agrupou as vulnerabilidades por dependência e gerou um único alerta por dependência. Se você acessar um alerta de legado {% data variables.product.prodname_dependabot %}, você será redirecionado para uma aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para esse pacote. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
You can filter and sort {% data variables.product.prodname_dependabot_alerts %} using a variety of filters and sort options available on the user interface. For more information, see "[Prioritizing {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)" below.

## Prioritizing {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} helps you prioritize fixing {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} By default, {% data variables.product.prodname_dependabot_alerts %} are sorted by importance. The "Most important" sort order helps you prioritize which {% data variables.product.prodname_dependabot_alerts %} to focus on first. Os alertas são classificados com base no seu impacto potencial, atuabilidade e relevância. O nosso cálculo de priorização está em melhoria constante e inclui fatores como pontuação do CVSS, âmbito de dependência, e se são encontradas chamadas de função vulneráveis para o alerta.

![Captura de tela da classificação suspensa com a classificação "mais importante"](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png)
{% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

In addition to the filters available via the search bar, you can sort and filter {% data variables.product.prodname_dependabot_alerts %} using the dropdown menus at the top of the alert list. The search bar also allows for full text searching of alerts and related security advisories. You can search for part of a security advisory name or description to return the alerts in your repository that relate to that security advisory. For example, searching for `yaml.load() API could execute arbitrary code` will return {% data variables.product.prodname_dependabot_alerts %} linked to "[PyYAML insecurely deserializes YAML strings leading to arbitrary code execution](https://github.com/advisories/GHSA-rprw-h62v-c2w7)" as the search string appears in the advisory description.

{% endif %}

{% ifversion dependabot-bulk-alerts %}
  ![Captura de tela dos menus filtro e ordenação na aba de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %}
You can select a filter in a dropdown menu at the top of the list, then click the filter that you would like to apply. ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Ecossistemas e manifestos compatíveis com o escopo de dependência

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Os alertas para pacotes listados como dependências de desenvolvimento estão marcados com a etiqueta `Desenvolvimento` na página {% data variables.product.prodname_dependabot_alerts %} e estão também disponíveis para filtragem através do filtro de `escopo`.

![Captura de tela que mostra a etiqueta "Desenvolvimento" na lista de alertas](/assets/images/help/repository/dependabot-alerts-development-label.png)

A página de detalhes de alerta de alertas de pacotes com escopo de desenvolvimento mostra uma seção "Tags", que contém uma etiqueta de `Desenvolvimento`.

![Captura de tela que mostra a seção "Tags" seção na página de detalhes do alerta](/assets/images/help/repository/dependabot-alerts-tags-section.png)

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
1. Optionally, to filter alerts, select a filter in a dropdown menu then click the filter that you would like to apply. Você também pode digitar filtros na barra de pesquisa. For more information about filtering and sorting alerts, see "[Prioritizing {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)."
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
1. Selecione o menu suspenso "Ignorar" e clique em um motivo para ignorar o alerta.{% ifversion reopen-dependabot-alerts %} Alertas não descartados podem ser reabertos posteriormente.{% endif %}
{% ifversion dependabot-alerts-dismissal-comment %}1. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can retrieve or set a comment by using the GraphQL API. The comment is contained in the `dismissComment` field. For more information, see "[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)" in the GraphQL API documentation.
   ![Screenshot showing how to dismiss an alert via the "Dismiss" drop-down, with the option to add a dismissal comment](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Click **Dismiss alert**.
{% else %}
   ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %}
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

You can view all open alerts, and you can reopen alerts that have been previously dismissed. Os alertas fechados que já foram corrigidos não podem ser reabertos.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para visualizar os alertas fechados, clique em **Fechado**.

   {%- ifversion dependabot-bulk-alerts %}
   ![Captura de tela que mostra a opção "Fechado"](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png)
   {%- else %}
   ![Captura de tela que mostra a opção "Fechado"](/assets/images/help/repository/dependabot-alerts-closed.png)
   {%- endif %}
1. Clique no alerta que deseja ver ou atualizar.

   {%- ifversion dependabot-bulk-alerts %}
   ![Captura de tela que mostra um alerta do dependabot destacado](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png)
   {%- else %}
   ![Captura de tela que mostra um alerta do dependabot destacado](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Opcionalmente, se o alerta foi descartado e você deseja reabri-lo, clique em **Reabrir**. Os alertas já corrigidos não podem ser reabertos.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %}
   ![Captura de tela que mostra o botão "Reabrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reabrindo vários alertas ao mesmo tempo

1. Veja o {% data variables.product.prodname_dependabot_alerts %} fechado. Para obter mais informações, consulte "[Visualizando e atualizando alertas fechados](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (acima).
2. À esquerda de cada título de alerta, selecione os alertas que deseja reabrir. ![Captura de tela de alertas fechados com caixas de seleção destacadas](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Opcionalmente, na parte superior da lista de alertas, selecione todos os alertas fechados na página. ![Captura de tela de alertas fechados com todos os alertas selecionados](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Clique em **Reabrir** para reabrir os alertas. Os alertas já corrigidos não podem ser reabertos. ![Captura de tela de alertas fechados com o botão "Reabrir" destacado](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
