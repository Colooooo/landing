from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from pypdf import PdfReader

OUT = Path(__file__).parent
W, H = 90*mm, 50*mm
c = canvas.Canvas(str(OUT/'tarjetas-negocios-9x5cm.pdf'), pagesize=(W,H))
c.setTitle('Tarjetas de presentación | Café Aurora · King Barber Studio · El Galpón')

def box(x,y,w,h,color):
    c.setFillColor(HexColor(color)); c.rect(x*mm,y*mm,w*mm,h*mm,fill=1,stroke=0)
def txt(x,y,text,size=8,font='Helvetica',color='#222222'):
    c.setFillColor(HexColor(color)); c.setFont(font,size); c.drawString(x*mm,y*mm,text)
def line(x,y,x2,y2,color,width=.5):
    c.setStrokeColor(HexColor(color)); c.setLineWidth(width); c.line(x*mm,y*mm,x2*mm,y2*mm)
def qr(url,x,y,size=24):
    # Four-module quiet zone is included by the QR widget.
    q=QrCodeWidget(url,barLevel='M'); b=q.getBounds(); s=size*mm
    d=Drawing(s,s,transform=[s/(b[2]-b[0]),0,0,s/(b[3]-b[1]),0,0]); d.add(q)
    box(x,y,size,size,'#ffffff'); renderPDF.draw(d,c,x*mm,y*mm)
    c.linkURL(url,(x*mm,y*mm,(x+size)*mm,(y+size)*mm),relative=0)

# Café Aurora: warm editorial typography and a fine sunrise motif.
box(0,0,90,50,'#F5EFE3'); box(60,0,30,50,'#243C32')
txt(6,42,'CAFÉ DE ESPECIALIDAD',6.5,'Helvetica-Bold','#52634D')
c.setStrokeColor(HexColor('#C49B56')); c.setLineWidth(1)
c.arc(6*mm,31*mm,14*mm,39*mm,0,180)
line(5,35,15,35,'#C49B56',.6)
txt(6,26,'Café Aurora',24,'Times-Roman','#243C32')
txt(6,19,'Granos seleccionados.',8,color='#52634D')
txt(6,14.5,'Experiencia artesanal.',8,color='#52634D')
line(6,10,53,10,'#C49B56')
txt(6,6,'MONTEVIDEO',6.5,'Helvetica-Bold','#243C32')
qr('https://cafeteria-sage-three.vercel.app/',63,15)
txt(65,9,'EXPLORÁ EL MENÚ',6,'Helvetica-Bold','#F5EFE3')
c.showPage()

# King Barber: monochrome, precise spacing and a silver frame.
box(0,0,90,50,'#111111')
c.setStrokeColor(HexColor('#626262')); c.setLineWidth(.5); c.rect(3*mm,3*mm,84*mm,44*mm)
txt(7,39,'K I N G',26,'Helvetica','#FFFFFF')
txt(7,31,'B A R B E R',12,'Helvetica','#FFFFFF')
txt(7,25,'S T U D I O',7,'Helvetica','#BDBDBD')
line(7,20,48,20,'#888888')
txt(7,13,'Tu próximo corte,',8,color='#E2E2E2')
txt(7,8.5,'a un escaneo.',8,color='#E2E2E2')
qr('https://barberia-ruddy.vercel.app/',60,17,24)
txt(61,11,'AGENDÁ TU TURNO',6.5,'Helvetica-Bold','#FFFFFF')
c.showPage()

# El Galpón: original logo, industrial orange and strong contrast.
box(0,0,90,50,'#F8F6F0'); box(0,0,90,11,'#D96A00'); box(58,11,32,39,'#202326')
c.drawImage(str(OUT.parents[2]/'Ferreteria/src/assets/logoelgalpon.png'),5*mm,24*mm,width=48*mm,height=24*mm,mask='auto',preserveAspectRatio=True,anchor='c')
txt(6,19,'Soluciones para tu obra.',10,'Helvetica-Bold','#202326')
txt(6,14.5,'Productos y asesoramiento.',7,color='#555555')
txt(6,4.5,'MONTEVIDEO · DESDE 1992',7,'Helvetica-Bold','#FFFFFF')
qr('https://ferreteria-9kgk4zxjm-colooooos-projects.vercel.app/',61,19,26)
txt(62,14,'VER PRODUCTOS',6.5,'Helvetica-Bold','#FFFFFF')
c.showPage(); c.save()

pdf=PdfReader(OUT/'tarjetas-negocios-9x5cm.pdf')
assert len(pdf.pages)==3
for page in pdf.pages:
    assert abs(float(page.mediabox.width)-W)<.01 and abs(float(page.mediabox.height)-H)<.01
print('Verified: 3 pages, each 90 x 50 mm.')
