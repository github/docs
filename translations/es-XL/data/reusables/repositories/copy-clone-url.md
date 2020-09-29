{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
1. Debajo del nombre del repositorio, da clic en **Clonar o descargar**. ![Botón Clone or download (Clonar o descargar)](/assets/images/help/repository/clone-repo-clone-url-button.png)
2. To clone the repository using HTTPS, under "Clone with HTTPS", click
{% octicon "clippy" aria-label="The clipboard icon" %}.
Para clonar el repositorio utilizando una llave SSH
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, incluyendo un certificado que emita la autoridad de certificados SSH de tu organización, {% endif %} da clic en **Utilizar SSH** y luego en {% octicon "clippy" aria-label="The clipboard icon" %}.
![Botón Clone URL (Clonar URL)](/assets/images/help/repository/https-url-clone.png)
{% else %}
1. Sobre la lista de archivos, da clic en {% octicon "download" aria-label="The download icon" %} **Código**. ![Botón de "Código"](/assets/images/help/repository/code-button.png)
1. To clone the repository using HTTPS, under "Clone with HTTPS", click
{% octicon "clippy" aria-label="The clipboard icon" %}. To clone the repository using an SSH key{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, including a certificate issued by your organization's SSH certificate authority,{% endif %} click **Use SSH**, then click {% octicon "clippy" aria-label="The clipboard icon" %}.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} To clone a repository using {% data variables.product.prodname_cli %}, click **Use {% data variables.product.prodname_cli %}**, then click {% octicon "clippy" aria-label="The clipboard icon" %}.{% endif %}
  ![El icono de portapapeles para copiar la URL para clonar un repositorio](/assets/images/help/repository/https-url-clone.png)
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
  ![The clipboard icon for copying the URL to clone a repository with GitHub CLI](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
{% endif %}
