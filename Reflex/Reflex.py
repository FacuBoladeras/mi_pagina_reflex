import reflex as rx
from Reflex.components.navbar import navbar
from Reflex.components.footer import footer
from Reflex.views.header.header import header
from Reflex.views.links.links import link
import Reflex.estilos.styles as styles
from Reflex.estilos.styles import Size as Size

class State(rx.State):
    "probando"


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
        rx.vstack(
                    
            header(),
            link(),
            max_width = styles.MAX_WIDTH,
            width="100%",
            margin_y= Size.BIG.value
        
        )), 
        footer()             
    )







app = rx.App(
    style= styles.BASE_STYLE
)
app.add_page(index)
app.compile()