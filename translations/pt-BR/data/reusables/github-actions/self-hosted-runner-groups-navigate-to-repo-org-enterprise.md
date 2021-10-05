1. Navigate to where your self-hosted runner groups are located:
   * **Em uma organização ou repositório**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * {% ifversion fpt %}**Se você estiver usando uma conta corporativa**: acesse a conta corporativa visitando `https://github. om/enterprises/ENTERPRISE-NAME` e substituindo `ENTERPRISE-NAME` pelo nome da sua conta corporativa.{% elsif ghes or ghae %}**Se estiver usando um executor de nível corporativo**:

     1. No canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
     1. Na barra lateral esquerda, clique em **Visão geral da empresa**.
     1. {% endif %} Na barra lateral da empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navigate to the "Runner groups" settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt %}, then click **Runner groups** below it{% endif %}.
   * {% ifversion fpt %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt %}, then click the **Runners groups** tab{% endif %}.
