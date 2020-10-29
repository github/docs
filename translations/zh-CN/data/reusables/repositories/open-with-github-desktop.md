{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. 在仓库名称下，单击 **Clone or download（克隆或下载）**。 ![克隆或下载按钮](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. Click **Open in Desktop** to clone the repository and open it in
{% data variables.product.prodname_desktop %}.
![“在 Desktop 中打开”按钮](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. 在文件列表上方，单击 {% octicon "download" aria-label="The download icon" %} ****Code（代码）。 !["代码"按钮](/assets/images/help/repository/code-button.png)
1. 单击
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Open with {% data variables.product.prodname_desktop %}** to clone and open the repository with {% data variables.product.prodname_desktop %}.
  !["Open with {% data variables.product.prodname_desktop %}" button](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
