# Trabajo Individual

## Tema: Code Smells

Alonso Cáceres Gonzales

## 1. Marco Teorico

**Code Smells son indicadores de problemas en el código**: Code Smells son características o patrones de código que pueden indicar problemas en el diseño, la calidad o la mantenibilidad del código fuente. Identificar y abordar code smells es esencial para mejorar la calidad del software.

## 2. Herramientas Necesarias

Este estudio se llevo a cabo en la distribucion Gentoo linux y con herramientas de software Libre.

<em>If it moves, compile it.</em> - [Gentoo](https://www.gentoo.org/)

### - Drogon

Se trata de un framework de C++ para desarrollo web que segun benchmarks su rama "core" es el framework que mejor rendimiento alcanza. 

link al Video Demo

```
https://ulima-edu-pe.zoom.us/rec/share/S4iL9WolFL2zPEKo3MboxQJeBcIuUAHnPZK90Dzmds2tITEobVcwixOakt3_NpS4.sNKP18ys00Pjyk5H
```

![Drogon](https://github.com/DarkShadow76/ArquiSoft-Grupo1/blob/master/trabajoIndividual/AlonsoCaceres/benchmark.png)

Algunas características clave de Drogon incluyen:

  1. Rendimiento: Drogon está diseñado para ser rápido y eficiente. Utiliza la programación asíncrona para manejar múltiples solicitudes simultáneamente y aprovechar al máximo los recursos del sistema.

  2. Compatibilidad con HTTP/1.1 y HTTP/2: Admite tanto HTTP/1.1 como HTTP/2, lo que permite el uso de conexiones multiplexadas y otras características de HTTP/2 para acelerar la carga de páginas web.

  3. Enrutamiento y controladores: Drogon facilita la creación de rutas y controladores para manejar solicitudes HTTP y definir cómo se deben procesar.

  4. Plantillas: Proporciona un sistema de plantillas que permite generar contenido HTML de manera eficiente y estructurada.

  5. Bases de datos: Ofrece soporte para bases de datos, incluidas PostgreSQL, MySQL y SQLite, para ayudar a interactuar con bases de datos en aplicaciones web.

  6. Sistemas operativos múltiples: Drogon es compatible con varios sistemas operativos, incluidos Linux, macOS y Windows.

  7. Seguridad: Incluye características de seguridad, como protección contra inyecciones SQL y protección contra ataques comunes en aplicaciones web.

  8. API RESTful: Facilita la creación de servicios web RESTful para construir aplicaciones que sigan principios de arquitectura orientada a servicios.

  9. Código abierto: Drogon es de código abierto y se distribuye bajo una licencia que permite su uso, modificación y distribución libre.

#### Requisitos de Instalacion:

- Version de Linux Kernel mayor a 2.6.9: [Archivos del Kernel Linux](https://www.kernel.org/)
- Coleccion de Compilador de GNU: [Instalar GCC](https://gcc.gnu.org/)
- Cross-Platform Make: [Instalar Cmake](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation)
- Git: [Obtener Git](https://git-scm.com/)

#### Librerias Obligatorias
 
- jsoncpp

  Es una biblioteca de C++ que se utiliza para trabajar con datos en formato JSON (JavaScript Object Notation). Permite analizar datos JSON, crear estructuras de datos JSON y serializar datos en formato JSON.

- libuuid

  Es útil cuando se necesite generar o trabajar con identificadores únicos en aplicaciones. Esto puede ser importante en aplicaciones distribuidas o cuando se requiera evitar conflictos de identificación.

- zlib

  Se utiliza en una amplia variedad de aplicaciones para la compresión de datos. Por ejemplo, es comúnmente utilizado en aplicaciones web para comprimir contenido antes de enviarlo al navegador del cliente, en aplicaciones de compresión de archivos, y en aplicaciones que necesitan ahorrar espacio de almacenamiento o transferir datos de manera eficiente.

La documentancion para la instalacion y configuracion de Drogon Framework esta disponible en su respositorio de GitHub.

[Instalacion de Drogon Framework para Windows](https://github.com/drogonframework/drogon/wiki/ENG-02-Installation#windows)

### - CppCheck

CppCheck es una programa para el analisis estatico de codigo para C/C++. Ofrece analisis unico de codigo para detectar bugs, comportamientos undefinidos y contruccions inseguras de codigo.

[Download CppCheck](https://cppcheck.sourceforge.io/)

## 3. Pruebas

Para realizar las pruebas se siguo los siguientes pasos:

### 1. Clonar el branch <em>"master"</em> del proyecto Drogon Framework a una carpeta local.

```bash
git clone https://github.com/drogonframework/drogon.git
```

### 2. Listar los directorios para corroborar que se clonó el proyecto Drogon localmente.

```bash
ls -l
```
tal como se aprecia en la prompt de la terminal, se clono exitosamente la rama principal de Drogon Framework.

```bash
drwxr-xr-x tori tori 4.0 KB Thu Sep  7 07:52:39 2023 drogon
```

### 3. Ejecutar el comando

```bash
cppcheck --force drogon | grep -w error
```

Esta combinación de comandos ejecuta <em>cppcheck</em> con el parámetro <em>--force</em>, lo que significa que se ejecutará independientemente de si hay errores en alguna configuración.

Cuando este cppCheck termine de realizar el analisis

## 4. Resultados

La salida de <em>cppcheck</em> contiene varios mensajes de error y advertencia que indican problemas potenciales en el código fuente de la rama principal de Drogon Framework. A continuacion una breve explicacion de cada uno de estos mensajes:

1. **`error: Exception thrown in function declared not to throw exceptions`**: Este error indica que se está lanzando una excepción en una función que se ha declarado como no lanzar excepciones. Esto puede ser un problema si la función no debería generar excepciones, ya que contradice la declaración.

2. **`error: Shifting 32-bit value by 32 bits is undefined behaviour`**: Este error advierte sobre un desplazamiento (shift) de bits que podría resultar en comportamiento indefinido. En este caso, parece que se está tratando de realizar un desplazamiento de 32 bits en una variable de 32 bits, lo que puede generar resultados no definidos.

3. **`error: Uninitialized variable`**: Estos errores indican que hay variables que se utilizan antes de ser inicializadas. Usar variables no inicializadas puede llevar a resultados inesperados o errores en el programa.

4. **`error: The one definition rule is violated, different classes/structs have the same name`**: Este error se refiere a una violación de la regla de "una definición" (One Definition Rule, ODR), que establece que no se deben definir múltiples clases o estructuras con el mismo nombre en el programa.

5. **`note`**: Las líneas que comienzan con "note" a menudo proporcionan información adicional sobre un problema reportado. Es asi que la nota confirma que hay un conflicto de nombres entre diferentes clases o estructuras con el mismo nombre.

## 5. Conclusiones

1. **<em>cppcheck</em> es una herramienta útil para identificar problemas potenciales en el código fuente**, pero aún requerirá una revisión y corrección manual por parte de los desarrolladores para resolver los problemas específicos que encuentra.


2. **Los estudios de Code Smells requieren revisión manual y herramientas**: Realizar un estudio de code smells implica tanto el uso de herramientas automáticas de análisis de código como la revisión manual del código. Las herramientas pueden ayudar a identificar problemas, pero la revisión manual es esencial para evaluar la criticidad y comprender el contexto.

3. **La retroalimentación y la contribución son valiosas**: Si se encuentran code smells en proyectos de código abierto como Drogon Framework, proporcionar retroalimentación a los mantenedores del proyecto o contribuir con correcciones y mejoras es beneficioso tanto para la comunidad como para la calidad del software. La participación activa de la comunidad es esencial para el éxito de proyectos de código abierto.
