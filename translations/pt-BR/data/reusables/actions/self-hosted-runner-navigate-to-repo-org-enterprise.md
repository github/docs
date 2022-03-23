{% ifversion fpt %}
1. Acesse a página principal da organização ou repositório onde o grupo de executor auto-hospedado está registrado.
2. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
3. Na barra lateral esquerda, clique em **Actions** (Ações).
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navegue por onde seu runner auto-hospedado está registrado:
   * **Em uma organização ou repositório**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**. {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **Se estiver usando um executor de nível corporativo**:
     1. No canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
     2. Na barra lateral esquerda, clique em **Visão geral da empresa**.
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização ou repositório**: Clique em **Ações** na barra lateral esquerda{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, depois clique em **Executores**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**Se estiver usando uma conta corporativa**:{% elsif ghes or ghae %}**Se estiver usando um executor de nível empresarial**:{% endif %} Clique em **Ações** em "Políticas de {% octicon "law" aria-label="The law icon" %} "{% ifversion ghes > 3.1 or ghae or ghec %} e, em seguida, clique na aba **Executores**{% endif %}.{% endif %}
{% endif %}
