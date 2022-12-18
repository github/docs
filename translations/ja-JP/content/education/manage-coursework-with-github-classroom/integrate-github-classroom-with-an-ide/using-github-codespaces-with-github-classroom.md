---
title: GitHub Classroom で GitHub codespace を使用する
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: '{% data variables.product.prodname_github_codespaces %} を割り当てで優先エディターとして使用し、ワン クリックで設定できるブラウザーベースの Visual Studio Code 環境に学生がアクセスできるようにできます。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189914'
---
## {% data variables.product.prodname_github_codespaces %} について

{% data variables.product.prodname_github_codespaces %} は、クラウドベースのインスタント開発環境であり、コンテナーを使用して開発用の共通言語、ツール、ユーティリティを提供します。 また、{% data variables.product.prodname_github_codespaces %} も構成可能で、プロジェクトのすべてのユーザーに共通のカスタマイズされた開発環境を作成できます。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} の概要](/codespaces/overview)」を参照してください。

Organization または Enterprise で {% data variables.product.prodname_github_codespaces %} を有効にすると、ユーザーは、任意のブランチから codespace を作成するか、Organization または Enterprise リポジトリでコミットし、クラウドベースのコンピューティング リソースを使用して開発を始めることができます。 codespace には、ブラウザーから接続することも、Visual Studio Code を使用してローカルで接続することもできます。 

{% data reusables.codespaces.links-to-get-started %}

{% data variables.product.prodname_github_codespaces %} を、GitHub Classroom の課題で課題用の優先エディターとして設定すると、学生と教師の両方にとって役立ちます。 {% data variables.product.prodname_github_codespaces %} は、各 codespace がクラウドベースであり、ローカルでの設定が必要ないため、貸し出されているデバイスを使っている学生、またはローカル IDE 設定にアクセスできない学生に適したオプションです。 学生は、ブラウザーで直接 Visual Studio Code 内の課題リポジトリの codespace を起動し、すぐに開発を開始できます。追加の構成は必要ありません。  

複雑な設定環境を使用する課題の場合、教師はリポジトリの codespace 向け開発コンテナーの構成をカスタマイズできます。 これにより、学生が codespace を作成する際、教師が構成した開発環境で codespace が自動的に開くようになります。 開発コンテナーの詳細については、「[開発コンテナーの概要」を](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)参照してください。

{% note %}

**注**: 個々の codespace が停止し、長期間未使用のままになっている場合、個々の codespace は自動的に削除されます。 詳しい情報については、「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」をご覧ください。

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**注:** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## 認証済み教師に対する {% data variables.product.prodname_codespaces %} Education 特典について

{% data variables.product.prodname_codespaces %} Education 特典を利用すると、認証済みの教師には、{% data variables.product.prodname_classroom %} での {% data variables.product.prodname_github_codespaces %} の利用時間について、毎月無料の使用枠が与えられます。 この無料利用枠は、学生ごとに 1 つの codespace が保存されている 2 コアのマシンで、毎月 5 つの課題がある 50 人のクラスを目安としています。

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

認証済み教師になるには、教育者特典または教師特典の承認を受ける必要があります。 詳しくは、「[教師として {% data variables.product.prodname_global_campus %} に応募する](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)」を参照してください。 

認証済み教師であるという確認を受け取ったら、[{% data variables.product.prodname_global_campus %} for Teachers](https://education.github.com/globalcampus/teacher) にアクセスして、Organization を GitHub Team にアップグレードします。 詳しい情報については、「[GitHub の製品](/get-started/learning-about-github/githubs-products#github-team)」を参照してください。 

{% data variables.product.prodname_codespaces %} Education 特典の対象者の場合、Organization の {% data variables.product.prodname_classroom %} で {% data variables.product.prodname_github_codespaces %} を有効にすると、GitHub では、Codespace ポリシーが自動的に追加され、Organization 内のすべての codespace のマシンの種類が 2 コア マシンに制限されます。 これは、{% data variables.product.prodname_github_codespaces %} の無料使用量を最大限に活用するのに役立ちます。 ただし、これらのポリシーは、Organization の設定で変更または削除できます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

{% data variables.product.prodname_codespaces %} Education 特典がベータ版から移行されると、Organization での {% data variables.product.prodname_github_codespaces %} の使用量が無料利用枠を超えると、追加の使用量に対して請求が行われます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

## Organization での {% data variables.product.prodname_codespaces %} の有効化

{% data variables.product.prodname_github_codespaces %} は、{% data variables.product.prodname_team %} を使用する Organization の {% data variables.product.prodname_classroom %} で使用できます。 {% data variables.product.prodname_codespaces %} Education 特典の対象である場合、{% data variables.product.prodname_github_codespaces %} は、Organization の設定で直接有効にするのではなく、{% data variables.product.prodname_classroom %} を介して有効にする必要があります。 そうしないと、Organization での {% data variables.product.prodname_github_codespaces %} のすべての使用量に対して直接請求されることになります。

### 新しいクラスルームの作成時に Organization の codespace を有効にする
{% data reusables.classroom.sign-into-github-classroom %}
1. **[新しいクラスルーム]** をクリックします。
   
  ![[新しいクラスルーム] ボタン](/assets/images/help/classroom/click-new-classroom-button.png)

1. Organizationのリスト中で、クラスルームに使いたいOrganizationをクリックしてください。 {% data variables.product.prodname_github_codespaces %} の対象となる Organization には、対象であることを示すメモが表示されます。 あるいは、新しいOrganizationを作成することもできます。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

  ![codespace の対象となるクラスルームの Organization を選択する](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. [クラスルームに名前を付ける] ページの [Classroom の {% data variables.product.prodname_codespaces %}] で、 **[有効]** をクリックします。 これにより、Organization 内のすべてのリポジトリとユーザーに対して {% data variables.product.prodname_github_codespaces %} が有効になることにご注意ください。

  ![[クラスルームの基本設定] ページで Organization の codespace を有効にする](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. 新しいクラスルームを作成する準備ができたら、 **[クラスルームの作成]** をクリックします。

### 既存のクラスルームを使用して Organization の codespace を有効にする

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. {% data variables.product.prodname_github_codespaces %} で、**有効** をクリックします。 これにより、Organization 内のすべてのリポジトリとユーザーに対して {% data variables.product.prodname_github_codespaces %} が有効になります。 新しい Codespace ポリシーも追加され、Organization 内のすべて codespace のマシンの種類が 2 コア マシンに制限されます。 
  
  ![既存のクラスルームの設定で Organization の codespace を有効にする](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

上記と同じ方法を使用して、Organization の {% data variables.product.prodname_github_codespaces %} を無効にすることもできます。 これにより、Organization 内のすべてのユーザーとリポジトリに対して {% data variables.product.prodname_github_codespaces %} が無効になることにご注意ください。 

## {% data variables.product.prodname_codespaces %} を使用するように課題を構成する
学生が {% data variables.product.prodname_github_codespaces %} を課題に使用できるようにするには、課題向けのサポートされるエディターとして {% data variables.product.prodname_github_codespaces %} を選ぶことができます。 新しい課題を作成するときに、[スタート コードを追加してオプションのオンライン IDE を選択する] ページの [サポートされるエディターの追加] で、ドロップダウン メニューから **[{% data variables.product.prodname_github_codespaces %}]** を選択します。 

![課題向けのサポートされるエディターとして codespace を選択する](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

課題のテンプレート リポジトリを使用する場合、リポジトリ内の開発コンテナーを定義して、学生が codespace を起動して課題に取り組むときに使用できるツールとランタイムをカスタマイズできます。 開発コンテナーを定義しない場合、{% data variables.product.prodname_github_codespaces %} では、既定の構成が使用されます。これには、学生が開発に必要とする可能性のある一般的なツールが多く含まれています。 開発コンテナーの定義に関する詳しい情報については、「[開発コンテナーの構成をリポジトリに追加する](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」を参照してください。

## {% data variables.product.prodname_github_codespaces %} を使用して課題を起動する

学生が課題を開くと、リポジトリの README ファイルに、学生が作業に使用する必要がある IDE に関する教師の推奨事項が含まれます。

![学生の課題リポジトリの README 内にある codespace に関する注意のスクリーンショット](/assets/images/help/classroom/student-codespaces-readme-link.png)

学生は、README の **[GitHub Codespace で開く]** ボタンをクリックするか、課題リポジトリのメイン ページにある **{% octicon "code" aria-label="The code icon" %} [コード]** ボタンをクリックして、 **[Codespaces]** タブを選ぶと、新規または既存の codespace を起動できます。 **[Codespaces]** タブでは、既存の codespace を選ぶか、新しい codespace を作成できます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」を参照してください。

![課題リポジトリで新しい codespace を起動する](/assets/images/help/classroom/student-launch-new-codespace.png)

教師は、[課題の概要] ページで各学生の課題の codespace を表示できます。 各学生行の右側にある [codespace] アイコンをクリックして codespace を起動できます。 

![学生の codespace を表示した教師の [課題の概要]](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

ブラウザーを使用して codespace に接続する場合は、自動保存が自動的に有効になります。 リポジトリに対する変更を保存する場合、変更をコミットしてリモート ブランチにプッシュする必要があります。 既定では、30 分間操作することなく codespace を実行したままにした場合、codespace はタイムアウトになり、実行が停止されます。 データは、最後に変更した時点の状態で保持されます。 codespace のライフサイクルの詳細については、「[Codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)」を参照してください。
