## Patrón de Diseño Pipe and Filter - Ejemplo con Script Bash

El patrón de diseño Pipe and Filter se utiliza para estructurar y componer sistemas donde los datos fluyen a través de una serie de componentes independientes llamados filtros, conectados por tuberías (pipes). Cada filtro realiza una tarea específica, y la combinación de estos filtros en una secuencia permite construir procesos más complejos y modulares.

link al Video Demo

```
https://ulima-edu-pe.zoom.us/rec/share/611T_jtbckQDo2qG0S3MJolHimZ8d-7lOJOfNmtHvNJZYAZbpATN_mnYE2lGILO6.7fNjC9f0W1R6sW2z
```

### Descripción del Script

El siguiente script Bash es un ejemplo práctico del patrón Pipe and Filter. El script se encarga de reproducir estaciones de radio en línea, permitiendo al usuario seleccionar una estación de una lista predefinida.

```bash
#!/bin/sh

ARGS="--volume=60"

RADIO_LIST=("Lofi Girl"
            "Chillhop"
            "Box Lofi"
            "The Bootleg Boy"
            "Radio Spinner"
            "SmoothChill"
            "Radio ROKS Rock-Ballads"
            "Real Punk Radio"
            "STAR FM Hard Rock"
            "Radio Anime 24"
            "Riding Retro Radio")

URL=("https://play.streamafrica.net/lofiradio"
    "http://stream.zeno.fm/fyn8eh3h5f8uv"
    "http://stream.zeno.fm/f3wvbbqmdg8uv"
    "http://stream.zeno.fm/0r0xa792kwzuv"
    "https://live.radiospinner.com/lofi-hip-hop-64"
    "https://media-ssl.musicradio.com/SmoothChill"
    "http://online.radioroks.ua/RadioROKS_Ballads"
    "http://149.56.155.73:8080"
    "https://stream.starfm.de/hardrock/mp3-192"
    "http://91.232.4.33:7028"
    "https://www.ridingretroradio.com/streamInfo.m3u")

notification(){
    notify-send "Playing now: " "$@" --icon=media-tape
}

menu(){
    for ((i=0; i<${#RADIO_LIST[@]}; i++)); do
        printf "$((i+1)). ${RADIO_LIST[$i]}\n"
    done
}

main() {
    choice=$(menu | dmenu -i -l 5 -p "Dmenu-beats" | cut -d' ' -f1 | tr -d '.')
    printf "${RADIO_LIST[$choice-1]}\n"

    if [[ $choice -ge 1 && $choice -le ${#RADIO_LIST[@]} ]]; then
        notification "${RADIO_LIST[$choice-1]} ☕️🎶"
        st -e mpv $ARGS --title="radio-mpv" "${URL[$choice-1]}"
    fi
}

pkill -f radio-mpv || main
```

### Explicación del Uso del Patrón Pipe and Filter en el Script

En este script, se observa la presencia del patrón Pipe and Filter en los siguientes puntos:

1. **Menú y Filtros de Elección:**
   - La función `menu` actúa como un filtro que presenta las opciones al usuario.
   - El resultado del menú se utiliza como entrada para el siguiente filtro.

2. **Selección y Filtro de Notificación:**
   - La función `main` filtra y procesa la elección del usuario.
   - La función `notification` se encarga de notificar la selección al usuario.

3. **Selección y Filtro de Reproducción:**
   - La URL seleccionada se utiliza como entrada para el filtro que reproduce la estación de radio utilizando `mpv`.

El flujo de datos a través de estos filtros ilustra el patrón Pipe and Filter, donde cada componente realiza una tarea específica, facilitando la construcción modular y la extensibilidad del sistema.

### Comandos Adicionales en el Ejemplo del Patrón Pipe and Filter

#### Comando de Selección de Palabras Aleatorias con `dmenu`

El siguiente comando utiliza el patrón Pipe and Filter para seleccionar palabras aleatorias de una lista y presentarlas al usuario mediante `dmenu`.

```bash
echo "hello\nWorld\nTesting\nPrompt\nDmenu\nUso\nGentoo\nBtw" | dmenu -i -l 4 -p "Random words"
```

**Explicación:**
1. `echo "hello\nWorld\nTesting\nPrompt\nDmenu\nUso\nGentoo\nBtw"`: Este comando genera una lista de palabras separadas por saltos de línea.
2. `|`: El operador pipe redirige la salida del comando anterior como entrada al siguiente comando.
3. `dmenu -i -l 4 -p "Random words"`: Utiliza `dmenu` para presentar al usuario la lista de palabras y permite la selección de una. Los flags `-i` son para hacer la búsqueda insensible a mayúsculas, `-l 4` limita la lista a 4 elementos, y `-p "Random words"` establece un prompt personalizado.

#### Comando de Últimas 10 Operaciones de `genlop` desde un Archivo de Registro

El siguiente comando utiliza `genlop` para mostrar las últimas 10 operaciones registradas en un archivo de registro de `emerge`.

```bash
genlop -l -f emerge.log | tail -n10
```

**Explicación:**
1. `genlop -l -f emerge.log`: Utiliza `genlop` para listar todas las operaciones (`-l`) registradas en el archivo de registro especificado (`-f emerge.log`).
2. `|`: El operador pipe redirige la salida del comando anterior como entrada al siguiente comando.
3. `tail -n10`: Muestra las últimas 10 líneas del resultado, que corresponden a las últimas 10 operaciones registradas.

#### Comando de Filtrado de Operaciones de `genlop` para `gcc`

El siguiente comando utiliza `genlop` para filtrar las operaciones registradas en un archivo de registro de `emerge` y mostrar solo las relacionadas con `gcc`.

```bash
genlop -l -f emerge.log | grep -w gcc
```

**Explicación:**
1. `genlop -l -f emerge.log`: Utiliza `genlop` para listar todas las operaciones (`-l`) registradas en el archivo de registro especificado (`-f emerge.log`).
2. `|`: El operador pipe redirige la salida del comando anterior como entrada al siguiente comando.
3. `grep -w gcc`: Filtra las líneas que contienen la palabra `gcc` en el resultado utilizando `grep`. El flag `-w` asegura que se coincida solo con palabras completas.

## Referencias

1. **dmenu: Dynamic Menu for X:**
   - Sitio Oficial: [https://tools.suckless.org/dmenu/](https://tools.suckless.org/dmenu/)

2. **Genlop - Gentoo Wiki:**
   - Página del Wiki de Gentoo sobre Genlop: [https://wiki.gentoo.org/wiki/Genlop](https://wiki.gentoo.org/wiki/Genlop)

3. **Linux man page - pipe(2):**
   - Página de manual de Linux para el sistema de llamadas al sistema pipe: [https://www.man7.org/linux/man-pages/man2/pipe.2.html](https://www.man7.org/linux/man-pages/man2/pipe.2.html)

4. **Dmenu-beats en GitHub:**
   - Repositorio de GitHub para Dmenu-beats: [https://github.com/DarkShadow76/Dmenu-beats](https://github.com/DarkShadow76/Dmenu-beats)