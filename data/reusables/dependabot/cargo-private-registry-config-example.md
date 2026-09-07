{% raw %}

```yaml
registries:
  cargo-example:
    type: cargo-registry
    registry: "name-of-your-registry"
    url: https://cargo.cloudsmith.io/foobaruser/test/
    token: "Token ${{secrets.CARGO_TOKEN}}"
```

{% endraw %}

We tested this configuration against the `https://cargo.cloudsmith.io` private registry.
