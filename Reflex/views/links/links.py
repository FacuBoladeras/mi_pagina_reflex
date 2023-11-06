import reflex as rx
from Reflex.components.linkbutton import linkbutton
from Reflex.components.title import title


def link() -> rx.Component:
    return rx.vstack(
        title("Links de interés"),
        linkbutton("Linkedin", 
                   "Mi perfil profesional",
                   "linkedin.svg",
                   "https://www.linkedin.com/in/facundo-boladeras-382043292/", 
                   ),
        linkbutton("Github", 
                   "Mis proyectos",
                   "github.svg",
                   "https://github.com/FacuBoladeras",
                   
                   ),
        linkbutton("Gmail", 
                   "Mi contacto",
                   "email.svg",
                   "https://www.upwork.com/nx/find-work/best-matches",
                  
                   ),
        title("Skills"),
        width= "100%"        
    )