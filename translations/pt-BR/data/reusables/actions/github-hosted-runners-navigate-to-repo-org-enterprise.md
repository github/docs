{% ifversion fpt %}
1. Acesse a página principal da organização ou repositório.
1. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
1. Na barra lateral esquerda, clique **Ações** e, em seguida, clique em **Executores**.
{% elsif ghec %}
1. Acesse as configurações dos executores:
   * **Em uma organização ou repositório**: Acesse a página principal e, em seguida, clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * **Se estiver usando uma conta corporativa**: Acesse a conta corporativa clicando na foto do seu perfil no canto superior direito de {% data variables.product.prodname_dotcom_the_website %} e clicando em **suas empresas**e clicando na empresa.
1. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização ou repositório**: Clique em **Ações** na barra lateral esquerda e depois clique **Executores**.
   * **Se estiver usando uma conta corporativa**: Na barra lateral esquerda, clique em **"Políticas de {% octicon "law" aria-label="The law icon" %}"**, em seguida clique em **Ações**, depois clique na aba **Executores**.
{% endif %}
