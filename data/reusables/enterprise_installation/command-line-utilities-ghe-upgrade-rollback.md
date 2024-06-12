When rolling back an upgrade, you must use an upgrade package file with the _.pkg_ extension. Hotpatch package files with the _.hpkg_ extension are not supported.

```shell
ghe-upgrade --allow-patch-rollback EARLIER-RELEASE-UPGRADE-PACKAGE.pkg
```

A reboot is required after running the command. Rolling back does not affect the data partition, as migrations are not run on patch releases.
