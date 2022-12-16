---
title: Subdomain Isolationの有効化
intro: 'Subdomain Isolation をセットアップすれば、ユーザーが提供したコンテンツを {% data variables.product.prodname_ghe_server %} アプライアンスの他の部分から安全に分離できるようになります。'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193098'
---
## Subdomain Isolationについて

Subdomain Isolationは、クロスサイトスクリプティングや関連するその他の脆弱性を緩和します。 詳しくは、Wikipedia の「[クロスサイト スクリプティング](http://en.wikipedia.org/wiki/Cross-site_scripting)」をご覧ください。 {% data variables.location.product_location %}で Subdomain Isolation を有効にすることを強くお勧めします。

Subdomain Isolation が有効な場合、{% data variables.product.prodname_ghe_server %} はいくつかのパスをサブドメインで置き換えます。 Subdomain Isolation を有効にした後は、ユーザーが提供した何らかのコンテンツに対する以前のパス (`http(s)://HOSTNAME/raw/` など) にアクセスしようとすると、`404` エラーが返される場合があります。

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| Subdomain Isolationなしのパス  | Subdomain Isolationされたパス   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | 非サポート | `https://containers.HOSTNAME/` | {%- endif %}

## 前提条件

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Subdomain Isolationを有効化する前に、新しいドメインに合わせてネットワークを設定しなければなりません。

- 有効なドメイン名を、IP アドレスではなくホスト名として指定します。 詳しくは、「[ホスト名の設定](/enterprise/admin/guides/installation/configuring-a-hostname)」をご覧ください。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- 上記のサブドメインに対して、ワイルドカードのドメインネームシステム (DNS) レコードまたは個々の DNS レコードをセットアップします。 サブドメインごとに複数のレコードを作成する必要がないように、サーバーの IP アドレスを指す `*.HOSTNAME` の A レコードを作成することをお勧めします。
- `HOSTNAME` とワイルドカード ドメイン `*.HOSTNAME` の両方にサブジェクトの別名 (SAN) を使って、`*.HOSTNAME` に対するワイルドカード トランスポート層セキュリティ (TLS) 証明書を取得します。 たとえば、ホスト名が `github.octoinc.com` の場合は、共通名の値を `*.github.octoinc.com` に設定し、SAN の値を `github.octoinc.com` と `*.github.octoinc.com` の両方に設定して、証明書を取得します。
- アプライアンスで TLS を有効にします。 詳細については、「[TLS の構成](/enterprise/admin/guides/installation/configuring-tls/)」を参照してください。

## Subdomain Isolationの有効化

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. **[Subdomain isolation (recommended)]\(Subdomain Isolation (推奨)\)** を選びます。
  ![Subdomain Isolation を有効にするチェックボックス](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
