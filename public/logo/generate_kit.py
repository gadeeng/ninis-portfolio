#!/usr/bin/env python3
"""Generate complete master assets for Nisrina Zalfa Qarirah (Potential Flux).
Outputs:
- master/symbol.svg & master/symbol-color.svg
- master/wordmark.svg
- master/lockup-horizontal.svg & master/lockup-horizontal-color.svg
- master/lockup-stacked.svg & master/lockup-stacked-color.svg
"""

import os
import math
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties
from matplotlib.path import Path

BASE_DIR = r"d:\Kuliah\Mini Project\logo-design-skill\nisrina-v2-logo-kit"
MASTER_DIR = os.path.join(BASE_DIR, "master")

BRAND_COBALT = "#0A47B8"   # Primary: Cobalt Flux (AAA accessible on white)
BRAND_OBSIDIAN = "#0F172A" # Dark Slate / Matter
BRAND_MUTED = "#64748B"    # Technical descriptor grey
BRAND_WHITE = "#FFFFFF"

# -------------------------------------------------------------
# 1. Symbol Path (Potential Flux)
# -------------------------------------------------------------
SYMBOL_PATH_D = (
    "M 68 38 "
    "L 102 38 "
    "L 162 164 "
    "C 174 124 174 80 154 38 "
    "L 188 38 "
    "C 222 90 222 166 188 218 "
    "L 154 218 "
    "L 94 92 "
    "C 82 132 82 176 102 218 "
    "L 68 218 "
    "C 34 166 34 90 68 38 "
    "Z"
)

def make_symbol_svg(color="#000000", title="Nisrina Zalfa Qarirah Symbol"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>{title}</title>
  <path d="{SYMBOL_PATH_D}" fill="{color}"/>
</svg>'''

# -------------------------------------------------------------
# 2. Text to Vector Path Helper (No <text> tags, pure curves)
# -------------------------------------------------------------
def text_to_svg_path(text, x, y, size, family='Segoe UI', weight='bold', letter_spacing=0):
    fp = FontProperties(family=family, weight=weight)
    cur_x = x
    d_segments = []
    
    for char in text:
        if char == ' ':
            cur_x += size * 0.35
            continue
        tp = TextPath((0, 0), char, size=size, prop=fp)
        char_w = tp.get_extents().width if len(tp.vertices) > 0 else (size * 0.3)
        # iter segments
        for verts, code in tp.iter_segments():
            if code == Path.MOVETO:
                d_segments.append(f"M {cur_x + verts[0]:.2f} {y - verts[1]:.2f}")
            elif code == Path.LINETO:
                d_segments.append(f"L {cur_x + verts[0]:.2f} {y - verts[1]:.2f}")
            elif code == Path.CURVE3:
                d_segments.append(f"Q {cur_x + verts[0]:.2f} {y - verts[1]:.2f} {cur_x + verts[2]:.2f} {y - verts[3]:.2f}")
            elif code == Path.CURVE4:
                d_segments.append(f"C {cur_x + verts[0]:.2f} {y - verts[1]:.2f} {cur_x + verts[2]:.2f} {y - verts[3]:.2f} {cur_x + verts[4]:.2f} {y - verts[5]:.2f}")
            elif code == Path.CLOSEPOLY:
                d_segments.append("Z")
        cur_x += char_w + letter_spacing
        
    return " ".join(d_segments), (cur_x - x)

# -------------------------------------------------------------
# 3. Horizontal Lockup (Optically Centered)
# -------------------------------------------------------------
def make_lockup_horizontal(symbol_color="#000000", text_primary="#000000", text_secondary="#000000"):
    # Symbol: 150x150 at x=44, y=53 (optically centered vertically in 256 height)
    # Content: Symbol (44 to 194), gap 36px, text starts at x=230
    # Text: Name ~380px wide -> ends at x=610.
    # Total content width: 610 - 44 = 566px.
    # ViewBox width: 654 -> Left margin: 44, Right margin: 44! Perfectly balanced!
    
    path_name, w_name = text_to_svg_path("NISRINA ZALFA QARIRAH", 230, 122, 33, family='Segoe UI', weight='bold', letter_spacing=1.8)
    path_desc, w_desc = text_to_svg_path("MATERIALS PHYSICS", 232, 162, 18, family='Segoe UI', weight='normal', letter_spacing=4.6)
    
    total_w = 660
    
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_w} 256" width="{total_w}" height="256">
  <title>Nisrina Zalfa Qarirah — Horizontal Lockup</title>
  <!-- Symbol (150x150 scaled at x=44, y=53) -->
  <g transform="translate(44, 53) scale(0.5859375)">
    <path d="{SYMBOL_PATH_D}" fill="{symbol_color}"/>
  </g>
  <!-- Wordmark -->
  <path d="{path_name}" fill="{text_primary}"/>
  <!-- Descriptor -->
  <path d="{path_desc}" fill="{text_secondary}"/>
</svg>'''
    return svg

# -------------------------------------------------------------
# 4. Stacked Lockup (Optically Centered)
# -------------------------------------------------------------
def make_lockup_stacked(symbol_color="#000000", text_primary="#000000", text_secondary="#000000"):
    # Canvas: 460 x 460
    # Measure text widths:
    dummy_path, w_name = text_to_svg_path("NISRINA ZALFA QARIRAH", 0, 0, 26, family='Segoe UI', weight='bold', letter_spacing=1.6)
    dummy_desc, w_desc = text_to_svg_path("MATERIALS PHYSICS", 0, 0, 16, family='Segoe UI', weight='normal', letter_spacing=4.2)
    
    canvas_size = 460
    x_name = round((canvas_size - w_name) / 2)
    x_desc = round((canvas_size - w_desc) / 2)
    
    # Vertically balanced:
    # Symbol height: 180 (from y=46 to y=226)
    # Name at y=298
    # Descriptor at y=340
    # Bottom margin: 460 - 340 = 120 (optically weighted slightly above geometric center)
    path_name, _ = text_to_svg_path("NISRINA ZALFA QARIRAH", x_name, 304, 26, family='Segoe UI', weight='bold', letter_spacing=1.6)
    path_desc, _ = text_to_svg_path("MATERIALS PHYSICS", x_desc, 348, 16, family='Segoe UI', weight='normal', letter_spacing=4.2)
    
    scale_sym = 170 / 256
    trans_x = round((canvas_size - 170) / 2)
    trans_y = 52
    
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {canvas_size} {canvas_size}" width="{canvas_size}" height="{canvas_size}">
  <title>Nisrina Zalfa Qarirah — Stacked Lockup</title>
  <!-- Symbol Centered -->
  <g transform="translate({trans_x}, {trans_y}) scale({scale_sym})">
    <path d="{SYMBOL_PATH_D}" fill="{symbol_color}"/>
  </g>
  <!-- Wordmark Centered -->
  <path d="{path_name}" fill="{text_primary}"/>
  <!-- Descriptor Centered -->
  <path d="{path_desc}" fill="{text_secondary}"/>
</svg>'''
    return svg

# -------------------------------------------------------------
# 5. Standalone Wordmark (Optically Centered)
# -------------------------------------------------------------
def make_wordmark(text_primary="#000000", text_secondary="#000000"):
    # Text width ~380px.
    # Canvas: 440 x 140
    dummy_path, w_name = text_to_svg_path("NISRINA ZALFA QARIRAH", 0, 0, 31, family='Segoe UI', weight='bold', letter_spacing=1.8)
    dummy_desc, w_desc = text_to_svg_path("MATERIALS PHYSICS", 0, 0, 17, family='Segoe UI', weight='normal', letter_spacing=4.4)
    
    x_name = round((440 - w_name) / 2)
    x_desc = round((440 - w_desc) / 2)
    
    path_name, _ = text_to_svg_path("NISRINA ZALFA QARIRAH", x_name, 68, 31, family='Segoe UI', weight='bold', letter_spacing=1.8)
    path_desc, _ = text_to_svg_path("MATERIALS PHYSICS", x_desc, 106, 17, family='Segoe UI', weight='normal', letter_spacing=4.4)
    
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 140" width="440" height="140">
  <title>Nisrina Zalfa Qarirah Wordmark</title>
  <path d="{path_name}" fill="{text_primary}"/>
  <path d="{path_desc}" fill="{text_secondary}"/>
</svg>'''
    return svg


if __name__ == "__main__":
    files = {
        "symbol.svg": make_symbol_svg("#000000"),
        "symbol-color.svg": make_symbol_svg(BRAND_COBALT, "Nisrina Zalfa Qarirah Symbol (Cobalt Flux)"),
        "lockup-horizontal.svg": make_lockup_horizontal("#000000", "#000000", "#000000"),
        "lockup-horizontal-color.svg": make_lockup_horizontal(BRAND_COBALT, BRAND_OBSIDIAN, BRAND_MUTED),
        "lockup-stacked.svg": make_lockup_stacked("#000000", "#000000", "#000000"),
        "lockup-stacked-color.svg": make_lockup_stacked(BRAND_COBALT, BRAND_OBSIDIAN, BRAND_MUTED),
        "wordmark.svg": make_wordmark("#000000", "#000000"),
    }
    
    for fname, content in files.items():
        fpath = os.path.join(MASTER_DIR, fname)
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print("Generated master:", fname)
