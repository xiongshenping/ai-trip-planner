"use client";
import { useAuth } from "react-oidc-context";
import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useRouter } from 'next/navigation';


const LoginBar = ({currentURL}) => {

  const auth = useAuth();
  const router=useRouter()
  console.log('auth:', JSON.stringify(auth.user))
  const signOutRedirect = () => {
    auth.removeUser();
    const clientId = "3e8mco70n2u93o8okhbsoam66c";
    const logoutUri = currentURL;
    const cognitoDomain = "https://ca-central-1dmvfkyuqz.auth.ca-central-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const handleUser=()=>{
    router.push(`/user/${auth.user?.profile.sub}`)

  }

  if (auth.isAuthenticated) {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center',cursor:'pointer' }} onClick={handleUser}>
        <UserAddOutlined />
        <div style={{ padding: '0 10px' }}>{auth.user?.profile.email}</div>
        </div>
        <Button onClick={() => signOutRedirect()} type="" size="large">
          Sign out
        </Button>
      </div>
    );
  }
  return (

      <Button
        onClick={() => auth.signinRedirect()}
        type="primary"
        size="large"
      >
        Sign In
      </Button>


  );
};
export default LoginBar;
