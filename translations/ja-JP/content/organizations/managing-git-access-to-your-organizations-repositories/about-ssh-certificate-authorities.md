---
title: SSH 認証局について
intro: SSH認証局を利用すると、メンバーがGitでリソースにアクセスするときに使用するSSH証明書を、OrganizationまたはEnterpriseアカウントが発行できます。
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH認証局
---

## SSH 認証局について

SSH証明書とは、1つのSSHキーでもうひとつのSSHキーに署名する仕組みです。 SSH認証局 (CA) を利用して、Organizationのメンバーに署名済みのSSH証明書を提供すると、EnterpriseアカウントまたはOrganizationにCAを追加できるため、Organizationのメンバーはそれぞれの証明書を使用してOrganizationのリソースにアクセスできるようになります。

{% data reusables.organizations.ssh-ca-ghec-only %}

SSH CAをOrganizationまたはEnterpriseアカウントに追加すると、そのCAを利用して、OrganizationメンバーのクライアントSSH証明書に署名できるようになります。 Organizationのメンバーは、署名済みの証明書を使用して、GitでOrganizationのリポジトリにアクセスできます (ただし、自分のOrganizationのリポジトリに限る)。 あるいは、メンバーに対してOrganizationのリソースにアクセスする際にSSH証明書を使うよう求めることもできます。 詳しい情報については「[OrganizationのSSH認証局の管理](/articles/managing-your-organizations-ssh-certificate-authorities)」及び「[Enterpriseでのセキュリティ設定のポリシーの施行](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)」を参照してください。

たとえば、毎朝新しい証明書を開発者に発行する内部システムなども構築できます。 各開発者は、その日の証明書を使用して、{% data variables.product.product_name %}でOrganizationのリポジトリを扱うことができます。 1日の最後になると証明書は自動的に失効するので、証明書が侵害されることがあっても、リポジトリは保護されます。

{% ifversion ghec %}
SAMLシングルサインオンが強制されている場合でも、Organizationのメンバーはそれぞれの署名済み証明書を認証に使用できます。 SSH証明書を必須にしている場合を除き、Organizationのメンバーは他の認証方法、たとえばユーザー名とパスワード、個人アクセストークン、独自のSSHキーなどを使用して、GitのOrganizationリソースにアクセスし続けることができます。
{% endif %}

メンバーは、自分の個人アカウントが所有するリポジトリのフォークにアクセスする際に、自分の証明書を使うことはできなくなります。

## SSH証明書を使用するSSH URLについて

OrganizationがSSH証明書を必要とするなら、認証エラーを回避するために、OrganizationのメンバーはSSH経由でGitの操作をする際にOrganization IDを含む特別なURLを使わなければなりません。 この特別なURLを使うと、クライアントとサーバーは認証の際にメンバーのコンピュータが使うキーに関して簡単にネゴシエーションできるようになります。 メンバーが`git@github.com`で始まる通常のURLを使うと、SSHクライアントは間違ったキーを提供し、操作が失敗することになるかもしれません。

リポジトリへの読み取りアクセスを持つ人は、リポジトリのメインページの**Code**ドロップダウンメニューを選択し、続いて**Use SSH（SSHを使用）**をクリックしてください。

OrganizationがSSH証明書を必要としない場合は、メンバーは自分のSSHキーか、他の認証方法を使い続けることができます。 この場合は、特別なURLでも、`git@github.com`で始まる通常のURLでも動作します。

## 証明書の発行

各証明書を発行する際には、その証明書がどの{% data variables.product.product_name %}ユーザー用かを示すエクステンションを指定する必要があります。 たとえば、OpenSSH の`ssh-keygen` コマンドを以下のように使用することができます。_KEY-IDENTITY_ は特定のキー IDに、_USERNAME_ は {% data variables.product.product_name %} ユーザ名に置き換えます。 あなたが生成する証明書は、あなたのOrganizationのリソースに対してそのユーザの代わりに振る舞うことを認可されるようになります。 証明書を発行する前に、そのユーザのアイデンティティを必ず検証してください。

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**警告**: 証明書が署名され、発行されると、その証明書を失効させることはできません。 必ず-`V`フラグを使い、証明書の有効期限を設定してください。そうしないと、その証明書は無期限に使用できることになります。

{% endwarning %}

SSH を使用して複数の {% data variables.product.company_short %} 製品にアクセスするユーザに証明書を発行するには、2 つのログイン機能拡張を含めて、各製品のユーザ名を指定できます。 たとえば、次のコマンドは、{% data variables.product.prodname_ghe_cloud %} のユーザアカウントに対して _USERNAME-1_ の証明書を発行し、_HOSTNAME_ の {% data variables.product.prodname_ghe_managed %} または {% data variables.product.prodname_ghe_server %} のユーザアカウントに対して _USERNAME-2_ の証明書を発行します。

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

`source-address` エクステンションを使用して、Organization のリソースに Organization のメンバーがアクセスできる IP アドレスを制限できます。 エクステンションには、CIDR 表記を用いて特定の IP アドレスまたは一定範囲の IPアドレスを指定できます。 コンマで値を区切ることで、複数のアドレスや範囲を指定できます。 詳しい情報については、Wikipedia の「[Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)」を参照してください。

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
