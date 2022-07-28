---
title: Caching dependencies to speed up workflows
shortTitle: Caching dependencies
intro: 'To make your workflows faster and more efficient, you can create and use caches for dependencies and other commonly reused files.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## About caching workflow dependencies

Workflow runs often reuse the same outputs or downloaded dependencies from one run to another. For example, package and dependency management tools such as Maven, Gradle, npm, and Yarn keep a local cache of downloaded dependencies.

{% ifversion fpt or ghec %} Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean virtual environment and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. {% endif %}To help speed up the time it takes to recreate files like dependencies, {% data variables.product.prodname_dotcom %} can cache files you frequently use in workflows.

To cache dependencies for a job, you can use {% data variables.product.prodname_dotcom %}'s [`cache` action](https://github.com/actions/cache). The action creates and restores a cache identified by a unique key. Alternatively, if you are caching the package managers listed below, using their respective setup-* actions requires minimal configuration and will create and restore dependency caches for you.

| Package managers | setup-* action for caching |
|---|---|
| npm, Yarn, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Warning**: {% ifversion fpt or ghec %}Be mindful of the following when using caching with {% data variables.product.prodname_actions %}:

* {% endif %}We recommend that you don't store any sensitive information in the cache. For example, sensitive information can include access tokens or login credentials stored in a file in the cache path. Also, command line interface (CLI) programs like `docker login` can save access credentials in a configuration file. Anyone with read access can create a pull request on a repository and access the contents of a cache. Forks of a repository can also create pull requests on the base branch and access caches on the base branch.
{%- ifversion fpt or ghec %}
* When using self-hosted runners, caches from workflow runs are stored on {% data variables.product.company_short %}-owned cloud storage. A customer-owned storage solution is only available with {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

For more information on workflow run artifacts, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

## Restrictions for accessing a cache

A workflow can access and restore a cache created in the current branch, the base branch (including base branches of forked repositories), or the default branch (usually `main`). For example, a cache created on the default branch would be accessible from any pull request. Also, if the branch `feature-b` has the base branch `feature-a`, a workflow triggered on `feature-b` would have access to caches created in the default branch (`main`), `feature-a`, and `feature-b`.

Access restrictions provide cache isolation and security by creating a logical boundary between different branches. For example, a cache created for the branch `feature-a` (with the base `main`) would not be accessible to a pull request for the branch `feature-c` (with the base `main`).

Multiple workflows within a repository share cache entries. A cache created for a branch within a workflow can be accessed and restored from another workflow for the same repository and branch.

## Using the `cache` action

The [`cache` action](https://github.com/actions/cache) will attempt to restore a cache based on the `key` you provide. When the action finds a cache, the action restores the cached files to the `path` you configure.

If there is no exact match, the action automatically creates a new cache if the job completes successfully. The new cache will use the `key` you provided and contains the files you specify in `path`.

You can optionally provide a list of `restore-keys` to use when the `key` doesn't match an existing cache. A list of `restore-keys` is useful when you are restoring a cache from another branch because `restore-keys` can partially match cache keys. For more information about matching `restore-keys`, see "[Matching a cache key](#matching-a-cache-key)."

### Input parameters for the `cache` action

- `key`: **Required** The key created when saving a cache and the key used to search for a cache. It can be any combination of variables, context values, static strings, and functions. Keys have a maximum length of 512 characters, and keys longer than the maximum length will cause the action to fail.
- `path`: **Required** The path(s) on the runner to cache or restore.
  - You can specify a single path, or you can add multiple paths on separate lines. For example:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - You can specify either directories or single files, and glob patterns are supported.
  - You can specify absolute paths, or paths relative to the workspace directory.
- `restore-keys`: **Optional** A string containing alternative restore keys, with each restore key placed on a new line. If no cache hit occurs for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. For example:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Output parameters for the `cache` action

- `cache-hit`: A boolean value to indicate an exact match was found for the key.

### Example using the `cache` action

This example creates a new cache when the packages in `package-lock.json` file change, or when the runner's operating system changes. The cache key uses contexts and expressions to generate a key that includes the runner's operating system and a SHA-256 hash of the `package-lock.json` file.

```yaml{:copy}
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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

When `key` matches an existing cache, it's called a _cache hit_, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a _cache miss_, and a new cache is automatically created if the job completes successfully.

When a cache miss occurs, the action also searches your specified `restore-keys` for any matches:

1. If you provide `restore-keys`, the `cache` action sequentially searches for any caches that match the list of `restore-keys`.
   - When there is an exact match, the action restores the files in the cache to the `path` directory.
   - If there are no exact matches, the action searches for partial matches of the restore keys. When the action finds a partial match, the most recent cache is restored to the `path` directory.
1. The `cache` action completes and the next step in the job runs.
1. If the job completes successfully, the action automatically creates a new cache with the contents of the `path` directory.

For a more detailed explanation of the cache matching process, see "[Matching a cache key](#matching-a-cache-key)." Once you create a cache, you cannot change the contents of an existing cache but you can create a new cache with a new key.

### Using contexts to create cache keys

A cache key can include any of the contexts, functions, literals, and operators supported by {% data variables.product.prodname_actions %}. For more information, see "[Contexts](/actions/learn-github-actions/contexts)" and "[Expressions](/actions/learn-github-actions/expressions)."

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

You can use the output of the `cache` action to do something based on whether a cache hit or miss occurred. If there is a cache miss (an exact match for a cache was not found for the specified `key`), the `cache-hit` output is set to `false`.

In the example workflow above, there is a step that lists the state of the Node modules if a cache miss occurred:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Matching a cache key

The `cache` action first searches for cache hits for `key` and `restore-keys` in the branch containing the workflow run. If there are no hits in the current branch, the `cache` action searches for `key` and `restore-keys` in the parent branch and upstream branches.

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

## Usage limits and eviction policy

{% data variables.product.prodname_dotcom %} will remove any cache entries that have not been accessed in over 7 days. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited{% ifversion actions-cache-policy-apis %}. By default, the limit is 10 GB per repository, but this limit might be different depending on policies set by your enterprise owners or repository administrators.{% else %} to 10 GB.{% endif %} 

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %}
For information on changing the policies for the repository cache size limit, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" and "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)."
{% endif %}

{% ifversion actions-cache-management %}

## Managing caches

You can use the {% data variables.product.product_name %} REST API to manage your caches. {% ifversion actions-cache-list-delete-apis %}You can use the API to list and delete cache entries, and see your cache usage.{% elsif actions-cache-management %}At present, you can use the API to see your cache usage, with more functionality expected in future updates.{% endif %} For more information, see the "[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)" REST API documentation.

{% endif %}
