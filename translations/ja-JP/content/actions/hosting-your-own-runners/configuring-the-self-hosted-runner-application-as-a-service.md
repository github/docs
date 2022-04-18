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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. セルフホストランナー アプリケーションが現在実行中の場合は、そのアプリケーションを停止します。{% endcapture %}
{% capture service_non_windows_intro_shell %}ランナー マシンで、セルフホストランナー アプリケーションをインストールしたディレクトリでシェルを開きます。 以下のコマンドを使って、セルフホストランナーサービスをインストール及び管理します。{% endcapture %}
{% capture service_nonwindows_intro %}セルフホストランナーアプリケーションをサービスとして設定する前に、ランナーを{% data variables.product.product_name %}に追加しなければなりません。 詳しい情報については「[セルフホストランナーの追加](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」を参照してください。{% endcapture %}
{% capture service_win_name %}actions.runner.*{% endcapture %}


{% linux %}

{{ service_nonwindows_intro }}

`systemd`を利用するLinuxのシステムでは、セルフホストランナーアプリケーションと共に配布されている`svc.sh`スクリプトを使い、セルフホストランナーアプリケーションをサービスとしてインストール及び管理できます。

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**ノート:** Windows上でサービスとしてセルフホストランナーアプリケーションを設定するのは、アプリケーションの設定プロセスの一部です。 セルフホストランナーアプリケーションをすでに設定していて、サービスとして設定していない場合には、そのランナーを{% data variables.product.prodname_dotcom %}から削除して、アプリケーションを設定しなおさなければなりません。 アプリケーションを再設定する場合には、アプリケーションをサービスとして設定するオプションを選択してください。

詳しい情報については「[セルフホストランナーの削除](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)」及び「[セルフホストランナーの追加](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」を参照してください。

{% endnote %}

Windowsでは、ランナーサービスは**サービス**アプリケーションで管理できます。あるいは、以下のコマンドをPowerShellを使って実行することもできます。

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

{% endlinux %}
{% mac %}

## サービスのインストール

{{ service_first_step }}
1. 以下のコマンドでサービスをインストールしてください。

   ```shell
   ./svc.sh install
   ```
{% endmac %}

The command takes an optional `user` argument to install the service as a different user.

```shell
./svc.sh install <em>USERNAME</em>
```

## サービスの起動

以下のコマンドでサービスを起動してください。

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %}
{% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
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
{% endlinux %}
{% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh status
```
{% endmac %}

 セルフホストランナーの状態の表示に関する詳しい情報については、「[セルフホストランナーのモニタリングとトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

## サービスの停止

以下のコマンドでサービスを停止してください。

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %}
{% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
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
    {% endlinux %}
    {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}
    {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## セルフホストランナーサービスのカスタマイズ

上記のデフォルトの`systemd`サービス設定を使いたくないなら、カスタマイズされたサービスを作成するか、好みのサービスの仕組みを使うことができます。 リファレンスとして`actions-runner/bin/actions.runner.service.template`にある`serviced`テンプレートの利用を検討してください。 カスタマイズされたサービスを使う場合、セルフホストランナーサービスは常に`runsvc.sh`エントリポイントを使って起動しなければなりません。

{% endlinux %}

{% mac %}

## セルフホストランナーサービスのカスタマイズ

上記のデフォルトのlaunchdサービス設定を使いたくないなら、カスタマイズされたサービスを作成するか、好みのサービスの仕組みを使うことができます。 リファレンスとして`actions-runner/bin/actions.runner.plist.template`にある`plist`テンプレートの利用を検討してください。 カスタマイズされたサービスを使う場合、セルフホストランナーサービスは常に`runsvc.sh`エントリポイントを使って起動しなければなりません。

{% endmac %}
