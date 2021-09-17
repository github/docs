{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. リポジトリ名の下にある**Clone or download**をクリックします。 ![Clone or downloadボタン](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. **Open in Desktop（デスクトップでオープン）**をクリックして、リポジトリをクローンして
{% data variables.product.prodname_desktop %}でオープンしてください。
![Open in Desktopボタン](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. ファイルのリストの上にある{% octicon "download" aria-label="The download icon" %} **Code（コード）**をクリックしてください。 !["Code"ボタン](/assets/images/help/repository/code-button.png)
1. {% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Open with {% data variables.product.prodname_desktop %}（{% data variables.product.prodname_desktop %}でオープン）**をクリックして、リポジトリをクローンして{% data variables.product.prodname_desktop %}でオープンしてください。
  !["{% data variables.product.prodname_desktop %}でオープン"ボタン](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
