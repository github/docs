---
title: 将仓库从 GitHub 克隆到 GitHub Desktop
intro: '您可以使用 {% data variables.product.prodname_dotcom %} 将远程仓库克隆到 {% data variables.product.prodname_desktop %}。'
versions:
  free-pro-team: '*'
---

{% tip %}

**提示：**您也可以使用 {% data variables.product.prodname_desktop %} 克隆 {% data variables.product.prodname_dotcom %} 上的仓库。  更多信息请参阅“[从 {% data variables.product.prodname_desktop %} 克隆仓库](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”。

{% endtip %}

{% mac %}

1. 开始克隆前，请先登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_desktop %}。
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. 单击 **Choose...（选择...）**，并使用 Finder 窗口找到要克隆仓库的本地路径。 ![URL 选项卡中的选择按钮](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **注：**如果仓库配置为使用 LFS，将会提示您初始化 {% data variables.large_files.product_name_short %}。

  {% endnote %}

5. 单击 **Clone（克隆）**。 ![URL 选项卡中的克隆按钮](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. 开始克隆前，请先登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_desktop %}。
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. 单击 **Choose...（选择...）**，并使用 Windows 资源管理器找到要克隆仓库的本地路径。 ![选择按钮](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **注：**如果仓库配置为使用 LFS，将会提示您初始化 {% data variables.large_files.product_name_short %}。

  {% endnote %}

5. 单击 **Clone（克隆）**。 ![克隆按钮](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
