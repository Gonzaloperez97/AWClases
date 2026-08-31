---
name: Canine Harmony
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414751'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#3a6a00'
  on-secondary: '#ffffff'
  secondary-container: '#a1fa49'
  on-secondary-container: '#3e7100'
  tertiary: '#686000'
  on-tertiary: '#ffffff'
  tertiary-container: '#bbae00'
  on-tertiary-container: '#464100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#a1fa49'
  secondary-fixed-dim: '#87dc2c'
  on-secondary-fixed: '#0e2000'
  on-secondary-fixed-variant: '#2a5000'
  tertiary-fixed: '#f7e61a'
  tertiary-fixed-dim: '#d9c900'
  on-tertiary-fixed: '#1f1c00'
  on-tertiary-fixed-variant: '#4e4800'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: auto
  max-width: 1200px
---

## Personalidad de Marca y Estilo

El sistema de diseño se fundamenta en una personalidad **cercana, profesional y lúdica**. El objetivo es evocar una sensación de calma y seguridad tanto para los dueños como para las mascotas, eliminando la ansiedad asociada con el aseo canino.

El estilo visual es una mezcla de **Minimalismo Suave** y **Modernismo Corporativo Amigable**. Se caracteriza por el uso generoso del espacio en blanco para transmitir higiene, combinado con elementos de interfaz orgánicos y redondeados que sugieren suavidad. La estética debe sentirse "limpia" pero no clínica, manteniendo un equilibrio entre la eficiencia de un servicio profesional y la calidez de un cuidador apasionado.

## Colores

La paleta se inspira en elementos naturales y de bienestar:
- **Azul Suave (Primario):** Transmite confianza, profesionalismo y serenidad. Se utiliza para acciones principales y navegación.
- **Verde Menta (Secundario):** Evoca frescura, higiene y naturaleza. Ideal para estados de éxito o servicios de baño.
- **Amarillo Cálido (Terciario):** Aporta el toque lúdico y energético. Se usa con moderación para destacar promociones o elementos de "alegría".
- **Neutros:** Se utiliza un blanco puro para fondos y una escala de grises cálidos para el texto, evitando el negro puro para mantener la suavidad visual.

El modo por defecto es **claro**, reforzando la sensación de limpieza y claridad del establecimiento.

## Tipografía

La tipografía ha sido seleccionada por su legibilidad y carácter contemporáneo. 

- **Plus Jakarta Sans** se utiliza para titulares y etiquetas. Sus formas abiertas y curvas amigables refuerzan el tono acogedor del sistema.
- **Be Vietnam Pro** se emplea para el cuerpo de texto debido a su excelente legibilidad en pantallas y su tono neutro pero moderno.

Para dispositivos móviles, los titulares grandes (XL y LG) deben reducir su escala para evitar particiones de palabras incómodas, priorizando siempre la lectura fluida.

## Diseño y Espaciado

El sistema utiliza un **modelo de rejilla fluida** basado en una unidad base de 8px. 

- **Escritorio:** Rejilla de 12 columnas con un ancho máximo de 1200px, centrada en pantalla. Los márgenes laterales son flexibles.
- **Móvil:** Rejilla de 4 columnas con márgenes laterales de 16px.
- **Ritmo Vertical:** El espaciado entre secciones debe ser amplio (LG o XL) para permitir que el diseño "respire", reforzando la sensación de calma.

Los contenedores y elementos de contenido deben utilizar el espaciado `md` (24px) para el padding interno de forma consistente.

## Elevación y Profundidad

Para mantener la estética limpia y moderna, se evitan las sombras pesadas. La jerarquía se construye mediante:

1.  **Capas Tonales:** Uso de superficies en gris muy claro o azul pálido sobre fondos blancos para agrupar contenido relacionado.
2.  **Sombras Ambientales:** Sombras extremadamente difusas y de baja opacidad (5-10%) con un ligero matiz del color primario (azul) en lugar de gris neutro. Esto crea una sensación de flotación suave y natural.
3.  **Líneas de Contorno Finas:** Bordes de 1px en colores muy suaves para definir tarjetas y campos de entrada sin añadir peso visual innecesario.

## Formas

El lenguaje de formas es **redondeado y orgánico**. Se evitan las esquinas afiladas para comunicar amabilidad y seguridad.

- Los botones y campos de entrada utilizan el radio estándar de `0.5rem` (8px).
- Las tarjetas de servicios y contenedores principales utilizan `rounded-lg` (16px) o `rounded-xl` (24px) para enfatizar la suavidad.
- Los avatares de las mascotas siempre deben ser circulares.

## Componentes

- **Botones:** Con relleno sólido y esquinas redondeadas. El botón primario usa el azul primario; el secundario usa un estilo "ghost" con borde fino.
- **Chips / Etiquetas:** Utilizados para categorías de servicios (Corte, Baño, Spa). Deben tener fondos pasteles muy claros con texto en una versión oscura del mismo color.
- **Tarjetas (Cards):** Superficies blancas con bordes suaves o sombras muy sutiles. Se utilizan para mostrar perfiles de mascotas o paquetes de servicios.
- **Campos de Entrada:** Bordes suaves que cambian al azul primario en estado de foco. Los mensajes de error deben ser claros pero con un tono constructivo.
- **Listas de Servicios:** Espaciadas generosamente, utilizando iconos amigables (líneas finas, puntas redondeadas) para cada tipo de tratamiento.
- **Indicadores de Estado (Badges):** Pequeños círculos de color para indicar disponibilidad de citas en tiempo real.