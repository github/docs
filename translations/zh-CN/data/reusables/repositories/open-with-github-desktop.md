{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
1. 在仓库名称下，单击 **Clone or download（克隆或下载）**。 ![克隆或下载按钮](/assets/images/help/repository/clone-repo-clone-url-button.png)
1. 单击**Open in Desktop（在 Desktop 中打开）**以克隆仓库并在 {% data variables.product.prodname_desktop %} 中打开。 ![“在 Desktop 中打开”按钮](/assets/images/help/desktop/open-in-desktop-button.png)
{% else %}
1. Above the list of files, click {% octicon "download" aria-label="The download icon" %} **Code**. !["Code" button](/assets/images/help/repository/code-button.png)
1. Click
{% octicon "desktop-download" aria-label="The GitHub Desktop download icon" %} **Open with {% data variables.product.prodname_desktop %}** to clone and open the repository with {% data variables.product.prodname_desktop %}.
  !["Open with {% data variables.product.prodname_desktop %}" button](/assets/images/help/repository/open-with-desktop.png)
{% endif %}
