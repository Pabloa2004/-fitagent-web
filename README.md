# FitAgent AI

Web lista para subir a GitHub y desplegar en Vercel.

## 1) Instalar dependencias

```bash
npm install
```

## 2) Crear archivo `.env.local`

```bash
OPENAI_API_KEY=tu_api_key_aqui
```

## 3) Correr local

```bash
npm run dev
```

## 4) Subir a GitHub

Sube toda esta carpeta completa.

## 5) Publicar en Vercel

- Import Project
- Selecciona este repositorio
- Agrega variable de entorno:
  - `OPENAI_API_KEY`
- Deploy

## Notas

- La llamada a OpenAI está en `app/api/coach/route.js`
- La interfaz principal está en `app/page.js`
- Puedes cambiar el prompt del agente según tu negocio
