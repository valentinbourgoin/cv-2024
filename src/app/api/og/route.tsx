import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET() {
  return new ImageResponse(
    (
        <div
        style={{
          backgroundImage: "linear-gradient(135deg, #685762 20%, #190B28 80%)",
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div style={{margin: "0 auto", fontSize: 150}}>✊</div>
      
      </div>
      
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}