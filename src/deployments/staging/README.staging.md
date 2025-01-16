# docs-staging-{{x}}

This is the staging repo and corresponding Moda deployment for the GitHub Docs {{x}} staging server.

The contents of this repo are kept in a one-directional sync with the contents of `src/deployments/staging` in the [docs-internal](https://github.com/github/docs-internal) repo, where `src/deployments/staging` from `docs-internal` is the source and this repo is the destination.

> [!NOTE]
> Do not change any file other than `.env` in this repo. Instead, change the files in [src/deployments/staging of docs-internal](https://github.com/github/docs-internal/tree/main/src/staging/deployments/README.md) which will cascade update the files in each `docs-staging-X` repo (except `.env`).

**URL:** https://docs-staging-{{x}}.service.iad.github.net (can only be accessed behind [Developer VPN](https://thehub.github.com/security/security-operations/developer-vpn-access/))

**Docs**: [src/deployments/staging of docs-internal](https://github.com/github/docs-internal/tree/main/src/deployments/staging/README.md)

## Speed up automatic deploys

When you push to the `docs-staging-{{x}}` branch or add the `docs-staging-{{x}}` label on an open PR, it will kick off an automated process that will open a PR in this repo, and then merge it via the merge queue which will trigger an automatic deployment.

If you begin the above process, and don't want to wait for the slow merge queue process, you can bypass the merge queue and force merge the PR, then in the `#docs-ops` Slack channel you can write,

```
.deploy docs-staging-{{x}}/main to staging --ignore-required-pipeline
```

To trigger a staging deploy.

## Manually deploy any docs-internal branch

Adjust the `STAGING_BRANCH` and `SHA` to match a branch + SHA in `docs-internal`. Make sure _both_ values are set.

Make the change to `.env` in a new branch, say `manual-deploy-docs-staging-{{x}}`

Then in the `#docs-ops` Slack channel,

```
.deploy docs-staging-{{x}}/manual-deploy-docs-staging-{{x}} to staging --ignore-required-pipeline
```

However, make sure not to merge your `manual-deploy-docs-staging-{{x}}` branch into `main` since it will break automatic staging deploys. Instead, keep it separate and update the `STAGING_BRANCH` and `SHA` as needed.