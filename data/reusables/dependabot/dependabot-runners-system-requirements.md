Any virtual machine (VM) that you use for {% data variables.product.prodname_dependabot %} runners must meet the requirements for self-hosted runners. In addition, they must meet the following requirements.

* Linux operating system
* x64 architecture

* Docker installed with access for the runner users:
  * We recommend installing Docker in rootless mode and configuring the runners to access Docker without `root` privileges.
  * Alternatively, install Docker and give the runner users raised privileges to run Docker.

The CPU and memory requirements will depend on the number of concurrent runners you deploy on a given VM. As guidance, we have successfully set up 20 runners on a single 2 CPU 8GB machine, but ultimately, your CPU and memory requirements will heavily depend on the repositories being updated. Some ecosystems will require more resources than others.

If you specify more than 14 concurrent runners on a VM, you must also update the Docker `/etc/docker/daemon.json` configuration to increase the default number of networks Docker can create.

```json
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```
