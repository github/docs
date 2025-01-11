# Staging {{x}}

This is the staging repo and corresponding Moda deployment for the GitHub Docs {{x}} staging server.

> [!NOTE]
> Do not change any file other than `.env` and `README.md` in this repo. Instead, change the files in [src/deployments/staging of docs-internal](https://github.com/github/docs-internal/tree/main/src/staging/deployments/README.md) which will cascade update the files in each `docs-staging-X` repo (apart from `README.md` and `.env`).

**URL:** https://docs-staging-{{x}}.github.com

**Docs**: [src/deployments/staging of docs-internal](https://github.com/github/docs-internal/tree/main/src/staging/deployments/README.md)

The contents of this repo are kept in a one-directional sync with the contents of `src/deployments/staging` in the [docs-internal](https://github.com/github/docs-internal) repo, where `src/deployments/staging` from `docs-internal` is the source and this repo is the destination.
