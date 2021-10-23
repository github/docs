```yaml
jobs:
  call-workflow-1:
    uses: octo-org/this-repo/.github/workflows/workflow-1.yml@172239021f7ba04fe7327647b213799853a9eb89
  call-workflow-2:
    uses: octo-org/another-repo/.github/workflows/workflow-2.yml@v1
```