---
title: About upgrades to new releases
shortTitle: About upgrades
intro: 'You can benefit from new features and bug fixes for {% data variables.product.product_name %} by upgrading your enterprise to a newly released version.'
versions:
  enterprise-server: '>=3.0'
---

{% data variables.product.product_name %} is constantly improving, with new functionality and bug fixes introduced through major and minor releases.

Major releases include new functionality and feature upgrades and typically occur quarterly.

Starting with {% data variables.product.prodname_ghe_server %} 3.0, all major releases begin with at least one release candidate. Release candidates are proposed major releases, with a complete feature set. There may be bugs or issues in a release candidate which can only be found through feedback from customers actually using {% data variables.product.product_name %}.

You can get early access to the latest features by testing a release candidate as soon as the release candidate is available. You can upgrade to a release candidate from a supported version and can upgrade from the release candidate to later versions when released. You should upgrade any environment running a release candidate as soon as the release is generally available. For more information, see "[Upgrade requirements](/admin/enterprise-management/upgrade-requirements)."

Release candidates should be deployed on test or staging environments. As you test a release candidate, please provide feedback by contacting support. For more information, see "[Working with {% data variables.contact.github_support %}](/admin/enterprise-support)."

We'll use your feedback to apply bug fixes and any other necessary changes to create a stable production release. Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable production release.

{% warning %}

**Warning**: The upgrade to a new major release will cause a few hours of downtime, during which none of your users will be able to use the enterprise. You can inform your users about downtime by publishing a global announcement banner, using your enterprise settings or the REST API. For more information, see "[Customizing user messages on your instance](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" and "[{% data variables.product.prodname_enterprise %} administration](/rest/reference/enterprise-admin#announcements)."

{% endwarning %}

Minor releases, which consist of hot patches and bug fixes only, happen more frequently. Minor releases are generally available when first released, with no release candidates. Upgrading to a minor release typically requires less than five minutes of downtime.

To upgrade your enterprise to a new release, see "[Release notes](/enterprise-server/admin/release-notes)" and "[Upgrading {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)."

### 参考リンク

- `github/roadmap` リポジトリの [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %})
