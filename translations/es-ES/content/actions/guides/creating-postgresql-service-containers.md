---
title: Crear contenedores de servicios PostgreSQL
shortTitle: Contenedores de servicio de PostgreSQL
intro: Puedes crear un contenedor de servicios PostgreSQL para usar en tu flujo de trabajo. En esta guía se muestran ejemplos de cómo crear un servicio PostgreSQL para trabajos que se ejecutan en contenedores o, directamente, en la máquina del ejecutor.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /Actions/Automating-Your-Workflow-with-GitHub-Actions/Creating-PostgreSQL-Service-containers
  - /actions/configuring-and-managing-workflows/creating-postgresql-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'Containers'
  - 'Docker'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

En esta guía se muestran ejemplos de flujos de trabajo que configuran un contenedor de servicios mediante la imagen `postgres` de Docker Hub. El flujo de trabajo ejecuta un script para crear un cliente de PostgreSQL y rellenarlo con datos. Para probar que el flujo de trabajo crea y rellena el cliente de PostgreSQL, el script imprime los datos del cliente en la consola.

{% data reusables.github-actions.docker-container-os-support %}

### Prerrequisitos

{% data reusables.github-actions.service-container-prereqs %}

También puede ser útil tener un conocimiento básico de YAML, la sintaxis para las {% data variables.product.prodname_actions %}, y de PostgreSQL. Para obtener más información, consulta:

- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Tutorial de PostgreSQL](https://www.postgresqltutorial.com/)" en la documentación de PostgreSQL

### Ejecutar trabajos en contenedores

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: PostgreSQL service example
on: push

Jobs:
  # Etiqueta del trabajo del contenedor
  container-job:
    # Los contenedores deben ejecutarse en sistemas operativos basados en Linux
    runs-on: Ubuntu-latest
    # Imagen de Docker Hub que ejecuta 'container-job ' en
    el contenedor: node:10.18-jessie

    # Contenedores de servicios para ejecutar con servicios de 'container-job ':
      # Etiqueta usada para acceder al contenedor de servicios
      Postgres:
        # Imagen de Docker Hub
        image: postgres
        # Proporciona la contraseña para Postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Establece chequeos de estado para esperar hasta que postgres inicie las
        opciones: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    Steps:
      # Descarga una copia del código en tu repositorio antes de ejecutar pruebas de CI
      - name: Check out repository code
        uses: actions/checkout@v2

      # Realiza una instalación limpia de todas las dependencias en el archivo 'package.json'
      # Para obtener más información, consulta https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Ejecuta un script que crea un cliente de PostgreSQL, rellena
        # el cliente con datos y recupera datos
        run: node client.js
        # Variable de entorno utilizada por el script 'client.js' para crear un nuevo cliente de PostgreSQL.
        env:
          # Nombre del host utilizado para comunicarse con el contenedor de servicios PostgreSQL
          POSTGRES_HOST: Postgres
          # Puerto PostgreSQL predeterminado
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configurar el trabajo del ejecutador

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.postgres-label-description %}

```yaml{:copy}
jobs:
  # Etiqueta del trabajo del contenedor
  container-job:
    # Los contenedores deben ejecutarse en sistemas operativos basados en Linux
    runs-on: ubuntu-latest
    # Imagen de Docker Hub que `container-job` ejecuta en el contenedor: node:10.18-jessie

    # Contenedores de servicios para ejecutar con servicios de `container-job`:
      # Etiqueta utilizada para acceder al contenedor de servicios
      redis:
        # Imagen de Docker Hub
        image: redis
        # Establece revisiones de estado para esperar hasta que Redis inicie las
        opciones: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### Configurar los pasos

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Descarga una copia del código en tu repositorio antes de ejecutar pruebas de CI
  - name: Check out repository code
    uses: actions/checkout@v2

  # Realiza una instalación limpia de todas las dependencias en el archivo 'package.json'
  # Para obtener más información, consulta https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # Ejecuta un script que crea un cliente de PostgreSQL, rellena
    # el cliente con datos y recupera datos
    run: node client.js
    # Variable de entorno utilizada por el script 'client.js ' para crear
    # un nuevo cliente de PostgreSQL.
    env:
      # Nombre del host utilizado para comunicarse con el contenedor de servicios PostgreSQL
      POSTGRES_HOST: Postgres
      # Puerto PostgreSQL predeterminado
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

El nombre del host del servicio PostgreSQL es la etiqueta que configuraste en tu flujo de trabajo, en este caso, `postgres`. Dado que los contenedores de Docker de la misma red de puentes definida por el usuario abren todos los puertos por defecto, podrás acceder al contenedor de servicios en el puerto 5432 PostgreSQL predeterminado.

### Ejecutar trabajos directamente en la máquina del ejecutor

Cuando ejecutes un trabajo directamente en la máquina del ejecutor, deberás asignar los puertos del contenedor de servicios a los puertos del host de Docker. Puedes acceder a los contenedores de servicios desde el host de Docker utilizando `localhost` y el número de puerto del host de Docker.

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: PostgreSQL Service Example
on: push

Jobs:
  # Etiqueta del trabajo del ejecutador
  runner-job:
    # Debes usar un entorno Linux cuando uses contenedores de servicios o trabajos del contenedor
    runs-on: ubuntu-latest

    # Contenedores de servicios para ejecutar con servicios de 'runner-job':
      # Etiqueta usada para acceder al contenedor de servicios
      postgres:
        # Imagen de Docker Hub
        image: postgres
        # Proporciona la contraseña para postgres
        env:
          POSTGRES_PASSWORD: Postgres
        # Establece chequeos de estado para esperar hasta que postgres inicie las
        opciones: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Asigna el puerto tcp 5432 del contenedor de servicios al host
          -5432:5432

    Steps:
      # Descarga una copia del código en tu repositorio antes de ejecutar pruebas de CI
      - name: Check out repository code
        uses: actions/checkout@v2

      # Realiza una instalación limpia de todas las dependencias en el archivo 'package.json'
      # Para obtener más información, consulta https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Ejecuta un script que crea un cliente de PostgreSQL, rellena
        # el cliente con datos y recupera datos
        Run: node client.js
        # Variable de entorno utilizada por el script 'client.js' para crear
        # un nuevo cliente de PostgreSQL.
        env:
          # Nombre del host utilizado para comunicarse con el contenedor de servicios PostgreSQL
          POSTGRES_HOST: localhost
          # Puerto PostgreSQL predeterminado
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configurar el trabajo del ejecutador

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.postgres-label-description %}

El flujo de trabajo asigna el puerto 5432 del contenedor de servicios PostgreSQL al host de Docker. Para obtener más información acerca de la palabra clave `ports`, consulta "[Acerca de los contenedores de servicio](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

```yaml{:copy}
jobs:
  # Etiqueta del trabajo del ejecutador
  Runner-Job:
    # Debes usar un entorno Linux cuando uses contenedores de servicios o trabajos del contenedor
    runs-on: ubuntu-latest

    # Contenedores de servicios para ejecutar con servicios 'runner-job':
      # Etiqueta usada para acceder al contenedor de servicios
      Postgres:
        # Imagen de Docker Hub
        image: postgres
        # Proporciona la contraseña para postgres
        Env:
          POSTGRES_PASSWORD: postgres
        # Establece chequeos de estado para esperar hasta que postgres inicie las
        opciones: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        Ports:
          # Asigna el puerto tcp 5432 del contenedor de servicios al host
          -5432:5432
```

#### Configurar los pasos

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Descarga una copia del código en tu repositorio antes de ejecutar pruebas de CI
  - name: Check out repository code
    uses: actions/checkout@v2

  # Realiza una instalación limpia de todas las dependencias en el archivo 'package.json'
  # Para obtener más información, consulta https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # Ejecuta un script que crea un cliente de PostgreSQL, rellena
    # el cliente con datos y recupera datos
    run: node client.js
    # Variable de entorno utilizada por el script 'client.js ' para crear
    # un nuevo cliente de PostgreSQL.
    env:
      # Nombre del host utilizado para comunicarse con el contenedor de servicios PostgreSQL
      POSTGRES_HOST: localhost
      # Puerto PostgreSQL predeterminado
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Probar el contenedor de servicios de PostgreSQL

Puedes probar tu flujo de trabajo usando el siguiente script, que crea un cliente de PostgreSQL y agrega una tabla nueva con algunos datos de marcador de posición. Luego, el script le imprime los valores almacenados en el cliente de PostgreSQL al terminal. Tu script puede usar el lenguaje que quieras, pero este ejemplo usa Node.js y el módulo npm de `pg`. Para obtener más información, consulta el [módulo npm de pg](https://www.npmjs.com/package/pg).

Puedes modificar *client.js* para incluir cualquier operación de PostgreSQL que necesite tu flujo de trabajo. En este ejemplo, el script crea la instancia de cliente de PostgreSQL, crea una tabla, agrega datos de marcador de posición y luego recupera los datos.

{% data reusables.github-actions.service-container-add-script %}

```javascript{:copy}
const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    if (err) throw err
});

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});
```

El script crea un nuevo `Client` (cliente) de PostgreSQL, que acepta un `host` y un parámetro de `port` (puerto). El script usa las variables de entorno `POSTGRES_HOST` y `POSTGRES_PORT` para establecer la dirección IP y el puerto del cliente. Si `host` y `port` no están definidos, el host predeterminado es `localhost` y el puerto predeterminado es 5432.

El script crea una tabla y la rellena con datos de marcador de posición. Para probar que la base de datos de PostgreSQL contenga los datos, el script imprime los contenidos de la tabla en el registro de la consola.

Cuando ejecutes este flujo de trabajo, debes ver el siguiente resultado en el paso "Connect to PostgreSQL" (Conectar con PostgreSQL) que confirma que creaste el cliente de PostgreSQL y agregaste los datos:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
