import React from 'react'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'


class NewsletterSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>

        <Flex
          className='doughnut-row'
          flexWrap='wrap'
          flexDir='row'
          justifyContent='center'
          alignItems='center'
          rowGap='110px'>
          <Box className='doughnut-small'></Box>
          <Box className='doughnut-big'></Box>
          <Box className='doughnut-small'></Box>
        </Flex>

        <Flex
          className='start-your-journey'
          flexWrap='nowrap'
          flexDir='row'
          justifyContent='center'
          alignItems='center'>
          <Text fontSize='4xl' fontWeight={700} whiteSpace='nowrap' marginRight={100}>
            Start Your Journey
          </Text>
          <InputGroup>
            <Input
              height='65px'
              type='text'
              placeholder={`Your email address`}
            />
            <InputRightElement width={170} height='100%'>
              <Button
                height='100%'
                width='100%'
                onClick={() => null}>
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    )
  }
}

export default NewsletterSection