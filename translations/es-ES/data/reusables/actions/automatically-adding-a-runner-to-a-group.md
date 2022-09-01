You can use the configuration script to automatically add a new runner to a group. For example, this command registers a new runner and uses the `--runnergroup` parameter to add it to a group named `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

El comando fallará si el grupo de ejecutores no existe:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```