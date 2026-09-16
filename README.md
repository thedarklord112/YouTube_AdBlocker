# 🚫 YouTube AdBlocker Extension

A lightweight and efficient Google Chrome extension designed to **block intrusive ads on YouTube**, ensuring a smooth and uninterrupted video playback experience.

<img width="1451" height="720" alt="image" src="https://github.com/user-attachments/assets/630e6e49-c222-4feb-9fe8-7d7ed7d54aaa" />

---

## 💡 How It Works

The extension works directly on network requests and page rendering within YouTube using three core mechanisms:

1. **Ad Script Blocking:** Intercepts and blocks network requests to known YouTube ad-serving domains before they can even load.
2. **CSS Injection (Element Hiding):** Visually removes sidebar banners, overlay ads, and sponsored video carousels that clutter the interface.
3. **Auto-Skip Video Ads (Fast-Forward):** If a video ad manages to pass through, the script instantly detects the ad video player, mutes the audio, accelerates the playback speed up to 16x, and automatically triggers the "Skip Ad" button within milliseconds.

---

## 🚀 How to Install and Use

Since this is an open-source extension hosted on GitHub, you need to load it into Chrome using **Developer Mode**. Follow these simple steps:

### 1. Download the Code
* Click the green **Code** button at the top of this page and select **Download ZIP**, or clone the repository directly via terminal:
  ```bash
  git clone https://github.com
  ```
* If you downloaded the `.zip` file, extract its contents into a folder of your choice on your computer.

### 2. Enable Developer Mode in Chrome
* Open Google Chrome.
* In the address bar, type `chrome://extensions/` and press **Enter**.
* In the top-right corner of the Extensions page, toggle the **Developer mode** switch to **ON**.

### 3. Load the Extension
* In the top-left corner, click the **Load unpacked** button.
* Select the folder where you extracted or cloned the project files (make sure to select the directory containing the `manifest.json` file).

### 4. You're All Set!
* Open [YouTube](https://youtube.com) and refresh the page. 
* The extension will run automatically in the background, keeping your video feed ad-free.

---

## 🛠️ Built With

* **Vanilla JavaScript:** For DOM manipulation and ad fast-forwarding logic.
* **Chrome Extensions API (Manifest V3):** Utilizing modern extension protocols for secure network interception.
* **CSS3:** For clean hiding of ad banners and placeholder layouts.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
