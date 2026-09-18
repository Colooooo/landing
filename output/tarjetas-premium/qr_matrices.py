import json
from pathlib import Path
from reportlab.graphics.barcode.qrencoder import QRCode, QRErrorCorrectLevel
urls=['https://cafeteria-sage-three.vercel.app/','https://barberia-ruddy.vercel.app/','https://ferreteria-9kgk4zxjm-colooooos-projects.vercel.app/']
result=[]
for url in urls:
    qr=QRCode(None,QRErrorCorrectLevel.M)
    qr.addData(url); qr.make()
    result.append({'url':url,'modules':qr.modules})
Path(__file__).with_name('qr-matrices.json').write_text(json.dumps(result))
