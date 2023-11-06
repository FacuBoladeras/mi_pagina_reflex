import reflex as rx
from Reflex.components.icon import icon
from Reflex.components.infotext import info_text
from Reflex.components.title import title
from Reflex.estilos.styles import Size as Size
from Reflex.estilos.colors import TextColor, Color



def header() -> rx.Component:
    return rx.vstack(
        
        rx.hstack(            
            rx.avatar(name="Facundo", 
                      size="xl",
                      src="mi_foto.jpg",
                      color=TextColor.HEADER.value,
                      border="4px",
                      border_color= Color.PRIMARY.value),
            rx.vstack(  rx.heading("Facundo Boladeras"),
                        rx.text("""Especialista GIS ● Licenciado en Biología ● Programador python.""",color=TextColor.BODY.value),
                        icon("https://www.linkedin.com/in/facundo-boladeras-382043292/"),
                        width= "100%",            
                        algin_items= "start"),
            width= "100%",            
            algin_items= "start"
),
            
        rx.flex(
            info_text("Email:", "facuboladeras@gmail.com"),
            rx.spacer(),
            info_text("Telefono: ", "3435337888"),
            width="80%"
        ),
        
        rx.text("""Hola 👋, soy licenciado en Biología graduado en la Universidad Autónoma de Entre Ríos. Actualmente estoy realizando estudios de doctorado en el marco de una beca CONICET🔎.
                A lo largo de mi formación profesional fui incorporando diversos conocimientos sobre sistemas de información geográfica como manejo de software QGIS, Google Ertah Engine, etc 🌎🌐.
                Poseo conocimientos en programación python orientados al Data Science y el manejo de bases de datos relacionales y no relacionales 💻.""",
                color=TextColor.BODY.value
                
                ),
        spacing= Size.BIG.value,
        algin_items= "start",
        
    )