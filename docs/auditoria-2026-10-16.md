# Auditoría de rendimiento y seguridad — 16/10/2026

## Alcance

Revisión del código, dependencias instaladas, build y navegador local. No se
publicó el sitio ni se inspeccionó un servidor de producción. Es una landing
estática: este repositorio no contiene API, autenticación ni almacenamiento de
datos de clientes.

## Problemas corregidos

- `npm audit` detectaba 12 paquetes con alertas (10 de severidad alta y 2
  moderadas). Se quitó `git`, que no tenía uso y traía alertas sin solución
  disponible, y las dependencias sin uso de mapas y carrusel. Se actualizaron
  dependencias compatibles, incluidas Vite, React Router y Sharp. Resultado:
  cero alertas en la auditoría completa, también contando herramientas de
  desarrollo. No todas las alertas previas eran explotables en esta landing;
  algunas afectaban funciones de servidor que no se utilizan.
- La captura de ferretería importaba de nuevo el JPG original y lo declaraba
  como una variante de 1200 px. Se conectó la variante WebP y se regeneraron sus
  tamaños desde la captura actual. El control de peso ahora exige la presencia
  de todas las variantes esperadas, además de comprobar su tamaño.
- El fondo principal usaba un JPG de 204,12 KB. Ahora usa WebP con nombre
  versionado por Vite: 44,30 KB en escritorio y 16,52 KB hasta 760 px. El
  original permanece disponible como fuente para regenerar las variantes.
- El título principal comenzaba invisible y esperaba una animación de 1,15 s.
  Ahora comienza visible con un desplazamiento corto de 0,65 s; se conserva la
  preferencia de movimiento reducido.
- Un fragmento URL con escapes inválidos podía lanzar `URIError` al navegar.
  Se maneja el error sin interrumpir la aplicación.
- Se añadieron exclusiones de `.env` y sus variantes para prevenir incorporarlas
  accidentalmente a Git. Esto no elimina secretos de un historial anterior.

## Pesos medidos

KB decimales. Gzip calculado con `node:zlib`, como en el control existente.

| Recurso | Antes | Después |
| --- | ---: | ---: |
| JavaScript gzip total | 109,99 KB | 109,52 KB |
| CSS gzip | 7,68 KB | 7,73 KB |
| Fondo principal | 204,12 KB | 16,52 / 44,30 KB |
| Captura ferretería grande | 141,22 KB | 26,50 KB |
| Captura ferretería pequeña | 20,66 KB | 10,55 KB |

Estos tamaños no equivalen a mejoras porcentuales en tiempos de carga. No se
midieron Lighthouse ni métricas de usuarios reales.

## Seguridad y despliegue

`vercel.json` deja preparada la política para Vercel; `vite preview` aplica las
mismas cabeceras de seguridad para probar compatibilidad localmente. No hay
evidencia en el repositorio que confirme cuál es el proveedor del sitio real.
Si se despliega en otro hosting, trasladar estas cabeceras y la regla de ruta a
su configuración. La caché de producción todavía requiere verificación allí.

- CSP permite scripts, fuentes e imágenes del mismo origen. Bloquea scripts
  inline, `eval`, objetos incrustados, formularios y enmarcado. Se permiten
  atributos de estilo inline porque React y Motion los usan para animar.
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, política de
  referencia `no-referrer` y restricciones de cámara, micrófono y ubicación.
- Caché de un año e `immutable` solo para `/assets/`, cuyos archivos genera Vite
  con hash. HTML revalidable y ruta directa `/Presupuesto` hacia `index.html`.
- Los enlaces externos ya usaban `rel="noreferrer"` y los mensajes de WhatsApp
  ya codificaban sus parámetros. No se encontró uso de `dangerouslySetInnerHTML`
  ni ejecución dinámica de código en las fuentes de la aplicación.

Referencias consultadas: [CSP de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP),
[estilos inline y CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr),
[configuración de Vercel](https://vercel.com/docs/project-configuration/vercel-json).

## Validación

- `npm run performance:check`: TypeScript, build y todos los límites de peso.
- `npm run lint`: sin errores.
- `npm audit --audit-level=low`: cero vulnerabilidades reportadas.
- Cabeceras de seguridad confirmadas por HTTP en la vista previa.
- Navegador: selección del plan completo e imagen optimizada cargada, cambio a
  tarjeta, apertura de modal, cierre con Escape y retirada de su imagen del DOM.
- Navegador móvil de 390 × 844: sin desbordamiento horizontal, fondo de 960 px y
  título visible. Ruta directa de presupuesto con fragmento malformado sin
  errores de consola. No se observaron errores o advertencias de CSP en estos
  recorridos.

Para repetir: `npm ci`, `npm run performance:check`, `npm run lint`, `npm audit`
y `npm run preview`. Tras modificar imágenes fuente: `npm run optimize:images`
y revisión visual de las variantes. Confirmar HTTPS, cabeceras, compresión,
caché y métricas LCP/INP/CLS en el dominio público después de desplegar.
