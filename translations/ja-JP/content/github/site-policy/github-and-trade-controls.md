---
title: GitHubと貿易統制
redirect_from:
  - /articles/github-and-export-controls
  - /articles/github-and-trade-control
  - /articles/github-and-trade-controls
  - /github/site-policy/github-and-export-controls
versions:
  free-pro-team: '*'
---

GitHub.com、GitHub Enterprise Server、およびあなたがいずれかの製品にアップロードする情報は、米輸出管理規則（EAR）を含む貿易管理規制の対象となる場合があります。 Export Administration Regulations (the EAR).

GitHub のビジョンは、開発者たちがどこからでもコラボレーションに参加できるグローバルなプラットフォームを築くことです。 当社は、政府の命令を精査し、ユーザーおよびお客様が法律で要求される範囲を超えた影響を受けることがないようにする責任を真摯に受け止めています。 こうした取り組みには、オープンソースプロジェクトのサービスを含むパブリックリポジトリサービスを利用可能かつアクセス可能に保つことで、制裁対象地域の開発者が参加する個人的なコミュニケーションをサポートすることも含まれます。

To comply with U.S. trade control laws, GitHub made some required changes to the way we conduct our services. As U.S. trade controls laws evolve, we will continue to work with U.S. regulators about the extent to which we can offer free code collaboration services to developers in sanctioned markets. We believe that offering those free services supports U.S. foreign policy of encouraging the free flow of information and free speech in those markets. 当社のアプローチと制裁がグローバルなソフトウェアコラボレーションに与える影響について詳しくは、[制裁に関するブログ](https://github.blog/2019-09-12-global-software-collaboration-in-the-face-of-sanctions/)をご覧ください。

Although we've provided the following information below for your convenience, it is ultimately your responsibility to ensure that your use of GitHub's products and services complies with all applicable laws and regulations, including U.S. export control laws.

### 輸出の概要

#### GitHub.com

[利用規約](/articles/github-terms-of-service)に基づき、ユーザは米輸出管理法および制裁法を含む適用法を遵守した場合に限って、GitHub.com にアクセスし、これを使用できます。 export control and sanctions laws.

ユーザには、GitHub.com で開発および共有するコンテンツが、EAR や米国際武器取引規制（ITAR）などの米輸出管理法を遵守していることを確認する責任があります。 export control laws, including the EAR and the U.S. International Traffic in Arms Regulations (ITAR). [GitHub.com](https://github.com) で利用可能なクラウドホスト型サービスは、ITAR に基づいてデータをホストするように設計されておらず、現在、国ごとにリポジトリアクセスを制限する機能を提供していません。 ITAR などの輸出管理対象データを扱うコラボレーションを検討している場合は、GitHub のオンプレミス製品である [GitHub Enterprise Server](https://enterprise.github.com) を検討することをお勧めします。

アメリカ合衆国の祝日 米貿易管理法により、特定の国および地域のユーザが利用できる GitHub.com サービスは制限されます。 GitHub may allow users in or ordinarily resident in countries and territories subject to U.S. GitHub は、米国の制裁の対象となる国や地域に所在または通常居住しているユーザが、米財務省の外国資産管理局（OFAC）によって発行された承認に従って、個人通信のために GitHub.com の特定の無料サービスにアクセスすることを許可する場合があります。 Treasury Department’s Office of Foreign Assets Controls (OFAC). 対象の国や地域に所在または通常居住している人物は、GitHub.com サービスにアクセスするときに IP プロキシ、VPN、またはその他の方法を使用して自身の所在地を偽装することを禁じられており、また非営利目的の個人的な通信にのみ GitHub.com を使用できます。

特別指定国民（SDN）および米国およびその他の適用法の下で拒否または遮断されたその他の人物は、GitHub.com へのアクセスまたは使用を禁止されています。 and other applicable law are prohibited from accessing or using GitHub.com. また、ユーザは、制裁対象国の政府を含む上記の人物のために、またはその代理として GitHub.com を使用することはできません。 さらに、[17 CFR 744](https://www.ecfr.gov/cgi-bin/text-idx?SID=ad384e1f1e017076f8c0136f322f0a4c&mc=true&node=pt15.2.744&rgn=div5) に記載されている禁止対象の最終用途を含む、適用される輸出管理法の下で禁止されている目的に GitHub.com を使用することはできません。

#### GitHub Enterprise Server

GitHub Enterprise Server は、自己ホスト型の仮想アプライアンスであり、独自のデータセンターまたは仮想プライベートクラウド内で実行できます。 そのため、GitHub Enterprise Server を使用して ITAR などの輸出管理対象情報を保存することは可能ですが、エンドユーザに ITAR およびその他の該当する輸出規制を確実に遵守する責任があることには変わりありません。

GitHub Enterprise Server は商用の大衆市場製品であり、`5D992.c` の輸出管理分類番号（ECCN）が割り当てられています。そして、ライセンス不要（NLR）でほとんどの宛先に輸出できます。

しかし、GitHub Enterprise Server は、EAR Part 740 の付則 1 にある Country Group E:1 にリストされている国、およびウクライナのクリミア地方に 販売、輸出、または再輸出することはできません。 このリストには現在、キューバ、イラン、北朝鮮、シリアが含まれていますが、変更される可能性があります。

### よくある質問

#### On which countries and territories are U.S. government sanctions applied?

クリミア、キューバ、イラン、北朝鮮、シリアです。

#### 制裁対象国/地域に住んでいない人や、制裁対象国/地域と職業的なつながりを持たない人がアクセスしたり異議を申し立てたりすることができるよう、GitHub は何か対策をしていますか？

アカウントが意図せずまたは誤って影響を受けることはまれですが、そのような事態に対処するための異議申し立てプロセスはあります。

個人ユーザまたは Organization 管理者に対する決定が誤りであると考えられる場合、そのユーザは GitHub に検証情報を提供することで決定に異議を申し立てることができます。 ユーザまたは組織が米国の制裁対象区域と関連していないなど、米国の経済制裁によって制限されていないことを確認するのに十分な情報を GitHub が受け取った場合、決定は取り消されます。 economic sanctions, then the flag will be removed. [個人アカウントの異議申し立てリクエストフォーム](https://airtable.com/shrGBcceazKIoz6pY)と [Organization アカウントの異議申し立てリクエストフォーム](https://airtable.com/shrB2je5RBkqLEt5D)をご覧ください。

#### 対象地域を旅行することによる影響はありますか？

Travel in these regions may impact your account status, but availability may be reinstated once you are outside of the sanctioned region and upon submitting a successful [individual account appeals request](https://airtable.com/shrGBcceazKIoz6pY) or an [organizational account appeals request](https://airtable.com/shrB2je5RBkqLEt5D).

#### 何が利用できて何が利用できないのですか？

GitHub is committed to continuing to offer free public repository services to developers with individual and organizational accounts in U.S.-sanctioned regions. This includes limited access to free services, such as public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes, for personal communications only, and not for commercial purposes.

However, due to U.S. 米国の貿易管理法の制限により、GitHub は米国の制裁対象地域のアカウントにプライベートリポジトリサービスと有料サービスを提供できません。 sanctioned regions like North Korea, Iran, Syria, and Crimea. The restriction suspends access to private repository services and paid services, such as availability of free or paid private repositories, secret gists, paid Action minutes, Sponsors, and GitHub Marketplace services.

For paid organizational accounts in sanctioned regions, users may have limited access to their public repositories, which have been downgraded to archived read-only repositories. For free organizational accounts in sanctioned regions, however, users will continue to have full access to free public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes.

GitHub は、無料のプライベートリポジトリを含め、認可された地域の開発者が無料のコードコラボレーションサービスに最大限にアクセスできるように、米国の規制当局に引き続き提唱していきます。 regulators for the greatest possible access to free code collaboration services to developers in sanctioned regions, including free private repositories. We believe that offering those free services supports U.S. foreign policy of encouraging the free flow of information and free speech in those regions.

#### 対象のユーザをどのように定義しているのですか？

If GitHub determines that a user or customer is located in a region that is subject to U.S. trade control restrictions, or a user is otherwise restricted under U.S. economic sanctions, then the affiliated account has been restricted to comply with those legal requirements. こうした法的制限の対象となるユーザやお客様の所在地の判断は、IP アドレスや支払い履歴など、いくつもの根拠から導き出されます。 なお、国籍と民族は制裁によるユーザの制限には使用されません。

#### Organization アカウントにはどのような影響がありますか？

If an organization is based out of, or the key individuals or membership of an organization shows sufficient ties to, a sanctioned territory or country, or if the organization otherwise appears to be subject to U.S. economic sanctions, then the organization account and the affiliated owner account will be restricted.

The restriction suspends access to private repository services and paid services, such as availability of free or paid private repositories, secret gists, paid Action minutes, Sponsors, and GitHub Marketplace services. For paid organizational accounts associated with sanctioned regions, users may have limited access to their public repositories, which have been downgraded to archived read-only repositories. For free organizational accounts associated with sanctioned regions, users will continue to have full access to free public repositories for open source projects (and associated public Pages), public gists, and allotted free Action minutes.

#### 貿易制限のあるユーザのプライベートリポジトリを公開できますか？

無料の個人アカウントユーザは、商用目的ではない個人的な通信のみを目的として、制限付きのプライベートリポジトリを公開できます。 これを行うには、リポジトリ設定タブに移動し、「公開」ボタンをクリックします。 リポジトリが公開されると、ユーザはパブリックリポジトリサービスにアクセスできます。 このアクションは取り消すことができません。

#### 貿易制限のあるユーザは、プライベートリポジトリデータにアクセスできますか（リポジトリデータのダウンロードや削除など）？

残念ながら、当社による法律の解釈では、米国政府の許可がない限り、プライベートリポジトリのコンテンツのダウンロードまたは削除を許可することはできません。 GitHub Enterprise Server is a self-hosted virtual appliance that can be run within Customer’s own datacenter or virtual private cloud. We will strongly advocate, with U.S. 私たちは、貿易制限のあるユーザがプライベートリポジトリのコンテンツを確保する権利を、米国の規制当局に強く主張する予定です。 また、制裁対象市場の開発者が GitHub サービスをもっと利用できるようになるよう求め、開発者のグローバルな個人通信をサポートすることで実現するコードコラボレーションの重要性をさらに強調するつもりです。

