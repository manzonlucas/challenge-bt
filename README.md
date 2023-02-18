# Challenge-BT
Proyecto desarrollado por Lucas Matías Manzón para aplicar a un puesto en un proyecto freelance frontend.

### PRE REQUISITOS:
- Tener instalado MySQL Server y agregado al PATH.
[https://dev.mysql.com/downloads/mysql/]
- Tener instalado Bash Shell CLI.

### SET UP:
Modificar el codigo, seteando las credenciales (username y password) correspondientes de MySQL en:
`backend/src/app.module.ts` => linea 16 y 17.

### SET UP BACKEND Y DB:
### INSTALAR DEPENDENCIAS, CREAR DB Y APLICAR SEEDS:
- Dentro de la CLI situarse en el directorio de backend: <br/>
`cd backend`
- Instalar dependencias: <br/>
`npm install`
- Aplicar seeds: <br/>
`chmod +x seedData.sh` <br/>
`./seedData.sh` => introducir las credenciales cuando se las requieran

### CORRER BACKEND:
- `npm run start:dev`

### CORRER FRONTEND:
- Volver a la carpeta root: <br/>
`cd ..`
- Situarse en /frontend: <br/>
`cd frontend`
- Instalar dependencias: <br/>
`npm install` <br/>
`npm start`

### NAVEGAR
- Abrir navegador de preferencia.
- dirigirse a: <br/>
`http://localhost:3000/`

### OBSERVACIONES
- Caracteristicas: hay 5 predefinidas. Se creo un endpoint que no esta implementado en el frontend (ya que no 
era parte de los requerimientos), se pueden agregar mas categorias enviando una request desde Postman 
o bien hacerlo desde MySQL.
- En la pestaña productos, en caso de una carga rapida de los mismos puede no llegarse a ver el spinner, 
en ese caso se puede ver desconectando el backend.

### DETALLES NO RESUELTOS
- en la opcion 'sort by' de la pestaña productos se debe clickear 2 veces en el boton 'submit' para obtener el grafico.
- en la opcion 'sort by' de la pestaña productos se debe refrescar la pagina para poder hacer una nueva consulta.

### ENDPOINTS:
`GET /products` lists all products. <br/>
`POST /products` creates a new product. Requires thisformat:
``` 
{ 
    "name": "string",
    "stock": number,
    "price": number,
    "category": number
}
```

`GET /categories` lists all categories. <br/>
`POST /categories` creates a new category. Requires thisformat:
```
{
    "name": "string"
}
```

`GET /products/sort` lists all products created in a date range, within a category, sorted by STOCK or PRICE. <br/>
Requires this query format: <br/>
```http://localhost:3001/products/sort?startDate=2015-03-08&endDate=2030-03-08&category=1&sortBy=stock```
