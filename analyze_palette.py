from PIL import Image
from collections import Counter

img_path = r'C:\Users\acer\Downloads\WhatsApp Image 2026-07-11 at 2.51.56 PM.jpeg'
img = Image.open(img_path).convert('RGBA')
img = img.resize((220, 220))

colors = Counter()
for r, g, b, a in img.getdata():
    if a < 200:
        continue
    key = (round(r/25)*25, round(g/25)*25, round(b/25)*25)
    colors[key] += 1

for (r, g, b), count in colors.most_common(15):
    print(f'{r:3d},{g:3d},{b:3d},{count}')
