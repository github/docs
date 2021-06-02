---
title: GitHubと貿易統制
redirect_from:
  - /articles/github-and-export-controls
  - /articles/github-and-trade-control
  - /articles/github-and-trade-controls
  - /github/site-policy/github-and-export-controls
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

GitHub.com、GitHub Enterprise Server、およびあなたがいずれかの製品にアップロードする情報は、米輸出管理規則（EAR）を含む貿易管理規制の対象となる場合があります。

GitHub のビジョンは、開発者たちがどこからでもコラボレーションに参加できるグローバルなプラットフォームを築くことです。 当社は、政府の命令を精査し、ユーザーおよびお客様が法律で要求される範囲を超えた影響を受けることがないようにする責任を真摯に受け止めています。 こうした取り組みには、オープンソースプロジェクトを含むパブリックリポジトリサービスを利用可能かつアクセス可能に保つことで、制裁対象地域の開発者が参加する個人的なコミュニケーションをサポートすることも含まれます。 これは、 制裁対象地域にいる開発者がプラットフォームへのアクセスをより享受できること、そしてグローバルなオープンソースコミュニティに完全に参加できることをGitHubが提唱していることをも意味します。

当社の運動と米 規制当局による尽力のおかげで、GitHubは、米 財務省の外国資産管理局 (OFAC) から、イランの開発者のためにクラウドサービスを復活させるための認可を獲得しました。 当社は シリアおよびクリミアの開発者にもコラボレーションサービスを提供するため、同様の認可を獲得できるよう引き続き米規制当局に働きかけていきます。 当社は、開発者が可能な限り幅広くアクセスできるよう訴えることに取り組んでいます。なぜなら、制裁対象地域の開発者にコラボレーションサービスを提供することがグローバルな開発者コミュニティを強化し、人類の進歩を推し進め、そして言論の自由と情報の自由な流通を推進するという米国の 長期的な外交政策を支援するものであると信じているからです。 当社がイランの開発者のために獲得した認可に関する情報については、[こちらのブログ記事](https://github.blog/2021-01-05-advancing-developer-freedom-github-is-fully-available-in-iran)をお読みください。

なお、以下の情報は便宜上提供されるものであり、GitHub の製品およびサービスをご利用になる際は、ご自身の責任のもと米 輸出管理法を含む適用されるすべての法律および規制を遵守してください。

### 輸出の概要

#### GitHub.com

[利用規約](/articles/github-terms-of-service)に基づき、ユーザは米輸出管理法および制裁法を含む適用法を遵守した場合に限って、GitHub.com にアクセスし、これを使用できます。

ユーザには、GitHub.com で開発および共有するコンテンツが、EAR や米国際武器取引規制（ITAR）などの米輸出管理法を遵守していることを確認する責任があります。      [GitHub.com](https://github.com) で利用可能なクラウドホスト型サービスは、ITAR に基づいてデータをホストするように設計されておらず、現在、国ごとにリポジトリアクセスを制限する機能を提供していません。 ITAR などの輸出管理対象データを扱うコラボレーションを検討している場合は、GitHub のオンプレミス製品である [GitHub Enterprise Server](https://enterprise.github.com) を検討することをお勧めします。

現在GitHubは、イランに居住する、またはその他何らかの意味でイランの住民である開発者に対し、クラウドサービスを提供する認可をOAFCから取得しています。 この認可には、個人および組織に対するあらゆる公開および非公開サービス (有料、無料の両方) が含まれています。

GitHubのクラウドサービス (有料、無料の両方) は、キューバにいる開発者でもほとんど利用できます。

特別指定国民 (SDN) および米国およびその他の適用法の下で拒否または遮断されたその他の関係者、 および特定の政府関係者は、GitHub.comへのアクセスまたは利用が制限される場合があります。 また、ユーザは、制裁対象国の政府を含む上記の当事者のために、またはその代理としてGitHub.comを利用することはできません。 さらに、[17 CFR 744](https://www.ecfr.gov/cgi-bin/text-idx?SID=ad384e1f1e017076f8c0136f322f0a4c&mc=true&node=pt15.2.744&rgn=div5) に記載されている禁止対象の最終用途を含む、適用される輸出管理法の下で禁止されている目的に GitHub.com を使用することはできません。

#### GitHub Enterprise Server

GitHub Enterprise Server は、自己ホスト型の仮想アプライアンスであり、独自のデータセンターまたは仮想プライベートクラウド内で実行できます。 そのため、GitHub Enterprise Server を使用して ITAR などの輸出管理対象情報を保存することは可能ですが、エンドユーザに ITAR およびその他の該当する輸出規制を確実に遵守する責任があることには変わりありません。

GitHub Enterprise Server は商用の大衆市場製品であり、`5D992.c` の輸出管理分類番号（ECCN）が割り当てられています。そして、ライセンス不要（NLR）でほとんどの宛先に輸出できます。

しかし、GitHub Enterprise Server は、EAR Part 740 の付則 1 にある Country Group E:1 にリストされている国、およびウクライナのクリミア地方に 販売、輸出、または再輸出することはできません。 このリストには現在、キューバ、イラン、北朝鮮、シリアが含まれていますが、変更される可能性があります。

### よくある質問

#### 米政府の制裁はどの国や地域 に適用されますか？

クリミア、キューバ、イラン、北朝鮮、シリアです。 ただしイランに関しては現在、 GitHubはイランに居住する、またはその他何らかの意味でイランの住民である開発者にための認可を財務省の外国資産管理局 (OFAC) から取得しています。 GitHubのクラウドサービス (有料、無料の両方) は、キューバにいる開発者でもほとんど利用できます。

#### 制裁対象国/地域に住んでいない人や、制裁対象国/地域と職業的なつながりを持たない人がアクセスしたり異議を申し立てたりすることができるよう、GitHub は何か対策をしていますか？

アカウントが意図せずまたは誤って影響を受けることはまれですが、そのような事態に対処するための異議申し立てプロセスはあります。

個人ユーザまたは Organization 管理者に対する決定が誤りであると考えられる場合、そのユーザは GitHub に検証情報を提供することで決定に異議を申し立てることができます。 ユーザまたは組織が米国の制裁対象区域と関連していないなど、米国の経済制裁によって制限されていないことを確認するのに十分な情報を GitHub が受け取った場合、 決定は取り消されます。 [個人アカウントの異議申し立てリクエストフォーム](https://airtable.com/shrGBcceazKIoz6pY)と [Organization アカウントの異議申し立てリクエストフォーム](https://airtable.com/shrB2je5RBkqLEt5D)をご覧ください。

#### 対象地域を旅行することによる影響はありますか？

対象地域内に旅行をすることがアカウントのステータスに影響する可能性はありますが、制裁対象国/地域外に出た後に[個人アカウントの異議申し立てリクエスト](https://airtable.com/shrGBcceazKIoz6pY)または[Organizationアカウントの異議申し立てリクエスト](https://airtable.com/shrB2je5RBkqLEt5D)を送信すると、再び利用可能になる場合があります。

#### 何が利用できて何が利用できないのですか？

現在GitHubは、米国の制裁対象国であるイランに居住する、またはその他何らかの意味でイランの住民である開発者に対し、クラウドサービスを提供する認可をOAFCから取得しています。 この認可には、個人および組織に対するあらゆる公開および非公開サービス (有料、無料の両方) が含まれています。 GitHubのクラウドサービス (有料、無料の両方) は、キューバにいる開発者でもほとんど利用できます。

GitHub is committed to continuing to offer free public repository services to developers with individual and organizational accounts in Syria and Crimea. This includes limited access to free services, such as public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes, for personal communications only, and not for commercial purposes.

制裁対象地域における有料の Organization アカウントの場合、ユーザはパブリックリポジトリへのアクセスが制限される場合があります。具体的には、アーカイブ済みの読み取り専用リポジトリになります。 For free organizational accounts in these sanctioned regions, however, users will continue to have full access to free public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes.

GitHub は、無料のプライベートリポジトリを含め、認可された地域の開発者が無料のコードコラボレーションサービスに最大限にアクセスできるように、米国の規制当局に引き続き提唱していきます。   We believe that offering those services advances human progress, international communication, and the enduring U.S. 長期的な外交政策を支援するものであると信じているからです。

特別指定国民 (SDN) および米国およびその他の適用法の下で拒否または遮断されたその他の関係者、 and other applicable law, and certain government officials may be restricted from accessing or using GitHub, wherever located. Users may not use GitHub.com for or on behalf of such parties, generally including the Governments of sanctioned countries.

GitHub services are not available to developers located or otherwise resident in North Korea.

#### 対象のユーザをどのように定義しているのですか？

If GitHub determines that a user or customer is located in a region that is subject to U.S. trade control restrictions for which GitHub does not yet have a license from the U.S. government, or a user is otherwise restricted under U.S. economic sanctions, then the affiliated account will be restricted to comply with those legal requirements. こうした法的制限の対象となるユーザやお客様の所在地の判断は、IP アドレスや支払い履歴など、いくつもの根拠から導き出されます。 なお、国籍と民族は制裁によるユーザの制限には使用されません。

#### Organization アカウントにはどのような影響がありますか？

If an organization is based out of, or the key individuals or membership of an organization shows sufficient ties to, a sanctioned territory or country for which GitHub does not yet have a license from the U.S. government, or if the organization otherwise appears to be subject to U.S. economic sanctions, then the organization account and the affiliated owner account will be restricted.

The restriction suspends access to private repository services and paid services, such as availability of free or paid private repositories, secret gists, paid Action minutes, Sponsors, and GitHub Marketplace services. For paid organizational accounts associated with such sanctioned regions, users may have limited access to their public repositories, which have been downgraded to archived read-only repositories. For free organizational accounts associated with such sanctioned regions, users will continue to have full access to free public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes.

#### 貿易制限のあるユーザのプライベートリポジトリを公開できますか？

無料の個人アカウントユーザは、商用目的ではない個人的な通信のみを目的として、制限付きのプライベートリポジトリを公開できます。 これを行うには、リポジトリ設定タブに移動し、「公開」ボタンをクリックします。 リポジトリが公開されると、ユーザはパブリックリポジトリサービスにアクセスできます。 このアクションは取り消すことができません。

#### 貿易制限のあるユーザは、プライベートリポジトリデータにアクセスできますか（リポジトリデータのダウンロードや削除など）？

残念ながら、当社による法律の解釈では、米国政府の許可がない限り、プライベートリポジトリのコンテンツのダウンロードまたは削除を許可することはできません。 GitHub Enterprise Server is a self-hosted virtual appliance that can be run within Customer’s own datacenter or virtual private cloud.   私たちは、貿易制限のあるユーザがプライベートリポジトリのコンテンツを確保する権利を、米国の規制当局に強く主張する予定です。 また、制裁対象市場の開発者が GitHub サービスをもっと利用できるようになるよう求め、開発者のグローバルな個人通信をサポートすることで実現するコードコラボレーションの重要性をさらに強調するつもりです。

#### Under the license GitHub has received from OFAC, which types of accounts will be available in Iran?

The license we have secured includes all public and private services, for individuals and organizations, both free and paid.

For example, a developer in Iran may sign up for a Free or Pro plan for their individual use, and an Iranian university may set up an organization account to collaborate with students.

特別指定国民 (SDN) および米国およびその他の適用法の下で拒否または遮断されたその他の関係者、 and other applicable law, and certain government officials may be restricted from accessing or using GitHub.

If GitHub determines that an individual or organization falls into a restricted category (SDNs, other blocked parties, or certain government officials), their account will be flagged and they will not be able to use any GitHub features. If they believe that they have been flagged in error, then they have the opportunity to appeal the flag by providing verification information to GitHub using our [individual account appeals request form or organization account appeals request form](https://airtable.com/shrGBcceazKIoz6pY). If GitHub receives sufficient information to verify that the individual is not in a category restricted by U.S. 決定は取り消されます。

#### Will Iranian GitHub users be able to use paid services under the license?

Pursuant to the license we have received from OFAC, we are restoring all cloud services to Iranian users, including paid services. We accept all major credit cards, but third parties process payments for us, so payments are subject to the terms and conditions of our payment processors. Those third parties may include restrictions that block payments from Iran.

#### Can you clarify availability of GitHub to Cuban developers?

GitHub cloud services, both free and paid, are generally available to developers located in Cuba.  
Specially Designated Nationals (SDNs), other denied or blocked parties under U.S. and other applicable law, and certain government officials may be restricted from accessing or using GitHub, wherever located. また、ユーザは、制裁対象国の政府を含む上記の当事者のために、またはその代理としてGitHub.comを利用することはできません。
