### Running on a different operating system

The starter workflow template configures jobs to run on Linux, using the {% data variables.product.prodname_dotcom %}-hosted `ubuntu-latest` runners. You can change the `runs-on` key to run your jobs on a different operating system. For example, you can use the {% data variables.product.prodname_dotcom %}-hosted Windows runners.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Or, you can run on the {% data variables.product.prodname_dotcom %}-hosted macOS runners.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

You can also run jobs in Docker containers, or you can provide a self-hosted runner that runs on your own infrastructure. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
