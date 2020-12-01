{% if currentVersion == "free-pro-team@latest" %}
Por padrão, você receberá notificações das novas
{% data variables.product.prodname_dependabot_alerts %}:
- por e-mail, um e-mail é enviado toda vez que uma vulnerabilidade com uma gravidade crítica ou alta é encontrada (opção de **Enviar e-mail toda vez que uma vulnerabilidade for encontrada**)
- na interface do usuário, é exibido um aviso é nos arquivos e visualizações de código do seu repositório se houver quaisquer dependências vulneráveis (opção de **alertas de interface do usuário**)
- na linha de comando, são exibidos avisos como retornos de chamada quando você faz push em repositórios com quaisquer dependências vulneráveis (opção de **Linha de Comando**)
- na caixa de entrada, como notificações da web para novas vulnerabilidades com uma gravidade crítica ou alta (opção**Web**)
Você pode personalizar a forma como você é notificado

{% data variables.product.prodname_dependabot_alerts %}. Por exemplo, você pode receber um e-mail semanal com o resumo dos alertas de até 10 de seus repositórios usando as opções **Enviar e-mail com o resumo das vulnerabilidades** e **Resumo semanal por e-mail sobre segurança**.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
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
