 import React, { useState } from "react";

export default function App() {
  const brandPrices = {
    "HP Victus": 120,
    "HP OMEN": 220,
    "ASUS ROG": 300,
    "ASUS TUF": 180,
    "Lenovo Legion": 260,
    "Acer Nitro": 140,
    "MSI Gaming": 250,
    "Alienware": 500,
    "Gigabyte Aorus": 320,
    "PC Custom": 100,
    "PC da Feira": -40,
    "Setup do Primo": -20,
  };

  const gpuPrices = {
    "GTX 750 Ti": 30,
    "GTX 1050 Ti": 70,
    "GTX 1660": 140,
    "RTX 2060": 180,
    "RTX 3060": 250,
    "RTX 3070": 350,
    "RTX 4060": 400,
    "RTX 4070": 550,
    "RTX 4080": 900,
    "RTX 4090": 1600,
  };

  const cpuPrices = {
    "Intel i3": 80,
    "Intel i5": 140,
    "Intel i7": 240,
    "Intel i9": 450,
    "Ryzen 3": 90,
    "Ryzen 5": 150,
    "Ryzen 7": 250,
    "Ryzen 9": 420,
    "Threadripper": 900,
  };

  const ramPrices = {
    "4GB": 15,
    "8GB": 25,
    "16GB": 50,
    "32GB": 90,
    "64GB": 170,
    "128GB": 320,
  };

  const storagePrices = {
    "128GB SSD": 15,
    "256GB SSD": 25,
    "512GB SSD": 35,
    "1TB SSD": 70,
    "2TB SSD": 120,
    "4TB SSD": 220,
    "1TB HDD": 30,
    "2TB HDD": 50,
    "4TB HDD": 80,
  };

  const motherboardPrices = {
    "Básica": 60,
    "Média": 110,
    "Gaming": 170,
    "Topo de gama": 300,
  };

  const psuPrices = {
    "450W": 35,
    "550W": 50,
    "650W": 70,
    "750W": 95,
    "850W": 130,
    "1000W": 200,
    "1200W": 300,
  };

  const casePrices = {
    "Caixa simples": 35,
    "Caixa RGB": 70,
    "Caixa premium": 130,
    "Aquário RGB": 220,
  };

  const coolingPrices = {
    "Cooler stock": 10,
    "Air Cooler": 40,
    "Watercooler 240mm": 90,
    "Watercooler 360mm": 160,
  };

  const monitorPrices = {
    "Sem monitor": 0,
    "60Hz": 80,
    "144Hz": 220,
    "240Hz": 450,
    "360Hz": 700,
  };

  const [brand, setBrand] = useState("HP Victus");
  const [gpu, setGpu] = useState("RTX 3060");
  const [cpu, setCpu] = useState("Ryzen 5");
  const [ram, setRam] = useState("16GB");
  const [storage, setStorage] = useState("1TB SSD");
  const [motherboard, setMotherboard] = useState("Gaming");
  const [psu, setPsu] = useState("750W");
  const [pcCase, setPcCase] = useState("Caixa RGB");
  const [cooling, setCooling] = useState("Watercooler 240mm");
  const [monitor, setMonitor] = useState("144Hz");
  const [copiado, setCopiado] = useState(false);

  const total =
    brandPrices[brand] +
    gpuPrices[gpu] +
    cpuPrices[cpu] +
    ramPrices[ram] +
    storagePrices[storage] +
    motherboardPrices[motherboard] +
    psuPrices[psu] +
    casePrices[pcCase] +
    coolingPrices[cooling] +
    monitorPrices[monitor];

  let nivel = "";
  let dica = "";
  let roast = "";
  let percent = Math.min((total / 3800) * 100, 100);

  if (total < 400) {
    nivel = "Setup Batata 🥔";
    dica = "Isto luta pela sobrevivência.";
    roast = "O Chrome abre e o PC entra em coma.";
  } else if (total < 900) {
    nivel = "Setup Gamer 🎮";
    dica = "Já joga bem sem explodir.";
    roast = "Fortnite já não parece PowerPoint.";
  } else if (total < 1800) {
    nivel = "Máquina de Guerra 🔥";
    dica = "Isto já mete medo.";
    roast = "O teu setup dá bullying aos gráficos ultra.";
  } else if (total < 3000) {
    nivel = "Monstro Nuclear ☢️";
    dica = "Isto já é criminoso.";
    roast = "A NASA está a monitorizar este PC.";
  } else {
    nivel = "💀 BOMBOCLAT 💀";
    dica = "Isto não é um setup. É tecnologia alienígena.";
    roast = "O teu PC renderiza a realidade em tempo real.";
  }

  function copiarSetup() {
    const texto = `O meu setup no SetupValue:
Marca: ${brand}
GPU: ${gpu}
CPU: ${cpu}
RAM: ${ram}
Armazenamento: ${storage}
Motherboard: ${motherboard}
Fonte: ${psu}
Caixa: ${pcCase}
Cooling: ${cooling}
Monitor: ${monitor}

Valor estimado: €${total}
Resultado: ${nivel}
${roast}`;

    navigator.clipboard.writeText(texto);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #020617, #111827, #1e1b4b)",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#0f172a",
          padding: "30px",
          borderRadius: "28px",
          width: "520px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
          border: "1px solid #334155",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "38px", margin: 0 }}>
          💻 SetupValue
        </h1>

        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          Descobre se o teu PC é máquina ou batata 😭
        </p>

        <SelectBox label="Marca do PC" value={brand} setValue={setBrand} options={brandPrices} />
        <SelectBox label="GPU" value={gpu} setValue={setGpu} options={gpuPrices} />
        <SelectBox label="CPU" value={cpu} setValue={setCpu} options={cpuPrices} />
        <SelectBox label="RAM" value={ram} setValue={setRam} options={ramPrices} />
        <SelectBox label="Armazenamento" value={storage} setValue={setStorage} options={storagePrices} />
        <SelectBox label="Motherboard" value={motherboard} setValue={setMotherboard} options={motherboardPrices} />
        <SelectBox label="Fonte" value={psu} setValue={setPsu} options={psuPrices} />
        <SelectBox label="Caixa" value={pcCase} setValue={setPcCase} options={casePrices} />
        <SelectBox label="Cooling" value={cooling} setValue={setCooling} options={coolingPrices} />
        <SelectBox label="Monitor" value={monitor} setValue={setMonitor} options={monitorPrices} />

        <div
          style={{
            marginTop: "25px",
            backgroundColor: "#14532d",
            padding: "22px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>Valor estimado:</p>

          <h2 style={{ fontSize: "50px", margin: "10px 0" }}>
            €{total}
          </h2>

          <h2>{nivel}</h2>

          <div
            style={{
              backgroundColor: "#052e16",
              borderRadius: "999px",
              height: "18px",
              overflow: "hidden",
              marginTop: "15px",
              border: "1px solid #22c55e",
            }}
          >
            <div
              style={{
                width: `${percent}%`,
                height: "100%",
                background: "linear-gradient(90deg, #22c55e, #facc15, #ef4444)",
                transition: "0.3s",
              }}
            />
          </div>

          <p style={{ color: "#bbf7d0", marginTop: "15px" }}>
            {dica}
          </p>

          <p
            style={{
              color: "#facc15",
              marginTop: "12px",
              fontWeight: "bold",
            }}
          >
            😂 {roast}
          </p>

          <button
            onClick={copiarSetup}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "14px",
              borderRadius: "14px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {copiado ? "Copiado! 🔥" : "Copiar setup para mandar aos amigos"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectBox({ label, value, setValue, options }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
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