---
title: Configurar a integração contínua usando o GitHub Actions
intro: É possível configurar a integração contínua no seu projeto usando um modelo de fluxo de trabalho correspondente ao idioma e à ferramenta que você quer usar.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Qualquer pessoa com permissões de gravação em um repositório pode configurar a integração contínua (CI, Continuous Integration) usando o {% data variables.product.prodname_actions %}.

Depois de configurar a CI, você pode personalizar o fluxo de trabalho conforme as suas demandas.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
3. Localize o modelo correspondente ao idioma e às ferramentas que você quer usar. Em seguida, clique em **Set up this workflow** (Configurar este fluxo de trabalho). ![Botão Setup workflow (Configurar fluxo de trabalho)](/assets/images/help/repository/setup-workflow-button.png)
5. Clique em **Start commit** (Iniciar commit). ![Botão Start commit (Iniciar commit)](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

Depois de fazer push no seu repositório, você pode acompanhar o status e os logs detalhados do fluxo de trabalho de integração contínua no {% data variables.product.prodname_dotcom %} e receber notificações personalizadas. Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)" e "
Gerenciando a execução do fluxo de trabalho".</p> 

{% data reusables.repositories.actions-workflow-status-badge-into %}

Para obter mais informações, consulte "[Configurar fluxo de trabalho](/articles/configuring-a-workflow)."



### Leia mais

- [Sobre integração contínua](/articles/about-continuous-integration)
- [Gerenciar a execução de fluxos de trabalho](/articles/managing-a-workflow-run) 
  
  {% if currentVersion == "free-pro-team@latest" %}

- "[Gerenciar a cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)" 
  
  {% endif %}
