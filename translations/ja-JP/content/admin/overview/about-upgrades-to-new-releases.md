---
title: 新しいリリースへのアップグレードについて
shortTitle: アップグレードについて
intro: '{% ifversion ghae %}Your enterprise on {% data variables.product.product_name %} is updated with the latest features and bug fixes on a regular basis by {% data variables.product.company_short %}.{% else %}You can benefit from new features and bug fixes for {% data variables.product.product_name %} by upgrading your enterprise to a newly released version.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---

{% ifversion ghes < 3.3 %}{% data reusables.enterprise.upgrade-ghes-for-features %}{% endif %}

{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} is a fully managed service, so {% data variables.product.company_short %} completes the upgrade process for your enterprise.{% endif %}

Feature releases include new functionality and feature upgrades and typically occur quarterly. {% ifversion ghae %}{% data variables.product.company_short %} will upgrade your enterprise to the latest feature release. Enterprise で予定されているダウンタイムについては、事前に通知されます。{% endif %}

{% ifversion ghes %}

Starting with {% data variables.product.prodname_ghe_server %} 3.0, all feature releases begin with at least one release candidate. Release candidates are proposed feature releases, with a complete feature set. リリース候補には、実際に {% data variables.product.product_name %} を使用している顧客からのフィードバックを通じてのみ見つけることができるバグまたは問題がある可能性があります。

リリース候補が利用可能になり次第、リリース候補をテストすることで、最新の機能に早期アクセスできます。 サポートされているバージョンからリリース候補にアップグレードでき、リリース時にリリース候補からそれ以降のバージョンにアップグレードできます。 リリースが一般に利用可能になり次第、リリース候補を実行している環境をアップグレードする必要があります。 詳しい情報については、「[アップグレード要件](/admin/enterprise-management/upgrade-requirements)」を参照してください。

リリース候補は、テスト環境またはステージング環境に展開する必要があります。 リリース候補をテストした際は、サポートに連絡してフィードバックをご提供ください。 詳しい情報については、「[{% data variables.contact.github_support %} での操作](/admin/enterprise-support)」を参照してください。

フィードバックを活用して、バグ修正やその他の必要な変更を適用し、安定した本番リリースを作成します。 新しいリリース候補ごとに、以前のバージョンで見つかった問題のバグ修正が追加されます。 リリースが広く普及可能になったら、{% data variables.product.company_short %} は安定した本番リリースを公開します。

{% endif %}

{% warning %}

**Warning**: The upgrade to a new feature release will cause a few hours of downtime, during which none of your users will be able to use the enterprise. Enterprise 設定または REST API を使用して、グローバルアナウンスバナーを公開することにより、ダウンタイムについてユーザに通知できます。 詳しい情報については、「[インスタンス上でのユーザメッセージをカスタマイズする](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)」および「[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)」を参照してください。

{% endwarning %}

{% ifversion ghes %}

Patch releases, which consist of hot patches and bug fixes only, happen more frequently. Patch releases are generally available when first released, with no release candidates. Upgrading to a patch release typically requires less than five minutes of downtime.

Enterprise を新しいリリースにアップグレードするには、「[リリースノート](/enterprise-server/admin/release-notes)」および「[{% data variables.product.prodname_ghe_server %} へのアップグレード](/admin/enterprise-management/upgrading-github-enterprise-server)」を参照してください。 Because you can only upgrade from a feature release that's at most two releases behind, use the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.

{% endif %}

## 参考リンク

- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) in the  `github/roadmap` repository{% ifversion ghae %}
- [ {% data variables.product.prodname_ghe_managed %} のリリースノート](/admin/release-notes)
{% endif %}
