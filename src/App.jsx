import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]); // fixed: should be an array

  const addColor = () => {
    const trimmed = color.trim();
    if (trimmed && /^#([0-9A-F]{3}){1,2}$/i.test(trimmed)) {
      setColors([...colors, trimmed]);
      setColor('');
    }
  };

  const removeColor = (hexToRemove) => {
    setColors(colors.filter((hex) => hex !== hexToRemove));
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-6">🎨 Color Palette Generator</h1>

      <div className="flex mb-6">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addColor()}
          placeholder="#f193ac"
          className="flex-1 border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={addColor}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mx-3 rounded-lg font-semibold transition"
        >
          Add Color
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((hex, index) => (
          <button
            key={index}
            className="w-24 h-24 rounded-lg border border-gray-300 shadow"
            style={{ backgroundColor: hex }}
            title={hex}
            onClick={() => removeColor(hex)}
          >
            <span className="text-white font-semibold">{hex}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;