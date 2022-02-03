The workflow will require a `permissions` setting with a defined [`id-token`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) value. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. For example:

```yaml{:copy}
permissions:
  id-token: write
```

You may need to specify additional permissions here, depending on your workflow's requirements. 