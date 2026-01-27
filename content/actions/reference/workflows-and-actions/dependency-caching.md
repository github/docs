---
title: Dependency caching reference
shortTitle: Dependency caching
intro: Find information on the functionality of dependency caching in workflows.
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
  - /actions/using-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows
  - /actions/reference/dependency-caching-reference
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Workflows
---

## `cache` action usage

The [`cache` action](https://github.com/actions/cache) will attempt the following sequence when restoring a cache:

1. First, it searches for an exact match to your provided `key`.
1. If no exact match is found, it will search for partial matches of the `key`.
1. If there is still no match found, and you've provided `restore-keys`, these keys will be checked sequentially for partial matches. For more information, see [Cache key matching](#cache-key-matching).

If there is an exact match to the provided `key`, this is considered a cache hit. If no cache exactly matches the provided `key`, this is considered a cache miss. On a cache miss, the action automatically creates a new cache if the job completes successfully. The new cache will use the `key` you provided and contains the files you specify in `path`. For more information about how this is handled, see [Cache hits and misses](#cache-hits-and-misses).

You cannot change the contents of an existing cache. Instead, you can create a new cache with a new key.

### Input parameters for the `cache` action

* `key`: **Required** The key created when saving a cache and the key used to search for a cache. It can be any combination of variables, context values, static strings, and functions. Keys have a maximum length of 512 characters, and keys longer than the maximum length will cause the action to fail.
* `path`: **Required** The path(s) on the runner to cache or restore.
  * You can specify a single path, or you can add multiple paths on separate lines. For example:

    ```yaml
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```

  * You can specify either directories or single files, and glob patterns are supported.
  * You can specify absolute paths, or paths relative to the workspace directory.
* `restore-keys`: **Optional** A string containing alternative restore keys, with each restore key placed on a new line. If no cache hit occurs for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. For example:

  {% raw %}

  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```

  {% endraw %}

* `enableCrossOsArchive`: **Optional** A boolean value that when enabled, allows Windows runners to save or restore caches independent of the operating system the cache was created on. If this parameter is not set, it defaults to `false`. For more information, see [Cross OS cache](https://github.com/actions/cache/blob/main/tips-and-workarounds.md#cross-os-cache) in the Actions Cache documentation.

> [!NOTE]
> We recommend that you don't store any sensitive information, such as access tokens or login credentials, in files in the cache path. Anyone with read access can create a pull request on a repository and access the contents of a cache. Additionally, forks of a repository can create pull requests on the base branch and access caches on the base branch.

### Output parameters for the `cache` action

* `cache-hit`: A boolean value to indicate an exact match was found for the key.

### Cache hits and misses

When `key` exactly matches an existing cache, it's called a _cache hit_, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a _cache miss_, and a new cache is automatically created if the job completes successfully.

When a cache miss occurs, the action also searches your specified `restore-keys` for any matches:

1. If you provide `restore-keys`, the `cache` action sequentially searches for any caches that match the list of `restore-keys`.
   * When there is an exact match, the action restores the files in the cache to the `path` directory.
   * If there are no exact matches, the action searches for partial matches of the restore keys. When the action finds a partial match, the most recent cache is restored to the `path` directory.
1. The `cache` action completes and the next step in the job runs.
1. If the job completes successfully, the action automatically creates a new cache with the contents of the `path` directory.

For a more detailed explanation of the cache matching process, see [Cache key matching](#cache-key-matching).

### Example using the `cache` action

This example creates a new cache when the packages in `package-lock.json` file change, or when the runner's operating system changes. The cache key uses contexts and expressions to generate a key that includes the runner's operating system and a SHA-256 hash of the `package-lock.json` file.

```yaml copy
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Test
        run: npm test
```

### Using contexts to create cache keys

A cache key can include any of the contexts, functions, literals, and operators supported by {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts) and [AUTOTITLE](/actions/learn-github-actions/expressions).

Using expressions to create a `key` allows you to automatically create a new cache when dependencies change.

For example, you can create a `key` using an expression that calculates the hash of an npm `package-lock.json` file. So, when the dependencies that make up the `package-lock.json` file change, the cache key changes and a new cache is automatically created.

{% raw %}

```yaml
npm-${{ hashFiles('package-lock.json') }}
```

{% endraw %}

{% data variables.product.prodname_dotcom %} evaluates the expression `hash "package-lock.json"` to derive the final `key`.

```yaml
npm-d5ea0750
```

### Using the output of the `cache` action

You can use the output of the `cache` action to do something based on whether a cache hit or miss occurred. When an exact match is found for a cache for the specified `key`, the `cache-hit` output is set to `true`.

In the example workflow above, there is a step that lists the state of the Node modules if a cache miss occurred:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Cache key matching

The `cache` action first searches for cache hits for `key` and the cache _version_ in the branch containing the workflow run. If there is no hit, it searches for prefix-matches for `key`, and if there is still no hit, it searches for `restore-keys` and the _version_. If there are still no hits in the current branch, the `cache` action retries the same steps on the default branch. Please note that the scope restrictions apply during the search. For more information, see [Restrictions for accessing a cache](#restrictions-for-accessing-a-cache).

Cache version is a way to stamp a cache with metadata of the `path` and the compression tool used while creating the cache. This ensures that the consuming workflow run uniquely matches a cache it can actually decompress and use. For more information, see [Cache Version](https://github.com/actions/cache#cache-version) in the Actions Cache documentation.

`restore-keys` allows you to specify a list of alternate restore keys to use when there is a cache miss on `key`. You can create multiple restore keys ordered from the most specific to least specific. The `cache` action searches the `restore-keys` in sequential order. When a key doesn't match directly, the action searches for keys prefixed with the restore key. If there are multiple partial matches for a restore key, the action returns the most recently created cache.

### Example using multiple restore keys

{% raw %}

```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```

{% endraw %}

The runner evaluates the expressions, which resolve to these `restore-keys`:

{% raw %}

```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```

{% endraw %}

The restore key `npm-feature-` matches any key that starts with the string `npm-feature-`. For example, both of the keys `npm-feature-fd3052de` and `npm-feature-a9b253ff` match the restore key. The cache with the most recent creation date would be used. The keys in this example are searched in the following order:

1. **`npm-feature-d5ea0750`** matches a specific hash.
1. **`npm-feature-`** matches cache keys prefixed with `npm-feature-`.
1. **`npm-`** matches any keys prefixed with `npm-`.

#### Example of search priority

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Key `npm-feature-d5ea0750` in the `feature` branch
1. Key `npm-feature-` in the `feature` branch
1. Key `npm-` in the `feature` branch
1. Key `npm-feature-d5ea0750` in the `main` branch
1. Key `npm-feature-` in the `main` branch
1. Key `npm-` in the `main` branch

## `setup-*` actions for specific package managers

If you are caching the package managers listed below, using their respective setup-* actions requires minimal configuration and will create and restore dependency caches for you.

| Package managers    | setup-* action for caching                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| npm, Yarn, pnpm     | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data)                  |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies)             |
| Gradle, Maven       | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies)                 |
| RubyGems            | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically)             |
| Go `go.sum`         | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs)        |
| .NET NuGet          | [setup-dotnet](https://github.com/actions/setup-dotnet?tab=readme-ov-file#caching-nuget-packages) |

## Restrictions for accessing a cache

Access restrictions provide cache isolation and security by creating a logical boundary between different branches or tags.
Workflow runs can restore caches created in either the current branch or the default branch (usually `main`). If a workflow run is triggered for a pull request, it can also restore caches created in the base branch, including base branches of forked repositories. For example, if the branch `feature-b` has the base branch `feature-a`, a workflow run triggered on a pull request would have access to caches created in the default `main` branch, the base `feature-a` branch, and the current `feature-b` branch.

Workflow runs cannot restore caches created for child branches or sibling branches. For example, a cache created for the child `feature-b` branch would not be accessible to a workflow run triggered on the parent `main` branch. Similarly, a cache created for the `feature-a` branch with the base `main` would not be accessible to its sibling `feature-c` branch with the base `main`. Workflow runs also cannot restore caches created for different tag names. For example, a cache created for the tag `release-a` with the base `main` would not be accessible to a workflow run triggered for the tag `release-b` with the base `main`.

When a cache is created by a workflow run triggered on a pull request, the cache is created for the merge ref (`refs/pull/.../merge`). Because of this, the cache will have a limited scope and can only be restored by re-runs of the pull request. It cannot be restored by the base branch or other pull requests targeting that base branch.

Multiple workflow runs in a repository can share caches. A cache created for a branch in a workflow run can be accessed and restored from another workflow run for the same repository and branch.

{% ifversion ghes %}

> [!NOTE]
> As objects are retrieved from or put into the cache directly from runners, Actions runners must have direct connectivity to the Actions object storage configured in {% data variables.product.prodname_ghe_server %}, such as AWS S3 or Azure Blob Storage. Self-hosted runners authenticate with the blob storage provider using an access URL provided by the {% data variables.product.prodname_ghe_server %} instance. This URL supplies the blob storage provider with valid temporary authentication credentials. This process is initiated by the instance itself, which mediates all requests to the object storage.
>
> This means that `actions/cache` requires a HTTPS connection to the blob storage in order to work correctly.
>
> All the metadata are managed by the artifact cache service, which is a microservice within {% data variables.product.prodname_actions %}.
>
> For more information on cache storage, see [External storage requirements](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements).

{% endif %}

## Usage limits and eviction policy

{% data variables.product.prodname_dotcom %} applies limits to cache storage and retention to manage storage costs and prevent abuse. Understanding these limits helps you optimize your cache usage.

### Default limits

{% data variables.product.github %} will remove any cache entries that have not been accessed in over 7 days. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited. By default, the limit is 10 GB per repository, but this limit can be increased by enterprise owners, organization owners, or repository administrators. {% ifversion fpt or ghec %}Any usage beyond 10 GB is billed to your account.{% endif %} {% data reusables.actions.cache-eviction-policy %}

{% data reusables.actions.cache-eviction-process %} The cache eviction process may cause cache thrashing, where caches are created and deleted at a high frequency. To reduce this, you can review the caches for a repository and take corrective steps, such as removing caching from specific workflows{% ifversion fpt or ghec %} or increasing your cache size. This functionality is only available to users with a payment method on file who opt in by configuring cache settings{% endif %}. See [AUTOTITLE](/actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/manage-caches).{% ifversion ghes %} You can also increase the cache size limit for a repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository).

{% endif %}
{% ifversion fpt or ghec %}

You can create cache entries at a rate of up to 200 uploads per minute per repository. If you exceed this rate, subsequent cache upload attempts will fail until the rate limit resets. The time until the rate limit resets is returned in the `Retry-After` header of the response.

### Increasing cache size

If you want to reduce the rate at which cache entries are evicted, you can increase the storage limits for your cache in the Actions Settings. Repositories owned by users can configure up to 10 TB per repository. For repositories owned by organizations, the maximum configurable limit is determined by the organization's settings. For organizations owned by an enterprise, the maximum configurable limit is determined by the enterprise's settings. Increasing the limit beyond the default 10 GB will incur additional costs, if that storage is used.

For more information, see:
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-settings-for-your-repository)
* [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-cache-storage-for-your-organization)
* [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#artifact-and-log-retention)

{% endif %}

## Next steps

To manage your dependency caches, see [AUTOTITLE](/actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/manage-caches).
