During an upgrade to GitHub Enterprise Server 3.8.0 on a cluster, after you upgrade nodes other than the primary MySQL node and before you upgrade the primary MySQL node, the following error may appear multiple times after you run `ghe-config-apply`.

```text
Error response from daemon: conflict: unable to delete IMAGE_ID (cannot be forced) - image is being used by running container CONTAINER_ID
```

You can safely ignore this message.
