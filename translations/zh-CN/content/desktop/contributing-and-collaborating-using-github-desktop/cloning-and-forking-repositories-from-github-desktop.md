---
title: 从 GitHub Desktop 克隆和复刻仓库
intro: '您可以使用 {% data variables.product.prodname_desktop %} 克隆和复刻 {% data variables.product.prodname_dotcom %} 上的仓库。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### 克隆仓库
{% data variables.product.prodname_dotcom %} 上的仓库作为远程仓库存在。  您可以克隆其他人拥有的公共仓库。 您可以克隆自己的仓库，从而在计算机上创建本地副本，并在两个本地位置之间实现同步。

也可以直接从 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 克隆仓库。 更多信息请参阅“[将仓库从 {% data variables.product.prodname_dotcom %} 克隆至 {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)。”

{% mac %}

{% data reusables.desktop.choose-clone-repository %}
  ![Mac 应用程序中的克隆菜单选项](/assets/images/help/desktop/clone-file-menu-mac.png)
{% data reusables.desktop.cloning-location-tab %}
  ![克隆仓库菜单中的 Location（位置）选项卡](/assets/images/help/desktop/choose-repository-location-mac.png)
{% data reusables.desktop.cloning-repository-list %}  
![克隆仓库列表](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. 单击 **Choose...（选择...）**，并使用 Finder 窗口找到要克隆仓库的本地路径。 ![选择按钮](/assets/images/help/desktop/clone-choose-button-mac.png)
5. 单击 **Clone（克隆）**。 ![克隆按钮](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.choose-clone-repository %}
  ![Windows 应用程序中的克隆菜单选项](/assets/images/help/desktop/clone-file-menu-windows.png)
{% data reusables.desktop.cloning-location-tab %}
  ![克隆仓库菜单中的 Location（位置）选项卡](/assets/images/help/desktop/choose-repository-location-win.png)
{% data reusables.desktop.cloning-repository-list %}     
![克隆仓库列表](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. 单击 **Choose...（选择...）**，并使用 Windows 资源管理器找到要克隆仓库的本地路径。 ![选择按钮](/assets/images/help/desktop/clone-choose-button-win.png)
5. 单击 **Clone（克隆）**。 ![克隆按钮](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### 复刻仓库
要对您没有写入权限的项目做出贡献，可以使用 {% data variables.product.prodname_desktop %} 创建仓库分支。 分支上的变更不会影响原始仓库。 您可以提交分支上的变更，然后将拉取请求对含有提议变更的原始仓库开放。 更多信息请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-forks)。”

1. 如果您克隆了自己没有写入权限的仓库，并查实提交变更。{% data variables.product.prodname_desktop %} 将警告您“您对 **REPOSITORY（仓库）**没有写入权限。 单击 **create a fork（创建分支）**。 ![创建分支链接](/assets/images/help/desktop/create-a-fork.png)
3. 单击 **Fork this repository（复刻此仓库）**。 ![复刻此仓库按钮](/assets/images/help/desktop/fork-this-repo-button.png)
4. 要查看 {% data variables.product.prodname_dotcom %} 上的分支，请在 {% data variables.product.prodname_dotcom %} 右上角单击个人资料照片，然后再单击 **Your repositories（您的仓库）**。 ![您的仓库链接](/assets/images/help/profile/your-repositories.png)
