---
title: 自定义组织的配置文件
intro: 你可以通过自定义组织的配置文件来共享有关组织的信息。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447928'
---
## 关于组织的配置文件页

{% ifversion org-profile-pin-private %}可自定义组织的“概述”页，以显示专用于公共用户或组织成员的 README 和固定存储库。

![公共组织配置文件页面的图像](/assets/images/help/organizations/public_profile.png)

登录到 {% data variables.product.prodname_dotcom %} 的组织成员可以在其访问组织的配置文件页面时选择 README 和固定存储库的 `member` 或 `public` 视图。 

![公共组织配置文件页面视图上下文切换器的图像](/assets/images/help/organizations/profile_view_switcher_public.png)

如果存在成员专用 README 或成员专用固定存储库，则视图默认为 `member`；否则为 `public`。

![成员专用组织配置文件页面的图像](/assets/images/help/organizations/member_only_profile.png)

将向非组织成员的用户显示 `public` 视图。

### 固定的仓库

可以通过为公共用户选择最多 6 个存储库并为组织成员选择最多 6 个存储库，从而让用户轻松访问重要或经常使用的存储库。 将存储库固定到组织配置文件后，配置文件页的“存储库”部分上方会显示“已固定”部分。

只有组织所有者才能固定存储库。 有关详细信息，请参阅“[将存储库固定到组织的配置文件](#pinning-repositories-to-your-organizations-profile)”。

### 组织配置文件 README

{% endif %}

可以通过为公共用户和组织成员创建组织配置文件 README 来共享有关如何与组织互动的信息。 {% data variables.product.prodname_dotcom %} 在组织的“Overview（概述）”选项卡中显示组织资料 README。

可以选择要包含组织配置文件 README 的信息。 下面是一些可能有帮助的信息示例。

- “About（关于）”部分介绍您的组织
- 在组织中获取帮助的指南

您可以使用 {% data variables.product.company_short %} Flavored Markdown 在组织资料 README 中设置文本格式和包含表情符号、图像及 GIF。 有关详细信息，请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式入门](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”。

## 添加公共组织配置文件 README

1. 如果组织还没有公共 `.github` 存储库，请创建一个公共 `.github` 存储库。
2. 在组织的 `.github` 存储库内的 `profile` 文件夹中，创建 `README.md` 文件。
3. 提交对 `README.md` 文件的更改。 `README.md` 的内容将显示在组织的公共配置文件中。

   ![组织的公共 README 的图像](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## 添加仅限成员的组织配置文件 README

1. 如果组织还没有 `.github-private` 存储库，请创建一个名为 `.github-private` 的专用存储库。 
2. 在组织的 `.github-private` 存储库内的 `profile` 文件夹中，创建 `README.md` 文件。
3. 提交对 `README.md` 文件的更改。 `README.md` 的内容将显示在组织配置文件的成员视图中。

   ![组织的成员专用 README 的图像](/assets/images/help/organizations/org_member_readme.png)

## 将存储库固定到组织的配置文件

可以将要提供的存储库（例如经常使用的存储库）固定到组织的配置文件页。 要选择要固定到组织的配置文件的存储库，你必须是组织所有者。

1. 导航到组织的配置文件页。
2. 在 {% octicon "eye" aria-label="The eye octicon" %}“查看方式”链接的页面右侧栏中，从下拉菜单中选择“公共”或“成员”配置文件视图。

   ![组织配置文件视图下拉列表的图像](/assets/images/help/organizations/org_profile_view.png)

3. 在“固定的存储库”部分中，选择“自定义固定”。

   ![自定义固定链接的图像](/assets/images/help/organizations/customize_pins_link.png)

   - 如果尚未将任何存储库固定到组织的配置文件，则需要在配置文件页的右侧栏中单击“固定存储库”。
   ![右侧栏中固定存储库链接的图像](/assets/images/help/organizations/pin_repositories_link.png)

4. 在“编辑固定的存储库”对话框中，选择最多六个公共、{% ifversion not fpt %}专用或内部{% else %}或专用{% endif %} 存储库的组合进行显示。

   ![固定存储库对话框的图像](/assets/images/help/organizations/pinned_repo_dialog.png)

5. 单击“保存固定”。

{% endif %}
