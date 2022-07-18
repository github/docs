---
title: Configuring a repository cache
intro: 'You can configure a repository cache by creating a new appliance, connecting the repository cache to your primary appliance, and configuring replication of repository networks to the repository cache.'
versions:
  ghes: '>=3.3'
type: how_to
topics:
  - Enterprise
---

{% data reusables.enterprise.repository-caching-release-phase %}

## About configuration for repository caching

{% data reusables.enterprise.repository-caching-config-summary %} Then, you can set data location policies that govern which repository networks are replicated to the repository cache.

Repository caching is not supported with clustering.

## DNS for repository caches

The primary instance and repository cache should have different DNS names. For example, if your primary instance is at `github.example.com`, you might decide to name a cache `europe-ci.github.example.com` or `github.asia.example.com`.

To have your CI machines fetch from the repository cache instead of the primary instance, you can use Git's `url.<base>.insteadOf` configuration setting. For more information, see [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) in the Git documentation.

For example, the global `.gitconfig` for the CI machine would include these lines.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Then, when told to fetch `https://github.example.com/myorg/myrepo`, Git will instead fetch from `https://europe-ci.github.example.com/myorg/myrepo`.

## Configuring a repository cache

{% ifversion ghes = 3.3 %}
1. On your primary {% data variables.product.prodname_ghe_server %} appliance, enable the feature flag for repository caching.

   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. 新しい {% data variables.product.prodname_ghe_server %} アプライアンスを希望するプラットフォームにセットアップします。 This appliance will be your repository cache. 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
{% data reusables.enterprise_installation.replica-steps %}
1. Connect to the repository cache's IP address using SSH.

   ```shell
   $ ssh -p 122 admin@<em>REPLICA IP</em>
   ```
{%- ifversion ghes = 3.3 %}
1. On your cache replica, enable the feature flag for repository caching.

   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
{% data reusables.enterprise_installation.generate-replication-key-pair %}
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. To verify the connection to the primary and enable replica mode for the repository cache, run `ghe-repl-setup` again.

   ```shell
   $ ghe-repl-setup <em>PRIMARY IP</em>
   ```

1. Set a `cache_location` for the repository cache, replacing *CACHE-LOCATION* with an alphanumeric identifier, such as the region where the cache is deployed. Also set a datacenter name for this cache; new caches will attempt to seed from another cache in the same datacenter.

   ```shell
   $ ghe-repl-node --cache <em>CACHE-LOCATION</em> --datacenter <em>REPLICA-DC-NAME</em>
   ```

{% data reusables.enterprise_installation.replication-command %}
{% data reusables.enterprise_installation.verify-replication-channel %}
1. To enable replication of repository networks to the repository cache, set a data location policy. For more information, see "[Data location policies](#data-location-policies)."

## Data location policies

You can control data locality by configuring data location policies for your repositories with the `spokesctl cache-policy` command. Data location policies determine which repository networks are replicated on which repository caches. By default, no repository networks will be replicated on any repository caches until a data location policy is configured.

Data location policies affect only Git content. Content in the database, such as issues and pull request comments, will be replicated to all nodes regardless of policy.

{% note %}

**Note:** Data location policies are not the same as access control. You must use repository roles to control which users may access a repository. For more information about repository roles, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% endnote %}

You can configure a policy to replicate all networks with the `--default` flag. For example, this command will create a policy to replicate a single copy of every repository network to the set of repository caches whose `cache_location` is "kansas".

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

To configure replication for a repository network, specify the repository that is the root of the network. A repository network includes a repository and all of the repository's forks. You cannot replicate part of a network without replicating the whole network.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

You can override a policy that replicates all networks and exclude specific networks by specifying a replica count of zero for the network. For example, this command specifies that any repository cache in location "kansas" cannot contain any copies of that network.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Replica counts greater than one in a given cache location are not supported.
