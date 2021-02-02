---
title: 新しいリリースへのアップグレードについて
shortTitle: アップグレードについて
intro: 'Enterprise を新しくリリースされたバージョンにアップグレードすると、新機能を備え、バグが修正された {% data variables.product.product_name %} を利用できます。'
versions:
  enterprise-server: '>=3.0'
---

{% data variables.product.product_name %} は常に改善されており、メジャーリリースとマイナーリリースで新機能とバグ修正が導入されています。

通常、メジャーリリースは四半期ごとに行われ、新機能と機能のアップグレードが含まれます。

{% data variables.product.prodname_ghe_server %} 3.0 以降、すべてのメジャーリリースは少なくとも 1 つのリリース候補から始まります。 リリース候補は、完全な機能一式を備えたメジャーリリースとして提案されています。 リリース候補には、実際に {% data variables.product.product_name %} を使用している顧客からのフィードバックを通じてのみ見つけることができるバグまたは問題がある可能性があります。

リリース候補が利用可能になり次第、リリース候補をテストすることで、最新の機能に早期アクセスできます。 サポートされているバージョンからリリース候補にアップグレードでき、リリース時にリリース候補からそれ以降のバージョンにアップグレードできます。 リリースが一般に利用可能になり次第、リリース候補を実行している環境をアップグレードする必要があります。 詳しい情報については、「[アップグレード要件](/admin/enterprise-management/upgrade-requirements)」を参照してください。

リリース候補は、テスト環境またはステージング環境に展開する必要があります。 リリース候補をテストした際は、サポートに連絡してフィードバックをご提供ください。 詳しい情報については、「[{% data variables.contact.github_support %} での操作](/admin/enterprise-support)」を参照してください。

フィードバックを活用して、バグ修正やその他の必要な変更を適用し、安定した本番リリースを作成します。 新しいリリース候補ごとに、以前のバージョンで見つかった問題のバグ修正が追加されます。 リリースが広く普及可能になったら、{% data variables.product.company_short %} は安定した本番リリースを公開します。

{% warning %}

**Warning**: 新しいメジャーリリースにアップグレードすると、数時間のダウンタイムが発生し、その間、どのユーザも Enterprise を使用できなくなります。 Enterprise 設定または REST API を使用して、グローバルアナウンスバナーを公開することにより、ダウンタイムについてユーザに通知できます。 詳しい情報については、「[インスタンス上でのユーザメッセージをカスタマイズする](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)」および「[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)」を参照してください。

{% endwarning %}

マイナーリリースは、ホットパッチとバグ修正のみで構成されており、より頻繁に発生します。 マイナーリリースは通常、最初のリリース時に利用可能になっています。リリース候補はありません。 マイナーリリースへのアップグレードには、通常 5 分未満のダウンタイムが発生します。

Enterprise を新しいリリースにアップグレードするには、「[リリースノート](/enterprise-server/admin/release-notes)」および「[{% data variables.product.prodname_ghe_server %} へのアップグレード](/admin/enterprise-management/upgrading-github-enterprise-server)」を参照してください。

### 参考リンク

- `github/roadmap` リポジトリの [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %})
