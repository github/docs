---
title: 关于 GitHub Pages
intro: '您可以使用 {% data variables.product.prodname_pages %} 直接从 {% data variables.product.product_name %} 仓库托管关于自己、您的组织或您的项目的站点。'
redirect_from:
  - /articles/what-are-github-pages/
  - /articles/what-is-github-pages/
  - /articles/user-organization-and-project-pages/
  - /articles/using-a-static-site-generator-other-than-jekyll/
  - /articles/mime-types-on-github-pages/
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio/
  - /articles/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于 {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} 是一项静态站点托管服务，它直接从 {% data variables.product.product_name %} 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。 您可以在 [{% data variables.product.prodname_pages %} 示例集合](https://github.com/collections/github-pages-examples)中查看 {% data variables.product.prodname_pages %} 站点的示例。

{% if currentVersion == "free-pro-team@latest" %}
You can host your site on
{% data variables.product.prodname_dotcom %}'s `github.io` domain or your own custom domain. 更多信息请参阅“[对 {% data variables.product.prodname_pages %} 使用自定义域](/articles/using-a-custom-domain-with-github-pages)”。
{% endif %}

要开始使用，请参阅“[创建 {% data variables.product.prodname_pages %} 站点](/articles/creating-a-github-pages-site)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
Organization owners can disable the publication of
{% data variables.product.prodname_pages %} sites from the organization's repositories. 更多信息请参阅“[为组织禁止发布 {% data variables.product.prodname_pages %} 站点](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)”。
{% endif %}

### {% data variables.product.prodname_pages %} 站点的类型

有三种类型的 {% data variables.product.prodname_pages %} 站点：项目、用户和组织。 项目站点连接到 {% data variables.product.product_name %} 上托管的特定项目，例如 JavaScript 库或配方集合。 用户和组织站点连接到特定的 {% data variables.product.product_name %} 帐户。

To publish a user site, you must create a repository owned by your user account that's named {% if currentVersion == "free-pro-team@latest" %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. To publish an organization site, you must create a repository owned by an organization that's named {% if currentVersion == "free-pro-team@latest" %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% if currentVersion == "free-pro-team@latest" %}Unless you're using a custom domain, user and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.{% elsif currentVersion == "github-ae@latest" %}User and organization sites are available at `http(s)://pages.<hostname>/<username>` or `http(s)://pages.<hostname>/<organization>`.{% endif %}

项目站点的源文件与其项目存储在同一个仓库中。 {% if currentVersion == "free-pro-team@latest" %}Unless you're using a custom domain, project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`.{% elsif currentVersion == "github-ae@latest" %}Project sites are available at `http(s)://pages.<hostname>/<username>/<repository>/` or `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
有关自定义域如何影响站点 URL 的更多详细，请参阅“[关于自定义域和 {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)”。
{% endif %}

You can only create one user or organization site for each account on {% data variables.product.product_name %}. 项目站点（无论是组织还是用户帐户拥有）没有限制。

{% if enterpriseServerVersions contains currentVersion %}
The URL where your site is available depends on whether subdomain isolation is enabled for
{% data variables.product.product_location %}.

| 站点类型 | 子域隔离已启用 | 子域隔离已禁用 |
| ---- | ------- | ------- |
|      |         |         |
 User | 

`http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` | Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` | Project site owned by user account | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Project site owned by organization account | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

更多信息请参阅“[启用子域隔离](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)”或联系您的站点管理员。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** Repositories using the legacy `<username>.github.com` naming scheme will still be published, but visitors will be redirected from `http(s)://<username>.github.com` to `http(s)://<username>.github.io`. If both a `<username>.github.com` and `<username>.github.io` repository exist, only the `<username>.github.io` repository will be published.

{% endnote %}
{% endif %}

### {% data variables.product.prodname_pages %} 站点的发布来源

{% data variables.product.prodname_pages %} 站点的发布来源是存储站点源文件的分支和文件夹。

{% data reusables.pages.private_pages_are_public_warning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

如果默认发布源在您的仓库中，{% data variables.product.prodname_pages %} 将自动从该源发布站点。 用户和组织站点的默认发布源是仓库默认分支的根目录。 项目站点的默认发布来源是 `gh-pages` 分支的根目录。

如果要将站点的源文件保留在不同的位置，您可以更改站点的发布源。 您可以从仓库的任何分支发布站点 - 从该分支上仓库的根目录 `/` 或从该分支上的 `/docs` 文件夹发布。 更多信息请参阅“[配置 {% data variables.product.prodname_pages %} 站点的发布来源](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)”。

If you choose the `/docs` folder of any branch as your publishing source, {% data variables.product.prodname_pages %} will read everything to publish your site{% if currentVersion == "free-pro-team@latest" %}, including the _CNAME_ file,{% endif %} from the `/docs` folder.{% if currentVersion == "free-pro-team@latest" %} For example, when you edit your custom domain through the {% data variables.product.prodname_pages %} settings, the custom domain will write to `/docs/CNAME`. 有关 _CNAME_ 文件的更多信息，请参阅“[管理 {% data variables.product.prodname_pages %} 站点的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。{% endif %}

{% else %}

用户和组织站点的默认发布来源是 `master` 分支。 如果用户和组织站点的仓库是 `master` 分支，您的站点将从该分支自动发布。 您无法为用户或组织站点选择不同的发布来源。

项目站点的默认发布来源是 `gh-pages` 分支。 如果项目站点的仓库有 `gh-pages` 分支，您的站点将从该分支自动发布。

项目站点也可以从 `master` 分支或 `master` 分支上的 `/docs` 文件夹发布。 要从这些来源之一发布站点，您必须配置不同的发布来源。 更多信息请参阅“[配置 {% data variables.product.prodname_pages %} 站点的发布来源](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)”。

 If you choose the `/docs` folder of the `master` branch as your publishing source, {% data variables.product.prodname_pages %} will read everything to publish your site{% if currentVersion == "free-pro-team@latest" %}, including the _CNAME_ file,{% endif %} from the `/docs` folder.{% if currentVersion == "free-pro-team@latest" %} For example, when you edit your custom domain through the {% data variables.product.prodname_pages %} settings, the custom domain will write to `/docs/CNAME`. 有关 _CNAME_ 文件的更多信息，请参阅“[管理 {% data variables.product.prodname_pages %} 站点的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。{% endif %}

 您不能从任何其他分支发布项目站点，即使默认分支不是 `master` 或 `gh-pages`。

{% endif %}

### 静态站点生成器

{% data variables.product.prodname_pages %} 会发布您推送到仓库的任何静态文件。 您可以创建自己的静态文件或使用静态站点生成器为您构建站点。 您还可以在本地或其他服务器上自定义自己的构建过程。 我们建议使用 Jekyll，它是一个静态站点生成器，内置 {% data variables.product.prodname_pages %} 支持和简化的构建流程。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

默认情况下，{% data variables.product.prodname_pages %} 将使用 Jekyll 来构建您的站点。 如果您想使用除 Jekyll 以外的静态站点生成器，通过在发布来源的根目录中创建一个名为 `.nojekyll` 的空文件来禁用 Jekyll 构建过程，然后按照静态站点生成器的说明在 本地构建站点。

{% data variables.product.prodname_pages %} 不支持服务器端语言，例如 PHP、Ruby 或 Python。

### 使用 {% data variables.product.prodname_pages %} 的指南

{% if currentVersion == "free-pro-team@latest" %}
- 2016 年 6 月 15 日后创建并使用 `github.io` 域的 {% data variables.product.prodname_pages %} 站点通过 HTTPS 提供服务。 如果您在 2016 年 6 月 15 日之前创建站点，您可以为站点的流量启用 HTTPS 支持。 更多信息请参阅“[使用 HTTPS 保护 {% data variables.product.prodname_pages %}](/articles/securing-your-github-pages-site-with-https)”。
- {% data reusables.pages.no_sensitive_data_pages %}
- 您对 {% data variables.product.prodname_pages %} 的使用受 [GitHub 服务条款](/articles/github-terms-of-service/)的约束，包括禁止转售。

#### 使用限制
{% endif %}
{% data variables.product.prodname_pages %} 站点受到以下使用限制的约束：

  - {% data variables.product.prodname_pages %} source repositories have a recommended limit of 1GB.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[What is my disk quota?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - 发布的 {% data variables.product.prodname_pages %} 站点不得超过 1 GB。
{% if currentVersion == "free-pro-team@latest" %}
  - {% data variables.product.prodname_pages %} sites have a *soft* bandwidth limit of 100GB per month.
  - {% data variables.product.prodname_pages %} sites have a *soft* limit of 10 builds per hour.

如果您的站点超出这些使用配额，我们可能无法为您的站点提供服务；或者您可能收到来自 {% data variables.contact.contact_support %} 的礼貌电子邮件，建议降低站点对服务器影响的策略，包括将第三方内容分发网络 (CDN) 置于您的站点前，利用其他 {% data variables.product.prodname_dotcom %} 功能（如发行版）或转用可能更符合您需求的其他托管服务。

#### 禁止使用

{% data variables.product.prodname_pages %} 并非旨在用于或允许用作免费的 Web 托管服务来运行您的在线业务、电子商务站点或主要针对促进商业交易或提供商业软件即服务 (SaaS) 的任何其他网站。

此外，{% data variables.product.prodname_pages %} 站点必须避免：

  - 非法或者我们的[服务条款](/articles/github-terms-of-service/)或[社区指导方针](/articles/github-community-guidelines/)禁止的内容或活动
  - 暴力或有威胁的内容或活动
  - 过多的自动批量活动（例如，垃圾邮件）
  - 危害 GitHub 用户或 GitHub 服务的活动
  - 快速致富计划
  - 性淫秽内容
  - 歪曲您的身份或站点目的的内容
If you have questions about whether your use or intended use falls into these categories, please contact

{% data variables.contact.contact_support %}.
{% endif %}

### {% data variables.product.prodname_pages %} 上的 MIME 类型

MIME 类型是服务器发送到浏览器的标头，提供有关浏览器所请求文件性质和格式的信息。 {% data variables.product.prodname_pages %} 支持数千种文件扩展名中 750 多种 MIME 类型。 支持的 MIME 类型列表从 [mime-db project](https://github.com/jshttp/mime-db) 生成。

虽然无法基于每个文件或每个仓库指定自定义 MIME 类型，但您可以添加或修改 MIME 类型以在 {% data variables.product.prodname_pages %} 上使用。 更多信息请参阅 [mime-db 参与指南](https://github.com/jshttp/mime-db#adding-custom-media-types)。

### 延伸阅读

- {% data variables.product.prodname_learning %} 上的 [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages)
- "[{% data variables.product.prodname_pages %}](/v3/repos/pages)"
