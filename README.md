# 🌐 Multilingual Word Translation App

A simple React application that allows users to manage and view translations for keywords across multiple languages. The app includes a Management Dashboard for editing and sorting, and a Public View for browsing translated words.

---

## 🚀 Features

- 🌍 **Supports 3 languages**: English (EN), Farsi (FA), and German (DE)
- 📥 **LocalStorage Persistence**: All changes are saved locally and persist across reloads
- 🧠 **Smart State Management**: Uses React Context API and `useEffect` for syncing state with localStorage
- 📋 **Drag & Drop Sorting**: Reorder keywords smoothly with animated feedback
- ✏️ **Edit/Add Translations**: Easily update or add new translations
- 🔍 **Filtering**: Search and filter keywords in both Dashboard and Public View
- 🎨 **Animated Language Switching**: Smooth visual transitions when changing the selected language
- ✅ **Responsive Design**: Mobile-friendly and user-focused interface

---

## 🏗️ Data Structure & Implementation Logic

Each keyword is stored as an object with a `key` and a `translations` dictionary:

```js
{
  key: "hello",
  translations: {
    fa: "سلام",
    de: "Hallo",
    en: "Hello"
  }
}

Why this structure?
🔁 Scalability: Easily supports any number of languages by adding more keys to the translations object.

🧹 Simplicity: Keeps translation data grouped logically under each keyword.

🔍 Performance: Easy access and filtering by key or translations[lang] without complex lookups.

📄 Pages Overview
🛠️ Management Dashboard
Add new keywords and translations

Edit translations for the selected language

Drag & drop to reorder keywords

Filter/search keywords

👁️ Public View
Select language from dropdown

View keywords and their translations

Filter/search keywords

📦 Installation
Clone the repo
git clone https://github.com/Lavenderer1375/translation-app

Install dependencies
npm install

Start the development server
npm run dev

```
