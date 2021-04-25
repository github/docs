---
title: GitHub個人情報削除ポリシー
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

We offer this private information removal process as an exceptional service only for high-risk content that violates [GitHub's Terms of Service](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), such as when your security is at risk from exposed access credentials. This guide describes the information GitHub needs from you in order to process a request to remove private information from a repository.

### What is Private Information?

For the purposes of this document, “private information” refers to content that (i) should have been kept confidential, *and* (ii) whose public availability poses a specific or targeted security risk to you or your organization.

"Security risk" refers to a situation involving exposure to physical danger, identity theft, or increased likelihood of unauthorized access to physical or network facilities.

#### Private information removal requests are appropriate for:
- 組織のサーバー、ネットワーク、またはドメインにアクセスするための、ユーザ名とパスワード、アクセストークン、またはその他の機密情報の組み合わせなどの、アクセス認証情報。
- あなたに代わって第三者にアクセスを許可する AWS トークンおよびその他同様のアクセス認証情報。 トークンが自分のものであることを示すことができなければなりません。
- Documentation (such as network diagrams or architecture) that poses a specific security risk for an organization.
- [Information](/github/site-policy/github-community-guidelines#doxxing-and-invasion-of-privacy) related to, and posing a security risk to, you as an individual (such as social security numbers or other government identification numbers).

#### Private information removal requests are _not_ appropriate for:
- Internal server names, IP addresses, and URLs, on their own. You must be able to show that their use in a particular file or piece of code poses a security threat.
- 会社のアイデンティティ、名前、ブランド、ドメイン名など、GitHub 上のファイル内で単に会社に言及しているだけの場合。 You must be able to articulate why a use of your company's identity is a threat to your company's security posture.
- 特定のセキュリティリスクをもたらすことはないが、それ以外の理由で好ましくないと考えられるファイルやリポジトリ全体。
- あなたまたはあなたの組織の著作権を侵害している可能性のあるコンテンツを削除するリクエスト。 著作権関連の問題に対する GitHub の対応方法について質問がある場合や、著作権侵害の可能性があるコンテンツを報告したい場合は、[DMCA テイクダウンポリシー](/articles/dmca-takedown-policy/)をご確認ください。 The private information removal process is generally not intended for the removal of full files or repositories — only for the specific pieces of private information in those files. While there may be cases where files are filled entirely with private information, you must justify the security risk for the removal of such files, and this may increase the time required to process your request.
- 商標に関する紛争。 商標関連の問題に対する GitHub の対応方法について質問がある場合や、組織の商標やサービスマークを含んでいるコンテンツを報告したい場合は、[トレードマークポリシー](/articles/github-trademark-policy/)をご確認ください。
- プライバシーに関する苦情。 If you wish to access, transfer, change, or delete your personal information on GitHub, please contact us via [our Privacy contact form](https://github.com/contact/privacy).
- マルウェアや汎用ツールなど、[コミュニティガイドライン](/articles/github-community-guidelines/)で管理されているコンテンツ。 If you have questions about our Community Guidelines or believe that content on GitHub might violate our guidelines, you can use {% data variables.contact.report_content %} to contact us.

### 知っておくべきこと

**まずは丁寧にお願いしてください。**当社にデータ削除のリクエストを送信する前に、まずはユーザに直接連絡することが重要です。 連絡先情報は公開プロフィールページやリポジトリの README または Support ファイルに記載されている場合があります。または、Issue を作成したり、リポジトリでプルリクエストを送信して連絡を取ることもできます。 これは厳密には義務ではありませんが、その方が印象の良いやり方と言えるでしょう。

**ボットを使わないでください。**熟練の専門家に、あなたが送信するすべてのリクエストの事実を評価してもらうべきです。 取り組みを第三者に外部委託している場合は、その活動内容を把握し、第三者が自動化されたボットを使用して苦情を一括送信していないことを確認してください。 こうした苦情には、セキュリティ上の脅威をもたらさないデータが含まれていることが少なくありません。また、十分な説明が含まれていないために、正当な苦情であっても何度も確認が必要となり、結果として遅延が生じる場合もあります。

**Send In The Correct Request.** As noted above, we offer this private information removal process as an exceptional service only for high-risk content. We are not able to use this process to remove other kinds of content, such as potentially infringing content, and we are not able to process any other kinds of removal requests simultaneously while processing private information removal requests. We will be able to help you more quickly if you send in your private information removal requests separately from any requests to remove potentially infringing content. If you are unsure whether your request involves only private information or also involves other legal matters, please consult legal counsel.

**Processing Time.** While we do process private information removal requests as quickly as possible, due to the volume of requests we process, it may take some time for your request to be reviewed. リクエストを追加で送信したり、複数の連絡先からの複数のリクエストを送信したりすると、遅延が発生する場合があります。

### 具体的なプロセスは？

1. **申立人が調査します。**要請者は、自身で調査を実施し、[当社が求める詳細情報](#your-request-must-include)を提供する必要があります。最も重要なのは、データがどのようにセキュリティリスクをもたらすのかを説明することです。 GitHub is not in a position to search for or make initial determinations about private information on any individual's or organization's behalf.

2. **Complainant Sends a Private Information Removal Request.** After conducting an investigation, the complainant prepares and [sends a private information removal request](#sending-a-private-information-removal-request) to GitHub. リクエストがセキュリティリスクを立証するほど詳細でない場合や GitHub がデータを特定できない場合は、当社は返信して追加情報を求めます。

3. **GitHub Asks User to Make Changes.** In most cases, we will contact the user who created the repository and give them an opportunity to delete or modify the private information specified in the request or to dispute the claim.

4. **ユーザが GitHub に変更を通知します。**ユーザは、指定された変更を行うことを決定した場合、指定された時間内にその旨を当社に通知する必要があります。 そうしなかった場合は、当社はリポジトリを無効にします。 ユーザが変更を行ったことを当社に通知した場合、当社は変更が行われたことを確認してから申立人に通知します。

  または

5. **User May Dispute the Request.** If a user believes the content in question is not private information subject to this Policy, they may dispute it. この場合、通常は申立人に対して、任意でユーザに連絡し、ユーザとの間で、問題を合理的な範囲内で直接解決していただくことになります。

6. **申立人が変更を確認します。**ユーザが変更を加えた場合、申立人はそれを確認する必要があります。 変更が不十分な場合、申立人は GitHub にその理由を説明する詳細を提供する必要があります。 GitHub はリポジトリを無効にする場合もあれば、もう一度ユーザに変更を加える機会を与える場合もあります。

7. **User May Request an Additional Window to Make Changes.** If the user missed their opportunity to remove the private information specified in the notice, we may allow them an additional window of approximately 1 business day, upon request, to make those changes. その場合、GitHub は申立人に通知します。

#### フォークの場合は？ （またはフォークとは？）
GitHub の最も優れた機能の 1 つに、ユーザが互いのリポジトリを「フォーク」できることがあります。 どういうことかと言うと、 基本的に、ユーザは GitHub のプロジェクトのコピーを自分のリポジトリに作成できます。 ライセンスや法律で許可されている範囲で、ユーザはそのフォークを変更してメインプロジェクトに戻したり、プロジェクトの独自のバリエーションとして保持したりすることができます。 これらの各コピーは、元のリポジトリの「[フォーク](/articles/github-glossary/#fork)」であり、フォークの「親」とも呼ばれます。

GitHub は、親リポジトリを無効にするときにフォークを自動的に無効にしません。 これは、フォークはさまざまなユーザに属しており、著しく変更されている可能性があるためです。 GitHub がフォークに対して独立した調査を行うことはありません。 We expect those sending private information removal requests to conduct that investigation and, if they believe that the forks also contain private information, expressly include forks in their request.

If at the time that you submitted your notice, you identified all existing forks of that repository, we would process a valid claim against all forks in that network at the time we process the notice. 新しく作成されたフォークすべてに同じコンテンツが含まれる可能性を考慮して、これを行います。 In addition, if the reported network that contains the reported content is larger than one hundred (100) repositories and thus would be difficult to review in its entirety, we may consider disabling the entire network if you state in your notice that, based on the representative number of forks you have reviewed, you believe that all or most of the forks contain the content reported in the parent repository.

### Sending A Private Information Removal Request

GitHub がホストするコンテンツの種類（主にソフトウェアコード）やコンテンツの管理方法（Git を使用）の性質上、苦情はできるだけ具体的にする必要があります。 In order for us to verify that a user has removed reported private information completely, we need to know exactly where to look.

These guidelines are designed to make the processing of requests to remove private information as straightforward as possible.

#### リクエストには以下を含める必要があります。

1. A working, clickable link to each file containing private information. （検索結果、例、スクリーンショットから処理することはできません。）
2. Specific line numbers within each file containing the private information.
3. 特定した各アイテムが、あなたまたはあなたの組織にどのようにセキュリティリスクをもたらすかについての簡潔な説明。 ***単にデータがセキュリティリスクをもたらすという記述だけでなく、どのようにもたらされるかを説明することが重要です。***
4. セキュリティリスクに直面している組織の代理人として行動している第三者の場合は、その組織を代理して行動する法的権利があるという声明を含めてください。
5. 任意：リクエストが特に緊急であるかどうかと、その場合は理由をお知らせください。 We respond to all private information removal requests as quickly as possible. しかし、ごく最近の認証情報が暴露されているなど、このリクエストが特に緊急を要する場合は、その理由を説明してください。

### リクエストの提出方法

You can submit your request to remove private information via our [contact form](https://support.github.com/contact?tags=docs-private-information). メッセージの本文には平文版のリクエストを含めてください。 添付ファイルでリクエストを送信した場合、処理に時間がかかる場合があります。

### 異議申し立て

当社から個人情報のリクエストを受け取った場合は、これに異議を申し立てることができます。その場合はメールに返信し、問題のコンテンツがこのポリシーの対象となる個人情報ではないと思われる理由を、可能な限り詳細にお知らせください。
