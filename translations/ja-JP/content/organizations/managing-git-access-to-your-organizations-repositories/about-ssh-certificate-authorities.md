---
title: SSH 認証局について
intro: 'SSH認証局を利用すると、メンバーがGitでリソースにアクセスするときに使用するSSH証明書を、OrganizationまたはEnterpriseアカウントが発行できます。'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

SSH証明書とは、1つのSSHキーでもうひとつのSSHキーに署名する仕組みです。 SSH認証局 (CA) を利用して、Organizationのメンバーに署名済みのSSH証明書を提供すると、EnterpriseアカウントまたはOrganizationにCAを追加できるため、Organizationのメンバーはそれぞれの証明書を使用してOrganizationのリソースにアクセスできるようになります。 詳細については、「[OrganizationのSSH認証局を管理する](/articles/managing-your-organizations-ssh-certificate-authorities)」を参照してください。

SSH CAをOrganizationまたはEnterpriseアカウントに追加すると、そのCAを利用して、OrganizationメンバーのクライアントSSH証明書に署名できるようになります。 Organizationのメンバーは、署名済みの証明書を使用して、GitでOrganizationのリポジトリにアクセスできます (ただし、自分のOrganizationのリポジトリに限る)。 メンバーがOrganizationのリソースにアクセスするときに、SSH証明書の使用を必須にすることができます。.{% if currentVersion == "free-pro-team@latest" %}詳細については、「[Enterprise アカウントでセキュリティ設定を強制する](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)」を参照してください。{% endif %}

たとえば、毎朝新しい証明書を開発者に発行する内部システムなども構築できます。 各開発者は、その日の証明書を使用して、{% data variables.product.product_name %}でOrganizationのリポジトリを扱うことができます。 1日の最後になると証明書は自動的に失効するので、証明書が侵害されることがあっても、リポジトリは保護されます。

各証明書を発行する際には、その証明書がどの{% data variables.product.product_name %}ユーザー用かを示すエクステンションを指定する必要があります。 たとえば、OpenSSH の`ssh-keygen` コマンドを以下のように使用することができます。_KEY-IDENTITY_ は特定のキー IDに、_USERNAME_ は {% data variables.product.product_name %} ユーザ名に置き換えます。

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

SSH を使用して複数の {% data variables.product.company_short %} 製品にアクセスするユーザに証明書を発行するには、2 つのログイン機能拡張を含めて、各製品のユーザ名を指定できます。 たとえば、次のコマンドは、{% data variables.product.prodname_ghe_cloud %} のユーザアカウントに対して _USERNAME-1_ の証明書を発行し、_HOSTNAME_ の {% data variables.product.prodname_ghe_managed %} または {% data variables.product.prodname_ghe_server %} のユーザアカウントに対して _USERNAME-2_ の証明書を発行します。

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

`source-address` エクステンションを使用して、Organization のリソースに Organization のメンバーがアクセスできる IP アドレスを制限できます。 エクステンションには、CIDR 表記を用いて特定の IP アドレスまたは一定範囲の IPアドレスを指定できます。 コンマで値を区切ることで、複数のアドレスや範囲を指定できます。 詳しい情報については、Wikipedia の「[Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)」を参照してください。

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

{% if currentVersion == "free-pro-team@latest" %}

SAMLシングルサインオンが強制されている場合でも、Organizationのメンバーはそれぞれの署名済み証明書を認証に使用できます。 SSH証明書を必須にしている場合を除き、Organizationのメンバーは他の認証方法、たとえばユーザー名とパスワード、個人アクセストークン、独自のSSHキーなどを使用して、GitのOrganizationリソースにアクセスし続けることができます。

{% endif %}

認証エラーを防ぐために、Organization のメンバーは Organization ID を含む特殊な URL を使用し、署名された証明書を使ってリポジトリを複製する必要があります。 リポジトリに対する読み取りアクセス権限がある人は誰でも、リポジトリページでこの URL を確認できます。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。
