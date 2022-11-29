---
title: タグ保護ルールの構成
shortTitle: Tag protection rules
intro: 共同作成者がタグを作成または削除できないように、リポジトリのタグ保護ルールを構成できます。
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063203'
---
{% note %}

**注:** タグ保護ルールは現在ベータ版であり、変更される可能性があります。

{% endnote %}

タグ保護ルールを追加すると、指定されたパターンに一致するすべてのタグが保護されます。 リポジトリの管理者または管理権限を持つユーザーのみが保護されたタグを作成でき、リポジトリの管理者権限を持つユーザーのみが保護されたタグを削除できます。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)」を参照してください。 {% data variables.product.prodname_github_apps %} で保護されたタグを変更するには、`Repository administration: write` 権限が必要です。

{% ifversion custom-repository-roles %}さらに、カスタム リポジトリ ロールを作成して、他のユーザー グループがタグ保護ルールに一致するタグを作成または削除できるようにすることができます。 詳細については、「[Organization のカスタムリポジトリロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. サイドバーの [コードと自動化] セクションで、 **[{% octicon "tag" aria-label="The tag icon" %}] タグ** をクリックします。
1. **[新しいルール]** をクリックします。
![新しいタグ保護ルール](/assets/images/help/repository/new-tag-protection-rule.png)
1. [タグ名パターン] に、保護するタグのパターンを入力します。 この例では、「\*」と入力するとすべてのタグが保護されます。 
![タグ保護パターンを設定する](/assets/images/help/repository/set-tag-protection-pattern.png)
1. **[ルールの追加]** をクリックします。
![タグ保護ルールを追加する](/assets/images/help/repository/add-tag-protection-rule.png)
