import React from 'react'
// import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = `

## 🗓️ **Tokyo 7-Day Itinerary**
### **Day 1: Arrival & Shibuya Exploration**
* **Arrival at Tokyo (Narita/Haneda)**
* Check in to hotel (recommend Shinjuku or Shibuya area)
* Visit **Shibuya Crossing**, the world’s busiest pedestrian crossing
* Explore **Shibuya Scramble Square** (great views from the Shibuya Sky observatory)
* Dinner: Try sushi or izakaya in Shibuya

---

### **Day 2: Traditional Tokyo – Asakusa & Ueno**

* Visit **Senso-ji Temple** (Tokyo’s oldest temple)
* Walk along **Nakamise Shopping Street** (traditional snacks and souvenirs)
* Explore **Ueno Park**, **Ueno Zoo**, or **Tokyo National Museum**
* Optional: Visit **Ameya-Yokocho** for street food and shopping
* Dinner in Ueno area

---

### **Day 3: Harajuku, Omotesando & Meiji Shrine**

* Morning walk through **Meiji Shrine** (peaceful forest shrine)
* Explore **Takeshita Street** in Harajuku (fashion, crepes, kawaii culture)
* Afternoon: Stroll along **Omotesando** (Tokyo’s "Champs-Élysées")
* Visit **teamLab Planets** in the evening (digital art museum, reservation recommended)
* Dinner in Odaiba or Harajuku

---

### **Day 4: Shinjuku Adventure**

* Visit **Tokyo Metropolitan Government Building** (free observatory)
* Explore **Shinjuku Gyoen National Garden**
* Lunch at **Omoide Yokocho** or **Golden Gai**
* Afternoon: Explore department stores like **Lumine**, **Isetan**, **Bic Camera**
* Evening: **Robot Restaurant** or **Karaoke** experience
* Late-night ramen at **Ichiran**

---

### **Day 5: Akihabara & Ginza**

* Explore **Akihabara** (anime, manga, electronics, arcades)
* Optional: Visit a **maid café** or browse **Mandarake**
* Afternoon in **Ginza** (luxury shopping, art galleries, Kabukiza Theater)
* Try **sushi** at **Sushi Kyubey** or **Midori Sushi** in Ginza

---

### **Day 6: Day Trip Options**

Choose **one** of the following:

* **Nikko** (shrines, waterfalls, mountains)
* **Kamakura** (Great Buddha, temples, beach town feel)
* **Hakone** (hot springs, Mt. Fuji view, Hakone Open-Air Museum)
* **Yokohama** (Cup Noodles Museum, Chinatown, bay area)

> Tip: Use **JR Pass** or **Tokyo Wide Pass** if applicable

---

### **Day 7: Free Time & Departure**

* Morning: Final shopping at **Don Quijote**, **Uniqlo**, or local stores
* Visit **Tsukiji Outer Market** for seafood breakfast
* Pack up and check out
* Head to airport via **Narita Express** or **Limousine Bus**

---

## 🧳 Tips:

* Buy a **PASMO** or **Suica** card for easy train travel
* Carry **cash**, as some places don’t take cards
* Consider **pocket Wi-Fi** or a Japanese SIM card
* Book **Ghibli Museum** or **teamLab Planets** in advance



`

const App = () => (
    <Markdown>{markdown}</Markdown>
);
export default App;