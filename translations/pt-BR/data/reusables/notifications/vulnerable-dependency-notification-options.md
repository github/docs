{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
{% ifversion fpt or ghec %}By default, you will receive notifications:{% endif %}{% ifversion ghes > 3.1 or ghae %}By default, if your enterprise owner has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por e-mail, um e-mail é enviado quando {% data variables.product.prodname_dependabot %} for habilitado para um repositório, quando for feito commit de um novo arquivo de manifesto para o repositório, e quando uma nova vulnerabilidade com uma gravidade crítica ou alta é encontrada (Opção **Enviar um e-mail cada vez que uma vulnerabilidade for encontrada** opção).
- in the user interface, a warning is shown in your repository's file and code views if there are any insecure dependencies (**UI alerts** option).
- on the command line, warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**Command Line** option).
- na sua caixa de entrada, como notificações da web. A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Web** option).{% ifversion not ghae %}
- em {% data variables.product.prodname_mobile %}, como notificações da web. For more information, see "[Enabling push notifications with GitHub Mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)."{% endif %}

{% note %}

**Note:** The email and web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} notifications are:

- _por repositório_ quando {% data variables.product.prodname_dependabot %} estiver habilitado no repositório ou quando um novo arquivo de manifesto estiver disponível no repositório.

- _por organização_ quando uma nova vulnerabilidade for descoberta.

{% endnote %}
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}

{% ifversion ghes = 3.1 %}
Por padrão, se o administrador do site tiver configurado e-mail para notificações na sua instância, você receberá
{% data variables.product.prodname_dependabot_alerts %}:
- por e-mail, um e-mail é enviado toda vez que uma vulnerabilidade com uma gravidade crítica ou alta é encontrada (opção de **Enviar e-mail toda vez que uma vulnerabilidade for encontrada**)
- in the user interface, a warning is shown in your repository's file and code views if there are any insecure dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**Command Line** option)
- na caixa de entrada, como notificações da web para novas vulnerabilidades com uma gravidade crítica ou alta (opção**Web**)
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}
