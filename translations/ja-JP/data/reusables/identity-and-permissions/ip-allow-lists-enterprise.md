---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184094"
---
許可リストを有効化すると、設定したIPアドレスはすぐにEnterprise中のOrganizationの許可リストに追加されます。 許可リストを無効化すると、それらのアドレスはOrganizationの許可リストから削除されます。 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %}詳細については、「[組織に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

Enterpriseにインストールされた{% data variables.product.prodname_github_apps %}に設定されたIPアドレスが自動的に許可リストに追加されるように選択することもできます。 {% data variables.product.prodname_github_app %}の作者は、自分のアプリケーションのための許可リストを、アプリケーションが実行されるIPアドレスを指定して設定できます。 それらの許可リストを継承すれば、アプリケーションからの接続リクエストが拒否されるのを避けられます。 詳細については、「[GitHub App によるアクセスの許可](#allowing-access-by-github-apps)」を参照してください。
