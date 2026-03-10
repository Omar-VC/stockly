
📝 Descripción
Stockly es una aplicación web responsiva para control de stock y ventas, diseñada para ser utilizada por múltiples negocios de forma independiente.
Cada tienda tiene su propio espacio de administración, catálogo de productos y personalización visual (colores, logo, tipografía).
La app ofrece dos interfaces:

Panel privado (administración): gestión de productos, stock, ventas, usuarios.

Panel público (catálogo web): exhibición de productos con imágenes y detalles, accesible para clientes.

🛠️ Tecnologías
Frontend: React + Tailwind CSS (UI adaptable a escritorio, tablet y móvil).

Backend / Base de datos: Firebase (Auth + Firestore).

Storage de imágenes: Cloudinary (optimización y entrega rápida de fotos).


🔄 Flujo de la aplicación
Autenticación: dueño/empleado inicia sesión con Firebase Auth.

Administración:

Carga productos (nombre, precio, stock).

Sube imágenes → se guardan en Cloudinary en carpeta del negocio.

Firestore guarda datos del producto + URL de la imagen.

Catálogo público:

Los clientes acceden a la web del negocio.

La app consulta Firestore y muestra productos con imágenes desde Cloudinary.

Se aplica el theme configurado por el negocio.

Ventas y reportes:

Cada venta se registra en Firestore.

El dueño puede ver reportes de stock y ventas en su panel privado.

🎨 Paneles / Interfaces
Panel privado (AdminDashboard)

Gestión de productos (CRUD).

Control de stock.

Registro de ventas.

Configuración de negocio (nombre, logo, colores).

Panel público (PublicCatalog)

Catálogo de productos con fotos y precios.

Adaptado a móvil/escritorio.

Personalización visual según el negocio.

🚀 Ventajas
Multi‑negocio: una sola app, múltiples clientes.

Personalización: cada negocio siente que la app es “suya”.

Escalable: podés vender la misma solución a muchos locales.

SaaS ready: modelo de suscripción mensual por uso.