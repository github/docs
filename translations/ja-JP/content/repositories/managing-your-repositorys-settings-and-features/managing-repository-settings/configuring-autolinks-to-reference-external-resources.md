---
title: 外部リソースを参照する自動リンクの構成
intro: JIRAのIssueやZendeskのチケットなど外部リソースへの自動リンクを追加して、ワークフローをスムーズにすることができます。
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748590'
---
## 自動リンクについて

リポジトリへの管理者権限があるユーザーは、自動リンク参照を構成して、外部のサード パーティのサービスに issue、pull request、コミット メッセージ、リリース説明をリンクすることができます。

{% ifversion autolink-reference-alphanumeric %} 自動リンク参照では、英数字を使えるようになりました。 最初に自動リンクが導入されたときは、数字の識別子を使用する外部リソースしか使えませんでした。 カスタム自動リンクが英数字の識別子で機能するようになりました。 数字の識別子のみを認識する旧式の自動リンク参照は廃止となり、"レガシ" ラベルが付きます。

カスタム自動リンクを定義するには、参照プレフィックスとターゲット URL を指定します。
- 参照プレフィックスに重複する名前を付けることはできません。 たとえば、`TICKET` や `TICK` のようなプレフィックスのカスタム自動リンクを 2 つリポジトリに与えることはできません。いずれも文字列 `TICKET123a` に一致するからです。
- ターゲット URL には、`a-z` (大文字と小文字を区別しない)、`0-9`、`-` をサポートする `<num>` 変数が含まれます。
{% endif %}

## 外部リソースを参照する自動リンクの構成

この手順では、外部リソースを参照するように自動リンクを構成する方法を示します。 たとえば、ユーザーから報告されたチケットを Zendesk で追跡している場合、Issue を修正するために開いた pull request でチケット番号を参照できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの [統合] セクションで、 **{% octicon "cross-reference" aria-label="The cross-reference icon" %} [自動リンク参照]** をクリックします。
{% else %}
1. 左側のサイドバーで、 **[自動リンク参照]** をクリックします。
![左サイドバーの [自動リンク参照] タブ](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. **[自動リンク参照の追加]** をクリックします。
![自動リンク参照の情報を入力するボタン](/assets/images/help/repository/add-autolink-reference-details.png)
5. [Reference prefix] に、コラボレータ が外部リソースへの自動リンクを生成する際に使用する短くわかりやすいプレフィックスを入力します。
{% ifversion autolink-reference-alphanumeric %}![外部システムの省略形を入力するフィールド](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![外部システムの省略形を入力するフィールド](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. [Target URL] に、リンク先の外部システムへのリンクを入力します。 `<num>` は参照番号の変数として保持してください。
{% ifversion autolink-reference-alphanumeric %}![外部システムの URL を入力するフィールド](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![外部システムの URL を入力するフィールド](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. **[自動リンク参照の追加]** をクリックします。
{% ifversion autolink-reference-alphanumeric %}{% else %}![自動リンク参照を追加するボタン](/assets/images/help/repository/add-autolink-reference.png){% endif %}
