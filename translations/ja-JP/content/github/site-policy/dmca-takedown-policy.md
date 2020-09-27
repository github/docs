---
title: DMCAテイクダウンポリシー
redirect_from:
  - /dmca/
  - /dmca-takedown/
  - /dmca-takedown-policy/
  - /articles/dmca-takedown/
  - /articles/dmca-takedown-policy
versions:
  free-pro-team: '*'
---

Welcome to GitHub's Guide to the Digital Millennium Copyright Act, commonly known as the "DMCA." This page is not meant as a comprehensive primer to the statute. が、あなたが GitHub に投稿したコンテンツを対象とする DMCA テイクダウン通知を受け取った場合、またはそのような通知を発行しようとしている権利所有者の場合、このページはこの法律や、それに従うための当社の方針を理解する上で役立つはずです。

（あなたの目的が通知を送信することだけの場合は、[末尾にスキップ](#f-submitting-notices)できます。）

法律に関わるあらゆる事項と同様、具体的な疑問や状況については専門家に相談するのが常に最善です。 あなたの権利に影響を及ぼす可能性のある行動をとる前に、そうすることを強くお勧めします。 このガイドは法律上の助言ではなく、またそのように解釈されるべきではありません。

### DMCA とは？

DMCA とそこから導き出されるポリシーの一部を理解するには、この法律が制定される前の世の中について考えてみると良いでしょう。

DMCA は、ユーザ生成コンテンツをホストするサービスプロバイダーにセーフハーバーを提供します。 たった一つの著作権侵害請求でも最大 15 万ドルの法定損害賠償金が生じる可能性があることを考えると、ユーザ生成コンテンツの責任を問われる恐れは、サービスプロバイダーにとって死活問題になり得ます。 損害規模が数百万人のユーザに及ぶ可能性がある、クラウドコンピューティングや YouTube、Facebook、GitHub などのユーザ生成コンテンツサイトは、おそらく DMCA なしでは（または少なくともそのコストの一部をユーザに負担してもらわなければ）[存在しなかったでしょう](https://arstechnica.com/tech-policy/2015/04/how-the-dmca-made-youtube/)。

DMCA は、権利侵害が申し立てられたユーザ生成コンテンツをホストしているインターネットサービスプロバイダー向けの[著作権責任のセーフハーバー](https://www.copyright.gov/title17/92chap5.html#512)を設けることにより、この問題に対処しています。 基本的に、DMCA のノーティスアンドテイクダウンの規則に従っている限り、サービスプロバイダーはユーザ生成コンテンツに基づく著作権侵害の責任を問われません。 このため、DMCA のセーフハーバーの状態を維持することは GitHub にとって重要です。

### DMCA 通知の要約

DMCA には、すべての GitHub ユーザが知っておく必要のある 2 つの単純でわかりやすい手続きが用意されています。それは、(i) 著作権所有者がコンテンツの削除を要求するための[テイクダウン通知](/articles/guide-to-submitting-a-dmca-takedown-notice)の手続き、および (ii) コンテンツが誤ってまたは誤認されて削除された場合に、ユーザがコンテンツを再度有効にするための[異議申し立て通知](/articles/guide-to-submitting-a-dmca-counter-notice)の手続きです。

著作権所有者は DMCA [テイクダウン通知](/articles/guide-to-submitting-a-dmca-takedown-notice)を使用して、GitHub に著作権を侵害していると思われるコンテンツを削除するよう依頼することができます。 ソフトウェア設計者や開発者であれば、著作権で保護されたコンテンツを日常的に作成しているでしょう。 If someone else is using your copyrighted content in an unauthorized manner on GitHub, you can send us a DMCA takedown notice to request that the infringing content be changed or removed.

一方、[異議申し立て通知](/articles/guide-to-submitting-a-dmca-counter-notice)は間違いを修正するために使用できます。 テイクダウン通知を送信した人が著作権を保持していない場合や、あなたがライセンスを所有していることを知らなかった場合など、間違いでテイクダウン通知が行われるケースもあります。 通常、GitHub には間違いがあったかどうかを知る術がないため、このような場合は DMCA の異議申し立て通知を使用してコンテンツの復元を依頼してください。

DMCA のノーティスアンドテイクダウンプロセスは、著作権侵害に関する苦情に対してのみ使用されるべきものです。 DMCA プロセスを通じて送信された通知では、著作物または著作権侵害が申し立てられた著作物を特定する必要があります。 このプロセスは、[商標権侵害](/articles/github-trademark-policy/)の申し立てや[機密データ](/articles/github-sensitive-data-removal-policy/)に関する苦情など、他の苦情には使用できません。これらの状況に対しては個別のプロセスが用意されています。

### A. 具体的なプロセスは？

DMCA のフレームワークは、「授業中のメモまわし」に少し似ています。 著作権所有者は、GitHub にユーザに関する苦情を渡します。 内容に不備がなければ、当社は苦情をユーザに伝えます。 ユーザは、苦情に異議を唱える場合は、その旨を記したメモを返すことができます。 GitHub は、通知が DMCA の最小要件を満たしているかどうかを判断する以外、このプロセスではほとんど裁量権を行使しません。 主張の価値の評価は当事者（およびその弁護士）に委ねられます。なお、通知は偽証罪によって罰せられる対象になることにご注意ください。

プロセスの基本的な手順は次のとおりです。

1. **著作権所有者が調査します。**著作権所有者は (a) 自身が原著作物の著作権を所有していること、および (b) GitHub のコンテンツが無許可であり著作権を侵害していることの両方を確認するために必ず最初の調査を行う必要があります。 これには、使用が[フェアユース](https://www.lumendatabase.org/topics/22)として保護されていないことの確認が含まれます。 著作権で保護されたコンテンツを少量のみ使用する場合、そのコンテンツを変革的な方法で使用する場合、教育目的で使用する場合、または上記を組み合わせた場合、特定の使用がフェアユースに該当する場合があります。 コードは当然そのような用途に適しているため、使用事例ごとに異なり、個別に検討する必要があります。
> **例**：Acme Web Company の従業員が、GitHub リポジトリで会社のコードの一部を見つけた。 Acme Web Company は、自社のソースコードを複数の信頼できるパートナーにライセンス供与している。 テイクダウン通知を送信する前に、Acme はこれらのライセンスとその契約を確認して、GitHub 上のコードがそのいずれかに基づいて許可されていないことを確認する必要がある。

2. **著作権所有者が通知を送信します。**調査を行った後、著作権所有者は[テイクダウン通知](/articles/guide-to-submitting-a-dmca-takedown-notice)を準備し、GitHub に送信します。 テイクダウン通知が（[ハウツーガイド](/articles/guide-to-submitting-a-dmca-takedown-notice)で説明されている）法定要件に従って十分に詳細であることを条件に、当社は[パブリックリポジトリ](https://github.com/github/dmca)に[通知を投稿](#d-transparency)し、影響を受けるユーザにリンクを渡します。

3. **GitHub Asks User to Make Changes.** If the notice alleges that the entire contents of a repository infringe, or a package infringes, we will skip to Step 6 and disable the entire repository or package expeditiously. Otherwise, because GitHub cannot disable access to specific files within a repository, we will contact the user who created the repository and give them approximately 1 business day to delete or modify the content specified in the notice. ユーザに変更を行う機会を提供した場合、当社はその旨を著作権者に通知します。 Because packages are immutable, if only part of a package is infringing, GitHub would need to disable the entire package, but we permit reinstatement once the infringing portion is removed.

4. **User Notifies GitHub of Changes.** If the user chooses to make the specified changes, they *must* tell us so within the window of approximately 1 business day. 選択しなかった場合は、当社はリポジトリを無効にします（ステップ 6 で説明）。 ユーザが変更を行ったことを当社に通知した場合、当社は変更が行われたことを確認してから著作権所有者に通知します。

5. **著作権所有者が通知を修正または撤回します。**ユーザが変更を行った場合、著作権所有者はそれを確認し、変更が不十分な場合はテイクダウン通知を更新または修正する必要があります。 GitHub は、元のテイクダウン通知を更新する旨または修正版を送信する旨の連絡が著作権所有者からない限り、それ以上の措置を講じません。 著作権所有者は、変更に満足した場合、正式な撤回を提出することも、何もしないこともできます。 沈黙が 2 週間以上続いた場合、GitHub はそれをテイクダウン通知の暗黙の撤回として解釈します。

6. **GitHub May Disable Access to the Content.** GitHub will disable a user's content if: (i) the copyright owner has alleged copyright over the user's entire repository or package (as noted in Step 3); (ii) the user has not made any changes after being given an opportunity to do so (as noted in Step 4); or (iii) the copyright owner has renewed their takedown notice after the user had a chance to make changes. 著作権所有者が通知を*修正*することを代わりに選択した場合、当社はステップ 2 に戻り、修正された通知を新規の通知とみなしてプロセスを繰り返します。

7. **ユーザは異議申し立て通知を送信できます。**コンテンツを無効にしたユーザは、選択肢について弁護士に相談することをお勧めします。 間違いや誤認によりコンテンツが無効にされたと思われる場合は、ユーザは[異議申し立て通知](/articles/guide-to-submitting-a-dmca-counter-notice)を送信できます。 元の通知と同様に、当社は異議申し立て通知が十分に詳細であることを確認します（[ハウツーガイド](/articles/guide-to-submitting-a-dmca-counter-notice)で説明されています）。 問題ない場合、当社は[パブリックリポジトリ](https://github.com/github/dmca)に[投稿](#d-transparency)し、リンクを送信することで著作権所有者に通知を返します。

8. **著作権所有者は法的措置を講じることができます。**異議申し立て通知を受け取った後も引き続きコンテンツを無効にしたい場合、著作権所有者は GitHub のコンテンツに関連する侵害行為にユーザが関与することを抑制する裁判所命令を求める法的措置を講じる必要があります。 つまり、訴えられる可能性があります。 10〜14 日以内に著作権所有者が GitHub に通知しない場合、管轄権のある裁判所に提出された有効な訴状の写しを送信することにより、GitHub は無効化されたコンテンツを再度有効にします。

### B. フォークの場合は？ （またはフォークとは？）

GitHub の最も優れた機能の 1 つに、ユーザが互いのリポジトリを「フォーク」できることがあります。 どういうことかと言うと、 基本的に、ユーザは GitHub のプロジェクトのコピーを自分のリポジトリに作成できます。 ライセンスや法律で許可されている範囲で、ユーザはそのフォークを変更してメインプロジェクトに戻したり、プロジェクトの独自のバリエーションとして保持したりすることができます。 これらの各コピーは、元のリポジトリの「[フォーク](/articles/github-glossary#fork)」であり、フォークの「親」とも呼ばれます。

GitHub は、親リポジトリを無効にするときにフォークを自動的に無効に*しません*。 これは、フォークが異なるユーザに属し、著しく変更されている可能性があり、フェアユースの原則によって保護されている別の方法でライセンス供与または使用されている可能性があるためです。 GitHub がフォークに対して独立した調査を行うことはありません。 著作権所有者がその調査を行い、フォークも著作権を侵害していると思われる場合は、テイクダウン通知にフォークを明示的に含めることが求められます。

### C. うっかりして期間内に変更できなかった場合は？

We recognize that there are many valid reasons that you may not be able to make changes within the window of approximately 1 business day we provide before your repository gets disabled. 当社からのメッセージがスパムフォルダに入ってしまう場合も、休暇中だった場合も、対象のメールアカウントを定期的に確認していない場合も、単に忙しかった場合もあるでしょう。 このように If you respond to let us know that you would have liked to make the changes, but somehow missed the first opportunity, we will re-enable the repository one additional time for approximately 1 business day to allow you to make the changes. Again, you must notify us that you have made the changes in order to keep the repository enabled after that window of approximately 1 business day, as noted above in [Step A.4](#a-how-does-this-actually-work). なお、この追加の機会が提供されるのは 1 度限りですのでご注意ください。

### D. 透明性

当社は、透明性は美徳であると信じています。 GitHub から削除されるコンテンツとその理由は公にされるべきです。 知識のある人は、不透明なシステムでは見過ごされてしまう潜在的な問題に気づきこれを表面化することができます。 当社は、受け取った法的通知（元の通知、異議申し立て通知、撤回を含む）の編集後の写しを <https://github.com/github/dmca> に投稿します。 当社は、個人の連絡先情報は公開しません。通知を公開する前に個人情報（URL のユーザ名を除く）を削除します。 ただし、特別な要請がない限り、当社が通知のその他の情報を編集することはありません。 こちらに公開された[通知](https://github.com/github/dmca/blob/master/2014/2014-05-28-Delicious-Brains.md)と[異議申し立て通知](https://github.com/github/dmca/blob/master/2014/2014-05-01-Pushwoosh-SDK-counternotice.md)の例を示しますのでご覧ください。 当社は、コンテンツを削除すると、関連する通知へのリンクを代わりに投稿します。

また、当社が未編集の通知を公開することはありませんが、受け取った通知の未編集の完全な写しを、それによって自身の権利が影響を受ける当事者に直接提供する場合はありますのでご注意ください。

### E. 繰り返しの侵害

GitHub は、当社のポリシーとして、状況によっては独自の裁量により、GitHub またはその他の著作権またはその他の知的財産権を侵害する可能性のあるユーザのアカウントを無効化および解約します。

### F. 通知の提出

通知または異議申し立て通知を提出する準備ができている場合
- [DMCA 通知の提出方法](/articles/guide-to-submitting-a-dmca-takedown-notice)
- [DMCA 異議申し立て通知の提出方法](/articles/guide-to-submitting-a-dmca-counter-notice)

### 詳細および当社の見解

インターネットを探せば、著作権システム全般、特に DMCA についての解説や批判は難なく見つけることができるでしょう。 GitHub は、オンラインでイノベーションを促進する上で DMCA が果たしてきた重要な役割を認識し、評価していますが、著作権法については刷新とまではいかなくても、多少の改訂を加える程度のことはあってもいいのではないかと考えています。 ソフトウェアの世界では、コードは絶えず改善、更新されています。 DMCA が作成された 1998 年から、テクノロジーはどれほど変化したことでしょう。 ソフトウェアに適用されるこうした法律を更新することは理にかなっているのではないでしょうか。

もちろん当社の考え方が絶対ではありません が、改革に関する意見や提案について私たちが見つけた学術記事やブログ投稿を以下に紹介しますので、もしご関心がございましたらご覧ください。

- [Unintended Consequences: Twelve Years Under the DMCA](https://www.eff.org/wp/unintended-consequences-under-dmca) (Electronic Frontier Foundation)
- [Statutory Damages in Copyright Law: A Remedy in Need of Reform](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1375604) (William & Mary Law Review)
- [Is the Term of Protection of Copyright Too Long?](https://the1709blog.blogspot.com/2012/11/is-term-of-protection-of-copyright-too.html) (The 1709 Blog)
- [If We're Going to Change DMCA's 'Notice & Takedown,' Let's Focus on How Widely It's Abused](https://www.techdirt.com/articles/20140314/11350426579/if-were-going-to-change-dmcas-notice-takedown-lets-focus-how-widely-its-abused.shtml) (TechDirt)
- [Opportunities for Copyright Reform](https://www.cato-unbound.org/issues/january-2013/opportunities-copyright-reform) (Cato Unbound)
- [Fair Use Doctrine and the Digital Millennium Copyright Act: Does Fair Use Exist on the Internet Under the DMCA?](https://digitalcommons.law.scu.edu/lawreview/vol42/iss1/6/) (Santa Clara Law Review)

GitHub は、必ずしもこれらの記事の視点を支持しているわけではありません。 私たちがこうしたリンクを提供するのは、あなたがより多くのことを学び、あなた自身の意見を形成し、そしてあなたが選んだ代表者（例えば、[米国議会](https://www.govtrack.us/congress/members)や[欧州議会](https://www.europarl.europa.eu/meps/en/home)）に働き掛けて、あなたが考える必要な変化を求めることができるようにするためです。 Congress</a> or [E.U. Parliament](https://www.europarl.europa.eu/meps/en/home)) to seek whatever changes you think should be made.
