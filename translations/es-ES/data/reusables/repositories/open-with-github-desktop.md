{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. Debajo del nombre del repositorio, haz clic en **Clone or download** (Clonar o descargar). ![Botón Clone or download (Clonar o descargar)](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. Da clic en **Abrir en escritorio** para clonar el repositorio y abrirlo en
{% data variables.product.prodname_desktop %}.
![Botón Open in Desktop (Abrir en escritorio)](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. Sobre la lista de archivos, da clic en {% octicon "download" aria-label="The download icon" %} **Código**. ![Botón de "Código"](/assets/images/help/repository/code-button.png)
1. Da clic en
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Abrir con {% data variables.product.prodname_desktop %}** para clonar y abrir el repositorio con {% data variables.product.prodname_desktop %}.
  ![Botón de "Abrir con {% data variables.product.prodname_desktop %}"](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
