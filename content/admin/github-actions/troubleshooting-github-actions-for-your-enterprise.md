---
title: Troubleshooting GitHub Actions for your enterprise
intro: 'Troubleshooting common issues that occur when using {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  enterprise-server: '>=3.0'
---

### Configuring self-hosted runners when using a self-signed certificate for {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} For more information, see "[Configuring TLS](/admin/configuration/configuring-tls)."

#### Installing the certificate on the runner machine

For a self-hosted runner to connect to a {% data variables.product.prodname_ghe_server %} using a self-signed certificate, you must install the certificate on the runner machine so that the connection is security hardened.

For the steps required to install a certificate, refer to the documentation for your runner's operating system.

#### Configuring Node.JS to use the certificate

Most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store. For the self-hosted runner application to use the certificate, you must set the `NODE_EXTRA_CA_CERTS` environment variable on the runner machine.

You can set the environment variable as a system environment variable, or declare it in a file named _.env_ in the self-hosted runner application directory.

For example:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Environment variables are read when the self-hosted runner application starts, so you must set the environment variable before configuring or starting the self-hosted runner application. If your certificate configuration changes, you must restart the self-hosted runner application.

#### Configuring Docker containers to use the certificate

If you use Docker container actions or service containers in your workflows, you might also need to install the certificate in your Docker image in addition to setting the above environment variable.

### Configuring HTTP proxy settings for {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

If these settings aren't correctly configured, you might receive errors like `Resource unexpectedly moved to https://<IP_ADDRESS>` when setting or changing your {% data variables.product.prodname_actions %} configuration.

### Runners not connecting to {% data variables.product.prodname_ghe_server %} after changing the hostname

If you change the hostname of {% data variables.product.product_location %}, self-hosted runners will be unable to connect to the old hostname, and will not execute any jobs.

You will need to update the configuration of your self-hosted runners to use the new hostname for {% data variables.product.product_location %}. Each self-hosted runner will require one of the following procedures:

* In the self-hosted runner application directory, edit the `.runner` and `.credentials` files to replace all mentions of the old hostname with the new hostname, then restart the self-hosted runner application.
* Remove the runner from {% data variables.product.prodname_ghe_server %} using the UI, and re-add it. For more information, see "[Removing self-hosted runners](/actions/hosting-your-own-runners/removing-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

### Stuck jobs and {% data variables.product.prodname_actions %} memory and CPU limits

{% data variables.product.prodname_actions %} is composed of multiple services running on {% data variables.product.product_location %}. By default, these services are set up with default CPU and memory limits that should work for most instances. However, heavy users of {% data variables.product.prodname_actions %} might need to adjust these settings.

You may be hitting the CPU or memory limits if you notice that jobs are not starting (even though there are idle runners), or if the job's progress is not updating or changing in the UI.

#### 1. Check the overall CPU and memory usage in the management console

Access the management console and use the monitor dashboard to inspect the overall CPU and memory graphs under "System Health". For more information, see "[Accessing the monitor dashboard](/admin/enterprise-management/accessing-the-monitor-dashboard)."

If the overall "System Health" CPU usage is close to 100%, or there is no free memory left, then {% data variables.product.product_location %} is running at capacity and needs to be scaled up. For more information, see "[Increasing CPU or memory resources](/admin/enterprise-management/increasing-cpu-or-memory-resources)."

#### 2. Check the Nomad Jobs CPU and memory usage in the management console

If the overall "System Health" CPU and memory usage is OK, scroll down the monitor dashboard page to the "Nomad Jobs" section, and look at the "CPU Percent Value" and "Memory Usage" graphs.

Each plot in these graphs corresponds to one service. For {% data variables.product.prodname_actions %} services, look for:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

If any of these services are at or near 100% CPU utilization, or the memory is near their limit (2 GB by default), then the resource allocation for these services might need increasing. Take note of which of the above services are at or near their limit.

#### 3. Increase the resource allocation for services at their limit

1. Log in to the administrative shell using SSH. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
1. Run the following command to see what resources are available for allocation:

   ```shell
   nomad node status -self
   ```

   In the output, find the "Allocated Resources" section. It looks similar to the following example:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   For CPU and memory, this shows how much is allocated to the **total** of **all** services (the left value) and how much is available (the right value). In the example above, there is 23 GiB of memory allocated out of 32 GiB total. This means there is 9 GiB of memory available for allocation.

   {% warning %}

   **Warning:** Be careful not to allocate more than the total available resources, or services will fail to start.

   {% endwarning %}
1. Change directory to `/etc/consul-templates/etc/nomad-jobs/actions`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   In this directory there are three files that correspond to the {% data variables.product.prodname_actions %} services from above:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. For the services that you identified that need adjustment, open the corresponding file and locate the `resources` group that looks like the following:

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   The values are in MHz for CPU resources, and MB for memory resources.

   For example, to increase the resource limits in the above example to 1 GHz for the CPU and 4 GB of memory, change it to:

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Save and exit the file.
1. Run `ghe-config-apply` to apply the changes.

    When running `ghe-config-apply`, if you see output like `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, then the change has likely over-allocated CPU or memory resources. If this happens, edit the configuration files again and lower the allocated CPU or memory, then re-run `ghe-config-apply`.
1. After the configuration is applied, run `ghe-actions-check` to verify that the {% data variables.product.prodname_actions %} services are operational.
