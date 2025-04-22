# 📱 TasksApp

TasksApp is a React Native application developed mainly using **Xcode** with seamless Metro bundler integration.  
It features modern theming, form handling, i18n, Firebase auth, and uses Redux + React Query for state and server sync.

---

## 🚀 Getting Started

> **Make sure your environment is set up:**  
> Follow the official [React Native environment setup guide](https://reactnative.dev/docs/environment-setup).

### ⚠️ Dependency Note

If you encounter installation issues with `npm install`, run the following command instead to avoid peer dependency conflicts:

```bash
npm install --legacy-peer-deps
```

This ensures all dependencies install correctly, especially with UI libraries like RNE and React Native modules that may have version mismatches.

### ✅ Run the App

#### iOS (Preferred for development)

- Run via Xcode for the best experience (Metro starts automatically).
- Or use terminal:

```bash
npm run ios
```

#### Android

```bash
npm run android
```

#### Start Metro Manually (optional)

```bash
npm start
```

---

## 📦 Dependencies

### 🧱 Core Libraries

- **react** `19.0.0`
- **react-native** `0.79.1`

### 🧭 Navigation

- `@react-navigation/native`
- `@react-navigation/native-stack`

### 🗃 State Management

- `@reduxjs/toolkit`
- `react-redux`
- `redux-persist`

### 🎨 UI / Theming

- `react-native-paper`
- `@rneui/base`, `@rneui/themed`
- `react-native-elements`

### 🧠 Form + Validation

- `react-hook-form`
- `zod`

### 🌍 i18n

- `react-i18next`
- `i18next`, `i18next-http-backend`, `i18next-browser-languagedetector`

### 🔥 Firebase

- `@react-native-firebase/app`
- `@react-native-firebase/auth`

### 🔄 Data Fetching

- `@tanstack/react-query`
- `axios`

### 💾 Storage

- `@react-native-async-storage/async-storage`

---

## 📝 Additional Features

- 💡 **Dark mode** support using Redux-controlled theme context.
- 🌐 **i18n** language switching.
- 🔒 **Authentication** powered by Firebase.
- 🎨 Modern UI components from Paper, RNE, and Elements.
- 💬 Toast messaging with `react-native-toast-message`.

---

## 🛠 File Structure

```
src/
├── api/
├── components/
├── screens/
├── store/
├── theme/
├── i18n/
├── navigation/
```

---

## 🧪 Development Notes

- This app was developed primarily using **Xcode**, where Metro runs automatically.
- Metro does not need to be started separately when using Xcode for iOS builds.
- Dependency installation may require the `--legacy-peer-deps` flag due to known peer conflict issues.

---

## 📚 Learn More

- [React Native Docs](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)
- [Firebase](https://firebase.google.com/)
