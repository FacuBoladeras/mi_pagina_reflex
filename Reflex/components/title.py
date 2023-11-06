import reflex as rx
import Reflex.estilos.styles as styles

def title(text: str) -> rx.Component:
    return rx.heading(text, 
                    size="lg",
                    style= styles.title_sylte)
                    