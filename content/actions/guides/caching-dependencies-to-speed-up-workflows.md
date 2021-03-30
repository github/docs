---
title: Caching dependencies to speed up workflows
shortTitle: Caching dependencies
intro: 'To make your workflows faster and more efficient, you can create and use caches for dependencies and other commonly reused files.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
type: 'tutorial'
topics:
  - 'Workflows'
---

{% data reusables.actions.ae-beta %}

### About caching workflow dependencies

Workflow runs often reuse the same outputs or downloaded dependencies from one run to another. For example, package and dependency management tools such as Maven, Gradle, npm, and Yarn keep a local cache of downloaded dependencies.

Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean virtual environment and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. To help speed up the time it takes to recreate these files, {% data variables.product.prodname_dotcom %} can cache dependencies you frequently use in workflows.

To cache dependencies for a job, you'll need to use {% data variables.product.prodname_dotcom %}'s `cache` action. The action retrieves a cache identified by a unique key. For more information, see [`actions/cache`](https://github.com/actions/cache). If you are caching Ruby gems, instead consider using the Ruby maintained action, which can cache bundle installs on initiation. For more information, see [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically).

{% warning %}

**Warning**: We recommend that you don't store any sensitive information in the cache of public repositories. For example, sensitive information can include access tokens or login credentials stored in a file in the cache path. Also, command line interface (CLI) programs like `docker login` can save access credentials in a configuration file. Anyone with read access can create a pull request on a repository and access the contents of the cache. Forks of a repository can also create pull requests on the base branch and access caches on the base branch.

{% endwarning %}

### Comparing artifacts and dependency caching

Artifacts and caching are similar because they provide the ability to store files on {% data variables.product.prodname_dotcom %}, but each feature offers different use cases and cannot be used interchangeably.

- Use caching when you want to reuse files that don't change often between jobs or workflow runs.
- Use artifacts when you want to save files produced by a job to view after a workflow has ended. For more information, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

### Restrictions for accessing a cache

With `v2` of the `cache` action, you can access the cache in workflows triggered by any event that has a `GITHUB_REF`. If you are using `v1` of the `cache` action, you can only access the cache in workflows triggered by `push` and `pull_request` events, except for the `pull_request` `closed` event. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."

A workflow can access and restore a cache created in the current branch, the base branch (including base branches of forked repositories), or the default branch (usually `main`). For example, a cache created on the default branch would be accessible from any pull request. Also, if the branch `feature-b` has the base branch `feature-a`, a workflow triggered on `feature-b` would have access to caches created in the default branch (`main`), `feature-a`, and `feature-b`.

Access restrictions provide cache isolation and security by creating a logical boundary between different workflows and branches. For example, a cache created for the branch `feature-a` (with the base `main`) would not be accessible to a pull request for the branch `feature-b` (with the base `main`).

### Using the `cache` action

The `cache` action will attempt to restore a cache based on the `key` you provide. When the action finds a cache, the action restores the cached files to the `path` you configure.

If there is no exact match, the action creates a new cache entry if the job completes successfully. The new cache will use the `key` you provided and contains the files in the `path` directory.

You can optionally provide a list of `restore-keys` to use when the `key` doesn't match an existing cache. A list of `restore-keys` is useful when you are restoring a cache from another branch because `restore-keys` can partially match cache keys. For more information about matching `restore-keys`, see "[Matching a cache key](#matching-a-cache-key)."

For more information, see [`actions/cache`](https://github.com/actions/cache).

#### Input parameters for the `cache` action

- `key`: **Required** The key created when saving a cache and the key used to search for a cache. Can be any combination of variables, context values, static strings, and functions. Keys have a maximum length of 512 characters, and keys longer than the maximum length will cause the action to fail.
- `path`: **Required** The file path on the runner to cache or restore. The path can be an absolute path or relative to the working directory.
  - With `v2` of the `cache` action, you can specify a single path, or multiple paths as a list. Paths can be either directories or single files, and glob patterns are supported.
  - With `v1` of the `cache` action, only a single path is supported and it must be a directory. You cannot cache a single file.
- `restore-keys`: **Optional** An ordered list of alternative keys to use for finding the cache if no cache hit occurred for `key`.

#### Output parameters for the `cache` action

- `cache-hit`: A boolean value to indicate an exact match was found for the key.

#### Example using the `cache` action

This example creates a new cache when the packages in `package-lock.json` file change, or when the runner's operating system changes. The cache key uses contexts and expressions to generate a key that includes the runner's operating system and a SHA-256 hash of the `package-lock.json` file.

{% raw %}
```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Cache node modules
      uses: actions/cache@v2
      env:
        cache-name: cache-node-modules
      with:
        # npm cache files are stored in `~/.npm` on Linux/macOS
        path: ~/.npm
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-build-${{ env.cache-name }}-
          ${{ runner.os }}-build-
          ${{ runner.os }}-

    - name: Install Dependencies
      run: npm install

    - name: Build
      run: npm build

    - name: Test
      run: npm test

```
{% endraw %}

When `key` matches an existing cache, it's called a cache hit, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a cache miss, and a new cache is created if the job completes successfully. When a cache miss occurs, the action searches for alternate keys called `restore-keys`.

1. If you provide `restore-keys`, the `cache` action sequentially searches for any caches that match the list of `restore-keys`.
   - When there is an exact match, the action restores the files in the cache to the `path` directory.
   - If there are no exact matches, the action searches for partial matches of the restore keys. When the action finds a partial match, the most recent cache is restored to the `path` directory.
1. The `cache` action completes and the next workflow step in the job runs.
1. If the job completes successfully, the action creates a new cache with the contents of the `path` directory.

To cache files in more than one directory, you will need a step that uses the [`cache`](https://github.com/actions/cache) action for each directory. Once you create a cache, you cannot change the contents of an existing cache but you can create a new cache with a new key.

#### Using contexts to create cache keys

A cache key can include any of the contexts, functions, literals, and operators supported by {% data variables.product.prodname_actions %}. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

Using expressions to create a `key` allows you to automatically create a new cache when dependencies have changed. For example, you can create a `key` using an expression that calculates the hash of an npm `package-lock.json` file.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} evaluates the expression `hash "package-lock.json"` to derive the final `key`.

```yaml
npm-d5ea0750
```

### Matching a cache key

The `cache` action first searches for cache hits for `key` and `restore-keys` in the branch containing the workflow run. If there are no hits in the current branch, the `cache` action searches for `key` and `restore-keys` in the parent branch and upstream branches.

You can provide a list of restore keys to use when there is a cache miss on `key`. You can create multiple restore keys ordered from the most specific to least specific. The `cache` action searches for `restore-keys` in sequential order. When a key doesn't match directly, the action searches for keys prefixed with the restore key. If there are multiple partial matches for a restore key, the action returns the most recently created cache.

#### Example using multiple restore keys

{% raw %}
```yaml
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

The runner evaluates the expressions, which resolve to these `restore-keys`:

{% raw %}
```yaml
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

The restore key `npm-foobar-` matches any key that starts with the string `npm-foobar-`. For example, both of the keys `npm-foobar-fd3052de` and `npm-foobar-a9b253ff` match the restore key. The cache with the most recent creation date would be used. The keys in this example are searched in the following order:

1. **`npm-foobar-d5ea0750`** matches a specific hash.
1. **`npm-foobar-`** matches cache keys prefixed with `npm-foobar-`.
1. **`npm-`** matches any keys prefixed with `npm-`.

##### Example of search priority

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch (the current scope) and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Key `npm-feature-d5ea0750` in the `feature` branch scope
1. Key `npm-feature-` in the `feature` branch scope
2. Key `npm-` in the `feature` branch scope
1. Key `npm-feature-d5ea0750` in the `main` branch scope
3. Key `npm-feature-` in the `main` branch scope
4. Key `npm-` in the `main` branch scope

### Usage limits and eviction policy

{% data variables.product.prodname_dotcom %} will remove any cache entries that have not been accessed in over 7 days. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited to 5 GB. If you exceed this limit, {% data variables.product.prodname_dotcom %} will save your cache but will begin evicting caches until the total size is less than 5 GB.
