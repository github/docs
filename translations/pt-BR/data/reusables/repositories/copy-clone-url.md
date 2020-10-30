{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. No nome do repositório, clique em **Clonar ou fazer download**. ![Botão Clone or download (Clonar ou baixar)](/assets/images/help/repository/clone-repo-clone-url-button.png)
2. Para clonar o repositório usando HTTPS, em "Clonar com HTTPS", clique em
{% octicon "clippy" aria-label="The clipboard icon" %}.
Para clonar o repositório usando uma chave SSH que inclui um certificado emitido pela autoridade certificada de SSH da sua organização clique em **Usar SSH** e, em seguida, clique em
{% octicon "clippy" aria-label="The clipboard icon" %}.
![Botão Clone URL (Clonar URL)](/assets/images/help/repository/https-url-clone.png)
{% else %}
1. Acima da lista de arquivos, clique em {% octicon "download" aria-label="The download icon" %} **código**. ![Botão de "Código"](/assets/images/help/repository/code-button.png)
1. Para clonar o repositório usando HTTPS, em "Clonar com HTTPS", clique em
{% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar o repositório usando uma chave SSH, incluindo um certificado emitido pela autoridade certificada de SSH da sua organização clique em **Usar SSH**, e, em seguida, clique em {% octicon "clippy" aria-label="The clipboard icon" %}.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} Para clonar um repositório usando {% data variables.product.prodname_cli %}, clique **Usar {% data variables.product.prodname_cli %}** e, em seguida, clique em {% octicon "clippy" aria-label="The clipboard icon" %}.{% endif %}
  ![O ícone da área de transferência para copiar a URL para clonar um repositório](/assets/images/help/repository/https-url-clone.png)
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
  ![O ícone da área de transferência para copiar a URL para clonar um repositório com o CLI do GitHub](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
{% endif %}
