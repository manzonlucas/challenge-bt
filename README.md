# Challenge-BT
Proyecto desarrollado por Lucas Matías Manzón para aplicar a un puesto en un proyecto freelance frontend.
Utilizando las siguientes tecnologias: **React**, **NodeJS** (NestJS), **MySQL** con (TypeORM), y **TailwindCSS**.
Desarrollado en 5 días, en momentos libres luego del trabajo.

### PRE REQUISITOS:
- Tener instalado MySQL Server y agregado al PATH.
[https://dev.mysql.com/downloads/mysql/]
- Tener instalado Bash Shell CLI.

### SET UP:
Modificar el codigo del siguiente archivo, seteando las credenciales (username y password) correspondientes al usuario de MySQL en:
`backend/src/app.module.ts` en las lineas 16 y 17. Ejemplo:

```
imports: [
    ProductsModule,
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', <------- modificar usuario
      password: 'lucas', <------ modificar contraseña
      database: 'challenge_bt',
      entities: [Product, Category],
      synchronize: true,
    }),
  ]
})
```

### SET UP BACKEND Y DB:
#### INSTALAR DEPENDENCIAS, CREAR DB Y APLICAR SEEDS:
- Dentro de la CLI situarse en el directorio de backend: <br/>
`cd backend`
- Instalar dependencias: <br/>
`npm install`
- Aplicar seeds: <br/>
`chmod +x seedData.sh` <br/>
`./seedData.sh` => introducir las credenciales cuando se las requieran

#### CORRER BACKEND:
- `npm run start:dev`

### SET UP FRONTEND:
- Volver a la carpeta root: <br/>
`cd ..`
- Situarse en /frontend: <br/>
`cd frontend`
- Instalar dependencias: <br/>
`npm install` <br/>
- Correr app: <br/>
`npm start`

### NAVEGAR
- Abrir navegador de preferencia.
- dirigirse a: <br/>
`http://localhost:3000/`

<hr/>

### ENDPOINTS:
`GET /products` listar todos los productos. <br/>
`POST /products` crea un nuevo producto. Requiere enviar este formato:
``` 
{ 
    "name": "string",
    "stock": number,
    "price": number,
    "category": number
}
```

`GET /categories` listar todas las categorias. <br/>
`POST /categories` crear una nueva categoria. Requiere enviar este formato:
```
{
    "name": "string"
}
```

`GET /products/sort` lista todos los productos creados dentro de un RANGO DE FECHAS, dentro de una CATEGORIA, ordenados por STOCK o PRECIO. <br/>
Requiere una query con este formato: <br/>
```http://localhost:3001/products/sort?startDate=2015-03-08&endDate=2030-03-08&category=1&sortBy=stock```

<hr/>

### OBSERVACIONES
- Caracteristicas: hay 5 predefinidas. Se creo un endpoint que no esta implementado en el frontend (ya que no 
era parte de los requerimientos), se pueden agregar mas categorias enviando una request desde Postman 
o bien hacerlo desde MySQL.
- En la pestaña productos, en caso de una carga rapida de los mismos puede no llegarse a ver el spinner, 
en ese caso se puede ver desconectando el backend.

### DETALLES NO RESUELTOS
- en la opcion 'sort by' de la pestaña productos se debe clickear 2 veces en el boton 'submit' para obtener el grafico.
- en la opcion 'sort by' de la pestaña productos se debe refrescar la pagina para poder hacer una nueva consulta.
