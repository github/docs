---
title: 从 GitHub Desktop 克隆和复刻仓库
intro: '您可以使用 {% data variables.product.prodname_desktop %} 克隆和复刻 {% data variables.product.prodname_dotcom %} 上的仓库。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: 从桌面克隆和复刻
---

## 关于本地仓库
{% data variables.product.prodname_dotcom %} 上的仓库是远程仓库。 您可以通过 {% data variables.product.prodname_desktop %} 克隆或复刻仓库以在计算机上创建本地仓库。

您可以通过克隆仓库创建 {% data variables.product.product_name %} 上您可以访问的任何仓库的本地副本。 如果您拥有一个仓库或拥有写入权限，您可以在本地和远程位置之间进行同步。 更多信息请参阅“[同步分支](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)”。

当您克隆仓库时，您推送到 {% data variables.product.product_name %} 的任何更改都将影响原始仓库。 要在不影响原始项目的情况下进行更改，您可以通过复刻仓库来创建单独的副本。 您可以创建拉取请求来提议维护员将您的复刻中的更改加入原始上游仓库。 更多信息请参阅“[关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)。”

当您尝试使用 {% data variables.product.prodname_desktop %} 克隆您没有写入权限的仓库时，{% data variables.product.prodname_desktop %} 会自动提示您创建复刻。 您可以选择使用复刻参加原始上游仓库，或者在您自己的项目上独立工作。 任何现有复刻都默认对其上游仓库进行更改。 您可以随时修改此选项。 更多信息请参阅“[管理复刻行为](#managing-fork-behavior)”。

也可以直接从 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 克隆仓库。 更多信息请参阅“[将仓库从 {% data variables.product.prodname_dotcom %} 克隆至 {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)。”

## 克隆仓库

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

## 复刻仓库
如果您克隆一个您没有写入权限的仓库，{% data variables.product.prodname_desktop %} 将创建一个复刻。 在创建或克隆复刻后，{% data variables.product.prodname_desktop %} 会问您打算如何使用该复刻。

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}
{% data reusables.desktop.fork-type-prompt %}

## 管理复刻行为
您可以更改复刻对 {% data variables.product.prodname_desktop %} 中上游仓库的行为。

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

## 为本地仓库创建别名
您可以为本地仓库创建一个别名，以帮助在 {% data variables.product.prodname_desktop %} 中区分同名的仓库。 创建别名不影响在 {% data variables.product.prodname_dotcom %} 上的仓库名称。 在仓库列表中，别名以斜体显示。

1. 在 {% data variables.product.prodname_desktop %} 左上角当前仓库名称右侧点击 {% octicon "triangle-down" aria-label="The triangle-down icon" %}。
2. 右键单击要创建别名的仓库，然后单击 **Create Alias（创建别名）**。
3. 为仓库输入别名。
4. 单击 **Create Alias（创建别名）**。

## 延伸阅读
- [关于远程仓库](/github/getting-started-with-github/about-remote-repositories)
