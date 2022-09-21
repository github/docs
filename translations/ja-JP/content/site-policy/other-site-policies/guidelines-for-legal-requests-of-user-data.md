---
title: ユーザー データの司法手続き上の要求に関するガイドライン
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Are you a law enforcement officer conducting an investigation that may involve user content hosted on GitHub?
Or maybe you're a privacy-conscious person who would like to know what information we share with law enforcement and under what circumstances.
Either way, you're on the right page.

In these guidelines, we provide a little background about what GitHub is, the types of data we have, and the conditions under which we will disclose private user information.
Before we get into the details, however, here are a few important details you may want to know:

- 当社は、法律または裁判所命令によって禁止されていない限り、ユーザーのアカウント情報への要求に関して[**影響を受けるユーザーに通知します**](#we-will-notify-any-affected-account-owners)。
- 当社は、[有効な裁判所命令または捜索令状](#with-a-court-order-or-a-search-warrant)なしに、IP アドレス ログなどの**位置追跡データ**を開示することはありません。
- 当社は、有効な[捜索令状](#only-with-a-search-warrant)なしに、プライベート リポジトリのコンテンツなどの**非公開のユーザー コンテンツ**を開示することはありません。

## <a name="about-these-guidelines"></a>本ガイドラインの概要

あなたは、GitHub でホストされているユーザー コンテンツに関連する可能性がある調査を実施する法執行機関の担当者ですか。

そうでなければ、当社が法執行機関と共有する情報と、それを共有する状況を知りたいと思っているプライバシー意識の高い方でしょう。

いずれにせよ、適切なページにアクセスしています。

## <a name="github-terminology"></a>GitHub の用語

Before asking us to disclose data, it may be useful to understand how our system is implemented.
GitHub hosts millions of data repositories using the <bpt id="p1">[</bpt>Git version control system<ept id="p1">](https://git-scm.com/video/what-is-version-control)</ept>.
Repositories on GitHub—which may be public or private—are most commonly used for software development projects, but are also often used to work on content of all kinds.

- 本ガイドラインで、当社は GitHub の概要、当社が保持するデータの種類、および当社がユーザー個人情報を開示する状況について少し背景を説明します。

- [**コラボレーター**](/articles/github-glossary#collaborator) — コラボレーターとは、リポジトリ所有者によって投稿に招待されたユーザーであり、リポジトリに対する読み取りおよび書き込みアクセス権を持ちます。

- ですが、詳しく説明する前に、お客様が知りたいと思われる重要な詳細をいくつか説明します。

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Repositories<ept id="p2">**</ept><ept id="p1">](/articles/github-glossary#repository)</ept> — A repository is one of the most basic GitHub elements.
They may be easiest to imagine as a project's folder.
A repository contains all of the project files (including documentation), and stores each file's revision history.
Repositories can have multiple collaborators and, at its administrators' discretion, may be publicly viewable or not.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Pages<ept id="p2">**</ept><ept id="p1">](/articles/what-is-github-pages)</ept> — GitHub Pages are public webpages freely hosted by GitHub that users can easily publish through code stored in their repositories.
If a user or organization has a GitHub Page, it can usually be found at a URL such as <ph id="ph1">`https://username.github.io`</ph> or they may have the webpage mapped to their own custom domain name.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Gists<ept id="p2">**</ept><ept id="p1">](/articles/creating-gists)</ept> — Gists are snippets of source code or other text that users can use to store ideas or share with friends.
Like regular GitHub repositories, Gists are created with Git, so they are automatically versioned, forkable and downloadable.
Gists can either be public or secret (accessible only through a known URL). Public Gists cannot be converted into secret Gists.

## <a name="user-data-on-githubcom"></a>GitHub.com 上のユーザー データ

以下に、GitHub 上のユーザーとプロジェクトに関して当社が維持するデータの種類の一覧を示します (すべてを網羅するものではありません)。

- <bpt id="p1">&lt;a name="public-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Public account data<ept id="p2">**</ept> — There is a variety of information publicly available on GitHub about users and their repositories.
User profiles can be found at a URL such as <ph id="ph1">`https://github.com/username`</ph>.
User profiles display information about when the user created their account as well their public activity on GitHub.com and social interactions.
Public user profiles can also include additional information that a user may have chosen to share publicly.
All user public profiles display:
  - ユーザー名
  - ユーザーが星印を付けたリポジトリ
  - ユーザーがフォローしている他の GitHub ユーザー
  - 彼らをフォローしているユーザー

  オプションで、ユーザーは次の情報の公開共有を選択することもできます。
  - ユーザーの実名
  - アバター
  - 関連会社　
  - 所在地
  - 公開された電子メール アドレス
  - ユーザー個人の Web ページ
  - ユーザーが属する組織 (*組織またはユーザーの設定に応じて*)

- <bpt id="p1">&lt;a name="private-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Private account data<ept id="p2">**</ept> — GitHub also collects and maintains certain private information about users as outlined in our <bpt id="p3">[</bpt>Privacy Policy<ept id="p3">](/articles/github-privacy-statement)</ept>.
This may include:
  - プライベートな電子メール アドレス
  - 支払いの詳細
  - セキュリティ アクセス ログ
  - プライベート リポジトリでの交流に関するデータ

  GitHub が収集する非公開のアカウント情報の種類を把握するには、ユーザーの{% data reusables.user-settings.personal_dashboard %}にアクセスし、左側のメニューバーのセクションを参照してください。

- 当社のユーザーは、多くの場合に企業または個人の最も貴重な資産の一部であるソフトウェア プロジェクトとコードを当社に委託してくれています。
  - 組織名
  - 所有者が星印を付けたリポジトリ
  - 組織の所有者であるすべての GitHub ユーザー

  オプションで、管理ユーザーは次の情報の公開共有を選択することもできます。
  - アバター
  - 関連会社　
  - 所在地
  - 直属のメンバーとチーム
  - コラボレーター

- その信頼を維持することは、当社にとって不可欠です。それは、ユーザー データを安全かつ非公開で維持することを意味します。

  - コード自体
  - コードの以前のバージョン
  - プロジェクトの安定したリリース版
  - コラボレーター、投稿者、リポジトリ メンバーに関する情報
  - コミット、分岐、プッシュ、プル、フォーク、複製などの Git 操作のログ
  - プル リクエストやコミットに関するコメントなどの Git 操作に関連する会話
  - 問題や Wiki ページなどのプロジェクト ドキュメント
  - プロジェクトへの投稿と投稿者のネットワークを示す統計とグラフ

- <a name="private-repository-data"></a>
**プライベート リポジトリ データ** — GitHub は、特別に招待されたユーザーのみがプライベート リポジトリのデータにアクセスする場合を除き、パブリック リポジトリに表示できるのと同じ種類のプライベート リポジトリ データを収集し、維持します。

- <a name="other-data"></a>
**その他のデータ** — さらに、GitHub はページへの訪問などの分析データと、ユーザーがたまに自発的に提供した情報 (当社のサポート チームとの連絡、アンケートの情報、サイトの登録など) を収集します。

## <a name="we-will-notify-any-affected-account-owners"></a>当社は、影響を受けるアカウント所有者に通知します

It is our policy to notify users about any pending requests regarding their accounts or repositories, unless we are prohibited by law or court order from doing so. Before disclosing user information, we will make a reasonable effort to notify any affected account owner(s) by sending a message to their verified email address providing them with a copy of the subpoena, court order, or warrant so that they can have an opportunity to challenge the legal process if they wish. In (rare) exigent circumstances, we may delay notification if we determine delay is necessary to prevent death or serious harm or due to an ongoing investigation.

## <a name="disclosure-of-non-public-information"></a>非公開情報の開示

当社のユーザーの圧倒的大多数は、新しいビジネスの創出や新しいテクノロジの構築、人類の全般的な向上のために GitHub のサービスを利用していますが、その一方で、世界中に広がる何百人もユーザーの中には、悪事を働く人がいるものだということを認識しています。

- <a name="with-user-consent"></a>
**ユーザーの同意を得て** — GitHub は、要求された場合、ユーザー (または組織アカウントの場合は所有者) に直接、またはユーザーの書面による同意を得た指定された第三者 (ユーザーがその身元を確認したことを GitHub が納得したうえで) に対して、非公開アカウント情報を提供します。

- <a name="with-a-subpoena"></a>
**召喚状をもって** — 有効な召喚状、民事事件の調査要求、または刑事事件もしくは民事事件の調査に関連して発行された同類の司法手続きに応じる場合、当社は以下を含む特定の非公開アカウント情報を提供できます。

  - アカウントに関連付けられた名前
  - アカウントに関連付けられた電子メール アドレス
  - 請求情報
  - 登録日と終了日
  - アカウント登録時の IP アドレスと日時
  - 調査に関連して指定された時刻または事象でアカウントへのアクセスに使用された IP アドレス

そのような場合、当社は、法執行機関が一般の人々を守るうえで正当な権益にかなうように支援します。

Please note that the information available will vary from case to case. Some of the information is optional for users to provide. In other cases, we may not have collected or retained the information.

- 当社は、法執行機関の担当者にガイドラインを示すことで、競合することが多いユーザー プライバシーの権益と司法制度の間でバランスをとることを望んでいます。

  - ある期間にわたるユーザーの移動を明らかにするログ
  - アカウントまたはプライベート リポジトリの設定 (どのユーザーが特定のアクセス許可を持っているかなど)
  - ユーザーごとまたは IP ごとの分析データ (参照履歴など)
  - アカウント作成以外、または特定の日時のセキュリティ アクセス ログ

- 当社は、本ガイドラインが両方の側面に期待事項を設定し、GitHub の内部プロセスの透明性を高めるのに役立つことを望んでいます。

  - シークレット Gists のコンテンツ
  - プライベート リポジトリ内のソース コードやその他のコンテンツ
  - プライベート リポジトリへの投稿およびコラボレーションの記録
  - プライベート リポジトリ内のやり取りやドキュメント (問題や Wiki など)
  - 認証や暗号化に使用されるセキュリティ キー

- 当社のユーザーは、当社がユーザーの個人情報を大切に扱っており、その保護のためにできることをしているという点をご理解ください。

## <a name="cost-reimbursement"></a>費用の払い戻し

これは、少なくとも、適切な法的要件が満たされた場合にのみデータを第三者に公開する、ということを意味します。

当社は、非常時またはその他の緊急事態では費用を請求しませんが、その他の司法手続き上の要求については、法令によって義務付けられていない限り、以下のスケジュールに従って払い戻しを求めます。

- 最大 25 個の識別子の最初の検索: 無料
- 最大 5 つのアカウントのサブスクライバーに関する情報/データの生成: 無料
- 5 つを超えるアカウントのサブスクライバーの情報/データの生成: 1 アカウントにつき 20 ドル
- 2 回目の検索: 1 回の検索につき 10 ドル

## <a name="data-preservation"></a>データの保持

当社は、公的な刑事事件の調査に関連した米国の法執行機関からの正式な要求後、および裁判所命令またはその他の手続きの発行が保留になってから、最大 90 日間アカウント記録を保存する措置を講じます。

## <a name="submitting-requests"></a>要求の提出

以下に要求を行ってください。

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

参照コピーは、legal-support@github.com 宛てに電子メールで送付してください

次の情報を含め、できるだけ明確かつ厳密に要求を作成してください。

- 情報の要求を発行する当局に関する詳細な情報
- 担当者の名前およびバッジ/ID
- 公的な電子メール アドレスと連絡先の電話番号
- 対象のユーザー、組織、リポジトリ名
- 対象のページ、Gists、またはファイルの URL
- 必要な記録の種類の説明

当社がお客様の要求を調査するのに、2 週間以上かかることをご了承ください。

## <a name="requests-from-foreign-law-enforcement"></a>外国の法執行機関からの要求

さらに、当社は法執行機関の専門家がデータの要求を効率よく調整し、彼らの調査の実施に必要な情報だけを対象にすることができるように、GitHub のシステムに関して彼らを教育することも望んでいます。

## <a name="questions"></a>お問い合わせ

Do you have other questions, comments or suggestions? Please contact {% data variables.contact.contact_support %}.
