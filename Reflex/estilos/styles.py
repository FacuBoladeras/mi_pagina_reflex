from enum import Enum
import reflex as rx
from Reflex.estilos.colors import Color, TextColor
from Reflex.estilos.fonts import Font

#constantes
MAX_WIDTH = "600px"

#sizes

class Size(Enum):
    ZERO="0em"
    SMALL="0.5em"
    MEDIUM="0.8em"
    DEFAULT="1em"
    BIG="2em"
    BIGBIG ="4em"
    VERYBIG="8em"
    
#styles

BASE_STYLE = {
    "background_color" : Color.BACKGROUND.value,
    "font_family": Font.DEFAULT.value,
    
    rx.Heading: {
      "size": "lg",
      "color": TextColor.HEADER.value,
      "font_family": Font.TITLE.value
    },
    
    rx.Button: {        
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color":TextColor.HEADER.value,
        "background_color" : Color.CONTENT.value,
        "_hover": { "background_color" : Color.SECONDARY.value}
        
    },
    rx.Link: { 
        "text_decoration": "none",
        "_hover": {}
               }
    
}

navbar_style = dict(
    font_family=Font.LOGO.value,
    font_size = Size.BIG.value
    
)
title_sylte = dict(
        width="100%",
        padding_top=Size.DEFAULT.value,
        font_size=Size.BIG.value
                
    
)

button_title_style = dict(
    font_family= Font.TITLE.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.HEADER.value
)

button_body_style = dict(
    font_size = Size.MEDIUM.value,
    color=TextColor.BODY.value
)