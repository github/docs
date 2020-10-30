---
title: 使用 Jekyll 创建 GitHub Pages 站点
intro: '您可以使用 Jekyll 在新仓库或现有仓库中创建 {% data variables.product.prodname_pages %} 站点。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
permissions: '拥有仓库管理员权限的人员可以使用 Jekyll 创建 {% data variables.product.prodname_pages %} 站点。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 基本要求

必须安装 Jekyll 和 Git 后才可使用 Jekyll 创建 {% data variables.product.prodname_pages %} 站点。 更多信息请参阅 Jekyll 文档中的[安装](https://jekyllrb.com/docs/installation/)和“[设置 Git](/articles/set-up-git)”。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### 为站点创建仓库

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

### 创建站点

{% data reusables.pages.must-have-repo-first %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 如果您还没有本地版仓库，请导航到您想要存储站点源文件的位置，将 _PARENT-FOLDER_ 替换为要包含仓库文件夹的文件夹。
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. 如果尚未初始化本地 Git 仓库，请将 _REPOSITORY-NAME_ 替换为仓库名称。
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Change directories to the repository.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 如果选择从 `gh-pages` 分支发布站点，则创建并检出 `gh-pages` 分支。
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages and switches to the gh-pages branch
 ```
 7. 要创建新的 Jekyll 站点，请使用 `jekyll new` 命令，将 _VERSION_ 替换为当前的 Jekyll 依赖项版本。 更多信息请参阅 {% data variables.product.prodname_pages %} 网站上的“[依赖项版本](https://pages.github.com/versions/)”。
    - 如已安装 Bundler：
      ```shell
      $ bundle exec jekyll <em>VERSION</em> new .
      # Creates a Jekyll site in the current directory
      ```
    - 如果尚未安装 Bundler：
     ```shell
     $ jekyll <em>VERSION</em> new .
     # Creates a Jekyll site in the current directory
     ```
8. 打开已创建的 Gemfile，并按照 Gemfile 注释中的说明使用 {% data variables.product.prodname_pages %}。 ![更新 Gemfile 的说明](/assets/images/help/pages/gemfile-instructions.png)
9. 更新 `gem "github-pages"` 行，使该行类似如下，将 _VERSION_ 替换为 `github-pages` 的当前依赖项版本。 更多信息请参阅 {% data variables.product.prodname_pages %} 网站上的“[依赖项版本](https://pages.github.com/versions/)”。
```shell
gem "github-pages", "~> <em>VERSION</em>", group: :jekyll_plugins
```
10. 保存并关闭 Gemfile。
11. （可选）在本地测试您的站点。 更多信息请参阅“[使用 Jekyll 在本地测试 {% data variables.product.prodname_pages %} 站点](/articles/testing-your-github-pages-site-locally-with-jekyll)”。
12. 将您的 {% data variables.product.product_name %} 仓库添加为远程，使用您的设备的主机名替换 {% if currentVersion != "free-pro-team@latest" %}_HOSTNAME_，{% endif %} _USER_ 替换为拥有该仓库的帐户{% if currentVersion != "free-pro-team@latest" %}，{% endif %}并且 _REPOSITORY_ 替换为仓库名称。
```shell
{% if currentVersion == "free-pro-team@latest" %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. 将仓库推送到 {% data variables.product.product_name %}，_BRANCH_ 替换为您所操作的分支的名称。
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### 后续步骤

要向站点添加新页面或帖子，请参阅“[使用 Jekyll 添加内容到 {% data variables.product.prodname_pages %} 站点](/articles/adding-content-to-your-github-pages-site-using-jekyll)”。

{% data reusables.pages.add-jekyll-theme %}更多信息请参阅“[使用 Jekyll 添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”。
