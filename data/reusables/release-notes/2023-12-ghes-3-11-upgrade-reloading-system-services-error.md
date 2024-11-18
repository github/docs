An upgrade to {% data variables.product.prodname_ghe_server %} 3.11.0 may fail, hanging on the "Reloading system services" screen. The following error will appear in `/var/log/syslog`.

```text
agent: Error starting agent: error="Failed to start Consul server: Failed to start Raft: failed to load any existing snapshots"
```

This issue is resolved in {% data variables.product.prodname_ghe_server %} 3.11.1. When upgrading to a release in the 3.11 series, upgrade to 3.11.1 or later.
