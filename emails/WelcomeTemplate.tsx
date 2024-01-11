import React, { CSSProperties } from 'react';
import { Tailwind } from '@react-email/components';
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';

type Props = {};

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview className='bg-white'>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className='font-bold text-3xl'>Hello {name}</Text>
            <Link href='https://samdeeshinfo.web.app'>Samdeesh Portfolio</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: '#fff',
};

const heading: CSSProperties = {
  fontSize: '32px',
};

export default WelcomeTemplate;
