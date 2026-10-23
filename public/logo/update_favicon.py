#!/usr/bin/env python3
"""Build customized favicon with Cobalt Flux Blue (#0A47B8) background and White (#FFFFFF) N mark.
Produces:
- favicon.svg
- favicon.ico (16, 32, 48 px multi-resolution)
- favicon-16.png, favicon-32.png, favicon-48.png
- apple-touch-icon.png (180px)
- icon-192.png, icon-512.png, maskable-512.png
"""

import os
import sys

# Add skills/logo-design/scripts to sys.path
SCRIPT_DIR = r"d:\Kuliah\Mini Project\logo-design-skill\skills\logo-design\scripts"
sys.path.insert(0, SCRIPT_DIR)
import render_png

BASE_DIR = r"d:\Kuliah\Mini Project\logo-design-skill\nisrina-v2-logo-kit"
WEB_ICONS_DIR = os.path.join(BASE_DIR, "web-icons")
VARIANTS_SYMBOL_DIR = os.path.join(BASE_DIR, "variants", "symbol")

BRAND_COBALT = "#0A47B8"
BRAND_WHITE = "#FFFFFF"

# Symbol Path (Potential Flux)
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

def make_favicon_svg(corner_radius=44):
    """Square/squircle tile with Cobalt Flux BG and pure White Potential Flux N."""
    rx_attr = f'rx="{corner_radius}"' if corner_radius > 0 else ''
    # Symbol scaled ~82% and centered:
    # 256 * (1 - 0.82) / 2 = 23.04
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>Nisrina Zalfa Qarirah Favicon</title>
  <!-- Background Container Tile -->
  <rect width="256" height="256" {rx_attr} fill="{BRAND_COBALT}"/>
  <!-- White Potential Flux Mark -->
  <g transform="translate(23.04, 23.04) scale(0.82)">
    <path d="{SYMBOL_PATH_D}" fill="{BRAND_WHITE}"/>
  </g>
</svg>'''
    return svg

def main():
    fav_svg_content = make_favicon_svg(corner_radius=48)
    fav_svg_path = os.path.join(WEB_ICONS_DIR, "favicon.svg")
    with open(fav_svg_path, "w", encoding="utf-8") as f:
        f.write(fav_svg_content)
    print("Wrote", fav_svg_path)
    
    # Also write to variants/symbol
    var_fav_svg_path = os.path.join(VARIANTS_SYMBOL_DIR, "symbol-favicon.svg")
    with open(var_fav_svg_path, "w", encoding="utf-8") as f:
        f.write(fav_svg_content)
    print("Wrote", var_fav_svg_path)

    # Render PNGs at 16, 32, 48, 180, 192, 512
    sizes = [
        (16, "favicon-16.png"),
        (32, "favicon-32.png"),
        (48, "favicon-48.png"),
        (180, "apple-touch-icon.png"),
        (192, "icon-192.png"),
        (512, "icon-512.png"),
    ]
    
    png_paths_for_ico = []
    for sz, fname in sizes:
        dst = os.path.join(WEB_ICONS_DIR, fname)
        render_png.render(fav_svg_path, dst, sz, sz)
        print(f"Rendered {dst} ({sz}x{sz})")
        
        # Also copy into variants/symbol
        var_dst = os.path.join(VARIANTS_SYMBOL_DIR, fname)
        with open(dst, "rb") as r, open(var_dst, "wb") as w:
            w.write(r.read())
            
        if sz in (16, 32, 48):
            png_paths_for_ico.append(dst)
            
    # Also render maskable (slightly more padded for Android maskable icon)
    mask_svg_content = make_favicon_svg(corner_radius=0) # maskable uses 0 radius and gets cropped by OS
    # Scale to ~65% to guarantee within 80% safe zone
    mask_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <title>Nisrina Zalfa Qarirah Maskable Icon</title>
  <rect width="256" height="256" fill="{BRAND_COBALT}"/>
  <g transform="translate(44.8, 44.8) scale(0.65)">
    <path d="{SYMBOL_PATH_D}" fill="{BRAND_WHITE}"/>
  </g>
</svg>'''
    mask_svg_path = os.path.join(WEB_ICONS_DIR, "maskable-temp.svg")
    with open(mask_svg_path, "w", encoding="utf-8") as f:
        f.write(mask_svg)
    mask_dst = os.path.join(WEB_ICONS_DIR, "maskable-512.png")
    render_png.render(mask_svg_path, mask_dst, 512, 512)
    os.remove(mask_svg_path)
    # copy to variants
    with open(mask_dst, "rb") as r, open(os.path.join(VARIANTS_SYMBOL_DIR, "maskable-512.png"), "wb") as w:
        w.write(r.read())
    print("Rendered maskable-512.png")

    # Build favicon.ico (multi-res 16, 32, 48)
    ico_dst = os.path.join(WEB_ICONS_DIR, "favicon.ico")
    render_png.write_ico(png_paths_for_ico, ico_dst)
    print("Wrote multi-res ICO:", ico_dst)
    with open(ico_dst, "rb") as r, open(os.path.join(VARIANTS_SYMBOL_DIR, "favicon.ico"), "wb") as w:
        w.write(r.read())

if __name__ == "__main__":
    main()
