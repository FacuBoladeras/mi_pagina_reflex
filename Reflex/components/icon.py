import reflex as rx
import Reflex.estilos.styles as styles

def icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link"
        ),
        href=url,
        is_external= True,
        
    )