Available scopes and access values:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
------- revert-12390-repo-sync
  id-token: read|write|none
=======
  discussions: read|write|none
------- add-discussions-permission.md
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
