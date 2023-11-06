import reflex as rx
import Reflex.estilos.styles as styles
from Reflex.estilos.colors import Color, TextColor


def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(
            title, 
            font_weigth="bold", 
            color=Color.PRIMARY.value),
        f" {body}", 
        font_size= styles.Size.DEFAULT.value,
        color=TextColor.BODY.value
    )