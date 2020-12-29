CREATE DATABASE IF NOT EXISTS delilah;
USE delilah;

create table if not exists Usuarios (
	usuario VARCHAR(50) NOT NULL unique,
    nombre_completo VARCHAR(50) NOT NULL,
    correo VARCHAR(50),
    telefono BIGINT NOT NULL,
	direccion VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    administrador BOOL NOT NULL,
    primary key(usuario)
);

create table if not exists Productos (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL unique,
	imagen TEXT,
    precio int NOT NULL,
    primary key(id)
);

create table if not exists Ordenes (
	numero int NOT NULL AUTO_INCREMENT,
	estado ENUM('Confirmado', 'En preparacion', 'En camino', 'Entregado'),
    hora BIGINT,
    descripcion VARCHAR(100),
    pago BIGINT,
    usuario VARCHAR(50),
    primary key(numero),
    foreign key(usuario) REFERENCES Usuarios(usuario)
);

create table if not exists ProductosOrdenes (
	numero int,
    id int,
    cantidad int,
    foreign key(numero) references Ordenes(numero) ON DELETE CASCADE,
    foreign key(id) references Productos(id),
    unique(numero,id)
);

#Insertando usuario administrador
insert into delilah.Usuarios (usuario,nombre_completo,correo,telefono,direccion, contrasena, administrador) values ('admin','Administrador','admin@mail.com',111111,'direccion del admin','e10adc3949ba59abbe56e057f20f883e',true);

#Insertando productos
insert into delilah.Productos (nombre,imagen,precio) values ('Hamburguesa', 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg', 25000);
insert into delilah.Productos (nombre,imagen,precio) values ('Pizza de Peperoni', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg', 30000);
insert into delilah.Productos (nombre,imagen,precio) values ('Hot dog Sencillo', 'https://placeralplato.com/files/2015/11/Pan-para-hot-dogs-640x480.jpg?width=1200&enable=upscale', 15000);
