# reactNative-s-copy

**reactNative-s-copy** es una aplicación de música inspirada en Spotify, creada utilizando React Native, Firebase y otras tecnologías modernas. Permite a los usuarios iniciar sesión a través de Firebase Authentication, buscar canciones, reproducir música en pantalla completa, y agregar nuevas canciones a su lista de reproducción.

## Tecnologías utilizadas

- **React Native**: Framework para crear aplicaciones móviles nativas con JavaScript.
- **Firebase**: Autenticación de usuarios, base de datos y almacenamiento en la nube.
- **React Navigation**: Para la navegación entre pantallas.
- **React Native Elements**: Para componentes de interfaz de usuario prediseñados.
- **Redux** (si aplica): Para el manejo del estado global de la aplicación.

## Características

- **Autenticación con Firebase**: Inicia sesión con una cuenta de Google (u otros métodos si se configuran en Firebase).
- **Pantalla de inicio**: Visualiza tarjetas con las canciones disponibles para reproducir.
- **Reproductor en pantalla completa**: Controla la música mientras se reproduce en una vista a pantalla completa.
- **Buscador de canciones**: Busca canciones dentro de la aplicación.
- **Agregar nueva canción**: Funcionalidad para agregar canciones a tu lista de reproducción.

## Pantallas

1. **Pantalla de Login**  
   - Los usuarios pueden iniciar sesión con su cuenta de Google a través de Firebase Authentication.  
   - ![Screenshot_20241119-113133_Expo Go](https://github.com/user-attachments/assets/affe1c10-4698-463f-9378-007b6c598c16)




2. **Pantalla de Home**  
   - Muestra tarjetas con las canciones disponibles.  
   - ![Screenshot_20241119-113211_Expo Go](https://github.com/user-attachments/assets/d0a1bf58-0f6b-4514-bdb3-0c2b9c19b56f)


3. **Pantalla del Reproductor**  
   - Reproduce la canción seleccionada en pantalla completa, mostrando controles como play/pause, skip, etc.  
   - ![Screenshot_20241119-113222_Expo Go](https://github.com/user-attachments/assets/6807e04f-2ba9-457b-9ce9-9b6c883922fa)


4. **Pantalla de Buscador**  
   - Permite buscar canciones por nombre o artista.  
   - ![Screenshot_20241119-113238_Expo Go](https://github.com/user-attachments/assets/afaa9ade-3617-4db4-abca-b3d9854be9bf)


5. **Pantalla de Agregar Canción**  
   - Los usuarios pueden agregar nuevas canciones a su biblioteca.  
   - ![Screenshot_20241119-113246_Expo Go](https://github.com/user-attachments/assets/c8eec1eb-0acc-441a-a4d2-02a8436d513d)


## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/reactNative-s-copy.git
2. Navega al directorio del proyecto:
   ```bash
   cd reactNative-s-copy
3. Instala las dependencias:
   ```bash
   npm install
4. Ejecuta la aplicación:
  ```bash
   npm run start
