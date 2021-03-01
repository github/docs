{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. Debajo del nombre del repositorio, da clic en **Clonar o descargar**. ![Botón Clone or download (Clonar o descargar)](/assets/images/help/repository/clone-repo-clone-url-button.png)
2. Para clonar el repositorio utilizando HTTPS, debajo de "Clonar con HTTPS", da clic en
{% octicon "clippy" aria-label="The clipboard icon" %}.
Para clonar el repositorio utilizando una llave SSH, incluyendo un certificado que haya emitido la autoridad de certificados SSH de tu organización, da clic en **Usar SSH** y luego en
{% octicon "clippy" aria-label="The clipboard icon" %}.
![Botón Clone URL (Clonar URL)](/assets/images/help/repository/https-url-clone.png)
{% else %}
1. Sobre la lista de archivos, da clic en {% octicon "download" aria-label="The download icon" %} **Código**. ![Botón de "Código"](/assets/images/help/repository/code-button.png)
1. Para clonar el repositorio utilizando HTTPS, debajo de "Clonar con HTTPS", da clic en
{% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar el repositorio utilizando una llave de SSH, incluyendo un certificado que emita la autoridad de certificados SSH de tu organización, da clic en **Utilizar SSH**, y luego da clic en {% octicon "clippy" aria-label="The clipboard icon" %}.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} Para clonar un repositorio utiilzando {% data variables.product.prodname_cli %}, da clic en **Utilizar {% data variables.product.prodname_cli %}**, y luego da clic en {% octicon "clippy" aria-label="The clipboard icon" %}.{% endif %}
  ![El icono de portapapeles para copiar la URL para clonar un repositorio](/assets/images/help/repository/https-url-clone.png)
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
  ![El icono del portapapeles para copiar la URL para clonar un repositorio con el CLI de GitHub](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
{% endif %}
