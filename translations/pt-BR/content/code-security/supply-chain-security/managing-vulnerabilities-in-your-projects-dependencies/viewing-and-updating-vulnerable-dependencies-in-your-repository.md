---
title: Exibir e atualizar dependências vulneráveis no repositório
intro: 'Se o {% data variables.product.product_name %} descobrir dependências vulneráveis no seu projeto, você poderá visualizá-las na aba de alertas do Dependabot no seu repositório. Em seguida, você pode atualizar seu projeto para resolver ou descartar a vulnerabilidade.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: Visualizar e atualizar dependências vulneráveis
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

A aba de alertas de {% data variables.product.prodname_dependabot %} do repositório lista as todos os {% data variables.product.prodname_dependabot_alerts %} abertos e fechados {% if currentVersion == "free-pro-team@latest" %} e {% data variables.product.prodname_dependabot_security_updates %} correspondentes {% endif %}. Você pode classificar a lista de alertas usando o menu suspenso e clicar em determinados alertas para ver mais detalhes. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"

{% if currentVersion == "free-pro-team@latest" %}
É possível habilitar atualizações de segurança automáticas para qualquer repositório que usa o {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% data reusables.repositories.dependency-review %}

### Sobre atualizações para dependências vulneráveis no seu repositório

{% data variables.product.product_name %} gera {% data variables.product.prodname_dependabot_alerts %} quando detectamos que sua base de código está usando dependências com vulnerabilidades conhecidas. Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, quando {% data variables.product.product_name %} detecta uma dependência vulnerável no branch padrão, {% data variables.product.prodname_dependabot %} cria um pull request para corrigi-la. O pull request irá atualizar a dependência para a versão minimamente segura possível, o que é necessário para evitar a vulnerabilidade.
{% endif %}

### Visualizar e atualizar dependências vulneráveis

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir. ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Revise as informações da vulnerabilidade e, se disponível, o pull request que contém a atualização de segurança automatizada.
1. Opcionalmente, se ainda não houver uma atualização de {% data variables.product.prodname_dependabot_security_updates %} para o alerta, crie um pull request para resolver a vulnerabilidade. Clique em **Criar uma atualização de segurança de {% data variables.product.prodname_dependabot %}**. ![Crie um botão de atualização de segurança do {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Quando estiver pronto para atualizar a dependência e resolver a vulnerabilidade, faça merge da pull request. Cada pull request criado por {% data variables.product.prodname_dependabot %} inclui informações sobre os comandos que você pode usar para controlar {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciar pull requests para atualizações de dependências](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
1. Opcionalmente, se o alerta estiver sendo corrigido, se estiver incorreto, ou localizado em um código não utilizado, use o menu suspenso "Ignorar", e clique em um motivo para ignorar o alerta. ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir. ![Alerta selecionado na lista de alertas](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. Revise os detalhes da vulnerabilidade e determine se você precisa atualizar a dependência.
1. Ao fazer merge de um pull request que atualiza o manifesto ou arquivo de bloqueio para uma versão segura da dependência, isso resolverá o alerta. Como alternativa, se você decidir não atualizar a dependência, clique no menu suspenso **Ignorar** e selecione um motivo para ignorar o alerta. ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. Clique no número da versão da dependência vulnerável para exibir informações detalhadas. ![Informações detalhadas sobre a dependência vulnerável](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. Revise os detalhes da vulnerabilidade e determine se você precisa atualizar a dependência. Ao fazer merge de um pull request que atualiza o manifesto ou arquivo de bloqueio para uma versão segura da dependência, isso resolverá o alerta.
1. O banner na parte superior da aba **Dependências** é exibido até que todas as dependências vulneráveis sejam resolvidas ou até que você o ignore. Clique em **Ignorar** no canto superior direito do banner e selecione uma razão para ignorar o alerta. ![Ignorar banner de segurança](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

### Leia mais

- "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"{% endif %}
- "[Gerenciar as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionar a detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Solucionar problemas de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
