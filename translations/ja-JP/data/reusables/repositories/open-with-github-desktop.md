{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. リポジトリ名の下にある**Clone or download**をクリックします。 ![Clone or downloadボタン](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. Click **Open in Desktop** to clone the repository and open it in
{% data variables.product.prodname_desktop %}.
![Open in Desktopボタン](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. Above the list of files, click {% octicon "download" aria-label="The download icon" %} **Code**. !["Code" button](/assets/images/help/repository/code-button.png)
1. 下向きの三角形アイコン
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Open with {% data variables.product.prodname_desktop %}** to clone and open the repository with {% data variables.product.prodname_desktop %}.
  !["Open with {% data variables.product.prodname_desktop %}" button](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
