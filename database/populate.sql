CREATE DATABASE IF NOT EXISTS delilah;
USE delilah;

create table if not exists Usuarios (
	usuario VARCHAR(50) NOT NULL unique,
    nombre_completo VARCHAR(50) NOT NULL,
    correo VARCHAR(50),
    telefono int NOT NULL,
	direccion VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    administrador BOOL,
    primary key(usuario)
);

create table if not exists Productos (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL unique,
	imagen VARCHAR(50),
    precio int,
    primary key(id)
);

create table if not exists Ordenes (
	numero int NOT NULL AUTO_INCREMENT,
	estado ENUM('Confirmado', 'En preparación', 'En camino', 'Entregado'),
    hora int,
    descripcion VARCHAR(100),
    pago int,
    usuario VARCHAR(50),
    primary key(numero),
    foreign key(usuario) REFERENCES Usuarios(usuario)
);

create table if not exists ProductosOrdenes (
	numero int,
    id int,
    foreign key(numero) references Ordenes(numero),
    foreign key(id) references Productos(id),
    unique(numero,id)
);

insert into delilah.Usuarios (usuario,nombre_completo,correo,telefono,direccion, contrasena, administrador)
values ('admin','Administrador','admin@mail.com',111111,'direccion del admin','123456',true);

select * from delilah.Usuarios;
