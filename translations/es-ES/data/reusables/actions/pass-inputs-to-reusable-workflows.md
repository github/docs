Para pasar las entradas nombradas a un flujo de trabajo llamado, utiliza la palabra clave `with` en un job. Utiliza la palabra clave `secrets` para pasar los secretos nombrados. Para las entradas, el tipo de datos del valor de entrada debe empatar con el tipo especificado en el flujo de trabajo llamado (ya sea booleano, número o secuencia).

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}
