# Platzon

Platzon es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de Educación Efectiva Online.

## Descripción del Idioma
- Si la palabra termina con "ar" se le quitan esas dos letras.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guión medio.
- Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas.

## Instalación

```
npm install platzon
```

## Uso
```
import platzon from 'platzon'

plazton("Programar") // Program
platzon("zorro") // zorrope
platzon("zarpar") // zarppe, por la regla 1
platzon("abecedario") // abece-dario
platzon("sometemos") // SoMeTeMoS
 ```

 ## Creditos
 - [Alter Moradel](https://twitter.com/daniel_lmv)

 ## Licencia
 - [MIT](https://opensource.org/licenses/MIT)