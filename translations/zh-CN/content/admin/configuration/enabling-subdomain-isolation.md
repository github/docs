---
title: 启用子域隔离
intro: '您可以设置子域隔离，将用户提供的内容与 {% data variables.product.prodname_ghe_server %} 设备的其他部分安全地隔离。'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation/
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 关于子域隔离

子域隔离可以减少跨站脚本和其他相关漏洞。 更多信息请参阅 Wikipedia 上的“[跨站脚本](http://en.wikipedia.org/wiki/Cross-site_scripting)”。 我们强烈建议在 {% data variables.product.product_location %} 上启用子域隔离。

启用子域隔离后，{% data variables.product.prodname_ghe_server %} 会以子域替代多个路径。

{% if currentVersion == "enterprise-server@2.22" %}
要将 Docker 与
{% data variables.product.prodname_registry %} 一起使用，您还必须启用子域隔离。 更多信息请参阅“[配置 Docker 与 {% data variables.product.prodname_registry %} 一起使用](/enterprise/{{ currentVersion }}/user/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)”。

{% data reusables.package_registry.packages-ghes-release-stage %}
|
{% endif %}
| 未使用子域隔离的路径                                                                                                                                 | 使用子域隔离的路径                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `http(s)://HOSTNAME/assets/`                                                                                                               | `http(s)://assets.HOSTNAME/`                                                                   |
| `http(s)://HOSTNAME/avatars/`                                                                                                              | `http(s)://avatars.HOSTNAME/`                                                                  |
| `http(s)://HOSTNAME/codeload/`                                                                                                             | `http(s)://codeload.HOSTNAME/`                                                                 |
| `http(s)://HOSTNAME/gist/`                                                                                                                 | `http(s)://gist.HOSTNAME/`                                                                     |
| `http(s)://HOSTNAME/media/`                                                                                                                | `http(s)://media.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/pages/`                                                                                                                | `http(s)://pages.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/raw/`                                                                                                                  | `http(s)://raw.HOSTNAME/`                                                                      |
| `http(s)://HOSTNAME/render/`                                                                                                               | `http(s)://render.HOSTNAME/`                                                                   |
| `http(s)://HOSTNAME/reply/`                                                                                                                | `http(s)://reply.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/uploads/`                                                                                                              | `http(s)://uploads.HOSTNAME/`     |{% if currentVersion == "enterprise-server@2.22" %}
| 不适用，带有 {% data variables.product.prodname_registry %} 的 Docker 将无法在 {% data variables.product.prodname_registry %} 2.22 测试版禁用子域隔离的情况下工作。 | `http(s)://docker.HOSTNAME/` |{% endif %}                                                      |{% if currentVersion ver_gt "enterprise-server@2.22" %}
| `https://HOSTNAME/_registry/docker/`                                                                                                       | `http(s)://docker.HOSTNAME/`{% endif %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
| `https://HOSTNAME/_registry/npm/`                                                                                                          | `https://npm.HOSTNAME/`                                                                        |
| `https://HOSTNAME/_registry/rubygems/`                                                                                                     | `https://rubygems.HOSTNAME/`                                                                   |
| `https://HOSTNAME/_registry/maven/`                                                                                                        | `https://maven.HOSTNAME/`                                                                      |
| `https://HOSTNAME/_registry/nuget/`                                                                                                        | `https://nuget.HOSTNAME/`{% endif %}

### 基本要求

{% data reusables.enterprise_installation.disable-github-pages-warning %}

启用子域隔离之前，您必须为新域配置网络设置。

- 指定有效域名作为主机名，而不是指定 IP 地址。 更多信息请参阅“[配置主机名](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-a-hostname)。”

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- 为上文列出的子域设置通配符域名系统 (DNS) 记录或单独的 DNS 记录。 建议为指向您的服务器 IP 地址的 `*.HOSTNAME` 创建一条 A 记录，从而无需为各个子域创建多条记录。
- 为 `*.HOSTNAME` 获取一个使用者可选名称 (SAN) 同时适用于 `HOSTNAME` 和通配符域 `*.HOSTNAME` 的通配符传输层安全 (TLS) 证书。 例如，如果您的主机名为 `github.octoinc.com`，则获取一个通用名值设为 `*.github.octoinc.com`、SAN 值同时设为 `github.octoinc.com` 和 `*.github.octoinc.com` 的证书。
- 在设备上启用 TLS。 更多信息请参阅“[配置 TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls/)”。

### 启用子域隔离

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. 选择 **Subdomain isolation (recommended)**。 ![启用子域隔离的复选框](/assets/images/enterprise/management-console/subdomain-isolation.png)
{% data reusables.enterprise_management_console.save-settings %}
