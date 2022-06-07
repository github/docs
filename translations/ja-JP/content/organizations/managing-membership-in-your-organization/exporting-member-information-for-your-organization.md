---
title: Organizationのメンバー情報のエクスポート
intro: Organizationのメンバーに関する情報を、ユーザインターフェースから直接エクスポートできます。
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: メンバー情報のエクスポート
---

Organizationのメンバーに関する情報をエクスポートできます。 これは、Organization内のユーザの監査を行いたい場合に便利です。

エクスポートされる情報には以下が含まれます。
- ユーザ名と表示名の詳細
- ユーザが2要素認証を有効化しているか
- メンバーシップがパブリックかプライベートか
- ユーザがOrganizationのオーナーかメンバーか
- ユーザの最後のアクティビティの日時（関連するアクティビティの完全なリストについては「[休眠ユーザの管理](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)」を参照してください）
- 利用可能な場合はユーザのSAML NameID

メンバー情報は、{% data variables.product.product_name %}のユーザインターフェースから直接、あるいはAPIを使って取得できます。 この記事では、メンバー情報を{% data variables.product.product_name %}内から取得する方法を説明します。

APIに関する詳しい情報については、ユーザに関する[GraphQL API](/graphql/reference/objects#user)及び[REST API](/rest/reference/users)のドキュメンテーションを参照してください。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people-export %}
