# Aditya | Personal Portfolio

<p align="center">
  **Developer · Content Creator · Creative Technologist**
  <br />
  A personal portfolio showcasing my technical skills, selected projects, and creative work.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/C%23-68217A?style=flat-square&logo=csharp&logoColor=white" />
  <img src="https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white" />
</p>

---

## Overview

This repository contains my personal portfolio website, designed to present my work, technical interests, development skills, and content creation journey in one place.

The website follows an Apple-inspired visual direction, emphasizing simplicity, clarity, typography, responsive layouts, and a refined user experience.

## Key Features

- **Minimal Interface:** Clean, Apple-inspired visual design.
- **Responsive Layout:** Optimized for desktop, tablet, and mobile devices.
- **About Section:** Professional introduction and background.
- **Technical Skills:** Development technologies and creative software.
- **Project Showcase:** Selected personal and development projects.
- **Creator Analytics:** Audience statistics section with backend integration scaffold.
- **Social Integration:** Direct links to professional and creator profiles.
- **Interactive Elements:** Subtle animations, hover effects, and icon-based navigation.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | C#, ASP.NET Core |
| Game Development | Unity |
| Version Control | Git, GitHub |
| Video Editing | Adobe Premiere Pro |
| Image Editing | Adobe Photoshop |
| 3D Design | Blender |
| Icon Libraries | Lucide, Font Awesome |

## Featured Projects

### AadiReads
A web-based reading platform focused on providing an accessible reading experience.

Repository: [aadi1irl/aadireads](https://github.com/aadi1irl/aadireads)

### Game Development
Experimental game development projects exploring interactive environments, gameplay systems, and mechanics using Unity.

### Minecraft Development
Custom Minecraft Bedrock projects, including gameplay addons, resource packs, and experimental mechanics.

## Creator Presence

My content creation work primarily focuses on Minecraft, gaming, and digital creativity.

| Platform | Profile |
|---|---|
| YouTube | [AadiiCraft](https://youtube.com/@AadiiCraft) |
| Facebook | [Aadi Craft](https://facebook.com/AadiCraft) |
| GitHub | [aadi1irl](https://github.com/aadi1irl) |

## Project Structure

```text
portfolio/
│
├── index.html
├── style.css
├── script.js
│
└── backend/
    ├── Program.cs
    └── AadiiCraft.Api.csproj
```

## Getting Started

### Prerequisites

- Visual Studio Code
- A modern web browser
- .NET SDK (for the backend)
- Live Server extension (recommended for frontend development)

### Installation

Clone the repository:

```bash
git clone https://github.com/aadi1irl/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Open the project in Visual Studio Code:

```bash
code .
```

Run the frontend using the Live Server extension.

### Running the Backend

Navigate to the backend directory:

```bash
cd backend
```

Start the ASP.NET Core application:

```bash
dotnet run
```

Configure the frontend API endpoint in `script.js` to point to your deployed backend.

## Analytics Integration

The portfolio includes a creator statistics interface and an ASP.NET Core API scaffold.

The planned vidIQ integration will provide access to supported channel analytics through an authenticated MCP connection.

**Current implementation status:** The statistics interface currently uses saved audience figures. Live vidIQ data requires completing authentication, MCP communication, and response mapping.

API credentials should always be stored securely on the backend and never exposed in
