---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109483"
---
強制コミットのサインオフは、Web インターフェイスを介して行われたコミットにのみ適用されます。 Git コマンド ライン インターフェイスを使用して行われたコミットは、コミット作成者が `--signoff` オプションを使用してコミットにサインオフする必要があります。 詳しくは、[Git ドキュメント](https://git-scm.com/docs/git-commit)を参照してください。


コントリビュートするリポジトリで強制コミットのサインオフが有効になっているかどうかを判断するには、編集中のファイルの下部にあるコミット フォームのヘッダーを確認します。 強制コミットのサインオフが有効になると、ヘッダーに "サインオフして変更をコミットする" と表示されるようになります。

![強制サインオフが有効になっている "コミット" フォームのスクリーンショット](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

コミットでサインオフする前に、コミット先のリポジトリを管理する規則とライセンスに準拠していることを確認する必要があります。 リポジトリでは、Linux Foundation の Developer Certificate of Origin などのサインオフ契約を使用できます。 詳しくは「[Developer Certificate of Origin](https://developercertificate.org/)」をご覧ください。

コミットへの署名は、コミットのサインオフとは異なります。 詳しくは、「[コミットの署名の検証について](/authentication/managing-commit-signature-verification/about-commit-signature-verification)」をご覧ください。
