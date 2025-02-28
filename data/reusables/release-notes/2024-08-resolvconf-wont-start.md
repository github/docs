On boot, the `resolvconf` service may fail to start because the `/run/resolvconf` directory does not exist when the service attempts to `touch` a file there, with the error:

```shell
/bin/touch: cannot touch '/run/resolvconf/postponed-update': No such file or directory
```

If this occurs, workaround this issue with the following commands — this change will persist on reboots, but not upgrades:

```shell
sudo sed -i.bak \
'/\[Service\]/a ExecStartPre\=\/bin\/mkdir \-p \/run\/resolvconf' \
/etc/systemd/system/resolvconf.service.d/local.conf

sudo systemctl daemon-reload
sudo systemctl start resolvconf 
```
