---
title: セルフホストランナーアプリケーションをサービスとして設定する
intro: セルフホストランナーアプリケーションをサービスとして設定し、マシンの起動時に自動的にランナーアプリケーションが開始されるようにできます。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Run runner app on startup
ms.openlocfilehash: d9f89bafe27314d321a30e2ce6c4eb8c98ec7dbb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705197'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. セルフホステッド ランナー アプリケーションが現在実行されている場合は、停止します。{% endcapture %} {% capture service_non_windows_intro_shell %}ランナー マシンで、セルフホステッド ランナー アプリケーションをインストールしたディレクトリでシェルを開きます。 以下のコマンドを使って、セルフホステッド ランナー サービスをインストールおよび管理します。{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**注:** セルフホスト ランナー アプリケーションをサービスとして設定する前に、ランナーを {% data variables.product.product_name %} に追加する必要があります。 詳細については、「[セルフホストランナーの追加](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」を参照してください。

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

`systemd` を使用している Linux システムの場合、ランナーを正常に追加した後に作成される `svc.sh` スクリプトを使用して、アプリケーションをサービスとして使用して、インストールおよび管理することができます。

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**注:** Windows 上でサービスとしてセルフホステッド ランナー アプリケーションを構成するのは、アプリケーション構成プロセスの一部です。 セルフホストランナーアプリケーションをすでに設定していて、サービスとして設定していない場合には、そのランナーを{% data variables.product.prodname_dotcom %}から削除して、アプリケーションを設定しなおさなければなりません。 アプリケーションを再設定する場合には、アプリケーションをサービスとして設定するオプションを選択してください。

詳細については、「[セルフホスト ランナーの削除](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」を参照してください。

{% endnote %}

ランナー サービスは、Windows **サービス** アプリケーションで管理することも、PowerShell を使用して次のコマンドを実行することもできます。

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## サービスのインストール

{{ service_first_step }}
1. 以下のコマンドでサービスをインストールしてください。

   ```shell
   sudo ./svc.sh install
   ```

1. また、このコマンドは省略可能な引数 `user` により、サービスを別のユーザーとしてインストールすることもできます。

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## サービスのインストール

{{ service_first_step }}
1. 以下のコマンドでサービスをインストールしてください。

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## サービスの起動

以下のコマンドでサービスを起動してください。

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %} {% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh start
```
{% endmac %}

## サービスのステータスチェック

以下のコマンドでサービスのステータスをチェックしてください。

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %} {% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh status
```
{% endmac %}

 セルフホステッド ランナーの状態の表示の詳細については、「[セルフホステッド ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

## サービスの停止

以下のコマンドでサービスを停止してください。

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %} {% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## サービスのアンインストール

1. もし実行中であれば、サービスを停止してください。
1. 以下のコマンドでサービスをアンインストールしてください。

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}  {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}  {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## セルフホストランナーサービスのカスタマイズ

上記の既定の `systemd` サービス構成を使わない場合は、カスタマイズされたサービスを作成するか、好みのサービスの仕組みを使うことができます。 参照としてテンプレート `serviced` を `actions-runner/bin/actions.runner.service.template` で使用することを検討してください。 カスタマイズされたサービスを使う場合、セルフホステッド ランナー サービスは常に `runsvc.sh` エントリ ポイントを使って起動する必要があります。

{% endlinux %}

{% mac %}

## セルフホストランナーサービスのカスタマイズ

上記のデフォルトのlaunchdサービス設定を使いたくないなら、カスタマイズされたサービスを作成するか、好みのサービスの仕組みを使うことができます。 参照としてテンプレート `plist` を `actions-runner/bin/actions.runner.plist.template` で使用することを検討してください。 カスタマイズされたサービスを使う場合、セルフホステッド ランナー サービスは常に `runsvc.sh` エントリ ポイントを使って起動する必要があります。

{% endmac %}
