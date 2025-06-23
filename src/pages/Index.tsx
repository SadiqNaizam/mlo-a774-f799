import * as React from 'react';
import LoginForm from '@/components/Authentication/LoginForm';
import LoginLayout from '@/components/layout/LoginLayout';

/**
 * IndexPage serves as the main entry point for the login screen.
 * It utilizes a LoginLayout to center the LoginForm component on the page.
 */
const IndexPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default IndexPage;
