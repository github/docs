---
title: フォークについて
intro: フォークはユーザが管理するリポジトリのコピーです。 フォークを使えば、オリジナルのリポジトリに影響を与えることなくプロジェクトへの変更を行えます。 オリジナルのリポジトリから更新をフェッチしたり、プルリクエストでオリジナルのリポジトリに変更をサブミットしたりできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158750'
---
リポジトリのフォークはリポジトリのコピーと似ていますが、次の 2 つの大きな違いがあります。

* pull request を使って、ユーザーが所有するフォークからの変更を、GitHub 内にあるオリジナルのリポジトリ (*上流* のリポジトリとも呼ばれます) に提案できます。
* 上流のリポジトリと自分のフォークを同期させることで、上流のリポジトリからの変更を自分のローカルフォークへ持ち込めます。

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

{% data variables.enterprise.prodname_emu_enterprise %} のメンバーの場合、フォークできるリポジトリに対して、さらに制限があります。 {% data reusables.enterprise-accounts.emu-forks %} 詳しい情報については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}」を参照してください。{% else %}.{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

フォークを削除しても、オリジナルの上流のリポジトリは削除されません。 オリジナルに影響を与えることなく、コラボレータの追加、ファイル名の変更、{% data variables.product.prodname_pages %} の生成など、自分のフォークに必要な変更を加えることができます。{% ifversion fpt or ghec %} 削除されたフォーク リポジトリを復元することはできません。 詳しい情報については、「[削除したリポジトリの復元](/articles/restoring-a-deleted-repository)」を参照してください。{% endif %}

オープンソースプロジェクトでは、フォークを使用して、上流のリポジトリに提供される前にアイデアや変更をイテレーションすることがよくあります。 ユーザーが所有するフォークに変更を加え、作業を上流リポジトリと比較する pull request をオープンすると、上流リポジトリにプッシュ アクセスできるどのユーザーにも、変更を pull request ブランチにプッシュする権限 (ブランチの削除を含む) を付与することができます。 これにより、リポジトリメンテナがマージする前に、ユーザが所有するフォークからプルリクエストブランチに対してローカルでコミットを実行したり、テストを実行したりすることができるようになり、コラボレーションがスピードアップします。 Organization が所有するフォークにプッシュ権限を与えることはできません。 

{% data reusables.repositories.private_forks_inherit_permissions %}

既存のリポジトリのコンテンツから新しいリポジトリを作成したいものの、その後は変更を上流にマージしたくない場合は、リポジトリを複製するか、リポジトリがテンプレートである場合は、リポジトリをテンプレートとして使うことができます。 詳しい情報については、「[リポジトリを複製する](/articles/duplicating-a-repository)」と「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」を参照します。

## 参考資料

- 「[共同開発モデルについて](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)」
- "[フォークから pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [オープン ソース ガイド](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
