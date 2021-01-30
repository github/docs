---
title: 为企业启用 GitHub Packages
intro: '您可以通过启用功能、配置第三方存储、配置您想要支持的生态系统以及更新您的 TLS 证书，开始使用 {% data variables.product.prodname_registry %}。'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

1. 在您被邀请加入测试版后，要为实例启用 {% data variables.product.prodname_registry %}，请按照客户代表的指示操作。
1. 为企业软件包配置第三方存储。 更多信息请参阅“[为软件包配置第三方存储](/enterprise/admin/packages/configuring-third-party-storage-for-packages)”。
1. 为企业启用或禁用每个包生态系统。 更多信息请参阅“[为企业配置软件包支持](/enterprise/admin/packages/configuring-packages-support-for-your-enterprise)”。
1. 如果您的实例启用了子域隔离，这需要 {% data variables.product.prodname_registry %} 与 Docker 一起使用，请创建并上传 TLS 证书以允许您想要使用的每个生态系统的包主机 URL，例如 `npm.HOSTNAME`。 确保每个软件包主机 URL 包含 `https:///`。

    您可以手动创建证书或使用 Let's Encrypt（让我们加密）。 如果您已经使用 Let's Encrypt（让我们加密），您必须在启用 {% data variables.product.prodname_registry %} 后申请新的 TLS 证书。 有关包主机 URL 的更多信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。 有关将 TLS 证书上载到 {% data variables.product.product_name %} 的更多信息，请参阅“[配置 TLS](/enterprise/admin/configuration/configuring-tls)”。
