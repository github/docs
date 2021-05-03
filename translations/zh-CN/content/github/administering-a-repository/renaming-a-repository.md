---
title: 重命名仓库
intro: 如果您是组织所有者或拥有仓库的管理员权限，则可以重命名仓库。
redirect_from:
  - /articles/renaming-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

重命名仓库时，除项目网站 URL 外，所有现有信息将自动重定向到新名称，包括：

* 议题
* Wikis
* 星标
* 关注者

有关项目网站的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

除了重定向 Web 流量以外，所有目标为之前位置的 `git clone`、`git fetch` 或 `git push` 操作都将继续正常工作，如同在新位置进行一样。 不过，为了减少混淆，我们强烈建议将任何现有的本地克隆更新为指向新仓库 URL。 您可以通过在命令行中使用 `git remote` 来执行此操作：

```shell
$ git remote set-url origin <em>new_url</em>
```

更多信息请参阅“[管理远程仓库](/github/getting-started-with-github/managing-remote-repositories)”。

{% if currentVersion == "free-pro-team@latest" %}

如果计划重命名具有 {% data variables.product.prodname_pages %} 网站的仓库，建议对网站使用自定义域。 这可确保重命名仓库不会影响网站的 URL。 更多信息请参阅“[关于自定义域和 {% data variables.product.prodname_pages %} 网站](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)”。

{% endif %}

{% tip %}

**提示：**{% data reusables.organizations.owners-and-admins-can %}重命名仓库。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% endtip %}

{% warning %}

**警告**： 如果将来在您的帐户下创建新仓库，请不要再用重命名仓库的原始名称。 否则到重命名的仓库的重定向将会中断。

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 **Repository Name（仓库名称）**标题下，输入仓库的新名称。 ![仓库重命名](/assets/images/help/repository/repository-name-change.png)
4. 单击 **Rename（重命名）**。 您已完成！
