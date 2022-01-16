---
title: 添加或编辑 wiki 页面
intro: '您可以直接在 {% data variables.product.product_name %} 或者本地使用命令行添加和编辑 wiki 页面。'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface/
  - /articles/editing-wiki-pages-via-the-online-interface/
  - /articles/adding-and-editing-wik-pages-locally/
  - /articles/adding-and-editing-wiki-pages-locally/
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 社区
---
### 添加 wiki 页面

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. 在页面的右上角，单击 **New Page（新页面）**。 ![Wiki 新页面按钮](/assets/images/help/wiki/wiki_new_page_button.png)
4. 或者，要以 Markdown 以外的格式，请使用 Edit（编辑）模式下拉菜单，并单击不同的格式。 ![Wiki 标记选择](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. 使用文本编辑器添加页面内容。 ![Wiki WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 输入提交消息，描述所添加的新文件。 ![Wiki 提交消息](/assets/images/help/wiki/wiki_commit_message.png)
7. 要提交更改到 wiki，请单击 **Save Page（保存页面）**。

### 编辑 wiki 页面

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
4. 使用 wiki 侧栏，导航到您要更改的页面。 在页面的右上角，单击 **Edit（编辑）**。 ![Wiki 编辑页面按钮](/assets/images/help/wiki/wiki_edit_page_button.png)
5. 使用文本编辑器添加页面内容。 ![Wiki WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 输入提交消息，描述您的更改。 ![Wiki 提交消息](/assets/images/help/wiki/wiki_commit_message.png)
7. 要提交更改到 wiki，请单击 **Save Page（保存页面）**。

### 本地添加或编辑 wiki 页面

Wiki 是 Git 仓库的一部分，因此您可以在本地进行更改，然后使用 Git 工作流程将它们推送到仓库。

#### 克隆 wiki 到计算机

每个 wiki 都提供一种将其内容克隆到计算机的简易方式。 您可以选择使用提供的 URL 将仓库克隆到计算机：

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clones the wiki locally
```

在克隆 wiki 后，可以添加新文件、编辑现有文件以及提交更改。 您与协作者在操作 wiki 时可以创建分支，但只有推送到默认分支的更改才会生效并供读者使用。

### 关于 wiki 文件名

文件名确定 wiki 页面的标题，文件扩展名确定 wiki 内容如何呈现。

Wiki 使用[我们的开源 Markup 库](https://github.com/github/markup)转换标记，它根据文件扩展名确定要使用的转换器。 例如，如果您将文件命名为 *foo.md* 或 *foo.markdown*，wiki 将会使用 Markdown 转换器，而名为 *foo.textile* 的文件将使用 Textile 转换器。

不要在 wiki 页面标题中使用以下字符：`\ / : * ? " < > |`。 有些操作系统的用户不能使用包含这些字符的文件名。 请确保使用符合扩展名的标记语言编写内容，否则您的内容无法正确呈现。
