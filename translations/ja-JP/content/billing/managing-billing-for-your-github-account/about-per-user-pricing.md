---
title: ユーザごとの価格付けについて
intro: '{% ifversion fpt or ghec %}Organization{% ifversion ghec %}及びEnterprise{% endif %}については、{% else %}{% endif %}請求書は選択したライセンスシート数から始まります。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## ユーザごとの価格付けについて

{% ifversion fpt %}
{% data variables.product.prodname_dotcom_the_website %}上の新しいOrganizationは、{% data variables.product.prodname_free_team %}でパブリック及びオープンソースのプロジェクトを構築するか、ユーザごとの価格付けの有料製品にアップグレードすることができます。 詳しい情報については「[{% data variables.product.company_short %}の製品](/get-started/learning-about-github/githubs-products)」及び「[{% data variables.product.prodname_dotcom %}プランのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

2016 年 5 月 11 日以前に有料プランを使っていた Organization は、既存のリポジトリ単位のプランに留まるか、ユーザごとの価格付けに切り替えることができます。 {% data variables.product.company_short %}は、プランへの強制的な変更の前に12ヶ月間通知します。 プランの切り替えに関する詳しい情報については、「[{% data variables.product.prodname_dotcom %} プランをアップグレードする](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

{% else %}

請求書の基盤は、{% ifversion ghec %}Organizationもしくは{% endif %}Enterpriseで選択した標準ライセンスシート数です。

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

同じユーザが複数のEnterpriseデプロイメントに対して複数のライセンスを消費しないようにするために、ライセンスの使用状況を{% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_ghe_cloud %}環境間で同期できます。 詳しい情報については「[GitHub Enterpriseのライセンスについて](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)」を参照してください。

ライセンスシートに加えて、請求書には{% data variables.product.prodname_GH_advanced_security %}などの他の課金が含まれることがあります。 詳しい情報については「[Enterpriseの支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」を参照してください。
{% endif %}

## ライセンスを消費する人

各ユーザは1つのライセンスを消費し、{% data variables.product.company_short %}は個人をプライマリメールアドレスで識別します。

{% data variables.product.company_short %}は以下の人について請求します。

{%- ifversion ghec %}
- Enterprise中の少なくとも1つのOrganizationのメンバーもしくはオーナーになっているEnterpriseオーナー
{%- endif %}
- オーナーを含むOrganizationのメンバー
- Organizationが所有するプライベート{% ifversion ghec %}もしくはインターナル{% endif %}リポジトリの外部のコラボレータ。フォークは除く
- Organizationオーナーもしくはメンバーになるための招待を保留している人
- Organizationが所有しているプライベート{% ifversion ghec %}もしくはインターナル{% endif %}リポジトリの外部のコラボレータになる招待を保留している人。フォークは除く
{%- ifversion ghec %}
- デプロイする{% data variables.product.prodname_ghe_server %}インスタンス上の各ユーザ
{%- endif %}
- 休眠ユーザ

{% data variables.product.company_short %}は、以下の人には請求しません。

{%- ifversion ghec %}
- Enterprise中の少なくとも1つのOrganizationのメンバーもしくはオーナーになっていないEnterpriseオーナー
- Enterpriseの支払いマネージャー
{%- endif %}
- {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}上の個々の{% endif %}Organizationの支払いマネージャー
- {% ifversion ghec %}Enterpriseもしくは{% endif %}Organizationの支払いマネージャーになるための招待を保留している人
- Organizationが所有しているパブリックリポジトリの外部のコラボレータになるための招待を保留している人
{%- ifversion ghes %}
- 停止されたユーザ
{%- endif %}

{% note %}

**注釈**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

詳しい情報については{% ifversion not fpt %}「[Enterpriseのロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」もしくは{% endif %}「[Organizationのロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% data variables.product.company_short %}は、ユーザアカウントが{% ifversion not fpt %}Enterprise内の複数のOrganizationのメンバーシップあるいは{% endif %}Organizationが所有する複数のリポジトリへのアクセスを持っている場合でも、各{% ifversion not fpt %}メンバーもしくは{% endif %}外部のコラボレータを課金のために1回ずつカウントします。 外部のコラボレータに関する詳しい情報については「[Organization内のリポジトリへの外部のコラボレータの追加](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」を参照してください。

{% ifversion ghes %}サスペンドされたユーザは、シートを消費するライセンスユーザ数の計算の際にカウントされません。 詳しい情報については[ユーザのサスペンドとサスペンドの解除](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)を参照してください。{% endif %}

休眠ユーザはシートライセンスを占有します。{% ifversion ghes %}そのため、休眠ユーザをサスペンドして、ユーザライセンスを解放させることもできます。{% endif %}詳しい情報については「[休眠ユーザの管理](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)」を参照してください。

## プランの変更について

{% ifversion fpt %}

{% data variables.product.prodname_dotcom %}プランは、いつでも変更できます。

### ユーザごとのプランのOrganizationでの変更について

{% endif %}

{% ifversion fpt or ghec %}Organization{% endif %}{% ifversion ghec %}もしくは{% endif %}{% ifversion ghec or ghes %}Enterprise{% endif %}には、いつでもライセンスシートを追加できます。 使用しているよりも多くのシートに支払いをしているなら、シート数を減らすこともできます。{% ifversion fpt %}詳しい情報については「[{% data variables.product.prodname_dotcom %}プランのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」及び「[{% data variables.product.prodname_dotcom %}プランのダウングレード](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)」を参照してください。

プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

Teamのコラボレーション機能をさらにサポートするために、SAMLシングルサインオンや高度な監査のような機能を含む{% data variables.product.prodname_ghe_cloud %}にアップグレードできます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% data variables.product.prodname_ghe_cloud %}のユーザごとの価格付けに関する詳しい情報については[{% data variables.product.prodname_ghe_cloud %}ドキュメンテーション](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)を参照してください。

{% else %}

{% data variables.product.prodname_dotcom_the_website %}でEnterpriseアカウントを使用しており、プランの変更に関する疑問がある場合は、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。

{% endif %}
{% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %}上の個々のOrganizationを使っている場合は、プランをアップグレードもしくはダウングレードできます。 詳しい情報については「[{% data variables.product.prodname_dotcom %}プランのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」もしくは「[{% data variables.product.prodname_dotcom %}プランのダウングレード](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)」を参照してください。 プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

{% endif %}

{% ifversion fpt %}

### リポジトリごとのプランのOrganizationの変更について

レガシーの有料プラン間でのアップグレード及びダウングレードは、Organizationの支払い設定から行えます。 より多くのプライベートリポジトリを持つプランにアップグレードするなら、{% data variables.product.company_short %}は即座にアカウントを新しいプランに移行し、支払いサイクル中に残っている日数に比例した価格の差異を課金します。

プライベートリポジトリ数が少ないレガシーの有料プランにダウングレードする場合、新しいプランは次の支払日に有効になります。 新しいプランで利用できる以上のプライベートリポジトリを持っている場合、新しいプランが有効になった時点でプライベートリポジトリはロックされます。 プライベートリポジトリの数を減らすには、プライベートリポジトリの一部をパブリックにするか、プライベートリポジトリをローカルにクローンして {% data variables.product.prodname_dotcom %} 上のコピーを削除します。

{% endif %}

## 参考リンク

{%- ifversion not fpt %}
- 「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」
{%- endif %}
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
