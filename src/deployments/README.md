# Deployments

The deployments subject contains documentation and build scripts for deploying docs.github.com to production and staging environments. This includes Docker build configuration, repository fetching scripts, and deployment procedures.

## Purpose & Scope

This subject is responsible for:
- Production deployment configuration and automation
- Staging server deployment processes
- Docker image build scripts for fetching repos (early-access, translations)
- Deployment documentation and procedures
- Integration with Moda (GitHub's internal deployment platform)

## Architecture & Key Assets

### Key capabilities and their locations

- `production/build-scripts/fetch-repos.sh` - Main script that orchestrates fetching docs-early-access and all translation repos during Docker build
- `production/build-scripts/clone-or-use-cached-repo.sh` - Utility function to clone repos or use cached versions
- `production/build-scripts/merge-early-access.sh` - Merges early-access content into production content
- `Dockerfile` (root) - Multi-stage Docker build for production deployments
- `.github/workflows/moda-ci.yaml` - CI/CD workflow that builds and deploys via Moda

## Setup & Usage

### Production deployments

Production deploys happen automatically:
- Pushing to `main` branch triggers automatic deployment to production
- Status updates posted in `#docs-ops` Slack channel
- Deployment uses Moda (GitHub's internal deployment platform)

### Building production Docker image locally

```bash
docker build -t docs:latest . --secret id=DOCS_BOT_PAT_BASE,src=<(echo "<your GH PAT value>")
```

Requirements for PAT:
- Must have `contents: read` access to:
  1. All `docs-internal.<lang>` translation repos
  2. `docs-early-access` repo

Run the built image locally.

### Staging deployments

To deploy to a staging server:
1. Push your branch to `docs-internal`
2. Open a draft PR
3. Wait for `docs-internal Moda CI` checks to pass
4. In `#docs-ops` Slack, run: `.deploy docs-internal/<your-branch> to staging-<your-username>`
5. Access at `https://docs-staging-<your-username>.service.iad.github.net` (requires Developer VPN)

### Running tests

No subject-specific tests exist currently. CI/CD validation happens through Moda workflows.

## Data & External Dependencies

### Data inputs
- Dockerfile and build scripts
- GitHub PAT for private repo access (`DOCS_BOT_PAT_BASE`)
- Early access repo (`docs-early-access`)

### Dependencies
- Docker and Docker BuildKit
- Moda platform (GitHub internal)
- GitHub Vault for secrets management
- Node.js (installed during Docker build)
- Git (for cloning repos during build)

### Build process
1. Clone docs-internal content, assets, data
2. Fetch and merge docs-early-access
3. Fetch all translation repos in parallel
4. Install production dependencies
5. Build Next.js application
6. Create production Docker image

### Data outputs
- Docker image with full site content (public + early-access + translations)
- Deployed application on Moda infrastructure
- Deployment notifications in Slack

## Cross-links & Ownership

### Related subjects
- [`src/early-access`](../early-access/README.md) - Early access content merged during build
- [`src/languages`](../languages/README.md) - Translation repos fetched during build
- Root `Dockerfile` - Docker build configuration
- `.github/workflows/moda-ci.yaml` - CI/CD workflow

### Internal documentation
For detailed internal documentation, see:
- `Moda` directory in internal Docs Engineering repo
- Production deploy procedures (internal docs)

### Ownership
- Team: Docs Engineering
- Slack: #build, #deploy-support (for deployment status and commands)

## Current State & Next Steps

### Known limitations
- Build scripts are shell scripts, not TypeScript (different from rest of codebase)
- Requires VPN access for staging server access
- Local Docker builds require manual PAT management

### Deployment monitoring
- Deployment status posted to `#docs-ops` Slack channel
- Moda provides deployment dashboards and logs (internal)
- Rollback procedures documented in internal Docs Engineering repo

### Required secrets
- `DOCS_BOT_PAT_BASE` - GitHub PAT with access to private repos
- Managed via GitHub Vault
- Passed securely to Docker build via `--secret` flag

### Rollback procedures
Rollback procedures are documented in the internal Docs Engineering repository. Contact @docs-engineering or #deploy-support assistance.

