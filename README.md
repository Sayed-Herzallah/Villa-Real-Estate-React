# Villa Real Estate Portal: Premium Residential Property Listings

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:0f766e&height=160&section=header&text=Villa%20Real%20Estate&fontSize=42&fontColor=ffffff&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-2023-blue?logo=react&style=for-the-badge" alt="React" /> <img src="https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&style=for-the-badge" alt="TailwindCSS" /> <img src="https://img.shields.io/badge/Leaflet-Maps-green?logo=leaflet&style=for-the-badge" alt="Leaflet" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

بوابة **الفيلا العقارية** هي واجهة تفاعلية مخصصة للبحث واستعراض الفلل السكنية والمنتجعات الفاخرة، تتميز بتصميمات بصرية راقية وفلاتر تصفية متقدمة لتسهيل العثور على العقار السكني الأمثل.

This repository holds the React frontend directory and user interface for the **Villa Real Estate Directory**. Featuring detailed villa specification charts, coordinates map tracking, and smooth transitions.

---

## 🧬 User Search & Filter Flow

The frontend handles search updates and map location adjustments:

```mermaid
graph TD
    User[Visitor] -->|Toggle Sizing or Price filters| Search[Search Handler Component]
    Search -->|Trigger React State state update| List[Update Villa Cards Grid]
    List -->|Fetch GPS coordinates| LeafletMap[Leaflet Map Component]
    LeafletMap -->|Render location pins| Display[Update Client View]
```

---

## 🛠️ Technology Stack & Assets

*   **Framework**: **React 18** + **Vite**.
*   **Mapping**: **Leaflet** map integrations.
*   **Design**: **TailwindCSS** design systems.

---

## 📂 Repository Module Layout

```text
villa-real-estate-react/
├── src/
│   ├── components/      # VillaCard, MapWidget, FilterBar
│   ├── App.jsx          # Portal root view
│   └── main.jsx         # Render entry point
├── package.json         # Node metadata
└── README.md            # System documentation
```

---

## ⚡ Local Setup & Run
```bash
git clone https://github.com/Sayed-Herzallah/villa-real-estate-react.git
cd villa-real-estate-react
npm install
npm run dev
```

---

## 📄 License
Licensed under the **MIT License**.
