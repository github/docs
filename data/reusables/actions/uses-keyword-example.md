```yaml
jobs:
  call-workflow-1-in-local-repo:
    uses: octo-org/this-repo/.github/workflows/workflow-1.yml@172239021f7ba04fe7327647b213799853a9eb89
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
  call-workflow-2-in-local-repo:
    uses: ./.github/workflows/workflow-2.yml
{%- endif %}
  call-workflow-in-another-repo:
    uses: octo-org/another-repo/.github/workflows/workflow.yml@v1
```
