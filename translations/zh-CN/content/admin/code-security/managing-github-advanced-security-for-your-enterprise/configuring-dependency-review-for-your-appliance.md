---
title: Configuring dependency review for your appliance
shortTitle: 配置依赖项审查
intro: 'To helps users understand dependency changes when reviewing pull requests, you can enable, configure, and disable dependency review for {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
---

{% data reusables.dependency-review.beta %}

## 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

Some additional features, such as license checks, blocking of pull requests, and CI/CD integration, are available with the [dependency review action](https://github.com/actions/dependency-review-action).

## 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisites for dependency review

- A license for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)").{% endif %}

- The dependency graph enabled for the instance. Site administrators can enable the dependency graph via the management console or the administrative shell (see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)").

- {% data variables.product.prodname_github_connect %} enabled to download and synchronize vulnerabilities from the {% data variables.product.prodname_advisory_database %}. This is usually configured as part of setting up {% data variables.product.prodname_dependabot %} (see "[Enabling Dependabot for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)").

## Enabling and disabling dependency review

To enable or disable dependency review, you need to enable or disable the dependency graph for your instance.

更多信息请参阅“[为企业启用依赖关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”。

## Running dependency review using {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

The dependency review action is included in your installation of {% data variables.product.prodname_ghe_server %}. It is available for all repositories that have {% data variables.product.prodname_GH_advanced_security %} and dependency graph enabled.

{% data reusables.dependency-review.dependency-review-action-overview %}

Users run the dependency review action using a {% data variables.product.prodname_actions %} workflow. If you have not already set up runners for {% data variables.product.prodname_actions %}, you must do this to enable users to run workflows. 您可以在仓库、组织或企业帐户级别预配自托管运行器。 For information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

