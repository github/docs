---
title: 使用 Jekyll 创建 GitHub Pages 站点
intro: '您可以使用 Jekyll 在新仓库或现有仓库中创建 {% data variables.product.prodname_pages %} 站点。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129667'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## 先决条件

必须安装 Jekyll 和 Git 后才可使用 Jekyll 创建 {% data variables.product.prodname_pages %} 站点。 有关详细信息，请参阅 Jekyll 文档中的[安装](https://jekyllrb.com/docs/installation/)和“[设置 Git](/articles/set-up-git)”。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## 为站点创建仓库

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## 创建站点

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. 如果还没有本地版存储，请导航到想要存储站点源文件的位置，将 PARENT-FOLDER 替换为要包含存储库文件夹的文件夹。
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. 如果尚未初始化本地 Git 存储库，请将 REPOSITORY-NAME 替换为存储库名称。
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. 将目录更改为仓库。
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} 例如，如果选择从默认分支上的 `docs` 文件夹发布站点，请创建目录并将目录更改为 `docs` 文件夹。
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 如果选择从 `gh-pages` 分支发布站点，请创建并签出 `gh-pages` 分支。
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. 若要创建新 Jekyll 站点，请使用 `jekyll new` 命令：
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. 打开 Jekyll 创建的 Gemfile 文件。
1. 将“#”添加到以 `gem "jekyll"` 开头的行首，以注释禁止此行。
1. 编辑以 `# gem "github-pages"` 开头的行，以添加 `github-pages` gem。 将此行更改为：

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   将 GITHUB-PAGES-VERSION 替换为 `github-pages` gem 的最新支持版本。 可以在以下位置找到这个版本：“[依赖项版本](https://pages.github.com/versions/)”。

   正确版本的 Jekyll 将安装为 `github-pages` gem 的依赖项。
1. 保存并关闭 Gemfile。
1. 从命令行中，运行 `bundle install`。
1. （可选）对 `_config.yml` 文件进行任何必要的编辑。 当仓库托管在子目录时相对路径需要此设置。  有关详细信息，请参阅“[将子文件夹拆分到新存储库中](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)”。
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. （可选）在本地测试您的站点。 有关详细信息，请参阅“[使用 Jekyll 在本地测试 {% data variables.product.prodname_pages %} 站点](/articles/testing-your-github-pages-site-locally-with-jekyll)”。
1. 添加并提交您的工作。
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. 将 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库添加为远程存储库，将 {% ifversion ghes or ghae %}HOSTNAME 替换为企业的主机名，{% endif %} 将 USER 替换为拥有该存储库的帐户{% ifversion ghes or ghae %}，{% endif %}并将 REPOSITORY 替换为存储库名称  。
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. 将存储库推送到 {% data variables.product.product_name %}，将 BRANCH 替换为所操作的分支的名称。
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 后续步骤

若要向站点添加新页面或帖子，请参阅“[使用 Jekyll 添加内容到 {% data variables.product.prodname_pages %} 站点](/articles/adding-content-to-your-github-pages-site-using-jekyll)”。

{% data reusables.pages.add-jekyll-theme %} 有关详细信息，请参阅“[使用 Jekyll 将主题添加到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)”。
