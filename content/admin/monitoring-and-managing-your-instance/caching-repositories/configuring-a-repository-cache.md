---
title: Configuring a repository cache
intro: 'You can configure a repository cache for {% data variables.product.product_name %} by creating a new instance, connecting the repository cache to your primary instance, and configuring replication of repository networks to the repository cache.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/enterprise-management/caching-repositories/configuring-a-repository-cache
  - /admin/monitoring-managing-and-updating-your-instance/caching-repositories/configuring-a-repository-cache
---

## About configuration for repository caching

{% data reusables.enterprise.repository-caching-config-summary %} Then, you can set data location policies that govern which repository networks are replicated to the repository cache.

Repository caching is not supported with clustering.

## DNS for repository caches

The primary instance and repository cache should have different DNS names. For example, if your primary instance is at `github.example.com`, you might decide to name a cache `europe-ci.github.example.com` or `github.asia.example.com`.

To have your CI machines fetch from the repository cache instead of the primary instance, you can use Git's `url.<base>.insteadOf` configuration setting. For more information, see [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) in the Git documentation.

For example, the global `.gitconfig` for the CI machine would include these lines.

```text
[url "https://europe-ci.github.example.com/"]
	insteadOf = https://github.example.com/
```

Then, when told to fetch `https://github.example.com/myorg/myrepo`, Git will instead fetch from `https://europe-ci.github.example.com/myorg/myrepo`.

## Configuring a repository cache

1. Set up a new {% data variables.product.prodname_ghe_server %} instance on your desired platform. This instance will be your repository cache. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)."
{% data reusables.enterprise_installation.replica-steps %}
1. Connect to the repository cache's IP address using SSH.

   ```shell
   ssh -p 122 admin@REPLICA-IP
   ```

{% data reusables.enterprise_installation.generate-replication-key-pair %}
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. To verify the connection to the primary and enable replica mode for the repository cache, run `ghe-repl-setup` again.
   * If the repository cache is your only additional node, no arguments are required.

      ```shell
      ghe-repl-setup PRIMARY-IP
      ```

   * If you're configuring a repository cache in addition to one or more existing replicas, use the `-a` or `--add` argument.

      ```shell
      ghe-repl-setup -a PRIMARY-IP
      ```

1. To configure the repository cache, use the `ghe-repl-node` command and include the necessary parameters.
    * Set a `cache-location` for the repository cache, replacing _CACHE-LOCATION_ with an alphanumeric identifier, such as the region where the cache is deployed.  The _CACHE-LOCATION_ value must not be any of the subdomains reserved for use with subdomain isolation, such as `assets` or `media`.  For a list of reserved names, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation#about-subdomain-isolation)."
    * Set a `cache-domain` for the repository cache, replacing _EXTERNAL-CACHE-DOMAIN_ with the hostname Git clients will use to access the repository cache. If you do not specify a `cache-domain`, {% data variables.product.product_name %} will prepend the _CACHE-LOCATION_ value as a subdomain to the hostname configured for your instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-a-hostname)."
    * If you haven't already, set the datacenter name on the primary and any replica appliances, replacing DC-NAME with a datacenter name.

      ```shell
      ghe-repl-node --datacenter DC-NAME
      ```

    * New caches will attempt to seed from another cache in the same datacenter. Set a `datacenter` for the repository cache, replacing REPLICA-DC-NAME with the name of the datacenter where you're deploying the node.

    ```shell
    ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```

{% data reusables.enterprise_installation.replication-command %}
{% data reusables.enterprise_installation.verify-replication-channel %}
1. To enable replication of repository networks to the repository cache, set a data location policy. For more information, see "[Data location policies](#data-location-policies)."

## Data location policies

You can control data locality by configuring data location policies for your repositories with the `spokesctl cache-policy` command. Data location policies determine which repository networks are replicated on which repository caches. By default, no repository networks will be replicated on any repository caches until a data location policy is configured.

Data location policies affect only Git content. Content in the database, such as issues and pull request comments, will be replicated to all nodes regardless of policy.

{% note %}

**Note:** Data location policies are not the same as access control. You must use repository roles to control which users may access a repository. For more information about repository roles, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% endnote %}

You can configure a policy to replicate all networks with the `--default` flag. For example, this command will create a policy to replicate a single copy of every repository network to the set of repository caches whose `cache_location` is "kansas".

```shell
ghe-spokesctl cache-policy set --default 1 kansas
```

To configure replication for a repository network, specify the repository that is the root of the network. A repository network includes a repository and all of the repository's forks. You cannot replicate part of a network without replicating the whole network.

```shell
ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

You can override a policy that replicates all networks and exclude specific networks by specifying a replica count of zero for the network. For example, this command specifies that any repository cache in location "kansas" cannot contain any copies of that network.

```shell
ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Replica counts greater than one in a given cache location are not supported.
