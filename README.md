# 🛍️ Catálogo Ventas KCI

Catálogo de productos web con la marca **Ventas KCI**, carrito de compras y pedidos por WhatsApp.

## ✨ Características

- Catálogo con imágenes, buscador y filtros por categoría
- Carrito funcional (agregar, quitar, cantidades, total)
- **Pedidos directos por WhatsApp**: el botón "Pedir por WhatsApp" arma el mensaje
  con los productos y el total, y lo envía al número de KCI
- Botón flotante para escribir directo por WhatsApp
- Colores tomados de tu logo (oscuro, crema y rosa coral)
- Diseño responsive (móvil y escritorio)

## 📂 Archivos

| Archivo       | Qué contiene                                   |
|---------------|------------------------------------------------|
| `index.html`  | Estructura de la página                        |
| `styles.css`  | Diseño y colores de marca                      |
| `products.js` | **Tus productos** (edita aquí)                 |
| `app.js`      | Lógica del catálogo y el carrito               |
| `logo.png`    | Tu logo (agrégalo con este nombre)             |

## 🔧 Cómo personalizarlo

### 1. Agregar tu logo
Guarda tu logo como `logo.png` en esta misma carpeta. Aparecerá en la parte
superior. (Si no existe, simplemente no se muestra y no rompe nada.)

### 2. Cambiar los productos
Edita `products.js`. Cada producto tiene esta forma:

```js
{
  id: 1,
  name: "Nombre del producto",
  category: "Categoría",
  price: 59.99,
  image: "https://url-de-la-imagen.jpg",
  description: "Descripción breve.",
}
```

### 3. Cambiar el número de WhatsApp
El número está en dos lugares (ya configurado como `56954396020`):
- `app.js` → `const WHATSAPP_NUMBER = "56954396020";`
- `index.html` → el enlace del botón flotante `wa.me/56954396020`

## ▶️ Cómo verlo

Abre `index.html` en tu navegador (doble clic). No necesita instalación.
> Nota: las imágenes de ejemplo se cargan desde internet, así que necesitas conexión.
