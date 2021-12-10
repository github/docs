{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. Na barra lateral esquerda, clique em **Actions** (Ações).
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navegue por onde seu runner auto-hospedado está registrado:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion ghec %}**If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}**If using an enterprise-level runner**:

     1. No canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
     1. Na barra lateral esquerda, clique em **Visão geral da empresa**.
     1. In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
1. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, then click **Runners**{% endif %}.
   * {% ifversion ghec %}**Se você estiver usando uma conta corporativa**:{% elsif ghes or ghae %}**Se estiver usando um executor de nível corporativo**:{% endif %} Clique em **Ações** em "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion fpt or ghec or ghes > 3.1 or ghae %} e, em seguida, clique na aba **Executores**{% endif %}.
{% endif %}
