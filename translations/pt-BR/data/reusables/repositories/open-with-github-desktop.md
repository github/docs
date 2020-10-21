{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
1. No nome do seu repositório, clique em **Clone or download** (Clonar ou baixar). ![Botão Clone or download (Clonar ou baixar)](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. Clique em **Abrir no Desktop** para clonar o repositório e abra-o no
{% data variables.product.prodname_desktop %}.
![Botão Open in Desktop (Abrir no Desktop)](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. Acima da lista de arquivos, clique em {% octicon "download" aria-label="The download icon" %} **código**. ![Botão de "Código"](/assets/images/help/repository/code-button.png)
1. Clique em
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Abra com {% data variables.product.prodname_desktop %}** para clonar e abrir o repositório com {% data variables.product.prodname_desktop %}.
  !["Abrir com o botão {% data variables.product.prodname_desktop %}"](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
