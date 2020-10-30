---
title: Exibir e atualizar dependências vulneráveis no repositório
intro: 'Se o {% data variables.product.product_name %} descobrir dependências vulneráveis no seu projeto, você poderá visualizá-las na aba de alertas do Dependabot no seu repositório. Em seguida, você pode atualizar seu projeto para resolver ou descartar a vulnerabilidade.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Os administradores e proprietários da organização podem visualizar e atualizar dependências.
versions:
  free-pro-team: '*'
---

A aba de alertas do {% data variables.product.prodname_dependabot %} do seu repositório lista todos {% data variables.product.prodname_dependabot_alerts %} e as {% data variables.product.prodname_dependabot_security_updates %} correspondente. Você pode classificar a lista de alertas usando o menu suspenso e clicar em determinados alertas para ver mais detalhes. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"

É possível habilitar atualizações de segurança automáticas para qualquer repositório que usa o {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

### Sobre atualizações para dependências vulneráveis no seu repositório

O {% data variables.product.product_name %} envia {% data variables.product.prodname_dependabot_alerts %} quando detectamos vulnerabilidades que afetam o seu repositório. Para repositórios em que o {% data variables.product.prodname_dependabot_security_updates %} está ativado, quando {% data variables.product.product_name %} detecta uma dependência vulnerável, {% data variables.product.prodname_dependabot_short %} cria um pull request para corrigi-la. {% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

### Visualizar e atualizar dependências vulneráveis

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Clique no alerta que deseja exibir. ![Alerta selecionado na lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Revise as informações da vulnerabilidade e, se disponível, o pull request que contém a atualização de segurança automatizada.
1. Opcionalmente, se ainda não houver uma atualização de {% data variables.product.prodname_dependabot_security_updates %} para o alerta, crie um pull request para resolver a vulnerabilidade. Clique em **Criar uma atualização de segurança de {% data variables.product.prodname_dependabot_short %}**. ![Crie um botão de atualização de segurança do {% data variables.product.prodname_dependabot_short %}](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Quando estiver pronto para atualizar a dependência e resolver a vulnerabilidade, faça merge da pull request. Cada pull request criado por {% data variables.product.prodname_dependabot_short %} inclui informações sobre os comandos que você pode usar para controlar {% data variables.product.prodname_dependabot_short %}. Para obter mais informações, consulte "[Gerenciar pull requests para atualizações de dependências](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-github-dependabot-pull-requests-with-comment-commands)".
1. Opcionalmente, se o alerta estiver sendo corrigido, se estiver incorreto, ou localizado em um código não utilizado, use o menu suspenso "Ignorar", e clique em um motivo para ignorar o alerta. ![Escolher o motivo para ignorar o alerta a partir do menu suspenso "Ignorar"down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### Leia mais

- "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)"
- "[Gerenciar as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solução de problemas na detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
