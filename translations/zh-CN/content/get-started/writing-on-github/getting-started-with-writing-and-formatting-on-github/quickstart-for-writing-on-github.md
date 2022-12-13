---
title: 有关在 GitHub 上编写的快速入门
intro: '通过创建 {% ifversion ghae %}gist 描述你自己的 {% data variables.product.prodname_dotcom %} 个人资料{% endif %} 的 {% else %}自述文件，了解高级格式设置功能。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107171'
---
## 简介

Markdown 是一种易于读取和编写的语言，用于设置纯文本格式。 可以使用 Markdown 语法以及一些其他 HTML 标记来格式化位于存储库自述文件以及有关拉取请求和问题的注释等位置的 {% data variables.product.prodname_dotcom %} 上的写入内容。 在本指南中，你将通过创建 {% ifversion ghae %}gist{% else %} 或编辑 {% data variables.product.prodname_dotcom %} 个人资料{% endif %} 的自述文件来了解一些高级格式设置功能。

如果不熟悉 Markdown，则可能需要通过“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)”或[使用 Markdown 进行通信](https://github.com/skills/communicate-using-markdown) {% data variables.product.prodname_learning %} 课程入门。

{% ifversion not ghae %}

如果已有个人资料自述文件，则可以按照本指南向现有自述文件添加一些功能，或者使用名为 `about-me.md` 之类的 Markdown 文件创建一个 gist。 有关详细信息，请参阅“[创建 gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)”。

{% endif %}

{% ifversion ghae %}

## 创建 Gist

Gists 允许在 {% data variables.location.product_location %} 上存储或与他人共享代码段和其他信息片段。 若要在 gist 中使用格式设置功能，请添加扩展名为 `.md` 的 gist 文件。

1. 导航到 {% data variables.gists.gist_homepage %}。
1. （可选）键入 gist 的说明，例如“关于我”。
1. 在“文件名包括扩展名...”字段中，键入 `about-me.md`。

有关详细信息，请参阅“[创建 gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)”。

{% else %}

## 创建或编辑个人资料自述文件

个人资料自述文件让你能在 {% data variables.location.product_location %} 上与社区分享有关你自己的信息。 自述文件显示在个人资料页面的顶部。

如果还没有个人资料自述文件，可以添加一个。

1. 创建一个与 {% data variables.product.prodname_dotcom %} 用户名同名的存储库，并使用 `README.md` 文件初始化存储库。 有关详细信息，请参阅“[管理个人资料 README](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)”。
1. 编辑 `README.md` 文件并删除创建文件时自动添加的模板文本（开头 `### Hi there`）。

如果已有个人资料自述文件，则可以从个人资料页面对其进行编辑。

{% data reusables.profile.navigating-to-profile %}
1. 单击个人资料自述文件旁边的 {% octicon "pencil" aria-label="The Pencil icon" %}。

   ![个人资料页面的屏幕截图，其中突出显示了个人资料自述文件旁边的铅笔图标](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## 添加适合访问者的图像

可以在 {% data variables.product.prodname_dotcom %} 上的通信中包含图像。 在这里，将响应式图像（如横幅）添加到{% ifversion ghae %}gist{% else %}个人资料自述文件{% endif %}的顶部。 

通过将 HTML `<picture>` 元素与 `prefers-color-scheme` 媒体功能结合使用，可以添加一个图像，该图像根据访问者使用的是浅色还是深色模式而变化。 有关详细信息，请参阅“[管理主题设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)”。

1. 将以下标记复制并粘贴到 {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %} 文件中。
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. 将标记中的占位符替换为所选图像的 URL。 或者，若要首先尝试该功能，可以从以下示例复制 URL。

   - 将 `YOUR-DARKMODE-IMAGE` 替换为图像的 URL，以便向使用深色模式的访问者显示。
   - 将 `YOUR-LIGHTMODE-IMAGE` 替换为图像的 URL，以便向使用浅色模式的访问者显示。
   - 将 `YOUR-DEFAULT-IMAGE` 替换为要显示的图像的 URL，以防其他图像都不匹配，例如，如果访问者使用的浏览器不支持 `prefers-color-scheme` 功能。
1. 若要让使用屏幕阅读器的访问者可以访问图像，请将 `YOUR-ALT-TEXT` 替换为图像的说明。
1. 若要检查图像是否已正确呈现，请单击“预览”选项卡。

有关在 Markdown 中使用图像的详细信息，请参阅“[基本编写和格式设置语法](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)”。

### 示例

{% data reusables.getting-started.picture-element-example %}

### 外观

![浅色模式下的“预览”选项卡的屏幕截图，其中显示了微笑的太阳的图像](/assets/images/help/profile/lightmode-image-example.png)

## 添加表

可以使用 Markdown 表来组织信息。 在这里，你将使用一张表格通过对某些东西进行排名来介绍自己，例如最常用的编程语言或框架，花时间学习的东西或最喜欢的爱好。 当表列包含数字时，使用标题行下方的 `--:` 语法使列右对齐非常有用。

1. 返回到“编辑 {% ifversion ghae %}新 {% endif %}文件”选项卡。 
1. 若要介绍自己，请在 `</picture>` 标记下方的两行处添加 `## About me` 标题和一小段关于你自己的内容，如下所示。
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. 在此段落下方的两行处，通过复制并粘贴以下标记来插入表。
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. 在右侧的列中，将 `THING-TO-RANK` 替换为“语言”、“爱好”或其他任何内容，然后在列中填写内容清单。
1. 若要检查表格是否已正确呈现，请单击“预览”选项卡。

有关详细信息，请参阅“[使用表格组织信息](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)”。

### 示例

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### 外观

![“预览”选项卡的屏幕截图，显示“关于我”标题和包含语言列表的呈现表](/assets/images/help/profile/markdown-table-example.png)

## 创建折叠部分

若要使内容保持整洁，可以使用 `<details>` 标记创建可展开的折叠部分。 

1. 若要为创建的表创建折叠部分，请将表包装在 `<details>` 标记中，如以下示例所示。
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. 在 `<summary>` 标记之间，将 `THINGS-TO-RANK` 替换为在表格中排名的任何内容。
1. （可选）若要使该部分在默认情况下显示为打开状态，请将 `open` 属性添加到 `<details>` 标记。

   ```HTML
   <details open>
   ```
1. 若要检查折叠的部分是否已正确呈现，请单击“预览”选项卡。

### 示例

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### 外观

![“预览”选项卡的屏幕截图，其中名为“我的常用语言”的折叠部分由下拉箭头标记](/assets/images/help/profile/collapsed-section-example.png)

## 添加引文

Markdown 具有许多其他用于设置内容格式的选项。 在这里，你将添加一条水平线来分割页面，并添加一个块引用块来格式化你喜欢的引文。

1. 在文件底部，在 `</details>` 标记下方两行处，通过键入三条或更多短划线来添加水平线。

   ```Markdown
   ---
   ```
1. 在 `---` 行下方，通过键入如下所示的标记来添加引文。
   
   ```Markdown
   > QUOTE
   ```

   将 `QUOTE` 替换为所选引文。 或者，请从以下示例中复制引文。
1. 若要检查所有内容是否已正确呈现，请单击“预览”选项卡。

### 示例

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### 外观

![“预览”选项卡的屏幕截图，在水平粗线下方有一个缩进引文](/assets/images/help/profile/markdown-quote-example.png)

## 添加注释

可以使用 HTML 注释语法添加将在输出中隐藏的注释。 在这里，你将添加注释，以提醒自己稍后更新{% ifversion ghae %}gist{% else %}自述文件{% endif %}。

1. 在 `## About me` 标题下方的两行中，使用以下标记插入注释。

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   将 `COMMENT` 替换为“待办事项”项目，提醒自己稍后执行某些操作（例如，向表中添加更多项）。
1. 若要检查注释是否在输出中隐藏，请单击“预览”选项卡。

### 示例

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## 保存工作

当你对更改感到满意时，请保存 {% ifversion ghae %}gist。 

- 若要对搜索引擎隐藏 gist，但对共享 URL 的任何人可见，请单击“创建机密 gist” 
- 如果希望 gist 对 {% data variables.location.product_location %} 上的任何人都可见，请单击“创建内部 gist”

{% else %}个人资料自述文件，方法是单击“提交更改”。 

直接提交到 `main` 分支将使你的更改对个人资料上的任何访问者可见。 如果要保存工作，但尚未准备好使其在个人资料中可见，可以选择“为此提交创建新分支并启动拉取请求”。

![“提交更改”部分的屏幕截图](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## 后续步骤

- 继续了解高级格式设置功能。 例如，请参阅 {% ifversion fpt or ghec %}“[创建关系图](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)”和{% endif %}“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。
- 在问题、拉取请求和讨论中跨 GitHub 进行沟通时，请使用新技能。 有关详细信息，请参阅“[在 {% data variables.product.prodname_dotcom %} 上通信](/get-started/quickstart/communicating-on-github)”。
