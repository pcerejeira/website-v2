import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/index-03');
  }, []);

  return null; // Since you're redirecting, you don't need to render anything
};

export default Index;
