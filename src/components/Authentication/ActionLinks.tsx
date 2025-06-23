import React from 'react';

const ActionLinks: React.FC = () => {
  return (
    <p className="text-center text-sm text-foreground">
      {"Don't have an account? "}
      <a href="#" className="font-semibold text-primary hover:underline">
        SignUp
      </a>
    </p>
  );
};

export default ActionLinks;
