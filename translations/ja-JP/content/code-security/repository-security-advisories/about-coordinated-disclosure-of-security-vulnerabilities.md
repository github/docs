---
title: セキュリティ脆弱性の調整された開示について
intro: 脆弱性の開示は、セキュリティの報告者とリポジトリメンテナの調整された取り組みです。
redirect_from:
- /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
shortTitle: Coordinated disclosure
ms.openlocfilehash: a5d4445525b46536cbfd3301cccb78140589de22
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087581"
---
## 業界における脆弱性の開示について

{% data reusables.security-advisory.disclosing-vulnerabilities %}

脆弱性の初期の報告は非公開で行われ、完全な詳細はメンテナが問題を認め、理想的には対策もしくはパッチが利用可能になり、場合によってはパッチがインストールできるようさらに時間をおいてから公開されます。 詳細については、OWASP Cheat Sheet Series (OWASP チート シート シリーズ) の Web サイトの [「OWASP Cheat Sheet Series」 (OWASP チート シート シリーズ) の「Vulnerability Disclosure」 (脆弱性の開示) ](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)を参照してください。

### 脆弱性報告者のためのベストプラクティス

脆弱性をメンテナに非公開で報告するのは良いやり方です。 可能なら、脆弱性報告者は以下を避けることをおすすめします。
- メンテナに対策の機会を与えることなく脆弱性を公開してしまうこと。
- メンテナをバイパスしてしまうこと。
- コードの修正バージョンが利用可能になる前に脆弱性を公開してしまうこと。
- パブリックなバウンティプログラムが存在しない場合に、問題の報告に補償がなされると期待すること。

メンテナに連絡を取ろうとしてレスポンスがなかったり、連絡は取れたものの公開をあまりに長く待つよう頼まれたなら、一定期間後に脆弱性報告者が脆弱性を公開することは許容できます。 

脆弱性の報告者は、報告のプロセスの一部として、開示ポリシーの条件を明確に述べることをおすすめします。 脆弱性報告者が厳密なポリシーに従っていないばあいでも、意図的な脆弱性の開示の時期についてメンテナが明確な期待を持てるようにするのは良い考えです。 開示ポリシーの例については、GitHub Security Lab の Web サイトの「[Security Lab's disclosure policy](https://securitylab.github.com/advisories#policy)」 (Security Lab の開示ポリシー) を参照してください。

### メンテナのためのベストプラクティス

メンテナは、脆弱性の報告をいつどのように受けたいかを明確に示しておくのが良いでしょう。 この情報が明確に利用できない場合、脆弱性報告者はどのように連絡をすればいいか分からず、gitのコミット履歴から開発者のメールアドレスを取り出して適切なセキュリティに関する連絡先を見つけようとするかもしれません。 これは、不和、報告の喪失、未解決の報告の公開につながるかもしれません。

メンテナは、適時に脆弱性を開示すべきです。 リポジトリにセキュリティ脆弱性があるなら、以下のようにすることをおすすめします。
- 脆弱性は、レスポンスにおいても開示においても単純なバグとしてよりもセキュリティの問題として対処してください。 たとえば、リリースノートではその問題をセキュリティ脆弱性として明示的に言及する必要があります。
- 脆弱性報告を受け取ったことは、たとえすぐに調査するためのリソースがない場合でも、できるだけ早く認めてください。 これはあなたが迅速に対応して行動するというメッセージを送ることになり、あなたと脆弱性報告者との間のそれ以外のやりとりに肯定的なトーンが設定されます。
- 報告のインパクトと正確性を検証する際には、脆弱性報告者にも関わってもらってください。 おそらく脆弱性の報告者は、すでにその脆弱性を様々なシナリオの中で考慮するのに時間をかけているでしょう。その中には、あなたが自分では考えていなかったものがあるかもしれません。
- 脆弱性の報告者が提供してくれた懸念点とアドバイスを慎重に考慮に入れて、適切と思われる方法で問題に対処してください。 脆弱性の報告者は、しばしば特定のコーナーケースや対処のバイパスに関する知識を持っており、それらはセキュリティ研究のバックグラウンドなしでは簡単に見逃してしまうものです。
- 発見されたことを評価する際には、常に脆弱性の報告者に感謝を示してください。
- できるかぎり早い修正の公開を目指してください。
- 脆弱性を開示する際には、広汎なエコシステムがその問題と対策を認識するようにしてください。 認識されたセキュリティの問題がプロジェクトの現在の開発ブランチで修正されながら、そのコミットあるいはそれ以降のリリースがセキュリティ修正あるいはリリースとして明示的に示されていない場合が珍しくありません。 これによって、下流の利用者に問題が生じることがあります。

セキュリティ脆弱性の詳細を開会しても、メンテナが悪く見えることはありません。 セキュリティ脆弱性はソフトウェアのあらゆるところに存在し、ユーザはコード中のセキュリティ脆弱性を開示するための明確な確立されたプロセスを持つメンテナを信頼します。

## {% data variables.product.prodname_dotcom %}上のプロジェクトの脆弱性の報告と開示について

{% data variables.product.prodname_dotcom_the_website %}上のプロジェクトの脆弱性の報告と開示のプロセスは以下のようになります。

 あなたが脆弱性の報告したいと考えている人（たとえばセキュリティ研究者）なら、まず関連するリポジトリにセキュリティポリシーがあるかをチェックしてください。 詳細については、「[セキュリティ ポリシーについて](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)」を参照してください。 セキュリティポリシーがあるなら、そのリポジトリのセキュリティチームに連絡する前に、それに従ってプロセスを理解してください。 
 
 セキュリティポリシーがないなら、メンテナへの非公開のコミュニケーション方法を確立するための最も効率的な方法は、望ましいセキュリティの連絡先を尋ねるIssueを作成することです。 そのIssueはすぐに公に見ることができるようになるので、そこにはバグに関する情報は含めないようにするべきであることには注意してください。 コミュニケーションが確立できたら、将来的に利用できるよう、セキュリティポリシーを規定してもらうメンテナに提案できます。

{% note %}

**注**: _npm のみ_ - npm パッケージのマルウェアに関する報告を受けた場合は、お客様個人にご連絡させていただきます。 あなたが適時問題に対応しない場合、私たちはその問題を開示します。 詳細については、npm Docs の Web サイトの「[eporting malware in an npm package](https://docs.npmjs.com/reporting-malware-in-an-npm-package)」 (npm パッケージ内のマルウェアの報告) を参照してください。

{% endnote %}

 {% data variables.product.prodname_dotcom_the_website %}でセキュリティ脆弱性を発見したら、私たちの調整された開示プロセスを通じてその脆弱性を報告してください。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](https://bounty.github.com/)」を参照してください。

 あなたがメンテナなら、リポジトリのセキュリティポリシーを設定するか、たとえばプロジェクトのREADMEファイルでセキュリティの報告方法を明確にしておくことによって、このパイプラインの開始時点からプロセスの所有権を取ることができます。 セキュリティ ポリシーの追加の詳細については、「[セキュリティ ポリシーについて](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)」を参照してください。 セキュリティポリシーがない場合、セキュリティの報告者はおそらくあなたにメールするか、非公開であなたに連絡しようとするでしょう。 あるいは、誰かがセキュリティの問題の詳細を含む（パブリックな）Issueをオープンするかもしれません。

 メンテナとしてコード中の脆弱性を開示するために、まずは{% data variables.product.prodname_dotcom %}でパッケージのリポジトリにドラフトのセキュリティアドバイザリを作成します。 {% data reusables.security-advisory.security-advisory-overview %} 詳細については、「[リポジトリの {% data variables.product.prodname_security_advisories %}について](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)」を参照してください。


 開始するには、「[リポジトリ セキュリティ アドバイザリの作成](/code-security/repository-security-advisories/creating-a-repository-security-advisory)」を参照してください。
