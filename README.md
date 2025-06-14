# Retro Pixelated Fluid Simulation with SplashCursor

A Next.js project featuring an interactive WebGL fluid simulation component with a retro, pixelated aesthetic. Built with React, TypeScript, and Tailwind CSS using the shadcn/ui project structure.

## Features

- **Retro Pixelated WebGL Fluid Simulation**: Low-resolution, chunky pixel aesthetic
- **Interactive Mouse/Touch Controls**: Create blocky splashes and fluid effects
- **Authentic 8-bit Style**: Nearest-neighbor filtering for crisp pixel edges
- **Vibrant Retro Colors**: High-saturation colors for that classic arcade feel
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Customizable Parameters**: Extensive props for tweaking simulation behavior
- **shadcn/ui Integration**: Built following shadcn/ui conventions and structure

## Demo

Move your mouse around the screen to create chunky, retro pixelated fluid effects. Click and drag to create larger blocky splashes with vibrant colors!

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/breschio/vizcode.git
cd vizcode
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

This project follows the shadcn/ui conventions:

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # UI components (shadcn/ui structure)
│   │   └── splash-cursor.tsx  # Main fluid simulation component
│   └── demo.tsx        # Demo wrapper component
└── lib/
    └── utils.ts        # Utility functions (shadcn/ui)
```

## SplashCursor Component

### Usage

```tsx
import { SplashCursor } from "@/components/ui/splash-cursor";

export function MyComponent() {
  return (
    <div className="relative">
      <SplashCursor />
      {/* Your content here */}
    </div>
  );
}
```

### Props

The `SplashCursor` component accepts the following customization props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `SIM_RESOLUTION` | number | 32 | Simulation resolution (low for pixelated effect) |
| `DYE_RESOLUTION` | number | 64 | Dye resolution (low for chunky pixels) |
| `DENSITY_DISSIPATION` | number | 2.0 | How quickly density dissipates (slower for persistence) |
| `VELOCITY_DISSIPATION` | number | 1.5 | How quickly velocity dissipates (slower) |
| `PRESSURE` | number | 0.05 | Pressure strength (lower for chunkier movement) |
| `CURL` | number | 2 | Vorticity strength (reduced for less smooth vortices) |
| `SPLAT_RADIUS` | number | 0.3 | Size of mouse interaction area (larger for bigger chunks) |
| `SPLAT_FORCE` | number | 4000 | Force applied by mouse interactions (reduced) |
| `SHADING` | boolean | false | Enable/disable visual shading (off for flat retro look) |
| `COLOR_UPDATE_SPEED` | number | 5 | How fast colors change (slower for retro feel) |
| `TRANSPARENT` | boolean | true | Background transparency |

### Example with Custom Props

```tsx
<SplashCursor 
  SPLAT_FORCE={8000}
  CURL={5}
  COLOR_UPDATE_SPEED={15}
  DENSITY_DISSIPATION={2.0}
/>
```

### Retro Style Features

The component is configured by default for a retro, pixelated aesthetic:

- **Low Resolution**: 32x32 simulation grid and 64x64 dye resolution for chunky pixels
- **Nearest Neighbor Filtering**: GL_NEAREST filtering prevents smooth interpolation
- **Vibrant Colors**: High saturation HSV colors for that classic arcade feel
- **No Antialiasing**: Crisp pixel edges without smoothing
- **Flat Shading**: Disabled 3D lighting effects for a flat, 8-bit look
- **Slower Dissipation**: Fluid persists longer for more visible pixel chunks

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library and project structure
- **WebGL** - Hardware-accelerated graphics
- **GLSL** - Shader language for fluid simulation

## How It Works

The fluid simulation uses:
1. **Navier-Stokes Equations** - Physics-based fluid dynamics
2. **WebGL Shaders** - GPU-accelerated computation
3. **Framebuffer Objects** - For multi-pass rendering
4. **Advection-Projection Method** - Numerical integration technique

## Browser Compatibility

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers with WebGL support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by fluid simulation techniques from computer graphics research
- WebGL implementation based on modern GPU computing practices
- shadcn/ui for the excellent component architecture
