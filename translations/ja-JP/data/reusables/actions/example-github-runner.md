### 様々なオペレーティングシステム上での実行

スターターワークフローは、ジョブをLinux上で、{% data variables.product.prodname_dotcom %}ホスト`ubuntu-latest`ランナーを使って実行するように設定します。 `runs-on`キーを変更し、異なるオペレーティングシステムでジョブを実行するようにすることができます。 たとえば、{% data variables.product.prodname_dotcom %}ホストのWindowsランナーを使うことができます。

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

あるいは{% data variables.product.prodname_dotcom %}ホストのmacOSランナーで実行させることもできます。

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Dockerコンテナ上でジョブを実行させたり、独自のインフラストラクチャ上で動作するセルフホストランナーを提供したりすることもできます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)」を参照してください。
