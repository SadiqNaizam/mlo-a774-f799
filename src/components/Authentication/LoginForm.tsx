import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import PrimaryButton from './PrimaryButton';
import ActionLinks from './ActionLinks';

// Define the form schema using Zod for validation
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    setIsLoading(true);
    console.log('Form submitted with values:', values);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      // Reset form or navigate user on success
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md bg-card shadow-lg rounded-lg">
      <CardHeader className="text-center p-8">
        <CardTitle className="text-3xl font-bold text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="bg-transparent border-0 border-b border-input rounded-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary shadow-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        className="bg-transparent border-0 border-b border-input rounded-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary shadow-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-left text-sm">
              <a href="#" className="text-foreground hover:text-primary hover:underline">
                Forgot Password
              </a>
            </div>

            <PrimaryButton type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </PrimaryButton>
          </form>
        </Form>
        
        <div className="mt-8">
           <ActionLinks />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
