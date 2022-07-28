---
title: Organizationのコミットサインオフポリシーの管理
intro: 'Organizationが所有するリポジトリにおいて、{% data variables.product.product_name %}のWebインターフェースから作成されるすべてのコミットで、ユーザが自動的にサインオフすることを要求できます。'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: コミットサインオフポリシーの管理
---

## コミットサインオフについて

コミットがリポジトリを管理しているルールとライセンスの下で編集されていることを確認するために、多くのOrganizationが開発者に対してすべてのコミットにサインオフすることを求めています。 Organizationがコミットのサインオフを要求しているなら、{% data variables.product.product_name %}のWebインターフェースを通じたユーザのコミットに対して強制的なコミットサインオフを有効化することによって、サインオフをコミットプロセスのシームレスな一部にすることができます。 強制的なコミットサインオフをOrganizationで有効にすると、{% data variables.product.product_name %}のWebインターフェースを使ってそのOrganization内のリポジトリに対して行われたすべてのコミットは、自動的にコミットの作者によってサインオフされます。

リポジトリへの管理アクセスを持つ人は、リポジトリレベルでも強制的なコミットサインオフを有効化できます。 詳しい情報については「[リポジトリのコミットサインオフポリシーの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)」を参照してください。

{% data reusables.repositories.commit-signoffs %}

## Organizationの強制的なコミットサインオフの管理

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
1. **Require contributors to sign off on web-based commits（コントリビューターにWebベースのコミット時のサインオフを要求する）**を選択もしくは選択解除してください。 ![Webベースのコミット時のサインオフをコントリビューターに要求のスクリーンショット](/assets/images/help/organizations/require-signoffs.png)
