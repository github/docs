### Ejecución en un sistema operativo diferente

La plantilla inicial de flujo de trabajo configura los jobs para que se ejecuten en Linux, utilizando los ejecutores `ubuntu-latest` hospedados en {% data variables.product.prodname_dotcom %}. Puedes cambiar la clave `runs-on` para ejecutar tus jobs en un sistema operativo diferente. Por ejemplo, puedes utilizar los ejecutores de Windows hospedados en {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

O puedes utilizar los ejecutores de macOS hospedados en {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

También puedes ejecutar jobs en contenedores de Docker, o puedes proporcionar un ejecutor auto-hospedado que se ejecute en tu propia infraestructura. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".
