1. Navegue por onde seu runner auto-hospedado está registrado:
   * **Em uma organização ou repositório**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * {% ifversion fpt or ghec %}**Se você estiver usando uma conta corporativa**: acesse a conta corporativa visitando `https://github. om/enterprises/ENTERPRISE-NAME` e substituindo `ENTERPRISE-NAME` pelo nome da sua conta corporativa.{% elsif ghes or ghae %}**Se estiver usando um executor de nível corporativo**:

     1. No canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
     1. Na barra lateral esquerda, clique em **Visão geral da empresa**.
     1. {% endif %} Na barra lateral da empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização ou repositório**: Clique em **Ações** na barra lateral esquerda{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %} e, em seguida, clique em **Executores**{% endif %}.
   * {% ifversion fpt or ghec %}**Se você estiver usando uma conta corporativa**:{% elsif ghes or ghae %}**Se estiver usando um executor de nível corporativo**:{% endif %} Clique em **Ações** em "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %} e, em seguida, clique na aba **Executores**{% endif %}.
