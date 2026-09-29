import math

def generate_svg():
    # viewBox: 800 x 750
    # Head center: (400, 310)
    lines = []
    
    # 1. Defs & Gradients
    defs = """
  <defs>
    <!-- Smooth 3D Cranium & Face Base Radial Gradient -->
    <radialGradient id="faceBaseGrad" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="14%" stop-color="#E2EDFD" />
      <stop offset="32%" stop-color="#A5C4F7" />
      <stop offset="55%" stop-color="#648DE8" />
      <stop offset="78%" stop-color="#365DBA" />
      <stop offset="92%" stop-color="#203E92" />
      <stop offset="100%" stop-color="#122464" />
    </radialGradient>

    <!-- Neck Volumetric Shading -->
    <linearGradient id="neckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#182E72" />
      <stop offset="25%" stop-color="#2E4FA8" />
      <stop offset="50%" stop-color="#3E65C4" />
      <stop offset="75%" stop-color="#244294" />
      <stop offset="100%" stop-color="#12225C" />
    </linearGradient>

    <!-- Cheekbone Specular Sheen -->
    <radialGradient id="cheekGleam" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85" />
      <stop offset="45%" stop-color="#D6E6FD" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#7299EE" stop-opacity="0" />
    </radialGradient>

    <!-- Eye Socket Cavity -->
    <radialGradient id="eyeSocket" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#122260" stop-opacity="0.75" />
      <stop offset="55%" stop-color="#1E388A" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#4B72D4" stop-opacity="0" />
    </radialGradient>

    <!-- Iris Deep Indigo Gradient -->
    <radialGradient id="irisGrad" cx="42%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="20%" stop-color="#00D2FE" />
      <stop offset="55%" stop-color="#1E40AF" />
      <stop offset="85%" stop-color="#0E1E5C" />
      <stop offset="100%" stop-color="#030822" />
    </radialGradient>

    <!-- Realistic Lips Gradient -->
    <linearGradient id="upperLip" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#355099" />
      <stop offset="60%" stop-color="#4E71C2" />
      <stop offset="100%" stop-color="#263C78" />
    </linearGradient>

    <radialGradient id="lowerLip" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#E2EEFE" />
      <stop offset="35%" stop-color="#8BB0F6" />
      <stop offset="75%" stop-color="#4E72C6" />
      <stop offset="100%" stop-color="#243B78" />
    </radialGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" />
    </filter>
  </defs>
"""

    # Head and Shoulders base silhouettes
    base_bust = """
  <!-- 1. BASE SHOULDERS & DECOLLETE -->
  <path d="M 120 750 
           C 160 620 240 570 330 540 
           C 345 535 348 505 350 445 
           L 450 445 
           C 452 505 455 535 470 540 
           C 560 570 640 620 680 750 Z" 
        fill="url(#neckGrad)" />

  <!-- Clavicle Bone Structure -->
  <path d="M 230 635 Q 330 642 380 615" fill="none" stroke="#A8CBFC" stroke-width="2.5" opacity="0.45" stroke-linecap="round" />
  <path d="M 570 635 Q 470 642 420 615" fill="none" stroke="#A8CBFC" stroke-width="2.5" opacity="0.45" stroke-linecap="round" />

  <!-- 2. REALISTIC SCULPTED HEAD & CRANIUM (Anatomy from Image 2) -->
  <path d="M 400 68 
           C 515 68 550 145 550 255 
           C 550 360 518 425 475 468 
           C 448 495 428 505 400 506 
           C 372 505 352 495 325 468 
           C 282 425 250 360 250 255 
           C 250 145 285 68 400 68 Z" 
        fill="url(#faceBaseGrad)" />

  <!-- Forehead Central Illumination Dome -->
  <ellipse cx="400" cy="180" rx="95" ry="80" fill="#FFFFFF" opacity="0.35" filter="url(#softGlow)" />

  <!-- Cheekbones Specular Highlights -->
  <ellipse cx="325" cy="320" rx="42" ry="26" fill="url(#cheekGleam)" transform="rotate(-15, 325, 320)" />
  <ellipse cx="475" cy="320" rx="42" ry="26" fill="url(#cheekGleam)" transform="rotate(15, 475, 320)" />

  <!-- Chin Specular Light -->
  <circle cx="400" cy="475" r="15" fill="#FFFFFF" opacity="0.45" filter="url(#softGlow)" />

  <!-- 3. REALISTIC SCULPTED EARS (Both sides) -->
  <g id="leftEar" transform="translate(244, 250) scale(-1, 1)">
    <path d="M 0 -40 C 26 -28 28 42 0 76 C -10 68 -10 -30 0 -40 Z" fill="#254299" />
    <path d="M 5 -25 C 18 -15 18 32 2 56" fill="none" stroke="#A8CBFC" stroke-width="1.8" opacity="0.75" />
    <path d="M 8 -5 C 13 6 12 24 6 36" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.5" />
  </g>
  <g id="rightEar" transform="translate(556, 250)">
    <path d="M 0 -40 C 26 -28 28 42 0 76 C -10 68 -10 -30 0 -40 Z" fill="#254299" />
    <path d="M 5 -25 C 18 -15 18 32 2 56" fill="none" stroke="#A8CBFC" stroke-width="1.8" opacity="0.75" />
    <path d="M 8 -5 C 13 6 12 24 6 36" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.5" />
  </g>
"""

    # 4. Generate fine organic neural filaments (hundreds of lines following Image 2 topology)
    neural_lines = ['  <!-- 4. ORGANIC NEURAL CONTOUR FILAMENTS (EXACT TEXTURE FROM IMAGE 2) -->',
                    '  <g stroke="#FFFFFF" stroke-width="0.55" opacity="0.42" fill="none">']

    # Cranium dome contour lines (Vertex flowing down)
    for i in range(12, 100, 3):
        y = 75 + i * 1.5
        w = math.sqrt(max(0, 1 - ((y - 250) / 185) ** 2)) * 148
        # arch
        arch = math.sin(i / 100 * math.pi) * 14
        neural_lines.append(f'    <path d="M {400 - w:.1f} {y:.1f} Q 400 {y - arch:.1f} {400 + w:.1f} {y:.1f}" />')

    # Forehead flowing contours
    for i in range(1, 24):
        y = 220 + i * 3.5
        w = 145 - (i * 0.8)
        neural_lines.append(f'    <path d="M {400 - w:.1f} {y:.1f} C 360 {y - 4:.1f} 440 {y - 4:.1f} {400 + w:.1f} {y:.1f}" />')

    # Periorbital & Cheek contours
    for i in range(1, 32):
        y = 300 + i * 4.2
        # Left cheek sweep
        w_left = 135 - i * 2.2
        neural_lines.append(f'    <path d="M {400 - w_left:.1f} {y:.1f} C 320 {y + 6:.1f} 370 {y + 2:.1f} 390 {y:.1f}" />')
        # Right cheek sweep
        neural_lines.append(f'    <path d="M 410 {y:.1f} C 430 {y + 2:.1f} 480 {y + 6:.1f} {400 + w_left:.1f} {y:.1f}" />')

    # Jaw & Chin concentric pad
    for i in range(1, 16):
        r = 12 + i * 3.8
        neural_lines.append(f'    <path d="M {400 - r:.1f} {465 + i * 2:.1f} Q 400 {465 + i * 2.8:.1f} {400 + r:.1f} {465 + i * 2:.1f}" />')

    # Neck vertical-diagonal flowing dendritic fibers (Signature from Image 2)
    for x in range(-55, 60, 5):
        curve_factor = x / 60.0
        neural_lines.append(f'    <path d="M {400 + x * 0.8:.1f} 450 C {400 + x * 1.1:.1f} 510 {400 + x * 1.6:.1f} 580 {400 + x * 2.5:.1f} 660 C {400 + x * 3.2:.1f} 700 {400 + x * 4.5:.1f} 730 {400 + x * 5.8:.1f} 750" />')

    # Shoulder fanning fiber strands
    for s in range(1, 18):
        offset = s * 16
        neural_lines.append(f'    <path d="M 340 540 C 280 570 200 620 {140 - offset * 0.4:.1f} 750" />')
        neural_lines.append(f'    <path d="M 460 540 C 520 570 600 620 {660 + offset * 0.4:.1f} 750" />')

    neural_lines.append('  </g>')

    # 5. Facial Features (Almond Eyes, Sculpted Nose, Feminine Lips from Image 2)
    facial_features = """
  <!-- 5. REALISTIC FACIAL FEATURES (IMAGE 2 SOURCE OF TRUTH) -->
  
  <!-- Left Eye & Orbit -->
  <g id="leftEyeGroup" transform="translate(340, 275)">
    <ellipse cx="0" cy="0" rx="36" ry="24" fill="url(#eyeSocket)" />
    <!-- Eyebrow with natural feminine arch & fibers -->
    <path d="M -30 -20 C -14 -30 16 -28 32 -18" fill="none" stroke="#12235E" stroke-width="3.2" stroke-linecap="round" />
    <path d="M -28 -19 C -12 -28 14 -26 30 -17" fill="none" stroke="#DCE8FD" stroke-width="1.2" stroke-linecap="round" opacity="0.85" />
    <!-- Upper Eyelid Crease (Double Fold) -->
    <path d="M -28 -10 C -12 -22 14 -22 30 -9" fill="none" stroke="#223B82" stroke-width="1.4" opacity="0.75" />
    <!-- Sclera -->
    <path d="M -32 0 C -16 -14 16 -14 32 0 C 16 13 -16 13 -32 0 Z" fill="#F8FAFD" />
    <path d="M -32 0 C -16 -12 16 -12 32 0" fill="none" stroke="#C5D7F2" stroke-width="2" />
    <!-- Inner Tear Duct (Caruncle) -->
    <circle cx="31" cy="0" r="2.5" fill="#E8B0B8" opacity="0.75" />
    <!-- Iris -->
    <circle cx="0" cy="0" r="12.5" fill="url(#irisGrad)" />
    <circle cx="0" cy="0" r="12.5" fill="none" stroke="#050E2E" stroke-width="1.2" />
    <!-- Pupil -->
    <circle cx="0" cy="0" r="5.5" fill="#020412" />
    <!-- Specular Corneal Highlights -->
    <circle cx="-3.5" cy="-4" r="2.8" fill="#FFFFFF" />
    <circle cx="4" cy="3.5" r="1.4" fill="#FFFFFF" opacity="0.8" />
    <!-- Eyelash Line -->
    <path d="M -32 0 C -16 -15 16 -15 32 0" fill="none" stroke="#08102E" stroke-width="2.4" stroke-linecap="round" />
    <path d="M -30 0 C -14 10 14 10 30 0" fill="none" stroke="#3A599C" stroke-width="1" opacity="0.6" />
  </g>

  <!-- Right Eye & Orbit -->
  <g id="rightEyeGroup" transform="translate(460, 275)">
    <ellipse cx="0" cy="0" rx="36" ry="24" fill="url(#eyeSocket)" />
    <!-- Eyebrow -->
    <path d="M -32 -18 C -16 -28 14 -30 30 -20" fill="none" stroke="#12235E" stroke-width="3.2" stroke-linecap="round" />
    <path d="M -30 -17 C -14 -26 12 -28 28 -19" fill="none" stroke="#DCE8FD" stroke-width="1.2" stroke-linecap="round" opacity="0.85" />
    <!-- Upper Eyelid Crease -->
    <path d="M -30 -9 C -14 -22 12 -22 28 -10" fill="none" stroke="#223B82" stroke-width="1.4" opacity="0.75" />
    <!-- Sclera -->
    <path d="M -32 0 C -16 -14 16 -14 32 0 C 16 13 -16 13 -32 0 Z" fill="#F8FAFD" />
    <path d="M -32 0 C -16 -12 16 -12 32 0" fill="none" stroke="#C5D7F2" stroke-width="2" />
    <!-- Inner Tear Duct -->
    <circle cx="-31" cy="0" r="2.5" fill="#E8B0B8" opacity="0.75" />
    <!-- Iris -->
    <circle cx="0" cy="0" r="12.5" fill="url(#irisGrad)" />
    <circle cx="0" cy="0" r="12.5" fill="none" stroke="#050E2E" stroke-width="1.2" />
    <!-- Pupil -->
    <circle cx="0" cy="0" r="5.5" fill="#020412" />
    <!-- Specular Corneal Highlights -->
    <circle cx="-3.5" cy="-4" r="2.8" fill="#FFFFFF" />
    <circle cx="4" cy="3.5" r="1.4" fill="#FFFFFF" opacity="0.8" />
    <!-- Eyelash Line -->
    <path d="M -32 0 C -16 -15 16 -15 32 0" fill="none" stroke="#08102E" stroke-width="2.4" stroke-linecap="round" />
    <path d="M -30 0 C -14 10 14 10 30 0" fill="none" stroke="#3A599C" stroke-width="1" opacity="0.6" />
  </g>

  <!-- Slender Sculpted Nose (Exact from Image 2) -->
  <g id="noseGroup" transform="translate(400, 270)">
    <!-- Lateral Bridge Shading -->
    <path d="M -7 5 C -5 35 -10 60 -15 80" fill="none" stroke="#2A4894" stroke-width="3" opacity="0.35" />
    <path d="M 7 5 C 5 35 10 60 15 80" fill="none" stroke="#2A4894" stroke-width="3" opacity="0.35" />
    <!-- Dorsal Specular Ridge -->
    <path d="M 0 10 L 0 75" fill="none" stroke="#FFFFFF" stroke-width="3.5" opacity="0.8" stroke-linecap="round" filter="url(#softGlow)" />
    <path d="M 0 15 L 0 70" fill="none" stroke="#FFFFFF" stroke-width="1.8" opacity="0.95" stroke-linecap="round" />
    <!-- Tip Highlight -->
    <ellipse cx="0" cy="80" rx="7.5" ry="6" fill="#FFFFFF" opacity="0.85" />
    <!-- Nostrils (Natural Refined Curvature) -->
    <path d="M -15 82 C -13 77 -8 79 -5 85 C -2 88 -13 89 -15 82 Z" fill="#0E1C48" />
    <path d="M 15 82 C 13 77 8 79 5 85 C 2 88 13 89 15 82 Z" fill="#0E1C48" />
    <!-- Philtrum -->
    <path d="M -3 92 L -2 108" stroke="#486BB8" stroke-width="1.2" opacity="0.5" />
    <path d="M 3 92 L 2 108" stroke="#486BB8" stroke-width="1.2" opacity="0.5" />
  </g>

  <!-- Sculpted Feminine Lips (Cupid's bow, Plump lower lip from Image 2) -->
  <g id="lipsGroup" transform="translate(400, 395)">
    <!-- Upper Lip -->
    <path d="M -30 0 
             C -18 -10 -9 -9 0 -3 
             C 9 -9 18 -10 30 0 
             C 18 4 0 5 0 5 
             C 0 5 -18 4 -30 0 Z" 
          fill="url(#upperLip)" />
    <!-- Lower Lip with Specular Highlight -->
    <path d="M -28 1 
             C -18 19 18 19 28 1 
             C 16 4 -16 4 -28 1 Z" 
          fill="url(#lowerLip)" />
    <!-- Fissure line -->
    <path d="M -29 0 C -14 2 14 2 29 0" fill="none" stroke="#122054" stroke-width="1.8" stroke-linecap="round" />
    <!-- Lower Lip Specular Pill -->
    <ellipse cx="0" cy="10" rx="9" ry="4" fill="#FFFFFF" opacity="0.8" />
    <ellipse cx="0" cy="10" rx="6" ry="2.5" fill="#FFFFFF" />
    <!-- Mentolabial Shadow under lip -->
    <path d="M -18 24 C -9 30 9 30 18 24" fill="none" stroke="#1B3378" stroke-width="2.6" opacity="0.4" stroke-linecap="round" />
  </g>
"""

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 750" width="100%" height="100%">
{defs}
{base_bust}
{''.join(neural_lines)}
{facial_features}
</svg>"""

    with open('/public/images/spheno-voice-humanoid.svg', 'w') as f:
        f.write(svg)
    print("SVG generated successfully!")

generate_svg()
