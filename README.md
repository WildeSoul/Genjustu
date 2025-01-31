# Genjustu - A Music Player Application

## Description
**Genjustu** is a modern music player application built using the following technologies:
- **React**: For UI development
- **TypeScript**: For type checking and improved development experience
- **Tailwind CSS**: For responsive and elegant design
- **ESLint & Prettier**: For code linting and formatting

---

## Prerequisites
Ensure you have the following dependencies installed before running the application:

```bash
npm install react-icons --save
npm install react-router-dom
```

---
# notice
after the latest update of spotify the api tokens of spotify respond with 404 error so it not gonna play any song 
create a database and use this as your front-end 
<for all the creators who are just stated react ptoject>
connect your database as a server and call it using api call in front-end 
---

## Project Structure
The structure of the **Genjustu** music player is as follows:

```
MusicPlayer
├── TrackInfo         # Displays track name, artist, etc.
├── ControlPanel
│   ├── PlayPauseButton
│   ├── NextTrackButton
│   ├── PreviousTrackButton
│   ├── VolumeSlider
│   └── ProgressBar
└── Playlist          # (Optional, for managing multiple tracks)
```

---

## Spotify API Configuration
To enable Spotify integration, follow these steps:
1. Create a Spotify API key from your Spotify developer account.
2. Place your Spotify API key in the `spotify.js` file located in `/genjustu/src/`. Update **line 2** of the file to include your API key.
   
   ```javascript
   const spotifyAPIKey = 'YOUR_SPOTIFY_API_KEY';
   ```
   
   Without this step, Spotify features will not function.

---

## Usage
1. Clone this repository.
2. Install the dependencies:
   ```bash
   npm install   # (Most, probaply no need every thing is already provided)
   ```
3. Start the development server:
   ```bash
   npm start
   serev -s build
   ```
4. Open your browser and navigate to `http://localhost:3000` to use the Genjustu music player.

---

## Features
- **Track Information Display**: View track name, artist, and album.
- **Control Panel**:
  - Play/Pause functionality
  - Next and Previous track navigation
  - Adjustable Volume Slider
  - Progress Bar to track playback time
- **Playlist Management** (Optional): Navigate between multiple tracks effortlessly.

---

## Contributing
Contributions are Notwelcome! Feel free to report an issue.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
Special thanks to:
- The React, TypeScript, and Tailwind CSS communities
- Spotify API for powering the music playback experience
