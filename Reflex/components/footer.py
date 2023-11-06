import reflex as rx
from Reflex.estilos.styles import Size as Size
from Reflex.estilos.colors import TextColor
from Reflex.components.title import title

def footer() -> rx.Component:
    return rx.vstack(        
            rx.hstack(            
                        rx.vstack(
                                rx.vstack(
                                    rx.text("Analisis GIS"),
                                    rx.image(src= "satelite.png", height=Size.VERYBIG.value),
                                    margin=Size.BIG.value,                                    
                                    )
            ,                   rx.vstack(                    
                                    rx.text("Programacion python"),
                                    rx.image(src= "python.png", height=Size.VERYBIG.value),
                                    margin=Size.BIG.value,
                                    )
            ),
                        rx.vstack(                
                                rx.vstack(
                                    rx.text("Data science"),              
                                    rx.image(src= "ciencia_datos.png", height=Size.VERYBIG.value),
                                    margin=Size.BIG.value,                                    
                                    ),
                                    
                                rx.vstack(
                                    rx.text("Biologia de la conservacion"),                    
                                    rx.image(src= "ambiente.png", height=Size.VERYBIG.value),
                                    margin=Size.BIG.value,                                   
                                    ))

            ),
        
        
        rx.text("Pagina Facundo"),
        margin_bottom=Size.BIG.value,
        color= TextColor.FUTTER.value
        
        
    )