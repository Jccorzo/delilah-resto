# Api Delilah Restó

## Instrucciones para ejecutar el proyecto
    Este proyecto fue construido para ejecutarse de dos formas diferentes
    Además, poseé un usuario admin para logearse de la siguiente manera:
    Usuario: admin
    contraseña: 123456
    
### 1. Mediante docker compose
    Después de clonar el proyecto, en la raíz del proyecto ejecutar docker-compose up. Esto levantara la base de datos, la cual contendrá la información inicial para funcionar (3 productos creados y un usuario "admin")

### 2. Manualmente
    Ejecutando:
        1. En tu propia instancia de base de datos, ejecuta las sentencias que se encuentran en la ruta /database/populate.sql para crear la bd con su esquema y poblarla
        2. Ejecutar "node index.js" en la raíz del proyecto


