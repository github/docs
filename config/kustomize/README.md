# Kubernetes configuration with Kustomize

Moda deploys the Kubernetes files in `config/kubernetes/<environment>/`. Kustomize generates those files from this directory. Edit files here, then regenerate.

## What to edit

| To change | Edit |
|---|---|
| Anything for every environment, such as probes or shutdown timing | `config/kustomize/base/deployments/webapp.yaml` |
| Staging CPU or memory | `config/kustomize/base/deployments/webapp.yaml`. Staging uses the base as is through `overlays/default/`. |
| Production CPU, memory, replicas, or rollout | `config/kustomize/overlays/production/deployments/webapp.yaml` |
| Production domain or load balancer | `config/kustomize/overlays/production/services/webapp.yaml` |
| Fastly IP allowlist | Nothing. `.github/workflows/moda-allowed-ips.yml` updates it weekly. |
| Review lab service, ingress, or Datadog tag | `config/kustomize/overlays/docs-internal-review-lab/` |
| Environment variables | `config/moda/configuration/default/env.yaml` for staging and review labs, `config/moda/configuration/production/env.yaml` for production |
| Secrets | `config/moda/secrets/{production,staging}/secrets.yml`. Review labs use `staging`. |
| Add or remove an environment | `config/moda/deployment.yaml`. Add an overlay only if the environment needs different Kubernetes config. |

Don't edit `config/kubernetes/` by hand. Kustomize generates it. The `config/moda/` files don't go through Kustomize.

Moda looks for `config/kubernetes/<environment>/` first, then falls back to `config/kubernetes/default/`. So `production` uses `production`, and the `staging-*` environments use `default`. The review lab sets `resource_path: config/kubernetes/docs-internal-review-lab`.

## Set up

Install the GitHub Kustomize extension for `gh`. Pin the version that CI uses:

```shell
gh extension install github/gh-kustomize --pin v4.2.0
```

The extension lives in a private repository, so `gh` must be signed in to your GitHub account.

## Make a change

1. Edit files in `config/kustomize/`.
1. From the repository root, regenerate `config/kubernetes/`:

   ```shell
   gh kustomize build
   ```

   To regenerate one environment, add `-e <environment>`.
1. Format the output. The pre-commit hook also does this.

   ```shell
   npx prettier -w config/kubernetes
   ```

1. Check that the generated files match the source:

   ```shell
   gh kustomize validate --verbose
   ```

1. Optional: compare the generated files to your local `main` branch. Update `main` first.

   ```shell
   gh kustomize diff
   ```

1. Commit the source and the generated files together.

## Comments

Kustomize drops comments from generated files. Put explanations in `config/kustomize/`, next to the values they explain.

## CI

The `moda-linter` check runs `gh kustomize validate` on every push. It fails when `config/kubernetes/` doesn't match what `config/kustomize/` generates.

`.github/workflows/moda-allowed-ips.yml` is the one automated exception. It edits the allowlist in the production overlay and in the generated file at the same time, so they stay in sync.

## Learn more

- [Kustomize on The Hub](https://thehub.github.com/epd/engineering/products-and-services/internal/moda/kustomize/)
- [`gh kustomize` commands](https://thehub.github.com/epd/engineering/products-and-services/internal/moda/kustomize/kustomize-at-github/commands/)
- [Moda `deployment.yaml` reference](https://thehub.github.com/epd/engineering/products-and-services/internal/moda/reference/deployment-yaml/)
