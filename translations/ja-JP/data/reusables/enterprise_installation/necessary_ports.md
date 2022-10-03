---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145111542"
---
| Port | サービス | 説明                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git over SSHのアクセス。 パブリック／プライベートリポジトリのクローン、フェッチ、プッシュ操作がサポートされています。 |
| 25   | SMTP    | 暗号化（STARTTLS）付きのSMTPサポート。 |
| 80   | HTTP    | Webアプリケーションへのアクセス。 *SSL が有効になっている場合、すべての要求は HTTPS ポートにリダイレクトされます。* |
| 122  | SSH     | インスタンスのシェルへのアクセス。 *既定の SSH ポート (22) は、アプリケーションの git+ssh ネットワーク トラフィック専用です。* |
| 161/UDP | SNMP | ネットワークモニタリングプロトコルの処理に必要。 |
| 443  | HTTPS   | Webアプリケーション及びGit over HTTPSのアクセス。 |
| 1194/UDP | VPN | High Availability設定でのセキュアなレプリケーションネットワークトンネル。 |
| 8080 | HTTP    | プレーンテキストの Webベースの {% data variables.enterprise.management_console %}。 *SSL を手動で無効にしない限り必要ありません。* |
| 8443 | HTTPS   | セキュアな Webベースの {% data variables.enterprise.management_console %}。 *基本的なインストールと設定に必要です。* |
| 9418 | Git     | シンプルなGitプロトコルのポートです。 パブリックリポジトリのクローンとフェッチのみができます。 *暗号化されていないネットワーク通信。* {% data reusables.enterprise_installation.when-9418-necessary %}  |
