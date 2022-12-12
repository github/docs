---
title: codespace の基本イメージを制限する
shortTitle: Restrict base image
intro: Organization 内で作成された新しい codespace に使用できる基本イメージを指定できます。
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: f17bb20aa919ca94cd13e14a6f770cea23042b2b
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188281'
---
## 概要

codespace を作成すると、リモート仮想マシンに Docker コンテナーが自動的に作成されます。 Docker コンテナーは Docker イメージから作成されます。 イメージは実質的に Docker コンテナーのテンプレートであり、codespace によって提供される結果の環境の多くの側面を決定します。

リポジトリの開発コンテナー構成で指定することで、codespace に使用するイメージを選ぶことができます。 これを行うには、たとえば、`devcontainer.json` ファイルの `image` プロパティを使います。

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

詳しくは、containers.dev の[開発コンテナーの仕様](https://containers.dev/implementors/json_reference/)に関するページを参照してください。

リポジトリの開発コンテナー構成でイメージを指定しない場合は、既定のイメージが使用されます。 既定のイメージには、一般的な言語と一般的に使用されるツールのランタイム バージョンが多数含まれています。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)に関するページをご覧ください。

Organization の所有者は、Organization 内で作成された codespace に使用できるイメージを制限するポリシーを追加できます。

開発コンテナー構成で指定されたイメージが許可されているイメージの 1 つと一致しない場合、ユーザーがリポジトリの codespace を作成しようとすると、次のメッセージが表示されます。

> codespace を作成できませんでした: 基本イメージ 'DETAILS FROM DEV CONTAINER CONFIGURATION' は、Organization 管理者によって設定された Organization ポリシーに基づいて許可されていません。

{% note %}

**注**: 
* 基本イメージ ポリシーは、codespace が作成された場合にのみ適用されます。 現在、コンテナーをリビルドする場合は適用されません。 これは、今後のリリースで変更されます。 詳しくは、「[codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace)」を参照してください。
* 基本イメージ ポリシーは、既定のイメージ、またはコンテナーのリビルドを妨げる開発コンテナー構成にエラーが発生した場合に、codespace の復旧に使用されるイメージには適用されません。 

{% endnote %}

### Organaization 全体およびリポジトリ固有のポリシーの設定

ポリシーを作成するときに、ポリシーを Organaization 内のすべてのリポジトリに適用するか、指定されたリポジトリにのみ適用するかを選択します。 Organaization 全体のポリシーを設定する場合は、個々のリポジトリに対して設定するポリシーはすべて、Organaization レベルに設定した制限に収まるようにする必要があります。 ポリシーを追加すると、イメージの選択肢は、広くはならず、より一層制限されます。

たとえば、基本イメージを指定した 10 個のイメージのいずれかに制限する Organization 全体のポリシーを作成できます。 その後、リポジトリ A のポリシーを設定して、Organization レベルで指定された 2 つのイメージのサブセットのみにイメージを制限できます。 リポジトリ A に追加のイメージを指定しても、これらのイメージは Organization レベルのポリシーで指定されていないため、効果はありません。 Organization 全体のポリシーを追加する場合は、Organization 内のどのリポジトリにも使用できるように、イメージの種類を最多の選択肢に設定する必要があります。 その後、リポジトリ固有のポリシーを追加することで、選択肢をさらに制限できます。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 許可されるイメージを定義するポリシーの追加

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **[制約の追加]** をクリックし、 **[基本イメージ]** を選びます。

   ![[制約の追加] ドロップダウンメニューのスクリーンショット。](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. 制約を編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。

   ![制約を編集するための鉛筆アイコンのスクリーンショット](/assets/images/help/codespaces/edit-image-constraint.png)

1. [許可された値] フィールドに、許可するイメージの完全な URL を入力します。

   ![[許可された値] フィールドのエントリのスクリーンショット](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **注**: 開発コンテナー構成で指定された値と完全に一致するイメージ URL を指定する必要があります。

   {% endnote %}

1. [プラス] ボタン ({% octicon "plus" aria-label="The plus icon" %}) をクリックして値を追加します。
1. 必要に応じて、先ほどの 2 つの手順を繰り返して、さらにイメージ URL を追加します。
{% data reusables.codespaces.codespaces-policy-targets %}
1. ポリシーに別の制約を追加する場合は、 **[制約の追加]** をクリックして、別の制約を選びます。 その他の制約については、次を参照してください。
   * 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
   * [転送されるポートの可視性を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [アイドル タイムアウトの期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. ポリシーへの制約の追加が終わったら、 **[保存]** をクリックします。

ポリシーは、Organization に請求できる新しい codespace を誰かが作成しようとしたときに適用されます。 基本イメージ制約は、アクティブまたは停止中の既存の codespace には影響しません。

## ポリシーを編集する

既存のポリシーを編集できます。 たとえば、ポリシーの制約を追加または削除できます。

1. [codespace ポリシー] ページを表示します。 詳しくは、「[許可されたイメージを定義するためのポリシーの追加](#adding-a-policy-to-define-the-allowed-images)」を参照してください。
1. 編集するポリシーの名前をクリックします。
1. "基本イメージ" 制約の横にある鉛筆アイコン ({% octicon "pencil" aria-label="The edit icon" %}) をクリックします。
1. イメージ URL を追加または削除します。
1. **[保存]** をクリックします。

## ポリシーを削除する 

1. [codespace ポリシー] ページを表示します。 詳しくは、「[許可されたイメージを定義するためのポリシーの追加](#adding-a-policy-to-define-the-allowed-images)」を参照してください。
1. 削除するポリシーの右側にある削除ボタンをクリックします。

   ![ポリシーの [削除] ボタンのスクリーンショット](/assets/images/help/codespaces/policy-delete.png)
