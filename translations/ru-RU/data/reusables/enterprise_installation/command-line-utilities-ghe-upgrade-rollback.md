When rolling back an upgrade, you must use an upgrade package file with the *.pkg* extension. Hotpatch package files with the *.hpkg* extension are not supported.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

A reboot is required after running the command. Rolling back does not affect the data partition, as migrations are not run on patch releases.
