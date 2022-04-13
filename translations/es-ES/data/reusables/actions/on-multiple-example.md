Puedes especificar eventos sencillos o múltiples. Por ejemplo, un flujo de trabajo con el siguiente valor de `on` se ejecutará cuando se haga una subida a cualquier rama del repositorio o cuando alguien lo bifurque:

```yaml
on: [push, fork]
```

Si especificas eventos múltiples, únicamente uno de ellos necesitará ocurrir para que se active tu flujo de trabajo. Si ocurren eventos múltiples de activación para tu flujo de trabajo al mismo tiempo, se activarán las ejecuciones de flujo de trabajo múltiples.
