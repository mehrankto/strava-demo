import Head from 'next/head'
const client_id = 103334;
const redirect_uri = "http://localhost:3000/api/strava/oauth" 
// const redirect_uri = "https://nooyanclub.ir/api/strava/oauth" 
const scope = "read_all,activity:read_all,profile:read_all"
const strava_oauth = `http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&approval_prompt=force&scope=${scope}`
export default function Home() {
  return (
    <>
      <Head>
        <title className=''>Strava Test App</title>
      </Head>
      <div className='container mx-auto w-full min-h-screen flex flex-col items-center py-12 px-6'>
        <div className='basis-1/3 grow flex flex-col justify-center items-center text-5xl font-black'>
          Welcome to
          <span className='text-orange-600'>Strava Xplore</span>
        </div>
        <div className='basis-1/2 grow'>
          <a href={strava_oauth} 
            className='block rounded-lg px-10 py-4 bg-orange-600 hover:bg-orange-700 text-orange-100 font-bold'>
            Login with Strava
          </a>
        </div>
      </div>
    </>
  )
}
