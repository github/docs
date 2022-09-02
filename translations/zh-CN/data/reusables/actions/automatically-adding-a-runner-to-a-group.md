You can use the configuration script to automatically add a new runner to a group. For example, this command registers a new runner and uses the `--runnergroup` parameter to add it to a group named `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

如果运行器组不存在，命令将失败：

```
找不到名为 "rg-runnergroup" 的任何自托管运行器组。
```