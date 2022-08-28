{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
{% if currentVersion == "free-pro-team@latest"%}By default, you will receive notifications:{% endif %}{% if enterpriseServerVersions contains currentVersion and currentVersion gt "enterprise-server@3.1" %}By default, if your site administrator has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- by email, an email is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Email each time a vulnerability is found** option).
- na interface do usuário, é exibido um aviso é nos arquivos e visualizações de código do seu repositório se houver quaisquer dependências vulneráveis (opção de **alertas de interface do usuário**).
- na linha de comando, são exibidos avisos como retornos de chamada quando você faz push em repositórios com quaisquer dependências vulneráveis (opção de **Linha de Comando**).
- in your inbox, as web notifications. A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Web** option).
- on {% data variables.product.prodname_mobile %}, as web notifications. For more information, see "[Enabling push notifications with GitHub for mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

{% note %}

**Note:** The email and web/{% data variables.product.prodname_mobile %} notifications are:

- _per repository_ when {% data variables.product.prodname_dependabot %} is enabled on the repository, or when a new manifest file is committed to the repository.

- _per organization_ when a new vulnerability is discovered.

{% endnote %}
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "enterprise-server@3.1" %}
Por padrão, se o administrador do site tiver configurado e-mail para notificações na sua instância, você receberá
{% data variables.product.prodname_dependabot_alerts %}:
- por e-mail, um e-mail é enviado toda vez que uma vulnerabilidade {% if currentVersion ver_gt "enterprise-server@2. 3" %}com uma gravidade crítica ou alta {% endif %}é encontrada (opção de **Enviar e-mail toda vez que uma vulnerabilidade é encontrada**)
- na interface do usuário, é exibido um aviso é nos arquivos e visualizações de código do seu repositório se houver quaisquer dependências vulneráveis (opção de **alertas de interface do usuário**)
- na linha de comando, são exibidos avisos como retornos de chamada quando você faz push em repositórios com quaisquer dependências vulneráveis (opção de **Linha de Comando**)
- na sua caixa de entrada, como notificações da web {% if currentVersion ver_gt "enterprise-server@2. 3" %}para novas vulnerabilidades com uma gravidade crítica ou alta {% endif %}( opção**Web**)
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Por padrão, se o administrador do site configurou o e-mail para notificações na sua instância, você receberá alertas de segurança:
- por e-mail, um e-mail é enviado toda vez que uma vulnerabilidade é encontrada (opção de **Enviar e-mail toda vez que uma vulnerabilidade é encontrada**)
- na interface do usuário, como avisos nos arquivos e visualizações de código do seu repositório (opção de **alertas da interface do usuário**)
- na linha de comando, como avisos que são exibidos como retornos de chamada quando você faz push para repositórios com vulnerabilidades (opção de **Linha de Comando**)
- na sua caixa de entrada, como notificações da web (opção de **Web**)

Você pode personalizar a forma como você é notificado sobre alertas de segurança. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}
