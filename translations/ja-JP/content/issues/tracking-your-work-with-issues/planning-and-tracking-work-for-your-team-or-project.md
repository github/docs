---
title: Teamもしくはプロジェクトの作業の計画と追跡
intro: '{% data variables.product.prodname_dotcom %}の計画及び追跡ツールを使って、Teamあるいはプロジェクトの作業を管理するために必要なこと。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423613'
---
## はじめに
個別のプロジェクトで作業しているにしても、機能横断的なチームで作業しているにしても、{% data variables.product.prodname_dotcom %}のリポジトリ、Issue、プロジェクトボードやその他のツールを使って作業の計画と追跡ができます。

このガイドでは、人々のグループとコラボレーションするためのリポジトリの作成と設定、Issue テンプレート{% ifversion fpt or ghec %}およびフォーム{% endif %}の作成、Issue のオープンと作業を分割するためのタスク リストの利用、Issue を整理して追跡するためのプロジェクト ボードの確立の方法を学びます。

## リポジトリを作成する
新しいプロジェクト、イニシアティブ、機能を開始するとき、最初のステップはリポジトリの作成です。 リポジトリにはプロジェクトのすべてのファイルが含まれ、他者とコラボレーションしたり、作業を管理したりする場所を提供します。 詳細については、「[新しいリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)」を参照してください。

必要に応じて、様々な目的のためにリポジトリをセットアップできます。 以下は、いくつかの一般的なユースケースです。

- **製品リポジトリ**: 特定の製品に関する作業とゴールを追跡する大規模な組織は、そのコードや他のファイルを含む 1 つまたは複数のリポジトリを持つことがあります。 それらのリポジトリは、ドキュメンテーション、製品の改善性、あるいは製品の将来の計画のためにも使われることがあります。 
- **プロジェクト リポジトリ**: 作業をしている個々のプロジェクト、あるいは他者とコラボレーションしているプロジェクトのためにリポジトリを作成することができます。 短期間のイニシアティブやプロジェクトなどのための作業を追跡する、たとえばコンサルティングファームなどの組織では、プロジェクトの健全性に関するレポートや、人々をスキルや要求に応じて様々なプロジェクト間で移動させる必要があります。 こうしたプロジェクトのためのコードは、多くの場合1つのリポジトリに含まれます。
- **チーム リポジトリ**: 人々をチームにグループ化し、開発ツール チームのようなそれらのチームにプロジェクトを割り当てる組織では、コードは追跡が必要なさまざまな作業に対する多くのリポジトリに分散される場合があります。この場合、そのチームが関わるすべての作業を追跡するための 1 つの場所として、チーム固有のリポジトリがあると便利な場合があります。
- **個人リポジトリ**: 個人リポジトリを作成して、自分のすべての作業を 1 か所で追跡し、将来のタスクを計画し、さらには保存しておきたいメモや情報を追加することもできます。 この情報を他者と共有したい場合は、コラボレータを追加することもできます。 

ソースコードに様々なアクセス権限を設定し、Issueやディスカッションを追跡したい場合には、複数の個別のリポジトリを作成することもできます。 詳細については、「[Issue だけのリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)」を参照してください。

このガイドの以下の例では、Projet Octocatというサンプルリポジトリを使います。
## リポジトリ情報のコミュニケーション
リポジトリにREADME.mdファイルを追加して、Teamやプロジェクトを紹介し、それらに関する重要な情報を伝えることができます。 リポジトリにアクセスした人が最初に見るのはREADMEのことが多いので、ユーザやコントリビュータがプロジェクトとどのように関わり始めたらいいのか、そしてチームとどのように連絡を取ればいいのかに関する情報を提供することもできます。 詳細については、「[README について](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)」を参照してください。

特に、バグ修正のIssueのオープンや改善のリクエストの方法といった、ユーザやコントリビュータがチームやプロジェクトに貢献して関わるやりかたのガイドラインを含む、CONTRIBUTING.mdファイルを作成することもできます。 詳細については、「[リポジトリ コントリビューターのためのガイドラインを定める](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)」を参照してください。
### README の例
新しいプロジェクトであるProject Octocatを紹介するREADME.mdを作成できます。 

![READMEの例の作成](/assets/images/help/issues/quickstart-creating-readme.png)
## Issue テンプレートを作成する

Issueを使って、機能横断的なチームやプロジェクトがカバーする様々な種類の作業を追跡したり、プロジェクト外のチームやプロジェクトから情報を集めることができます。 以下は、いくつかの一般的なIssueのユースケースです。

- リリース追跡: Issueを使って、リリースやローンチ日を完了させるステップの進捗を追跡できます。
- 大規模なイニシアティブ: Issueを使って、大規模なイニシアティブやプロジェクトの進捗を追跡できます。それらは、より小さなIssueにリンクされます。
- 機能リクエスト: チームやユーザは、Issueを作成して製品やプロジェクトに改善をリクエストできます。
- バグ: チームやユーザは、Issueを作成してバグを報告できます。 

作業をしているリポジトリやプロジェクトの種類によっては、特定の種類のIssueを他よりも優先することになるかもしれません。 チームで最も一般的な Issue の種類を特定できたら、リポジトリに Issue テンプレート{% ifversion fpt or ghec %}やフォーム{% endif %}を作成できます。 Issue テンプレート{% ifversion fpt or ghec %}とフォーム{% endif %}を使うと、リポジトリで Issue をオープンするときにコントリビューターが選択できる標準化されたテンプレートのリストを作成できます。 詳細については、「[リポジトリ用に Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)」を参照してください。

### Issueテンプレートの例
以下、Project OctocatでバグレポートのためのIssueテンプレートを作成しています。

![Issueテンプレートの例の作成](/assets/images/help/issues/quickstart-creating-issue-template.png)

バグレポートのIssueテンプレートを作成したので、新しいIssueをProject Octocatで作成する際に選択できるようになりました。

![Issueテンプレートの例の選択](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Issueのオープンとタスクリストを使用した作業の追跡
Issueを作成することで、作業を整理し、追跡できます。 詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)」を参照してください。
### 問題の例
以下は、Project Octocatの大規模なイニシアティブであるフロントエンドの作業のために作成されたIssueの例です。

![大規模なイニシアティブのissueの例の作成](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### タスクリストの例

タスクリストを使って、大きなIssueを小さなタスクに分割し、大きなゴールの一部としてIssueを追跡できます。 {% ifversion fpt or ghec %} Issue の本文に追加されたタスク リストには、追加の機能があります。 Issue の上部では全体の中で完了したタスク数を見ることができ、誰かがタスク リストにリンクされた Issue をクローズすると、そのチェックボックスは自動的に完了としてマークされます。{% endif %}詳しい情報については「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。

以下では、Project OctocatのIssueにタスクリストを追加し、小さなIssueに分割しました。

![Issueの例へのタスクリストの追加](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## チームとしての意思決定
Issueやディスカッションを使い、プロジェクトの計画された改善や優先順位についてコミュニケーションを取り、チームとして意思決定することができます。 Issueは、バグやパフォーマンスレポート、次の四半期の計画、新しいイニシアティブのデザインといった、特定の詳細に関するディスカッションのために作成すると役立ちます。 ディスカッションは、コードベース外でリポジトリをまたぐオープンエンドのブレインストーミングやフィードバックのために役立ちます。 詳細については、「[どのディスカッション ツールを使用する必要があるか](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)」を参照してください。

チームとして、Issue内の日々のタスクの更新についてコミュニケーションを取り、全員に作業の状況を知らせることができます。 たとえば、複数の人が作業をしている大きな機能についてのIssueを作成し、各チームメンバーがそのIssue内で状況を更新したり質問を投げたりできるようにすることができます。
### プロジェクトのコラボレータとのIssueの例
以下は、Project OctocatのIssueで作業状況を更新するプロジェクトのコラボレータの例です。

![Issueの例でのコラボレーション](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## プロジェクトのゴールとステータスをハイライトするためのラベルの利用
Issue、Pull Request、ディスカッションを分類するために、リポジトリにラベルを作成できます。 {% data variables.product.prodname_dotcom %}は、すべての新しいリポジトリにデフォルトのラベルを提供します。それらは編集したり削除したりできます。 ラベルは、プロジェクトのゴール、バグ、作業の種類、Issueのステータスを追跡するための役に立ちます。

詳細については、「[ラベルの作成](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)」を参照してください。

リポジトリにラベルを作成すると、それはリポジトリ内の任意のIssue、Pull Request、ディスカッションに適用できます。 そして、すべての関連する作業を見つけるためにラベルでIssueやPull Requestをフィルタリングできます。 たとえば、Issue を `front-end` および `bug` ラベルでフィルター処理し、プロジェクト内のすべてのフロント エンド バグを見つけます。 詳細については、「[Issue および Pull Request のフィルタリングと検索](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)」を参照してください。
### ラベルの例
以下は、作成した `front-end` ラベルの例で、Issue に追加されています。

![Issueの例へのラベルの追加](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## プロジェクトボードへのIssueの追加

{% ifversion projects-v2 %}

{% data variables.product.prodname_dotcom %}上の{% data variables.projects.projects_v2 %}を使用して、チームの作業を計画および追跡できます。 プロジェクトはカスタマイズ可能なスプレッドシートで、{% data variables.product.prodname_dotcom %}上のIssueやPull Requestと統合されており、自動的に{% data variables.product.prodname_dotcom %}上の情報を最新の状態に保ちます。 IssueやPull Requestのフィルタリング、ソート、グループ化によってレイアウトをカスタマイズできます。 プロジェクトの概要については、「[プロジェクトのクイックスタート](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)」を参照してください。
### プロジェクトの例
以下は、作成したProject OctocatのIssueが展開されたサンプルプロジェクトの表レイアウトのビューです。

![プロジェクトのテーブル レイアウトの例](/assets/images/help/issues/quickstart-projects-table-view.png)

同じプロジェクトをボードとして見ることもできます。

![プロジェクトのボード レイアウトの例](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

{% ifversion projects-v2 %}チームの作業の計画および追跡には、{% data variables.product.prodname_dotcom %} 上の既存の{% data variables.product.prodname_projects_v1 %}も{% else %}を{% endif %}使用することができます。 プロジェクトボードは、Issue、Pull Request、選択した列内でカードとして分類されるノートから構成されます。 機能の作業、高レベルのロードマップ、さらにはリリースチェックリストのためにプロジェクトボードを作成できます。 詳細については、「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。
### プロジェクトボードの例
以下は、サンプルのProject Octocatのプロジェクトボードで、作成したIssueと、そのIssueをブレークダウンした小さなIssueが追加されています。

![プロジェクトボードの例](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## 次の手順

これで、作業の計画と追跡のために{% data variables.product.prodname_dotcom %}が提供するツールについて学び、機能横断的なチームやプロジェクトのリポジトリのセットアップを始めることができました！ 以下は、さらにリポジトリをカスタマイズし、作業を整理するのに役立つリソースです。

- リポジトリの作成の詳細については、「[リポジトリについて](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)」を参照してください
- Issue を作成および管理するためのさまざまな方法について詳しくは、「[Issue での作業の追跡](/issues/tracking-your-work-with-issues)」を参照してください
- Issue テンプレートの詳細については、「[Issue と pull request テンプレートについて](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)」を参照してください
- ラベルの作成、編集、削除方法について詳しくは、「[ラベルの管理](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください
- タスク リストについて詳しくは、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください {% ifversion projects-v2 %} - プロジェクトについて詳しくは、「[プロジェクトについて](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」を参照してください
- プロジェクトのビューのカスタマイズ方法について詳しくは、「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください{% endif %} {% ifversion projects-v1 %}- プロジェクト ボードの管理方法について詳しくは、「[{% data variables.product.prodname_projects_v1 %} について](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください{% endif %}
