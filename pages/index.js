import Head from 'next/head';
import { Button, Heading, Box, Text, Code, Icon, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import FastFeedbackLogo from '@/components/Icons/FastFeedbackLogo';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>Fast Feedback</Heading>
      <FastFeedbackLogo boxSize={12} name="logo" />

      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
