// app.js

/* ===== CSVから変換されたデータを直接埋め込み ===== */
const data = [
  {
    src: "0001_ノーマル_狙い_平均pt_平均pt_奇数_30G_あり",
    機種: "ノーマル",
    きゅんきゅん: "狙い",
    ときめき: "平均pt",
    ぷっちゅん: "平均pt",
    百の位G: "奇数",
    下２桁G: "30G",
    ベトラン: "あり"
  },
  {
    src: "0002_ノーマル_狙い_平均pt_平均pt_奇数_30G_なし",
    機種: "ノーマル",
    きゅんきゅん: "狙い",
    ときめき: "平均pt",
    ぷっちゅん: "平均pt",
    百の位G: "奇数",
    下２桁G: "30G",
    ベトラン: "なし"
  },
  {
    src: "0003_ノーマル_狙い_平均pt_平均pt_奇数_50G_あり",
    機種: "ノーマル",
    きゅんきゅん: "狙い",
    ときめき: "平均pt",
    ぷっちゅん: "平均pt",
    百の位G: "奇数",
    下２桁G: "50G",
    ベトラン: "あり"
  }
];

/* ===== 列名（条件）取得 ===== */
const columns = Object.keys(data[0]).filter(k => k !== "src");

/* ===== 各条件の選択肢を生成 ===== */
const controls = document.getElementById("controls");
const selected = {};

columns.forEach(col => {
  const select = document.createElement("select");

  const values = [...new Set(data.map(row => row[col]))];

  values.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });

  selected[col] = values[0]; // 初期値は先頭

  select.addEventListener("change", () => {
    selected[col] = select.value;
    render();
  });

  controls.appendChild(select);
});

/* ===== 画像表示 ===== */
const gallery = document.getElementById("gallery");

function render() {
  gallery.innerHTML = "";

  const filtered = data.filter(row => {
    return columns.every(col => row[col] === selected[col]);
  });

  filtered.forEach(row => {
    const img = document.createElement("img");
    img.src = "images/" + row.src;
    gallery.appendChild(img);
  });
}

render();
