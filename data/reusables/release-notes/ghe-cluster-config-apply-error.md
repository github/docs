During an upgrade to GitHub Enterprise Server 3.8.0 on a cluster, after you upgrade nodes other than the primary MySQL node and before you upgrade the primary MySQL node, the following error may appear multiple times after you run `ghe-cluster-config-apply`.

```
Error response from daemon: conflict: unable to delete IMAGE_ID (cannot be forced) - image is being used by running container CONTAINER_ID
```

GitHub recommends waiting to upgrade your cluster until this issue is resolved. More information will be available in the release notes for an upcoming update to GitHub Enterprise Server.
