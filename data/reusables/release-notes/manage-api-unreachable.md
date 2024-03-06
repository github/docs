After upgrading an existing instance to GitHub Enterprise Server 3.9, the Manage GitHub Enterprise Server API is unavailable. To enable the API, SSH into the instance and run the following commands.

```shell copy
sudo mkdir -p /data/ghes-manage-gateway/current
sudo chown -R ghes-manage-gateway:ghes-manage-gateway /data/ghes-manage-gateway/current
sudo systemctl restart ghes-manage-gateway ghes-manage-gateway-consul
```

For more information about the Manage GitHub Enterprise Server API, see "[Manage GitHub Enterprise Server](/rest/enterprise-admin/manage-ghes?apiVersion=2022-11-28)."
