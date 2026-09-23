# Performance — 23/09/2026

## Resultado

Se optimizó el build de producción manteniendo los textos, precios, diseño y navegación existentes. Las imágenes originales se conservan: las variantes optimizadas se generan en `src/assets/optimized/`.

Valores en KB decimales (1 KB = 1000 bytes). El gzip se calcula con `node:zlib` usando la misma configuración antes y después; puede diferir ligeramente de la estimación que imprime Vite.

| Recurso | Antes | Después | Reducción |
| --- | ---: | ---: | ---: |
| JavaScript, sin comprimir | 384,94 KB | 340,19 KB | 11,6% |
| JavaScript, gzip | 122,33 KB | 109,73 KB | 10,3% |
| CSS, gzip | 11,01 KB | 7,46 KB | 32,2% |
| Favicon | 219,56 KB | 1,24 KB | 99,4% |
| Logo | 52,17 KB | 8,78 KB | 83,2% |
| Ejemplo Café Aurora | 227,60 KB | 15,23 / 34,28 KB | 93,3% / 84,9% |
| Ejemplo King Barber | 264,69 KB | 21,88 / 47,90 KB | 91,7% / 81,9% |
| Ejemplo El Galpón | 298,81 KB | 20,66 / 56,90 KB | 93,1% / 81,0% |
| Tarjeta JL Marketing | 427,84 KB | 19,44 / 39,35 KB | 95,5% / 90,8% |

Las dos variantes de imagen son de 640 y 1200 píxeles. `srcset` y `sizes` permiten que el navegador elija según el espacio disponible y la densidad de pantalla. No se descargan ambas necesariamente. En la prueba móvil de 390 × 844 se seleccionó la variante de 640 px de Café Aurora y de la tarjeta JL; pantallas de mayor densidad pueden elegir la de 1200 px.

## Hallazgos y cambios

- El favicon original tenía 1254 × 1254 píxeles. Se generó uno de 48 × 48.
- Las capturas originales tenían 1905 píxeles de ancho. Se generaron variantes WebP adaptadas a su tamaño en pantalla.
- La imagen de Café Aurora del modal cerrado se cargaba sin abrirlo (140,27 KB). Se confirmó que estaba cargada en el DOM de la versión anterior. Ahora el contenido del modal se monta al abrirlo y se retira al cerrar.
- El logo se sirve a 360 píxeles, suficiente para su presentación actual incluso a alta densidad.
- Se conserva la fuente variable Manrope con sus caracteres latinos y se precarga desde el HTML. Se eliminaron las declaraciones de alfabetos que no utiliza la página, incluido un subconjunto incrustado en el CSS. Los subconjuntos externos sin caracteres coincidentes no se descargaban: su eliminación no se contabiliza como ahorro de red inicial.
- Se usa `LazyMotion` con `domAnimation` y componentes `m`. La línea del selector mantiene su movimiento usando una transformación horizontal; ya no requiere el motor de animación de layout.
- El título queda visible desde el comienzo y conserva una entrada corta de 650 ms, en lugar de comenzar completamente fuera de pantalla durante una entrada de 1100 ms.
- Se mantiene la carga diferida de la tarjeta inferior y se utiliza decodificación asíncrona para las imágenes. Se ajustó la proporción reservada de la tarjeta JL a su imagen para evitar un cambio de altura al cargar.
- Tailwind limita el análisis de clases a `src`, evitando que los archivos de informes o copias de auditoría añadan estilos al build.

## Comprobaciones

- Build de producción y ESLint.
- Navegación entre planes, cambio entre página y tarjeta, apertura del modal y cierre con Escape.
- Modal cerrado sin imagen montada.
- Imágenes cargadas correctamente y sin errores de consola en la versión de producción local.
- Versión móvil de 390 × 844, sin desbordamiento horizontal.
- Presupuestos de peso reproducibles con `npm run performance:check`.

## Repetir la optimización

1. Tras cambiar las imágenes fuente: `npm run optimize:images`.
2. Construir y comprobar límites: `npm run performance:check`.
3. Verificar calidad visual si cambian las capturas o las tarjetas. No se recomprimen las tarjetas ampliables existentes para preservar sus detalles y QR.

Los límites actuales permiten hasta 120 KB gzip de JavaScript, 10 KB gzip de CSS, 30 KB por variante de 640 px, 70 KB por variante de 1200 px, 10 KB para el logo y 2 KB para el favicon. La comprobación falla si se exceden.

## Alcance de las mediciones

Se midieron tamaños de archivos de builds de producción y se verificó la selección/carga de imágenes en el navegador local. No son mediciones de Lighthouse, tiempos con red móvil simulada ni datos de usuarios reales. La reducción de bytes no equivale al mismo porcentaje de reducción en segundos.

Queda por medir en la URL pública el tiempo de respuesta del servidor, LCP, INP y CLS, y confirmar compresión Brotli/gzip y caché prolongada para los archivos con hash. El favicon de nombre fijo debe poder revalidarse. No se modificó ni publicó la configuración del hosting.
