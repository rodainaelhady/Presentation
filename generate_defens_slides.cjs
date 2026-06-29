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
// SLIDE 19 — CASE STUDY INTRO (full-screen cinematic)
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "19", "CASE STUDY");

  // BACKGROUND ATMOSPHERE:
  // 4 faint horizontal scan lines across full width:
  // RECTANGLE x=0 w=10 h=0.015 fill ORANGE transparency 88 at y = 1.2, 2.1, 3.0, 3.9
  const scanLineYs = [1.2, 2.1, 3.0, 3.9];
  scanLineYs.forEach(y => {
    slide.addShape("rect", {
      x: 0,
      y: y,
      w: 10,
      h: 0.015,
      fill: { color: ORANGE, transparency: 88 },
      line: { color: ORANGE, transparency: 88 }
    });
  });

  // Corner brackets top-left:
  slide.addShape("line", { x: 0.3, y: 0.45, w: 0.35, h: 0, line: { color: TEAL, width: 1.5 } });
  slide.addShape("line", { x: 0.3, y: 0.45, w: 0, h: 0.28, line: { color: TEAL, width: 1.5 } });

  // Corner brackets top-right:
  slide.addShape("line", { x: 9.35, y: 0.45, w: 0.35, h: 0, line: { color: TEAL, width: 1.5 } });
  slide.addShape("line", { x: 9.7, y: 0.45, w: 0, h: 0.28, line: { color: TEAL, width: 1.5 } });

  // Small label above:
  slide.addText("QUANTAI-GUARD  //  REAL-WORLD APPLICATION", {
    x: 0.5,
    y: 1.55,
    w: 9.0,
    h: 0.3,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    charSpacing: 5,
    align: "center",
    margin: 0
  });

  // Main title — giant:
  slide.addText("DEFENS", {
    x: 0.5,
    y: 1.92,
    w: 9.0,
    h: 1.8,
    fontFace: "Calibri",
    fontSize: 88,
    bold: true,
    color: WHITE,
    align: "center",
    margin: 0
  });

  // Subtitle line:
  slide.addText("A Defensive Intelligence Layer for Adversarial Prompt Detection", {
    x: 0.5,
    y: 3.58,
    w: 9.0,
    h: 0.38,
    fontFace: "Calibri",
    fontSize: 16,
    italic: true,
    color: GRAY_TEXT,
    align: "center",
    margin: 0
  });

  // Subtitle line 2:
  slide.addText("in Mental-Health Conversational AI", {
    x: 0.5,
    y: 3.92,
    w: 9.0,
    h: 0.32,
    fontFace: "Calibri",
    fontSize: 14,
    italic: true,
    color: TEAL,
    align: "center",
    margin: 0
  });

  // 3 stat pills in a row (y=4.42):
  // x: 2.0, 4.1, 6.2  each w=1.7 h=0.35
  const pills = [
    { x: 2.0, text: "73,637 Samples", color: ORANGE },
    { x: 4.1, text: "AUC 0.9966", color: GREEN },
    { x: 6.2, text: "F1 = 99.56%", color: TEAL }
  ];

  pills.forEach(p => {
    slide.addShape("roundRect", {
      x: p.x,
      y: 4.42,
      w: 1.7,
      h: 0.35,
      fill: { color: "0D1117" },
      line: { color: ORANGE, width: 1 },
      rectRadius: 0.08
    });

    slide.addText(p.text, {
      x: p.x,
      y: 4.42,
      w: 1.7,
      h: 0.35,
      fontFace: "Courier New",
      fontSize: 9,
      color: p.color,
      align: "center",
      valign: "middle",
      bold: true,
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 20 — DEFENS OVERVIEW
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "20", "DEFENS — THE PROBLEM & SOLUTION");

  // HEADLINE (2 lines)
  slide.addText([
    { text: "No Upstream Defense.\n", options: { color: WHITE } },
    { text: "Every Attack Reaches the Model.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 28,
    bold: true,
    margin: 0
  });

  // Divider
  slide.addShape("rect", { x: 0.55, y: 1.92, w: 1.0, h: 0.04, fill: { color: ORANGE }, line: { color: ORANGE } });

  // LEFT CARD — The Problem
  slide.addShape("roundRect", {
    x: 0.35,
    y: 2.08,
    w: 4.55,
    h: 3.0,
    fill: { color: GRAY_CARD },
    line: { color: RED, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("THE PROBLEM", {
    x: 0.55,
    y: 2.2,
    w: 4.15,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: RED,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  slide.addText("Mental-health chatbots face significant adversarial risks", {
    x: 0.55,
    y: 2.42,
    w: 4.1,
    h: 0.45,
    fontFace: "Calibri",
    fontSize: 12,
    bold: true,
    color: WHITE,
    margin: 0,
    valign: "top"
  });

  const problemBullets = [
    { y: 2.95, text: "▸  Jailbreak via reframed instructions or role-play to bypass safety rules" },
    { y: 3.32, text: "▸  Extract system prompts, hidden config, or other users PII" },
    { y: 3.69, text: "▸  Exploit the supportive tone of mental-health conversations to manipulate responses" },
    { y: 4.06, text: "▸  Trigger unsafe outputs around self-harm — life-critical, not just reputational" }
  ];

  problemBullets.forEach(b => {
    slide.addText(b.text, {
      x: 0.55,
      y: b.y,
      w: 4.1,
      h: 0.32,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  slide.addText("No upstream defense = every adversarial prompt reaches the model directly.", {
    x: 0.55,
    y: 4.48,
    w: 4.1,
    h: 0.3,
    fontFace: "Calibri",
    fontSize: 10,
    italic: true,
    color: RED,
    margin: 0,
    valign: "top"
  });

  // RIGHT CARD — The Solution
  slide.addShape("roundRect", {
    x: 5.1,
    y: 2.08,
    w: 4.55,
    h: 3.0,
    fill: { color: GRAY_CARD },
    line: { color: GREEN, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("THE SOLUTION", {
    x: 5.28,
    y: 2.2,
    w: 4.15,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: GREEN,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  slide.addText("DEFENS blocks malicious prompts upstream", {
    x: 5.28,
    y: 2.42,
    w: 4.1,
    h: 0.35,
    fontFace: "Calibri",
    fontSize: 13,
    bold: true,
    color: WHITE,
    margin: 0,
    valign: "top"
  });

  slide.addText("Every user message is screened by a binary classifier\nbefore it ever reaches the chatbot:", {
    x: 5.28,
    y: 2.82,
    w: 4.1,
    h: 0.4,
    fontFace: "Calibri",
    fontSize: 11,
    color: GRAY_TEXT,
    margin: 0,
    valign: "top"
  });

  // Safe Verdict Row
  slide.addShape("roundRect", { x: 5.28, y: 3.28, w: 1.0, h: 0.28, fill: { color: GREEN }, rectRadius: 0.06 });
  slide.addText("SAFE", {
    x: 5.28,
    y: 3.28,
    w: 1.0,
    h: 0.28,
    fontFace: "Calibri",
    fontSize: 10,
    bold: true,
    color: WHITE,
    align: "center",
    valign: "middle",
    margin: 0
  });
  slide.addText("passed through normally to the chatbot", {
    x: 6.38,
    y: 3.3,
    w: 2.9,
    h: 0.28,
    fontFace: "Calibri",
    fontSize: 11,
    color: WHITE,
    valign: "middle",
    margin: 0
  });

  // Attack Verdict Row
  slide.addShape("roundRect", { x: 5.28, y: 3.62, w: 1.0, h: 0.28, fill: { color: RED }, rectRadius: 0.06 });
  slide.addText("ATTACK", {
    x: 5.28,
    y: 3.62,
    w: 1.0,
    h: 0.28,
    fontFace: "Calibri",
    fontSize: 10,
    bold: true,
    color: WHITE,
    align: "center",
    valign: "middle",
    margin: 0
  });
  slide.addText("intercepted and blocked before any response", {
    x: 6.38,
    y: 3.64,
    w: 2.9,
    h: 0.28,
    fontFace: "Calibri",
    fontSize: 11,
    color: WHITE,
    valign: "middle",
    margin: 0
  });

  // Attack type pills (Row 1: y=4.08, Row 2: y=4.38)
  const row1Pills = [
    { x: 5.28, w: 1.12, text: "Jailbreaks" },
    { x: 6.55, w: 1.12, text: "Prompt Injection" },
    { x: 7.82, w: 1.12, text: "Role-Override" }
  ];

  row1Pills.forEach(p => {
    slide.addShape("roundRect", {
      x: p.x,
      y: 4.08,
      w: p.w,
      h: 0.25,
      fill: { color: "0D1117" },
      line: { color: TEAL, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(p.text, {
      x: p.x,
      y: 4.08,
      w: p.w,
      h: 0.25,
      fontFace: "Courier New",
      fontSize: 8,
      color: TEAL,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });

  const row2Pills = [
    { x: 5.65, w: 1.25, text: "PII Leakage" },
    { x: 7.05, w: 1.25, text: "Emotional Manipulation" }
  ];

  row2Pills.forEach(p => {
    slide.addShape("roundRect", {
      x: p.x,
      y: 4.38,
      w: p.w,
      h: 0.25,
      fill: { color: "0D1117" },
      line: { color: TEAL, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(p.text, {
      x: p.x,
      y: 4.38,
      w: p.w,
      h: 0.25,
      fontFace: "Courier New",
      fontSize: 8,
      color: TEAL,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 21 — DATA FOUNDATION
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "21", "DEFENS — DATA FOUNDATION");

  // HEADLINE (2 lines)
  slide.addText([
    { text: "From 46K Prototype.\n", options: { color: WHITE } },
    { text: "To 73.6K Production Dataset.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 28,
    bold: true,
    margin: 0
  });

  // LEFT CARD — Prototype (DISCARDED)
  slide.addShape("roundRect", {
    x: 0.35,
    y: 1.42,
    w: 4.0,
    h: 2.42,
    fill: { color: GRAY_CARD },
    line: { color: RED, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("DEFENS PROTOTYPE", {
    x: 0.55,
    y: 1.54,
    w: 3.6,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: RED,
    bold: true,
    margin: 0
  });

  slide.addText("46,013", {
    x: 0.55,
    y: 1.78,
    w: 3.6,
    h: 0.55,
    fontFace: "Calibri",
    fontSize: 38,
    bold: true,
    color: RED,
    margin: 0
  });

  slide.addText("real-world English prompts", {
    x: 0.55,
    y: 2.35,
    w: 3.6,
    h: 0.2,
    fontFace: "Calibri",
    fontSize: 10,
    color: GRAY_TEXT,
    margin: 0
  });

  slide.addText("96.76% accuracy initially, but:", {
    x: 0.55,
    y: 2.62,
    w: 3.6,
    h: 0.2,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: WHITE,
    margin: 0
  });

  const protoBullets = [
    { y: 2.85, text: "▸  Progressive overfitting — F1 dropped 96.76% → 84.41% by Round 5" },
    { y: 3.1,  text: "▸  Weak on indirect / emotionally-framed attacks" },
    { y: 3.35, text: "▸  No cross-validation or ensemble learning" }
  ];

  protoBullets.forEach(b => {
    slide.addText(b.text, {
      x: 0.55,
      y: b.y,
      w: 3.6,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 10,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  // Red Tag Bottom
  slide.addShape("roundRect", { x: 0.55, y: 3.62, w: 2.8, h: 0.22, fill: { color: "0D1117" }, line: { color: RED, width: 1 }, rectRadius: 0.08 });
  slide.addText("DISCARDED → informed the redesign", {
    x: 0.55,
    y: 3.62,
    w: 2.8,
    h: 0.22,
    fontFace: "Courier New",
    fontSize: 8,
    color: RED,
    align: "center",
    valign: "middle",
    margin: 0
  });

  // RIGHT CARD — Production Dataset
  slide.addShape("roundRect", {
    x: 4.65,
    y: 1.42,
    w: 5.0,
    h: 3.75,
    fill: { color: GRAY_CARD },
    line: { color: GREEN, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("FINAL PRODUCTION DATASET", {
    x: 4.8,
    y: 1.54,
    w: 4.7,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: GREEN,
    bold: true,
    margin: 0
  });

  // Box 1
  slide.addShape("roundRect", { x: 4.8, y: 1.78, w: 2.15, h: 1.08, fill: { color: "0D1117" }, line: { color: TEAL, width: 1 }, rectRadius: 0.06 });
  slide.addText("72,648", {
    x: 4.8,
    y: 1.9,
    w: 2.15,
    h: 0.5,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    color: TEAL,
    align: "center",
    margin: 0
  });
  slide.addText("Phase 1: merged_corrected.xlsx", {
    x: 4.8,
    y: 2.55,
    w: 2.15,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 7.5,
    color: GRAY_TEXT,
    align: "center",
    margin: 0
  });

  // Box 2
  slide.addShape("roundRect", { x: 7.1, y: 1.78, w: 2.45, h: 1.08, fill: { color: "0D1117" }, line: { color: TEAL, width: 1 }, rectRadius: 0.06 });
  slide.addText("73,637", {
    x: 7.1,
    y: 1.9,
    w: 2.45,
    h: 0.5,
    fontFace: "Calibri",
    fontSize: 30,
    bold: true,
    color: TEAL,
    align: "center",
    margin: 0
  });
  slide.addText("Phase 2: + fine-tuning data", {
    x: 7.1,
    y: 2.55,
    w: 2.45,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 7.5,
    color: GRAY_TEXT,
    align: "center",
    margin: 0
  });

  // Divider
  slide.addShape("rect", { x: 4.8, y: 2.98, w: 4.7, h: 0.02, fill: { color: GRAY_BORDER }, line: { color: GRAY_BORDER } });

  // Why Expanded section
  slide.addText("WHY EXPANDED?", {
    x: 4.8,
    y: 3.08,
    w: 4.7,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: AMBER,
    bold: true,
    margin: 0
  });

  slide.addText("Error analysis on Phase 1 revealed two gaps:", {
    x: 4.8,
    y: 3.26,
    w: 4.7,
    h: 0.2,
    fontFace: "Calibri",
    fontSize: 11,
    bold: true,
    color: WHITE,
    margin: 0
  });

  const whyBullets = [
    { y: 3.48, text: "▸  Weak detection of indirect attacks (contextual masking, emotional framing)" },
    { y: 3.72, text: "▸  False positives on genuine mental-health crisis statements" }
  ];

  whyBullets.forEach(b => {
    slide.addText(b.text, {
      x: 4.8,
      y: b.y,
      w: 4.6,
      h: 0.22,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  // Preprocessing Box
  slide.addShape("roundRect", { x: 4.8, y: 4.0, w: 4.7, h: 0.82, fill: { color: "0D1117" }, line: { color: GRAY_BORDER, width: 1 }, rectRadius: 0.06 });
  slide.addText("Minimal preprocessing by design:", {
    x: 4.98,
    y: 4.1,
    w: 4.4,
    h: 0.2,
    fontFace: "Calibri",
    fontSize: 10,
    bold: true,
    color: WHITE,
    margin: 0
  });
  slide.addText("Only Unicode + whitespace normalization — typos, capitalization, and\nduplicate patterns preserved intentionally: attackers linguistic\nirregularities carry real signal.", {
    x: 4.98,
    y: 4.28,
    w: 4.4,
    h: 0.5,
    fontFace: "Calibri",
    fontSize: 9.5,
    italic: true,
    color: GRAY_TEXT,
    margin: 0,
    valign: "top"
  });
}

// ==========================================
// SLIDE 22 — MODEL ARCHITECTURE
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "22", "DEFENS — MODEL ARCHITECTURE");

  // HEADLINE
  slide.addText([
    { text: "DeBERTa-v3 Won.\n", options: { color: WHITE } },
    { text: "Disentangled Attention Wins.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 28,
    bold: true,
    margin: 0
  });

  // TOP ROW — 4 model comparison cards
  const comparisonCards = [
    { x: 0.35, title: "DistilBERT", stat: "~66M", body: "Insufficient capacity for gray-zone detection", isSelected: false },
    { x: 2.68, title: "BERT-base", stat: "~110M", body: "Entangled attention — weak vs paraphrasing", isSelected: false },
    { x: 5.01, title: "RoBERTa-base", stat: "~125M", body: "Weaker than DeBERTa on nuanced cases", isSelected: false },
    { x: 7.34, title: "DeBERTa-v3-base", stat: "~184M", body: "Disentangled attention — selected ✓", isSelected: true }
  ];

  comparisonCards.forEach(c => {
    if (c.isSelected) {
      slide.addShape("roundRect", { x: c.x, y: 1.42, w: 2.2, h: 1.15, fill: { color: TEAL }, line: { color: TEAL, width: 1 }, rectRadius: 0.08 });
      slide.addText(c.title, { x: c.x + 0.15, y: 1.54, w: 1.9, h: 0.2, fontFace: "Calibri", fontSize: 11, bold: true, color: WHITE, margin: 0 });
      slide.addText(c.stat, { x: c.x + 0.15, y: 1.76, w: 1.9, h: 0.3, fontFace: "Calibri", fontSize: 20, bold: true, color: WHITE, margin: 0 });
      slide.addText(c.body, { x: c.x + 0.15, y: 2.12, w: 1.9, h: 0.4, fontFace: "Calibri", fontSize: 9, color: WHITE, margin: 0, valign: "top" });
    } else {
      slide.addShape("roundRect", { x: c.x, y: 1.42, w: 2.2, h: 1.15, fill: { color: GRAY_CARD }, line: { color: GRAY_BORDER, width: 1 }, rectRadius: 0.08 });
      slide.addText(c.title, { x: c.x + 0.15, y: 1.54, w: 1.9, h: 0.2, fontFace: "Calibri", fontSize: 11, bold: true, color: GRAY_TEXT, margin: 0 });
      slide.addText(c.stat, { x: c.x + 0.15, y: 1.76, w: 1.9, h: 0.3, fontFace: "Calibri", fontSize: 18, bold: true, color: GRAY_TEXT, margin: 0 });
      slide.addText(c.body, { x: c.x + 0.15, y: 2.12, w: 1.9, h: 0.4, fontFace: "Calibri", fontSize: 9, color: GRAY_TEXT, margin: 0, valign: "top" });
    }
  });

  // MIDDLE — Inference Pipeline
  slide.addText("INFERENCE PIPELINE", {
    x: 0.35,
    y: 2.72,
    w: 9.0,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  const pipelineNodes = [
    { x: 0.35, text: "Raw Input Data", lineColor: GRAY_BORDER, textColor: WHITE },
    { x: 1.92, text: "Preprocessing", lineColor: GRAY_BORDER, textColor: WHITE },
    { x: 3.49, text: "Tokenization", lineColor: GRAY_BORDER, textColor: WHITE },
    { x: 5.06, text: "DeBERTa-v3", lineColor: ORANGE, textColor: ORANGE },
    { x: 6.63, text: "Classification Head", lineColor: GRAY_BORDER, textColor: WHITE },
    { x: 8.2,  text: "Safety Decision", lineColor: GREEN, textColor: GREEN }
  ];

  pipelineNodes.forEach((node, index) => {
    slide.addShape("roundRect", {
      x: node.x,
      y: 2.92,
      w: 1.42,
      h: 0.55,
      fill: { color: GRAY_CARD },
      line: { color: node.lineColor, width: 1 },
      rectRadius: 0.06
    });

    slide.addText(node.text, {
      x: node.x,
      y: 2.92,
      w: 1.42,
      h: 0.55,
      fontFace: "Calibri",
      fontSize: 9,
      bold: true,
      color: node.textColor,
      align: "center",
      valign: "middle",
      margin: 0
    });

    if (index < pipelineNodes.length - 1) {
      slide.addText("→", {
        x: node.x + 1.42,
        y: 2.92,
        w: 0.15,
        h: 0.55,
        fontFace: "Calibri",
        fontSize: 11,
        color: GRAY_TEXT,
        align: "center",
        valign: "middle",
        margin: 0
      });
    }
  });

  // BOTTOM — Custom Classification Head
  slide.addText("CUSTOM CLASSIFICATION HEAD", {
    x: 0.35,
    y: 3.65,
    w: 9.0,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 3,
    margin: 0
  });

  const customHeadCards = [
    { x: 0.35, label: "MULTI-SAMPLE DROPOUT", labelColor: TEAL, text: "3 parallel dropout paths, averaged — reduces overfitting" },
    { x: 3.56, label: "FC CLASSIFICATION LAYER", labelColor: ORANGE, text: "Pooled [CLS] token → 2-D logit space (SAFE / ATTACK)" },
    { x: 6.77, label: "LOGITS AVERAGING", labelColor: GREEN, text: "Stabilizes optimization across dropout branches" }
  ];

  customHeadCards.forEach(c => {
    slide.addShape("roundRect", {
      x: c.x,
      y: 3.85,
      w: 2.9,
      h: 1.35,
      fill: { color: GRAY_CARD },
      line: { color: c.labelColor, width: 1.5 },
      rectRadius: 0.08
    });

    slide.addText(c.label, {
      x: c.x + 0.15,
      y: 3.97,
      w: 2.6,
      h: 0.2,
      fontFace: "Courier New",
      fontSize: 9,
      color: c.labelColor,
      bold: true,
      margin: 0
    });

    slide.addText(c.text, {
      x: c.x + 0.15,
      y: 4.18,
      w: 2.6,
      h: 0.9,
      fontFace: "Calibri",
      fontSize: 10.5,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });
}

// ==========================================
// SLIDE 23 — THREE-PHASE TRAINING STRATEGY
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "23", "DEFENS — THREE-PHASE TRAINING");

  // HEADLINE
  slide.addText([
    { text: "Three Phases.\n", options: { color: WHITE } },
    { text: "Cross-Validation → Ensemble → Fine-Tune.", options: { color: ORANGE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 26,
    bold: true,
    margin: 0
  });

  // LEFT — Flow diagram card
  slide.addShape("roundRect", {
    x: 0.35,
    y: 1.42,
    w: 3.5,
    h: 3.75,
    fill: { color: GRAY_CARD },
    line: { color: GRAY_BORDER, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("TRAINING FLOW", {
    x: 0.55,
    y: 1.54,
    w: 3.1,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: GRAY_TEXT,
    bold: true,
    margin: 0
  });

  // 7 training nodes
  const trainingNodes = [
    { y: 1.75, text: "Initial Dataset", fill: TEAL, line: TEAL, textCol: WHITE, isBold: true },
    { y: 2.18, text: "3-Fold Stratified CV", fill: GRAY_CARD, line: GRAY_BORDER, textCol: WHITE, isBold: false },
    { y: 2.61, text: "Soft-Voting Ensemble", fill: GRAY_CARD, line: ORANGE, textCol: ORANGE, isBold: false },
    { y: 3.04, text: "Error Analysis & Gap ID", fill: GRAY_CARD, line: GRAY_BORDER, textCol: GRAY_TEXT, isBold: false },
    { y: 3.47, text: "Targeted Dataset Expansion", fill: GRAY_CARD, line: GRAY_BORDER, textCol: WHITE, isBold: false },
    { y: 3.9,  text: "Domain Fine-Tuning", fill: GRAY_CARD, line: TEAL, textCol: TEAL, isBold: false },
    { y: 4.33, text: "Final Production Model", fill: GREEN, line: GREEN, textCol: WHITE, isBold: true }
  ];

  trainingNodes.forEach((node, index) => {
    slide.addShape("roundRect", {
      x: 0.65,
      y: node.y,
      w: 2.9,
      h: 0.32,
      fill: { color: node.fill },
      line: { color: node.line, width: 1 },
      rectRadius: 0.05
    });

    slide.addText(node.text, {
      x: 0.65,
      y: node.y,
      w: 2.9,
      h: 0.32,
      fontFace: "Calibri",
      fontSize: 9,
      bold: node.isBold,
      color: node.textCol,
      align: "center",
      valign: "middle",
      margin: 0
    });

    if (index < trainingNodes.length - 1) {
      slide.addText("↓", {
        x: 0.65,
        y: node.y + 0.32,
        w: 2.9,
        h: 0.11,
        fontFace: "Calibri",
        fontSize: 8,
        color: GRAY_TEXT,
        align: "center",
        valign: "middle",
        margin: 0
      });
    }
  });

  // Cross-Validation tiny splits note between Node 2 and Node 3
  slide.addText("Fold 1  |  Fold 2  |  Fold 3", {
    x: 0.65,
    y: 2.50,
    w: 2.9,
    h: 0.12,
    fontFace: "Calibri",
    fontSize: 8,
    color: GRAY_TEXT,
    align: "center",
    margin: 0
  });

  // RIGHT — 3 phase cards stacked
  const phases = [
    {
      y: 1.42,
      num: "1",
      color: TEAL,
      label: "PHASE 1",
      title: "Stratified 3-Fold Cross-Validation",
      body: "72,648 samples · Fold 3 best: F1 = 92.19%",
      badgeText: "AUC-ROC 97.6%",
      badgeW: 1.7
    },
    {
      y: 2.59,
      num: "2",
      color: ORANGE,
      label: "PHASE 2",
      title: "Soft-Voting Ensemble (3 models)",
      body: "Averaged SoftMax probabilities across folds",
      badgeText: "Recall +4.77%",
      badgeW: 1.7
    },
    {
      y: 3.76,
      num: "3",
      color: GREEN,
      label: "PHASE 3",
      title: "Domain-Specific Fine-Tuning",
      body: "73,637 samples · LR = 1e-5 · 3 epochs",
      badgeText: "F1 = 99.56%",
      badgeW: 1.7
    }
  ];

  phases.forEach(p => {
    slide.addShape("roundRect", {
      x: 4.15,
      y: p.y,
      w: 5.5,
      h: 1.05,
      fill: { color: GRAY_CARD },
      line: { color: p.color, width: 1.5 },
      rectRadius: 0.08
    });

    slide.addShape("oval", { x: 4.28, y: p.y + 0.1, w: 0.52, h: 0.52, fill: { color: p.color }, line: { color: p.color } });
    slide.addText(p.num, {
      x: 4.28,
      y: p.y + 0.1,
      w: 0.52,
      h: 0.52,
      fontFace: "Calibri",
      fontSize: 16,
      bold: true,
      color: WHITE,
      align: "center",
      valign: "middle",
      margin: 0
    });

    slide.addText(p.label, { x: 4.9, y: p.y + 0.1, w: 2.8, h: 0.2, fontFace: "Courier New", fontSize: 9, color: p.color, bold: true, margin: 0 });
    slide.addText(p.title, { x: 4.9, y: p.y + 0.28, w: 2.8, h: 0.22, fontFace: "Calibri", fontSize: 12, bold: true, color: WHITE, margin: 0 });
    slide.addText(p.body, { x: 4.9, y: p.y + 0.48, w: 2.8, h: 0.4, fontFace: "Calibri", fontSize: 10.5, color: GRAY_TEXT, margin: 0, valign: "top" });

    const badgeX = 9.65 - p.badgeW - 0.15;
    slide.addShape("roundRect", { x: badgeX, y: p.y + 0.36, w: p.badgeW, h: 0.32, fill: { color: "0D1117" }, line: { color: p.color, width: 1 }, rectRadius: 0.08 });
    slide.addText(p.badgeText, {
      x: badgeX,
      y: p.y + 0.36,
      w: p.badgeW,
      h: 0.32,
      fontFace: "Courier New",
      fontSize: 8.5,
      color: p.color,
      align: "center",
      valign: "middle",
      margin: 0
    });
  });

  // Threshold Note at very bottom
  slide.addShape("roundRect", { x: 4.15, y: 4.93, w: 5.5, h: 0.32, fill: { color: "0D1117" }, line: { color: AMBER, width: 1 }, rectRadius: 0.08 });
  slide.addText("Production threshold = 0.51 — chosen over 0.60 to minimize missed attacks", {
    x: 4.3,
    y: 4.93,
    w: 5.2,
    h: 0.32,
    fontFace: "Courier New",
    fontSize: 8.5,
    color: AMBER,
    align: "center",
    valign: "middle",
    margin: 0
  });
}

// ==========================================
// SLIDE 24 — RESULTS, LIMITATIONS & FUTURE WORK
// ==========================================
{
  const slide = pres.addSlide();
  addStandardDecorations(slide, "24", "DEFENS — RESULTS & FUTURE WORK");

  // HEADLINE
  slide.addText([
    { text: "388 Missed Attacks → 91.\n", options: { color: ORANGE } },
    { text: "A 76.5% Reduction.", options: { color: WHITE } }
  ], {
    x: 0.55,
    y: 0.55,
    w: 9.0,
    h: 1.3,
    fontFace: "Calibri",
    fontSize: 28,
    bold: true,
    margin: 0
  });

  // LEFT COLUMN - Chart Label
  slide.addText("IMPACT OF FINE-TUNING — Hard_test.csv (5,000 samples)", {
    x: 0.35,
    y: 1.42,
    w: 5.2,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: ORANGE,
    bold: true,
    charSpacing: 2,
    margin: 0
  });

  // Bar Chart
  const seriesData = [
    { name: "Before Fine-Tuning", labels: ["Accuracy", "F1 Attack", "Attack Recall"], values: [86, 82, 81] },
    { name: "After Fine-Tuning",  labels: ["Accuracy", "F1 Attack", "Attack Recall"], values: [97, 96, 95] }
  ];

  slide.addChart(pres.ChartType.bar, seriesData, {
    x: 0.4,
    y: 1.62,
    w: 5.0,
    h: 1.85,
    chartColors: ["FF2D2D", "00C896"],
    valAxisMinVal: 0,
    valAxisMaxVal: 105,
    showValue: true,
    dataLabelFontSize: 9,
    dataLabelColor: "FFFFFF",
    catAxisLabelFontSize: 9,
    catAxisLabelColor: "8892A4",
    valAxisLabelFontSize: 8,
    valAxisLabelColor: "21262D",
    plotAreaFill: { color: "0D1117" },
    chartArea: { fill: { color: "161B22" }, border: { color: "21262D" } },
    legendPos: "b",
    showLegend: true,
    legendFontSize: 9
  });

  // False Negative (FN) note
  slide.addText([
    { text: "Missed attacks (FN) on Hard_test.csv: ", options: { color: GRAY_TEXT, fontSize: 11 } },
    { text: "388 → 91", options: { color: ORANGE, fontSize: 13, bold: true } },
    { text: " (−76.5%)", options: { color: GRAY_TEXT, fontSize: 11 } }
  ], {
    x: 0.55,
    y: 3.55,
    w: 4.8,
    h: 0.3,
    fontFace: "Calibri",
    margin: 0
  });

  // 3 stat boxes
  const statBoxes = [
    { x: 0.35, val: "99.56%", valSize: 24, label: "F1 — advanced_test", color: GREEN },
    { x: 2.1,  val: "0.993–0.997", valSize: 18, label: "AUC-ROC range", color: TEAL },
    { x: 3.85, val: "0.0666", valSize: 24, label: "ECE Calibration Error", color: AMBER }
  ];

  statBoxes.forEach(b => {
    slide.addShape("roundRect", { x: b.x, y: 3.88, w: 1.6, h: 0.72, fill: { color: GRAY_CARD }, line: { color: b.color, width: 1 }, rectRadius: 0.08 });
    slide.addText(b.val, { x: b.x, y: 3.98, w: 1.6, h: 0.3, fontFace: "Calibri", fontSize: b.valSize, bold: true, color: b.color, align: "center", margin: 0 });
    slide.addText(b.label, { x: b.x, y: 4.4, w: 1.6, h: 0.2, fontFace: "Courier New", fontSize: 7.5, color: GRAY_TEXT, align: "center", margin: 0 });
  });

  // RIGHT COLUMN - Limitations Card
  slide.addShape("roundRect", {
    x: 5.75,
    y: 1.42,
    w: 3.9,
    h: 1.92,
    fill: { color: GRAY_CARD },
    line: { color: RED, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("KEY LIMITATIONS", {
    x: 5.9,
    y: 1.54,
    w: 3.6,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: RED,
    bold: true,
    margin: 0
  });

  const limitBullets = [
    { y: 1.75, text: "▸  Self-Harm boundary: genuine crisis vs. emotional exploitation — hardest gray-zone" },
    { y: 2.1,  text: "▸  Sophisticated indirect attacks (contextual masking, academic disguise) still partially evade" },
    { y: 2.45, text: "▸  English-only · max 128-token · single-turn (no conversation history)" }
  ];

  limitBullets.forEach(b => {
    slide.addText(b.text, {
      x: 5.9,
      y: b.y,
      w: 3.6,
      h: 0.32,
      fontFace: "Calibri",
      fontSize: 10,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });

  // RIGHT COLUMN - Future Work Card
  slide.addShape("roundRect", {
    x: 5.75,
    y: 3.46,
    w: 3.9,
    h: 1.68,
    fill: { color: GRAY_CARD },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("FUTURE WORK", {
    x: 5.9,
    y: 3.58,
    w: 3.6,
    h: 0.2,
    fontFace: "Courier New",
    fontSize: 9,
    color: TEAL,
    bold: true,
    margin: 0
  });

  const futureBullets = [
    { y: 3.78, text: "▸  Multilingual defense (mDeBERTa / XLM-RoBERTa) for non-English & code-mixed attacks" },
    { y: 4.08, text: "▸  Multi-turn / session-level context tracking for gradual trust-building attacks" },
    { y: 4.38, text: "▸  Temperature/Platt calibration scaling + 5-layer hybrid defense-in-depth architecture" }
  ];

  futureBullets.forEach(b => {
    slide.addText(b.text, {
      x: 5.9,
      y: b.y,
      w: 3.6,
      h: 0.28,
      fontFace: "Calibri",
      fontSize: 10,
      color: GRAY_TEXT,
      valign: "top",
      margin: 0
    });
  });
}

// Write presentation to file
pres.writeFile({ fileName: "DEFENS_Slides.pptx" }).then(fileName => {
  console.log(`Successfully generated file: ${fileName}`);
  try {
    console.log("Running rezip.py post-processing...");
    execSync("python3 scripts/rezip.py DEFENS_Slides.pptx", { stdio: "inherit" });
    console.log("Successfully ran rezip.py post-processing.");
  } catch (err) {
    console.error("Error executing rezip.py post-processing:", err);
  }
}).catch(err => {
  console.error("Error writing presentation:", err);
  process.exit(1);
});
