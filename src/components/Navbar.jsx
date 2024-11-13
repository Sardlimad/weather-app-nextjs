import { Button, VStack } from '@chakra-ui/react'
import { faCloudSunRain, faComputer, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Navbar = () => {

  const styles = {
    "margin": "0px",
    "padding": "0px",
  }

  return (
    <VStack bgColor="gray.100" borderRadius="15px" p={1} pt="10px" gap={0}>
      <Button style={styles}>
        <FAI icon={faSun} />
      </Button>
      <Button style={styles}>
        <FAI icon={faComputer}></FAI>
      </Button>
      <Button style={styles}>
        <FAI icon={faMoon}></FAI>
      </Button>
    </VStack>
  )
}
