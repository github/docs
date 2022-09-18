---
ms.openlocfilehash: 50db50aff42d977575a89a2e22287b1672081ee4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881390"
---
強制コミットのサインオフは、Web インターフェイスを介して行われたコミットにのみ適用されます。 Git コマンド ライン インターフェイスを使用して行われたコミットは、コミット作成者が `--signoff` オプションを使用してコミットにサインオフする必要があります。 詳しくは、[Git ドキュメント](https://git-scm.com/docs/git-commit)を参照してください。


コントリビュートするリポジトリで強制コミットのサインオフが有効になっているかどうかを判断するには、編集中のファイルの下部にあるコミット フォームのヘッダーを確認します。 強制コミットのサインオフが有効になると、ヘッダーに "サインオフして変更をコミットする" と表示されるようになります。

![強制サインオフが有効になっている "コミット" フォームのスクリーンショット](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

コミットでサインオフする前に、コミット先のリポジトリを管理する規則とライセンスに準拠していることを確認する必要があります。 リポジトリでは、Linux Foundation の Developer Certificate of Origin などのサインオフ契約を使用できます。 詳しくは「[Developer Certificate of Origin](https://developercertificate.org/)」をご覧ください。

コミットへの署名は、コミットのサインオフとは異なります。 詳しくは、「[コミットの署名の検証について](/authentication/managing-commit-signature-verification/about-commit-signature-verification)」をご覧ください。