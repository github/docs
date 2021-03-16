{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. 在仓库名称下，单击 **Clone or download（克隆或下载）**。 ![克隆或下载按钮](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. 单击**Open in Desktop（在 Desktop 中打开）**以克隆仓库并在
{% data variables.product.prodname_desktop %} 中打开它。
![“在 Desktop 中打开”按钮](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. 在文件列表上方，单击 {% octicon "download" aria-label="The download icon" %} ****Code（代码）。 !["代码"按钮](/assets/images/help/repository/code-button.png)
1. 单击
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **使用 {% data variables.product.prodname_desktop %}** 打开以使用 {% data variables.product.prodname_desktop %} 克隆并打开仓库。
  !["使用 {% data variables.product.prodname_desktop %} 打开"按钮](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
