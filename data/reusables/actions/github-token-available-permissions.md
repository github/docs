You can define the access that the `GITHUB_TOKEN` will permit by specifying `read`, `write`, or `none` as the value of the available permissions within the `permissions` key.

```yaml
permissions:
  actions: read|write|none{% ifversion artifact-attestations %}
  attestations: read|write|none{% endif %}
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

If you specify the access for any of these permissions, all of those that are not specified are set to `none`.

You can use the following syntax to define one of `read-all` or `write-all` access for all of the available permissions:

```yaml
permissions: read-all
```

```yaml
permissions: write-all
```

You can use the following syntax to disable permissions for all of the available permissions:

```yaml
permissions: {}
```
