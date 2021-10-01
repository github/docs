{% ifversion fpt or ghes > 3.1 %}
{% ifversion fpt %}Por padrão, você receberá notificações:{% endif %}{% ifversion ghes > 3.1 %}Por padrão, se o administrador do site tiver configurado o e-mail para notificações na instância, você receberá {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por e-mail, um e-mail é enviado quando {% data variables.product.prodname_dependabot %} for habilitado para um repositório, quando for feito commit de um novo arquivo de manifesto para o repositório, e quando uma nova vulnerabilidade com uma gravidade crítica ou alta é encontrada (Opção **Enviar um e-mail cada vez que uma vulnerabilidade for encontrada** opção).
- na interface do usuário, é exibido um aviso é nos arquivos e visualizações de código do seu repositório se houver quaisquer dependências vulneráveis (opção de **alertas de interface do usuário**).
- na linha de comando, são exibidos avisos como retornos de chamada quando você faz push em repositórios com quaisquer dependências vulneráveis (opção de **Linha de Comando**).
- na sua caixa de entrada, como notificações da web. Uma notificação da web é enviada quando {% data variables.product.prodname_dependabot %} for habilitado para um repositório, quando for feito commit de um novo arquivo de manifesto e quando for encontrada uma nova vulnerabilidade com uma gravidade crítica ou alta (opção**Web**).
- em {% data variables.product.prodname_mobile %}, como notificações da web. Para obter mais informações, consulte "[Habilitar notificações push com GitHub para celular](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile).

{% note %}

**Observação:** As notificações do e-mail e da web/{% data variables.product.prodname_mobile %} são:

- _por repositório_ quando {% data variables.product.prodname_dependabot %} estiver habilitado no repositório ou quando um novo arquivo de manifesto estiver disponível no repositório.

- _por organização_ quando uma nova vulnerabilidade for descoberta.

{% endnote %}
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}

{% ifversion ghes = 2.22 or ghes = 3.0 or ghes = 3.1 %}
Por padrão, se o administrador do site tiver configurado e-mail para notificações na sua instância, você receberá
{% data variables.product.prodname_dependabot_alerts %}:
- por e-mail, um e-mail é enviado toda vez que uma vulnerabilidade {% ifversion ghes > 3.0 %}com uma gravidade crítica ou alta {% endif %}for encontrada (opção **Enviar e-mail cada vez que uma vulnerabilidade for encontrada**)
- na interface do usuário, é exibido um aviso é nos arquivos e visualizações de código do seu repositório se houver quaisquer dependências vulneráveis (opção de **alertas de interface do usuário**)
- na linha de comando, são exibidos avisos como retornos de chamada quando você faz push em repositórios com quaisquer dependências vulneráveis (opção de **Linha de Comando**)
- na caixa de entrada, como notificações da web{% ifversion ghes > 3.0 %}para novas vulnerabilidades com uma severidade crítica ou alta {% endif %}(Opção **Web**)
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}
