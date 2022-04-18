---
title: Visualizando e atualizando alertas do Dependabot
intro: 'Se o {% data variables.product.product_name %} descobrir dependências vulneráveis no seu projeto, você poderá visualizá-las na aba de alertas do Dependabot no seu repositório. Em seguida, você pode atualizar seu projeto para resolver ou descartar a vulnerabilidade.'
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
  ghae: issue-4864
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

A aba de {% data variables.product.prodname_dependabot_alerts %} do seu repositório lista todos os {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} abertos e fechados correspondentes a {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. Você pode{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filtrar alertas por pacote, ecossistema ou manifesto. Você também pode{% endif %} ordernar a lista de alertas, além de poder clicar em alertas específicos para mais detalhes. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
É possível habilitar atualizações de segurança automáticas para qualquer repositório que usa o {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."
{% endif %}

{% data reusables.repositories.dependency-review %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Sobre atualizações para dependências vulneráveis no seu repositório

{% data variables.product.product_name %} gera {% data variables.product.prodname_dependabot_alerts %} quando detectamos que sua base de código está usando dependências com vulnerabilidades conhecidas. Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, quando {% data variables.product.product_name %} detecta uma dependência vulnerável no branch padrão, {% data variables.product.prodname_dependabot %} cria um pull request para corrigi-la. O pull request irá atualizar a dependência para a versão minimamente segura possível, o que é necessário para evitar a vulnerabilidade.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}Você pode classificar e filtrar {% data variables.product.prodname_dependabot_alerts %} com os menus suspensos na aba {% data variables.product.prodname_dependabot_alerts %} ou digitando filtros como pares de `key:value` na barra de pesquisa. Os filtros disponíveis são repositório (por exemplo, `repo:my-repository`), pacote (por exemplo `package:django`), ecossistema (por exemplo, `ecosystem:npm`), manifesto (por exemplo, `manifest:webwolf/pom.xml`), status (for example, `is:open`), e se uma consultoria tem uma atualização (por exemplo, `has: patch`).

Cada alerta de {% data variables.product.prodname_dependabot %} tem um identificador único de número e a aba de {% data variables.product.prodname_dependabot_alerts %} lista um alerta para cada vulnerabilidade detectada. O legado de {% data variables.product.prodname_dependabot_alerts %} agrupou as vulnerabilidades por dependência e gerou um único alerta por dependência. Se você acessar um alerta de legado {% data variables.product.prodname_dependabot %}, você será redirecionado para uma aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para esse pacote. {% endif %}
{% endif %}

{% if dependabot-alerts-vulnerable-calls %}
## About the detection of calls to vulnerable functions

{% data reusables.dependabot.vulnerable-calls-beta %}

When {% data variables.product.prodname_dependabot %} tells you that your repository uses a vulnerable dependency, you need to determine what the vulnerable functions are and check whether you are using them. Once you have this information, then you can determine how urgently you need to upgrade to a secure version of the dependency.

For supported languages, {% data variables.product.prodname_dependabot %} automatically detects whether you use a vulnerable function and adds the label "Vulnerable call" to affected alerts. You can use this information in the {% data variables.product.prodname_dependabot_alerts %} view to triage and prioritize remediation work more effectively.

{% note %}

**Note:** During the beta release, this feature is available only for new Python advisories created *after* April 14, 2022, and for a subset of historical Python advisories. GitHub is working to backfill data across additional historical Python advisories, which are added on a rolling basis. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

{% endnote %}

![Screenshot showing an alert with the "Vulnerable call" label](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

You can filter the view to show only alerts where {% data variables.product.prodname_dependabot %} detected at least one call to a vulnerable function using the `has:vulnerable-calls` filter in the search field.

For alerts where vulnerable calls are detected, the alert details page shows additional information:

- A code block showing where the function is used or, where there are multiple calls, the first call to the function.
- An annotation listing the function itself, with a link to the line where the function is called.

![Screenshot showing the alert details page for an alert with a "Vulnerable call" label](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing vulnerable dependencies](#reviewing-and-fixing-vulnerable-dependencies)" below.

{% endif %}

## Viewing vulnerable dependencies

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Opcionalmente, para filtrar alertas, selecione o menu suspenso **Repositório**, **Pacote**, **Ecossistema** ou **Manifesto** e clique no filtro que você gostaria de aplicar. Você também pode digitar filtros na barra de pesquisa. Por exemplo, `ecosystem:npm` ou `has:patch`. Para ordenar alertas, selecione o menu suspenso **Ordenar** e clique na opção que deseja ordenar. ![Captura de tela dos menus filtro e ordenação na aba de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. Clique no alerta que você deseja visualizar. ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir. ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Reviewing and fixing vulnerable dependencies

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When {% data variables.product.prodname_dependabot %} discovers vulnerabilities in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version is available, you can generate a {% data variables.product.prodname_dependabot %} pull request to update this dependency directly from a {% data variables.product.prodname_dependabot %} alert. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, the pull request may be linked will in the Dependabot alert.

In cases where a patched version is not available, or you can’t update to the secure version, {% data variables.product.prodname_dependabot %} shares additional information to help you determine next steps. When you click through to view a {% data variables.product.prodname_dependabot %} alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security vulnerability.

{% if dependabot-alerts-vulnerable-calls %}

For supported languages, {% data variables.product.prodname_dependabot %} detects calls to vulnerable functions for you. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-vulnerable-dependencies)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request. ![Crie um botão de atualização de segurança do {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
{% elsif ghes < 3.3 or ghae %}
1. You can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to the manifest or lock file to a secure version.
{% endif %}
1. Quando estiver pronto para atualizar a dependência e resolver a vulnerabilidade, faça merge da pull request.

{% ifversion fpt or ghec or ghes > 3.2 %}
   Cada pull request criado por {% data variables.product.prodname_dependabot %} inclui informações sobre os comandos que você pode usar para controlar {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciar pull requests para atualizações de dependências](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
{% endif %}

### Dismissing {% data variables.product.prodname_dependabot_alerts %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-vulnerable-dependencies)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% if reopen-dependabot-alerts %}

## Visualizando e atualizando alertas fechados

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Para visualizar os alertas fechados, clique em **Fechado**. ![Captura de tela que mostra a opção "Fechado"](/assets/images/help/repository/dependabot-alerts-closed.png)
1. Clique no alerta que deseja ver ou atualizar. ![Captura de tela que mostra um alerta do dependabot destacado](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. Opcionalmente, se o alerta foi descartado e você deseja reabri-lo, clique em **Reabrir**. ![Captura de tela que mostra o botão "Reabrir"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}
