Available scopes and access values:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
 circleci-project-setup
  id-token: read|write|
======= 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
  discussions: read|write|
 add-discussions-permission
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

If you specify the access for any of these scopes, all of those that are not specified are set to `none`.

You can use the following syntax to define read or write access for all of the available scopes:

```yaml
permissions: read-all|write-all
```
