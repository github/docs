**Needed for essential operations:**

```shell copy
github.com
api.github.com
*.actions.githubusercontent.com
```

**Needed for downloading actions:**

```shell copy
codeload.github.com
pkg.actions.githubusercontent.com
```

**Needed for publishing immutable actions:**

```shell copy
ghcr.io
```

**Needed for uploading/downloading job summaries, logs, workflow artifacts, and caches:**

```shell copy
results-receiver.actions.githubusercontent.com
*.blob.core.windows.net
```

**Needed for runner version updates:**

```shell copy
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Needed for retrieving OIDC tokens:**

```shell copy
*.actions.githubusercontent.com
```

**Needed for downloading or publishing packages or containers to {% data variables.product.prodname_dotcom %} Packages:**

```shell copy
*.pkg.github.com
pkg-containers.githubusercontent.com
ghcr.io
```

**Needed for {% data variables.large_files.product_name_long %}**

```shell copy
github-cloud.githubusercontent.com
github-cloud.s3.amazonaws.com
```

{% ifversion fpt or ghec %}
**Needed for jobs for {% data variables.product.prodname_dependabot_updates %}**

```shell copy
dependabot-actions.githubapp.com
```

{% endif %}
