 import React, { useState } from "react";

export default function App() {
  const components = {
    brand: {
      label: "Marca do PC",
      options: {
        "PC Custom": 100,
        "HP Victus": 120,
        "HP OMEN": 220,
        "ASUS TUF": 180,
        "ASUS ROG": 300,
        "Lenovo Legion": 260,
        "Acer Nitro": 140,
        "MSI Gaming": 250,
        "Gigabyte Aorus": 320,
        "Alienware": 500,
        "PC da Feira": -40,
        "Setup do Primo": -20,
      },
    },

    gpu: {
      label: "Placa Gráfica",
      options: {
        "Sem GPU dedicada": 0,
        "GTX 750 Ti": 30,
        "GTX 1050 Ti": 70,
        "GTX 1060": 90,
        "GTX 1650": 120,
        "GTX 1660": 140,
        "RTX 2060": 180,
        "RTX 2070": 220,
        "RTX 2080": 300,
        "RTX 3050": 220,
        "RTX 3060": 250,
        "RTX 3070": 350,
        "RTX 3080": 550,
        "RTX 3090": 850,
        "RTX 4060": 400,
        "RTX 4070": 550,
        "RTX 4080": 900,
        "RTX 4090": 1600,
        "RX 580": 80,
        "RX 6600": 180,
        "RX 6700 XT": 300,
        "RX 6800 XT": 450,
        "RX 7900 XTX": 950,
      },
    },

    cpu: {
      label: "Processador",
      options: {
        "Intel i3": 80,
        "Intel i5": 140,
        "Intel i7": 240,
        "Intel i9": 450,
        "Ryzen 3": 90,
        "Ryzen 5": 150,
        "Ryzen 7": 250,
        "Ryzen 9": 420,
        "Threadripper": 900,
      },
    },

    ram: {
      label: "RAM",
      options: {
        "4GB": 15,
        "8GB": 25,
        "16GB": 50,
        "32GB": 90,
        "64GB": 170,
        "128GB": 320,
        "256GB": 600,
      },
    },

    storage: {
      label: "Armazenamento",
      options: {
        "128GB SSD": 15,
        "256GB SSD": 25,
        "512GB SSD": 35,
        "1TB SSD": 70,
        "2TB SSD": 120,
        "4TB SSD": 220,
        "8TB SSD": 500,
        "1TB HDD": 30,
        "2TB HDD": 50,
        "4TB HDD": 80,
        "8TB HDD": 150,
      },
    },

    motherboard: {
      label: "Motherboard",
      options: {
        "Básica": 60,
        "Média": 110,
        "Gaming": 170,
        "Topo de gama": 300,
        "Creator / Workstation": 450,
      },
    },

    psu: {
      label: "Fonte",
      options: {
        "450W": 35,
        "550W": 50,
        "650W": 70,
        "750W": 95,
        "850W": 130,
        "1000W": 200,
        "1200W": 300,
        "1600W": 450,
      },
    },

    pcCase: {
      label: "Caixa",
      options: {
        "Caixa simples": 35,
        "Caixa RGB": 70,
        "Caixa premium": 130,
        "Aquário RGB": 220,
        "Full Tower Insana": 350,
      },
    },

    cooling: {
      label: "Cooling",
      options: {
        "Cooler stock": 10,
        "Air Cooler": 40,
        "Air Cooler premium": 80,
        "Watercooler 240mm": 90,
        "Watercooler 360mm": 160,
        "Custom Loop": 500,
      },
    },

    monitor: {
      label: "Monitor",
      options: {
        "Sem monitor": 0,
        "60Hz": 80,
        "75Hz": 110,
        "144Hz": 220,
        "165Hz": 280,
        "240Hz": 450,
        "360Hz": 700,
        "4K 144Hz": 900,
      },
    },

    keyboard: {
      label: "Teclado",
      options: {
        "Sem teclado": 0,
        "Teclado básico": 15,
        "Mecânico barato": 50,
        "Mecânico RGB": 100,
        "Teclado premium": 180,
      },
    },

    mouse: {
      label: "Rato",
      options: {
        "Sem rato": 0,
        "Rato básico": 10,
        "Rato gaming": 40,
        "Rato competitivo": 90,
        "Rato premium": 150,
      },
    },

    headset: {
      label: "Headset",
      options: {
        "Sem headset": 0,
        "Headset básico": 20,
        "Headset gaming": 60,
        "Headset premium": 140,
        "Headset absurdo": 300,
      },
    },

    chair: {
      label: "Cadeira",
      options: {
        "Sem cadeira": 0,
        "Cadeira normal": 40,
        "Cadeira gaming": 150,
        "Cadeira premium": 350,
        "Trono gamer": 700,
      },
    },

    os: {
      label: "Sistema Operativo",
      options: {
        "Sem sistema": 0,
        "Windows 10": 40,
        "Windows 11": 70,
        "Linux": 0,
        "Windows pirateado do primo": -10,
      },
    },

    extras: {
      label: "Extras",
      options: {
        "Nada": 0,
        "RGB básico": 20,
        "RGB em tudo": 80,
        "Webcam": 50,
        "Microfone": 90,
        "Stream deck": 160,
        "Setup streamer completo": 400,
      },
    },
  };

  const initialState = {};
  Object.keys(components).forEach((key) => {
    initialState[key] = Object.keys(components[key].options)[0];
  });

  initialState.brand = "HP Victus";
  initialState.gpu = "RTX 3060";
  initialState.cpu = "Ryzen 5";
  initialState.ram = "16GB";
  initialState.storage = "1TB SSD";

  const [selected, setSelected] = useState(initialState);
  const [copiado, setCopiado] = useState(false);

  const total = Object.keys(components).reduce((sum, key) => {
    return sum + components[key].options[selected[key]];
  }, 0);

  const score = Math.min(Math.round((total / 6000) * 100), 100);

  let nivel = "";
  let dica = "";
  let roast = "";

  if (total < 500) {
    nivel = "Setup Batata 🥔";
    dica = "Isto sobrevive por pura teimosia.";
    roast = "O Chrome abre e o PC pede um padre.";
  } else if (total < 1200) {
    nivel = "Setup Gamer 🎮";
    dica = "Já joga bem e não parece uma torradeira.";
    roast = "Nada mau. Já não é crime contra os FPS.";
  } else if (total < 2500) {
    nivel = "Máquina de Guerra 🔥";
    dica = "Isto já mete respeito.";
    roast = "O teu setup olha para gráficos ultra e ri.";
  } else if (total < 4500) {
    nivel = "Monstro Nuclear ☢️";
    dica = "Isto já é abuso digital.";
    roast = "A NASA está a monitorizar este PC.";
  } else {
    nivel = "💀 BOMBOCLAT 💀";
    dica = "Isto não é um setup. É tecnologia alienígena.";
    roast = "O teu PC renderiza a realidade em tempo real.";
  }

  function updateComponent(key, value) {
    setSelected({
      ...selected,
      [key]: value,
    });
  }

  function randomSetup() {
    const novo = {};

    Object.keys(components).forEach((key) => {
      const options = Object.keys(components[key].options);
      const random = options[Math.floor(Math.random() * options.length)];
      novo[key] = random;
    });

    setSelected(novo);
  }

  function copiarSetup() {
    let texto = "🔥 O meu setup no SetupValue:\n\n";

    Object.keys(components).forEach((key) => {
      texto += `${components[key].label}: ${selected[key]}\n`;
    });

    texto += `\nValor estimado: €${total}`;
    texto += `\nNota: ${score}/100`;
    texto += `\nResultado: ${nivel}`;
    texto += `\n${roast}`;

    navigator.clipboard.writeText(texto);
    setCopiado(true);

    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #020617, #111827, #1e1b4b)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "#0f172a",
            padding: "30px",
            borderRadius: "28px",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            border: "1px solid #334155",
          }}
        >
          <h1 style={{ fontSize: "42px", margin: 0 }}>💻 SetupValue</h1>

          <p style={{ color: "#94a3b8" }}>
            Descobre se o teu setup é máquina ou batata 😭
          </p>

          {Object.keys(components).map((key) => (
            <SelectBox
              key={key}
              label={components[key].label}
              value={selected[key]}
              options={components[key].options}
              onChange={(value) => updateComponent(key, value)}
            />
          ))}

          <button onClick={randomSetup} style={buttonStyle("#7c3aed")}>
            🎲 Gerar setup aleatório
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#0f172a",
            padding: "30px",
            borderRadius: "28px",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            border: "1px solid #334155",
            position: "sticky",
            top: "20px",
            height: "fit-content",
          }}
        >
          <p style={{ color: "#94a3b8" }}>Valor estimado:</p>

          <h2 style={{ fontSize: "58px", margin: "5px 0" }}>€{total}</h2>

          <h2>{nivel}</h2>

          <p style={{ color: "#bbf7d0" }}>{dica}</p>

          <p style={{ color: "#facc15", fontWeight: "bold" }}>😂 {roast}</p>

          <h3>Nota do setup: {score}/100</h3>

          <div
            style={{
              backgroundColor: "#020617",
              borderRadius: "999px",
              height: "22px",
              overflow: "hidden",
              border: "1px solid #22c55e",
            }}
          >
            <div
              style={{
                width: `${score}%`,
                height: "100%",
                background: "linear-gradient(90deg, #22c55e, #facc15, #ef4444)",
                transition: "0.3s",
              }}
            />
          </div>

          <button onClick={copiarSetup} style={buttonStyle("#2563eb")}>
            {copiado ? "Copiado! 🔥" : "Copiar setup para mandar aos amigos"}
          </button>

          <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "18px" }}>
            Os preços são estimativas. Não vás vender o PC ao Zé da OLX só porque isto disse 😭
          </p>
        </div>
      </div>
    </div>
  );
}

function SelectBox({ label, value, options, onChange }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          borderRadius: "12px",
          border: "none",
          fontSize: "16px",
        }}
      >
        {Object.keys(options).map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

function buttonStyle(color) {
  return {
    width: "100%",
    marginTop: "18px",
    padding: "15px",
    borderRadius: "14px",
    border: "none",
    backgroundColor: color,
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };
}