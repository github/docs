---
title: 为 wiki 创建页脚或边栏
intro: 您可以为 wiki 添加自定义边栏或页脚，以便为读者提供更多上下文信息。
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: 创建页脚或侧边栏
---

## 创建页脚

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. 在页面底部，单击 **Add a custom footer（添加自定义页脚）**。 ![Wiki 添加页脚部分](/assets/images/help/wiki/wiki_add_footer.png)
4. 使用文本编辑器键入您希望页脚包含的内容。 ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. 输入提交消息描述所添加的页脚。 ![Wiki 提交消息](/assets/images/help/wiki/wiki_commit_message.png)
6. 要提交更改到 wiki，请单击 **Save Page（保存页面）**。

## 创建边栏

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. 单击 **Add a custom sidebar（添加自定义边栏）**。 ![Wiki 添加边栏部分](/assets/images/help/wiki/wiki_add_sidebar.png)
4. 使用文本编辑器添加页面内容。 ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. 输入提交消息描述所添加的边栏。 ![Wiki 提交消息](/assets/images/help/wiki/wiki_commit_message.png)
6. 要提交更改到 wiki，请单击 **Save Page（保存页面）**。

## 在本地创建页脚或边栏

如果您创建了名为 `_Footer.<extension>` 或 `_Sidebar.<extension>` 的文件，我们将使用它们分别填充 wiki 的页脚和边栏。 与所有其他 wiki 页面一样，您为这些文件选择的扩展名将决定我们如何渲染它们。
