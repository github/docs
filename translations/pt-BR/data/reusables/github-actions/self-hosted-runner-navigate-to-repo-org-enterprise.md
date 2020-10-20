1. Navegue por onde seu runner auto-hospedado está registrado:
   * **Em uma organização ou repositório**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * {% if currentVersion == "free-pro-team@latest" %}**Se você estiver usando uma conta corporativa**: navegue até a conta corporativa acessando`https://github. om/enterprises/ENTERPRISE-NAME`, substituindo `ENTERPRISE-NAME` pelo nome da conta corporativa.{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}**Se estiver usando um executor de nível empresarial**:

     1. No canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
     1. Na barra lateral esquerda, clique em **Visão geral da empresa**.
     1. {% endif %} Na barra lateral da empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização ou um repositório**: clique em **Ações** na barra lateral esquerda.

     ![Configuração de ações](/assets/images/help/settings/settings-sidebar-actions.png)
   * {% if currentVersion == "free-pro-team@latest" %}**Se estiver usando uma conta corporativa**{% else if currentVersion != "free-pro-team@latest" e currentVersion ver_gt "enterprise-server@2. 1" %}**Se usar um executor de nível empresarial**{% endif %}: clique **Ações** em "Políticas de {% octicon "law" aria-label="The law icon" %}".
