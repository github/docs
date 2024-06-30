For example, if you have a runner group named `my-group` in the organization and another named `my-group` in the enterprise, you can update your workflow file to use `org/my-group` or `ent/my-group` to differentiate between the two.

Using `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Using `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```
