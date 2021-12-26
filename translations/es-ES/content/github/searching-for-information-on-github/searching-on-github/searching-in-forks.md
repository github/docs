---
title: Buscar en bifurcaciones
intro: 'Por defecto, las bifurcaciones [forks](/articles/about-forks) no se muestran en los resultados de la búsqueda. Puedes elegir incluirlas en las búsquedas de repositorios y en las búsquedas de código si cumplen con determinados criterios.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

Para mostrar bifurcaciones en los resultados de la [búsqueda de repositorios](/articles/searching-for-repositories), agrega `fork:true` o `fork:only` en tu consulta.

Las fiburcaciones solo se indexan por [búsqueda de código](/articles/searching-code) cuando tienen más estrellas que el repositorio padre. No podrás buscar el código en una bifurcación que tenga menos estrellas que su padre. Para mostrar bifurcaciones con más estrellas que el repositorio padre en los resultados de una búsqueda de código, agrega `fork:true` o `fork:only` en tu consulta.

El calificador `fork:true` encuentra todos los resultados que coinciden con tu consulta de búsqueda, incluidas las bifurcaciones. El calificador `fork:only` encuentra _únicamente_ bifurcaciones que coinciden con tu consulta de búsqueda.

| Qualifier   | Ejemplo                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) encuentra todos los repositorios que contienen la palabra "github," incluidas las bifurcaciones.                                                  |
|             | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) encuentra código con la palabra "android" que está escrito en Java, tanto en bifurcaciones como en repositorios normales. |
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) encuentra todos los repositorios de bifurcaciones que contienen la palabra "github."                                                              |
|             | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) coincidirá con repositorios de más de 500 ramificaciones, y regresará únicamente aquellos que son ramificaciones.                     |

### Leer más

- "[Acerca de las bifurcaciones](/articles/about-forks)"
- "[Acerca de buscar en GitHub](/articles/about-searching-on-github)"
