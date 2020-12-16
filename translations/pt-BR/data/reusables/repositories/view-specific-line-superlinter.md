{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Para obter um link para uma linha específica nos logs, clique no número da linha da etapa. Em seguida, você pode copiar o link da barra de endereço do seu navegador da web.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Botão para copiar link](/assets/images/help/repository/copy-link-button-updated-2.png)
  {% else %}
  ![Botão para copiar link](/assets/images/help/repository/copy-link-button-updated.png)
  {% endif %}
{% else %}
1. Para obter um link para uma linha específica nos logs, clique no número da linha da etapa. Em seguida, você pode copiar o link da barra de endereço do seu navegador da web. ![Botão para copiar link](/assets/images/help/repository/copy-link-button.png)
{% endif %}