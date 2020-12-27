import Head from 'next/head';
import { Button, Heading, Box, Text, Code, Icon, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import FastFeedbackLogo from '@/components/Icons/FastFeedbackLogo';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();
  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />;
};

export default Dashboard;
