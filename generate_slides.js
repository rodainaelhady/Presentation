import PptxGenJS from "pptxgenjs";
import { execSync } from "child_process";

const pptxgen = typeof PptxGenJS === "function" ? PptxGenJS : PptxGenJS.default;

const COLORS = {
  bg: "0F1123",
  cardBg: "1A1D35",
  primaryAccent: "7C3AED",     // purple
  secondaryAccent: "06B6D4",   // cyan
  tertiary: "10B981",          // green
  warning: "F59E0B",           // amber
  error: "EF4444",             // red
  purpleLight: "A855F7",       // purple light
  textPrimary: "FFFFFF",
  textSecondary: "94A3B8",
  footerBg: "1E2235",
  footerText: "475569"
};

const SHADOW = {
  type: "outer",
  color: "000000",
  blur: 8,
  offset: 2,
  angle: 45,
  opacity: 0.3
};

const pres = new pptxgen();
pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
pres.layout = "CUSTOM";

// Helper to draw common decorations (Background, top accent bar, and footer bar)
function addStandardDecorations(slide, slideNum) {
  // Slide transition
  slide.transition = { type: "fade" };
  
  // Background
  slide.background = { fill: COLORS.bg };
  
  // Top accent bars
  slide.addShape("rect", { x: 0, y: 0, w: 6.5, h: 0.06, fill: { color: COLORS.primaryAccent } });
  slide.addShape("rect", { x: 6.5, y: 0, w: 3.5, h: 0.06, fill: { color: COLORS.secondaryAccent } });
  
  // Footer bar
  slide.addShape("rect", { x: 0, y: 5.27, w: 10, h: 0.35, fill: { color: COLORS.footerBg } });
  
  // Footer left text
  slide.addText("QuantAI-Guard  |  AI Security Evaluation Platform", {
    x: 0.4,
    y: 5.3,
    w: 5.0,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 10,
    color: COLORS.footerText,
    valign: "middle",
    margin: 0
  });
  
  // Footer right text
  slide.addText(`Slide ${slideNum} / 11`, {
    x: 8.0,
    y: 5.3,
    w: 1.6,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 10,
    color: COLORS.footerText,
    align: "right",
    valign: "middle",
    margin: 0
  });
}

// Helper to add standard header and subtitle
function addSlideHeader(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.4,
    y: 0.15,
    w: 9.2,
    h: 0.7,
    fontFace: "Calibri",
    fontSize: 38,
    bold: true,
    color: "FFFFFF",
    valign: "middle",
    margin: 0
  });
  
  slide.addText(subtitle, {
    x: 0.4,
    y: 0.82,
    w: 9.2,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 14,
    italic: true,
    color: COLORS.secondaryAccent,
    valign: "top",
    margin: 0
  });
}

// Helper to draw standard cards
function drawCard(slide, x, y, w, h, accentColor) {
  // Draw rounded card body
  slide.addShape("roundRect", {
    x: x,
    y: y,
    w: w,
    h: h,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBg },
    rectRadius: 0.08,
    shadow: SHADOW
  });
  
  // Draw top accent bar
  if (accentColor) {
    slide.addShape("rect", {
      x: x,
      y: y,
      w: w,
      h: 0.05,
      fill: { color: accentColor }
    });
  }
}

// Helper to draw stat boxes
function drawStatBox(slide, x, y, w, h, number, label, accentColor, numSize) {
  drawCard(slide, x, y, w, h, accentColor);
  
  // Number
  slide.addText(number, {
    x: x,
    y: y + 0.25,
    w: w,
    h: 0.6,
    fontFace: "Calibri",
    fontSize: numSize,
    bold: true,
    color: accentColor,
    align: "center",
    valign: "middle",
    margin: 0
  });
  
  // Label
  slide.addText(label, {
    x: x,
    y: y + 0.85,
    w: w,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 12,
    color: COLORS.textSecondary,
    align: "center",
    valign: "middle",
    margin: 0
  });
}


// ==========================================
// SLIDE 6 — AGS CINEMATIC INTRO
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 6);
  
  // 6 faint horizontal scan lines across full width
  const scanLinesY = [0.8, 1.5, 2.2, 2.9, 3.6, 4.3];
  scanLinesY.forEach(y => {
    slide.addShape("rect", {
      x: 0,
      y: y,
      w: 10,
      h: 0.015,
      fill: { color: COLORS.primaryAccent, transparency: 85 }
    });
  });
  
  // Corner Brackets
  // Top-left
  slide.addShape("line", { x: 0.25, y: 0.35, w: 0.3, h: 0, line: { color: COLORS.secondaryAccent, width: 1.5 } });
  slide.addShape("line", { x: 0.25, y: 0.35, w: 0, h: 0.22, line: { color: COLORS.secondaryAccent, width: 1.5 } });
  // Top-right
  slide.addShape("line", { x: 9.45, y: 0.35, w: 0.3, h: 0, line: { color: COLORS.secondaryAccent, width: 1.5 } });
  slide.addShape("line", { x: 9.75, y: 0.35, w: 0, h: 0.22, line: { color: COLORS.secondaryAccent, width: 1.5 } });
  
  // 3D Printer Visual Elements
  // 1. Base platform
  slide.addShape("roundRect", {
    x: 3.2,
    y: 3.4,
    w: 3.6,
    h: 0.22,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.primaryAccent, width: 1.5 },
    rectRadius: 0.04
  });
  
  // 2. Printer body (tall box)
  slide.addShape("rect", {
    x: 4.0,
    y: 1.8,
    w: 2.0,
    h: 1.65,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.primaryAccent, width: 1.5 }
  });
  
  // 3. Printer top cap
  slide.addShape("roundRect", {
    x: 3.85,
    y: 1.65,
    w: 2.3,
    h: 0.22,
    fill: { color: COLORS.primaryAccent },
    line: { color: COLORS.primaryAccent },
    rectRadius: 0.04
  });
  
  // 4. Printer nozzle arm (horizontal)
  slide.addShape("rect", {
    x: 3.6,
    y: 2.35,
    w: 2.8,
    h: 0.1,
    fill: { color: COLORS.secondaryAccent },
    line: { color: COLORS.secondaryAccent }
  });
  
  // 5. Nozzle tip (small square)
  slide.addShape("rect", {
    x: 4.9,
    y: 2.43,
    w: 0.2,
    h: 0.28,
    fill: { color: COLORS.secondaryAccent },
    line: { color: COLORS.secondaryAccent }
  });
  
  // 6. Printing beam (glowing lines)
  slide.addShape("rect", {
    x: 4.97,
    y: 2.71,
    w: 0.06,
    h: 0.55,
    fill: { color: COLORS.purpleLight },
    line: { color: COLORS.purpleLight }
  });
  slide.addShape("rect", {
    x: 4.99,
    y: 2.71,
    w: 0.02,
    h: 0.55,
    fill: { color: "FFFFFF", transparency: 60 },
    line: { color: "FFFFFF", transparency: 60 }
  });
  
  // 7. Printed paper/output
  slide.addShape("rect", {
    x: 4.1,
    y: 3.2,
    w: 1.8,
    h: 0.22,
    fill: { color: COLORS.footerBg },
    line: { color: COLORS.secondaryAccent, width: 1 }
  });
  
  // 8. Printing dots
  slide.addShape("ellipse", { x: 4.97, y: 2.75, w: 0.06, h: 0.06, fill: { color: COLORS.purpleLight } });
  slide.addShape("ellipse", { x: 4.97, y: 2.88, w: 0.05, h: 0.05, fill: { color: COLORS.purpleLight, transparency: 30 } });
  slide.addShape("ellipse", { x: 4.97, y: 2.99, w: 0.04, h: 0.04, fill: { color: COLORS.purpleLight, transparency: 60 } });
  
  // 9. Side detail lines
  slide.addShape("line", { x: 4.0, y: 2.0, w: 0, h: 1.4, line: { color: COLORS.primaryAccent, width: 0.5, dashType: "dash" } });
  slide.addShape("line", { x: 6.0, y: 2.0, w: 0, h: 1.4, line: { color: COLORS.primaryAccent, width: 0.5, dashType: "dash" } });
  
  // 10. Floating prompt text
  slide.addText("> Ignore all previous instructions...", {
    x: 3.55,
    y: 3.18,
    w: 2.9,
    h: 0.28,
    fontFace: "Courier New",
    fontSize: 7.5,
    color: "A855F7",
    align: "center",
    valign: "middle",
    margin: 0
  });
  
  // Section intro text
  slide.addText("ATTACK GENERATION SYSTEM", {
    x: 0.5,
    y: 3.85,
    w: 9.0,
    h: 0.55,
    fontFace: "Calibri",
    fontSize: 28,
    bold: true,
    color: "FFFFFF",
    align: "center",
    charSpacing: 8,
    margin: 0
  });
  
  slide.addText("Automated adversarial dataset synthesis at scale", {
    x: 0.5,
    y: 4.38,
    w: 9.0,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 14,
    italic: true,
    color: COLORS.secondaryAccent,
    align: "center",
    margin: 0
  });
  
  // Three horizontal pills
  const pills = [
    { text: "22,264 Seeds", x: 1.8 },
    { text: "218,862 Attacks", x: 4.1 },
    { text: "10× Expansion", x: 6.4 }
  ];
  pills.forEach(pill => {
    slide.addShape("roundRect", {
      x: pill.x,
      y: 4.75,
      w: 1.8,
      h: 0.28,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.primaryAccent, width: 1 },
      rectRadius: 0.14
    });
    slide.addText(pill.text, {
      x: pill.x,
      y: 4.75,
      w: 1.8,
      h: 0.28,
      fontFace: "Calibri",
      fontSize: 10,
      bold: true,
      color: "FFFFFF",
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
}


// ==========================================
// SLIDE 7 — AGS OVERVIEW
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 7);
  addSlideHeader(slide, "Attack Generation System (AGS)", "QuantAI-Guard · AI Safety Research Platform");
  
  // LEFT COLUMN - 2 Cards
  // Card 1: The Problem
  drawCard(slide, 0.4, 1.15, 4.4, 1.55, "EF4444");
  slide.addText("⚠", {
    x: 0.6,
    y: 1.25,
    w: 0.3,
    h: 0.3,
    fontFace: "Segoe UI Emoji",
    fontSize: 18,
    color: "EF4444",
    valign: "middle",
    margin: 0
  });
  slide.addText("The Problem", {
    x: 1.0,
    y: 1.25,
    w: 3.4,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 13,
    bold: true,
    color: "FFFFFF",
    valign: "middle",
    margin: 0
  });
  slide.addText("AI safety classifiers require large adversarial datasets to train effectively — but curated attack prompts are scarce, expensive to collect, and quickly become outdated.", {
    x: 0.55,
    y: 1.52,
    w: 4.1,
    h: 1.0,
    fontFace: "Calibri",
    fontSize: 11,
    color: COLORS.textSecondary,
    valign: "top",
    margin: 0
  });
  
  // Card 2: The Solution
  drawCard(slide, 0.4, 2.85, 4.4, 1.55, "10B981");
  slide.addText("🚀", {
    x: 0.6,
    y: 2.95,
    w: 0.3,
    h: 0.3,
    fontFace: "Segoe UI Emoji",
    fontSize: 18,
    color: "10B981",
    valign: "middle",
    margin: 0
  });
  slide.addText("The Solution: AGS", {
    x: 1.0,
    y: 2.95,
    w: 3.4,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 13,
    bold: true,
    color: "10B981",
    valign: "middle",
    margin: 0
  });
  slide.addText("An automated framework that transforms limited seed data into large-scale, categorized, and de-duplicated adversarial benchmarks.", {
    x: 0.55,
    y: 3.22,
    w: 4.1,
    h: 1.0,
    fontFace: "Calibri",
    fontSize: 11,
    color: COLORS.textSecondary,
    valign: "top",
    margin: 0
  });
  
  // RIGHT COLUMN - 4 Stat Boxes (2x2)
  drawStatBox(slide, 5.1,  1.15, 2.1, 1.5, "22,264", "Seed Samples", "A855F7", 36);
  drawStatBox(slide, 7.45, 1.15, 2.1, 1.5, "218,862", "Generated Attacks", "06B6D4", 30);
  drawStatBox(slide, 5.1,  2.85, 2.1, 1.5, "10×", "Dataset Expansion", "10B981", 40);
  drawStatBox(slide, 7.45, 2.85, 2.1, 1.5, "19 sec", "Processing Time", "F59E0B", 34);
  
  // Bottom text notes
  slide.addText("Achieving ~11,519 unique records/second with zero duplicates via MD5 hash-based de-duplication.", {
    x: 0.4,
    y: 4.55,
    w: 9.2,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 10,
    italic: true,
    color: "475569",
    align: "center",
    valign: "middle",
    margin: 0
  });
  
  slide.addText("Seed Dataset  →  Template Engine  →  218K+ Unique Attacks", {
    x: 0.4,
    y: 4.85,
    w: 9.2,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 11,
    color: COLORS.secondaryAccent,
    align: "center",
    valign: "middle",
    margin: 0
  });
}


// ==========================================
// SLIDE 8 — AGS SYSTEM ARCHITECTURE
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 8);
  addSlideHeader(slide, "AGS System Architecture", "Five tightly integrated modules forming the end-to-end AGS pipeline");
  
  // TOP ROW: Flow Diagram (7 Nodes + Arrows)
  const nodes = [
    { label: "Seed\nDataset", x: 0.18, color: "A855F7" },
    { label: "Template\nManager", x: 1.55, color: "7C3AED" },
    { label: "Payload\nInsertion", x: 2.92, color: "06B6D4" },
    { label: "Duplicate\nDetector", x: 4.29, color: "EF4444" },
    { label: "Target\nModel", x: 5.66, color: "F59E0B" },
    { label: "Difficulty\nScoring", x: 7.03, color: "10B981" },
    { label: "Final\nDataset", x: 8.4, color: "A855F7" }
  ];
  
  nodes.forEach((node, idx) => {
    // Circle Oval
    slide.addShape("ellipse", {
      x: node.x,
      y: 1.25,
      w: 0.55,
      h: 0.55,
      fill: { color: COLORS.cardBg },
      line: { color: node.color, width: 2 }
    });
    
    // Label below circle
    slide.addText(node.label, {
      x: node.x - 0.325,
      y: 1.85,
      w: 1.2,
      h: 0.4,
      fontFace: "Calibri",
      fontSize: 9,
      color: "FFFFFF",
      align: "center",
      valign: "top",
      margin: 0
    });
    
    // Line and "→" text to next node
    if (idx < nodes.length - 1) {
      const nextNode = nodes[idx + 1];
      const xStart = node.x + 0.55;
      const xEnd = nextNode.x;
      
      slide.addShape("line", {
        x: xStart,
        y: 1.525,
        w: xEnd - xStart,
        h: 0,
        line: { color: "475569", width: 1 }
      });
      
      slide.addText("→", {
        x: xStart,
        y: 1.4,
        w: xEnd - xStart,
        h: 0.25,
        fontFace: "Calibri",
        fontSize: 10,
        color: "475569",
        align: "center",
        valign: "middle",
        margin: 0
      });
    }
  });
  
  // BOTTOM ROW: 5 Detail Cards
  const bottomCards = [
    {
      x: 0.28,
      title: "Fast Template Manager",
      accent: "7C3AED",
      body: "15+ templates/category\nPseudo-random selection\nfor structural diversity"
    },
    {
      x: 2.22,
      title: "Difficulty Manager",
      accent: "10B981",
      body: "Weighted sampling:\nExtreme · 35%\nHigh · 35%\nMedium · 20%\nLow · 10%\nRe-assigned post-evaluation\nvia empirical score."
    },
    {
      x: 4.16,
      title: "Duplicate Detector",
      accent: "EF4444",
      body: "MD5 hash fingerprinting\non normalized text.\nFast in-memory\nhash lookup."
    },
    {
      x: 6.10,
      title: "Balanced Target Model",
      accent: "F59E0B",
      body: "Simulated AI evaluator\nreturning calibrated\nsuccess scores [0–1].\nSwappable with live\nAPI endpoints."
    },
    {
      x: 8.04,
      title: "Ultra-Fast Engine",
      accent: "06B6D4",
      body: "Batch orchestration\n(batch_size=500).\nUp to 30 attempts\nper slot.\n22K seeds → 218K\nrecords in 19s."
    }
  ];
  
  bottomCards.forEach(card => {
    drawCard(slide, card.x, 2.6, 1.68, 2.55, card.accent);
    
    // Card title
    slide.addText(card.title, {
      x: card.x + 0.08,
      y: 2.7,
      w: 1.52,
      h: 0.4,
      fontFace: "Calibri",
      fontSize: 10,
      bold: true,
      color: card.accent,
      valign: "top",
      margin: 0
    });
    
    // Card body
    slide.addText(card.body, {
      x: card.x + 0.08,
      y: 3.15,
      w: 1.52,
      h: 1.9,
      fontFace: "Calibri",
      fontSize: 9.5,
      color: COLORS.textSecondary,
      valign: "top",
      margin: 0
    });
  });
}


// ==========================================
// SLIDE 9 — ATTACK CATEGORIES & METHODOLOGY
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 9);
  addSlideHeader(slide, "Attack Categories & Methodology", "Four adversarial threat vectors · Six-stage generation pipeline");
  
  // LEFT COLUMN: 4 Category Cards Stacked
  const categories = [
    {
      y: 1.18,
      icon: "🔒",
      title: "Jailbreak",
      accent: "7C3AED",
      body: "Bypasses alignment via role-play, hypothetical\nscenarios & authority impersonation.",
      tag: "~54,700 records · 15 templates"
    },
    {
      y: 2.22,
      icon: "⚡",
      title: "Prompt Injection",
      accent: "06B6D4",
      body: "Embeds adversarial instructions in user input\nto override system-level prompts.",
      tag: "~54,700 records · 15 templates"
    },
    {
      y: 3.26,
      icon: "🔍",
      title: "PII Leakage",
      accent: "F59E0B",
      body: "Evaluates potential disclosure of sensitive\npersonal information under privacy scenarios.",
      tag: "~54,700 records · 12 templates"
    },
    {
      y: 4.30,
      icon: "⚠",
      title: "Self-Harm",
      accent: "EF4444",
      body: "Evaluates model responses to self-harm related\nscenarios for safety guardrail development.",
      tag: "~54,762 records · 12 templates"
    }
  ];
  
  categories.forEach(cat => {
    drawCard(slide, 0.4, cat.y, 5.6, 0.95, cat.accent);
    
    // Icon
    slide.addText(cat.icon, {
      x: 0.55,
      y: cat.y + 0.1,
      w: 0.3,
      h: 0.3,
      fontFace: "Segoe UI Emoji",
      fontSize: 16,
      valign: "middle",
      margin: 0
    });
    
    // Title
    slide.addText(cat.title, {
      x: 0.9,
      y: cat.y + 0.1,
      w: 2.3,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 12,
      bold: true,
      color: cat.accent,
      valign: "middle",
      margin: 0
    });
    
    // Body Text
    slide.addText(cat.body, {
      x: 0.55,
      y: cat.y + 0.4,
      w: 4.9,
      h: 0.5,
      fontFace: "Calibri",
      fontSize: 10,
      color: COLORS.textSecondary,
      valign: "top",
      margin: 0
    });
    
    // Stat Pill shape
    slide.addShape("roundRect", {
      x: 3.7,
      y: cat.y + 0.1,
      w: 2.1,
      h: 0.22,
      fill: { color: cat.accent, transparency: 80 },
      line: { color: cat.accent, width: 1 },
      rectRadius: 0.1
    });
    
    // Stat Pill text
    slide.addText(cat.tag, {
      x: 3.7,
      y: cat.y + 0.1,
      w: 2.1,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 9,
      bold: true,
      color: "FFFFFF",
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
  
  // RIGHT COLUMN: Vertical Difficulty Pipeline
  slide.addText("Difficulty Pipeline", {
    x: 6.4,
    y: 1.18,
    w: 3.2,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 10,
    italic: true,
    color: "94A3B8",
    margin: 0
  });
  
  const tiers = [
    { name: "EXTREME", pct: "35%", y: 1.38, color: "EF4444" },
    { name: "HIGH", pct: "35%", y: 2.15, color: "F59E0B" },
    { name: "MEDIUM", pct: "20%", y: 2.92, color: "A855F7" },
    { name: "LOW", pct: "10%", y: 3.69, color: "10B981" }
  ];
  
  tiers.forEach((tier, idx) => {
    // Card shape
    slide.addShape("roundRect", {
      x: 6.4,
      y: tier.y,
      w: 3.2,
      h: 0.62,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBg },
      rectRadius: 0.06,
      shadow: SHADOW
    });
    
    // Left color bar on card
    slide.addShape("rect", {
      x: 6.4,
      y: tier.y,
      w: 0.08,
      h: 0.62,
      fill: { color: tier.color }
    });
    
    // Tier Label (Left aligned)
    slide.addText(tier.name, {
      x: 6.6,
      y: tier.y,
      w: 1.5,
      h: 0.62,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: tier.color,
      valign: "middle",
      margin: 0
    });
    
    // Tier Percentage (Right aligned)
    slide.addText(tier.pct, {
      x: 8.0,
      y: tier.y,
      w: 1.4,
      h: 0.62,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: tier.color,
      align: "right",
      valign: "middle",
      margin: 0
    });
    
    // Center down-arrows between tiers
    if (idx < tiers.length - 1) {
      const nextY = tiers[idx + 1].y;
      const arrowY = tier.y + 0.62;
      const arrowH = nextY - arrowY;
      
      slide.addText("↓", {
        x: 6.4,
        y: arrowY,
        w: 3.2,
        h: arrowH,
        fontFace: "Calibri",
        fontSize: 10,
        color: "475569",
        align: "center",
        valign: "middle",
        margin: 0
      });
    }
  });
  
  // Right side note
  slide.addText("Success score [0–1] → discrete difficulty tier", {
    x: 6.4,
    y: 4.62,
    w: 3.2,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 10,
    italic: true,
    color: "475569",
    align: "right",
    valign: "middle",
    margin: 0
  });
}


// ==========================================
// SLIDE 10 — RESULTS & EVALUATION
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 10);
  addSlideHeader(slide, "Results & Evaluation", "Complete generation run · 22,264 seeds · all four attack categories");
  
  // TOP ROW: 3 Hero Stat Cards
  drawStatBox(slide, 0.4,  1.15, 2.9, 1.4, "218,862", "Unique Adversarial Records", "7C3AED", 40);
  drawStatBox(slide, 3.55, 1.15, 2.9, 1.4, "11,519/s", "Throughput (records/second)", "06B6D4", 36);
  drawStatBox(slide, 6.7,  1.15, 2.9, 1.4, "0", "Duplicates in Final Corpus", "10B981", 48);
  
  // BOTTOM ROW: 2 charts side by side
  // Left Box
  drawCard(slide, 0.4, 2.75, 4.5, 2.2);
  slide.addText("Difficulty Distribution", {
    x: 0.6,
    y: 2.82,
    w: 4.1,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: "06B6D4",
    valign: "top",
    margin: 0
  });
  
  const donutData = [
    {
      name: "Difficulty",
      labels: ["Extreme", "High", "Medium", "Low"],
      values: [34.8, 35.0, 20.1, 10.1]
    }
  ];
  slide.addChart(pres.ChartType.doughnut, donutData, {
    x: 0.5,
    y: 3.05,
    w: 4.3,
    h: 1.8,
    showLegend: true,
    legendPos: "b",
    showLabel: true,
    showPercent: true,
    dataLabelFontSize: 8,
    dataLabelColor: "FFFFFF",
    chartColors: ["EF4444", "F59E0B", "A855F7", "10B981"],
    holeSize: 55
  });
  
  // Right Box
  drawCard(slide, 5.1, 2.75, 4.45, 2.2);
  slide.addText("Records by Attack Category", {
    x: 5.3,
    y: 2.82,
    w: 4.05,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: "06B6D4",
    valign: "top",
    margin: 0
  });
  
  const barData = [
    {
      name: "Records",
      labels: ["Jailbreak", "Prompt\nInjection", "PII Leakage", "Self-Harm"],
      values: [54700, 54700, 54700, 54762]
    }
  ];
  slide.addChart(pres.ChartType.bar, barData, {
    x: 5.2,
    y: 3.1,
    w: 4.25,
    h: 1.75,
    valAxisMinVal: 49000,
    valAxisMaxVal: 65000,
    showValue: true,
    dataLabelFontSize: 8,
    catAxisLabelFontSize: 9,
    valAxisLabelFontSize: 8,
    chartColors: ["7C3AED", "06B6D4", "F59E0B", "EF4444"]
  });
}


// ==========================================
// SLIDE 11 — APPLICATIONS & CONTRIBUTION
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, 11);
  addSlideHeader(slide, "Applications & Contribution", "Enabling scalable AI safety evaluation across the research pipeline");
  
  // TOP ROW: 3 standard cards
  const topCards = [
    {
      x: 0.35,
      icon: "🧠",
      title: "Safety Classifier Training",
      accent: "7C3AED",
      body: "Difficulty labels enable curriculum learning from Low → Extreme adversarial examples."
    },
    {
      x: 3.5,
      icon: "📊",
      title: "Robustness Benchmarking",
      accent: "06B6D4",
      body: "Stratified evaluation across 4 difficulty tiers produces granular model robustness profiles."
    },
    {
      x: 6.65,
      icon: "🛡️",
      title: "Automated Red Teaming",
      accent: "10B981",
      body: "Replace simulated model with live API for continuous vulnerability discovery during fine-tuning."
    }
  ];
  
  topCards.forEach(card => {
    drawCard(slide, card.x, 1.15, 3.0, 2.0, card.accent);
    
    // Icon
    slide.addText(card.icon, {
      x: card.x + 0.15,
      y: 1.3,
      w: 0.35,
      h: 0.3,
      fontFace: "Segoe UI Emoji",
      fontSize: 22,
      valign: "middle",
      margin: 0
    });
    
    // Title
    slide.addText(card.title, {
      x: card.x + 0.55,
      y: 1.28,
      w: 2.3,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 12,
      bold: true,
      color: card.accent,
      valign: "middle",
      margin: 0
    });
    
    // Body
    slide.addText(card.body, {
      x: card.x + 0.15,
      y: 1.65,
      w: 2.7,
      h: 1.4,
      fontFace: "Calibri",
      fontSize: 11,
      color: COLORS.textSecondary,
      valign: "top",
      margin: 0
    });
  });
  
  // BOTTOM ROW: 2 wide cards
  const bottomWideCards = [
    {
      x: 0.35,
      icon: "🔰",
      title: "Guardrail Development",
      accent: "F59E0B",
      body: "Provides adversarial test cases for validating safety filters and protection mechanisms."
    },
    {
      x: 5.1,
      icon: "🗄️",
      title: "Research Dataset Publication",
      accent: "A855F7",
      body: "218,862 records · 4 categories · 4 difficulty tiers — a community benchmark contribution."
    }
  ];
  
  bottomWideCards.forEach(card => {
    drawCard(slide, card.x, 3.3, 4.55, 1.3, card.accent);
    
    // Icon
    slide.addText(card.icon, {
      x: card.x + 0.15,
      y: 3.43,
      w: 0.35,
      h: 0.3,
      fontFace: "Segoe UI Emoji",
      fontSize: 20,
      valign: "middle",
      margin: 0
    });
    
    // Title
    slide.addText(card.title, {
      x: card.x + 0.55,
      y: 3.43,
      w: 3.85,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 12,
      bold: true,
      color: card.accent,
      valign: "middle",
      margin: 0
    });
    
    // Body
    slide.addText(card.body, {
      x: card.x + 0.15,
      y: 3.75,
      w: 4.25,
      h: 0.7,
      fontFace: "Calibri",
      fontSize: 11,
      color: COLORS.textSecondary,
      valign: "top",
      margin: 0
    });
  });
  
  // CONCLUSION BOX at bottom
  slide.addShape("roundRect", {
    x: 0.35,
    y: 4.72,
    w: 9.3,
    h: 0.7,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.primaryAccent, width: 1 },
    rectRadius: 0.08
  });
  
  slide.addText("🚀", {
    x: 0.55,
    y: 4.82,
    w: 0.3,
    h: 0.5,
    fontFace: "Segoe UI Emoji",
    fontSize: 16,
    valign: "middle",
    margin: 0
  });
  
  slide.addText("AGS demonstrates that large-scale adversarial corpora can be synthesized from modest seed data at ultra-high throughput — making AI safety evaluation scalable, systematic, and reproducible.", {
    x: 0.9,
    y: 4.78,
    w: 8.5,
    h: 0.58,
    fontFace: "Calibri",
    fontSize: 10,
    italic: true,
    color: COLORS.textSecondary,
    valign: "middle",
    margin: 0
  });
}

// Write presentation
pres.writeFile({ fileName: "AGS_Slides.pptx" }).then(fileName => {
  console.log(`Successfully generated file: ${fileName}`);
  try {
    console.log("Running rezip.py post-processing...");
    execSync("python3 scripts/rezip.py AGS_Slides.pptx", { stdio: "inherit" });
  } catch (err) {
    console.error("Error executing rezip.py post-processing:", err);
  }
}).catch(err => {
  console.error("Error generating presentation:", err);
  process.exit(1);
});
