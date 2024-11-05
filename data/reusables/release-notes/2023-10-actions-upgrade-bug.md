On an instance with GitHub Actions enabled, after an upgrade from GitHub Enterprise Server 3.8 or earlier, an internal exception could prevent successful completion of some operations, like upgrades or the configuration of new replica nodes for high availability. If this issue occurs, administrators may see the following error in `/data/user/common/ghe-config.log`.

```text
Error occurred while executing servicing step 'Clone datatier login to secondary replica' for component CopyAvailabilityGroupSqlLogins during CopyAvailabilityGroupSqlLogins: Object reference not set to an instance of an object.
```

To resolve this issue, upgrade to the latest patch release of GitHub Enterprise Server.
