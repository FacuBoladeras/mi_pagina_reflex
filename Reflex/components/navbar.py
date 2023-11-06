import reflex as rx
import Reflex.estilos.styles as styles
from Reflex.estilos.styles import Size as Size
from Reflex.estilos.colors import TextColor, Color




def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("Mi ", color=Color.PRIMARY.value),
            rx.span("portfolio", color=Color.SECONDARY.value),
            style=styles.navbar_style
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )