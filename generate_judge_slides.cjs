const pptxgen = require("pptxgenjs");
const { execSync } = require("child_process");

const BG          = "0D1117";   // all slide backgrounds
const ORANGE      = "FF4B00";   // primary accent
const WHITE       = "FFFFFF";   // primary text
const GRAY_TEXT   = "8892A4";   // body / muted text
const GRAY_CARD   = "161B22";   // card fill
const GRAY_BORDER = "21262D";   // subtle lines
const RED         = "FF2D2D";   // danger
const GREEN       = "00C896";   // success
const TEAL        = "00B4D8";   // secondary accent
const AMBER       = "F59E0B";   // warning / weight

const pres = new pptxgen();
pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
pres.layout = "CUSTOM";

// Helper to draw standard decorations on every slide
function addStandardDecorations(slide, slideIndexStr, sectionLabel) {
  // Slide transition
  slide.transition = { type: "fade" };

  // Background
  slide.background = { fill: BG };

  // Top accent line
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.04, fill: { color: ORANGE }, line: { color: ORANGE } });

  // Section label top-left
  slide.addText(`${slideIndexStr}  /  ${sectionLabel}`, {
    x: 0.55,
    y: 0.22,
    w: 7.0,
    h: 0.28,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 4,
    margin: 0,
    valign: "middle"
  });

  // Footer bar
  slide.addShape("rect", { x: 0, y: 5.42, w: 10, h: 0.2, fill: { color: GRAY_CARD }, line: { color: GRAY_CARD } });

  // Footer text
  slide.addText("QuantAI-Guard  //  Helwan International Technological University  //  2025", {
    x: 0.3,
    y: 5.43,
    w: 9.5,
    h: 0.18,
    fontFace: "Courier New",
    fontSize: 8,
    color: GRAY_TEXT,
    margin: 0,
    valign: "middle"
  });
}

// ==========================================
// SLIDE 11 — THE JUDGE MODEL EVALUATOR
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "11", "THE JUDGE MODEL EVALUATOR");

  // Headline
  slide.addText([
    { text: "An Independent Eye.\n", options: { color: WHITE } },
    { text: "Watching Every Response.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // Divider
  slide.addShape("rect", { x: 0.55, y: 1.92, w: 1.0, h: 0.04, fill: { color: ORANGE }, line: { color: ORANGE } });

  // LEFT CARD — What is it?
  slide.addShape("roundRect", {
    x: 0.35,
    y: 2.08,
    w: 5.5,
    h: 3.0,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  // Section label inside Card
  slide.addText("WHAT IS IT?", {
    x: 0.55,
    y: 2.2,
    w: 5.1,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // Body
  slide.addText("An independent, automated evaluation layer running locally to analyze and verify target LLM outputs.", {
    x: 0.55,
    y: 2.48,
    w: 5.1,
    h: 0.55,
    fontFace: "Calibri",
    fontSize: 12,
    color: GRAY_TEXT,
    valign: "top",
    margin: 0
  });

  // 3 feature items (y: 3.12, 3.72, 4.32)
  const features = [
    {
      y: 3.12,
      color: TEAL,
      title: "Local Deployments via Ollama:",
      body: "Utilizes offline Gemma models for secure and rapid parsing, fully protecting internal corporate telemetry data."
    },
    {
      y: 3.72,
      color: ORANGE,
      title: "Autonomous Integrity Auditing:",
      body: "Answers core security questions: Was the response safe? Did the attack bypass system guards? Is there leaked data?"
    },
    {
      y: 4.32,
      color: GREEN,
      title: "Structured Verdict Outputs:",
      body: "Generates metrics containing: Verdict (SAFE/PARTIAL/UNSAFE), severity tags, and security violation indices."
    }
  ];

  features.forEach(item => {
    // Square
    slide.addShape("rect", {
      x: 0.5,
      y: item.y + 0.03,
      w: 0.28,
      h: 0.28,
      fill: { color: item.color },
      line: { color: item.color }
    });

    // Title
    slide.addText(item.title, {
      x: 0.88,
      y: item.y + 0.02,
      w: 4.8,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: item.color,
      valign: "top",
      margin: 0
    });

    // Body
    slide.addText(item.body, {
      x: 0.88,
      y: item.y + 0.2,
      w: 4.8,
      h: 0.32,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  // RIGHT COLUMN - Stacked Card A (Pipeline)
  slide.addShape("roundRect", {
    x: 6.15,
    y: 2.08,
    w: 3.45,
    h: 1.35,
    fill: { color: GRAY_CARD },
    line: { color: ORANGE, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("EVALUATION PIPELINE", {
    x: 6.3,
    y: 2.2,
    w: 3.15,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  slide.addText("Attack Prompt  ->  Model Response\n->  Judge Model  ->  Security Verdict", {
    x: 6.3,
    y: 2.42,
    w: 3.1,
    h: 0.82,
    fontFace: "Calibri",
    fontSize: 11,
    color: WHITE,
    valign: "top",
    margin: 0
  });

  // RIGHT COLUMN - Stacked Card B (Verdict types)
  slide.addShape("roundRect", {
    x: 6.15,
    y: 3.55,
    w: 3.45,
    h: 1.53,
    fill: { color: GRAY_CARD },
    line: { color: GREEN, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("VERDICT LABELS", {
    x: 6.3,
    y: 3.67,
    w: 3.15,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: GREEN,
    bold: true,
    margin: 0
  });

  const verdicts = [
    {
      y: 3.9,
      color: GREEN,
      title: "SAFE",
      sub: "Response passed all security checks"
    },
    {
      y: 4.2,
      color: AMBER,
      title: "PARTIAL",
      sub: "Response flagged for review"
    },
    {
      y: 4.5,
      color: RED,
      title: "UNSAFE",
      sub: "Immediate pipeline execution kill"
    }
  ];

  verdicts.forEach(row => {
    // Left bar
    slide.addShape("rect", {
      x: 6.3,
      y: row.y,
      w: 0.08,
      h: 0.25,
      fill: { color: row.color },
      line: { color: row.color }
    });

    // Title text
    slide.addText(row.title, {
      x: 6.48,
      y: row.y - 0.04,
      w: 2.9,
      h: 0.18,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: row.color,
      margin: 0
    });

    // Subtitle text
    slide.addText(row.sub, {
      x: 6.48,
      y: row.y + 0.12,
      w: 2.9,
      h: 0.16,
      fontFace: "Calibri",
      fontSize: 9,
      color: GRAY_TEXT,
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 12 — JUDGE WORKFLOWS & CRITERIA
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "12", "JUDGE WORKFLOWS & CRITERIA");

  // Headline
  slide.addText([
    { text: "3 Layers of Validation.\n", options: { color: WHITE } },
    { text: "Zero Tolerance for Leaks.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 0.72,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // Subtitle
  slide.addText("The judge processes telemetry in stages using parallel batch operations and multi-dimensional security evaluation criteria.", {
    x: 0.55,
    y: 1.3,
    w: 9.0,
    h: 0.45,
    fontFace: "Calibri",
    fontSize: 12,
    color: GRAY_TEXT,
    margin: 0
  });

  const columns = [
    {
      x: 0.35,
      color: TEAL,
      icon: "🔄",
      title: "Unified Adapter",
      body: "The judge_adapter.py normalizes structures into legacy dictionary models, translating verdicts and computing quick threat risk weights dynamically.",
      tag: "judge_adapter.py"
    },
    {
      x: 3.56,
      color: GREEN,
      icon: "🔍",
      title: "8-Dimension Logic",
      body: "Gemma checks for Injection, Jailbreaks, PII leaks, Memory Expose, Role Override, safety bypasses, harmful elements, and structural context manipulation.",
      tag: "8 Security Dimensions"
    },
    {
      x: 6.77,
      color: RED,
      icon: "🛡",
      title: "Hard Regex Safety",
      body: "Secondary regex validation scanning for active leaks of user profiles, email patterns, internal IDs, and overrides safe labels to unsafe if found.",
      tag: "Override Layer"
    }
  ];

  columns.forEach(col => {
    // Main container card
    slide.addShape("roundRect", {
      x: col.x,
      y: 1.92,
      w: 2.88,
      h: 3.1,
      fill: { color: GRAY_CARD },
      line: { color: col.color, width: 1.5 },
      rectRadius: 0.08
    });

    // Icon box container
    slide.addShape("roundRect", {
      x: col.x + 0.17,
      y: 2.08,
      w: 0.52,
      h: 0.52,
      fill: { color: GRAY_BORDER },
      line: { color: col.color, width: 1 },
      rectRadius: 0.06
    });

    // Icon
    slide.addText(col.icon, {
      x: col.x + 0.17,
      y: 2.08,
      w: 0.52,
      h: 0.52,
      fontFace: "Segoe UI Emoji",
      fontSize: 18,
      align: "center",
      valign: "middle",
      margin: 0
    });

    // Title
    slide.addText(col.title, {
      x: col.x + 0.17,
      y: 2.68,
      w: 2.55,
      h: 0.25,
      fontFace: "Calibri",
      fontSize: 14,
      bold: true,
      color: WHITE,
      margin: 0
    });

    // Body
    slide.addText(col.body, {
      x: col.x + 0.17,
      y: 2.98,
      w: 2.55,
      h: 1.6,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });

    // Tag bottom pill
    slide.addShape("roundRect", {
      x: col.x + 0.17,
      y: 4.72,
      w: 2.55,
      h: 0.22,
      fill: { color: "0D1117" },
      line: { color: col.color, width: 1 },
      rectRadius: 0.11
    });

    slide.addText(col.tag, {
      x: col.x + 0.17,
      y: 4.72,
      w: 2.55,
      h: 0.22,
      fontFace: "Courier New",
      fontSize: 8,
      color: col.color,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 13 — RISK ENGINE V4 SCORING
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "13", "RISK ENGINE V4 SCORING");

  // Headline
  slide.addText([
    { text: "One Formula.\n", options: { color: WHITE } },
    { text: "Precision Risk Scoring.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 0.72,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // LEFT COLUMN
  slide.addText("Converting complex security telemetry logs into standard analytical risk indices.", {
    x: 0.35,
    y: 1.35,
    w: 4.0,
    h: 0.45,
    fontFace: "Calibri",
    fontSize: 12,
    color: GRAY_TEXT,
    margin: 0
  });

  const weightBlocks = [
    {
      y: 1.88,
      color: TEAL,
      title: "1. THREAT WEIGHT (15%)",
      body: "Evaluates attack execution metrics, prompt payload density, vector counts, and manipulation complexity."
    },
    {
      y: 2.88,
      color: AMBER,
      title: "2. EXPOSURE WEIGHT (35%)",
      body: "Measures defensive failures, behavioral anomalies, and overall exposure elements inside response layers."
    },
    {
      y: 3.88,
      color: RED,
      title: "3. IMPACT WEIGHT (50%)",
      body: "Reflects the actual real-world compromise, leaks, and system policy failures. Weighted highest as consequences drive risk."
    }
  ];

  weightBlocks.forEach(block => {
    // Left color bar
    slide.addShape("rect", {
      x: 0.35,
      y: block.y,
      w: 0.06,
      h: 0.75,
      fill: { color: block.color },
      line: { color: block.color }
    });

    // Title
    slide.addText(block.title, {
      x: 0.52,
      y: block.y,
      w: 3.9,
      h: 0.18,
      fontFace: "Courier New",
      fontSize: 9,
      color: block.color,
      bold: true,
      charSpacing: 2,
      margin: 0
    });

    // Body
    slide.addText(block.body, {
      x: 0.52,
      y: block.y + 0.18,
      w: 3.9,
      h: 0.58,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  // RIGHT COLUMN — Formula card
  slide.addShape("roundRect", {
    x: 4.85,
    y: 1.35,
    w: 4.8,
    h: 1.2,
    fill: { color: GRAY_CARD },
    line: { color: ORANGE, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("SCORING MATHEMATICAL FORMULA:", {
    x: 5.05,
    y: 1.47,
    w: 4.4,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    margin: 0
  });

  slide.addShape("rect", {
    x: 4.85,
    y: 1.65,
    w: 0.06,
    h: 0.72,
    fill: { color: TEAL },
    line: { color: TEAL }
  });

  slide.addText("RiskScore = Threat x 0.15 + Exposure x 0.35 + Impact x 0.50", {
    x: 5.02,
    y: 1.68,
    w: 4.5,
    h: 0.5,
    fontFace: "Calibri",
    fontSize: 14,
    bold: true,
    color: WHITE,
    valign: "middle",
    margin: 0
  });

  // Strategic Focus card
  slide.addShape("roundRect", {
    x: 4.85,
    y: 2.72,
    w: 4.8,
    h: 1.35,
    fill: { color: GRAY_CARD },
    line: { color: GREEN, width: 1, dashType: "dash" },
    rectRadius: 0.08
  });

  slide.addText("📊", {
    x: 5.02,
    y: 2.84,
    w: 0.25,
    h: 0.25,
    fontFace: "Segoe UI Emoji",
    fontSize: 16,
    margin: 0
  });

  slide.addText("Strategic Focus", {
    x: 5.35,
    y: 2.84,
    w: 4.0,
    h: 0.25,
    fontFace: "Calibri",
    fontSize: 12,
    bold: true,
    color: GREEN,
    margin: 0
  });

  slide.addText("The engine balances math with reality. If an attack fails to breach the model, threat values are automatically restricted, preventing false alarms.", {
    x: 5.02,
    y: 3.1,
    w: 4.48,
    h: 0.8,
    fontFace: "Calibri",
    fontSize: 11,
    color: GRAY_TEXT,
    valign: "top",
    margin: 0
  });

  // 3 mini stat boxes inline
  const statBoxes = [
    { x: 4.85, color: TEAL, num: "15%", label: "Threat" },
    { x: 6.45, color: AMBER, num: "35%", label: "Exposure" },
    { x: 8.05, color: RED, num: "50%", label: "Impact" }
  ];

  statBoxes.forEach(box => {
    slide.addShape("roundRect", {
      x: box.x,
      y: 4.22,
      w: 1.42,
      h: 0.65,
      fill: { color: "0D1117" },
      line: { color: box.color, width: 1 },
      rectRadius: 0.06
    });

    slide.addText(box.num, {
      x: box.x,
      y: 4.3,
      w: 1.42,
      h: 0.35,
      fontFace: "Calibri",
      fontSize: 24,
      bold: true,
      color: box.color,
      align: "center",
      margin: 0
    });

    slide.addText(box.label, {
      x: box.x,
      y: 4.66,
      w: 1.42,
      h: 0.2,
      fontFace: "Courier New",
      fontSize: 8,
      color: GRAY_TEXT,
      align: "center",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 14 — RISK DECISIONS & OVERRIDES
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "14", "RISK DECISIONS & OVERRIDES");

  // Headline
  slide.addText([
    { text: "Five Risk Bands.\n", options: { color: WHITE } },
    { text: "Zero False Clearances.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 0.72,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // LEFT — Risk table
  // Table header row
  slide.addShape("rect", {
    x: 0.35,
    y: 1.42,
    w: 5.45,
    h: 0.38,
    fill: { color: GRAY_BORDER },
    line: { color: GRAY_BORDER }
  });

  const headers = [
    { text: "RISK SCORE RANGE", x: 0.5, w: 1.45 },
    { text: "RISK BAND LABEL", x: 2.1, w: 1.45 },
    { text: "OPERATIONAL RESPONSE", x: 3.7, w: 1.9 }
  ];

  headers.forEach(h => {
    slide.addText(h.text, {
      x: h.x,
      y: 1.42,
      w: h.w,
      h: 0.38,
      fontFace: "Courier New",
      fontSize: 8,
      color: GRAY_TEXT,
      bold: true,
      valign: "middle",
      margin: 0
    });
  });

  // 5 data rows
  const rowsData = [
    { range: "0.00 - 0.10", label: "MINIMAL", response: "Pass through telemetry stream", color: GREEN },
    { range: "0.10 - 0.30", label: "LOW RISK", response: "Flag and baseline performance", color: TEAL },
    { range: "0.30 - 0.50", label: "MEDIUM RISK", response: "Trigger standard system warning", color: AMBER },
    { range: "0.50 - 0.70", label: "HIGH RISK", response: "Enforce active policy isolation", color: ORANGE },
    { range: "0.70 - 1.00", label: "CRITICAL", response: "Immediate pipeline execution kill", color: RED }
  ];

  rowsData.forEach((row, i) => {
    const rowY = 1.82 + (i * 0.56);

    // Row background
    slide.addShape("rect", {
      x: 0.35,
      y: rowY,
      w: 5.45,
      h: 0.52,
      fill: { color: (i % 2 === 0 ? GRAY_CARD : "0D1117") },
      line: { color: (i % 2 === 0 ? GRAY_CARD : "0D1117") }
    });

    // Range column
    slide.addText(row.range, {
      x: 0.5,
      y: rowY,
      w: 1.45,
      h: 0.52,
      fontFace: "Calibri",
      fontSize: 11,
      color: row.color,
      valign: "middle",
      margin: 0
    });

    // Label column
    slide.addText(row.label, {
      x: 2.1,
      y: rowY,
      w: 1.45,
      h: 0.52,
      fontFace: "Calibri",
      fontSize: 11,
      color: row.color,
      bold: true,
      valign: "middle",
      margin: 0
    });

    // Response column
    slide.addText(row.response, {
      x: 3.7,
      y: rowY,
      w: 1.9,
      h: 0.52,
      fontFace: "Calibri",
      fontSize: 11,
      color: WHITE,
      valign: "middle",
      margin: 0
    });

    // Thin bottom divider
    slide.addShape("rect", {
      x: 0.35,
      y: rowY + 0.52,
      w: 5.45,
      h: 0.015,
      fill: { color: GRAY_BORDER },
      line: { color: GRAY_BORDER }
    });
  });

  // RIGHT — Compliance Overrides card
  slide.addShape("roundRect", {
    x: 6.1,
    y: 1.42,
    w: 3.55,
    h: 3.75,
    fill: { color: GRAY_CARD },
    line: { color: RED, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("⚠", {
    x: 6.28,
    y: 1.55,
    w: 0.3,
    h: 0.3,
    fontFace: "Segoe UI Emoji",
    fontSize: 16,
    margin: 0
  });

  slide.addText("Compliance Overrides", {
    x: 6.62,
    y: 1.55,
    w: 2.8,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 13,
    bold: true,
    color: RED,
    margin: 0
  });

  slide.addText("To guarantee system resilience, math alone does not decide critical risk. Compliance overrides act as strict guardrails:", {
    x: 6.28,
    y: 1.88,
    w: 3.2,
    h: 0.55,
    fontFace: "Calibri",
    fontSize: 10.5,
    color: GRAY_TEXT,
    valign: "top",
    margin: 0
  });

  slide.addShape("rect", {
    x: 6.28,
    y: 2.45,
    w: 3.1,
    h: 0.02,
    fill: { color: GRAY_BORDER },
    line: { color: GRAY_BORDER }
  });

  const overrides = [
    {
      y: 2.58,
      title: "Stealth Attacks:",
      body: "Raised to 0.55+ floor automatically."
    },
    {
      y: 3.18,
      title: "Partial Compliance:",
      body: "Forced to 0.55+ High Risk minimum."
    },
    {
      y: 3.78,
      title: "Full Bypass Successful:",
      body: "Forced directly to 0.70+ Critical floor."
    }
  ];

  overrides.forEach(item => {
    // Checkmark box
    slide.addShape("rect", {
      x: 6.28,
      y: item.y + 0.02,
      w: 0.22,
      h: 0.22,
      fill: { color: GREEN },
      line: { color: GREEN }
    });

    slide.addText("v", {
      x: 6.28,
      y: item.y + 0.02,
      w: 0.22,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 9,
      bold: true,
      color: WHITE,
      align: "center",
      valign: "middle",
      margin: 0
    });

    // Title
    slide.addText(item.title, {
      x: 6.6,
      y: item.y,
      w: 2.9,
      h: 0.18,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: GREEN,
      margin: 0
    });

    // Body
    slide.addText(item.body, {
      x: 6.6,
      y: item.y + 0.18,
      w: 2.9,
      h: 0.35,
      fontFace: "Calibri",
      fontSize: 10,
      color: GRAY_TEXT,
      margin: 0
    });
  });

  // Bottom stat pill
  slide.addShape("roundRect", {
    x: 6.28,
    y: 4.82,
    w: 3.1,
    h: 0.32,
    fill: { color: "0D1117" },
    line: { color: RED, width: 1 },
    rectRadius: 0.16
  });

  slide.addText("3 override rules  ·  5 risk bands  ·  1 verdict", {
    x: 6.28,
    y: 4.82,
    w: 3.1,
    h: 0.32,
    fontFace: "Courier New",
    fontSize: 8,
    color: RED,
    align: "center",
    valign: "middle",
    margin: 0
  });
}

// ==========================================
// SLIDE 15 — BACKEND ARCHITECTURE & COMPONENTS
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "15", "BACKEND ARCHITECTURE & COMPONENTS");

  // HEADLINE
  slide.addText([
    { text: "Two Languages.\n", options: { color: WHITE } },
    { text: "One Secure Backend.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.1,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // Divider
  slide.addShape("rect", { x: 0.55, y: 1.7, w: 1.0, h: 0.04, fill: { color: ORANGE }, line: { color: ORANGE } });

  // Subtitle
  slide.addText("A PHP + Python hybrid architecture delivering a secure, scalable, AI-driven security evaluation platform with full MySQL integration.", {
    x: 0.55,
    y: 1.82,
    w: 9.0,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 12,
    color: GRAY_TEXT,
    margin: 0
  });

  // LEFT CARD — System Flow
  slide.addShape("roundRect", {
    x: 0.35,
    y: 2.3,
    w: 4.2,
    h: 2.9,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("SYSTEM FLOW", {
    x: 0.52,
    y: 2.42,
    w: 3.86,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 4 stacked flow rows (y: 2.78, 3.3, 3.82, 4.34)
  const flowRows = [
    { y: 2.78, color: TEAL, label: "User", sub: "initiates requests" },
    { y: 3.3, color: ORANGE, label: "Frontend UI", sub: "web interface layer" },
    { y: 3.82, color: GREEN, label: "PHP Backend", sub: "+ Python AI modules" },
    { y: 4.34, color: AMBER, label: "MySQL Database", sub: "persistent storage" }
  ];

  flowRows.forEach(row => {
    // Left bar
    slide.addShape("rect", {
      x: 0.52,
      y: row.y,
      w: 0.06,
      h: 0.42,
      fill: { color: row.color },
      line: { color: row.color }
    });

    // Label
    slide.addText(row.label, {
      x: 0.62,
      y: row.y,
      w: 3.7,
      h: 0.2,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: row.color,
      margin: 0
    });

    // Sub
    slide.addText(row.sub, {
      x: 0.62,
      y: row.y + 0.22,
      w: 3.7,
      h: 0.2,
      fontFace: "Calibri",
      fontSize: 9.5,
      color: GRAY_TEXT,
      margin: 0
    });
  });

  // RIGHT CARD — Core Components
  slide.addShape("roundRect", {
    x: 4.85,
    y: 2.3,
    w: 4.8,
    h: 2.9,
    fill: { color: GRAY_CARD },
    line: { color: ORANGE, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("CORE COMPONENTS", {
    x: 5.02,
    y: 2.42,
    w: 4.46,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 5 list items (y: 2.72, 3.16, 3.6, 4.04, 4.48)
  const compItems = [
    { y: 2.72, color: TEAL, text: "Authentication System" },
    { y: 3.16, color: ORANGE, text: "User Dashboard" },
    { y: 3.6, color: GREEN, text: "AI Security Engine" },
    { y: 4.04, color: AMBER, text: "Attack Testing Module" },
    { y: 4.48, color: RED, text: "Risk Assessment Engine" }
  ];

  compItems.forEach(item => {
    // Square
    slide.addShape("rect", {
      x: 5.02,
      y: item.y + 0.02,
      w: 0.16,
      h: 0.16,
      fill: { color: item.color },
      line: { color: item.color }
    });

    // Text
    slide.addText(item.text, {
      x: 5.3,
      y: item.y,
      w: 4.1,
      h: 0.25,
      fontFace: "Calibri",
      fontSize: 11.5,
      bold: true,
      color: WHITE,
      margin: 0
    });
  });

  // 3 mini tag pills inline y=5.0 h=0.3
  const tagsSlide15 = [
    { x: 0.35, w: 2.05, text: "PHP + Python Hybrid", color: TEAL },
    { x: 2.55, w: 2.05, text: "MySQL Integration", color: AMBER },
    { x: 4.75, w: 2.05, text: "AI-Powered Security", color: ORANGE }
  ];

  tagsSlide15.forEach(pill => {
    slide.addShape("roundRect", {
      x: pill.x,
      y: 5.0,
      w: pill.w,
      h: 0.3,
      fill: { color: "0D1117" },
      line: { color: GRAY_BORDER, width: 1 },
      rectRadius: 0.15
    });

    slide.addText(pill.text, {
      x: pill.x,
      y: 5.0,
      w: pill.w,
      h: 0.3,
      fontFace: "Courier New",
      fontSize: 8,
      color: pill.color,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 16 — AUTHENTICATION & DATABASE
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "16", "AUTHENTICATION & DATABASE");

  // HEADLINE
  slide.addText([
    { text: "Secure Access.\n", options: { color: WHITE } },
    { text: "Structured Data.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.1,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // LEFT CARD — Auth & Dashboard Flow
  slide.addShape("roundRect", {
    x: 0.35,
    y: 1.9,
    w: 4.5,
    h: 3.3,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("AUTH & DASHBOARD FLOW", {
    x: 0.52,
    y: 2.02,
    w: 4.16,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 7 compact checklist items (y: 2.36, step 0.36)
  const checklist = [
    "User Registration & Login",
    "Session Management",
    "Access Control",
    "Secure Password Storage",
    "Profile Management",
    "Historical Evaluation Records",
    "Risk Reports & Analytics"
  ];

  checklist.forEach((item, idx) => {
    const rowY = 2.36 + (idx * 0.36);
    // small checkmark square
    slide.addShape("rect", {
      x: 0.52,
      y: rowY + 0.04,
      w: 0.16,
      h: 0.16,
      fill: { color: GREEN },
      line: { color: GREEN }
    });

    slide.addText("v", {
      x: 0.52,
      y: rowY + 0.04,
      w: 0.16,
      h: 0.16,
      fontFace: "Calibri",
      fontSize: 8,
      bold: true,
      color: WHITE,
      align: "center",
      valign: "middle",
      margin: 0
    });

    slide.addText(item, {
      x: 0.78,
      y: rowY,
      w: 3.9,
      h: 0.32,
      fontFace: "Calibri",
      fontSize: 10,
      color: WHITE,
      margin: 0
    });
  });

  // RIGHT CARD — ERD: Database Structure
  slide.addShape("roundRect", {
    x: 5.0,
    y: 1.9,
    w: 4.65,
    h: 3.3,
    fill: { color: GRAY_CARD },
    line: { color: ORANGE, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("ERD — DATABASE STRUCTURE", {
    x: 5.17,
    y: 2.02,
    w: 4.31,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 4 table blocks (y: 2.36, 2.96, 3.56, 4.16 each h=0.5)
  const tables = [
    { y: 2.36, color: TEAL, name: "Users", fields: "id, full_name, email, role, status" },
    { y: 2.96, color: GREEN, name: "Attack Scenarios", fields: "id, user_id, attack_type, target_model" },
    { y: 3.56, color: AMBER, name: "Attack Results", fields: "success_rate, risk_analysis, classification" },
    { y: 4.16, color: RED, name: "Settings", fields: "setting_key, setting_value, category" }
  ];

  tables.forEach((t) => {
    // table badge / indicator
    slide.addShape("rect", {
      x: 5.17,
      y: t.y,
      w: 0.06,
      h: 0.45,
      fill: { color: t.color },
      line: { color: t.color }
    });

    // Name
    slide.addText(t.name, {
      x: 5.3,
      y: t.y,
      w: 4.2,
      h: 0.2,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: t.color,
      margin: 0
    });

    // key fields
    slide.addText(t.fields, {
      x: 5.3,
      y: t.y + 0.2,
      w: 4.2,
      h: 0.25,
      fontFace: "Courier New",
      fontSize: 8.5,
      color: GRAY_TEXT,
      margin: 0
    });
  });

  // Relations footer pill y=4.78 w=4.3 h=0.28
  slide.addShape("roundRect", {
    x: 5.17,
    y: 4.78,
    w: 4.3,
    h: 0.28,
    fill: { color: "0D1117" },
    line: { color: GRAY_BORDER, width: 1 },
    rectRadius: 0.14
  });

  slide.addText("Users → Attack Scenarios → Attack Results   |   Settings (standalone)", {
    x: 5.17,
    y: 4.78,
    w: 4.3,
    h: 0.28,
    fontFace: "Courier New",
    fontSize: 8,
    color: GRAY_TEXT,
    align: "center",
    valign: "middle",
    margin: 0
  });
}

// ==========================================
// SLIDE 17 — AI SECURITY EVALUATION & RISK ANALYSIS
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "17", "AI SECURITY EVALUATION & RISK ANALYSIS");

  // HEADLINE
  slide.addText([
    { text: "Five Attack Vectors.\n", options: { color: WHITE } },
    { text: "One Risk Verdict.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.1,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // LEFT CARD — Attack Categories
  slide.addShape("roundRect", {
    x: 0.35,
    y: 1.9,
    w: 4.2,
    h: 3.3,
    fill: { color: GRAY_CARD },
    line: { color: RED, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("ATTACK CATEGORIES", {
    x: 0.52,
    y: 2.02,
    w: 3.86,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: RED,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 5 list items (y: 2.4, 2.96, 3.52, 4.08, 4.64)
  const attacks = [
    { num: "1", title: "Prompt Injection" },
    { num: "2", title: "Jailbreak Attacks" },
    { num: "3", title: "PII Leakage" },
    { num: "4", title: "Memory Extraction" },
    { num: "5", title: "Emotional Manipulation" }
  ];

  attacks.forEach((item, idx) => {
    const rowY = 2.4 + (idx * 0.56);
    
    // number badge circle (small ROUNDED_RECTANGLE)
    slide.addShape("roundRect", {
      x: 0.52,
      y: rowY,
      w: 0.3,
      h: 0.3,
      fill: { color: GRAY_BORDER },
      line: { color: RED, width: 1 },
      rectRadius: 0.5
    });

    slide.addText(item.num, {
      x: 0.52,
      y: rowY,
      w: 0.3,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 10,
      bold: true,
      color: RED,
      align: "center",
      valign: "middle",
      margin: 0
    });

    // Title
    slide.addText(item.title, {
      x: 0.95,
      y: rowY,
      w: 3.4,
      h: 0.3,
      fontFace: "Calibri",
      fontSize: 11.5,
      bold: true,
      color: WHITE,
      valign: "middle",
      margin: 0
    });
  });

  // Card A — Evaluation Workflow
  slide.addShape("roundRect", {
    x: 4.75,
    y: 1.9,
    w: 4.9,
    h: 2.0,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("EVALUATION WORKFLOW", {
    x: 4.92,
    y: 2.02,
    w: 4.56,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  slide.addText("Attack Prompt → Classification → Validation & Normalization →\nSecurity Signal Extraction → Risk Assessment → Report Generation", {
    x: 4.92,
    y: 2.32,
    w: 4.55,
    h: 1.5,
    fontFace: "Calibri",
    fontSize: 11,
    color: WHITE,
    valign: "top",
    lineSpacing: 22,
    margin: 0
  });

  // Card B — Risk Metrics & Supported Models
  slide.addShape("roundRect", {
    x: 4.75,
    y: 4.05,
    w: 4.9,
    h: 1.15,
    fill: { color: GRAY_CARD },
    line: { color: AMBER, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("RISK METRICS", {
    x: 4.92,
    y: 4.16,
    w: 4.56,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: AMBER,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // Risk metrics tags row y=4.4
  const metrics = ["Threat", "Exposure", "Impact", "Composite", "Severity"];
  metrics.forEach((m, idx) => {
    const xPos = 4.92 + (idx * 0.92);
    slide.addShape("roundRect", {
      x: xPos,
      y: 4.4,
      w: 0.84,
      h: 0.25,
      fill: { color: "0D1117" },
      line: { color: AMBER, width: 1 },
      rectRadius: 0.12
    });

    slide.addText(m, {
      x: xPos,
      y: 4.4,
      w: 0.84,
      h: 0.25,
      fontFace: "Courier New",
      fontSize: 8,
      color: AMBER,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });

  // Supported models tags row y=4.78
  const models = ["ChatGPT", "Gemini", "Perplexity", "DuckDuckGo AI", "Albert AI"];
  models.forEach((m, idx) => {
    const xPos = 4.92 + (idx * 0.92);
    slide.addShape("roundRect", {
      x: xPos,
      y: 4.78,
      w: 0.84,
      h: 0.25,
      fill: { color: "0D1117" },
      line: { color: TEAL, width: 1 },
      rectRadius: 0.12
    });

    slide.addText(m, {
      x: xPos,
      y: 4.78,
      w: 0.84,
      h: 0.25,
      fontFace: "Courier New",
      fontSize: 7.5,
      color: TEAL,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 18 — ANALYTICS, ADMINISTRATION & CONCLUSION
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "18", "ANALYTICS, ADMINISTRATION & CONCLUSION");

  // HEADLINE
  slide.addText([
    { text: "Full Visibility.\n", options: { color: WHITE } },
    { text: "From Data to Decisions.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.1,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    margin: 0
  });

  // LEFT CARD — Admin Control Flow
  slide.addShape("roundRect", {
    x: 0.35,
    y: 1.9,
    w: 4.5,
    h: 3.0,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("ADMIN CONTROL FLOW", {
    x: 0.52,
    y: 2.02,
    w: 4.16,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // Top node: "Admin Dashboard"
  slide.addShape("roundRect", {
    x: 1.1,
    y: 2.34,
    w: 3.0,
    h: 0.4,
    fill: { color: GRAY_BORDER },
    line: { color: TEAL, width: 1 },
    rectRadius: 0.06
  });

  slide.addText("Admin Dashboard", {
    x: 1.1,
    y: 2.34,
    w: 3.0,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: WHITE,
    align: "center",
    valign: "middle",
    margin: 0
  });

  // 4 branch tags row y=2.9
  const branches = [
    { text: "User Mgmt", color: TEAL, x: 0.45 },
    { text: "AI Models", color: AMBER, x: 1.5 },
    { text: "Analytics", color: GREEN, x: 2.55 },
    { text: "Monitoring", color: RED, x: 3.6 }
  ];

  branches.forEach(b => {
    slide.addShape("roundRect", {
      x: b.x,
      y: 2.9,
      w: 0.95,
      h: 0.3,
      fill: { color: "0D1117" },
      line: { color: b.color, width: 1 },
      rectRadius: 0.12
    });

    slide.addText(b.text, {
      x: b.x,
      y: 2.9,
      w: 0.95,
      h: 0.3,
      fontFace: "Courier New",
      fontSize: 7.5,
      color: b.color,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });

  // Bottom node: "Reports Center"
  slide.addShape("roundRect", {
    x: 1.1,
    y: 3.4,
    w: 3.0,
    h: 0.4,
    fill: { color: GRAY_BORDER },
    line: { color: ORANGE, width: 1 },
    rectRadius: 0.06
  });

  slide.addText("Reports Center", {
    x: 1.1,
    y: 3.4,
    w: 3.0,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: WHITE,
    align: "center",
    valign: "middle",
    margin: 0
  });

  // Features list split into 2 columns
  const col1 = [
    "MySQL Data Mgmt",
    "Historical Records",
    "Analytics Generation",
    "Trend Analysis",
    "Threat Intel Reports"
  ];
  
  const col2 = [
    "Risk Metrics Dashboard",
    "User Management",
    "AI Model Management",
    "System Monitoring"
  ];

  col1.forEach((item, idx) => {
    const rowY = 3.95 + (idx * 0.18);
    slide.addText(`• ${item}`, {
      x: 0.52,
      y: rowY,
      w: 2.05,
      h: 0.18,
      fontFace: "Calibri",
      fontSize: 9,
      color: GRAY_TEXT,
      margin: 0
    });
  });

  col2.forEach((item, idx) => {
    const rowY = 3.95 + (idx * 0.18);
    slide.addText(`• ${item}`, {
      x: 2.65,
      y: rowY,
      w: 2.05,
      h: 0.18,
      fontFace: "Calibri",
      fontSize: 9,
      color: GRAY_TEXT,
      margin: 0
    });
  });

  // RIGHT CARD — Conclusion
  slide.addShape("roundRect", {
    x: 5.0,
    y: 1.9,
    w: 4.65,
    h: 3.0,
    fill: { color: GRAY_CARD },
    line: { color: ORANGE, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("CONCLUSION", {
    x: 5.17,
    y: 2.02,
    w: 4.31,
    h: 0.25,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  // 4 stacked statement blocks (y: 2.4, 3.0, 3.6, 4.2 each h=0.5)
  const statements = [
    { y: 2.4, color: TEAL, title: "Secure Architecture", sub: "End-to-end protected data flow" },
    { y: 2.9, color: GREEN, title: "AI-Based Security Testing", sub: "Automated multi-model evaluation" },
    { y: 3.4, color: AMBER, title: "Scalable Infrastructure", sub: "PHP + Python hybrid backend" },
    { y: 3.9, color: RED, title: "Comprehensive Monitoring", sub: "Full reporting & administration" }
  ];

  statements.forEach(block => {
    // left bar
    slide.addShape("rect", {
      x: 5.17,
      y: block.y,
      w: 0.06,
      h: 0.45,
      fill: { color: block.color },
      line: { color: block.color }
    });

    // Title
    slide.addText(block.title, {
      x: 5.3,
      y: block.y,
      w: 4.2,
      h: 0.2,
      fontFace: "Calibri",
      fontSize: 11,
      bold: true,
      color: block.color,
      margin: 0
    });

    // Sub
    slide.addText(block.sub, {
      x: 5.3,
      y: block.y + 0.22,
      w: 4.2,
      h: 0.2,
      fontFace: "Calibri",
      fontSize: 9.5,
      color: GRAY_TEXT,
      margin: 0
    });
  });
}

// Write presentation to file
pres.writeFile({ fileName: "JudgeRisk_Slides.pptx" }).then(fileName => {
  console.log(`Successfully generated file: ${fileName}`);
  try {
    console.log("Running rezip.py post-processing...");
    execSync("python3 scripts/rezip.py JudgeRisk_Slides.pptx", { stdio: "inherit" });
    console.log("Successfully ran rezip.py post-processing.");
  } catch (err) {
    console.error("Error executing rezip.py post-processing:", err);
  }
}).catch(err => {
  console.error("Error writing presentation:", err);
  process.exit(1);
});
