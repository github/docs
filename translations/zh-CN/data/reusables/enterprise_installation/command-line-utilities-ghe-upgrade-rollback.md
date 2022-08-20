回滚升级时，您必须使用一个带 *.pkg* 扩展的升级包文件。 不支持带 *.hpkg* 扩展的热补丁包文件。

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

运行命令后需要重启。 回滚不会影响数据分区，因为迁移不是在补丁版本上运行的。
