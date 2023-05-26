

# Ferretec-Ionic

Ferretec-Ionic es una aplicación móvil desarrollada con Ionic, que tiene como objetivo ofrecer una plataforma para la gestión de inventario y ventas de una ferretería.

## Requerimientos

Antes de ejecutar el proyecto, es necesario tener instalado:

- [Node.js](https://nodejs.org/es/)
- [Ionic CLI](https://ionicframework.com/docs/intro/cli)
- [Angular CLI](https://angular.io/guide/setup-local)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Google Cloud SDK](https://cloud.google.com/sdk) (solo si se desea utilizar la autenticación de Google)

## Ejecución

1. Clonar el repositorio

```
git clone https://github.com/ChristianSorianoS/ferretec-ionic.git
```

2. Instalar las dependencias

```
cd ferretec-ionic
npm install
```

3. Ejecutar la aplicación en el navegador

```
ionic serve
```

4. Construir una versión para Android

```
ionic cordova platform add android
ionic cordova build android --prod --release
```

5. Construir una versión para iOS

```
ionic cordova platform add ios
ionic cordova build ios --prod --release
```
