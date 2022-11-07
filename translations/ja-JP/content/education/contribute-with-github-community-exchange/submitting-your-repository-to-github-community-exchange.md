---
title: GitHub Community Exchange へのリポジトリの送信
shortTitle: Submit your repository
intro: '他のユーザーが閲覧または投稿できるように、リポジトリを {% data variables.product.prodname_community_exchange %} に送信できます。'
versions:
  fpt: '*'
ms.openlocfilehash: 404a1a20f3474c4fa48d6fae9e7f6cc5ddf0e647
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111273'
---
## リポジトリの送信について

個人アカウントが所有するパブリック リポジトリのみを {% data variables.product.prodname_community_exchange %} に送信できます。

リポジトリの送信には、次の 3 種類があります。

- **Learn。** プロジェクトをビルドするための手順を共有するリポジトリ。
- **Collaborate。** プロジェクトで作業するコラボレーターを求めるリポジトリ。
- **Learn と Collaborate。** `Learn` と `Collaborate` の組み合わせであるリポジトリ。

リポジトリの送信の種類を選ぶときは、リポジトリの主な目的を検討してください。

プロジェクトのレベルを上げ、他の学生が見つけやすくするには、1 つ以上のトピックと {% data variables.product.prodname_student_pack %} オファーをリポジトリに割り当てる必要があります。 詳細については、「[トピックを使用したリポジトリの分類](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)」を参照してください。

リポジトリが {% data variables.product.prodname_community_exchange %} に送信されると、選んだ目的、トピック、オファーですぐに発行されます。 {% data variables.product.prodname_community_exchange %} コミュニティが、すべてのリポジトリの送信をモデレートします。

### 送信の要件

リポジトリは、送信を受け入れるための最小要件セットを満たしている必要があります。 送信プロセス中に、選んだリポジトリの送信条件が満たされていない場合は、不足しているアイテムが通知されます。

目的が `Learn` の送信の場合、リポジトリには次が必要です。
- 説明です。
- プロジェクトのビルド方法に関するテキストやメディアを含む手順を提供する LEARN.md ファイル。 LEARN.md ファイルによってプロジェクトが小さなコンポーネントに分解され、各ステップの詳細が提供されることで、他の学生があなたの指示に従ってプロジェクトをコーディングできるのが理想的です。
- プロジェクトの詳しい説明を提供する README.md ファイル。
- 他のユーザーがあなたのソース コードでできることとできないことを認識するライセンス。

目的が `Collaborate` の送信の場合、リポジトリには次が必要です。
- 説明です。
- プロジェクトの詳しい説明を提供する README.md ファイル。
- 他のユーザーがあなたのソース コードでできることとできないことを認識するライセンス。
- コラボレーターが作業するための 1 つ以上の issue。
- プロジェクトへのコントリビューションの方法を示す CONTRIBUTING.md ファイル。

`Learn` と `Collaborate` の両方の目的に適したリポジトリの送信は、コミュニティ標準に従うリポジトリです。 詳しくは、「[パブリック リポジトリのコミュニティ プロフィールについて](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)」を参照してください。

## リポジトリの送信

1. {% data variables.product.prodname_global_campus %} ダッシュボードから、{% data variables.product.prodname_community_exchange %} ホーム ページに移動します。
1. リポジトリ一覧の上の、検索とドロップダウンのフィルターの右側にある **[リポジトリの追加]** をクリックします。
  ![[リポジトリの追加] ボタンのスクリーンショット](/assets/images/help/education/community-exchange-submission-add-repo.png)
1. **[送信の目的は何ですか?]** ドロップダウン メニューを使用して、送信に一致する 1 つ以上のエントリを選びます。
  ![リポジトリの送信目的のドロップダウンのスクリーンショット](/assets/images/help/education/community-exchange-repo-submission-purpose.png)
1. **[どのリポジトリを使用しますか?]** ドロップダウン メニューを使用して、送信に使用するリポジトリを選びます。 送信条件が満たされていない場合は、不足しているアイテムが通知されます。
  ![リポジトリ送信のリポジトリのドロップダウンのスクリーンショット](/assets/images/help/education/community-exchange-repo-submission-repo.png)
1. **[どのオファーをプロジェクトに使用しましたか?]** ドロップダウン メニューを使用して、送信に一致する 1 つ以上のエントリを選びます。
  ![リポジトリ送信のオファーのドロップダウンのスクリーンショット](/assets/images/help/education/community-exchange-repo-submission-offers.png)
1. **[プロジェクトの送信]** をクリックします。
