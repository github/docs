アップグレードをロールバックする場合には、*.pkg*拡張子を持つアップグレードパッケージを使わなければなりません。 *.hpkg*拡張子を持つホットパッチのパッケージファイルはサポートされません。

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

A reboot is required after running the command. パッチリリースでは移行は行われないので、ロールバックはデータパーティションには影響しません。
