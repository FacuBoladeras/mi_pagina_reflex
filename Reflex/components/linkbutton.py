import reflex as rx
import Reflex.estilos.styles as styles
from Reflex.estilos.styles import Size as Size

def linkbutton(title: str, body: str, image: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            
            rx.hstack(
                rx.image(
                    src=image,
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    align_items="start",
                    spacing=Size.SMALL.value,
                    padding_y=Size.SMALL.value
                ),
            ), 
        ),
        
        href=url,
        is_external=True,
        width="100%"
    )
