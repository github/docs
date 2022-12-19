---
title: テンプレートリポジトリを作成する
intro: 既存のリポジトリをテンプレート化して、あなたや他の人が、同じディレクトリ構造、ブランチ、ファイルを持つ新しいリポジトリ作成できるようにすることができます。
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132337'
---
{% note %}

**注**: テンプレート リポジトリには、{% data variables.large_files.product_name_short %} を使って保存されたファイルを含めることはできません。

{% endnote %}

テンプレートリポジトリを作成するには、リポジトリを作成して、そのリポジトリをテンプレート化する必要があります。 リポジトリの作成の詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

リポジトリをテンプレートにした後は、そのリポジトリにアクセスできるすべてのユーザーが、同じディレクトリ構造とファイルを含む新しいリポジトリを、既定のブランチとして作成できます。 リポジトリに他のすべてのブランチを含めることもできます。 テンプレートから作成されたブランチには関連のない履歴があるため、pull request を作成したり、ブランチ間でマージしたりすることはできません。 詳しくは、「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」をご覧ください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **[テンプレート リポジトリ]** を選びます。
  ![リポジトリをテンプレートにするチェックボックス](/assets/images/help/repository/template-repository-checkbox.png)
