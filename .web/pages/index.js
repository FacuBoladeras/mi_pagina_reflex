import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import { LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "2em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Mi `}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`portfolio`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack spacing={`2em`} sx={{"alginItems": "start"}}>
  <HStack sx={{"width": "100%", "alginItems": "start"}}>
  <Avatar name={`Facundo`} size={`xl`} src={`mi_foto.jpg`} sx={{"color": "#F1F2F4", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack sx={{"width": "100%", "alginItems": "start"}}>
  <Heading sx={{"size": "lg", "color": "#F1F2F4", "fontFamily": "Popins-Bold"}}>
  {`Facundo Boladeras`}
</Heading>
  <Text sx={{"color": "#C3C7CB"}}>
  {`Especialista GIS ● Licenciado en Biología ● Programador python.`}
</Text>
  <Link as={NextLink} href={`https://www.linkedin.com/in/facundo-boladeras-382043292/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</VStack>
</HStack>
  <Flex sx={{"width": "80%"}}>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "#14A1F0"}}>
  {`Email:`}
</Text>
  {` facuboladeras@gmail.com`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "#14A1F0"}}>
  {`Telefono: `}
</Text>
  {` 3435337888`}
</Box>
</Flex>
  <Text sx={{"color": "#C3C7CB"}}>
  {`Hola 👋, soy licenciado en Biología graduado en la Universidad Autónoma de Entre Ríos. Actualmente estoy realizando estudios de doctorado en el marco de una beca CONICET🔎.
                A lo largo de mi formación profesional fui incorporando diversos conocimientos sobre sistemas de información geográfica como manejo de software QGIS, Google Ertah Engine, etc 🌎🌐.
                Poseo conocimientos en programación python orientados al Data Science y el manejo de bases de datos relacionales y no relacionales 💻.`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "fontSize": "2em", "size": "lg", "color": "#F1F2F4", "fontFamily": "Popins-Bold"}}>
  {`Links de interés`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/in/facundo-boladeras-382043292/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Popins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi perfil profesional`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/FacuBoladeras`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`github.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Popins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.upwork.com/nx/find-work/best-matches`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`email.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Popins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Gmail`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi contacto`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "fontSize": "2em", "size": "lg", "color": "#F1F2F4", "fontFamily": "Popins-Bold"}}>
  {`Skills`}
</Heading>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em", "color": "#A3ABB2"}}>
  <HStack>
  <VStack>
  <VStack sx={{"margin": "2em"}}>
  <Text>
  {`Analisis GIS`}
</Text>
  <Image src={`satelite.png`} sx={{"height": "8em"}}/>
</VStack>
  <VStack sx={{"margin": "2em"}}>
  <Text>
  {`Programacion python`}
</Text>
  <Image src={`python.png`} sx={{"height": "8em"}}/>
</VStack>
</VStack>
  <VStack>
  <VStack sx={{"margin": "2em"}}>
  <Text>
  {`Data science`}
</Text>
  <Image src={`ciencia_datos.png`} sx={{"height": "8em"}}/>
</VStack>
  <VStack sx={{"margin": "2em"}}>
  <Text>
  {`Biologia de la conservacion`}
</Text>
  <Image src={`ambiente.png`} sx={{"height": "8em"}}/>
</VStack>
</VStack>
</HStack>
  <Text>
  {`Pagina Facundo`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
